import React, {Fragment} from 'react';
import 'react-native-gesture-handler'; 
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';


import Feed from './src/pages/Feed';
import Search from './src/pages/Search';    
import AddPost from './src/pages/AddPost';
import Activity from './src/pages/Activity';
import Login from './src/pages/Login';

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
				
				case 'Login':
					iconName = 'user';
					break;
				
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: '#000000',
		inactiveTintColor: '#777',
	}}>
		<Tab.Screen name="Login" component={Login}/>
          <Tab.Screen name="Inicio" component={Feed}/>
          
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Instagram" component={Tabs} />
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