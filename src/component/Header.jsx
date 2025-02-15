import React from 'react'


 function Header() {
    return(
        <header>
        <nav className='flex bg-white justify-between items-center px-20 py-7   w-full h-[10vh] fixed top-0 z-10 shadow-md'>
            <h3 className='font-bold text-xl'>List<span className=' text-[#ff575d] font-sans font-bold'>Race</span></h3>
            <ul className='flex sm:hidden lg:flex gap-10 font-sans text-[#100] px'>
                <li className='hover:text-[red] cursor-pointer'>HOME</li>
                <li className='hover:text-[red] cursor-pointer'>HOW IT WORKS</li>
                <li className='hover:text-[red] cursor-pointer'>EXPLORE</li>
                <li className='hover:text-[red] cursor-pointer'>REVIEW</li>
                <li className='hover:text-[red] cursor-pointer'>BLOG</li>
                <li className='hover:text-[red] cursor-pointer'>CONTACT</li>
            </ul>
        </nav>
        </header>
    )


 }
export default Header
