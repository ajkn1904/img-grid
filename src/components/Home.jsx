import React, { useState } from 'react';
/* start: import images */
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
/* end: import images */

const Home = () => {

    /* start: state variable with default value */
    const [items, setItems] = useState([
        {
            image: img1,
            selected: false
        },
        {
            image: img2,
            selected: false
        },
        {
            image: img3,
            selected: false
        },
        {
            image: img4,
            selected: false
        },
        {
            image: img5,
            selected: false
        },
        {
            image: img6,
            selected: false
        },
        {
            image: img7,
            selected: false
        },
        {
            image: img8,
            selected: false
        },
        {
            image: img9,
            selected: false
        },
        {
            image: img10,
            selected: false
        },
        {
            image: img11,
            selected: false
        }
    ]);
    /* end: state variable with default value */


    /* start: drag function of DND functionality*/
    const onDragStart = (e, i) => {
        e.dataTransfer.setData('index', i);
    };
    /* end: drag function of DND functionality*/

    const newItemsList = [...items];

    /* start: drop function of DND functionality*/
    const onDrop = (e, i) => {
        const currentIndex = e.dataTransfer.getData('index');
        const [draggedImg] = newItemsList.splice(currentIndex, 1);
        newItemsList.splice(i, 0, draggedImg);
        setItems(newItemsList);
    };
    /* end: drop function of DND functionality*/


    /* start: toggle function of image selection functionality*/
    const toggleSelection = (i) => {
        newItemsList[i].selected = !newItemsList[i].selected;
        setItems(newItemsList);
    };
    /* end: toggle function of image selection functionality*/


    const selectedItemList = newItemsList.filter(data => data.selected);

    /* start: delete function for selected image*/
    const deleteSelectedItems = () => {
        const updatedList = newItemsList.filter(data => !data.selected);
        setItems(updatedList);
    };
    /* end: delete function for selected image*/


    return (
        <div
            className='bg-white rounded-md py-5 md:py-10'
        >

            <div
                className='px-5 md:px-10 pb-3 border-b-2'
            >
                <h1
                    className={`text-3xl pt-4 md:pt-0 pb-[17px] ${selectedItemList.length !== 0 ? 'hidden' : ''}`}
                >
                    Gallery
                </h1>

                <div
                    className={`flex justify-between items-center pt-4 md:pt-0 pb-[3.4px] ${selectedItemList.length === 0 ? 'hidden' : ''}`}
                >
                    <div
                        className='flex items-center gap-2'
                    >
                        <input
                            type="checkbox"
                            className='h-4 w-4 md:h-5 md:w-5'
                            checked
                            readOnly />
                        <p
                            className='font-semibold text-lg'
                        >
                            {selectedItemList.length} {selectedItemList.length === 1 ? 'File' : 'Files'} Selected
                        </p>
                    </div>

                    <button
                        onClick={deleteSelectedItems}
                        className='text-red-600 text-lg bg-white hover:bg-red-50 border-none'
                    >
                        Delete {selectedItemList.length === 1 ? 'file' : 'files'}
                    </button>
                </div>
            </div>


            <div
                className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 px-5 md:px-10 my-5'
            >
                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onDragOver={e => e.preventDefault()}
                            onDragStart={e => onDragStart(e, index)}
                            onDrop={e => onDrop(e, index)}
                            draggable='true'
                            onClick={() => toggleSelection(index)}
                            className={`${index === 0 ? 'row-span-2 col-span-2' : ''} border rounded-md cursor-pointer hover:border-none hover:shadow-md hover:shadow-blue-300 relative`}
                        >
                            <div
                                className="relative group"
                            >
                                <input
                                    type='checkbox'
                                    checked={item.selected}
                                    className={`h-4 w-4 md:h-5 md:w-5 absolute top-4 right-4 z-10 opacity-0 ${item.selected ? 'opacity-100' : 'group-hover:opacity-100'}`}
                                    readOnly />

                                <img
                                    src={item.image}
                                    alt="image"
                                    className={`rounded-md transition-transform transform bg-white hover:brightness-50 ${item.selected ? 'brightness-90' : ''}`} />

                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    );
};

export default Home;
