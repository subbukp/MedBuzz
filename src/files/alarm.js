import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


if (!firebase.apps.length) {

    firebase.initializeApp({
      apiKey: 'AIzaSyAA8LCkL00jbxYZM2TYjtOYePv74YTjIUw',
      authDomain: 'fir-rn-54022.firebaseapp.com',
      databaseURL: "https://fir-rn-54022.firebaseio.com",
      storageBucket: "fir-rn-54022.appspot.com",
    });
   }

    

class alarm extends Component {

  state={
    email:'',medname:'jhd',color:'dsn',dose:'',sdate:'',edate:'',time:'',
  }

componentDidMount(){
  const med = firebase.database().ref("medicine");
     med.on("value",datasnap=>{
       this.setState({
         medname:datasnap.val().name,
         time:datasnap.val().mytime,
         dose:datasnap.val().dose,
       })
    })
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
            this.setState({
              
               email:user.email
               
           })
           
        }
      })
}

  render(){
  return (
  
    <Fragment>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notification</Text>
      </View>
        <Text style={{fontSize:22,marginTop:20,marginLeft:20}}>Hello,</Text>
        <Text style={{fontSize:22,marginLeft:35}}>{this.state.email} </Text>
        <Image style={styles.image} source={require('./image/unnamed.png')}/>
      
      <View style={styles.box} >
          <Text style={{color:'#fff',fontSize:22,marginLeft:10}}>It's {this.state.time} ,</Text>
  <Text style={{color:'#fff',fontSize:24,marginLeft:20}}>Time to take <Text style={{color:'red',fontSize:28}}>{this.state.medname}</Text></Text>
          
          <Text style={{color:'yellow',fontSize:28,marginLeft:20}}>{this.state.dose} mg</Text>
      </View>

      <View style={styles.footer}> 
        <View style={styles.button}>
          <Button  title="Okay, I will take"  />
           <Button title="Remind 5 min later" />
        </View>
      </View> 
    </Fragment>
  );
};
}

const styles = StyleSheet.create({
  
  footer: {
    // flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#65509f',
    flexDirection:'row',
    height:60,
    paddingBottom:10,
    position:'relative',
     marginTop:270,
    
},
content: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center'
},
button:{
  flex:1,
  color:'#455a64',
  flexDirection:"row",
  marginTop:30,
  height:25,
  justifyContent:'space-evenly',
  alignItems:'center',
  marginBottom:20
},
  image:{
    marginLeft:140,
    marginTop:20,
    height:150,
    width:150,
    marginBottom:40,
    marginTop:50
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
  
box: {
    alignSelf: 'center',
    width:400,
    
    backgroundColor: '#455a64',
    paddingVertical: 12,
    paddingBottom:20,
    marginBottom:20,
    marginTop:20,
    // alignItems:'center',
    // justifyContent:'center',
    borderRadius:20
},
})

export default alarm;
