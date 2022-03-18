import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
    console.log(data)
    axios.post('http://localhost:5000/services', data)
    .then(res => {
        if(res.data.insertedId) {
            alert('Inserted Successfully');
            reset();
        }
    })
        
    };

    return (
        <div className='addService-table'>
            <h1 className='mb-5'>Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name of Place" />
      <input {...register("location")} placeholder="Location Name" />
      <input {...register("offer")} placeholder="How many % offer your agency"/>
      <textarea {...register("description")} placeholder="Description" />
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