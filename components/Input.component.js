import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function InputComponent(props) {
    const [focused,setFocused]=useState(false);
  return (
    <View style={[styles.input,{borderColor:focused?'#000':'#ccc'}]}>
        <TextInput
            style={{lineHeight:25,fontSize:20}}
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            ref={props.inputRef}
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
        marginVertical:6,
        backgroundColor:'#eee'
    }
})