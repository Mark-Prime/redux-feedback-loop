import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Forward from '@material-ui/icons/Forward'


class FeelingForm extends Component {
    state = {
        value: '3',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_STATE', payload: { key: "comments", value: this.state.value } });
        this.props.history.push("/submit");
    }

    render() {

        return (
            <Container maxWidth="sm" margin="auto">
                <Box padding={2}>
                    <TextField onChange={this.handleChange} id="standard-basic" fullWidth label="Additional Comments" />
                </Box>
                <Box textAlign="right">
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Next (4/4) <Forward />
                    </Button>
                </Box>
            </Container>
        );
    }
}

export default withRouter(connect()(FeelingForm));