import React from 'react'
import img1 from '../assets/images/b1.jpg'
import img2 from '../assets/images/b2.jpg'
import img3 from '../assets/images/b3.jpg'
import img4 from '../assets/images/banner.jpg'
import img5 from '../assets/images/c1.png'
import img6 from '../assets/images/c2.png'
import img7 from '../assets/images/c3.png'
import img8 from '../assets/images/c4.png'
import img9 from '../assets/images/counter-banner.jpg'
import img10 from '../assets/images/e1.jpg'
import img11 from '../assets/images/e2.jpg'
import img12 from '../assets/images/e3.jpg'
import img13 from '../assets/images/e4.jpg'
import img14 from '../assets/images/e5.jpg'
import img15 from '../assets/images/e6.jpg'

 function Homepage() {
  return (
    <div className='backimage'>
      <div className='text'>
        <h1 className='font-bold text-5xl text-white'>BEST PLACE TO FIND AND EXPLORE <br />THAT ALL YOU NEED</h1>
        <h4 className=' text-xl text-white py-7'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</h4>
       <div className=' flex justify-between mt-[40px]'>
        <div className='w-[80%] flex bg-white justify-center ml-25'>
          <input type="text" className='w-[40%] h-full rounded-l-md  outline-none pl-[3px]' placeholder='Ex: Place, Restaurant, Food, Automobile' />         
          <input type="text" className='  pl-[60px] w-[30%] h-full rounded-r-md outline-none'placeholder='Ex: London, Newyork, Rome,' />   
                 
        </div>
        <div>
          
          <button className='p-4 w-[5%] text-md   bg-red-500 text-white pr-30 mr-25'>Search</button>

        </div>
       </div>
       
      </div>
    </div>
  )
}
export default Homepage
