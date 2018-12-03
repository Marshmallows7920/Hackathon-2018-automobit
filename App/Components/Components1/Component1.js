//importing librarires
import React, {Component} from 'react';
// import stuff from react native, text is for when we want to output text and view is where we view different elements. 
import {AppRegistry, Text, StyleSheet, View} from 'react-native';

//main component (everything else will import into this)
export default class Component1s extends Component {

  render(){

    return (

      <View>
         <Text>

           <Anytext message = { '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\tWelcome to Automobit \n  \t\tYour Car\'s personal Fitness Tracker'
}> </Anytext>
         
           </Text> 
      </View>
    );
  }


}

class Anytext extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      message:props.message, 

    }
  }

  render(){

    return <Text> {this.state.message}</Text>
  }
}


AppRegistry.registerComponent("Component1s", () => Component1s);