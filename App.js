import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import colors from './color';



export default class  App extends React.Component {
render(){
  return(
    <View style = {styles.container}>
    <View style = {{flexDirection : "row"}}>
    <View style = {styles.divider} />
     <Text style = {styles.title}>

       Todo <Text style = {{fontWeight:"300",color : colors.blue}}> Lists 
       </Text>
     </Text>
     <View style = {styles.divider} /> 

        <View style =  {{marginVertical:50 }}>
          <TouchableOpacity style = {styles.addlist} >
             <AntDesign name="plus" size={16} color={colors.blue} />

          </TouchableOpacity>

          <Text style = {styles.add}>Add List</Text>
          </View>  
        </View>
    </View> 
  )
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider:{
   backgroundColor : colors.lightblue,
   height: 1,
   flex: 1,
   alignSelf:"center",

  },
  title: {
    fontSize : 40,
    fontWeight : "800",
    color : colors.black,
    paddingHorizontal : 65,

  },
  addlist: {
    borderWidth: 2,
    borderColor: colors.lightblue, 
    borderRadius: 4,
    padding:16,
    alignItems: "center",
    justifyContent: "center",
                                      
  },
  add:{
    color : colorsblue,
    fontWeight:"600",
    fontSize:14,
    marginTop: 8,

  }
});
