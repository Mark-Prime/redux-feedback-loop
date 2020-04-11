import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Flagged from '../Flagged/Flagged'

import axios from 'axios';

class Admin extends Component {

    state = { 
        feedback: []
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        axios.get(`/api`)
            .then((response) => {
                console.log(response)
                this.setState({
                    feedback: response.data
                })
            }).catch((error) => {
                alert('Bad things happened...')
                console.log('Error in get /api', error)
            })
    }

    flagItem = (ID, flag) => {
        console.log(ID, flag);
        
        axios.put(`/api`, {ID, flag})
        .then( (response) => {
            console.log(response)
            this.getItems()
        }).catch( (error) => {
            alert('Bad things happened...')
            console.log('Error in put /api', error)
        })
    }

    handleDelete = (ID) => {
        axios.delete(`/api/${ID}`)
        .then( (response) => {
            console.log(response)
            this.getItems()
        }).catch( (error) => {
            alert('Bad things happened...')
            console.log('Error in delete /api', error)
        })
    }


    render() { 
        return ( 
            <>
                <header className="App App-header">
                    <h1 className="App-title">Admin</h1>
                </header>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Understanding</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.feedback.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.feeling}</TableCell>
                                    <TableCell>{row.understanding}</TableCell>
                                    <TableCell>{row.support}</TableCell>
                                    <TableCell>{row.comments}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell onClick={() => this.flagItem(row.id, !row.flagged)}><Flagged flagged={row.flagged}/></TableCell>
                                    <TableCell><Button variant="contained" color="secondary" onClick={() => this.handleDelete(row.id)}>
                                        Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </>
         );
    }
}
 
export default Admin;