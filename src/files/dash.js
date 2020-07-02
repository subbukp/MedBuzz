import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput,TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import state from './addmed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import alarm from './alarm';

if (!firebase.apps.length) {

 firebase.initializeApp({
   apiKey: 'AIzaSyAA8LCkL00jbxYZM2TYjtOYePv74YTjIUw',
   authDomain: 'fir-rn-54022.firebaseapp.com',
   databaseURL: "https://fir-rn-54022.firebaseio.com",
   storageBucket: "fir-rn-54022.appspot.com",
 });
}
export default class dash extends Component{
    
  state={
      email:'',medname:'',color:'',dose:'',sdate:'',edate:'',time:'',
    }

  componentDidMount(){
    const med = firebase.database().ref("medicine");
       med.on("value",datasnap=>{
         this.setState({
           dose:datasnap.val().dose,
           medname:datasnap.val().name,
           sdate:datasnap.val().sdate,
           edate:datasnap.val().edate,
           color:datasnap.val().color,
           time:datasnap.val().mytime,

         })
     
      //   this.state.color=datasnap.val().color,
      //  this.state.dose=datasnap.val().dose,
      //  this.state.edate=datasnap.val().edate,
      //    this.state.time=datasnap.val().mytime,
      //    this.state.sdate=datasnap.val().sdate,
      //    this.state.medname=datasnap.val().name,
       })
      
      firebase.auth().onAuthStateChanged(user=>{
            if(user){
                  this.setState({
                    
                     email:user.email
                     
                 })
                 
              }
              else{
                  this.props.navigation.navigate.relace('login');
              }
             
          })
          
        }
        userSignout(){
          firebase.auth().signOut()
          .catch(error=> {
             Alert.alert(error.message)   
          })  
          
        }
     
  

      render(){
        
          return(
               <Fragment>
                 <SafeAreaView >
                 <View style={styles.header}>
                    <Text style={styles.headerText}>Dashboard</Text>
                </View>
                <Text style={{fontSize:24,marginTop:10,marginLeft:10}}>You are logged in as : {this.state.email }</Text>
                <ScrollView>
                <View style={styles.box}>
                <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>{this.state.medname}</Text> </Text>
                <Text style={styles.content}>Medicine dose(mg) : <Text style={{color:'red'}}>{this.state.dose}</Text> </Text>
                <Text style={styles.content}>Medicine colour : <Text style={{color:'red'}}>{this.state.color}</Text> </Text>
                <Text style={styles.content}>Start date : <Text style={{color:'red'}}>{this.state.sdate}</Text> </Text>
                <Text style={styles.content}>End date : <Text style={{color:'red'}}>{this.state.edate}</Text> </Text>
                <Text onPress={()=>this.props.navigation.navigate(' ')} style={styles.content}>Time to take : <Text style={{color:'red'}}>{this.state.time}</Text> </Text>
                </View>
                <View style={styles.box}>
                <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Paracetomol</Text> </Text>
                <Text style={styles.content}>Medicine dose(mg) : <Text style={{color:'red'}}>500</Text> </Text>
                <Text style={styles.content}>Medicine colour : <Text style={{color:'red'}}>white</Text> </Text>
                <Text style={styles.content}>Start date : <Text style={{color:'red'}}>26-06-2020</Text> </Text>
                <Text style={styles.content}>End date : <Text style={{color:'red'}}>27-06-2020</Text> </Text>
                <Text onPress={()=>this.props.navigation.navigate(' ')} style={styles.content}>Time to take : <Text style={{color:'red'}}>14.20</Text> </Text>
                </View>
                <View style={styles.box}>
                <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Atten</Text> </Text>
                <Text style={styles.content}>Medicine dose(mg) : <Text style={{color:'red'}}>25</Text> </Text>
                <Text style={styles.content}>Medicine colour : <Text style={{color:'red'}}>white</Text> </Text>
                <Text style={styles.content}>Start date : <Text style={{color:'red'}}>24-06-2020</Text> </Text>
                <Text style={styles.content}>End date : <Text style={{color:'red'}}>27-06-2020</Text> </Text>
                <Text onPress={()=>this.props.navigation.navigate(' ')} style={styles.content}>Time to take : <Text style={{color:'red'}}>9.00</Text> </Text>
                </View>
                <View style={styles.box}>
                <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Citrizine</Text> </Text>
                <Text style={styles.content}>Medicine dose(mg) : <Text style={{color:'red'}}>100</Text> </Text>
                <Text style={styles.content}>Medicine colour : <Text style={{color:'red'}}>white</Text> </Text>
                <Text style={styles.content}>Start date : <Text style={{color:'red'}}>04-07-2020</Text> </Text>
                <Text style={styles.content}>End date : <Text style={{color:'red'}}>27-07-2020</Text> </Text>
                <Text onPress={()=>this.props.navigation.navigate(' ')} style={styles.content}>Time to take : <Text style={{color:'red'}}>21.00</Text> </Text>
                </View>
                </ScrollView>
                
                 </SafeAreaView>
               </Fragment>    
               
          );
      };
}

const styles=StyleSheet.create({
  
  container: {
    flexGrow : 1,
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    
    backgroundColor:'#ffffff'
},
box: {
    alignSelf: 'center',
    width:400,
    marginTop:20,
    backgroundColor: '#455a64',
    paddingVertical: 12,
    paddingBottom:20,
    // marginBottom:600,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
},
content: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignItems:'center',
    padding:5,
    marginLeft:2
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