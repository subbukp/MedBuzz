import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';

export default function App() {
  return (
  <Fragment>
    <View >
    <Text style={{fontSize:30,color:'red',marginTop:20,marginLeft:20}}>Welcome to MedBuzz</Text>
     <Text style={{fontSize:20,color:'green',marginLeft:45}}>-one app 5 solutions</Text>
    </View>

    <View style={styles.login}>
     <TextInput  placeholder="Username" style={styles.screen}/>
     <TextInput placeholder="Password"  style={styles.screen}/>
     <Button title="Submit" />
      <Text style={{fontSize:15,color:'blue'}}>Forgot password</Text>
      <Text style={{fontSize:15,color:'blue'}}>New User? Sign In</Text>
    </View>


     </Fragment>

  );
};

const styles = StyleSheet.create({
login:{
flex:1,
justifyContent:'center',
alignItems:'center',
//borderColor:'black',
//borderWidth=1,
padding:15,
},
screen:{
borderWidth:2,
borderColor:'black',
width:'80%',
padding:10,
margin:2,
},
})

//export default App;
