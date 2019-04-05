import { StyleSheet } from 'react-native'

export const MyListStyle = StyleSheet.create({
  halfMainStyle: {
    width: '100%',
    height: '20%',
    backgroundColor: '#202D45'
  },
  subProfileStyle: {
    flexDirection: 'row',
    marginVertical: 20
    // borderBottomColor: '#000'
  },
  profileDetail: {
    marginHorizontal: 20
  },
  profileView: {
    backgroundColor: '#ffab09',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconStyle: {
    // width: 20,
    // height: 20,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center'
    // marginTop: 10,
  },
  listItems: {
    width: '80%'
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 20
  }
})
