import api from '@/services/api'

export default {
  userReg (data) {
    return api().post('registration', data)
  },

  fetchUserInfo(token){
    return api().get(`/user/${token}`)
  }
}