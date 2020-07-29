import UserService from "../services/UserService"

export default {
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
    },

    actions: {
        AUTH_REQUEST: ({ commit, dispatch }, user) => {
            return new Promise((resolve, reject) => { // Промис используется для редиректа на главную после авторизации
                commit("AUTH_REQUEST")
                const response = UserService.userReg(user)
                    .then(resp => {
                        const token = resp.data.token;
                        console.log(token);
                        localStorage.setItem('user-token', token) // Устанавливаем токен в localstorage
                        commit("AUTH_SUCCESS", token)               //Меняем статус через мутацию
                        resolve(resp)
                    })
                    .catch(err => {
                        commit("AUTH_ERROR", err)
                        localStorage.removeItem('user-token') // Если произошла ошибка удалим все токены , которые есть в localstorage
                        console.log(err)
                    })
            })
        },

        AUTH_LOGOUT: ({ commit, dispatch }) => {
            return new Promise((resolve, reject) => {
                commit("AUTH_LOGOUT")
                localStorage.removeItem('user-token') // удалим все токены , которые есть в localstorage
                resolve()
            })
        },


        getUserInfo: async (state, token) => {
            try {
                const userInfo = await UserService.fetchUserInfo(token) //Получаем данные из mongoDB
                                 .then(user=>{
                                     return Promise.resolve( user.data );
                                 })
                                 
                return userInfo;
            } catch (e) {
                throw e;
            }

        }




    },

    mutations: {

        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
        AUTH_LOGOUT: (state) => [
            state.status = '',
            state.token = ''
        ]

    },

    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,

    }
}