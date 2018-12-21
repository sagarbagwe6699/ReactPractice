import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Mycardlayout from "./cardLayout";
class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid container spacing={16}>
                <Grid item sm>
                    <Mycardlayout />
                </Grid>
                <Grid item sm>
                    <Paper>
                        Hello
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper>
                        Hello
                    </Paper>
                </Grid>
            </Grid>
            /*<div className="my__card m-2 row">
                <div className="col-4 p-4"><img src={this.props.img} alt="#" height="60px"/></div>
                <div className="col-8">{this.props.title}</div>
            </div>*/
         );
    }
}
 
export default Card;