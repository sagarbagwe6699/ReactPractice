import React, { Component } from 'react';
import {AppBar,Toolbar,IconButton,Typography,Button,Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


class AppBar_1 extends Component {
    state = {  }
    styles={
        avt:{
            position: "absolute",
            right: 20
        },
        btn:{
            position: "absolute",
            right: 60
        }
    }
    render() { 
        return ( 
            <AppBar position="static">
                    <Toolbar>
                    <IconButton color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Recipe Finder
                    </Typography>
                    <Avatar style={this.styles.avt}>{this.props.name}</Avatar>
                    <Button color="inherit" style={this.styles.btn} onClick={this.props.Auth} >Login</Button>
                    <div />
                    <div>
                    </div>
                    </Toolbar>
            </AppBar>
         );
    }
}
 
export default AppBar_1;