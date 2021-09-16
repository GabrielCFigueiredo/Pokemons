import { AppBar, Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { listPokedex } from '../../Router/coordinator';


function Header() {

    const history = useHistory()

    return (
        <AppBar position="static">
            <Box display="flex" p={1}>
                <Box style={{marginRight: 400}} mx="auto" bgcolor='#f44336' p={1}>
                    <Typography variant="h6">
                        <img src="https://fontmeme.com/permalink/210916/186f75624a5afa950e1db233b7e38c0e.png" ></img>
                    </Typography>
                </Box>
                <Box p={4} >
                    <Button onClick={() => listPokedex(history)} variant="contained" color="secondary">Ir para Pokedex</Button>
                </Box>
            </Box>
        </AppBar>

    )
}
export default Header;