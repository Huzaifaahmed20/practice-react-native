import React, { Component } from 'react'
import {
  Text,
  View,
  AsyncStorage,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native'
import { HomeStyle } from './HomeStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import MainHeader from '../../Components/MainHeader'

export default class Home extends Component {
  goToMyList = () => {
    this.props.navigation.navigate('MyListScreen')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <MainHeader title='Dashboard' />
        <View style={HomeStyle.halfMainStyle}>
          <View style={HomeStyle.subProfileStyle}>
            <TouchableOpacity
              onPress={this.showPicker}
              style={HomeStyle.profileView}>
              <View>
                <Image
                  style={HomeStyle.pic}
                  source={require('../../Assets/logo.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={HomeStyle.profileDetail}>
              <Text style={HomeStyle.userNameStyle}>Profile</Text>
              <Text style={HomeStyle.userNameStyle}>John Doe</Text>
            </View>
          </View>
        </View>
        <View style={HomeStyle.firstTwo}>
          <View style={HomeStyle.first}>
            <Icon
              style={HomeStyle.iconSetting}
              name='search'
              size={50}
              color='#566f8f'
            />
            <Text style={HomeStyle.iconTextSetting}>Find Order</Text>
          </View>
          <TouchableOpacity onPress={this.goToMyList}>
            <View style={HomeStyle.second}>
              <Icon
                style={HomeStyle.iconSetting}
                name='list-ul'
                size={50}
                color='#566f8f'
              />
              <Text style={HomeStyle.iconTextSetting}>My List</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeStyle.secondTwo}>
          <View style={HomeStyle.first}>
            <Icon
              style={HomeStyle.iconSetting}
              name='shopping-cart'
              size={50}
              color='#566f8f'
            />
            <Text style={HomeStyle.iconTextSetting}>My Order</Text>
          </View>
          <View style={HomeStyle.second}>
            <Icon
              style={HomeStyle.iconSetting}
              name='star'
              size={50}
              color='#566f8f'
            />
            <Text style={HomeStyle.iconTextSetting}>Rating</Text>
          </View>
        </View>
      </View>
    )
  }
}
