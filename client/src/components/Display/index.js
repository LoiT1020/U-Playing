
import { useParams ,useLocation} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import ReviewForm from '../ReviewForm';
import ReviewList from '../ReviewList';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';
import Auth from '../../utils/auth'
function Display () {
    const {data} = useQuery(QUERY_REVIEWS);
    console.log(data)
  const location = useLocation();
console.log(location)
    const reviews= data?.reviews || [];
      const [currentGame, setCurrentGame]= useState({id: {}})
  
      const {id} = useParams();
      console.log(id)
      const getGameDetail =() => {
          fetch(`https://api.rawg.io/api/games/${id}?token&key=a5049ad299094eae9b888af53f0bfd05`)
          .then(response => response.json())
          .then (data => setCurrentGame(data))
      }
      useEffect(() => {
        getGameDetail();
    })

    const loggedIn = Auth.loggedIn();
      return (
        <div>
         <h1>{currentGame.name}</h1>
        <p dangerouslySetInnerHTML={{__html: currentGame.description}}/>
         <img src ={currentGame.background_image} width='150' alt={currentGame.name} />
         <a href={currentGame.website}> {currentGame.website}</a>
         <p>{currentGame.released}</p>
        {loggedIn &&(
          <div className=''>
        <ReviewForm />
        
        </div>
        )}
        <ReviewList reviews={reviews} location={location} title="Reviews Left"/>
        </div>


      )
    }
  export default Display ;