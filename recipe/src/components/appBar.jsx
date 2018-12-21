import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Form from './form';
class appBar extends Component {
    state = { 
      value: undefined
     }
    styles={
      menu:{
        marginRight: 10,
        textDecoration: "none",
        color: "white"
      },
      form:{
        marginLeft: 240
      }
    }
    handleUpdate(newval){
      console.log("Inside form");
      this.setState({value:newval});
      console.log("The form updated");
      this.props.updateState(newval);
    }
    render() { 
        return ( 
        <AppBar position="static">
          <Toolbar>
          <NavLink to="/">
            <IconButton color="inherit" style={this.styles.menu}>
              <ArrowBack />
            </IconButton>
          </NavLink>
            <Typography variant="title" color="inherit">
              Recepie Finder
            </Typography>
            <Form
              style={this.styles.form}
              getR={this.props.getR.bind(this)}
              changeAppBar={this.handleUpdate.bind(this)} 
              ref="form" />
          </Toolbar>
        </AppBar>
         );
    }
}
 
export default appBar;