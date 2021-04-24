import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import '../../style/scroll.less'
import './index.less'

export default class Index extends Component {
  state = {}

  onReady () {
    console.log('onReady')
  }

  render () {
    return (
      <View className='page_bg'>
        <View className='page'>
          <Text>Hello World! 工作台</Text>
        </View>
      </View>
    )
  }
}
