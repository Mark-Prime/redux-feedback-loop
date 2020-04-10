import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom';
import Publish from '@material-ui/icons/Publish'

class ReviewAnswers extends Component {

    componentDidMount() {
        if(!this.props.formSubmit.feeling){
            this.props.history.push("/");
        }
    }


    render() { 
        return ( 
            <Container className="App" maxWidth="sm" margin="auto">
                <h1>Review Your Answers</h1>
                <h3>Feelings: {this.props.formSubmit.feeling}</h3>
                <h3>Understanding: {this.props.formSubmit.content}</h3>
                <h3>Support: {this.props.formSubmit.support}</h3>
                <h3>Comments: {this.props.formSubmit.comments}</h3>
                <Box textAlign="right">
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit <Publish />
                    </Button>
                </Box>
            </Container>
         );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    formSubmit: reduxState.formSubmit,
})

export default withRouter(connect(putReduxStateOnProps)(ReviewAnswers));