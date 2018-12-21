import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
class Footer extends Component {
    state = {  }
    styles={
        foot:{
            fontSize: 20,
            color: "#757575"
        },
        wrapper:{
            padding:"40px 0px 0px 10px"
        }
    }
    render() { 
        return ( 
            <div style={this.styles.wrapper}>
                <Typography variant="subheading" component="p" align="center" style={this.styles.foot}>
                    Footer
                </Typography>
            </div>
         );
    }
}
 
export default Footer;