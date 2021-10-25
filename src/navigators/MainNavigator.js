import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from '../screens';
import TabNavigator from './TabNavigator';

const MainNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  TabNavigator: {
    screen: TabNavigator
  }
},
{
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default MainNavigator;
