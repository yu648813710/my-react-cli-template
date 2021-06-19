import React from 'react'
import ReactDOM from 'react-dom'
import Home from './src/index'
import { AppContainer } from 'react-hot-loader' // 热加载

const APPDOM = document.getElementById('app')

const Render = function () {
  ReactDOM.render(
    (<AppContainer><Home /></AppContainer>),
    APPDOM,
  )
}

// 第一次出现要加载
Render()
// 后面的热加载

if (module.hot) {
  module.hot.accept('./src/index', () => {
    Render()
  })
}
