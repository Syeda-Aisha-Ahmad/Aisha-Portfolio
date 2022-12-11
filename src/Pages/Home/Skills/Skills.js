import React from 'react';
import '../About/About.css'

const Skills = () => {
    return (
        <div id='skills' className='w-10/12 mx-auto'>
            <h1 className='text-5xl text-primary font-bold text-center'>Skills</h1>
            <div className='grid lg:grid-cols-2 lg:px-10 lg:gap-20'>
                <div>
                    <h1 className='text-3xl text-primary font-semibold w-5/12 mx-auto my-10'>Experience</h1>
                    <div className='grid grid-cols-3 gap-y-5'>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>HTML5</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>CSS3</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>JavaScript</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>ES6</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>React.js</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Tailwind</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Bootstrap</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>React Bootstrap</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Daisy UI</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl text-primary font-semibold w-5/12 mx-auto my-10'>Comfortable</h1>
                    <div className='grid grid-cols-3 gap-y-5'>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Firebase</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Material-UI</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Node.js</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Express.js</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>MongoDB</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>JWT</span>
                        </div>
                        <div className='drop p-12 text-base text-primary font-semibold text-center w-20 h-20 rounded-full mx-2'>
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;