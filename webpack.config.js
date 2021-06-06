// 创建webpack配置文件

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html插件
const webpack = require('webpack'); // 默认全局变量



const exportENV = (env) => {
  const currentENV = require(path.resolve(__dirname, 'env') + '/' + (env ? env : 'index') + '.js')
  return currentENV;
}


// 导出配置
module.exports = env => {
  console.log("🚀 ~ file: webpack.config.js ~ line 9 ~ env", env)

  return {
    entry: './app.js', // 入口文件
    output: {
      filename: 'index.js', // 打包名称
      path: path.resolve(__dirname, 'dist'), // 打包路径
      clean: true, // 每次清除dist文件夹
    },
    mode: 'development',
    devServer: { // 开发配置
      contentBase: './dist', // 要启动服务的文件夹
      hot: true, // 模块热替换
    },
    devtool: 'eval', // 开启原始文件打印 相关配置在这里看 https://webpack.docschina.org/configuration/devtool/
    module: {
      rules: [ // 配置加载器
        {
          test: /\.js?$/, // 处理es6语法以及jsx语法
          loader: 'babel-loader',
          include: [
            path.resolve(__dirname, 'src'), // 使用目录
            path.resolve(__dirname, 'app.js'), // 使用文件
          ],
        }
      ]
    },
    plugins: [ // 插件管理
      // 静态文件插入
      new HtmlWebpackPlugin({
        title: 'React 脚手架',
        template: path.resolve(__dirname, 'public/index.html'), // 静态文件
      }),
      // 环境变量处理
      new webpack.DefinePlugin({
          GLOBAL_ENV: JSON.stringify(exportENV(env.model))
      })
    ],
  }
}