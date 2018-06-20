import React, { Component } from 'react'
import {AppRegistry, navigator, View, Text, TouchableOpacity, TextInput, StyleSheet, Button, ScrollView} from 'react-native'

class bank extends Component {
   state = {
      name: '',
      branch: '',
      accno: '',
      ifsc: '',
      city: '',
   }
   handleName = (text) =>{
      this.setState({ name: text })
   }
   handleBranch = (text) =>{
      this.setState({ branch: text })
   }
   handleAccno= (text) =>{
    this.setState({ accno: text })
   }

    handleIfsc= (text) =>{
      this.setState({ ifsc: text })
    }
   
   
   render(){
      return (
        <ScrollView>
         <View style = {styles.container}>
         
         
         <Text style={styles.tittle}> Bank details</Text>
         
            
          


            <TextInput style = {styles.input}
              

               placeholder = " Bank Name"
               placeholderTextColor = "rgb(44,62,80)"
            
                autoCapitalize = "none"
               onChangeText = {this.handleName}/>

               <TextInput style = {styles.input}
               
               placeholder = "Branch"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleBranch}/>

               <TextInput style = {styles.input}
              
               placeholder = "Account number"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleAccno}/>


               <TextInput style = {styles.input}
               
               placeholder = "IFSC Code"
               placeholderTextColor = "rgb(44,62,80)"
               autoCapitalize = "none"
               onChangeText = {this.handleIfsc}/>
               



               <TouchableOpacity>
               <TextInput style={styles.input}
               placeholder = "Upload cancelled check"
               placeholderTextColor = "rgb(44,62,80)"/>
                 </TouchableOpacity>
              

               <TouchableOpacity  onPress={this._onPressButton} style={styles.buttonContainer}>
               <Text style={styles.buttonText}>DONE</Text>
              
        
                 </TouchableOpacity>
              

                
      </View>
      </ScrollView>

               
               

         
            
            
               
        
      
      )
   }
}
export default bank

const styles = StyleSheet.create({
  container: {
    "justifyContent": "center",
    "flex" : 1,
    
   
     
     
  },
  tittle:{
    "color": "black",
    "fontSize": 22,
    "fontWeight":"bold",
    "alignItems": "flex-start",
    "marginBottom": 40,
    "marginTop":10,
    textDecorationLine: 'underline',
  },
  input: {
   
     fontSize: 15,
     marginTop: 20,
     fontStyle:"italic",
     textDecorationLine: 'underline',
  },
  buttonContainer:{
    "alignItems": "center",
    "marginTop":60,
    "marginBottom": 0,
    "backgroundColor": "rgb(52,152,219)",
    "paddingVertical":16
    
  },
  buttonText:{
    "textAlign": "center",
    "color": "white",
    "fontSize":30,
    "fontWeight":"bold",
},
logo:{
  "alignItems": "center",
  height:30,


}

  

 });

               
               
               
            
            
            
   