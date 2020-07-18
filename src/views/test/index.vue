<template>
  <!-- 新闻列表 -->
  <div class="news">
    <h2>今日热闻</h2>
    <ul class="index-list">
      <li v-for="item in list" :key="item.id" />
    </ul>
  </div>
</template>

<script>
import { testList } from '@/api/test'
// import axios from 'axios'

export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
    // const _this = this
    // axios.get('/api/4/news/latest')
    //   .then(function(res) {
    //     _this.toplist = res.data.top_stories
    //     _this.list = res.data.stories
    //     console.log(_this.list)
    //   })
    //   .catch(function(error) {
    //     console.log(error)
    //   })
  },
  methods: {
    fetchData() {
      this.listLoading = true
      testList().then(res => {
        this.list = res.data.stories
        console.log('aaaaaaaaaaaaaaaaaaaaa')
        console.log(this.list)
        this.listLoading = false
      })
    }
  }
}
</script>

<style type="text/css" scoped>
	/*@import '../assets/css/componets/NewsList.less';*/
	/*新闻列表*/
  .news {
    background-color: #f2f2f2;
  }
  .news h2{
    font-size: 0.3rem;
    line-height: 0.9rem;
    padding-left: 0.3rem;
  }
  .index-list {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  .index-list li {
    display: -webkit-flex;
    display: -moz-flexbox;
    display: flex;
    flex-flow: row nowrap;
    /*justify-content: space-between;*/
    align-items: space-around;
    background-color: #fff;
    padding: 0.24rem;
    margin-bottom: 0.2rem;
    border-radius: 0.1rem;
  }
  .index-list p {
    display: inline-block;
    font-size: 0.34rem;
    margin-right: 0.12rem;
    width: 6rem;
    line-height: 0.4rem;
  }
  .index-list img {
    width: 1.2rem;
    height: 1.2rem;
  }
  .index-list span {
    position: absolute;
    bottom: 0.26rem;
    right: 0.3rem;
    background-color: rgba(0,0,0,.7);
    font-size: 0.2rem;
  }
</style>
