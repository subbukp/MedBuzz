import React from 'react';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import 'firebase/firestore';
if (!firebase.apps.length) {
  firebase.initializeApp({firebaseConfig});
}

// firebase.auth.Auth.Persistence.LOCAL;
// const db=firebase.firestore();
import fpass from './src/files/fpass';
import front from './src/files/front';
import login from './src/files/login';
import loading from './src/files/loading';
import welcome1 from './src/files/welcome1';
import addmed from './src/files/addmed';
import alarm from './src/files/alarm';
import history from './src/files/history';
import about from './src/files/about_us';
import dash from './src/files/dash';
import covid from './src/files/covid';
import covid_state from './src/files/covid_state';
import settings from './src/files/settings';
import setalarm from './src/files/setalarm';
import corona from './src/files/corona';
// import notification from './src/files/notification';
// import notificationManager from './src/files/notificationManager';
import signout from './src/files/signout';


import { createSwitchNavigator } from 'react-navigation';
import {NavigationContainer,DefaultTheme, /*DarkTheme*/ } from '@react-navigation/native';
/*import { createDrawerNavigator } from '@react-navigation/drawer';*/
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';


/*const Drawer = createDrawerNavigator();*/
const Stack = createStackNavigator();

App = () => {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: true,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  }

  createHomeStack = () =>
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="loading" component={loading}/>
      <Stack.Screen name="fpass" component={fpass} options={{title: "forgot password?" }} />
      <Stack.Screen name="settings" component={settings} options={{title:"settings"}}/>
      
      
      <Stack.Screen name="addmed" component={addmed}  options={{ title: "add new med"}}/>
         <Stack.Screen name="history" component={history} options={{title: "history of med" }}/>
      
      <Stack.Screen name="dash" component={dash}/> 
   
       
         {/* <Stack.Screen name="notification" component={notification}/> */}
         {/* <Stack.Screen name="notificationManager" component={notificationManager}/>  */}
         
         <Stack.Screen name="alarm" component={alarm} options={{title: "alarm" }}/>
         
         
         <Stack.Screen name="about" component={about} options={{ title: "About Us" }}/>
         {/* <Stack.Screen name="notification" component={notification} options={{ title: "Notification" }}/> */}
      
       
      
      <Stack.Screen name="corona" component={corona} options={{ title: "Corona Care" }}/>
      <Stack.Screen name="covid" component={covid} options={{ title: "Covid Tracker" }}/> 
       <Stack.Screen name="covid_state" component={covid_state} options={{ title: "Covid  state" }}/>
     
    
      
   
     
       
      
      <Stack.Screen name="front" component={front} options={{ title: "Sign Up" }}/>
      
       <Stack.Screen name="login" component={login} />
      
      <Stack.Screen name="welcome1" component={welcome1}  options={{title: "Dashboard1" }} />
     
      
       
      
      
      
      <Stack.Screen name="setalarm" component={setalarm} options={{title: "setalarm" }}/>
      <Stack.Screen name="signout" component={signout} options={{title: "signout" }}/>

      
    </Stack.Navigator>

/*  createDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="add med"  component={login} />
      <Drawer.Screen name="home1"  component={home} />
      <Drawer.Screen name="set alarm" component={alarm} />
      <Drawer.Screen name="History" component={alarm} />
      <Drawer.Screen name="Settings" component={alarm} />
      <Drawer.Screen name="Settings1" component={alarm} />
      <Drawer.Screen name="about us" component={about} />
        
    </Drawer.Navigator>*/

  /*
  <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} />
  createTopTabs = (props) => {
    return <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab 1"
        component={Tab1}
        options={{ title: props.route.params.name }}
      />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  }

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab 1"
        style={{ marginBottom: 16 }}
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          )
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }*/

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'light' ? DarkTheme : MyTheme}>
        {this.createHomeStack()}
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;