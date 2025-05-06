import React from 'react';
import exploreimage1 from '../assets/images/e1.jpg';
import exploreimage2 from '../assets/images/e2.jpg';
import exploreimage3 from '../assets/images/e3.jpg';
import exploreimage4 from '../assets/images/e4.jpg';
import exploreimage5 from '../assets/images/e5.jpg';
import exploreimage6 from '../assets/images/e6.jpg';
import exploreprofileimg from '../assets/images/c1.png';

function Explore() {
  const exploreboxes = [
    {
      image: exploreimage1,
      heading: 'Tommy Hilfiger Bar',
      star: 5.0,
      rating: '10 Ratings',
      formPrice: '5$-300$',
      category: 'Restaurant',
      profileimg: exploreprofileimg,
      aboutPerson:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false,
    },
    {
      image: exploreimage2,
      heading: 'Swim And Dine Resort',
      star: 4.5,
      rating: '10 Ratings',
      formPrice: '50$-500$',
      category: 'Hotel',
      profileimg: exploreprofileimg,
      aboutPerson:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: true,
    },
    {
      image: exploreimage3,
      heading: 'Europe Tour',
      star: 3.0,
      rating: '15 Ratings',
      formPrice: '5k$-10k$',
      category: 'Destination',
      profileimg: exploreprofileimg,
      aboutPerson:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false,
    },
    {
      image: exploreimage4,
      heading: 'Banglow With Swimming Pool',
      star: 5.0,
      rating: '10 Ratings',
      formPrice: '10k$-15k$',
      category: 'Real Estate',
      profileimg: exploreprofileimg,
      aboutPerson:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false,
    },
    {
      image: exploreimage5,
      heading: 'Vintage Car Expo',
      star: 4.2,
      rating: '8 Ratings',
      formPrice: '500$-1200$',
      category: 'Restaurant',
      profileimg: exploreprofileimg,
      aboutPerson:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: true,
    },
    {
      image: exploreimage6,
      heading: 'Thailand Tour',
      star: 1.0,
      rating: '15 Ratings',
      formPrice: '5k$-10k$',
      category: 'Destination',
      profileimg: exploreprofileimg,
      aboutPerson:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua',
      available: false,
    },
  ];

  return (
    <div className="w-full bg-[#f2f2f2] pb-20 pt-12">
      <div className="flex flex-col items-center text-center px-4">
        <h2 className="text-xl md:text-3xl font-semibold">EXPLORE</h2>
        <p className="mt-4 text-[#00000081] text-sm md:text-base mb-10 max-w-xl">
          Explore new places, food, culture around the world, and much more.
        </p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap w-[95%] mx-auto">
        {exploreboxes.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[31%] bg-white text-gray-500 text-sm leading-6 hover:shadow-2xl group transition-all duration-300"
          >
            <div className="relative">
              <img className="w-full h-48 md:h-60 object-cover rounded-t" src={item.image} alt="" />
              <div className="absolute bottom-3 left-0 right-0 flex justify-between px-3 hidden group-hover:flex">
                <p className="text-white bg-[#ff575d] rounded px-3 py-1">Best Rated</p>
                <div className="flex gap-2">
                  <p className="pi pi-twitter bg-black p-2 rounded text-white cursor-pointer"></p>
                  <p className="pi pi-bookmark bg-black p-2 rounded text-white cursor-pointer"></p>
                </div>
              </div>
            </div>

            <h1 className="text-black mt-4 mb-2 mx-3 text-lg font-semibold">{item.heading}</h1>

            <div className="flex flex-wrap items-center gap-3 mx-3 mb-4 text-sm">
              <p
                className={`${
                  item.star > 4
                    ? 'bg-green-600'
                    : item.star > 2
                    ? 'bg-yellow-400'
                    : 'bg-orange-400'
                } text-white px-2 rounded`}
              >
                {item.star}
              </p>
              <span>{item.rating}</span>
              <span>|</span>
              <span>
                From <span className="text-red-500">{item.formPrice}</span>
              </span>
              <span>|</span>
              <span>{item.category}</span>
            </div>

            <div className="flex items-start gap-3 mx-3">
              <img className="w-12 h-12 object-cover rounded-full" src={item.profileimg} alt="" />
              <p className="text-xs">{item.aboutPerson}</p>
            </div>

            <hr className="mx-5 my-4 border-gray-200" />

            <div className="flex justify-between items-center px-3 pb-4">
              <p className={`text-sm font-light ${item.available ? 'text-green-600' : 'text-red-600'}`}>
                {item.available ? 'Open Now' : 'Close Now'}
              </p>
              <div className="flex gap-3 text-lg">
                <i className="pi pi-map-marker cursor-pointer hover:text-red-400"></i>
                <i className="pi pi-upload cursor-pointer hover:text-red-400"></i>
                <i className="pi pi-heart cursor-pointer hover:text-red-400"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
