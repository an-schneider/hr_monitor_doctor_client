import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var styles = {
    "dataStyle": {
        "marginTop": "20px",
        "marginBottom": "20px",
        "color": "blue",
    }
}

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
            "HR": [],
            "Times": [],
            "nameTextField": ""
        };
    }

    getData = () => {
        axios.get("http://vcm-3607.vm.duke.edu:5000/api/heart_rate/" + this.state.nameTextField).then( (response) => {
            console.log(response);
            console.log(response.status);
            this.setState({"HR": JSON.stringify(response.data["Heart_Rates"])});
            this.setState({"Times": JSON.stringify(response.data["Times"])})
        })
    }

    clearData = () => {
        this.setState({"HR":[]})
        this.setState({"Times":[]})
        this.setState({"nameTextField":[]})
    }


    onNameTextFieldChange = (event) => {
        // Update the nameTextField state whenever the text field is changed or perturbed in any way:
        this.setState({"nameTextField": event.target.value});
    }

    render() {
        return (
            <div style={{'color':"blue"}}>
                Enter Patient's Email: <span>
                <TextField
                    value={this.state.nameTextField}
                    onChange={this.onNameTextFieldChange}/> </span>
                <Button variant="raised" onClick={this.getData}>
                    Get Data
                </Button>
                <Button  variant="raised" onClick={this.clearData}>
                    Clear
                </Button>
                <div style={{'color':"black"}}>
                     Heart Rates (BPM):
                    <div style={{'color':"red"}}>
                        {this.state.HR}
                    </div>
                </div>
                <div style={{'color':"black"}}>
                    Times:
                </div>
                <div style={{'color':"red"}}>
                    {this.state.Times}
                </div>
            </div>
        )
    }
}

export default FetchData;
