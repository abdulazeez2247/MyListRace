import React from 'react'

function Footermenu() {
  return (
    <div className='mt-5'>
       <nav className='flex bg-white justify-between items-center px-20 py-7 z-[999] sticky top-0 w-full h-[10vh] '>
            <h3 className='font-bold text-xl'>List<span className=' text-[#ff575d] font-sans font-bold'>Race</span></h3>
            <ul className='flex sm:hidden lg:flex gap-10 font-sans text-[#100] px'>
                <li className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold '>HOW IT WORKS</li>
                <li className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'>EXPLORE</li>
                <li className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'>REVIEW</li>
                <li className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'>BLOG</li>
                <li className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'>CONTACT</li>                
                <li className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'>MY ACCOUNT</li>                

            </ul>
        </nav>
        <hr  className='mr-20 ml-15 text-[#00000018] mt-5'/>
        
    </div>
  )
}

export default Footermenu
