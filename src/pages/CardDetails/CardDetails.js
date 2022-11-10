import React, { useContext } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const CardDetails = () => {
    const { user } = useContext(AuthContext)
    const { _id, img, title, price, description, service_id } = useLoaderData()

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregister';
        const img = form.photo.value;
        const text = form.text.value;
        const name = form.name.value

        const review = {
            service_id: service_id,
            service: title,
            name,
            email,
            text,
            img
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your review post successfully!')
                    form.reset();
                }

            })
            .catch(err => console.error(err))
    }

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


            <div className='container mx-auto w-96 shadow-2xl p-5 my-10 border rounded-lg' >
                <h1 className='text-5xl text-orange-600 text-center my-16 font-extrabold'>Your review</h1>

                <form onSubmit={handleReview}>
                    <input name="name" type="text" placeholder="Your name" className="input input-bordered w-full my-5" required />
                    <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full my-5" readOnly />
                    <input name="photo" type="text" placeholder="Your photo URL" className="input input-bordered w-full my-5" required />


                    <textarea name="text" className="textarea textarea-bordered w-full" placeholder="your review"></textarea>
                    {
                        user?.uid ? <div className='flex justify-center'><button className="btn btn-accent flex justify-center my-5">Submit</button></div> : <div> Please  <Link to={"/login"} className=" link link-hover font-bold text-orance-600"> Log In </Link> to add review</div>
                    }


                </form>
            </div>
        </div>
    );
};

export default CardDetails;