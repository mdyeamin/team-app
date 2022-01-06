import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreDetails = ({ explore }) => {
    const { title, img, dec, price, id } = explore
    return (
        <div style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>$ {price}</Card.Title>
                <Card.Text>
                    {dec.slice(0, 98)}
                </Card.Text>
                <Link to={`/booking/${id}`}>
                    <Button className="addtobag" variant="primary">Add To Bag</Button>
                </Link>
            </Card.Body>
        </div>
    );
};

export default ExploreDetails;