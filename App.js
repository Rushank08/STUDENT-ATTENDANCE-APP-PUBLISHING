import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';

import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
  

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  
  
})

const AppContainer = createAppContainer(AppNavigator)


