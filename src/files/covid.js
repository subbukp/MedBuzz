import React, { Component,Fragment } from 'react';
import { View,Image,Text,ActivityIndicator,ImageBackground,StyleSheet,Button,TextInput } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { styles } from '../styles/styles';
class covid extends Component{
    constructor(props){
      super(props);
      this.state={
          isLoading: true,
          dataSource: null,
      }  
    }
    componentDidMount(){
        return fetch('https://api.covid19india.org/data.json')
        .then((response)=>response.json())
       
        .then((responseJson)=>{
            this.setState({
                isLoading: false,
                dataSource: responseJson.cases_time_series,
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
                <Text >Date:{val.date}</Text>
                <Text >Total Confirmed:{val.totalconfirmed}</Text>
                <Text >Total Recovered:{val.totalrecovered}</Text>
                <Text >Total Deceased:{val.totaldeceased}</Text>
                <Text >New Case:{val.dailyconfirmed}</Text>
                <Text >Recovered:{val.dailyrecovered}</Text>
                <Text >Deceased:{val.dailydeceased}</Text>
            </View>
        });
    return(

        <View >
         <View style={styles.header}>
                <Text style={styles.headerText}>Covid Cases(Day wise)</Text>
            </View>
         <SafeAreaView >
         <ScrollView >{data}</ScrollView>
         </SafeAreaView>
         
        </View>
    )
}
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column-reverse',
        marginBottom:10,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        
    },
    item:{
        flex:1,
        alignSelf:'auto',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:10,
        borderBottomColor:'#eee',
        paddingBottom:20,
        
    },
    date:{
        flex:1,
        alignSelf:'stretch',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    confirmed:{
        
        flex:1,
        alignSelf:'stretch',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
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
export default covid;