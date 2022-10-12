import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import InputComponent from '../components/Input.component'
import ButtonComponent from '../components/Button.component'
const {height}=Dimensions.get('screen');

export default function FormPage(props:any) {
  return (
    <View style={{height,marginVertical:50}}>
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:50}}>
            <Text style={[styles.text,{fontSize:35,marginVertical:10,fontWeight:'bold'}]}>Add your info</Text>
            <Text style={styles.text}>To complete your profile please fill in all the necessary information. </Text>
          </View>
          <View style={styles.inputCont}>
              <InputComponent 
                placeholder="First name"
              />
              <InputComponent 
                placeholder="Last name"
              />
              <InputComponent 
                placeholder="Phone number"
              />
              <InputComponent 
                placeholder="Email"
              />
              <InputComponent 
                placeholder="Age"
              />
            <ButtonComponent 
              title="Submit"
              onPress={props.submit}
            />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:20
      },
      inputCont:{
        paddingHorizontal:20
      }
})