import request from '@/utils/request'

export function testList() {
  return request({
    url: '/api/3/news/latest',
    // url: '/ciwa',
    method: 'get'
    // baseURL: 'http://news.at.zhihu.com' // 直接通过覆盖的方式
  })
}
