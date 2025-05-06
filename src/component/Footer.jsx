import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-[#00000089] font-semibold w-full py-6 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-center lg:text-left">
          © Copyright {new Date().getFullYear()} — Designed and Developed by Abdulazeez
        </p>

        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
          <p className="flex items-center gap-2 hover:text-[#ff575d]">
            <i className="pi pi-phone"></i> +1 (222) 777 8888
          </p>

          <a className="p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white transition">
            <i className="pi pi-facebook"></i>
          </a>
          <a className="p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white transition">
            <i className="pi pi-twitter"></i>
          </a>
          <a className="p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white transition">
            <i className="pi pi-linkedin"></i>
          </a>
          <a className="p-2 rounded-full bg-gray-200 hover:bg-[#ff575d] hover:text-white transition">
            <i className="pi pi-google"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
