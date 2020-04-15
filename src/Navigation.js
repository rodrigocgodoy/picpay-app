import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Foundation,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'md-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },

};

export default function Navigation() {
  return (
    <tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const {lib: Icon, name} = icons[route.name];
          console.log(size)
          return <Icon name={name} size={30} color={color} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <tab.Screen
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Início',
        }}
      />
      <tab.Screen
        name="Wallet"
        component={WalletScreen} 
        options={{
          title: 'Carteira',
        }}
      />
      <tab.Screen 
        name="Pay"
        component={PayScreen} 
        options={{
          title: '',
        }}  
      />
      <tab.Screen 
        name="Notifications"
        component={PayScreen} 
        options={{
          title: 'Notificações',
        }}  
      />
      <tab.Screen
        name="Settings" 
        component={PayScreen} 
        options={{
          title: 'Ajustes',
        }}  
      />
    </tab.Navigator>
  );
}