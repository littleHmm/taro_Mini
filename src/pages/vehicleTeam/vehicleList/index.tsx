import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.less'

const VehicleListCard = () => {
  return (
    <View className="card">
      <View className="card_left">
        <View className="card_left_top">
          <Image src="http://www.niuinfo.com/appimg/vehicle_car.png" />
        </View>
        <View className="card_left_bottom">
          <View>满载</View>
        </View>
      </View>
      <View className="card_center">
        <View className="card_center_desc">
          <Text>京A13333</Text>
        </View>
        <View className="card_center_desc grey">
          <Text>重型货车 | 25吨</Text>
        </View>
        <View className="card_center_desc grey">
          <Text>任意方向</Text>
        </View>
      </View>
      <View className="card_right">
        <View>证件到期</View>
      </View>
    </View>
  )
}

class VehicleList extends Component {
  constructor (props) {
    super(props);
  }

  state = {
    value: ''
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  onActionClick () {
    console.log('开始搜索')
  }

  render() {
    return (
      <View className="page">
        <View className="list_wrap">
          <View className="search">
            <AtSearchBar
              className="search_default"
              placeholder="请输入车牌/船舶号"
              fixed={true}
              actionName='搜一下'
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
          </View>
          <View className="list_container">
            {
              Array.from(new Array(10)).map(() => {
                return (
                  <VehicleListCard />
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
}

export default VehicleList;