import axios from "axios"

export default {
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
    },

    actions: {
        [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
            return new Promise((resolve, reject) => { // Промис используется для редиректа на главную после авторизации
                commit(AUTH_REQUEST)
                axios({ url: 'auth', data: user, method: 'POST' }) // Данный запрос надо обработаьт на стороне Node.js
                    .then(resp => {
                        const token = resp.data.token
                        localStorage.setItem('user-token', token) // Устанавливаем токен в localstorage
                        commit(AUTH_SUCCESS, token)               //Меняем статус через мутацию
                        dispatch(USER_REQUEST)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit(AUTH_ERROR, err)
                        localStorage.removeItem('user-token') // Если произошла ошибка удалим все токены , которые есть в localstorage
                        reject(err)
                    })
            })
        },

        [AUTH_LOGOUT]: ({ commit, dispatch }) => {
            return new Promise((resolve, reject) => {
                commit(AUTH_LOGOUT)
                localStorage.removeItem('user-token') // удалим все токены , которые есть в localstorage
                resolve()
            })
        }



    },

    mutations: {

        [AUTH_REQUEST]: (state) => {
            state.status = 'loading'
        },
        [AUTH_SUCCESS]: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        [AUTH_ERROR]: (state) => {
            state.status = 'error'
        },

    },

    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
    }
}