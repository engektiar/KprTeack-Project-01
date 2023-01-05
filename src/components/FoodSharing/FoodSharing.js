import React from 'react';
import './FoodSharing.css';

const FoodSharing = () => {
    return (
        <section className='foodsharing'>
            <div className='container'>
                <div className='row justify-items-center'>
                    <h4 className='col-md-6'>HELP BY SHARING YOUR FOOD</h4>
                    <div className='col-md-6 d-flex gap-2'>
                        <button>SPONSOR KIDS</button>
                        <div className='d-flex gap-2 align-items-center'>
                            <span style={{ width: '20px', height: '2px', backgroundColor: '#383634', }}></span>
                            <i style={{ fontSize: '35px', color: '#cf3720' }} class="fa-solid fa-o icon-star-half"></i>
                            <span style={{ width: '20px', height: '2px', backgroundColor: '#383634', }}></span>
                        </div>
                        <button>DONATE FOR FOOD</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodSharing;