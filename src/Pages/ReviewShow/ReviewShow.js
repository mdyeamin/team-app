import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ReviewShow.css'
import Rating from 'react-rating';

const ReviewShow = () => {
    const [reviews, setReviews] = useState()



    useEffect(() => {
        fetch('https://nameless-cove-22064.herokuapp.com/review')
            .then(res => res.json())
            .then(reviewData => setReviews(reviewData))
    }, [reviews])





    return (
        <>
            <h2 className="text-center my-5">Review</h2>
            <div className="review">
                {reviews?.map(review => <Card style={{ width: '18rem', marginBottom: '40px' }}>

                    <Card.Body>

                        <Card.Text>


                            <h3>{review.name}</h3>
                            <Rating

                                initialRating={review.rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color" readonly
                            />
                            <p>{review.rating}</p>
                            <p>{review.review}</p>

                        </Card.Text>

                    </Card.Body>
                </Card>)}
            </div>
        </>
    );
};

export default ReviewShow;