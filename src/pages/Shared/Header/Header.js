import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className='container mx-auto p-5'>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user?.uid ? <>
                                        <li><Link to={'/service'}>Add Service</Link></li>
                                        <li><Link to={'/myreview'}>My Review</Link></li>
                                        <li><Link to={'/blog'}>Blog</Link></li>

                                    </> :
                                        <li><Link to={'/blog'}>Blog</Link></li>
                                }


                            </ul>
                        </div>
                        <img className='w-20' src="https://image.similarpng.com/very-thumbnail/2020/04/dslr-camera-logo-design-png.png" alt="" />
                        <Link to={'/'} className="btn btn-ghost normal-case text-xl"> <span className='custom-name mr-4'>Wings </span>  Photography</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {
                                user?.uid ? <>
                                    <li><Link to={'/service'}>Add Service</Link></li>
                                    <li><Link to={'/myreview'}>My Review</Link></li>
                                    <li><Link to={'/blog'}>Blog</Link></li>

                                </> :
                                    <li><Link to={'/blog'}>Blog</Link></li>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.uid ? <button onClick={handleLogOut} className="btn btn-outline btn-accent">LOGOUT</button>

                                : <Link to={"/login"}><button className="btn btn-outline btn-accent">LOG IN</button></Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;