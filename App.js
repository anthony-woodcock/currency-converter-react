import { StackNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import CurrenciesScreen from './components/CurrenciesScreen'

export default StackNavigator ({
  Home: { screen: HomeScreen},
  Currencies: { screen: CurrenciesScreen}
})