import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from "../pages/HomePage/index"
import Pokedex from "../pages/Pokedex/index"
import PokedexDetail from "../pages/PokedexDetail/index"
 export function Router() {

    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [poke, setPoke] = useState([])
    
    return(
        <div>
           <BrowserRouter>
           <Switch>
               <Route exact path={"/"}>
                   <HomePage 
                   pokemon={pokemon}
                   setPokemon={setPokemon}
                   pokedex={pokedex}
                   setPokedex={setPokedex}
                   poke={poke}
                   setPoke={setPoke}
                   
                   />
               </Route>
               <Route exact path={"/pokedex"}>
                   <Pokedex
                   pokemon={pokemon}
                   setPokemon={setPokemon}
                   pokedex={pokedex}
                   setPokedex={setPokedex}
                   poke={poke}
                   setPoke={setPoke}
                   
                   />
               </Route>
               <Route exact path={"/pokemon/:name/"}>
                   <PokedexDetail
                   pokemon={pokemon}
                   setPokemon={setPokemon}
                   pokedex={pokedex}
                   setPokedex={setPokedex}
                   poke={poke}
                   setPoke={setPoke}
                   />
               </Route>
           </Switch>
           </BrowserRouter>

        </div>
    )
}
export default Router;