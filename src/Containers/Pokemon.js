import React,{useEffect} from 'react'
import {connect,useDispatch,useSelector} from 'react-redux'
import {getPokemon} from '../Store/Actions/Actions' 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../CSS/Pokemon.css'
import _ from 'lodash' 
const Pokemon = (props) => {
    const pokemonName=props.match.params.pokemon;
    
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon)
    useEffect(()=>{
        dispatch(getPokemon(pokemonName))
    },[])
    console.log(pokemon.Data['bulbasaur'])


   const types={
       fire:"#FF9333",
       water:"#33DAFF",
       grass:"#37EC0A",
       electric:"#E9EC0A",
       ice:"#BCFEFB",
       ground:"#6E7E34",
       poison:"#A51CFF",
       fighting:"#FF2727",
       normal:"#C49801",
       flying:"#FF70E7",
        psychic:"#F29AD3",
        bug:"#C4FF9D",
        rock:"#464B15",
        ghost:"#391C50",
        dark:"#302B1C",
        dragon:"#7D1387",
        steel:"#B2B2B2",
        fairy:"#FFCDFB",



   }


    const showData=()=>{
        if (!_.isEmpty(pokemon.Data[pokemonName.trim()])){
          const pokeData = pokemon.Data[pokemonName];
        return(
            <div className={"pokemon-wrapper"}>
            <div className={"item"}>
                <h1>Sprites</h1>

                <Carousel>
                <div>
                    <img src={pokeData.sprites.front_default} />
                    
                </div>
                <div>
                    <img src={pokeData.sprites.back_default} />
                    
                </div>
                <div>
                    <img src={pokeData.sprites.front_shiny} />
                    
                </div>
                <div>
                    <img src={pokeData.sprites.back_shiny} />
                   
                </div>
            </Carousel>
                
                
            </div>
            <div className="item">
                <h1>Stats</h1>
                {pokeData.stats.map(el => {
                return <p><b className="stats">{el.stat.name}</b> {el.base_stat}</p>
                })}
            </div>
            <div className="item">
                <h1>Types</h1>
                <div className="types">
                {
                    pokeData.types.map((el)=>{
                        return <p style={{background:types[el.type.name]}}>{el.type.name}</p>
                    })
                }
                </div>
                
            </div>
            <div className="item">
                <h1>Abilities</h1>
                {pokeData.abilities.map(el => {
                return <p>{el.ability.name}</p>
                })}
            </div>
            </div>
      )
    }
        

        if(pokemon.loading){
            return <p>Loading...</p>
        }

        if(pokemon.errorMsg==''){
            return <p>props.pokemonList.errorMsg</p>
        }

        return <p>Unable to fetch data</p>
    }
    return (
        <div className={"poke"}>
            <h1 className="pokeName">{pokemonName}</h1>
           {getPokemon(pokemonName)&& showData()}
        </div>
    )
}



export default Pokemon;