import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/codebooklogo.png";
import { Search } from '../section/Search';
import {DropdownLoggedOut } from '../Element/DropdownLoggedOut';
import { DropdownLogIn } from '../Element/DropdownLogIn';
import {useCart} from "../../Context/index"

export const Header = () => {
  const [darkmode,setDarkMode]=useState(JSON.parse(localStorage.getItem("darkmode"))||false);
  const {cartList} = useCart()

  useEffect(()=>{
    localStorage.setItem(("darkmode"),JSON.stringify(darkmode));
    if(darkmode)
    {
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[darkmode])
  const [search,setSearch]=useState(false);
  const [dropdown,setDropDown]=useState(false);
  const token  =JSON.parse(sessionStorage.getItem("token"))
  
  return (
    <header>
            <nav className=" bg-gray-400 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
            <Link to="/" className="flex items-center ">
                    <img src={logo} className="h-20 rounded-full border-gray-800 mr-2" alt="codebook logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                </Link>
                <div className="flex items-center ">
                    <span onClick={()=>setDarkMode(!darkmode)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected'></span>
                    <span onClick={()=>setSearch(!search)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search'></span>
                    <Link to="/cart" className='text-gray-700 dark:text-white mr-5'>
                      <span className=' text-2xl bi bi-cart-fill  relative '>
                        <span className='absolute text-sm -top-1 left-2.5 text-white  rounded-full px-2 bg-rose-500'>{cartList.length}</span>
                      </span>
                    </Link>
                    <span onClick={()=>setDropDown(!dropdown)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle'></span>
                    {dropdown && (token ? <DropdownLogIn setDropDown={setDropDown} dropdown={dropdown} />:<DropdownLoggedOut setDropDown={setDropDown} dropdown={dropdown} />) }
                </div>
            </div>
        </nav>
        {search && ( <Search />)}
        
       
    </header>
    

    

  )
}
