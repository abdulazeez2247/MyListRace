import React from 'react'
import clientimg1 from '../assets/images/c1.png'
import clientimg2 from '../assets/images/c2.png'
import clientimg3 from '../assets/images/c3.png'

function Clientreviews() {

    const clreviews = [
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
    ]

    const traffic = [
        { figure: '90K+', cart: 'Listings' },
        { figure: '40K+', cart: 'Listing Categories' },
        { figure: '65K+', cart: 'Visitors' },
        { figure: '50K+', cart: 'Happy Clients' },
    ]

    return (
        <div className='mt-10'>
            <div className='bg-white flex flex-col items-center pt-10 text-center px-4'>
                <h1 className='text-2xl font-semibold'>CLIENTS REVIEWS</h1>
                <h2 className='pt-4 text-gray-600'>What our client say about us</h2>
            </div>

            {/* Review Cards */}
            <div className='w-full flex flex-wrap justify-center gap-6 py-16 bg-white px-4'>
                {clreviews.map((client, index) => (
                    <div key={index} className='w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white shadow-sm p-6 rounded-lg hover:shadow-lg transition-shadow'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img className='w-14 h-14 rounded-full object-cover' src={client.clImg} alt={client.name} />
                            <div>
                                <h3 className='text-lg font-bold text-gray-800'>{client.name}</h3>
                                <p className='text-sm text-gray-500'>{client.location}</p>
                                <div className='flex gap-1 mt-1'>
                                    {Array(5).fill(0).map((_, i) => (
                                        <span key={i} className="pi pi-star-fill text-yellow-500 text-xs"></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='text-sm text-gray-600'>{client.about}</p>
                    </div>
                ))}
            </div>

            {/* Traffic Counters */}
            <div className='bg-[#111827] py-10 px-4 flex flex-wrap justify-center gap-10 text-white text-center'>
                {traffic.map((item, index) => (
                    <div key={index}>
                        <h2 className='text-4xl font-bold'>{item.figure}</h2>
                        <p className='text-xl'>{item.cart}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clientreviews
