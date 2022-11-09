import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Card/Card';

const Homeservice = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/homeservices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-semibold text-center text-orange-600 my-5'> Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service => <Card key={service._id} service={service}></Card>)
                }

            </div>

            <div className="flex justify-center my-20">
                <Link to={"/services"}><button className="btn btn-primary">See All</button></Link>

            </div>

        </div>

    );
};

export default Homeservice;