import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';

import addmed from './addmed';
import settings from './settings';
import history from './history';
import about from './about_us';
import Covid_Daily_Update from './covid';
import Covid_State_Update from './covid_state';
import * as firebase from 'firebase';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import dash from './dash';
import corona from './corona';
import signout from './signout';
import alarm from './alarm';
import login from './login';
import loading from './loading';
const Drawer = createDrawerNavigator();

 
export default class welcome1 extends Component {
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
              this.props.navigation.navigate('login');
          }
      })
  }
  componentWillUnmount(){
    this.unsuscribeAuth()
  }
  render(){
      return(    
       <Fragment>
      
        <NavigationContainer independent={true}>
             <Drawer.Navigator  >
      <Drawer.Screen name="Dashboard"   component={dash}  />
      <Drawer.Screen name="Add New Medicine"  component={addmed} />
      <Drawer.Screen name="History" component={history} />
      <Drawer.Screen name="Corona Guidelines" component={corona} />
      <Drawer.Screen name="Covid_Daily_Update" component={Covid_Daily_Update} />
      <Drawer.Screen name="Covid_State_Update" component={Covid_State_Update} />
      
      
      <Drawer.Screen name=" " component={alarm} />
      <Drawer.Screen name="  " component={dash} />
      <Drawer.Screen name="   " component={dash} />
      <Drawer.Screen name="    " component={dash} />
      <Drawer.Screen name="      " component={dash} />
      <Drawer.Screen name="       " component={dash} />
      <Drawer.Screen name="         " component={dash} />
      <Drawer.Screen name="Settings" component={settings} />
      <Drawer.Screen name="About us" component={about} />
      <Drawer.Screen name="Sign out" component={login} />
        
    </Drawer.Navigator>

        </NavigationContainer>
       </Fragment>
              
      )
  }
}