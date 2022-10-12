import { View, Text, StyleSheet,Dimensions, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from '../components/Button.component';


enum EView {
  'ERROR',
  'SUCCESS'
}

const {height}=Dimensions.get('screen');


export default function AlertPage(props:any) {
  const [view,setView]=useState(0);
  const startOver=()=>{
    const view=Math.floor(Math.random()*2);
    props.startOver();
    setTimeout(() => {
      setView(view);
    }, 1000*2);
  }
  return (
    <ScrollView contentContainerStyle={[{height},styles.screen]}>
      {view===EView.SUCCESS?(
        <>
          <Text style={{fontSize:30}}>Success</Text>
          <View style={styles.image}>
            <Image style={{width:'100%',height:'100%'}} source={require('../assets/images/check.jpg')}/>
          </View>
        </>
      ):(
        <>
        <Text style={{fontSize:30}}>Oooopsy</Text>
        <View style={styles.image}>
        <Image style={{width:'100%',height:'100%'}} source={require('../assets/images/error.png')}/>
        </View>
        </>
      )}
      <Text style={{margin:20,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <ButtonComponent 
          title="Start Over" 
          style={{marginVertical:50,width:150}}
          onPress={startOver}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    screen:{
      alignItems:'center',
      marginVertical:100
    },
    image:{
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100,
      marginVertical:20
    }
})