import React, { Component } from 'react';
import 
{
  Link,
} from 'react-router-dom';
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  render() {
        const {
          pokemons,
          pokemonsApi,
        } = this.props;
    console.log('pokemonsApi',pokemonsApi);
    return (
      <div>
        <main>
            <ul>
                {pokemonsApi.map((pokemon,index)=>
                    <li key={index}>
                        <Link to='/detail'>
                            <PokemonCard
                                pokemon={pokemon}
                            />
                        </Link>
                    </li>
                )}
            </ul>
        </main>
      </div>
    );
  }
}

export default PokemonList;