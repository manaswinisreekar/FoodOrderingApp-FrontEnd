import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../screens/home/Home';

class Controller extends Component {
    constructor() {
        super();
        this.baseUrl = "localhost:3000";
    }
    render() {
        return (
            <div>
              <Router>
              <exact path="/" render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />

            </Router>
    
            </div>
        ); 
    }
}
export default Controller;