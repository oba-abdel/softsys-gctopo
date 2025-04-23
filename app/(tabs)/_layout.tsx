import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout(){



    return (


        <Tabs  screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
              backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
            backgroundColor: '#25292e',
            },
          }}>
        <Tabs.Screen name="index" options={{ title: 'Home',tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ), }} />
        <Tabs.Screen name="categories" options={{ title: 'Categories' ,tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'menu' : 'menu'} color={color} size={24} />
          ),}} />
        <Tabs.Screen name="panier" options={{ title: 'Panier',tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart'} color={color} size={24} />
          ), }} />
        <Tabs.Screen name="profil" options={{ title: 'Profil' ,tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings'} color={color} size={24} />
          ),}} />
        
        
        </Tabs>
    )
}