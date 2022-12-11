import React from 'react';
import logo from '../../../Assets/logo.png'

const Nav = () => {
    return (
        <div className="navbar bg-base-100 w-10/12 mx-auto text-primary font-bold">

            {/* Large device */}
            <a href="/" className="lg:hidden flex normal-case text-xl lg:w-14 md:w-14 w-12 rounded-full border border-primary"><img src={logo} alt="" /></a>
            <div className="lg:navbar-start ">
                <a href="/" className=" normal-case text-xl hidden lg:flex lg:w-14 md:w-14 w-12 rounded-full border border-primary"><img src={logo} alt="" /></a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Skills</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>



            {/* mobile and tab */}
            <div className="navbar-end lg:hidden flex ml-auto">
                <div className="dropdown">
                    <label tabIndex={0} className="">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 absolute right-1 shadow bg-base-100 rounded-box w-32">
                        <li><a href="/">About Me</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;