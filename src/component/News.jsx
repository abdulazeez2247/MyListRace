import React from 'react'
import Newsimg1 from '../assets/images/b1.jpg'
import Newsimg2 from '../assets/images/b2.jpg'
import Newsimg3 from '../assets/images/b3.jpg'

 function News() {

    let news = [
        {
            image: Newsimg1,
            header: 'How to find desired place more quickly',
            author: 'ADMIN',
            date: 'march 2018',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        },
        {
            image: Newsimg2,
            header: 'How to find desired place more quickly',
            author: 'ADMIN',
            date: 'march 2018',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        },
        {
            image: Newsimg3,
            header: 'How to find desired place more quickly',
            author: 'ADMIN',
            date: 'march 2018',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
        },
    ]
  return (
    <div>
        <div className='flex flex-col items-center bg-white mb-[100px]'>
        <h2 className=" mt-[150px] text-2xl uppercase ">news and articles</h2>
        <p className=" mt-[30px] capitalize ">Always upto date with our latest News and Articles</p>
        </div>
        <div className='flex gap-6 justify-center  w-full'>
            {
                news.map(
                    (newsbox) => {
                        return(
                            <div className='w-[30%] text-gray-800  mb-[100px] hover:shadow-2xl group '>
                                <img className='w-full' src={newsbox.image} alt="" />
                                <div className=' mx-8 group '>
                                    <h2 className=' font-semibold capitalize mt-5 hover:cursor-pointer group-hover:text-[#ff575d] '> {newsbox.header} </h2>
                                    <div className=' flex gap-3 my-3 '>
                                        <p>Posted by <span className=' font-semibold hover:cursor-pointer '>{newsbox.author}</span> </p>
                                        <p>|</p>
                                        <p> {newsbox.date} </p>
                                    </div>
                                    <p className=' mb-8 '> {newsbox.text} </p>
                                </div>

                            </div>
                        )
                    }
                )
            }

        </div>
      
    </div>
  )
}
export default News
