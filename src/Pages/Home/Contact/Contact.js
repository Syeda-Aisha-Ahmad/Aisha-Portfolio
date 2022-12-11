import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='w-10/12 mx-auto '>
            <h1 className='mt-20 text-5xl text-primary font-bold text-center'>Contact Me</h1>
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Message</a>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;