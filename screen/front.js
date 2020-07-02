import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';

export default function App() {
  return (
  
    <View style={styles.login}>
      <Text>Sign in</Text>
     <TextInput   placeholder="Username" style={styles.screen}/>
     <TextInput keyboardType="email-address" placeholder="E-Mail"  style={styles.screen}/>
     <TextInput secureTextEntry={true} placeholder="Password" style={styles.screen}/>
     <TextInput secureTextEntry={true} placeholder="Confirm password" style={styles.screen}/>
     <TextInput keyboardType="phone-pad" placeholder="Phone Number" style={styles.screen}/>
     <TextInput placeholder="OTP" style={styles.screen}/>
     <Text  style={{color:'blue'}}>Resend OTP</Text>
     <Button  title="Submit" />
     
    </View>

  );
};

const styles = StyleSheet.create({
login:{
flex:1,
justifyContent:'center',
alignItems:'center',
borderBottomColor:'black',
borderBottomWidth:1,
padding:20,
paddingBottom:55,
},
screen:{
borderBottomWidth:1,
borderColor:'black',
width:'80%',
padding:10,
margin:2,
},
})

//export default App;
