<template>
  <div class="model-group">
    <!-- <h2>EverAPI Demo</h2> -->
    <div id="root" style="width: 1300px; height: 800px;" />
  </div>
</template>

<script>
// 路径应该写public下路径，而不是绝对路径或相对路径
// import { EverAPI } from 'https://evercraft.co/api/everapi.js' //  <!-- 引入 EverAPI 脚本文件 -->

export default {
  data: function() {
    return {
      rotation: []
    }
  },
  created() {
    // 配置文件 https://evercraft.co/docs/everapi/%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD.html
    const config = {
      cache: {
        enabled: true,
        key: 'ciwa730_kuan/ciwa730_kuan.obj',
        database: 'EverAPI_Models'
      },
      background: {
        color: '#35415E',
        opacity: 1
      },
      logo: {
        right: '8px', // 距右边 40px
        bottom: '8px', // 距底边 100px
        width: '40px', // logo 宽度，小于 40px 为 40px
        src: 'https://img95.699pic.com/photo/40011/0709.jpg_wh860.jpg', // 修改为公司logo
        href: 'http://47.111.11.212/'
      }
      // toolbar: {
      //   visible: true,
      //   modules: {
      //     tree: {
      //       visible: true,
      //       label: '结构树',
      //     },
      //   }
      // }
    }
    // api 是否已经加载成够的标志位
    let apiLoaded = false

    // 新建 api 实例
    // 构造函数的前两个参数分别是 AppID 和 AppKey，这里的参数可用于本地 localhost:9000 调试
    // const api = new EverAPI('6103ec4a2189', 'cc239b39cd09383aba9b1310db8cf334', config)
    // 线上ID（下行使用时许把上面一行注释）
    const api = new EverAPI('033fd2d77bf8', '485e2f93e538f4a173ea28c17c6044a0', config)

    // api 加载成功后调用 loadApi 函数
    window.addEventListener('oneverapiloaded', () => {
      // 路径应该写public下路径，而不是绝对路径或相对路径
      const files = [
        // { path: 'ciwa730_kuan/ciwa730_kuan.obj', name: 'ciwa730_kuan' },
        // { path: 'ciwa730_kuan/ciwa730_kuan.mtl', name: 'ciwa730_kuan' },
        // { path: 'ciwa730_kuan/ciwa730_kuan.jpg', name: 'ciwa730_kuan.jpg' }
        { filename: 'ciwa730_kuan.obj', url: 'ciwa730_kuan/ciwa730_kuan.obj' }
      ]
      // console.log(files)
      api.render('root', files)
      apiLoaded = true
    })
  },
  methods: {
  }
}
</script>
<style scoped>
.model-group{
  border: 2px #000;
  box-shadow:0px 0px 10px #000;
  padding: 10px

}
</style>
