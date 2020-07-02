import PushNotification from 'react-native-push-notification';
import { platform } from 'react-native';

export default class notificationManager {
    configure = (onRegister,onNotification,onOpenNotification) => {
        PushNotification.configure({
            onRegister: function (token) {
                onRegister(token)
                console.log("[notificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[notificationManager] onNotification:", notification);
            
                notification.userInteraction = true
                if(notification.userInteraction){
                    onOpenNotification(notification)
                }
                else{
                    onNotification(notification)
                }

                notification.finish('backgroundFetchResultNoData')
              },
        })   
    }

    _buildAndroidNotification = (id,title,message,data={},options={})=> {
        return{

            id: id, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
            // ticker: "My Notification Ticker", // (optional)
            autoCancel: true, // (optional) default: true
            largeIcon: options.largeIcon||"ic_launcher", // (optional) default: "ic_launcher"
            smallIcon: options.smallIcon||"ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
            bigText: message || "", // (optional) default: "message" prop
            subText: title || "", // (optional) default: none
            // color: "red", // (optional) default: system default
            vibrate: options.vibrate || true, // (optional) default: true
            vibration: options.vibration || 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            // tag: "some_tag", // (optional) add tag to message
            // group: "group", // (optional) add group to message
            // ongoing: false, // (optional) set whether this is an "ongoing" notification
            priority: options.priority || "high", // (optional) set notification priority, default: high
            // visibility: "private", // (optional) set notification visibility, default: private
            importance: options.importance || "high", // (optional) set notification importance, default: high
            // allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
            // ignoreInForeground: false,
            data:data
        }
    }

        showNotification = (id,title,message,data={},options={}) =>{
            PushNotification.localNotification({
                ...this._buildAndroidNotification(id,title,message,data,options),
                title:title || "",
                message : message || '',
                playSound : options.playSound || true,
                soundName : options.soundName || 'default',
                userInteraction:false
            })

        }

        cancelAllLocalNotification = () =>{
            PushNotification.cancelAllLocalNotifications()
        }

        unregister = () =>{
            PushNotification.unregister()
        }

    }

    // export const notificationmanager = new notificationManager()