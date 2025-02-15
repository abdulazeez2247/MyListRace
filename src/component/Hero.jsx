import React from "react";



function Herobox() {
    let heroshadowbox = [
        {
            icon: 'pi pi-building-columns', 
            headingtext: 'Restaurant', 
            listingnumber: '150 listings'
        },
        {
            icon: 'pi pi-shopping-bag', 
            headingtext: 'Destination', 
            listingnumber: '214 listings'
        },
        {
            icon: 'pi pi-warehouse', 
            headingtext: 'Hotels',  
            listingnumber: '185 listings'
        },
        {
            icon: 'pi pi-clone', 
            headingtext: 'Healthcare', 
            listingnumber: '200 listings'
        },
        {
            icon: 'pi pi-check-square', 
            headingtext: 'Automotion',
            listingnumber: '120 listings'
        },
    ]
    return(
        <div className="lg:absolute left-0 lg:bottom-0  w-[85%]  h-[29vh] flex justify-center gap-[20px] mx-[90px] mt-[90px]" >
                    {
                        heroshadowbox.map(
                            function(box){
                                return(
                                    <div className=" w-[18%] h-full bg-[white] shadow-md text-center flex gap-5 flex-col justify-center rounded-md hover:bg-[#ff575d] hover:text-[white] hover:cursor-pointer mt-[13%] ">
                                        <i className= { `  pi ${box.icon} text-4xl font-thin text-black 600` } ></i> 
                                        <h1 className=" font-bold " >{box.heading}</h1> 
                                        <p className=" inline-block " >
                                            {box.listingnumber}
                                        </p> 
                                    </div>
                                )
                            }
                        )
                    }
        </div>
    )
    
}
export default Herobox