/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions
} from 'react-native';
import HeaderBarComponent from './components/HeaderBar.component';
import AlertPage from './pages/Alert.page';
import FormPage from './pages/Form.page';
const {height}=Dimensions.get('screen');


const App=()=>{

  const scrollOffsetY=useRef(new Animated.Value(0)).current;
  const scrollToPage=new Animated.Value(0);


  const submit=()=>{
    Animated.timing(scrollToPage,{
      toValue:10,
      duration:200,
      useNativeDriver:true
    }).start()
  }

  const over=()=>{
    Animated.timing(scrollToPage,{
      toValue:0,
      duration:200,
      useNativeDriver:true
    }).start()
  }

  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#000'}
      />
      <HeaderBarComponent height={height} offset={scrollOffsetY}/>
      <Animated.View style={{
        transform:[
          {translateY:scrollToPage.interpolate(
            {
              inputRange:[0,10],
              outputRange:[0,-height]
            }
          )}
        ]
      }}>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={styles.cont}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
            {useNativeDriver: false}
          )}
          >
            <FormPage submit={submit}/>
        </ScrollView>
        <AlertPage startOver={over}/>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont:{
    position:'relative',
    height
  }
});

export default App;
