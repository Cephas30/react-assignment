import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    <div
     className='bg-[#f40000] py-5 px-12 text-white'>
      <div className='justify-between flex '>
        {openMenu?
         (
            <IoCloseSharp
            onClick={()=>{setOpenMenu(false)}} 
         className='lg:hidden text-3xl' /> ) :
        (

          <IoMdMenu 
          onClick={()=>{setOpenMenu(true)}} 
          className='lg:hidden text-3xl' />
         
           )
        
        
      }
      


        <div>
        <img className='w-36 h-14' src= '/images/wsports.jpg'/>
        </div>
      <div className='hidden lg:block'>
        <input className='px-6 py-2 rounded-md text-sm w-72 text-red-500' 
        type="search" name="" placeholder='Search...' id="" />
        </div>
      <div>
        <img src='/images/phone-white.svg' className='h6 w-6 md:h-10 md:w-10'/>
        </div>

      </div>
      <div className='hidden lg:flex justify-center py-1 font-sans font-semibold gap-10'>
        
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/'> Home
        </Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/dashboard'>Shop
        </Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/contact'> Contact
        </Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/about'> About</Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/profile'> Profile</Link>

      </div>
      </div>
      <div 
      className={` ${openMenu ? 'flex':'hidden'} flex flex-col px-6 text-white font-semibold text-xl gap-2 w-full bg-[#f40000]  `}>
      <Link 
      className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/'> Home
      </Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/dashboard'>Shop
        </Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/contact'> Contact
        </Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/about'> About</Link>
        <Link 
        className=' hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md' to='/profile'> Profile</Link>

      </div>
        </>
  )
}

export default Navbar