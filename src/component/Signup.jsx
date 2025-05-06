import React from 'react'

 function Signup() {
  return (
    <div className=" lg:w-full h-[50vh] bg-[#80808014] flex flex-col gap-6 justify-center items-center ">
            <h1 className=" uppercase text-2xl font-semibold ">do you want to add your business listing with us?</h1>
            <p className=" text-lg ">Listrace offer you to list your business with us and we very much able to promote your Business.</p>
            <div className='lg:w-full h-[60px]  lg:flex justify-center '>
            <input type="text" name="" id="" placeholder='Enter your email here' className='w-[40%] group:shadow-md border-none p-4 outline-none bg-white hover:shadow-2xl ' /> <span className='bg-[#ff575d]  text-white p-4 rounded [w-10%] hover:shadow-2xl'><button>Create Account</button></span>
                
            </div>
        </div>
  )
}
export default Signup
