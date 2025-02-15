import React from 'react'
import clientimg1 from '../assets/images/c1.png'
import clientimg2 from '../assets/images/c2.png'
import clientimg3 from '../assets/images/c3.png'
import clientimg4 from '../assets/images/c4.png'

 function Clientreviews() {

    let clreviews = [
        {
            clImg: clientimg1,
            name: 'Moniru Islam',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clImg: clientimg2,
            name: 'Shohrab Hossain',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        {
            clImg: clientimg3,
            name: 'Tom Leakar',
            location: 'London, UK',
            about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        },
        // {
        //     clImg: clientimg4,
        //     name: 'Tom Leakar',
        //     location: 'London, UK',
        //     about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        // },
        // {
        //     clImg: clientimg1,
        //     name: 'Moniru Islam',
        //     location: 'London, UK',
        //     about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        // },
        // {
        //     clImg: clientimg2,
        //     name: 'Shohrab Hossain',
        //     location: 'London, UK',
        //     about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        // },
        // {
        //     clImg: clientimg3,
        //     name: 'Moniru Islam',
        //     location: 'London, UK',
        //     about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        // },
        // {
        //     clImg: clientimg4,
        //     name: 'Shohrab Hossain',
        //     location: 'London, UK',
        //     about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        // },
        // {
        //     clImg: clientimg1,
        //     name: 'Tom Leakar',
        //     location: 'London, UK',
        //     about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sit!'
        // },
    ]

    let traffic = [
        {
            figure: '90K+',
            cart: 'Listings'
        },
        {
            figure: '40K+',
            cart: 'Listing Categories'
        },
        {
            figure: '65K+',
            cart: 'Visitors'
        },
        {
            figure: '50K+',
            cart: 'Happy Clients'
        },
    ]

  return (
    <div className='mt-10'>
        <div className='bg-[white] flex flex-col items-center pt-10'>
            <h1 className='text-2xl'>CLIENTS REVIEWS</h1>
            <h2 className='pt-6 text-[#0000007f]'>What our client say about us</h2>
        </div>
        <div className='w-full flex justify-center gap-4 py-[100px] bg-white overflow-x-auto'>
            {
                clreviews.map(
                    (clientboxes) => {
                        return(
                            <div className='w-[28%] h-[50vh] shadow-sm p-5 rounded text-gray-400 hover:shadow-2xl'>
                                <div className='group cursor-pointer flex items-end gap-5 mt-9 mx-5 '>
                                    <div className=" w-[50px]">
                                        <img className='w-[100%]' src={clientboxes.clImg} alt="" />
                                    </div>
                                    <div className=''>
                                        <h3 className=' text-gray-950 text-lg font-semibold'>{clientboxes.name}</h3>
                                        <p>{clientboxes.location}</p>
                                        <div>
                                        <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                        <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                        <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                        <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                        <span className=" pi pi-star-fill text-yellow-500 text-sm "></span>
                                        </div>
                                        
                                    </div>

                                </div>
                                <p>{clientboxes.about}</p>


                            </div>
                        )
                    }
                )
            }

        </div>
        <div className='counterbanner flex gap-40 items-center justify-center flex-wrap text-white'>
            {
                traffic.map(
                    (trafficbox) => {
                        return(
                            <div className='text-center'>
                                <h2 className='text-5xl'>{trafficbox.figure}</h2>
                                <p className='text-2xl'>{trafficbox.cart}</p>
                                </div>
                            
                        )
                    }
                )
            }
        </div>
      
    </div>
  )
}
export default Clientreviews
