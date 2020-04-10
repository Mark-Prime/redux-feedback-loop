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


class SupportForm extends Component {
    state = {
        value: '3',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_STATE', payload: { key: "support", value: this.state.value } });
        this.props.history.push("/4");
    }

    render() {

        return (
            <Container maxWidth="sm" margin="auto">
                <Box padding={2}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">How well do you feel supported?</FormLabel>
                        <RadioGroup
                            name="feeling"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="5" control={<Radio color="primary" />} label="Fully Supported" />
                            <FormControlLabel value="4" control={<Radio color="primary" />} label="" />
                            <FormControlLabel value="3" control={<Radio color="default" />} label="Okay" />
                            <FormControlLabel value="2" control={<Radio color="secondary" />} label="" />
                            <FormControlLabel value="1" control={<Radio color="secondary" />} label="Abandoned" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box textAlign="right">
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Next (3/4) <Forward />
                    </Button>
                </Box>
            </Container>
        );
    }
}

export default withRouter(connect()(SupportForm));