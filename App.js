//importing librarires
import React, {Component} from 'react';
// import stuff from react native, text is for when we want to output text and view is where we view different elements. 
import {AppRegistry, Text, View, Button} from 'react-native';

import Component1s from './App/Components/Components1/Component1'

//main component (everything else will import into this)
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: "home",
    }
  }

  viewSwitcher(){
    if(String(this.state.view) === String("home")){
      return <Home/>;
    }
  }

  render(){

    return (
        <React.Fragment>
          <View>
            <Button title="Home" onPress = {()=>this.setState({view:"home"})}></Button>
            <Button title="Speedometer" onPress = {()=>this.setState({view:"speedometer"})}/>
            <Button title="Fuel Consumption" onPress = {()=>this.setState({view:"fuel"})}/>
            <Button title="Diagnostic Codes" onPress = {()=>this.setState({view:"diag"})}/>
          </View>        
          {this.viewSwitcher()}
        </React.Fragment>
    );
  }


}

class Home extends Component{
  render(){
    return <Text>Home</Text>
  }
}




AppRegistry.registerComponent("App", () => MyApp);