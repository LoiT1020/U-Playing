
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function Display () {
  
      const [currentGame, setCurrentGame]= useState({id: {}})
  
      const {id} = useParams();
      const getGameDetail =() => {
          fetch(`https://api.rawg.io/api/games/${id}?token&key=${process.env.REACT_APP_API_KEY}`)
          .then(response => response.json())
          .then (data => setCurrentGame(data))
      }
      useEffect(() => {
        getGameDetail();
    })
      return (
        <div>
         <h1>{currentGame.name}</h1>
        <p dangerouslySetInnerHTML={{__html: currentGame.description}}/>
         <img src ={currentGame.background_image} alt={currentGame.name} ></img>
         <a href={currentGame.website}> {currentGame.website}</a>
         <p>{currentGame.released}</p>
        </div>


      )
    }
  export default Display ;