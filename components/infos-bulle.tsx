import { InfosBulle } from "@/utility/types";
import Ionicons from '@expo/vector-icons/Ionicons';
import {View,Text} from "react-native";
export default function Infos({phone,email}:InfosBulle){

    return(

        <View style={{ flexDirection:'column', justifyContent:'space-between', gap:5, padding:15}}>
            
            <Text > <Ionicons name="call"     />{phone}</Text>
            <Text ><Ionicons name="mail"   />{email}</Text>
            {/* <Text>{notification}</Text> */}
        </View>
    );

}