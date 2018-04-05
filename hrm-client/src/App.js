import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import ClientTextField from './ClientTextField.js';
import axios from 'axios';
import FetchData from './GetData.js'

class App extends Component {
  render() {
    return (
        <div>
            <FetchData/>
        </div>
    );
  }
}

export default App;
