import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import React from 'react'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Welcome from './Screens/WelcomeScreen'
import Home from './Screens/Home/HomeScreen'
import AuthLoading from './Screens/AuthLoading'
import MyList from './Screens/MyList/MyListScreen'
import { IconButton } from './Components/IconButton'

const Auth = createStackNavigator(
  {
    WelcomeScreen: {
      screen: Welcome
    },
    SignUpScreen: {
      screen: Signup
    },
    LoginScreen: {
      screen: Login
    }
  },
  {
    initialRouteName: 'WelcomeScreen',
    defaultNavigationOptions: {
      header: null
    }
  }
)

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home
    },
    MyListScreen: {
      screen: MyList,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Orders',
          headerLeft: (
            <IconButton
              iconStyle={{ marginLeft: 30 }}
              onPress={() => navigation.goBack()}
              iconName='angle-left'
              iconColor='#fff'
              iconSize={30}
            />
          )
        }
      }
    }
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#152534'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const root = createSwitchNavigator(
  {
    HomeStack,
    Auth,
    AuthLoading
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(root)
