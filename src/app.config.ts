export default {
  pages: [
    'pages/index/index',
    'pages/workBench/index',
    'pages/center/index',
    'pages/vehicleTeam/vehicleTeamList/index',
    'pages/vehicleTeam/vehicleList/index',
    'pages/vehicleTeam/vehicleAdd/index',
    'pages/vehicleTeam/driverList/index',
    'pages/vehicleTeam/driverAdd/index',
  ],
  tabBar: {
    list: [{
      'iconPath': 'image/home.png',
      'selectedIconPath': 'image/homeSelected.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'image/work.png',
      'selectedIconPath': 'image/workSelected.png',
      pagePath: 'pages/workBench/index',
      text: '工作台'
    }, {
      'iconPath': 'image/mine.png',
      'selectedIconPath': 'image/mineSelected.png',
      pagePath: 'pages/center/index',
      text: '我'
    }],
    'color': '#000000',
    'selectedColor': '#CB342B',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
