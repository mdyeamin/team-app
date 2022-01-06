import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import './Myorder.css'
const MyOrder = () => {
    const [myorder, setMyorder] = useState([])
    const { user } = useAuth()
    const email = user?.email;


    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you Sure? want to delete this item?')
        if (confirmation) {
            fetch(`https://nameless-cove-22064.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }



    useEffect(() => {
        fetch(`https://nameless-cove-22064.herokuapp.com/myorder?email=${email}`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    })



    return (
        <div>
            <div className="container">
                <h1>My Order List: {myorder.length}</h1>
                <div className="order">
                    {
                        myorder.map(order => <div key={order._id} className="col-md-4 g-2 mt-4 od">
                            <img src={order.img} alt="" />
                            <h5 className="my-3 p-3">{order?.productName}</h5>
                            <button className="btn btn-success" onClick={() => handleDelete(order?._id)} >Delete</button>
                        </div>)

                    }

                </div>

            </div>

        </div>
    );
};

export default MyOrder;