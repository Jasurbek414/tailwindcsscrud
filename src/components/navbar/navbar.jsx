import React from 'react';

function Navbar({hidden}) {
  return (
    <nav className=" border-gray-200 bg-dark-purple">
      <div className=" max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <div className={`md:w-1/3 mx-auto ${hidden ? "max-sm:hidden" : ""}`}> 
          <input 
            type="text" 
            id="search-navbar" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  mx-auto" /* Added mx-auto class for center alignment */
            placeholder="Search..."
          />
        </div>
        <div className='flex'>
          <a href="/"><p className='bg-white aspect-square w-10 grid place-items-center rounded-full'>J</p></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
