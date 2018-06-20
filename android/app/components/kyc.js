import React, { Component } from 'react'
import { navigator, View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, ScrollView} from 'react-native'


class kyc extends Component {

  _onPressButton() {
    
  }


  

   state = {
      card: '',
      anumber: '',
      drive: '',
      lnumber: '',
      vehicle: '',
      vnumber: '',
      vcolor: ''
   }
   handleCard= (text) =>{
      this.setState({ card: text })
   }
   handleAnumber = (text) =>{
      this.setState({ anumber: text })
   }
   handleDrive= (text) =>{
    this.setState({ drive: text })
   }

    handleLnumber= (text) =>{
      this.setState({ lnumber: text })
    }
    handleVehicle= (text) =>{
      this.setState({ vehicle: text })
    }
    handleVnumber= (text) =>{
      this.setState({ vnumber: text })
    }
    handleVcolor= (text) =>{
      this.setState({ vcolor: text })
    }
   
   
   render(){
      return (
        <ScrollView>
         <View style = {styles.container}>
         
         
         <Text style={styles.tittle}> KYC details</Text>


          <View style={styles.buttoncontainer}>
          <Button 
            onPress={this._onPressButton}
            title="Upload Aadhaar Card"/>
          </View>
        

        
               <TextInput style = {styles.input}
               
               placeholder = "Aadhaar Card Number"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleAnumber}/>

             <View style={styles.buttoncontainer}>

               <Button
               onPress={this._onPressButton}
              
               title= "Upload Drivers License"/>
              
            </View>


               <TextInput style = {styles.input}
               
               placeholder = "Drivers License Number"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleLnumber}/>

               <Text style={styles.tittletwo}>  vehicles details</Text>


               <TextInput style = {styles.input}
               
               placeholder = "What Vehicles Do You Own?"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleVehicle}/>

               <TextInput style = {styles.input}
               
               placeholder = "Vehicle Number"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleVnumber}/>

               <TextInput style = {styles.input}
          
               placeholder = "Vehicles Color"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleVcolor}/>

               <TouchableOpacity onPress={ () => this.props.navigator.push({id:'bank'})}>
               <View style={styles.box}>
               <Text style={styles.Text}>NEXT</Text>
               </View>
              
        
                 </TouchableOpacity>
              

              
      </View>
      </ScrollView>
    

                
            
               
        
      
      )
   }
}
export default kyc

const styles = StyleSheet.create({
   container: {
     "justifyContent": "center",
     "flex" : 1,
     "backgroundColor":"white",
    
   },
   tittle:{
     "color": "black",
     "fontSize": 18,
     "fontWeight":"bold",
     "alignItems": "flex-start",
     "marginBottom": 23,
     textDecorationLine: 'underline',
   },

   buttoncontainer:{
     "alignItems":"flex-start",
     "backgroundColor":"white",
     "marginTop":25,
     "borderRadius":150/2,
     

   },

  

   tittletwo:{
    "color": "black",
    "fontSize": 20,
    "fontWeight":"bold",
    "alignItems": "flex-start",
    "marginTop": 27,
    "marginBottom": 20,
    textDecorationLine: 'underline',
  },
   input: {
    
      fontSize: 16,
      marginTop: 20,
      fontStyle:"italic",
      

      textDecorationLine: 'underline',
   },
   box:{
     "alignItems": "center",
     "marginTop":50,
     "marginBottom": 0,
     "backgroundColor": "rgb(52,152,219)",
     "paddingVertical":10
     
   },
   Text:{
     "textAlign": "center",
     "color": "white",
     "fontSize":25,
     "fontWeight":"bold",
 },
 logo:{
   "alignItems": "center",
   height:30,


 }

   
 
  });



