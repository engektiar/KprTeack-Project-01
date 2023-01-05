import React from 'react';
import './Donation.css'

const Donation = () => {
    return (
        <section className='donation-main'>
            <div className='donation-container'>
                <div className='row'>
                    <div className='left col-md-5 col-sm-12'>
                        <h2>WHO WE <span>ARE</span></h2>
                        <p>In Bangladesh, we throw away an unbelievable amount of perfectly edible food every day. At the same time, a growing number of Bangladeshi find themselves struggling to make ends meet. In the course of a year, around 3.6 million Bangladesh find thems...</p>
                        <div className='button'><a href="https://onetakameal.org/about">read more</a></div>
                    </div>
                    <div className='right col-md-7 col-sm-12 d-flex justify-content-between'>
                        <div className='donation-donation'>
                            <div><i class="fa fa-usd" aria-hidden="true"></i></div>
                            <div className='content'>
                                <h4>DONATION</h4>
                                <ul>
                                    <li>Online Donation</li>
                                    <li>Nonprofit institution</li>
                                    <li>Easy Fundraising</li>
                                </ul>
                                <button>Donate Now</button>
                            </div>
                        </div>
                        <div className='donation-volunteers'>
                            <div><i class="fa fa-users" aria-hidden="true"></i></div>
                            <div className='content'>
                                <h4>DONATION</h4>
                                <ul>
                                    <li>Online Donation</li>
                                    <li>Nonprofit institution</li>
                                    <li>Easy Fundraising</li>
                                </ul>
                                <button>Registration</button>
                            </div>
                        </div>
                        <div className='donation-sponsor'>
                            <div><i class="fa fa-graduation-cap" aria-hidden="true"></i></div>
                            <div className='content'>
                                <h4>SPONSOR A KID</h4>
                                <ul>
                                    <li>Contact with Child</li>
                                    <li>Health $ Education</li>
                                    <li>Break poverty</li>
                                </ul>
                                <button>Sponsor</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;