import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/index';

const APPDOM = document.getElementById('app')

const Render = function () {
  console.log(1)
  ReactDOM.render(
      (<Home/>),
      APPDOM
    )
}
// 第一次出现要加载
Render()
// 后面的热加载

if(module.hot) {
  module.hot.accept('./src/index', () => {
    Render()
  })
}