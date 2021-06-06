import {combineReducers} from 'redux'
import pokemonDataReducer from '../Reducers'
import pokemonDataMultipleReducer from '../PokemonReducers'

const rootReducer=combineReducers({
    pokemonData:pokemonDataReducer,
    pokemon:pokemonDataMultipleReducer
})


export default rootReducer;