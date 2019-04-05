import { StyleSheet } from 'react-native'

export const HomeStyle = StyleSheet.create({
  halfMainStyle: {
    width: '100%',
    height: '20%',
    backgroundColor: '#202D45'
  },
  subProfileStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center'
  },
  profileDetail: {
    marginHorizontal: 20
  },
  profileView: {
    backgroundColor: '#ffffff',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#88A8C5',
    marginVertical: 20
  },

  pic: {
    width: 80,
    height: 80,
    alignSelf: 'center'
    // marginTop: 10,
  },
  userNameStyle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500'
  },
  noOfFriends: {
    marginTop: 5,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Nexa Bold'
  },

  secondTwo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40
  },
  firstTwo: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  first: {
    width: 125,
    height: 125,
    borderRightColor: '#000'
  },
  second: {
    width: 125,
    height: 125
  },
  iconSetting: {
    alignSelf: 'center',
    marginTop: 50
  },
  iconTextSetting: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000000',
    fontSize: 20
  }
})
