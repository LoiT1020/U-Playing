import React from 'react'
import { useLocation } from 'react-router-dom'

const ReviewList = ({reviews,title,location}) => {

if (!reviews.length ) {
    return <h2>No Reviews</h2>
}
if (location !== reviews){
    return (
        <h1> Hello</h1>
        
    )
}

    return (
        <div>
            <h3>{title}</h3>
          {reviews && 
          reviews.map(review => (
            <div key = {review._id}>

                <p>
                    {review.reviewText}  by {review.email} review on {review.createdAt}
                </p>
            </div>
          ))}
        </div>
    )
}
export default ReviewList