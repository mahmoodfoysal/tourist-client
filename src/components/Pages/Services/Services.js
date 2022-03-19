import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-5'>Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                    key={service._id}
                    service ={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;