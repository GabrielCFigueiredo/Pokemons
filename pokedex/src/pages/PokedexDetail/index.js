import { AppBar, Box, Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Progress from '../../components/ProgressBar/ProgressBar';
import { homeList } from '../../Router/coordinator';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignSelf: 'center',
        width: 200,
        marginTop: 250,
        margin: 20,
        marginLeft: 400
    },
    fundo: {
        minHeight: '100vh',

    }
});


export function PokedexDetail({ poke }) {
    console.log('props', poke);
    const { name } = useParams()
    const [pokemonDetail, setPokemonDetail] = useState()
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const history = useHistory()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                console.log(response.data);
                setPokemonDetail(response.data)
            })
            .catch((error) => {
                console.log(error.response);

            })
    }, [])
    return (
        <div>
            <div>
             <AppBar position="static">
            <Box display="flex" p={1}>
            <Box p={4} >
                    <Button onClick={() => homeList(history)} variant="contained" color="secondary">Voltar para Lista de Pokemon</Button>
                </Box>
                <Box style={{marginLeft: 250}} mx="auto" bgcolor='#f44336' p={1}>
                    <Typography variant="h6">
                        <img src="https://fontmeme.com/permalink/210916/7a3ccadac6f5cf06dddfb703c2fdb935.png" ></img>
                    </Typography>
                </Box>
            </Box>
        </AppBar>
        </div>
        <Box>
            <Box style= {{background: '#1C1C1C'}} minHeight= '85vh' display="flex" justifyContent="space-around" m={1} p={1} bgcolor="background.paper">
                <Box display="flex" flexDirection='column' minWidth='300' minHeight='300px'>
                    <Box p={1} height={100}>
                        <Box>
                            <Typography style= {{fontSize: 24, marginLeft: 70, color: '#3f51b5'}} variant="caption" display="block" gutterBottom>
                                {pokemonDetail && pokemonDetail.name}
                            </Typography>
                        </Box>
                        <Box minWidth='300' minHeight='300px'>
                            <img style={{ height: 200, width: 200 }} src={pokemonDetail && pokemonDetail.sprites && pokemonDetail.sprites.front_default}></img>
                        </Box>
                        <Box>
                            <img style={{ height: 200, width: 200 }} src={pokemonDetail && pokemonDetail.sprites && pokemonDetail.sprites.back_default}></img>
                        </Box>
                    </Box>
                </Box>
                <Box p={1} width='400px'>
                <Typography style= {{fontSize: 24, marginLeft: 70, color: '#3f51b5'}} variant="caption" display="block" gutterBottom>PODERES</Typography>
                    {pokemonDetail && pokemonDetail.stats.map((poder) => {
                        return <div>
                            <Typography style= {{color: '#fafafa'}} variant="caption" display="block" gutterBottom>{poder.stat.name}</Typography>
                            <Progress done={poder.base_stat} />
                        </div>
                    })}
                </Box>
                <Box p={1}>

                <Typography style= {{fontSize: 24, marginLeft: 70, color: '#3f51b5'}} variant="caption" display="block" gutterBottom>PRINCIPAIS ATAQUES</Typography>
                    {pokemonDetail && pokemonDetail.moves.map((move, index) => {
                        return (
                            index < 5 && 
                            <Typography style= {{color: '#fafafa', fontSize: 32, textAlign: 'center'}} variant="caption" display="block" gutterBottom key={move.move.name}>{move.move.name}</Typography>
                        )
                    })}
                </Box>
            </Box>
        </Box>
        </div>
    )
}
export default PokedexDetail;