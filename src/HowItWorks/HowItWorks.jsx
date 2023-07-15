import React from 'react';
import icon1 from "../../public/icon-1.png"
import icon2 from "../../public/icon-2.png"
import icon3 from "../../public/icon-3.png"

const HowItWorks = () => {
    return (
        <>
           <div data-aos="fade-down-right"
            data-aos-duration="2000">
           <h1 className='text-center text-4xl font-bold mt-16'>Here's how it works</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto box-border'>
                <div className='border border-none p-5 mt-10'>
                    <img src={icon1} className='mx-auto' alt="" />
                    <div className='text-center'>
                        <h1 className=' font-bold text-2xl p-3'>Creative</h1>
                        <p>Cras semper auctor neque vitae tempus quam pellentesque. At augue eget arcu dictum.</p>
                    </div>
                </div>
                <div className='border border-none p-5 mt-10'>
                    <img src={icon2} className='mx-auto' alt="" />
                    <div className='text-center'>
                        <h1 className=' font-bold text-2xl p-3'>Inspires</h1>
                        <p>Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Elementum sagittis.</p>
                    </div>
                </div>
                <div className='border border-none p-5 mt-10'>
                    <img src={icon3} className='mx-auto' alt="" />
                    <div className='text-center'>
                        <h1 className=' font-bold text-2xl p-3'>Encouraging</h1>
                        <p>Morbi tincidunt ornare massa eget. Ullamcorper a lacus vestibulum sed arcu non odio.</p>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default HowItWorks;