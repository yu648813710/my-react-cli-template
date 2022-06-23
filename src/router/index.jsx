import React, { useEffect } from 'react'
import 'cloud-react/cloud-react.css'
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Headers from "@components/Headers"
import Nav from "@components/Navs"
import { hashHistory, isLogin } from "./history"

import Home from '../page/home'
import List from '../page/list'
import Login from '../page/login'

import styles from './index.less'

export default () => {
  useEffect(() => {
    isLogin(hashHistory)
  }, [])

  return (
    <HistoryRouter history={hashHistory}>
      <div className={styles.headers}>
        <Headers />
      </div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<List />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </HistoryRouter>)
}
