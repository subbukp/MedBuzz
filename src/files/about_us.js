import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';

export default class about_us extends Component{
    render(){
        return(
            <Fragment>
                <View style={styles.header}>
                    <Text style={styles.headerText}>About us</Text>
                </View>
                <View style={styles.container}>
                
                <View style={styles.box}>
               <View style={styles.inner}>
               <Image style={styles.image} source={require('./image/subbu.jpg')}/>
                        <Text style={styles.logoText}>Subrahmanya K P</Text>
                        <Text style={styles.logoText}>1DA17CS171</Text>
               </View>
             </View>
                
                
                <View style={styles.box}>
               <View style={styles.inner}>
               <Image style={styles.image} source={require('./image/yashu.jpg')}/>
                        <Text style={styles.logoText}>Yashas Jawali A M</Text>
                        <Text style={styles.logoText}>1DA17CS196</Text>
               </View>  
             </View>
             <Text style={styles.text}>VI Semester</Text>
             <Text style={styles.text}>Computer Scince and Engineering</Text>
             <Text style={styles.text}>Dr Ambedkar Institute of Technology</Text>
             
             <Text style={{marginLeft:30,marginBottom:10,color:'#65509f',marginTop:80,marginRight:80 ,fontSize:20}}>Guided by,</Text> 
             <Text style={styles.text}>Smt. Shanmuga Priya R</Text>
             <Text style={styles.text}>Asst. Professor, Dept. of CSE</Text>
             <Text style={styles.text}>Dr Ambedkar Institute of Technology</Text>

                </View>
            </Fragment>
        )
    }
}

const styles=StyleSheet.create({
    text:{
        marginLeft:40,
        fontSize:22,
    },
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
      logoText: {
        marginVertical:5,
        fontSize:23,
        color:'#65509f',
        justifyContent:'center',
        // marginLeft:5
      },
      image:{
        marginLeft:5,
        marginTop:20,
        height:150,
        width:150,
        borderRadius:70
      }
})

