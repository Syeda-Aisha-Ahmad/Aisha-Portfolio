import React from 'react';
import project1 from '../../../Assets/Screenshot (397).png'
import project2 from '../../../Assets/Screenshot (398).png'
import project3 from '../../../Assets/Screenshot (399).png'

const Project = () => {
    return (
        <div id='project' className='w-10/12 mx-auto px-5 my-32'>
            <h1 className='text-5xl text-primary font-bold text-center'>My Projects</h1>
            <div className='grid grid-cols-3 mt-10'>
                <div className=" card w-11/12 mx-auto mt-10 bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title w-50 mx-auto text-center">
                            B-picker
                            <a href="https://b-picker-e010a.web.app/"><div className="badge badge-primary">Live Site</div></a>
                        </h2>
                        <p>A reseller bookshop where user can buy or sell books.</p>
                        <div className='flex mt-5 justify-evenly'>
                            <a href="https://github.com/Syeda-Aisha-Ahmad/b-picker_client_repo">
                                <div className="badge badge-outline">Client Code</div>
                            </a>
                            <a href="https://github.com/Syeda-Aisha-Ahmad/b-picker_server_repo">
                                <div className="badge badge-outline">Server Code</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" card w-11/12 mx-auto mt-10 bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title w-50 mx-auto text-center">
                            Excursion
                            <a href="https://excursion-e221c.web.app/"><div className="badge badge-primary">Live Site</div></a>
                        </h2>
                        <p>Travel service Website.</p>
                        <div className='flex mt-5 justify-evenly'>
                            <a href="https://github.com/Syeda-Aisha-Ahmad/excursion_client_repo">
                                <div className="badge badge-outline">Client Code</div>
                            </a>
                            <a href="https://github.com/Syeda-Aisha-Ahmad/excursion_server_repo">
                                <div className="badge badge-outline">Server Code</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" card w-11/12 mx-auto mt-10 bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title w-50 mx-auto text-center">
                            Learning Tech
                            <a href="https://rise-turn-club.web.app/"><div className="badge badge-primary">Live Site</div></a>
                        </h2>
                        <p>Learning Platform.</p>
                        <div className='flex mt-5 justify-evenly'>
                            <a href="https://github.com/Syeda-Aisha-Ahmad/riseTurn-club">
                                <div className="badge badge-outline">Client Code</div>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Project;