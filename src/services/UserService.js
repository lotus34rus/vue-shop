import api from '@/services/api'

export default {
    userAuth (data) {
    return api().post('auth', data)
  }
}