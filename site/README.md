## 项目说明
### 项目启动
依次执行以下命令，启动完成后，有成功与失败提示；
```sh
# 全局安装包
$ npm install -g gulp webpack webpack-dashboard eslint scss-lint
# 启动服务
$ npm start

#
# 如果 不能正常工作， 使用如下命令代替
#
$ npm run dev
```
## 浏览器中查看启动是否成功
[http://localhost:9008/](http://localhost:9008/)
## 编辑查看代码
### Atom 编辑器
可以使用 Setting －> install , 或者使用 apm 命令安装；
*其中 scss-lint 工具需要 ruby 环境，windows 使用 rubyinstaller 安装，mac 自带ruby环境*
```sh
# 成功安装ruby 后执行
$ gem install scss_lint
```
**安装如下插件：**
* [language-vue](https://atom.io/packages/language-vue) Vue 组件开发，.vue 文件支持
* [language-babel](https://atom.io/packages/language-babel) ES6，jsx 语法 支持
* [editorconfig](https://atom.io/packages/editorconfig) 统一编辑器配置
* [linter-eslint](https://atom.io/packages/linter-eslint) js 代码检查工具
* [linter-scss-lint](https://atom.io/packages/linter-scss-lint) scss 代码检查工具

##
