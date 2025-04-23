import { Category } from "@/utility/types";
import { FlatList, Text, View } from "react-native";

export default function FlatListHaorizontal(data:any){

    return (
        <View>
           <FlatList data={data} renderItem={item=> <Text>item?.name</Text>} keyExtractor={item=>item?.id}/>
        </View>
    );

}