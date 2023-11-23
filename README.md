# Vue3Vite

### 介绍 📖

Vue3Vite 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。

### 代码仓库 ⭐

- Gitee：待完善
- GitHub：https://github.com/ViolentCoding/Vue3Vite

### 文件资源目录 📚

```
Vue3Vite
├─ .env
├─ .env.development
├─ .env.production
├─ .eslintignore
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettier.cjs
├─ .prettierignore
├─ README.md
├─ build
│  └─ getEnv.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ src
│  ├─ App.vue
│  ├─ assets
│  ├─ components
│  ├─ main.ts
│  ├─ router
│  ├─ typings
│  └─ views
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

### 部分配置介绍 🍵

"husky": "^8.0.3", # husky是一个用来管理git hook的工具，git hook即在我们使用git提交代码的过程中会触发的钩子 配合lint-staged使用
"lint-staged": "^15.1.0", # lint-staged 是一个专门用于在通过 git 提交代码之前，对暂存区的代码执行一系列的格式化
"stylelint": "^15.11.0", # 为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等...
"postcss": "^8.4.31", # 转换css代码工具
"postcss-html": "^1.5.0",# 识别html/vue 中的<style></style>标签中的样式
"stylelint-config-html": "^1.1.0", # 配置 vue 中 template 样式格式化
"stylelint-config-recess-order": "^4.4.0", # 配置 stylelint css 属性书写顺序插件,
"stylelint-config-recommended-scss": "^13.1.0", # 配置 vue 中 scss 样式格式化
"stylelint-config-recommended-vue": "^1.5.0", # 配置 vue 中 template 样式格式化
"stylelint-config-standard": "^34.0.0", # 配置 stylelint 拓展插件
"stylelint-config-standard-scss": "^11.1.0", # 配置 stylelint scss 插件
