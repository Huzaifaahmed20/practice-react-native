import React, { Component } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import { getPosts } from '../../Action'
import { connect } from 'react-redux'
import ListItem from './ListItem'
import { IconButton } from '../../Components/IconButton'

class MyList extends Component {
  // static navigationOptions = {
  //   title: 'Orders',
  //   headerLeft: (
  //    
  //   ),
  //   headerStyle: {
  //     backgroundColor: '#152534'
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold'
  //   }
  // }
  async componentDidMount() {
    console.log(this.props)
    await this.props.getPosts()
  }

  _keyExtractor = item => item.id

  _renderItem = ({ item }) => (
    <ListItem id={item.id} body={item.body} title={item.title} />
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {this.props.posts.length ? (
            <FlatList
              data={this.props.posts}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          ) : (
            <ActivityIndicator size='large' color='#202D45' />
          )}
        </View>
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
