import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const TopGames = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_API_KEY}`)
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

 
  const shuf = shuffle(games)
  
  return (
    <div className='GameList'>
      
      {
        
        shuf.slice(0,12).map(game => (
          <div key={game.id}>
            <Link to={`/games/${game.id}`}>

            <h3>{game.name}</h3>
            <img src={game.background_image} width="150" alt="game"/>

            </Link>
          </div>
        ))
      }
      
    </div>
  )
}

export default TopGames;