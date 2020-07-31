const Mock = require('mockjs')

// const List = []
// const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     id: '@increment',
//     timestamp: +Mock.Random.date('T'),
//     author: '@first',
//     reviewer: '@first',
//     title: '@title(5, 10)',
//     content_short: 'mock data',
//     content: baseContent,
//     forecast: '@float(0, 100, 2, 2)',
//     importance: '@integer(1, 3)',
//     'type|1': ['CN', 'US', 'JP', 'EU'],
//     'status|1': ['published', 'draft'],
//     display_time: '@datetime',
//     comment_disabled: true,
//     pageviews: '@integer(300, 5000)',
//     image_uri,
//     platforms: ['a-platform']
//   }))
// }
const List = [
  Mock.mock({
    id: '1',
    timestamp: '1591015491',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '2',
    timestamp: '1591015666',
    title: 'A', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '3',
    timestamp: '1591015777',
    title: 'C', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '4',
    timestamp: '1591015888',
    title: 'C', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '5',
    timestamp: '1591015999',
    title: 'B', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '气孔', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '外弧面', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 0, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '6',
    timestamp: '1591016000',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '7',
    timestamp: '1591016111',
    title: 'A', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '8',
    timestamp: '1591016222',
    title: 'C', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '9',
    timestamp: '1591016222',
    title: 'C', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '凸点', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '崩缺', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: '0', // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '10',
    timestamp: '1591016222',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '11',
    timestamp: '1591016222',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '12',
    timestamp: '1591016333',
    title: 'A', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '13',
    timestamp: '1591016444',
    title: 'B', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '14',
    timestamp: '1591016555',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '15',
    timestamp: '1591016666',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '16',
    timestamp: '1591016788',
    title: 'C', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  ['0', '外弧面', '纵切面', '顶角', '内弧面', '端面'],
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '17',
    timestamp: '1591016888',
    title: 'B', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '18',
    timestamp: '1591016999',
    title: 'A', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '19',
    timestamp: '1591017111',
    title: 'C', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '20',
    timestamp: '1591017222',
    title: 'D', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  }),
  Mock.mock({
    id: '21',
    timestamp: '1591017333',
    title: 'A', // 3  CiwaType  查询
    author: 'D001', // 4 MachineNum
    importance: 'SB2020B006', // 5 MaterialNum
    pageviews: '0', // Readings 6 DefectType  查询 ['0', '崩缺', '气孔', '凸点', '欠磨', '裂纹', '结晶']
    DefectPos: '0', // 7 DefectPos  查询  0 外弧面 纵切面  顶角  内弧面 端面
    Accepted: 1, // 8 Accepted 1
    reviewer: '@first',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    image_uri,
    platforms: ['a-platform']
  })
]
module.exports = [
  {
    url: '/vue-element-admin/article/list', //  文章列表
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => { // List
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/detail', //  文章内容
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

