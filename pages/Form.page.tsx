import { View, Text,StyleSheet,Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import InputComponent from '../components/Input.component'
import ButtonComponent from '../components/Button.component'


interface IForm {
  fname?:string;
  lname?:string;
  phone?:string;
  age?:string;
  email?:string;
}


export default function FormPage(props:any) {

  let refs:any=Array(5).fill(0).map(_=>React.createRef());
    let initialState={age:'',fname:'',lname:'',phone:'',email:''};
   const [form,setForm]=useState<IForm>(initialState);
   const [disabled,setDisabled]=useState(true);


   useEffect(()=>{
    validateForm();
   },[form])

   const validateForm=()=>{
      if (
        form.fname!=='' && 
        form.lname!=='' &&
        form.age!=='' &&
        form.phone!=='' &&
        form.email!==''
      ){setDisabled(false);}else{setDisabled(true)}
   }

   const updateForm=(d:IForm)=>{
    setForm((s)=>({...s,...d}));
   }

   const submit=()=>{
    props.submit && props.submit();
    setForm(initialState);
    resetForm();
   }

   const resetForm=()=>{
    refs.forEach((ref:any)=>{
      ref && ref.clear();
    })
   }


  return (
    <KeyboardAvoidingView 
      contentContainerStyle={{marginVertical:50}}
      behavior="position"
    >
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:50}}>
            <Text style={[styles.text,{fontSize:35,marginVertical:10,fontWeight:'bold'}]}>Add your info</Text>
            <Text style={styles.text}>To complete your profile please fill in all the necessary information. </Text>
          </View>
          <View style={styles.inputCont}>
              <InputComponent
                placeholder="First name"
                inputRef={(r:any)=>refs[0]=r}
                onSubmitEditing={() =>{ refs[1].focus(); }}
                onChangeText={(v:string)=>updateForm({fname:v.trim()})}
              />
              <InputComponent 
                placeholder="Last name"
                inputRef={(r:any)=>refs[1]=r}
                onSubmitEditing={() =>{ refs[2].focus(); }}
                onChangeText={(v:string)=>updateForm({lname:v.trim()})}
              />
              <InputComponent 
                placeholder="Phone number"
            keyboardType="phone-pad"
            inputRef={(r:any)=>refs[2]=r}
            onSubmitEditing={() =>{ refs[3].focus(); }}
            onChangeText={(v:string)=>updateForm({phone:v.trim()})}
              />
              <InputComponent 
                placeholder="Email"
            keyboardType="email-address"
            inputRef={(r:any)=>refs[3]=r}
            onSubmitEditing={() =>{ refs[4].focus(); }}
            onChangeText={(v:string)=>updateForm({email:v.trim()})}
              />
              <InputComponent 
                placeholder="Age"
            keyboardType="number-pad"
            inputRef={(r:any)=>refs[4]=r}
            onChangeText={(v:string)=>updateForm({age:v.trim()})}
              />
            <ButtonComponent 
              title="Submit"
              onPress={submit}
              disabled={disabled}
              style={{marginVertical:15}}
            />
          </View>
    </KeyboardAvoidingView>
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