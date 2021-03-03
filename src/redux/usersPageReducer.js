import { UserAPI } from "../dal/axios";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const USERS_INIT = 'USERS_INIT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const START_FETCHING = 'START_FETCHING';
const STOP_FETCHING = 'STOP_FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

let initialState = {
    Users: [
        //     { id: 1, name: 'Vasya', followed: true, status: 'Black lives matter', location: { country: 'Belarus', city: 'Minsk' } },
        //     { id: 2, name: 'Kolya', followed: false, status: 'Everyone can be everybody', location: { country: 'Ukraine', city: 'Kyiv' } },
        //     { id: 3, name: 'Petya', followed: false, status: 'I am drunk :p', location: { country: 'Russia', city: 'Moscow' } },
        //     { id: 4, name: 'Masha', followed: true, status: 'Frag everything that isn"t You', location: { country: 'USA', city: 'New-York' } }
    ],
    count: 50,
    currentPage: 1,
    totalCount: 500,
    isFetching: false,
    followingUsersForDisable: [],
}

let usersPageReduce = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                Users: state.Users.map(u =>
                    u.id === action.user_id ? { ...u, followed: true } : u
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                Users: state.Users.map(u =>
                    u.id === action.user_id ? { ...u, followed: false } : u
                )
            }
        case USERS_INIT:
            return {
                ...state,
                Users: [...action.users]
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false
            }
        case FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followingUsersForDisable: action.isInProgress
                    ? [...state.followingUsersForDisable, action.userId]
                    : state.followingUsersForDisable.filter(id => id !== action.userId)
            }
        default: return state;
    }
}

export let follow = (user_id) => ({ type: FOLLOW, user_id: (user_id) });
export let unfollow = (user_id) => ({ type: UNFOLLOW, user_id: (user_id) });
export let initUsers = (users) => ({ type: USERS_INIT, users: (users) });
export let changeCurrentPage = (currentPage) => ({ type: CHANGE_CURRENT_PAGE, currentPage });
export let setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export let startFetching = () => ({ type: START_FETCHING });
export let stopFetching = () => ({ type: STOP_FETCHING });
let toggleFollowingProgress = (isInProgress, userId) => ({ type: FOLLOW_IN_PROGRESS, isInProgress, userId });

export const getUsersTC = (page, count) => {
    return (dispatch) => {
        dispatch(startFetching());
        UserAPI.getUsers(page, count).then(response => {
            dispatch(initUsers(response.items));
            dispatch(changeCurrentPage(page));
            dispatch(setTotalCount(response.totalCount));
            dispatch(stopFetching());
        });
    }
}
export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UserAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(userId));
                dispatch(toggleFollowingProgress(false, userId));
            } else {
                setTimeout(dispatch(toggleFollowingProgress(false, userId)), 3000)
            }
        }
        )
    }
}
export const unfollowTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UserAPI.unfollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollow(userId));
                dispatch(toggleFollowingProgress(false, userId));
            } else {
                setTimeout(dispatch(toggleFollowingProgress(false, userId)), 1000)
            }
        }
        )


    }
}

export default usersPageReduce;