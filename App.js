import React, {Fragment} from 'react';
import 'react-native-gesture-handler'; 
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';


import Feed from './src/pages/Feed';
import SignUp from './src/SignUp';    
import Login from './src/Login';
import PreLoad from './src/PreLoad';

const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
  
      <Tab.Navigator

	screenOptions={({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			let iconName;

			switch (route.name) {
				case 'Inicio':
					iconName = 'instagram';
					break;
				
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: '#000000',
		inactiveTintColor: '#777',
	}}>
    <Tab.Screen name="Inicio" component={Feed}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PreLoad" screenOptions={{headerShown: false}}>  
        <Stack.Screen name="Feed" component={Tabs}/>
        <Stack.Screen name="PreLoad" component={PreLoad}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }
)