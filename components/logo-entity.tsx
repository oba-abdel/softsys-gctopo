import { View,Text, Pressable } from "react-native";
import {InfosLogo } from "@/utility/types";
import { Image } from 'expo-image';

import { useNavigation, useRouter } from "expo-router";
export default function Logo({logo}:InfosLogo){
    const Router=useRouter()

    return(
        <View style={{ flexDirection:'column', justifyContent:'center', padding:10, alignItems:'center'}}>


    
  <Pressable onPress={()=>Router.navigate('/')}>
                 <Image source={logo} style={{width:130,height:30, borderRadius:'15'}}/>
            </Pressable>
    

          
           
        </View>
    )
}