import React from 'react'

 function Footer() {
  return (
  <div>
   <footer className='mt-5  flex bg-white justify-between items-center px-15 py-7 z-[999] sticky top-0 w-full gap-2 text-[#00000089] font-semibold'>
     ©Copyright. {new Date().getFullYear()} Designed And Developed By Abdulazeez
     <nav className=' flex gap-5 mx-4'>
       <p className=" text-[#00000089] font-semibold hover:text-[#ff575d]  "> <span className='pi pi-phone hover:text-[#ff575d] text-[#00000089] font-semibold'></span>+1 (222) 777 8888</p>
       <p className=" text-[#00000089] font-semibold pi pi-facebook p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
       <p className=" text-[#00000089] font-semibold pi pi-twitter p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
       <p className=" text-[#00000089] font-semibold pi pi-linkedin p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
       <p className=" text-[#00000089] font-semibold pi pi-google p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white "></p>
     </nav>
    </footer>
  </div>

  )
}
export default Footer
