import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Welcome from './Screens/WelcomeScreen'
import Home from './Screens/Home/HomeScreen'
import AuthLoading from './Screens/AuthLoading'
import MyList from './Screens/MyList/MyListScreen'
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
      screen: MyList
    }
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      header: null
    }
  }
)
export const rootNavigator = signedIn => {
  return createAppContainer(
    createSwitchNavigator(
      {
        HomeStack,
        Auth,
        AuthLoading
      },
      {
        initialRouteName: signedIn ? 'HomeStack' : 'Auth'
      }
    )
  )
}
// export const createRootNav = createAppContainer(rootNavigator)
