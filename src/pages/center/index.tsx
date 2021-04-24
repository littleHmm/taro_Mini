import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Index extends Component {
  state = {
    msg: 'Hello World! 我'
  }

  onReady () {
    console.log('onReady')
  }

  render () {
    return <View>{ this.state.msg }</View>
  }
}
