import React from 'react';
import img1 from "../../../assets/banner/banner1.jpg"
import img2 from "../../../assets/banner/banner2.jpg"
import img3 from "../../../assets/banner/banner3.jpg"
import img4 from "../../../assets/banner/banner4.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-20 left-20 top-1/2 text-center">
                        <h1 className='text-5xl font-bold text-white'>
                            "It's not enough to just own a camera. <br /> Everyone owns a camera. To be a photographer, <br /> you must understand, appreciate, and harness the power you hold!" <br />
                            - Mark Denman
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt="" className="w-full rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-20 left-20 top-1/2 text-center">
                        <h1 className='text-5xl font-bold text-white'>
                            "It's not enough to just own a camera. <br /> Everyone owns a camera. To be a photographer, <br /> you must understand, appreciate, and harness the power you hold!" <br />
                            - Mark Denman
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt="" className="w-full rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-20 left-20 top-1/2 text-center">
                        <h1 className='text-5xl font-bold text-white'>
                            "It's not enough to just own a camera. <br /> Everyone owns a camera. To be a photographer, <br /> you must understand, appreciate, and harness the power you hold!" <br />
                            - Mark Denman
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} alt="" className="w-full rounded-xl" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-20 left-20 top-1/2 text-center">
                        <h1 className='text-5xl font-bold text-white'>
                            "It's not enough to just own a camera. <br /> Everyone owns a camera. To be a photographer, <br /> you must understand, appreciate, and harness the power you hold!" <br />
                            - Mark Denman
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;