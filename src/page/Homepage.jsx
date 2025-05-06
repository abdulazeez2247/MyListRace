import React from 'react';
import img1 from '../assets/images/b1.jpg';
import img2 from '../assets/images/b2.jpg';
import img3 from '../assets/images/b3.jpg';
import img4 from '../assets/images/banner.jpg';
import img5 from '../assets/images/c1.png';
import img6 from '../assets/images/c2.png';
import img7 from '../assets/images/c3.png';
import img8 from '../assets/images/c4.png';
import img9 from '../assets/images/counter-banner.jpg';
import img10 from '../assets/images/e1.jpg';
import img11 from '../assets/images/e2.jpg';
import img12 from '../assets/images/e3.jpg';
import img13 from '../assets/images/e4.jpg';
import img14 from '../assets/images/e5.jpg';
import img15 from '../assets/images/e6.jpg';

function Homepage() {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${img4})` }}></div>
      <div className='relative z-10 text-center pt-24'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white'>
          BEST PLACE TO FIND AND EXPLORE <br />THAT ALL YOU NEED
        </h1>
        <h4 className='text-lg sm:text-xl py-4 text-white'>
          Find Best Place, Restaurant, Hotel, Real State and many more things in just One click
        </h4>
        
        <div className='flex flex-col sm:flex-row justify-center mt-6'>
          <div className='flex sm:w-3/4 w-full'>
            <input
              type="text"
              className='w-full sm:w-1/2 h-12 rounded-l-md px-3 outline-none'
              placeholder='Ex: Place, Restaurant, Food, Automobile'
            />
            <input
              type="text"
              className='w-full sm:w-1/3 h-12 rounded-r-md outline-none pl-3'
              placeholder='Ex: London, New York, Rome'
            />
          </div>
          
          <div className='mt-4 sm:mt-0 sm:ml-4'>
            <button className='w-full sm:w-auto px-6 py-3 text-md bg-red-300 text-white rounded-md'>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
