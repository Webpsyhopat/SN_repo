const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const USERS_INIT = 'USERS_INIT';

let initialState = {
    Users: [
    //     { id: 1, name: 'Vasya', followed: true, status: 'Black lives matter', location: { country: 'Belarus', city: 'Minsk' } },
    //     { id: 2, name: 'Kolya', followed: false, status: 'Everyone can be everybody', location: { country: 'Ukraine', city: 'Kyiv' } },
    //     { id: 3, name: 'Petya', followed: false, status: 'I am drunk :p', location: { country: 'Russia', city: 'Moscow' } },
    //     { id: 4, name: 'Masha', followed: true, status: 'Frag everything that isn"t You', location: { country: 'USA', city: 'New-York' } }
    ]
}

let usersPageReduce = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                Users: state.Users.map(u => 
                    u.id === action.user_id
                        ? { ...u, followed: true }
                        : u
                
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                Users: state.Users.map(u => 
                    u.id === action.user_id
                        ? { ...u, followed: false }
                        : u
                
                )
            }
        case USERS_INIT:
            return {
                ...state,
                Users: [...action.users]
            }
        default: return state;
    }
}

export let followAC = (user_id) => ({ type: FOLLOW, user_id: (user_id) });
export let unfollowAC = (user_id) => ({ type: UNFOLLOW, user_id: (user_id) });
export let initUsersAC = (users) => ({ type: USERS_INIT, users: (users)})

export default usersPageReduce;