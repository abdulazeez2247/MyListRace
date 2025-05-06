import React from "react";

function Herobox() {
  let heroshadowbox = [
    {
      icon: "pi pi-building-columns",
      headingtext: "Restaurant",
      listingnumber: "150 listings",
    },
    {
      icon: "pi pi-shopping-bag",
      headingtext: "Destination",
      listingnumber: "214 listings",
    },
    {
      icon: "pi pi-warehouse",
      headingtext: "Hotels",
      listingnumber: "185 listings",
    },
    {
      icon: "pi pi-clone",
      headingtext: "Healthcare",
      listingnumber: "200 listings",
    },
    {
      icon: "pi pi-check-square",
      headingtext: "Automotion",
      listingnumber: "120 listings",
    },
  ];

  return (
    <div className="w-full px-4 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {heroshadowbox.map((box, index) => (
          <div
            key={index}
            className="bg-white shadow-md text-center flex flex-col justify-center items-center gap-3 p-6 rounded-md group hover:bg-[#ff575d] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <i
              className={`pi ${box.icon} text-4xl text-black group-hover:text-white`}
            ></i>
            <p className="font-semibold">{box.headingtext}</p>
            <p className="text-[#0000006f] group-hover:text-white">
              {box.listingnumber}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Herobox;
