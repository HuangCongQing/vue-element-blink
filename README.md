<!--
 * @Description: 
 * @Author: HCQ
 * @Company(School): UCAS
 * @Date: 2020-07-13 22:06:21
 * @LastEditors: HCQ
 * @LastEditTime: 2020-07-30 17:20:50
--> 
# vue-element-blink
博灵（Blink)科技Web

@[双愚](https://github.com/HuangCongQing/vue-element-blink) 项目基于[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)开发

## 技术栈

* 前端：vue-element-admin
* 后端(接口)：Python/egg.js(node.js) + MySQL



## Todo List

* [x] axios接口打通
* [ ] 权限管理
* [ ] 丰富图表展示
    * [x] (字段 | 全局)搜索 
    * [x] 选择时间段展示
    * [ ] Export(导出）pdf/excel/zip
* [ ] 部署发布npm run build:prod 【error】
* [ ] 实时1min刷新数据库
* [ ] 三维展示磁瓦obj格式
* [ ] 界面美观度 布局


## 前序准备(软件安装)

* 本地需安装： [node](http://nodejs.org/) 、[git](https://git-scm.com/) 和 [mysql (目前暂时不需要)](https://www.mysql.com/)。

* 学习了解：本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 、 [element-ui](https://github.com/ElemeFE/element) ，提前了解和学习这些知识会对使用本项目有很大的帮助。



## 开发

```bash
# 克隆项目
git clone https://github.com/HuangCongQing/vue-element-blink.git

# 进入项目目录
cd vue-element-blink

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```
## 界面效果

![效果图](https://cdn.nlark.com/yuque/0/2020/png/232596/1595504200539-5e4f62ec-4320-4168-8832-88c298aeb7e7.png)



## License

[MIT](https://github.com/HuangCongQing/vue-element-blink/blob/master/LICENSE)

Copyright (c) 2020-present [双愚](https://github.com/HuangCongQing/vue-element-blink)
