import * as axios from 'axios';

let axiosParams = {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        // 'API-KEY': '6f3fb205-f3bb-4ff9-a41f-3fd20f5c4c75'
        'API-KEY': '259e0262-2a06-418b-9757-790c7751e9b0'
    },
    withCredentials: true
}

export let apiRequest = axios.create(axiosParams);

export let UserAPI = {
    getUsers(page, count) {
        return apiRequest.get('users?page=' + page + '&count=' + count)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return apiRequest.post('follow/' + userId).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return apiRequest.delete('follow/' + userId).then(response => {
            return response.data;
        })
    },
    getUserProfile(userId) {
        console.log('You are using an old method. Use ProfileAPI.getUserProfile instead');
        return ProfileAPI.getUserProfile(userId);

    }
}

export let ProfileAPI = {
    getUserProfile(userId) {
        return apiRequest.get('profile/' + userId).then(response => {
            return response.data;
        })
    },
    getProfileStatus(userId) {
        return apiRequest.get('profile/status/' + userId);
    },
    setProfileStatus(newStatus) {
        debugger;
        return apiRequest.put('profile/status/', { status: newStatus});
    }
}

export const AuthAPI = {
    me() {
        return apiRequest.get('auth/me').then(response => {
            return response.data;
        }
        )
    },
    login(email, password, rememberMe, captcha) {
        return apiRequest.post('auth/login', { email, password, rememberMe, captcha}).then(response => {
            return response.data;
        }
        )
    },
    logout() {
        return apiRequest.delete('auth/login').then(response => {
            return response.data;
        }
        )
    },
    getCaptcha(){
        return apiRequest.get('security/get-captcha-url');
    }
}
