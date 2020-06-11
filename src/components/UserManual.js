import React from 'react'
import {View,Text,ScrollView} from 'react-native'

const UserManual = () =>{
 
    return (
        <ScrollView>
            <View>
           <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Steps To Send An Alert</Text>
           <Text style={styles.StyleToApp}>1) Login/SignUp To Your Application for the First Time</Text>
           <Text style={styles.StyleToApp}>2) Select Type Of Alert from the picker present at the bottom of screen</Text>
           <Text style={styles.StyleToApp}>3) Alert can be sent with or without image(Image is Preferable)</Text>
           <Text style={styles.StyleToApp}>4) After Sending Alert You will get a confirmation dialog with your current location</Text>
           <Text style={styles.StyleToApp}>5) Select send if you want to send or cancle it</Text>
           <Text style={styles.StyleToApp}>6) Upon choosing the send option you will get a popup to either video call with the responder</Text>
           <Text style={styles.StyleToApp}>7) You Can Start Streaming Or Cancle it</Text>
           </View>
           <View>
               <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>Step For Complain/LostAndFound/History Checking</Text>
               <Text>1) Open the side drawer there you will find every option</Text>
               <Text>2) You Can check your sent alerts in history tab</Text>
               <Text>3) You can Complain or give suggestions inside the Complain tab</Text>
               <Text>4) You can report/view lost and found items</Text>
           </View>
           <View>
               <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>Consequences For Multiple things</Text>
               <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',marginTop:10}}>1) Sending Worng Alert</Text>
               <Text style={styles.StyleToApp}>First It will be a warning second time 3 months of imprisionment with 10000 fine</Text>
               <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',marginTop:10}}>2 Sending Fake Lost And found</Text>
               <Text style={styles.StyleToApp}> Fine of 30000</Text>
               
           </View>
        </ScrollView>
    )
}


const styles={
    StyleToApp:{
        fontSize:18,
        paddingTop:5
    }
}
export default UserManual