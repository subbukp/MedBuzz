import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';

export default function App() {
  return (
  <Fragment>
    <View >
    <Text style={{fontSize:30,color:'red',marginTop:20,marginLeft:20}}>Add New Medicine</Text>
     
    </View>

    <View style={styles.login}>
     <TextInput  placeholder="Medicaction name" style={styles.screen}/>
     <TextInput placeholder="Color"  style={styles.screen}/>
     <TextInput keyboardType="number-pad" placeholder="Dose"  style={styles.screen}/>
     <TextInput keyboardType="number-pad" placeholder="Number of Days"  style={styles.screen}/>
     <TextInput keyboardType="numeric" placeholder="Time"  style={styles.screen}/>
     <View style={styles.button}>
     <Button title="Cancel" />
     <Button title="Save" />
     </View>
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
borderBottomWidth:1,
borderBottomColor:'black',
width:'80%',
padding:10,
margin:2,
},
button:{
  flex:1,
  flexDirection:"row",
  height:20,
  justifyContent:"flex-start",
  alignItems:"flex-end",
}
})

//export default App;
