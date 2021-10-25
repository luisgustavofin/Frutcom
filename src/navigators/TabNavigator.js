import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { HomeScreen, CartScreen, CheckoutScreen } from '../screens';
import { Colors, Height } from '../utils';

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Ionicons name="ios-home" size={Height(3)} color={focused ? Colors.green : Colors.gray} />
      )
    }),
    tabBarOptions: { showLabel: false }
  },
  CartScreen: {
    screen: CartScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Feather name="shopping-cart" size={Height(3)} color={focused ? Colors.green : Colors.gray} />
      )
    })
  },
  CheckoutScreen: {
    screen: CheckoutScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <FontAwesome name="check-square-o" size={Height(3)} color={focused ? Colors.green : Colors.gray} />
      )
    })
  }
},
{
  tabBarOptions: {
    showLabel: false
  }
},
{
  defaultNavigationOptions: {
    tabBarOptions: {
      activeTintColor: Colors.green,
      inactiveTintColor: Colors.gray
    }
  }
});

export default TabNavigator;
