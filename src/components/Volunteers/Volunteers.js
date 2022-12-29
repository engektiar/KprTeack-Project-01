import React from 'react';
import './Volunteers.css'

const Volunteers = () => {
    return (
        <section className='volunteers'>
            <div className='row volunteers-container'>
                <div className='d-flex flex-column align-items-center col-md-6'>
                    <h2 className='text-uppercase text-center'>Become <span style={{ color: '#face1c' }}>Volunteers</span></h2>
                    <div className='design-img d-flex align-items-center gap-4'>
                        <div></div>
                        <img src='https://onetakameal.org/uploads/ahar_settings/section_icon.png' alt=''></img>
                        <div></div>
                    </div>
                    <article className='text-center'>
                        Are you ready to become an international volunteer You can contribute your time, skills and knowledge through volunteering with us. This is an opportunity to create a positive impact and be a significant force for achieving peace and development. Make a difference to the lives of many!
                    </article>
                    <button className=''>JOIN NOW</button>
                </div>
            </div>
        </section>
    );
};

export default Volunteers;