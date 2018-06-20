

import React, { Component } from 'react'
import {StatusBar, Header, View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, ScrollView} from 'react-native';

 import { Navigation} from 'react-navigation';

class App extends Component {


    constructor(props){
      super(props);
      this.state={id:"App"}

    }

    onPressButton(){
      this.props.navigator.push({id: 'kyc'})
    }


   state = {
      name: '',
      mobile: '',
      country: '',
      state: '',
      city: '',
      address: '',
      gender: ''
   }
   handleName = (text) =>{
      this.setState({ name: text })
   }
   handleMobile = (text) =>{
      this.setState({ mobile: text })
   }
   handleCountry= (text) =>{
    this.setState({ country: text })
   }

    handleState= (text) =>{
      this.setState({ state: text })
    }
    handleCity= (text) =>{
      this.setState({ city: text })
    }
    handleAddress= (text) =>{
      this.setState({ address: text })
    }
    handleGender= (text) =>{
      this.setState({ gender: text })
    }
   
   
   render(){
      return (
        
        <ScrollView>
            <View style = {styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false}/>
         
         
              <Text style={styles.tittle}> Personal details</Text>
              <View style={styles.logocontainer}>
                <Image
                    style={styles.logo}
                    source={require('./android/app/image/logo.png')}
                />
              </View>
         
            <TextInput style = {styles.input}
              
               placeholder = "Name"
               placeholderTextColor = "rgb(44,62,80)"
                autoCapitalize = "none"
               onChangeText = {this.handleName}/>

               <TextInput style = {styles.input}
               
               placeholder = "Mobile"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleMobile}/>

               <TextInput style = {styles.input}
              
               placeholder = "Country"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleCountry}/>


               <TextInput style = {styles.input}
               
               placeholder = "State"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleState}/>


               <TextInput style = {styles.input}
               
               placeholder = "City"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleCity}/>

               <TextInput style = {styles.input}
               
               placeholder = "Address"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress}/>

               <TextInput style = {styles.input}
          
               placeholder = "Gender"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleGender}/>

               <View style={styles.buttonContainer}>
               <Button 
               onPress={this.onPressButton.bind(this) }
                title="NEXT"/>
                </View>
              
              
        
                
              

              
      </View>
      </ScrollView>
    

          
      
      );
   }
}
export default App

const styles = StyleSheet.create({
   container :  {
     "justifyContent" : "center",
     "flex" : 1,
     },
   tittle:{
     "color": "black",
     "fontSize": 20,
     "fontWeight":"bold",
     "alignItems": "flex-start",
     "marginBottom": 30,
     textDecorationLine: 'underline',
   },

   logocontainer:{
     "alignItems": "center",
     flexGrow : 1,
     justifyContent: "center",
    
   },

   logo:{
     height:85,
     width:80,
     borderRadius:150/2,
    
   },

  
   input: {
    
      fontSize: 13,
      marginTop: 15,
      fontStyle: "italic",
      

      textDecorationLine: 'underline',
   },
   buttonContainer:{
     "alignItems": "center",
     "marginTop":50,
     "marginBottom": 0,
     "backgroundColor": "rgb(52,152,219)",
     "paddingVertical":14
     
   },
   buttonText:{
     "textAlign": "center",
     "color": "white",
     "fontSize":30,
     "fontWeight":"bold",
 }
  });

