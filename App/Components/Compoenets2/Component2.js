//importing librarires
import React, {Component} from 'react';
// import stuff from react native, text is for when we want to output text and view is where we view different elements. 
import {AppRegistry, Text, View} from 'react-native';


//main component (everything else will import into this)
export default class Component2 extends Component {

  render(){

    return (

      <View>
                
                <Component1s/>
        
      </View>
    );
  }


}




AppRegistry.registerComponent("Component2", () => MyApp);