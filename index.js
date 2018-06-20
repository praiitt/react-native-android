import { AppRegistry} from 'react-native';
import React, { Component } from 'react';
import {Navigation } from 'react-navigation';

import App from './App';
import kyc from './android/app/components/kyc';
import bank from './android/app/components/bank';

export default class project extends Component{

    render(){
      return(
        <navigator initialRoute = {{id : 'App'}}
      renderScence = {this.navigatorRenderScence}/>);
          <View>
            <App/>
            <kyc/>
            <bank/>
            </View>
        

      
    }

  navigatorRenderScence(route, navigator){
    switch(route,id){
     case 'App':
     return(<App navigator ={navigator}/>);
     case 'kyc':
     return(<kyc navigator ={navigator}/>);
     case 'bank':
     return(<bank navigator ={navigator}/>);
    }
    
  }
    
  
}



  




AppRegistry.registerComponent('project', () => App);
