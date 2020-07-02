import React, { Component,Fragment } from 'react';
import { View,Image,Text,ActivityIndicator,ImageBackground,StyleSheet,Button,TextInput, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { styles } from '../styles/styles';
class covid_state extends Component{
    constructor(props){
      super(props);
      this.state={
          isLoading: true,
          dataSource: null,
      }  
    }
    componentDidMount(){
        return fetch('https://api.covidindiatracker.com/state_data.json')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
            })
          .catch((error)=>{
                console.log(error)
          });
       
    }
render(){
    if(this.state.isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0c9"/>
            </View>
        )
    }
    else{
        let data = this.state.dataSource.map((val,key)=>{
            return <View key={key} style={styles.item}>
                <Text >State: {val.state}</Text>
                <Text >Confirmed cases: {val.confirmed}</Text>
                <Text >Active: {val.active}</Text>
                <Text >Recovered: {val.recovered}</Text>
                <Text >Deaths: {val.deaths}</Text>
            </View>
        });
    return(

        <View >
         <View style={styles.header}>
                <Text style={styles.headerText}>Covid Cases(State wise)</Text>
            </View>
            <SafeAreaView>
                <ScrollView>
                {data}
                </ScrollView>
            </SafeAreaView>
         
        </View>
    )
}
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    item:{
        flex:1,
        alignSelf:'auto',
        margin:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderBottomWidth:10,
        borderBottomColor:'#eee',
        paddingBottom:20
    },
    date:{
        flex:1,
        alignSelf:'stretch',
        margin:10,
        alignItems:'center',
        justifyContent:'flex-start',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    confirmed:{
        
        flex:1,
        alignSelf:'stretch',
        margin:10,
        alignItems:'center',
        justifyContent:'flex-end',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        
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
export default covid_state;