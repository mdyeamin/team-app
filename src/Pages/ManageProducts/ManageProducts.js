import React, { useEffect, useState } from 'react';
import ManageProductsDetail from '../ManageProductsDetail/ManageProductsDetail';

const ManageProducts = () => {
    const [explores, setExplores] = useState([])

    useEffect(() => {
        fetch('https://nameless-cove-22064.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [explores])
    return (
        <>
            <h1>More Watch Collection</h1>
            <div className='product-area'>
                {
                    explores.map(explore => <ManageProductsDetail
                        key={explore.id}
                        explore={explore}
                    ></ManageProductsDetail>)
                }
            </div>
        </>
    );
};

export default ManageProducts;
