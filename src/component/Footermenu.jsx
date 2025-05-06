import React, { useState } from 'react';

function Footermenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mt-5'>
      <nav className='bg-white px-6 lg:px-20 py-5 sticky top-0 z-[999] w-full'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-xl'>
            List<span className='text-[#ff575d] font-sans font-bold'>Race</span>
          </h3>
          <button
            className='text-3xl lg:hidden text-[#333]'
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
        </div>

        {/* Desktop menu */}
        <ul className='hidden lg:flex lg:gap-10 font-sans text-[#100] mt-4 lg:mt-0'>
          {['HOW IT WORKS', 'EXPLORE', 'REVIEW', 'BLOG', 'CONTACT', 'MY ACCOUNT'].map((item, i) => (
            <li
              key={i}
              className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        {isOpen && (
          <ul className='flex flex-col gap-3 mt-4 lg:hidden font-sans text-[#100]'>
            {['HOW IT WORKS', 'EXPLORE', 'REVIEW', 'BLOG', 'CONTACT', 'MY ACCOUNT'].map((item, i) => (
              <li
                key={i}
                className='hover:text-[red] cursor-pointer text-[#00000089] font-semibold'
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </nav>
      <hr className='border-[#00000018] mx-6 lg:mx-20 mt-5' />
    </div>
  );
}

export default Footermenu;
