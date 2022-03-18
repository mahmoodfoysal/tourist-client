import React,{ useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-5'>My Order</h1>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Order</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => 
                            
                            <tr>
                            <th scope="row">*</th>
                            <td>{order.name}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;