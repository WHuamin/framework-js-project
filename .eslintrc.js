module.exports = {
  root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
  env: {
    node: true, // Node.js全局变量和Node.js范围。
    browser: true, // 设置为所需检查的代码是在浏览器环境运行的
    es6: true // 设置所需检查代码为 es6 语法书写
  },
  extends: [ // 扩展使用 vue 检查规则和eslint推荐规则
    'plugin:vue/essential', // 基本的校验
    '@vue/standard' // 初始化配置中选择的代码风格
  ],
  parserOptions: {
    parser: '@babel/eslint-parser' // 采用 @babel/eslint-parser 作为语法解析器
  },
  rules: {
    // 正式环境不允许出现 console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 正式环境不允许出现 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 0的意思是off关闭，1是warning警告，2是error 报错

    // never 表示每一个语句结束之后不需要使用分号，如果语句之后有分号，会提示出错误
    semi: 0,
    'no-alert': 0, // 禁止使用alert confirm prompt
    'no-multi-spaces': 1 // 不能用多余的空格
  }
}
