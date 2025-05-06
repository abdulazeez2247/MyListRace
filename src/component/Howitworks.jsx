import React from 'react'

function Howitworks() {
    let Howitworksbox = [
        {
            icon: 'pi-lightbulb',
            headingtext:  'Choose what to Do',
            paragraphtext: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            button: 'Read More'
        },
        {
            icon: 'pi-car',
            headingtext:  'Find what you want',
            paragraphtext: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            button: 'Read More'
        },
        {
            icon: 'pi-map-marker',
            headingtext:  'Explore amazing Place',
            paragraphtext: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
            button: 'Read More'
        },
        
    ]
  return (
    <div className='w-[100%] bg-white'>
        <div className='flex flex-col items-center'>
            <h1 className='mt-[28%] text-2xl'>HOW IT WORKS</h1>
            <h2 className='mt-[30px]'>Learn More about how our website works</h2>
        </div>
        <div className='lg:flex lg:gap-5 w-[100%] justify-center align-middle pb-[10%]'>
            {
                Howitworksbox.map(
                    function (boxes) {
                        return(
                            <div className='mt-[70px] mb-[10px] hover:bg-[#ff575d] shadow-md group hover:text-white text-center flex-col rounded-md items-center cursor-pointer  lg:w-[28%]  px-[10px] mt-90px'>
                                <i className={`pi ${boxes.icon} text-4xl p-6 bg-gray-100 rounded-[50%] mt-8 mb-8 hover:bg-[#ffffff] group-hover:text-[#ff575d]`}></i>
                                <h1 className='capitalize font-semibold'>{boxes.headingtext}</h1>
                                <p className=' mt-5 text-[#00000075] group-hover:text-white mb-10px'>{boxes.paragraphtext}</p>
                                <button className='border r- w-[30%] h-[30px]  mt-7 mb-12 group-hover:text-[#ff575d] group-hover:bg-white mt-90px '>{boxes.button}</button>
                            </div>
                        )
                        
                    }
                )
            }
        </div>
    </div>
  )
}
export default Howitworks