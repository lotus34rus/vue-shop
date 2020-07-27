import api from '@/services/api'

export default {
  fetchProducts () {
    return api().get('products')
  }
}