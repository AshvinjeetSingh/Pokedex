import * as type from './ActionType'
import API from '../../API/Api'


export const  getPokemonList =(page)=>async dispatch=>{

    try{
        dispatch({
            type:type.GET_ALL_POKEMON_LIST_LOADING
        })
    
        const perpage=16
        const offset=(page*perpage)-perpage
        const res= await API.get(`pokemon/?limit=${perpage}&offset=${offset}`)   
        dispatch({
            type:type.GET_ALL_POKEMON_LIST_SUCCESS,
            payload:res.data
        })
    }catch(e){
        dispatch({

            type: type.GET_ALL_POKEMON_LIST_ERROR,
            payload:console.log(e)
        })
    }  
}

export const getPokemon=(pokemon)=>async dispatch => {

    try{
        dispatch({
            type:type.GET_ALL_POKEMON_MULTIPLE_LOADING
        })
    
        
        const res= await API.get(`pokemon/${pokemon}`)   
        dispatch({
            type:type.GET_ALL_POKEMON_MULTIPLE_SUCCESS,
            payload:res.data,
            pokemonName:pokemon
        })
    }catch(e){
        dispatch({

            type: type.GET_ALL_POKEMON_MULTIPLE_ERROR,
            payload:console.log(e)
        })
    }  

}

