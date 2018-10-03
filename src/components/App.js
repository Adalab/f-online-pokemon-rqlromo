import React, { Component } from 'react';
import 
{ 
  Route, 
  Switch,
} from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
// import '../App.css';
// import logo from './logo.svg';
// '/:id'

const pokemons = {
  "count": 811,
  "previous": null,
  "results": [
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/1/",
      "name": "bulbasaur"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/2/",
      "name": "ivysaur"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/3/",
      "name": "venusaur"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/4/",
      "name": "charmander"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/5/",
      "name": "charmeleon"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/6/",
      "name": "charizard"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/7/",
      "name": "squirtle"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/8/",
      "name": "wartortle"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/9/",
      "name": "blastoise"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/10/",
      "name": "caterpie"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/11/",
      "name": "metapod"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/12/",
      "name": "butterfree"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/13/",
      "name": "weedle"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/14/",
      "name": "kakuna"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/15/",
      "name": "beedrill"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/16/",
      "name": "pidgey"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/17/",
      "name": "pidgeotto"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/18/",
      "name": "pidgeot"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/19/",
      "name": "rattata"
    },
    {
      "url": "http://pokeapi.salestock.net/api/v2/pokemon/20/",
      "name": "raticate"
    }
  ],
  "next": "http://pokeapi.salestock.net/api/v2/pokemon/?offset=20"
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsApi: []
    };
  }

  componentDidMount(){
    this.GETPokemonList();
  }

  GETPokemonList() {
    const urlApi = 'http://pokeapi.salestock.net/api/v2/pokemon/';
    fetch(urlApi)
    .then((response)=>response.json())
    .then((json) => {
      let pokemonsConId = [];
      console.log('json.results',json.results);
      for (let i=0; i<json.results.length; i++) {
        pokemonsConId[i] = {
          ...json.results[i],
          id: i, 
        }
      }
      this.setState({
        pokemonsApi: pokemonsConId,
      }
      ,
      () => {
        console.log('estado actualizado del json!',this.state);
      })
    });
  }

  render() {
    console.log('pokemons name', pokemons.results[0].name);
    const {
      pokemonsApi
    } = this.state;

    if (pokemonsApi.length === 0) {
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    } else {
      return (
        <div>
          <main>
            <Switch>
              <Route 
                exact path='/'
                render={ () => 
                  <PokemonList 
                    pokemonsApi={pokemonsApi}
                  /> }
              />
              <Route 
                path='/detail'
                component={ PokemonDetail } 
              />
            </Switch>
          </main>
        </div>
      );
    }
  }
}

export default App;
