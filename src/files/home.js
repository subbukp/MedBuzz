import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
//import { StackNavigator } from 'react-navigation' ;

export default class home extends React.Component{
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
                 <TouchableOpacity /*onPress={this.props.navigation.navigate('addmed')}*/>
                   <Text>Add Medicine</Text>
                 </TouchableOpacity>
               </View>
             </View>

             <View style={styles.box}>
               <View style={styles.inner}>
                 <TouchableOpacity /*onPress={this.props.navigation.navigate('setalarm')}*/>
                   <Text>Set Alarm</Text>
                 </TouchableOpacity>
               </View>
             </View>

             <View style={styles.box}>
               <View style={styles.inner}>
                 <TouchableOpacity /*onPress={this.props.navigation.navigate('display')}*/>
                   <Text>Display</Text>
                 </TouchableOpacity>
               </View>
             </View>

             <View style={styles.box}>
               <View style={styles.inner}>
                 <TouchableOpacity /*onPress={this.props.navigation.navigate('history')}*/>
                   <Text>History</Text>
                 </TouchableOpacity>
               </View>
             </View>

             <View style={styles.box}>
               <View style={styles.inner}>
                 <TouchableOpacity /*onPress={this.props.navigation.navigate('coronatrack')}*/>
                   <Text>Corona Track</Text>
                 </TouchableOpacity>
               </View>
             </View>

             <View style={styles.box}>
               <View style={styles.inner}>
                 <TouchableOpacity /*onPress={this.props.navigation.navigate('aboutus')}*/>
                   <Text>About us</Text>
                 </TouchableOpacity>
               </View>
             </View>

           </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width:'100%',
    height: '80%',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box: {
    width: '50%',
    height:'50%',
    padding:10
  },
  inner: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }

});
