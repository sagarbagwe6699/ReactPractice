import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
class Info extends Component {
    state = {  }
    styles={
        heading:{
            fontSize: 50
        },
        wrapper:{
            margin: 40,
            width: 650
        },
        subheading:{
            fontSize: 20,
            color: "#757575"
        },
        text:{
            fontSize: 35,
            marginTop: 50,
            marginBottom: 20,
            color: "#757575"
        },
        nav:{
            textDecoration: "none",
        },
        btn:{
            margin:20
        }
    }
    render() { 
        return ( 
            <div style={this.styles.wrapper}>
                <Typography variant="h1" component="h1"  style={this.styles.heading} align="center">
                    Find your Recipe
                </Typography>
                <Typography variant="h2" component="h1" align="center" style={this.styles.text}>
                    How to use
                </Typography>
                <Typography variant="body1"  align="center" style={this.styles.subheading}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam
                    voluptatibus quae, ducimus aliquam itaque non reprehenderit architecto
                    molestias asperiores.
                </Typography>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xl={6}>
                    <Button variant="raised" color="primary">
                        Tutorial
                    </Button>
                </Grid>
                <Grid item xl>
                <NavLink to="/s" style={this.styles.nav}>
                    <Button variant="outlined" color="primary" style={this.styles.btn}>
                        Get Started
                    </Button>
                    </NavLink>
                </Grid>
            </Grid>
            </div>
         );
    }
}
 
export default Info;