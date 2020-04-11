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
        value: '',
    };

    componentDidMount() {
        if (this.props.formSubmit.comments) {
            this.setState({ value: this.props.formSubmit.comments })
        }
        if (!this.props.formSubmit.feeling) {
            this.props.history.push("/");
        }
    }

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
            <>
            <header className="App App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
            <Container maxWidth="sm" margin="auto">
                <Box padding={2}>
                    <TextField value={this.state.value} onChange={this.handleChange} id="standard-basic" fullWidth label="Additional Comments" />
                </Box>
                <Box textAlign="right">
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Next (4/4) <Forward />
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