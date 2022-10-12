import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function InputComponent(props) {
    const [focused,setFocused]=useState(false);
  return (
    <View style={[styles.input,{borderColor:focused?'#000':'#ccc'}]}>
        <TextInput
            style={{lineHeight:25}}
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            {...props}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        padding:15,
        borderRadius:5,
        marginVertical:8,
        backgroundColor:'#eee'
    }
})