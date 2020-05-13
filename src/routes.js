import * as React from 'react';
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./pages/home/Home";

const homeIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#753CDD" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 23V13H15V23" fill="white"/>
</svg>
`

const searchIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L16.65 16.65" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
` 

const shoppingIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6H21" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H21" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18H21" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6H3.01" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H3.01" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H3.01" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const profileIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#753CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const HomeIcon = () => <SvgXml xml={homeIcon} />

const SearchIcon = () => <SvgXml xml={searchIcon} />

const ShoppingIcon = () => <SvgXml xml={shoppingIcon} />

const ProfileIcon = () => <SvgXml xml={profileIcon} />

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator();

function StackNavigation() {
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

function MockComponent() {
  return(
    <View />
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#fff' }}>
        <Tab.Screen
          name='Home'
          component={StackNavigation}
          options={{
            title: 'Início',
            tabBarIcon: HomeIcon
          }}
        />

        <Tab.Screen
          name='Search'
          component={MockComponent}
          options={{
            title: 'Buscar',
            tabBarIcon: SearchIcon
          }}
        />

        <Tab.Screen
          name='Shopping'
          component={MockComponent}
          options={{
            title: 'Compras',
            tabBarIcon: ShoppingIcon
          }}
        />

        <Tab.Screen
          name='Profile'
          component={MockComponent}
          options={{
            title: 'Perfil',
            tabBarIcon: ProfileIcon
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}