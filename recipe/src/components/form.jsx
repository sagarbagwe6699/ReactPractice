import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import color from '@material-ui/core/colors/deepOrange';
class Form extends Component {
    state = { 
        search:""
     }
    styles={
        inp:{
            marginLeft:40,
            marginRight:10,
            color:"white"
        },
        btn:{
            margin: 10,
            color: "white"
        }
    }
    handleInput=(e)=>{
        //console.log("Inside form");
        //this.setState({search:this.refs.tf});
        this.props.changeAppBar(this.state.search);
        //console.log(this.state.search);
    }
    handleSearch(e){
        this.setState({search:e.target.value});
    }
    render() { 
        return ( 
            <form>
                <TextField style={this.styles.inp} margin="normal" name="search"
                ref="tf"
                onBlur={this.handleSearch.bind(this)}
                className="my__inp"
                >
                </TextField>
                <Button color="white" variant="text" onClick={this.handleInput.bind(this)} style={this.styles.btn}>Search</Button>
            </form>
         );
    }
}
 
export default Form;