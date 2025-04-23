import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Infos from '@/components/infos-bulle';
import Logo from '@/components/logo-entity';

export default function TabLayout(){
  const logo=require('../../assets/images/logo-gctopo.png')



    return (


        <Tabs  screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            // headerStyle: {
            //   backgroundColor: '#25292e',
            // },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
            // backgroundColor: '#25292e',
            height:100,
            },
            headerLeft:()=> <Logo  logo={logo} />,
            // headerLeft:()=> <Logo  logo={logo}/>,
            headerRight:()=> <Infos phone=" +225 0748513127" email="gctopo@example.ci" />
          }}>
        <Tabs.Screen name="index" options={{ title: '',tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'}  size={24} />
          ), }} />
        <Tabs.Screen name="categories" options={{ title: '' ,tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'list' : 'menu'} color={color} size={24} />
          ),}} />
        <Tabs.Screen name="panier" options={{ title: '',tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={24} />
          ), }} />
        <Tabs.Screen name="profil" options={{ title: '' ,tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings' : 'settings'} color={color} size={24} />
          ),}} />
        <Tabs.Screen name="favorites" options={{ title: '' ,tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'heart-sharp' : 'heart-circle'} color={color} size={24} />
          ),}} />
        
        
        </Tabs>
    )
}