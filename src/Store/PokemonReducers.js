import * as type from './ActionType'

const initState={
    Data:{},
    loading:false,
    errorMsg:'',
}

export default function pokemonDataMultipleReducer(state=initState,action){
    switch(action.type){
        
        case type.GET_ALL_POKEMON_MULTIPLE_LOADING:
            return{
                ...state,
                loading:true,
                errorMsg:''
            }
        
        
        case type.GET_ALL_POKEMON_MULTIPLE_SUCCESS:
            return{
                ...state,
                loading:false,
                errorMsg:'',
                Data:{
                    ...state.data,
                    [action.pokemonName]:action.payload
                }
            }

            case type.GET_ALL_POKEMON_MULTIPLE_ERROR:
                return{
                    ...state,
                    loading:false,
                    errorMsg:'Unable to fetch data'
                }

        default:
            return state;
    }
}

