import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom';
import Publish from '@material-ui/icons/Publish'
import axios from 'axios';
import EditIcon from '@material-ui/icons/Create'

class ReviewAnswers extends Component {

    componentDidMount() {
        if(!this.props.formSubmit.feeling){
            this.props.history.push("/");
        } else if (!this.props.formSubmit.content) {
            this.props.history.push("/2");
        } else if (!this.props.formSubmit.support) {
            this.props.history.push("/3");
        }
    }

    handleSubmit = () => {
        axios.post(`/api`, this.props.formSubmit)
        .then( (response) => {
            console.log(response)
            this.props.history.push("/5");
        }).catch( (error) => {
            alert('Bad things happened...')
            console.log('Error in post /api', error)
        })
    }

    handleEdit = () => {
        this.props.dispatch({ type: 'UPDATE_STATE', payload: { key: "flagged", value: false } });
        this.props.history.push("/");
    }

    render() { 
        return ( 
            <>
                <header className="App App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <Container className="App" maxWidth="sm" margin="auto">
                    <h1>Review Your Answers</h1>
                    <h3>Feelings: {this.props.formSubmit.feeling}</h3>
                    <h3>Understanding: {this.props.formSubmit.content}</h3>
                    <h3>Support: {this.props.formSubmit.support}</h3>
                    <h3>Comments: {this.props.formSubmit.comments}</h3>
                    <Box textAlign="right">
                        <Button variant="contained" padding="5" color="secondary" onClick={this.handleEdit}>
                            Edit <EditIcon />
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                            Submit <Publish />
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

export default withRouter(connect(putReduxStateOnProps)(ReviewAnswers));