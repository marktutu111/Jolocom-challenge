import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
// import Fontawesome5 from "react-native-vector-icons/FontAwesome5";
import ButtonComponent from '../components/Button.component';

const {height}=Dimensions.get('screen');


export default function AlertPage(props) {
  return (
    <View style={[{height},styles.screen]}>
        <Text style={{fontSize:30}}>Success</Text>
        {/* <Fontawesome5 
          name='check'
        /> */}
        <Text style={{margin:20,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <ButtonComponent 
          title="Start Over" 
          style={{marginVertical:50,width:150}}
          onPress={props.startOver}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
      alignItems:'center',
      marginVertical:100
    }
})