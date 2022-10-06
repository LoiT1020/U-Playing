import React from 'react';
import { Link } from 'react-router-dom';
import Display from '../Display';

const Results = (props) => {
 
  return (
    <div className="results-container">
      
      {
        props.gameResults.map(game => (
          <div key={game.id}>

            <Link to={`/games/${game.id}`} onClick={Display}>
             
          
            <h3>{game.name}</h3>
            <img src={game.background_image} width="150" alt="game"/>
            </Link>
          
          </div>
        ))
      }
     
    </div>
  );
}

export default Results;


