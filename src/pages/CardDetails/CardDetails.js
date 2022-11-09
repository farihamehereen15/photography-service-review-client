import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';


const CardDetails = () => {
    const { _id, img, title, price, description, service_id } = useLoaderData()

    return (
        <div>
            {/* service section */}
            <div className='my-10'>
                <h1 className='text-5xl text-orange-600 text-center my-16 font-extrabold'>Service</h1>
                <h2 className='text-4xl text-center my-5 font-extrabold '> {title}</h2>
                <div className="card card-compact w-full h-full bg-base-100 shadow-2xl">
                    <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">{title}</h2>
                        <p>{description}</p>
                        <p className='font-extrabold'>Price : {price}</p>
                        <div className="card-actions justify-end">


                        </div>
                    </div>
                </div>
            </div>

            {/* Review section */}
            <Outlet></Outlet>

            <div>
                <h1 className='text-5xl text-orange-600 text-center my-16 font-extrabold'>Form</h1>
                <form>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default CardDetails;