import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/components/Home';
// import Checkout from './screens/Checkout';
import Payment from './screens/Payment';


const RootStack = createStackNavigator({
  Home: {screen: Home, navigationOptions: {header: null}},
  // Checkout: {screen: Checkout},
  Payment: {screen: Payment, navigationOptions: {header: null}}
});

const App = createAppContainer(RootStack);

export default App; 