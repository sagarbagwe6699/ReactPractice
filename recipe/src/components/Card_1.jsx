import React, { Component } from 'react';
import { Card, CardContent, Typography, CardActions, Button,Collapse,IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Card_1 extends Component {
    state = { 
        expanded: false
     }
    styles={
        card:{
            maxWidth: 345,
            marginTop: 60,
            marginBottom: 40
        },
        head:{
            marginBottom: 10
        }
    }

    expand=()=>{
        if(this.state.expanded){
            this.setState({expanded:false})
        }
        else{
            this.setState({expanded:true})
        }
        console.log(this.state);
    }

    render() { 
        return ( 
            <Card style={this.styles.card}>
                <CardContent>
                    <Typography variant="h5" component="h2" style={this.styles.head}>
                        Step {this.props.title}
                    </Typography>
                    <Typography component="p" variant="body3">
                    The step {this.props.title} is as follows
                    </Typography>
                    <Collapse in={this.state.expanded}>
                    <Typography component="p" variant="body3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio ut reiciendis unde itaque nisi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio ut reiciendis unde itaque nisi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio ut reiciendis unde itaque nisi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, optio ut reiciendis unde itaque nisi?                    
                    </Typography>
                </Collapse>
                </CardContent>
                <CardActions>
                    <IconButton onClick={this.expand}>
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </Card>
         );
    }
}
 
export default Card_1;