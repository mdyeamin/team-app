
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';



const ManageProductsDetail = ({ explore }) => {
    const { title, img, dec, price, _id } = explore
    const [allProduct, setAllProduct] = useState([]);
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you Sure? want to delete this item?')
        if (confirmation) {
            fetch(`https://nameless-cove-22064.herokuapp.com/deleteproduct/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allProduct.filter(order => order._id !== id);
                    setAllProduct(remaining);
                })

        }

    }


    return (
        <div style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>$ {price}</Card.Title>
                <Card.Text style={{ fontSize: "16px" }} >
                    {dec.slice(0, 98)}
                </Card.Text>

                <button className="addtobag" variant="primary" onClick={() => handleDelete(_id)} >Delete</button>

            </Card.Body>
        </div>
    );
};

export default ManageProductsDetail;