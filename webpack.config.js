// 创建webpack配置文件

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // html插件
const webpack = require('webpack') // 默认全局变量

// 抽取css成单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 压缩css用的
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const exportENV = (env) => {
  const currentENV = require(`${path.resolve(__dirname, 'env') }/${ env || 'index' }.js`)
  return currentENV
}


// 导出配置
module.exports = (env, args) => {
// prd 模式
  const cssTypePrd = args.env.css === 'prd'

  return {
    entry: './app.tsx', // 入口文件
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
          test: /\.(jsx|tsx|js|ts)?$/, // 处理es6语法以及jsx语法
          loader: 'babel-loader',
          include: [
            path.resolve(__dirname, 'src'), // 使用目录
            path.resolve(__dirname, 'app.tsx'), // 使用文件
          ],
        },
        {
          test: /\.(c|le)ss$/i,
          use: [
            !cssTypePrd ? 'style-loader' : MiniCssExtractPlugin.loader, // 抽取css文件 'style-loader', // 解决css插入dom问题 这个判断是为了解决两个不能同时使用的问题
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]', // 解决 css冲突问题, 比较齐全的配置看文档 https://webpack.docschina.org/loaders/css-loader/#modules
                },
              },
            }, // 解决 import 引入css问题
            'less-loader', // 预处理
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }, // 文件处理
      ],
    },
    plugins: [ // 插件管理
      // 静态文件插入
      new HtmlWebpackPlugin({
        title: 'React 脚手架',
        template: path.resolve(__dirname, 'public/index.html'), // 静态文件
      }),
      // 环境变量处理
      new webpack.DefinePlugin({
        GLOBAL_ENV: JSON.stringify(exportENV(env.model)),
      }),
      // 热处理
      new webpack.HotModuleReplacementPlugin(),
    ].concat(
      cssTypePrd ? [new MiniCssExtractPlugin()] : [],
    ), // 抽取css文件
    optimization: {
      minimize: true, // 允许优化
      minimizer: [
        new CssMinimizerPlugin(), // 压缩css
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.json', '.js'], // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    },
  }
}
