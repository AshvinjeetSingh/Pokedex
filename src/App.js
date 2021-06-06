
import './App.css';
import {Switch,Route, Redirect}from 'react-router-dom'
import PokemonList from './Containers/PokemonList'
import Pokemon from './Containers/Pokemon'


function App() {
  return (
    <div className="App">
     <Switch>
       <Route path={'/'} exact component={PokemonList}/>
       <Route path={'/pokemon/:pokemon'}  component={Pokemon}/>
       <Redirect to = {'/'}/>
     </Switch>
    </div>
  );
}

export default App;
