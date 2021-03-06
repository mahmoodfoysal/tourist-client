import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
    console.log(data)
    axios.post('https://pure-brook-29213.herokuapp.com/services', data)
    .then(res => {
        if(res.data.insertedId) {
            alert('Inserted Successfully');
            reset();
        }
    })
        
    };

    return (
        <div className='addService-table'>
            <h1 className='text-center mt-5 mb-5'>Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name of Place" />
      <input {...register("location")} placeholder="Location Name" />
      <input {...register("offer")} placeholder="How many % offer your agency"/>
      <textarea className='add-textArea' {...register("description")} placeholder="Description" />
      <input type="number" {...register("duration")} placeholder="How many days duration" />
      <input type="number" {...register("members")} placeholder="How Many group member" />
      <input type="number" {...register("price")} placeholder="Package Price" />
      <input {...register("image")} placeholder="Image url" />
      <input id='button-style' type="submit" />
    </form>
        </div>
    );
};

export default AddService;