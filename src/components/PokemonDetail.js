import React, { Component } from 'react';
import 
{
  Link,
} from 'react-router-dom';
import PokemonType from './PokemonType';

class PokemonCard extends Component {
  render() {
    return (
      <div>
        <main>
            <Link className="LinkBack" to="/">Back</Link>
            <PokemonType/>
        </main>
      </div>
    );
  }
}

export default PokemonCard;