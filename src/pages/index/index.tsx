import { Component } from 'react'
import { AtGrid } from "taro-ui"
import Taro from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import '../../style/scroll.less'
import './index.less'

import DATA from '../../common/data'

const TranportCard = () => {
  return (
    <View className="card">
      <View className="card_flex">
        <View> 订单号：20210106000073 </View>
        <View> 06-15 16:00 </View>
      </View>
      <View className="card_flex">
        <View> 周口市-相城区 </View>
        <View className="status"> 待执行 </View>
        <View> 廊坊市-文安县 </View>
      </View>
      <View>
        <View> 石英砂：15吨 </View>
      </View>
    </View> 
  )  
}

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    arrGrid: DATA.moduleList,
    arrStatistics: DATA.arrStatistics
  }

  handleModules(event) {
    if (event.id == "114600") {
      Taro.navigateTo({
        url: '/pages/vehicleTeam/vehicleTeamList/index'
      })
    }
  }

  onLoad() {
    console.log("----------->")
  }

  onPullDownRefresh() {
    console.log("-----触发下拉刷新------>")
  }

  render () {
    return (
      <View className='page_bg'>
        <View className='page'>
          <View className='grid_part'>
            <AtGrid 
              columnNum={4} 
              hasBorder={false} 
              data={ this.state.arrGrid } 
              onClick={ this.handleModules.bind(this) }
            />
          </View>
          <View className='swiper_part'>
            <Swiper
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay>
              <SwiperItem>
                <Image src='http://www.niuinfo.com/appimg/adiversing.png' />
              </SwiperItem>
              <SwiperItem>
              <Image src='http://www.niuinfo.com/appimg/adiversing.png' />
              </SwiperItem>
            </Swiper>
          </View>
          <View className='statistics_part'>
            <View className='at-row'>
              {
                Array.from(this.state.arrStatistics).map(item => {
                  return (
                    <View className='at-col statist_item'>
                      <Text className='money'>{ item.value }</Text>
                      <Text className='title'>{ item.title }</Text>
                    </View>
                  )
                })
              }
            </View>
          </View>
          <View className="list_title">最新订单</View>
          <View className="list_part">
            {
              Array.from(new Array(5)).map((index) => {
                return <TranportCard />
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
