/**
 * eslint配置文件
 */
module.exports = {
  root: true,
  // 设定解析器
  parser: 'babel-eslint',
  // 设置js语言的解析配置
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  // 指定开发环境，配置全局变量
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  // 继承规则
  extends: 'standard',
  rules: {
    // 去掉function和()之前的空格
    'space-before-function-paren': ['error', 'never']
  }
}
