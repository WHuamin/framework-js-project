# framework-js-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 代码检测（ESLint + husky）
### eslint的配置文件
```
.eslintrc.js
对 ESLint 进行配置

.eslintignore
在项目根目录中添加 【.eslintignore】文件,排除不检查的文件夹
```

### husky
```
安装 npm i husky -D
初始化 npx husky install

执行添加husky脚本的命令 
npx husky add  .husky/pre-commit "npm run lint" 
或者 npx husky add  .husky/pre-commit 生成pre-commit 文件， 添加脚本：npm run lint
配置package.json "prepare":"husky install"
```