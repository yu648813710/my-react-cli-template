import React from 'react'
import ReactDOM from 'react-dom'
import Router from './src/index'

const AppDom = document.getElementById('app')

const Render = function () {
  ReactDOM.render(
    (<Router />),
    AppDom,
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
