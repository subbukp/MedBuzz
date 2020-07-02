import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';
class settings extends Component{
    render(){
        return(
            <Fragment>
                <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
                <View style={styles.container}>
                
                    <View style={styles.box}>
                        <View style={styles.inner}>
                             <Text style={{color:'#fff'}}>Change Phone number</Text> 
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.inner}>
                             <Text style={{color:'#fff'}}>Change password</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.inner}>
                             <Text style={{color:'#fff'}}>Edit username</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.inner}>
                             <Text style={{color:'#fff'}}>Enable Dark mode</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.inner}>
                             <Text style={{color:'#fff'}}>Manage notifications</Text>
                        </View>
                    </View>
                </View>
            </Fragment>
            
        )
    };
}
const styles = StyleSheet.create({
    container: {
      padding: 5,
      width:'60%',
      height: '50%',
      flexDirection:'column',
    //   flexWrap:'wrap'
    },
    box: {
      width: '170%',
      height:'20%',
      padding:10,
      borderRadius:17
    },
    inner: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
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
  
  });
  
export default settings;