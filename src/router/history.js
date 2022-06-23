import { createHashHistory } from "history"

export const hashHistory = createHashHistory({ window })

export const isLogin = (location) => {
  const token = window.localStorage.getItem('token');
  if (!token && location.location.pathname !== '/login') {
    hashHistory.replace('/login')
    // 重置页面刷新
    window.location.reload()
  }
  if (token && location.location.pathname === '/login') {
    hashHistory.replace('/')
    // 重置页面刷新
    window.location.reload()
  }
}

hashHistory.listen((location) => {
  isLogin(location)
})