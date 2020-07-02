import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,Alert,StyleSheet,Button,TextInput } from 'react-native';
import * as firebase from 'firebase';

class front extends Component {
  state={
    email:"",
    password:"",
    uname:"",

  }
  userSignup(email,pass){ 
    console.log(this.state)
    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(()=>{
      this.props.navigation.navigate('login')
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  render(){
  return (
    
    <Fragment>
      <View style={styles.header}>
      <Text style={styles.headerText}>SIGN UP</Text>
    </View>
    <Text style={{fontSize:28,color:'red',marginLeft:20,marginTop:10}}>Hello user, Welcome to MEDBUZZ</Text>
    <View style={styles.login}>
     <TextInput   placeholder="Username" value={this.setState.uname} onChangeText={(text)=>this.setState({uname:text})} style={styles.screen}/>
     <TextInput keyboardType="email-address" onChangeText={(text)=>this.setState({email:text})} value={this.state.email} placeholder="E-Mail"  style={styles.screen}/>
     <TextInput secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})} value={this.state.password} placeholder="Password" style={styles.screen}/>
     <TextInput secureTextEntry={true} placeholder="Confirm password" style={styles.screen}/>
     <TextInput keyboardType="phone-pad" placeholder="Phone Number" style={styles.screen}/>
     <TextInput placeholder="OTP" style={styles.screen}/>
     <Text  style={{color:'blue',marginTop:10,marginBottom:10}}>Resend OTP</Text>
     <Button onPress={()=>this.userSignup(this.state.email,this.state.password )} title="Submit" />
     
    </View>
    </Fragment>
    
      

  );
};
}

const styles = StyleSheet.create({
login:{
flex:1,
justifyContent:'center',
alignItems:'center',
borderBottomColor:'black',
borderBottomWidth:1,
padding:20,
paddingBottom:120,
marginTop:80
},
screen:{
borderBottomWidth:1,
borderColor:'black',
width:'100%',
padding:10,
margin:2,
},
header: {
  backgroundColor:'#65509f',
  alignItems:'center',
  justifyContent:'center',
},
headerText: {
  color:'#fff',
  fontSize:24,
  padding:20
},
})

export default front;
