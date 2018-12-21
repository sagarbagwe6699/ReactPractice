import React, { Component } from 'react';
import Appbar from '../components/appBar_1';
import { Grid, Button } from '@material-ui/core';
import MyCard from '../components/Card_1';
import Info from '../components/Info';
import Footer from '../components/Footer';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
//import 'typeface-roboto';
import {title} from '../data';
var provider = new firebase.auth.GoogleAuthProvider();


class LandingPage extends Component {
    state = { 
        name: undefined
     }
    styles={
        wrapper:{
            background: "#F5F5F5"
        },
        btn:{
            marginBottom: 20
        }
    }

    Auth=()=>{
        firebase.auth().signInWithPopup(provider).then((result)=>{
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            let n=user.displayName;
            n=n[0];
            n=n.toUpperCase();
            console.log(n);
            this.setState({name:n});
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    render() { 
        console.log(title);
        return ( 
            <div>
               <Appbar Auth={this.Auth} name={this.state.name} />

               <Grid container direction="row" justify="center">
                <Grid item xl>
                <Info />
                </Grid>
               </Grid>

               <Grid
               container
               direction="row"
               justify="center"
               spacing={24}
               style={this.styles.wrapper}
               >
                        <Grid item xl={4}>
                            <MyCard title={title[0]}/>
                        </Grid>
                        <Grid item xl={4}>
                            <MyCard title={title[1]} />
                        </Grid>
                        <Grid item xl={4}>
                            <MyCard title={title[2]} />
                        </Grid>
                        <Grid container direction="row" justify="center">
                        <Grid item xl={12}>
                        <a href="s">
                            <Button variant="text" color="primary" style={this.styles.btn}>
                                About Us
                            </Button>
                        </a>
                        </Grid>
                        </Grid>
               </Grid>
               <Footer />
            </div>
         );
    }
}
 
export default LandingPage;