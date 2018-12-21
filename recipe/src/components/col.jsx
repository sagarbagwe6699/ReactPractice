import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import { Switch, Button, Grow } from '@material-ui/core';
class Col extends Component {
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
    }
    state = { 
        checked: false,
     }
    styles={
        paper:{
            height: 100,
            width:100,
            margin: 60
        }
    }

    handleClick(){
        this.setState({checked:!this.state.checked});
    }

    render() { 
        return ( 
            <div>
                <Switch checked={this.state.checked} onClick={this.handleClick}></Switch>
                <Grow in={this.state.checked}>
                    <Paper style={this.styles.paper}>
                        Sagar
                    </Paper>
                </Grow>
                <Collapse in={this.state.checked} collapsedHeight="100px">
                    <Paper style={this.styles.paper}>
                        Sagar
                    </Paper>
                </Collapse>
            </div>
         );
    }
}
 
export default Col;