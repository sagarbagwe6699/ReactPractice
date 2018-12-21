import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import LandingPage from './landing';
import App from '../App';
class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <div>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/s" component={App} />
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Routing;