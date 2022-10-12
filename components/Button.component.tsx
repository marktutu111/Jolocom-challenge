import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonComponent(props:any) {
  return (
    <TouchableOpacity 
      style={[styles.but,props.style,{backgroundColor:props.disabled?'#6d6d6d':'#000'}]} 
      onPress={props.onPress}
      disabled={props.disabled}
    >
        <Text style={styles.txt}>{props.title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    but:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:5,
        height:60
    },
    txt:{
        color:'#fff'
    }
})