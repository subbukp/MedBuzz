import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';

export default function App() {
  return (
  <Fragment>
    <View>
      <Text style={{padding:20,fontSize:30,color:'powderblue'}}>Dear (Uname)  time  to take (medname)
      </Text>
      </View>
    <View style={styles.login}>
     <Button  style={{padding:100,margin:100}} title="Took" />
     <Button title="snooze"/>
     
    </View>
  </Fragment>
    

  );
};

const styles = StyleSheet.create({
login:{
flex:2,
justifyContent:'space-evenly',
alignItems:'center',
borderBottomColor:'black',
borderBottomWidth:1,
padding:20,
flexDirection:"row",
paddingBottom:55,
},
})

//export default App;
