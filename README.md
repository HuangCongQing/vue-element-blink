# vue-element-blink
博灵（Blink)科技Web

项目基于[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)开发

## 技术栈

* 前端：vue-element-admin
* 后端(接口)：Python/egg.js(node.js) + MySQL

## Todo List

* [x] axios接口打通
* [ ] 权限管理
* [ ] 丰富图表展示
    * [ ] (字段 | 全局)搜索 
    * [ ] 选择时间段展示
    * [ ] Export(导出）pdf/excel/zip




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


## License

[MIT](https://github.com/HuangCongQing/vue-element-blink/blob/master/LICENSE)

Copyright (c) 2020-present 双愚
