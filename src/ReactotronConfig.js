import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

console.log('Reached')
const reactotron = Reactotron.configure() // controls connection & communication settings
  .useReactNative()
  .use(reactotronRedux()) //  <- here i am!
  .connect() // let's connect!

export default reactotron
