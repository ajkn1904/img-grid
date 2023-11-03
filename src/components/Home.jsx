import React from 'react';
import img1 from '../../public/images/image-1.webp'
import img2 from '../../public/images/image-2.webp'
import img3 from '../../public/images/image-3.webp'
import img4 from '../../public/images/image-4.webp'
import img5 from '../../public/images/image-5.webp'
import img6 from '../../public/images/image-6.webp'
import img7 from '../../public/images/image-7.webp'
import img8 from '../../public/images/image-8.webp'
import img9 from '../../public/images/image-9.webp'
import img10 from '../../public/images/image-10.jpeg'
import img11 from '../../public/images/image-11.jpeg'

const Home = () => {
    const items = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img5
        },
        {
            img: img6
        },
        {
            img: img7
        },
        {
            img: img8
        },
        {
            img: img9
        },
        {
            img: img10
        },
        {
            img: img11
        }
    ];


    return (
        <div className='bg-white rounded-md p-5'>
            <div className='pb-3 border-b-2'>
                <h1 className='text-3xl'>Gallery</h1>
            </div>
            <div className='grid grid-cols-5 grid-rows-3 gap-3 mt-5'>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className={`${index===0? 'row-span-2 col-span-2': ''} border rounded-md hover:border-2`}>
                                <img src={item.img} alt="image" className='rounded-md' />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Home;