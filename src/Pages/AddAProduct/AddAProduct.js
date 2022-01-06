import React from 'react';
import { useForm } from "react-hook-form";
import './AddAProduct.css'
const AddAProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('kulu', data);
        console.log(JSON.stringify(data))
        fetch("https://nameless-cove-22064.herokuapp.com/services", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })

    };
    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6  add-user-area">
                        <h2>Add A Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="Title" {...register("title")} />
                            <textarea placeholder="Description" {...register("dec")} />
                            <input placeholder="Image URL" {...register("img")} /> <br />
                            <input placeholder="price" {...register("price")} /> <br />
                            {/* <input placeholder="Location" {...register("location")} /> */}
                            <input placeholder="brand" {...register("brand")} /> <br />
                            <input placeholder="id" {...register("id")} />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" />

                        </form>
                    </div>

                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;
