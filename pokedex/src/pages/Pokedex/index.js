import { AppBar, Box, Button, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Pokemon from '../../components/pokemon';
import { homeList } from '../../Router/coordinator';





 export function Pokedex (props) {

    const history = useHistory()


    return(
        <div style={{background: '#1C1C1C' }}>
            <div>
            <AppBar position="static">
            <Box display="flex" p={1}>
            <Box p={4} >
                    <Button onClick={() => homeList(history)} variant="contained" color="secondary">Voltar</Button>
                </Box>
                <Box style={{marginLeft: 600}} mx="auto" bgcolor='#f44336' p={1}>
                    <Typography variant="h6">
                        <img src="https://fontmeme.com/permalink/210916/27686ba43608c9b4fa91ca090954cdce.png" ></img>
                    </Typography>
                </Box>
            </Box>
        </AppBar>
            </div>
            <div style= {{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', background: '#1C1C1C'}}>
            {props.pokedex.map((pok) => {
                return <Pokemon key={pok.name} isPokedex
                pok={pok}
                poke={props.poke} 
                setPoke={props.setPoke}
                pokedex={props.pokedex}
                setPokedex={props.setPokedex}
               />
            })}
            </div>
        </div>
    )
}
export default Pokedex;