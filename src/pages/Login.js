import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate=useNavigate();
  const email=useRef();
  const password=useRef();
  async function handleLogging(event) {
        event.preventDefault();
        const authLogging={
          email: email.current.value,
          passowrd:password.current.value,
          token:Math.floor(Math.random() * 10)
          
      }
    
    const passwords=JSON.parse(sessionStorage.getItem("password"));
    const emails=JSON.parse(sessionStorage.getItem("email"));
    handleAuth(authLogging,emails,passwords);
    console.log(passwords)
     
       
        
  }
  const handleAuth=(authLogging,emails,passwords)=>
  {
    console.log(authLogging )
    console.log(emails )
    
    
    // const headerDetail={
    //   method:"POST",
    //   headers:{"content-Type":"application/json"},
    //   body:JSON.stringify(authLogging)
    // }
    // const response= await fetch(`${process.env.REACT_APP_HOST}/users`,headerDetail);
    // const data = await response.json()
    // console.log(data)
    if(authLogging.email === emails)
    {
      if(authLogging.passowrd === passwords )
      {
        authLogging.token && navigate("/products")

      }
      else
      {
        return toast.error("incorrect password");

      }
      

    }
    else
    {
      return toast.error("incorrect email ");
    }
     
  }
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
      </section>        
        <form onSubmit={handleLogging}>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="niraj@example.com" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </form>
        <button  className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
    </main>
  )
}
