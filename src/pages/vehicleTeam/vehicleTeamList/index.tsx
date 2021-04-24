import { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui'
import { View, Image } from '@tarojs/components'

import './index.less'
import DATA from '../../../common/data'

const ListItemCell = (props) => {
  console.log("props------", props)
  return (
    <View className="cell" onClick={ () => { props.handleAdd(props.Id) }}>
      <View className="cell_title">{ props.Name }</View>
      <View className="cell_arrow">
        <AtIcon value='chevron-right' size='22' color='#c7c7c7'></AtIcon>
      </View>
    </View>
  )
}

const TeamCard = (props) => {
  return (
    <View className="team_card">
      <View className="team_card_img">
        <Image src="http://www.niuinfo.com/appimg/xiaoniu_w@2x.png" />
      </View>
      <View className="team_card_msg">
        <View className="team_card_msgTitle"> { props.Title } </View>
        <View className="team_card_msgDesc"> { props.Desc } </View>
      </View>
    </View>
  )
}

class VehicleTeamList extends Component {
  state = {
    arrModules: DATA.arrModules,
    arrVehicleTeam: DATA.arrVehicleTeam
  }

  handleAdd(event) {
    console.log("-----event---", event)
    if(event == "115100") {
      Taro.navigateTo({
        url: '/pages/vehicleTeam/vehicleList/index'
      })
    }
    if (event == "115200") {
      Taro.navigateTo({
        url: '/pages/vehicleTeam/driverList/index'
      })
    }
  }

  render () {
    return (
      <View className='page'>
        <View className="page_edge">
          <View className="select_module">
            {
              Array.from(this.state.arrModules).map((item) => {
                return (
                  <ListItemCell 
                    Name={ item.name }
                    Id={ item.id }
                    handleAdd={ this.handleAdd }
                  />
                )
              })
            }
          </View>
          <View className="select_list">
            {
              Array.from(this.state.arrVehicleTeam).map((item) => {
                return (
                  <TeamCard 
                    Title={ item.title } 
                    Desc={ item.desc }
                  />
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
}

export default VehicleTeamList;
