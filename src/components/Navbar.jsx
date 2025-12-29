import React from 'react';
import {assets} from '../assets/assets';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-full h-14 sm:h-16 bg-black flex items-center px-3 sm:px-6'>
        <div className='flex item-center gap-4'>
            <img className='h-10 w-15 invert' src={assets.music_logo} alt=''/>
            <div className='bg-[#1f1f1f] p-2 rounded-full hover:bg-[#383737] cursor-pointer'>
                <img className='w-9 h-9 ' src={assets.home_icon} alt=''/>
            </div>
        </div>
        <div className="flex-1 max-w-xl ml-6">
            <div className="flex items-center gap-3 bg-[#1f1f1f] px-4 py-2 rounded-full hover:bg-[#2a2a2a]
            hover:border hover:border-white transition">
                <img className='w-5 h-5 opacity-70' src={assets.search_icon} alt=''/>
                <input type='text' placeholder='What do you want to play?'
            className='bg-transparent outline-none text-white placeholder-gray-400 w-full text-sm'></input>
            <div className='hidden group-hover:flex items-center gap-3'>
                <div className='h-5 w-px bg-gray-500 opacity-40'></div>
                <div className='flex gap-1 text-xs text-gray-300'>
              <span className='px-1.5 py-0.5 border border-gray-500/40 rounded bg-black/30'>
                Ctrl
              </span>
              <span className='px-1.5 py-0.5 border border-gray-500/40 rounded bg-black/30'>
                K
              </span>
            </div>
            <img className='w-4 h-4 opacity-60' src={assets.browser_icon} alt='' />
            </div>
            </div>
        </div>
        <div className='flex items-center gap-6 ml-6 text-sm'>
            <div className='hidden md:flex gap-6 text-gray-400 font-medium'>
          <span className='hover:text-white cursor-pointer transition'>Premium</span>
          <span className='hover:text-white cursor-pointer transition'>Support</span>
          <span className='hover:text-white cursor-pointer transition'>Download</span>
        </div>

        <div className='hidden md:block h-6 w-px bg-gray-700'></div>

        <div className='flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition'>
          <img className='w-4 h-4 invert' src={assets.download_button} alt='' />
          <span>Install App</span>
        </div>

        <Link to="/register"
  className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:scale-105 transition"
>
  Register
</Link>

<Link to="/sign-in"
  className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:scale-105 transition"
>
  Sign In
</Link>

        </div>
     
     </nav>

  )
}
export default Navbar;
        