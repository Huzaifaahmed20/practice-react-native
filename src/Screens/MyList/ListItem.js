import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { MyListStyle } from './MyListStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ListItem extends Component {
  _onPress = () => {
    // this.props.onPressItem(this.props.id)
  }

  render() {
    // const textColor = this.props.selected ? 'red' : 'black'
    return (
      <View style={MyListStyle.subProfileStyle}>
        <TouchableOpacity
          // onPress={this.showPicker}
          style={MyListStyle.profileView}>
          <Icon
            style={MyListStyle.iconStyle}
            name='home'
            size={25}
            color='#fff'
          />
          {/* <Image
                style={MyListStyle.pic}
                source={require('../../Assets/logo.png')}
              /> */}
        </TouchableOpacity>
        <View style={MyListStyle.listItems}>
          <Text
            style={MyListStyle.titleStyle}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {this.props.title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode={'tail'}>
            {this.props.body}
          </Text>
        </View>
      </View>
    )
  }
}
