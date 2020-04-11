import React, { Component } from 'react';
import Flag from '@material-ui/icons/Flag';
import Box from '@material-ui/core/Box';

class Flagged extends Component {

    isFlagged = () => {
        if (this.props.flagged) {
            return <Flag />
        }else {
            return <Box height="24" width="24"></Box>
        }
    }

    render() { 
        return ( 
            <>
                {this.isFlagged()}
            </>
         );
    }
}
 
export default Flagged;