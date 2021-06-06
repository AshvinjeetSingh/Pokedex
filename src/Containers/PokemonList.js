import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import _ from "lodash"
import { getPokemonList } from '../Store/Actions/Actions'
import Navbar from './Navbar'
import CardsName from './Card'
import {Row} from 'react-bootstrap'
import ReactPaginate from "react-paginate";
import '../CSS/PokemonList.css'
const PokemonList = (props) => {
    const [searchValues,setSearchValues] =useState('')
    

    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonData)
    const onChangeHandler=(e)=>{
        setSearchValues(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        fetchPokeData(1)
    }, [])
    
    const propOwn = Object.getOwnPropertyNames(pokemonList.Data);

    const fetchPokeData=(page)=>{
        dispatch(getPokemonList(page))
    }
    
    const checkDatamethod=()=>{

        if(pokemonList.loading){
            return <p>Loading...</p>
        }

        if(!_.isEmpty(pokemonList.Data)){
            
            return pokemonList.Data.filter((val)=>{
                if(searchValues===""){
                    return val
                }

                else if(val.name.toLowerCase().includes(searchValues.toLowerCase())){
                    return val
                }
                return null
            }).map((data,index)=>(<CardsName key={index} name={data.name} />))

            
        }

        

        if(pokemonList.errorMsg===''){
            return <p>props.pokemonList.errorMsg</p>
        }

        return <p>Unable to fetch data</p>
        }

    return (
        <div>
                <Navbar value={searchValues} changeHandler={onChangeHandler} count={propOwn.length}/>
                <div className="list_div">
                    {<Row>{checkDatamethod()}</Row> }
                </div>
                <ReactPaginate
                pageCount={pokemonList.count/16}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={(Data)=>fetchPokeData(Data.selected+1)}
                containerClassName={"pagination"}
                />
        </div>
    )
}

export default PokemonList
