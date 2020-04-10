import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

class Successful extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'RESET_STATE' });
        this.props.history.push("/");
    }

    render() { 
        return ( 
            <Container className="App" maxWidth="sm" margin="auto">
                <h1>Feedback Successfully Submitted</h1>
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                    Submit Another
                </Button>
            </Container>
         );
    }
}

export default withRouter(connect()(Successful));