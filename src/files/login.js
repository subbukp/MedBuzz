import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,Alert,StyleSheet,Button,TextInput, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
class login extends Component {
  state={
    email:"",
    password:"",
  }
  userSignin(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.props.navigation.navigate('welcome1')
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  render() {
  return (
  <Fragment>
    
    <View style={styles.header}>
      <Text style={styles.headerText}>LOGIN</Text>
    </View>
    <View>
    <Image style={styles.image} source={require('./image/unnamed.png')}/>
        <Text style={styles.logoText}>Welcome to MEDBUZZ</Text>
    </View> 

    <View style={styles.login}>
     <TextInput keyboardType={'email-address'} placeholder="Username/Email" onChangeText={(text)=>this.setState({email:text})} value={this.state.email} style={styles.screen} />
     <TextInput secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})} placeholder="Password" value={this.state.password} style={styles.screen}/>
     <Button title="Submit" onPress={() =>this.userSignin(this.state.email,this.state.password)}/>
      <Text onPress={()=>this.props.navigation.navigate('fpass')} style={{fontSize:15,color:'blue',marginTop:10}}>Forgot password</Text>
      <Text onPress={()=>this.props.navigation.navigate('front')} style={{fontSize:15,color:'blue',marginTop:8}}>New User? Sign Up</Text>
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
    // backgroundColor:'#484a0b',
    //borderWidth=1,
    padding:15,
    marginBottom:100,
    marginTop:20
    },
    screen:{
    borderWidth:2,
    borderColor:'black',
    width:'80%',
    padding:10,
    margin:15,
    justifyContent:'center'
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
    logoText: {
      marginVertical:20,
      fontSize:32,
      color:'red',
      justifyContent:'center',
      marginLeft:65
    },
    image:{
      marginLeft:160,
      marginTop:20,
      height:100,
      width:100,
    }
})

export default login;
