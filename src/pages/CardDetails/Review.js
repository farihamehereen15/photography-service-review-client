import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviewtable from '../Reviewtable/Reviewtable';

const Review = () => {

    const review = useLoaderData()
    return (
        <div className='my-10'>

            <h1 className='text-5xl text-orange-600 text-center my-16 font-extrabold'>Reviews</h1>
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(singlereview => <Reviewtable key={singlereview._id} singlereview={singlereview}></Reviewtable>)
                        }








                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default Review;