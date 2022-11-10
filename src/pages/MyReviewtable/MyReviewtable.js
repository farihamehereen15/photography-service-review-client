import React from 'react';

const MyReviewtable = ({ singlereview, handleDelete }) => {
    const { img, name, service, text, email, _id } = singlereview

    // const handleDelete = id => {

    //     const proceed = window.confirm('Are you sure you want to delete this review');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/review/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //             })

    //     }


    // }
    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-success mr-2">Edit Review</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>

                    </div>
                </div>
            </td>
            <td>
                {service}

            </td>
            <td>{text}</td>
            <th>
                <button className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>
    );
};

export default MyReviewtable;