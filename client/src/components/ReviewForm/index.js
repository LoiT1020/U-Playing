import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../../utils/queries';

const ReviewForm = () => {
    const [reviewText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addReview, { error }] = useMutation(ADD_REVIEW, {
        update(cache, { data: { addReview } }) {
try {
    const {me} = cache.readQuery({query: QUERY_ME});
    cache.writeQuery({
        query: QUERY_ME,
        data: {me : {...me, reviews: [...me.reviews, addReview]}}
    });
}catch (e) {
    console.warn('First review inserstion by user')
}
            const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });
            cache.writeQuery({
                query: QUERY_REVIEWS,
                data: { reviews: [addReview, ...reviews] }
            });
        }
    });
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add review to database
            await addReview({
                variables: { reviewText }
            });
            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div>
            <p className={`${characterCount === 280 || error ? 'text-error': ''}`}>
                Character Count : {characterCount}/280
                {error && <span className=''>Something went wrong...</span>}
                </p>
            <form
                className=''
                onSubmit={handleFormSubmit}
                >
                <textarea
                placeholder='Write your Review Here'
                value= {reviewText}
                className=''
                onChange={handleChange}>
                </textarea>
                <button className='' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}
export default ReviewForm;