import React from 'react'
import exploreimage1 from '../assets/images/e1.jpg'
import exploreimage2 from '../assets/images/e2.jpg'
import exploreimage3 from '../assets/images/e3.jpg'
import exploreimage4 from '../assets/images/e4.jpg'
import exploreimage5 from '../assets/images/e5.jpg'
import exploreimage6 from '../assets/images/e6.jpg'
import exploreprofileimg from '../assets/images/c1.png'




 function Explore() {

  let exploreboxes = [
    {
      image: exploreimage1,
      heading: 'Tommy Hilfiger Bar',
      star: 5.0,
      rating: '10 Ratings',
      formPrice: '  5$-300$',
      category: 'Destaurant',
      profileimg: exploreprofileimg,
      aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false
    },
    {
      image: exploreimage2,
      heading: 'Swim And Dine Resort',
      star: 4.5,
      rating: '10 Ratings',
      formPrice: '  50$-500$',
      category: 'Hotel',
      profileimg: exploreprofileimg,
      aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: true
    },
    {
      image: exploreimage3,
      heading: 'Europe Tour',
      star: 3.0,
      rating: '15 Ratings',
      formPrice: ' 5k$-10k$',
      category: ' Destination',
      profileimg: exploreprofileimg,
      aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false
    },
    {
      image: exploreimage4,
      heading: 'Banglow With Swiming Pool',
      star: 5.0,
      rating: '10 Ratings',
      formPrice: '  10k$-15k$',
      category: 'Real Estate',
      profileimg: exploreprofileimg,
      aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false
    },
    {
      image: exploreimage5,
      heading: 'Vintage Car Expo',
      star: 4.2,
      rating: '8 Ratings',
      formPrice: '  500$-1200$',
      category: 'restaurant',
      profileimg: exploreprofileimg,
      aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: true
    },
    {
      image: exploreimage6,
      heading: 'Thailand Tour',
      star: 1.0,
      rating: '15 Ratings',
      formPrice: ' 5k$-10k$',
      category: 'Destination',
      profileimg: exploreprofileimg,
      aboutPerson: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false
    },

  ]
  return (
    <div className='w-full bg-[#80808014] pb-[80px] pt-[50px]'>
      <div className='flex flex-col items-center'>
      <h2 className=" mt-[100px] text-2xl  ">EXPLORE</h2>
      <p className=" mt-[30px] text-[#00000081] mb-16">Explore New place, food, culture around the world and many more</p>
      </div>
      <div className='flex justify-center gap-7  flex-wrap m-auto w-[95%]  '>
        {
          exploreboxes.map(
             (exploreeachboxes)=> {
              return(
                <div className=' w-[30%]  bg-white  text-gray-500 text-sm leading-6 hover:shadow-2xl group  '>
                  <div className='w-full relative '>
                    <img className='rounded-t w-[100%]  ' src={exploreeachboxes.image} alt="" />
                    <div className='w-full h-[30px]  absolute bottom-3 left-0  justify-between hidden group-hover:flex'>
                      <p className='text-white bg-[#ff575d] rounded px-3 ml-3 py-1'>Best Rated</p>
                      <div>
                      <p className='pi pi-twitter bg-black p-1 mr-3 text-white'></p>
                        <p className='pi pi-bookmark bg-black p-1 mr-3 text-white'></p>
                        

                      </div>
                      

                    </div>
                  </div>
                  <h1 className='text-[black] mt-6 mb-2 mx-3 text-lg w-[90%]'>{exploreeachboxes.heading}</h1>
                  <div className='flex justify-start gap-3 mx-3 mb-4 text-wh '>
                    <p className={`text-white ${
                      exploreeachboxes.star> 4 ?
                      'bg-green-600 '
                      :
                      exploreeachboxes.star> 2 ?
                      'bg-yellow-300 '
                      :
                      'bg-[orange] '
                    } p-[2px] w-[30px] text-center rounded `}>

                    </p>     
                    <p>{exploreeachboxes.rating} </p>
                    <p> | </p>
                    <p> Form <span className='text-[red]'>{exploreeachboxes.formPrice} </span></p>
                    <p> | </p>
                    <p>{exploreeachboxes.category}</p>
                  </div>
                  <div className='flex items-center gap-2 mt-5 mx-3'>
                    <img className='w-[30%] h-[7vh]' src={exploreeachboxes.profileimg} alt="" />
                    <p className='m-2'>{exploreeachboxes.aboutPerson}</p>
                  </div>
                  <hr className='mr-5 ml-5 text-[#00000018] mt-5' />
                  <div className='flex justify-between mt-5 mb-5'>
                  { exploreeachboxes.available ?  (
                    <p className='text-green-600 ml-5 font-light'>Open Now</p>
                  ): 
                  <p className='text-red-600 ml-5 font-light'>Close Now</p>
                  }
                  <div className='flex gap-5 mr-5 '>
                  <i className="pi pi-map-marker cursor-pointer hover:text-red-400"></i>
                  <i className="pi pi-upload cursor-pointer hover:text-red-400"></i>
                  <i className="pi pi-heart cursor-pointer hover:text-red-400"></i>
                  </div>
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
export default Explore