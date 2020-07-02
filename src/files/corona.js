import React, { Component,Fragment } from 'react';
import { View,Image,Text,ActivityIndicator,ImageBackground,StyleSheet,Button,TextInput, ProgressBarAndroidComponent } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class corona extends Component{
    render(){
        return(
           <Fragment>
                <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.headerText}>CORONA CARE</Text>
                    </View>
                <ScrollView>
                   
                    <Text style={{color:'#455a64',fontSize:20,justifyContent:'center',marginTop:20,marginLeft:20}}>
                        Coronavirus (COVID-19): Home Care & Precautions</Text>
                    <Image style={styles.image} source={require('./image/coronavirus-dos-donts.jpg')}/>
                    <Image style={styles.image} source={require('./image/Hand-Wash.jpg')}/>
                    <Image style={styles.image} source={require('./image/Cover-your-mouth-and-nose.jpg')}/>
                    <Image style={styles.image} source={require('./image/Consult-a-doctor.jpg')}/>
                    <Image style={styles.image} source={require('./image/Stay-indoors.jpg')}/>
                    <Image style={styles.image} source={require('./image/Avoid-close-contact-with-anyone.jpg')}/>
                    <Image style={styles.image} source={require('./image/No-spitting.jpg')}/>
                    <Image style={styles.image} source={require('./image/Avoid-travelling.jpg')}/>
                    <Image style={styles.image} source={require('./image/No-Self-Treatment.jpg')}/>
                    <Image style={styles.image} source={require('./image/Dont-panic.jpg')}/>
                    <Image style={styles.image} source={require('./image/Dont-touch-your-face.jpg')}/>
                </ScrollView>
                </SafeAreaView>
                <View style={styles.footer}> 
                 <View style={styles.button}>
                    <Button  title="Daily update" onPress={() => this.props.navigation.navigate( 'Covid_Daily_Update' )} />
                        <Button title="State update" onPress={() => this.props.navigation.navigate('Covid_State_Update')}/>
                    </View> 
                        
                     </View> 
            </Fragment>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        
        flex:10,
        // alignItems:'stretch',
        justifyContent:'center',
        
        backgroundColor:'#ffffff'
    },
    image:{
        // flex:1,
        flexDirection:'row',
        marginLeft:30,
        marginTop:20,
    //    paddingTop:20,
        width:380,
        height:250,
        justifyContent:'space-evenly',
        paddingBottom:10
      },
      button:{
        flex:1,
        color:'black',
        flexDirection:"row",
        marginTop:30,
        height:25,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginBottom:20
      },
      header: {
        backgroundColor:'#65509f',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText: {
        color:'#FFF',
        fontSize:24,
        padding:20
    },
    footer: {
        // flexGrow: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#65509f',
        flexDirection:'row',
        height:60,
        paddingBottom:10
},
    
})