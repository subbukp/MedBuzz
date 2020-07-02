import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';
class fpass extends Component{
render(){
    return(
<Fragment>
    <View style={styles.header}>
        <Text style={styles.headerText}>Forgot Password</Text>
    </View>
    <View >
    <Text style={{fontSize:30,color:'black',marginTop:30,marginLeft:20}}>Reset your password</Text>
    </View>

    <View style={styles.login}>
     <TextInput  placeholder="Username" style={styles.screen}/>
     <TextInput keyboardType={'number-pad'} secureTextEntry={true} placeholder="Enter OTP"  style={styles.screen}/>
     <TextInput secureTextEntry={true} placeholder="New Password"  style={styles.screen}/>
     <TextInput secureTextEntry={true} placeholder="Confirm Password"  style={styles.screen}/>
     <Button  title="Submit" onPress={() =>this.props.navigation.navigate('login')}/>
    </View>


     </Fragment>
    )
}
}
const styles = StyleSheet.create({
    screen:{
    borderWidth:2,
    borderColor:'black',
    width:'80%',
    padding:10,
    marginBottom:20
    },
    login:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'saffron',
        //borderWidth=1,
        padding:10,
        marginBottom:100,
        marginTop:40
        
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
export default fpass;