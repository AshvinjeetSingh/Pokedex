import * as type from '../Actions/ActionType'

const initState={
    Data:[],
    loading:false,
    errorMsg:'',
    count:0,
    value:''
}

export default function pokemonDataReducer(state=initState,action){
    switch(action.type){
        
        case type.GET_ALL_POKEMON_LIST_LOADING:
            return{
                ...state,
                loading:true,
                errorMsg:''
            }
        
        
        case type.GET_ALL_POKEMON_LIST_SUCCESS:
            return{
                ...state,
                Data:action.payload.results,
                loading:false,
                errorMsg:'',
                count:action.payload.count
            }

            case type.GET_ALL_POKEMON_LIST_ERROR:
                return{
                    ...state,
                    loading:false,
                    errorMsg:'Unable to fetch data'
                }

        default:
            return state;
    }
}

