import React, { Fragment } from 'react';
import {StyleSheet,View, Text,TouchableOpacity, ScrollView} from 'react-native';
import * as firebase from 'firebase';


if (!firebase.apps.length) {

    firebase.initializeApp({
      apiKey: 'AIzaSyAA8LCkL00jbxYZM2TYjtOYePv74YTjIUw',
      authDomain: 'fir-rn-54022.firebaseapp.com',
      databaseURL: "https://fir-rn-54022.firebaseio.com",
      storageBucket: "fir-rn-54022.appspot.com",
    });
   }

export default class History extends React.Component{
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
        })
    }
render(){
    return (
        <Fragment>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>History</Text>
            </View>

            <ScrollView>
            <View style={styles.box} >
              <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>{this.state.medname}</Text></Text>
              <Text style={styles.content}>Date : <Text style={{color:'red'}}>{this.state.sdate}</Text></Text>
              <Text style={styles.content}>Time : <Text style={{color:'red'}}>{this.state.time}</Text> </Text>
              <Text style={{fontSize:16,color:'yellow',textAlign:'center'}}>Taken</Text>
            </View>
            <View style={styles.box} >
              <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Dolo</Text></Text>
              <Text style={styles.content}>Date : <Text style={{color:'red'}}>23-06-2020</Text></Text>
              <Text style={styles.content}>Time : <Text style={{color:'red'}}>10:53</Text> </Text>
              <Text style={{fontSize:16,color:'yellow',textAlign:'center'}}>Taken</Text>
            </View>
            <View style={styles.box} >
              <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Atten</Text></Text>
              <Text style={styles.content}>Date : <Text style={{color:'red'}}>24-06-2020</Text></Text>
              <Text style={styles.content}>Time : <Text style={{color:'red'}}>9:00</Text> </Text>
              <Text style={{fontSize:16,color:'yellow',textAlign:'center'}}>Taken</Text>
            </View>
            <View style={styles.box} >
              <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Dolo</Text></Text>
              <Text style={styles.content}>Date : <Text style={{color:'red'}}>24-06-2020</Text></Text>
              <Text style={styles.content}>Time : <Text style={{color:'red'}}>10:53</Text> </Text>
              <Text style={{fontSize:16,color:'yellow',textAlign:'center'}}>Not Taken</Text>
            </View><View style={styles.box} >
              <Text style={styles.content}>Medicine name : <Text style={{color:'red'}}>Atten</Text></Text>
              <Text style={styles.content}>Date : <Text style={{color:'red'}}>25-06-2020</Text></Text>
              <Text style={styles.content}>Time : <Text style={{color:'red'}}>9:00</Text> </Text>
              <Text style={{fontSize:16,color:'yellow',textAlign:'center'}}>Not Taken</Text>
            </View>
           
            
            </ScrollView>

            <View style={styles.footer}>
            <TouchableOpacity style={styles.btn} onPress={this.clear}>
                <Text style={styles.btntxt}>Clear history</Text>
                </TouchableOpacity> 
            </View>
            
            

        </View>
        </Fragment>
    
      );
  }
}
const styles = StyleSheet.create({
    wrapper: {
        
        justifyContent:"center",
        alignContent:"center",
    },
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
        
        backgroundColor: '#455a64',
        paddingVertical: 12,
        paddingBottom:20,
        marginBottom:20,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    content: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    footer: {
            flexGrow: 1,
            alignItems:'flex-end',
            justifyContent:'center',
            paddingVertical:16,
            flexDirection:'row'
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
    footer: {
        position:'absolute',
        bottom:20,
        left:100,
        right:100,
        zIndex:10,
        
    },
    btn: {
        alignSelf:'center',
        width:100,
        backgroundColor:'#1c313a',
        borderRadius:20,
        justifyContent:'center',
        paddingBottom:15,
        justifyContent:'center',
        alignItems:'stretch',
        textAlign:'center'
    },
    btntxt: {
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingTop:15,
        color:'#fff',
        fontSize:16
    }
});