import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'


class FeelingForm extends Component {
    state = {
        value: '3',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() { 
        
        return ( 
            <>
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
                            <FormControlLabel value="3" control={<Radio color="" />} label="Okay" />
                            <FormControlLabel value="2" control={<Radio color="secondary" />} label="" />
                            <FormControlLabel value="1" control={<Radio color="secondary" />} label="Very Stressed" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Button variant="contained" color="primary">
                    Next
                </Button>
            </>
         );
    }
}
 
export default FeelingForm;