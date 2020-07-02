import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';
 import * as firebase from 'firebase';
 import DatePicker from 'react-native-datepicker'
import TimePicker from "react-native-24h-timepicker";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
//  import 'firebase/firestore';
firebase.initializeApp({
  apiKey: 'AIzaSyAA8LCkL00jbxYZM2TYjtOYePv74YTjIUw',
  authDomain: 'fir-rn-54022.firebaseapp.com',
  databaseURL: "https://fir-rn-54022.firebaseio.com",
  storageBucket: "fir-rn-54022.appspot.com",
});

class addmed extends Component {

  
  constructor(props){
    super(props)
    this.state = {date:' 20-06-2020'};
    this.state = {time: " "};
0}

  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  state={
    email:'',medname:'', mednamer:'dd',color:'',colorr:'',dose:'',sdate:'',edate:'',mylist:[],time:'',
  }

componentDidMount(){
    // const med = firebase.database().ref("medicine");
    //  med.on("value",datasnap=>{
    //    console.log(datasnap.val())
    //    this.state.colorr=datasnap.val();
      //  this.state.mednamer=datasnap.val().name,
      //  this.state.mednamer=datasnap.val().name,
      //  this.state.mednamer=datasnap.val().name,
      //  this.state.mednamer=datasnap.val().name,
      //  this.state.mednamer=datasnap.val().name,
      //  this.state.mednamer=datasnap.val().name,
    //    console.log(this.state.colorr);
    //    console.log(this.state.mednamer);
    //    // console.log(this.state.text);
    //  })
     firebase.auth().onAuthStateChanged(user=>{
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




savemed(){
  
  const med1 = firebase.database().ref("medicine");
  med1.set({
    name:this.state.medname,
    color:this.state.color,
    dose:this.state.dose,
    sdate:this.state.sdate,
    edate:this.state.edate,
    mytime:this.state.time,
    time:Date.now()
  })
  console.log(this.state.medname);
  console.log(this.state.sdate);
  console.log(this.state.edate);
  console.log(this.state.time);
  this.setState({medname:""});
  this.setState({color:""});
  this.setState({dose:""});
  this.setState({sdate:""});
  this.setState({edate:""});
  this.setState({time:""});
}
  
/*  writeUserData = (email, text) =>  {
    firebase.database().ref('item/' + email).set({
      username: email,
      med: text,
      
    });
    console.log(this.state.text)
  }*/ 

  render(){
    
  return (
      <Fragment>
  <SafeAreaView>
    <ScrollView>
    <View style={styles.header}>
      <Text style={styles.headerText}>Add Medicine</Text>
    </View>

    <View >
      
      <Text style={{fontSize:30,color:'red',marginTop:20,marginLeft:20}}>Add New Medicine</Text>
    </View>

    <View style={styles.login}>
      <Text style={styles.display}>Enter medicine name</Text>
    <TextInput  placeholder="Type here " onChangeText={(text)=>this.setState({medname:text})} value={this.state.medname} style={styles.change} />
      <Text style={styles.display}>Enter medicine color</Text>
    <TextInput  placeholder="Type here" onChangeText={(text)=>this.setState({color:text})} value={this.state.color} style={styles.change} />
      <Text style={styles.display}>Enter medicine dose</Text>
    <TextInput  placeholder="Enter" keyboardType='number-pad' style={styles.change} 
        onChangeText={(text)=>this.setState({dose:text})} value={this.state.dose}  />
    
          <View style={styles.area}>
                    <Text style={styles.display}>Start Date :  </Text>
                    <DatePicker date={this.state.sdate} mode="date" placeholder="select date" format="DD-MM-YYYY"
                      confirmBtnText="Confirm" cancelBtnText="Cancel"
                      customStyles={{dateIcon: {position: 'absolute',left: 0,top: 4,marginLeft: 0},
                      dateInput: { marginLeft: 36} }}
                      onDateChange={(date) => {this.setState({sdate: date})}}
                    />
                </View>

                <View style={styles.area}>
                    <Text style={styles.display}>End Date :  </Text>
                    <DatePicker date={this.state.edate} mode="date" placeholder="select date" format="DD-MM-YYYY"
                      confirmBtnText="Confirm" cancelBtnText="Cancel"
                      customStyles={{dateIcon: {position: 'absolute',left: 0,top: 4,marginLeft: 0},
                      dateInput: { marginLeft: 36} }}
                      onDateChange={(date) => {this.setState({edate: date})}}
                    />
                </View>

                <View style={styles.area}>
                    <Text style={styles.display}>Time :  </Text>
                    <TouchableOpacity onPress={() => this.TimePicker.open()} style={styles.btn}>
                        <Text style={styles.btntxt}>Set</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.state.time}</Text>
                    <TimePicker ref={ref => {this.TimePicker = ref;}}
                        onCancel={() => this.onCancel()}
                        onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                    />                       
                </View>   

     <View style={styles.button}>
     <Button title="Cancel" onPress={() => this.props.navigation.navigate(' ')}/>
     <Button title="Save" onPress={() => this.savemed()}/>
     </View>
    </View>

    </ScrollView>
  </SafeAreaView>
     </Fragment>
  );
};
}

const styles = StyleSheet.create({
login:{
flex:1,
justifyContent:'center',
alignItems:'stretch',
padding:15,
marginVertical:10
},
screen:{
borderBottomWidth:1,
borderBottomColor:'black',
width:'80%',
padding:10,
margin:2,
},
button:{
  flex:1,
  flexDirection:"row",
  marginTop:30,
  height:25,
  justifyContent:'space-evenly',
  alignItems:'center',
},
display: {
  color:'black',
  fontSize:26,
  fontStyle:'italic',
  fontWeight:'bold',
  alignSelf:'stretch',
  
},
area: {
  alignSelf:'flex-start',
  alignItems:'center',
  justifyContent:'center',
  paddingVertical:10,
  flexDirection:'row',
  marginVertical:10
},
change: {
  color:'#455a64',
  fontSize:20,
  fontWeight:'bold',
  marginLeft:10
},
text: {
  fontSize: 30,
},
btn: {
  backgroundColor: "black",
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 10,
  marginVertical: 0,
  marginHorizontal:8
},
btntxt: {
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "600"
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

export default addmed;
