module.exports = {
  root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
  env: {
    node: true,
    browser: true, // 设置为所需检查的代码是在浏览器环境运行的
    es6: true // 设置所需检查代码为 es6 语法书写
  },
  extends: [ // 扩展使用 vue 检查规则和eslint推荐规则
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser' // 采用 @babel/eslint-parser 作为语法解析器
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
