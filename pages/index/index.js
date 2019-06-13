//index.js Page()来注册一个页面
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['Flex', 'scroll-view', 'swiper', 'movable-view']
      },
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['Text', 'Article', 'Footer', 'grid']
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['Text', 'Article', 'Footer', 'grid']
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['Text', 'Article', 'Footer', 'grid']
      },
      {
        id: 'search',
        name: '搜索相关',
        open: false,
        pages: ['Text', 'Article', 'Footer', 'grid']
      },
      {
        id: 'echarts',
        name: 'Echarts图表',
        open: false,
        pages: ['Text', 'Article', 'Footer', 'grid']
      }
    ]
  }
})
