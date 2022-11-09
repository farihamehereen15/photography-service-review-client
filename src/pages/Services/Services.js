import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-semibold text-center text-orange-600 my-5'> Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                    services.map(service => <Card key={service._id} service={service}></Card>)
                }

            </div>



        </div>
    );
};

export default Services;