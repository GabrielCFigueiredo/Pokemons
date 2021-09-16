import { makeStyles, Typography } from '@material-ui/core'
import Pagination from '../../components/Pagination/Pagination'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components"
import Header from '../../components/Header';
import Pokemon from '../../components/pokemon';

const Container = styled.div ` 
background-color: #1C1C1C;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

 export function HomePage(props) {

  const [itensPage, setItensPage] = useState(18)
    const [currentPage, setCurrentPage] = useState(0)

  
    const history = useHistory()

    const pages = Math.ceil(props.poke.length / itensPage)

    const startIndex = currentPage * itensPage
    const endIndex = startIndex + itensPage
    const currentList = props.poke.slice(startIndex, endIndex)


    useEffect(() =>{
        list()  
    },[])
    const list = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=500&limit=500")
        .then((response) => {
            props.setPokemon(response.data.results)
            
        })
        .catch((error) => {
        })
    }
    useEffect(() => {
        const newList = [];
        props.pokemon.forEach((item) => {
          axios
            .get(item.url)
            .then((response) => {
              newList.push(response.data);
              if (newList.length === 500) {
                const orderedList = newList.sort((a, b) => {
                  return a.id - b.id;
                });
                props.setPoke(orderedList)

              }
            })
            .catch((error) => console.log(error.message));
        });
      }, [props.pokemon]);
    return(
        <div>
          <div>
          <Header/>
          </div>
        <Container>
            {currentList.map((pok) => {
                return <Pokemon key={pok.name} 
                pok={pok}
                poke={props.poke} 
                setPoke={props.setPoke}
                pokedex={props.pokedex}
                setPokedex={props.setPokedex}
               />
            })}
        </Container>
        <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
            </div>
    )
}
export default HomePage;