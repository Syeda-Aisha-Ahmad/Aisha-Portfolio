import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaAddressBook, FaPhone, FaEnvelope } from 'react-icons/fa';
import image from '../../../Assets/logo.png'
import './About.css'

const About = () => {
    return (
        <div id='about' className="hero min-h-screen my-20 w-10/12 mx-auto">
            <div className="hero-content flex-col items-center lg:flex-row">
                <div className='w-4/12 pr-4 text-justify'>
                    <div className='heading'>
                        <h1 className="text-3xl text-primary font-semibold">Short Description About Me</h1>
                    </div>
                    <p className="py-6 text-lg">I am Syeda Aisha Ahmad. I live in Bangladesh. I'm a begginer Web Designer. Also known as a Science lover. I am the Co-founder of HMAS Family Firm. I love to read books and have a bit coffee with it...</p>

                </div>
                <div className='p-5 drop'>
                    <img src={image} className=" w-64 h-64 m-auto" alt='' />
                </div>
                <div className='w-4/12 text-justify'>
                    <div className='heading'>
                        <h1 className="text-3xl text-primary font-semibold">Personal Information</h1>

                    </div>
                    <p className="py-6 ">
                        <span className='flex items-center'><FaPhone className='text-xl m-2 pr-1' /> +8801992756161 <br /></span>
                        <span className='flex items-center'><FaEnvelope className='text-xl  m-2 pr-1' /> 19aishaahmad@gmail.com <br /></span>
                        <span className='flex items-center'><FaAddressBook className='text-xl  m-2 pr-1' /> Dhaka, Bangladesh</span>
                    </p>
                    <div className='flex'>
                        <a href="https://www.linkedin.com/feed/?trk=seo-authwall-base_google-one-tap-submit">
                            <div className='drop w-14 h-14 rounded-full mr-2'>
                                <p><FaLinkedinIn className='text-xl' /></p>
                            </div>
                        </a>


                        <a href="https://github.com/Syeda-Aisha-Ahmad">
                            <div className='drop w-14 h-14 rounded-full mx-2'>
                                <p><FaGithub className='text-xl' /></p>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100015597035398">
                            <div className='drop w-14 h-14 rounded-full mx-2'>
                                <p><FaFacebookF className='text-xl' /></p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;