import { View, Text, StyleSheet,Dimensions, Animated } from 'react-native'
import React from 'react'
const {height}=Dimensions.get('screen');
const _height=height/15;

export default function HeaderBarComponent({offset}:any) {
  
  const animatedHeaderHeight =  offset?.interpolate({
    inputRange: [0, _height],
    outputRange: [0 , _height],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View style={[styles.cont,{height:animatedHeaderHeight}]}>
      <Text style={styles.txt}>Collapsible Scroll</Text>
    </Animated.View>
  )
}


const styles = StyleSheet.create({
    cont:{
        position:'absolute',
        backgroundColor:'#000',
        width:'100%',
        justifyContent:'center',
        marginTop:45,
        zIndex:10000
    },
    txt:{
        fontSize:20,
        marginHorizontal:10,
        color:'#fff'
    }
})