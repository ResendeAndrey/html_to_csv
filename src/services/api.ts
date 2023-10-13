import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pkgstore.datahub.io'
})

export default api