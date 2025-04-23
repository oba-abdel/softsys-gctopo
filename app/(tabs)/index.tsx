import FlatListHaorizontal from "@/components/flat-list-horizontal";
import { Category } from "@/utility/types";
import { View,Text } from "react-native";
const DATA: Category[] = [
    {
      id: '1',
      name: 'First Item',
    },
    {
      id: '2',
      name: 'Second Item',
    },
    {
      id: '3',
      name: 'Third Item',
    },
    {
      id: '4',
      name: 'four Item',
    },
    {
      id: '(',
      name: 'five Item',
    },
    {
      id: '6',
      name: 'six Item',
    },
    {
      id: '7',
      name: 'seven Item',
    },
    {
      id: '8',
      name: 'height Item',
    },
    {
      id: '9',
      name: 'nine Item',
    },
    {
      id: '10',
      name: 'ten Item',
    },
  ];
export default function App(){
   
    return (
        <View>
            <Text>Home page</Text>

            <FlatListHaorizontal data={DATA} />
               
        </View>
    )
}