import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { getPosts } from '../../Action'
import { connect } from 'react-redux'
import { MyListStyle } from './MyListStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import MainHeader from '../../Components/MainHeader'

class MyListItem extends React.PureComponent {
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
class MyList extends Component {
  async componentDidMount() {
    await this.props.getPosts()
  }
  _keyExtractor = (item, index) => item.id
  _renderItem = ({ item }) => (
    <MyListItem id={item.id} body={item.body} title={item.title} />
  )
  render() {
    return (
      <View>
        <MainHeader title='Orders' />
        <FlatList
          data={this.props.posts}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}
const mapStateToProps = ({ posts }) => {
  return {
    posts
  }
}
export default connect(
  mapStateToProps,
  { getPosts }
)(MyList)
