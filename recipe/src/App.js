import React, { Component } from 'react';
import './App.css';
import Card from "./components/card";
import Form from "./components/form";
import Appbar from "./components/appBar";
import Mycardlayout from "./components/cardLayout";
import { createMuiTheme } from '@material-ui/core/styles';
import {purple,red,yellow} from '@material-ui/core/colors';
import Error from './components/Error';
import { Grid } from '@material-ui/core';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import Col from "./components/col";
//const API_KEY="1373cf3a0718a480bee3304f5f24f5ce";
//const API_KEY="8badcdbdb1dddec80ce2d12c1b4cf77d";
const url="https://www.food2fork.com/api/search?key=1373cf3a0718a480bee3304f5f24f5ce&q=shredded%20chicken";
var config = {
  apiKey: "AIzaSyA4Kdu6Y-Emp1AHlCeSwPOBQboPwPH3eTU",
  authDomain: "sample-22e0b.firebaseapp.com",
  databaseURL: "https://sample-22e0b.firebaseio.com",
  projectId: "sample-22e0b",
  storageBucket: "sample-22e0b.appspot.com",
  messagingSenderId: "326184133456"
};
firebase.initializeApp(config);
var database = firebase.database();
firebase.database().ref("user/").set({
  id:1,
  name:"sagar",
  age:19
})
console.log(database);



class App extends Component {
  constructor(){
    super();
    this.getR=this.getR.bind(this);
  }
  state={
    r: [],
    val: undefined
  }
  styles={
    block:{
      height:80,
      width:"100%"
    }
  }
  getR=async(newval)=>{
    //e.preventDefault();
    //const val=e.target.parentNode.search;
    //this.setState({val:this.refs.appBar.state.value});
    //console.log(this);
    fetch(`https://www.food2fork.com/api/search?key=1373cf3a0718a480bee3304f5f24f5ce&q=${newval}`)
    .then((data) => data.json()).then((d)=>{
      console.log(d.recipes[0]);
      this.setState({r:d.recipes});
    });
  }
  updateState(newval){
    this.setState({val:newval});
    console.log(this);
    this.getR(newval);
  }
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: red,
        secondary: yellow,
      },
    });
    console.log(this.state);
    if(this.state.r.length===0){
      return(
        <div>
        <div>
          <Appbar getR={this.getR.bind(this)} updateState={this.updateState.bind(this)} />
        </div>
        <div className="d-flex flex-row justify-content-center">
        </div>
        <div style={this.styles.block}></div>
        <Grid 
        container spacing={16}
        direction="row"
        justify="center"
        >
          <Error />
        </Grid>
      </div>
      );
    }
    return (
      <div>
        <div>
          <Appbar getR={this.getR.bind(this)} updateState={this.updateState.bind(this)} />
        </div>
        <div className="d-flex flex-row justify-content-center">
        </div>
        <div style={this.styles.block}></div>
        <Grid 
        container spacing={16}
        direction="row"
        justify="center"
        >
          {this.state.r.map((r)=><Mycardlayout title={r.title} img={r.image_url}/>)}
        </Grid>
      </div>
    );
  }
}

export default App;
