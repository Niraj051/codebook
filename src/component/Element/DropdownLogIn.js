import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const DropdownLogIn = ({setDropDown,dropdown}) => {
    const navigate=useNavigate();
    const handleLogout=()=>
    {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
        setDropDown(!dropdown)
        navigate("/");
    }
  
    return (
        <div id="dropdownAvatar" className="select-select-none	absolute top-16 right-0 z-10 mr-5  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600none	absolute top-16  mx-2 my-1 z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div className="font-medium truncate">nirajdas500@gmail.com</div>
            </div>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link onClick={()=>setDropDown(!dropdown)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link onClick={()=>setDropDown(!dropdown)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div className="py-1">
                <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
            </div>
        </div>
      )
}
    
  

