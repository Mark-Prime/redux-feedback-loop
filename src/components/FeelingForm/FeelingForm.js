import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Forward from '@material-ui/icons/Forward'


class FeelingForm extends Component {
    state = {
        value: '3',
    };

    componentDidMount() {
        // Loads the previous info if any is saved
        if(this.props.formSubmit.feeling){
            this.setState({value: this.props.formSubmit.feeling})
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    // Submits the answer up to redux and send sthe user to the next page
    handleSubmit = event => {
        event.preventDefault();// prevents refresh

        // sends content to redux
        this.props.dispatch({ type: 'UPDATE_STATE', payload: { key: "feeling", value: this.state.value } });

        // Automatically flags answers if they give low answers
        if (this.state.value < 3) {
            this.props.dispatch({ type: 'UPDATE_STATE', payload: { key: "flagged", value: true } });
        }

        // Loads next page
        this.props.history.push("/2");
    }

    render() { 
        
        return ( 
            <>
                <header className="App App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <Container maxWidth="sm" margin="auto">
                    <Box padding={2}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">How are you feeling today?</FormLabel>
                            <RadioGroup
                                name="feeling"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="5" control={<Radio color="primary" />} label="Feeling Great!" />
                                <FormControlLabel value="4" control={<Radio color="primary" />} label="" />
                                <FormControlLabel value="3" control={<Radio color="default" />} label="Okay" />
                                <FormControlLabel value="2" control={<Radio color="secondary" />} label="" />
                                <FormControlLabel value="1" control={<Radio color="secondary" />} label="Very Stressed" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box textAlign="right">
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Next (1/4) <Forward />
                        </Button>
                    </Box>
                </Container>
            </>
         );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    formSubmit: reduxState.formSubmit,
})

export default withRouter(connect(putReduxStateOnProps)(FeelingForm));