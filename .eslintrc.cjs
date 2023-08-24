const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: { browser: true, node: true, es6: true },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended'],
  // "off"或0- 关闭规则
  // "warn"或1- 打开规则作为警告（不影响退出代码）
  // "error"或2- 将规则作为错误打开（触发时退出代码为 1）
  rules: {
    'array-bracket-newline': ['error', 'consistent'], // 数组换行
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'], //是否允许非空数组里面有多余的空格
    'arrow-parens': ['error', 'as-needed'], // 箭头函数的圆括号非必要可省略
    'arrow-spacing': ['error'], // 箭头函数前后空格

    'curly': 'error', // 必要使用大括号包裹代码
    'comma-spacing': ['error', { before: false, after: true }], // 逗号前不带空格，逗号后带空格
    'comma-style': ['error', 'last'], // 换行时，逗号放在行尾
    'camelcase': ['error', { properties: 'always', ignoreDestructuring: true }], // 驼峰,解构时忽略

    'eqeqeq': 'error', // 使用 === 和 !==
    'indent': ['error', 2, { SwitchCase: 1 }], // 两个空格缩进
    'key-spacing': ['error'], // 对象属性冒号前不加空格，冒号后加空格
    'keyword-spacing': ['error'], // 关键字前后使用一致的空格

    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }], //链式调用时深度超过2强制换行
    'object-curly-spacing': ['error', 'always'], // 对象花括号要空格
    'quotes': ['error', 'single', { allowTemplateLiterals: true }], // 单引号为主，字符串可使用``
    'quote-props': ['warn', 'consistent'], // 对象属性要么全部用引号，要么都不用
    'semi': ['error', 'always', { omitLastInOneLineBlock: true }], // 必要的分号，花括号除外
    'semi-style': ['error', 'last'], //分号位于句末
    'space-infix-ops': ['error', { 'int32Hint': false }], // 操作符周围有空格
    'space-before-blocks': ['error', 'always'], //不以新行开始的块{前面要不要有空格
    // 各种函数括号前的空格
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],

    'no-var': 'error', // 推荐const/let
    'no-const-assign': 'error', //禁止修改const声明的变量
    'no-cond-assign': 'error', // 禁止在条件语句中出现赋值操作符
    'no-constant-condition': 'error', // 禁止在条件中使用常量表达式
    'no-dupe-args': 'error', // 禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-global-assign': 'error', // 禁止对原生对象或只读的全局对象进行赋值
    'no-multi-spaces': 'error', // 禁止出现多个空格
    'no-irregular-whitespace': 'error', // 禁止出现多个空格
    'no-trailing-spaces': 'error', //一行结束后面不要有空格
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // 不要空行
    'no-sequences': 'error', //禁止使用逗号运算符
    'no-unneeded-ternary': 'error', //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', },
    ],

    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
    'vue/multi-word-component-names': 'off', // 忽略组件名
    'vue/script-setup-uses-vars': 'error', // import组件名不被标记未使用
    'vue/custom-event-name-casing': 'off', // emit事件不必驼峰命名，vue3推荐kebab-case命名
    'vue/attributes-order': 'off', // 属性无需排序
    'vue/v-on-event-hyphenation': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-multi-spaces': 'error', // 禁止出现多个空格
    // 属性换行规则：单行不换，多行换
    'vue/first-attribute-linebreak': ['error', { singleline: 'ignore', multiline: 'below' }],
    // 属性每行个数：单行最大3，多行1
    'vue/max-attributes-per-line': ['error', { singleline: { max: 3 }, multiline: { max: 1 } }],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [ // html结构尽量自闭合
      'error',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      }
    ],
  },
});
