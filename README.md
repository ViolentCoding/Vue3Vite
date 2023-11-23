# Vue3Vite

### 介绍 📖

Vue3Vite 一款基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。

### 代码仓库 ⭐

-   Gitee：待完善
-   GitHub：https://github.com/ViolentCoding/Vue3Vite

### 文件资源目录 📚

```
Vue3Vite
├─ .editorconfig            # 配置统一编辑器配置
├─ .env                     # 环境变量基础配置文件
├─ .env.development         # 开发环境变量配置文件
├─ .env.production          # 生产环境变量配置文件
├─ .eslintignore            # 忽略 Eslint 校验
├─ .eslintrc.cjs            # Eslint代码规范检查配置
├─ .gitignore               # 忽略 git 提交
├─ .husky                   # husky 配置文件
├─ .prettier.cjs            # 代码格式化配置
├─ .prettierignore          # 忽略 Prettier 格式化
├─ .stylelintignore         # 忽略 stylelint 格式化
├─ .stylelintrc.cjs         # css 样式代码格式化工具
├─ README.md                # README 介绍
├─ build                    # Vite 配置项
├─ commitlint.config.cjs    # git提交规范工具
├─ index.html               # 入口 html
├─ lint-staged.config.cjs   # git提交规范配置
├─ package-lock.json        # 依赖包包版本锁
├─ package.json             # 依赖包管理
├─ postcss.config.cjs       # postcss 配置
├─ public                   # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ App.vue
│  ├─ assets
│  ├─ components
│  ├─ main.ts
│  ├─ router
│  ├─ typings
│  └─ views
├─ tsconfig.app.json
├─ tsconfig.json            # typescript 全局配置
├─ tsconfig.node.json
└─ vite.config.ts           # vite 全局配置文件

```

### 部分配置介绍 🍵

-   "husky": "^8.0.3", # husky是一个用来管理git hook的工具，git hook即在我们使用git提交代码的过程中会触发的钩子 配合lint-staged使用
-   "lint-staged": "^15.1.0", # lint-staged 是一个专门用于在通过 git 提交代码之前，对暂存区的代码执行一系列的格式化
-   "stylelint": "^15.11.0", # 为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等...
-   "postcss": "^8.4.31", # 转换css代码工具
-   "postcss-html": "^1.5.0",# 识别html/vue 中的<style></style>标签中的样式
-   "stylelint-config-html": "^1.1.0", # 配置 vue 中 template 样式格式化
-   "stylelint-config-recess-order": "^4.4.0", # 配置 stylelint css 属性书写顺序插件,
-   "stylelint-config-recommended-scss": "^13.1.0", # 配置 vue 中 scss 样式格式化
-   "stylelint-config-recommended-vue": "^1.5.0", # 配置 vue 中 template 样式格式化
-   "stylelint-config-standard": "^34.0.0", # 配置 stylelint 拓展插件
-   "stylelint-config-standard-scss": "^11.1.0", # 配置 stylelint scss 插件
