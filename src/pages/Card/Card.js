import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const { service_id, img, title, price, description, } = service
    return (
        <div>
            <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length < 100 ? description : description.slice(0, 100) + "..."}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${service_id}`}>
                            <button className="btn btn-accent">View Details</button>

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;