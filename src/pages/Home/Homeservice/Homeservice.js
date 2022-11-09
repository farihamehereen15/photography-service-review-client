import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Homeservice = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/homeservices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services.map(service => <Card key={service._id} service={service}></Card>)
            }

        </div>
    );
};

export default Homeservice;