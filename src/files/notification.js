import React,{Component} from 'react';
import {View ,StyleSheet ,TouchableOpacity, Text} from 'react-native';
import {notificationManager} from './notificationManager';

export default class notification extends Component{
    constructor(props) {
        super(props)
        this.localNotify = null
    }

    componentDidMount() {
        this.localNotify = notificationManager
        this.localNotify.configure(this.onRegister,this.onNotification,this.onOpenNotification)
    }

    onRegister(token){
        console.log('[Notification] Registered:',token)
    }

    onNotification(notify){
        console.log('[Notification] onNotification:',notify)
    }

    onOpenNotification(notify){
        console.log('[Notification] onOpenNotification:',notify)
        alert("Open Notification")
    }

    onPressCancelNotification = () =>{
        this.localNotify.cancelAllLocalNotification()
    }

    onPressSendNotification =() =>{
        const options = {
            soundName: 'default',
            playSound: true,
            viberate: true
        }
        this.localNotify.showNotification(
            1,
            "App Notification",
            "Local Notification",
            {},
            options,
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.onPressSendNotification}>
                    <Text> Send notification</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onPressCancelNotification}>
                    <Text> Cancel notification</Text>    
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        alignItems:'center',
        backgroundColor:'red',
        padding:10,
        width:200,
        marginTop:10
    }
})