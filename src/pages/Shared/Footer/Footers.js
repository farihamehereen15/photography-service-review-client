import { Footer } from 'flowbite-react';
import "./Footers.css"

import React from 'react';

const Footers = () => {
    return (
        <div className='' >


            <footer className="footer p-32 bg-white text-black">
                <div>
                    <img className='w-20' src="https://image.similarpng.com/very-thumbnail/2020/04/dslr-camera-logo-design-png.png" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Branding</a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>

                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div >
    );
};

export default Footers;