import React from 'react';

const Camera = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-20 text-orange-600'>Best Camera for Photography</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5 ">
                <figure><img className='w-96' src="https://e-bazar.org/uploads/images/202209/img_1920x_631f1ea63d6187-27065324-83861484.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Canon EOS R6</h2>
                    <p>Price: $120</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                <figure><img className='w-96' src="https://camerasourcebd.com/wp-content/uploads/2022/01/Sony-a7-III-Lens-Kit.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Sony a7 III</h2>
                    <p>Price: $100</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                <figure><img className='w-96' src="https://photographylife.com/wp-content/uploads/2020/03/Nikon-Z50.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Nikon Z 50
                    </h2>
                    <p>Price: $80</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                <figure><img className='w-96' src="https://www.startech.com.bd/image/cache/catalog/camera/mirriorless/canon/eos-m50-mark-ii/eos-m50-mark-ii-06-500x500.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Canon EOS M50 Mark II
                    </h2>
                    <p>Price: $150</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Camera;