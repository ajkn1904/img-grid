import React, { useState } from 'react';
import img1 from '/images/image-1.webp'
import img2 from '/images/image-2.webp'
import img3 from '/images/image-3.webp'
import img4 from '/images/image-4.webp'
import img5 from '/images/image-5.webp'
import img6 from '/images/image-6.webp'
import img7 from '/images/image-7.webp'
import img8 from '/images/image-8.webp'
import img9 from '/images/image-9.webp'
import img10 from '/images/image-10.jpeg'
import img11 from '/images/image-11.jpeg'

const Home = () => {

    const [items, setItems] = useState([
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
    ]);

    const onDragStart = (e, i) => {
        e.dataTransfer.setData('index', i);
    };

    const onDrop = (e, i) => {
        const newItemsList = [...items];
        const currentIndex = e.dataTransfer.getData('index');
        const [draggedImg] = newItemsList.splice(currentIndex, 1);
        newItemsList.splice(i, 0, draggedImg);
        setItems(newItemsList);
    };

    return (
        <div className='bg-white rounded-md p-5'>

            <div className='pb-3 border-b-2'>
                <h1 className='text-3xl'>Gallery</h1>
            </div>


            <div className='grid grid-cols-5 grid-rows-3 gap-3 mt-5'>

                {items.map((item, index) => {
                    return (
                        <div key={index} onDragOver={e => e.preventDefault()} onDragStart={e => onDragStart(e, index)} onDrop={e => onDrop(e, index)} draggable='true' className={`${index === 0 ? 'row-span-2 col-span-2' : ''} border rounded-md cursor-pointer hover:border-2`}>

                            <img src={item} alt="image" className='rounded-md' />

                        </div>
                    )}
                )}

            </div>


        </div>
    );
};

export default Home;
