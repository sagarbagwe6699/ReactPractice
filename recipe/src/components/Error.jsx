import React, { Component } from 'react';
import { Paper,Typography} from '@material-ui/core';
class Error extends Component {
    state = {  }
    styles={
        paper:{
            padding: 40
        },
        font:{
            fontSize: 20
        }
    }
    render() { 
        return ( 
            <div>
                <Paper style={this.styles.paper}>
                <Typography variant="caption" style={this.styles.font}>
                    No Rresults Available
                </Typography>
                </Paper>
            </div>
         );
    }
}
 
export default Error;