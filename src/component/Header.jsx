import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className='bg-white fixed top-0 w-full h-[10vh] z-10 shadow-md'>
        <div className='flex justify-between items-center px-6 py-4'>
          <h3 className='font-bold text-xl'>
            List<span className='text-[#ff575d] font-sans font-bold'>Race</span>
          </h3>
          <ul className='hidden lg:flex gap-10 font-sans text-[#100]'>
            <li className='hover:text-red-500 cursor-pointer'>HOME</li>
            <li className='hover:text-red-500 cursor-pointer'>HOW IT WORKS</li>
            <li className='hover:text-red-500 cursor-pointer'>EXPLORE</li>
            <li className='hover:text-red-500 cursor-pointer'>REVIEW</li>
            <li className='hover:text-red-500 cursor-pointer'>BLOG</li>
            <li className='hover:text-red-500 cursor-pointer'>CONTACT</li>
          </ul>
          <div className='lg:hidden'>
            <button onClick={toggleMenu} className='text-2xl'>
              <i className={`pi ${menuOpen ? 'pi-times' : 'pi-bars'}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className='lg:hidden flex flex-col items-center bg-white py-4'>
            <ul className='text-center'>
              <li className='py-2 hover:text-red-500 cursor-pointer'>HOME</li>
              <li className='py-2 hover:text-red-500 cursor-pointer'>HOW IT WORKS</li>
              <li className='py-2 hover:text-red-500 cursor-pointer'>EXPLORE</li>
              <li className='py-2 hover:text-red-500 cursor-pointer'>REVIEW</li>
              <li className='py-2 hover:text-red-500 cursor-pointer'>BLOG</li>
              <li className='py-2 hover:text-red-500 cursor-pointer'>CONTACT</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
