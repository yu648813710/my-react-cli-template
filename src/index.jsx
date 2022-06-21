import React from 'react'
import 'cloud-react/cloud-react.css'
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import Home from './page/home'
import List from './page/list'

export default () => {
  return (
    <HashRouter>
      <div>
        <Link to="/"><button>首页</button></Link>
        <Link to="/users"><button>列表</button></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<List />} />
      </Routes>
    </HashRouter>)
}
