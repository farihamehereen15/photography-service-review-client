import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-20 text-orange-600'>FAQ</h1>

            <div className='container mx-auto my-20 grid lg:grid-cols-2 gap-10'>

                <div className="card w-full  shadowbox bg-primary text-primary-content my-10 ">
                    <div className="card-body">
                        <h1 className="card-title">1. Do you deliver every image you shoot?</h1>
                        <p>No, I do not. I eliminate duplicate images, test shots, missed focused shots, shots with bad expressions and other images that may dilute the overall product delivery. For example, because I shoot with low apertures, sometimes I take a few extra shots to make sure I have the perfect focus.</p>

                    </div>
                </div>

                <div className="card w-full  shadowbox bg-primary text-primary-content my-10">
                    <div className="card-body">
                        <h1 className="card-title">2. Do you do destination weddings?</h1>
                        <p>Yes</p>

                    </div>
                </div>

                <div className="card w-full  shadowbox bg-primary text-primary-content my-10">
                    <div className="card-body">
                        <h1 className="card-title">3.Do you provide partial day coverage?</h1>
                        <p>I typically do not provide partial day coverage on weekends. On weekends, i only accept clients that require at least 8 hours of coverage or have a budget of $3,900.00 and above.</p>

                    </div>
                </div>

                <div className="card w-full  shadowbox bg-primary text-primary-content my-10">
                    <div className="card-body">
                        <h1 className="card-title">4.Do you shoot in JPEG, Small Raw, or Large Raw?</h1>
                        <p> I shoot most of our images in Small Raw with certain situations where i move to Large Raw. For my reasoning, please see service section </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;