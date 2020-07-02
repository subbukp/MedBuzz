import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

class welcome extends Component {
  state={
    email:'',
}
componentDidMount(){
    this.unsuscribeAuth = firebase.auth().onAuthStateChanged(user=>{
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
componentWillUnmount(){
  this.unsuscribeAuth()
}

  
render(){
  return (
       <View style={styles.container}>
           <Text>yor are logged in as {this.state.email}</Text>

         <View style={styles.box}>
           <View style={styles.inner}>
             <Button onPress={()=>this.props.navigation.navigate('history')} title='history'/>
           </View>
           </View>
         

         <View style={styles.box}>
           <View style={styles.inner}>
             <TouchableOpacity style={styles.btn} /*onPress={this.props.navigation.navigate('setalarm')}*/>
               <Text style={styles.btntxt}>Set Alarm</Text>
             </TouchableOpacity>
           </View>
         </View>

         <View style={styles.box}>
           <View style={styles.inner}>
             <TouchableOpacity style={styles.btn} /*onPress={this.props.navigation.navigate('display')}*/>
               <Text style={styles.btntxt}>Display</Text>
             </TouchableOpacity>
           </View>
         </View>

         <View style={styles.box}>
           <View style={styles.inner}>
             <TouchableOpacity style={styles.btn} onPress={this.props.navigation.navigate('history')}>
               <Text style={styles.btntxt}>History</Text>
             </TouchableOpacity>
           </View>
         </View>

         <View style={styles.box}>
           <View style={styles.inner}>
             <TouchableOpacity style={styles.btn} /*onPress={this.props.navigation.navigate('coronatrack')}*/>
               <Text style={styles.btntxt}>Corona Track</Text>
             </TouchableOpacity>
           </View>
         </View>

         <View style={styles.box}>
           <View style={styles.inner}>
             <TouchableOpacity style={styles.btn} /*onPress={this.props.navigation.navigate('aboutus')}*/>
               <Text style={styles.btntxt}>About us</Text>
             </TouchableOpacity>
           </View>
         </View>

       </View>
  );
}
}

const styles = StyleSheet.create({
container: {
padding:10,
width:'100%',
height: '100%',
flexDirection:'column',
flexWrap:'wrap'
},
box: {
width: '30%',
height:'30%',
padding:10
},
inner: {
flex: 1,
backgroundColor: '#ffffff',
alignItems: 'center',
justifyContent: 'center'
},
btn: {
    alignSelf:'center',
    width:100,
    backgroundColor:'#1c313a',
    borderRadius:20,
    justifyContent:'center'
},
btntxt: {
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:10,
    alignSelf:'center',
    marginBottom:5,
    paddingTop:10,
    color:'#fff',
    fontSize:16
}

});
export default welcome;
