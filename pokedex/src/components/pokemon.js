import { Box, Button, CardContent, Typography, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { detailPokedex } from "../Router/coordinator"


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    maxHeight: 400,
    margin: '10px',
    background: '#263238'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    
  },
  title: {
    fontSize: 54,
    
  },
});


export function Pokemon(props) {

  const classes = useStyles();
  
  const history = useHistory()

  const addPokemon = () => {

    const pokeIndex = props.poke.findIndex((item) => item.name === props.pok.name)

    const newPokemon = [...props.poke]
    newPokemon.splice(pokeIndex, 1)
    const newPokedex = [...props.pokedex, props.pok]

    props.setPokedex(newPokedex)
    props.setPoke(newPokemon)
  }

  const removePokemon = () => {
    const indexPokemon = props.pokedex.findIndex((item) => item.name === props.pok.name)
    const removePoke = [...props.pokedex]
    removePoke.splice(indexPokemon, 1)

    const orderPokedex = removePoke.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemon = [...props.poke, props.pok]
    
    const orderPokemons = newPokemon.sort((a, b) => {
      return a.id - b.id;
    });


    props.setPokedex(orderPokedex)
    props.setPoke(orderPokemons)
  }

  return (
        <Card className={classes.root}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Box display="flex" justifyContent="center" minWidth= '150' minHeight='200px' >
          <img tyle={{height: 400, width: 400}} src= {props.pok.sprites && props.pok.sprites.front_default}/>
          </Box>
        <Typography style= {{color: '#fafafa'}} variant="caption" display="block" gutterBottom>
        {props.pok.name}
      </Typography>
        <Box display="flex" justifyContent= "center" p={3}> 
        <Box>
          <Button onClick={props.isPokedex ? removePokemon :  addPokemon} variant='contained' color="primary">
          {props.isPokedex ? 'Remover' : 'Adicionar'}
          </Button>
          </Box>
          <Box>
          <Button onClick={() => detailPokedex(history, props.pok.name, props.isPokedex)} variant="contained" color="secondary">Detalhes</Button>
          </Box>
        </Box > 
        </Typography>
      </CardContent>
    </Card> 
    
  )
}
export default Pokemon;

