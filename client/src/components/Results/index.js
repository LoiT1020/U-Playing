import React from 'react';
import { Link } from 'react-router-dom';
import Display from '../Display';

const Results = (props) => {
 
  return (
    <div className="GameList">
      
      {  
        props.gameResults.slice(0,12).map(game => (
          <div key={game.id} className="flex-row">

            <Link to={`/games/${game.id}`} onClick={Display}>


            <h3>{game.name}</h3>
            <img src={game.background_image} width="150" className="image"alt="game"/>
            </Link>

          </div>
        ))
      }
  
    </div>
  )

    }
export default Results;

    
