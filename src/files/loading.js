import React,{Component} from 'react';
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export default class loading extends Component{
    componentDidMount(){
      this.unsuscribeAuth = firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            this.props.navigation.navigate("login")
          }else{
            this.props.navigation.navigate("login")
          }
    
        })
      }
      componentWillUnmount(){
        this.unsuscribeAuth()
      }
    render(){
        return(
            <View style={styles.act}>
                <ActivityIndicator size="large" color="black" />
            </View>
            
        );
    };
} 
const styles = StyleSheet.create({
  act:{
  flex:1,
  justifyContent:'center',
  fontSize:26
  },
})