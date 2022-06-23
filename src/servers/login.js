import axios from 'axios'

export const login = (data) => axios.post('https://jcss.shuyun.com/governor-service/v1/auth/login', {
  ...data,
  appId: 8,
})
