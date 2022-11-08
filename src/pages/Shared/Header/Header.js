import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container mx-auto'>
            <Navbar
                fluid={true}
                rounded={true}
            >

                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://image.similarpng.com/very-thumbnail/2020/04/dslr-camera-logo-design-png.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        <span className='text-orange-600 custom-name'>Wings</span> Photography
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {/* <Button>
                        Get started
                    </Button> */}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>

                    <Navbar.Link
                        href="/navbars"

                    >

                        <Link to="/">Home</Link>


                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <Link to="/blog">Blog</Link>
                    </Navbar.Link>



                    {/* <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link> */}
                    {/* <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link> */}
                    <div>
                        <Button gradientMonochrome="failure">
                            Log In
                        </Button>

                    </div>
                </Navbar.Collapse>

            </Navbar>

        </div>
    );
};

export default Header;