import React from 'react';
import {StyleSheet,View,Text,KeyboardAvoidingView,TouchableOpacity,TextInput} from 'react-native';
//import {DatePicker,TimePickerAndroid } from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'
import TimePicker from "react-native-24h-timepicker";

export default class setalarm extends React.Component{

    constructor(props){
        super(props)
        this.state = {date:' 20-06-2020'};
        this.state = {time: " "};
    }
    
      onCancel() {
        this.TimePicker.close();
      }
     
      onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
      }
    
    render(){
      return (
          <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.container}> 
            
            
            <Text style={styles.display}>       Medicine Name: </Text>
            <TextInput style={styles.change}  placeholder="Enter medicine name" value={this.state.currentMedicineItem} 
            onChangeText={(text)=> this.setState(prevstate => ({currentMedicineItem: prevstate.currentMedicineItem=text})) }/>
                
                <View style={styles.area}>
                    <Text style={styles.display}>Start Date :  </Text>
                    <DatePicker
                    
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
      
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                    dateInput: {
                    marginLeft: 36
                    }
          // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>

                <View style={styles.area}>
                    <Text style={styles.display}>End Date :  </Text>
                    <DatePicker
                    
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
      
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                        },
                    dateInput: {
                    marginLeft: 36
                    }
          // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>

                <View style={styles.area}>
                    <Text style={styles.display}>Time :  </Text>
                    <TouchableOpacity onPress={() => this.TimePicker.open()} style={styles.button}>
                        <Text style={styles.buttonText}>set</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.state.time}</Text>
                    <TimePicker ref={ref => {this.TimePicker = ref;}}
                        onCancel={() => this.onCancel()}
                        onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                    />
                       
                </View>
                
                <TouchableOpacity style={styles.btn} onPress={this.save}>
                <Text style={styles.btntxt}>Save</Text>
                </TouchableOpacity>
                
            </View>
          </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1
    },
    container: {
        flexGrow : 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'
    },
    display: {
        color:'black',
        fontSize:18,
        fontStyle:'italic',
        fontWeight:'bold',
        alignSelf:'stretch',
        
    },
    area: {
        
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        flexDirection:'row'
    },
    
    change: {
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        marginLeft:100
    },
    btntxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    btn: {
        alignSelf: 'center',
        width:300,
        backgroundColor: '#1c313a',
        borderRadius:25,
        paddingVertical: 12,
        marginVertical:10,
        alignItems:'center',
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginVertical: 0,
        marginHorizontal:8
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600"
      },
      text: {
        fontSize: 36,
        marginTop: 10
      }
});
