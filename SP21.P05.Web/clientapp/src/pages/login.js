//import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
    
    const Login = () => {
        //const [obj, setObj] = useState([]);
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const PostUser = (user) =>{
            user.preventDefault();
            axios({
                method: 'post',
                url: '/api/authentication/login',
                data :{
                    UserName: username,
                    Password: password,
                },
            }).then((res)=>{
                //setObj(res.data);
                res.preventDefault();
            }).catch((err)=>{
                console.log(err);
            })
        
    }
    
    return (
            <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <h1 class="font-bold text-center text-2xl mb-5">Collegiate Events LLC</h1>  
                        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            <form action="#" method="POST">
                                <div class="px-5 py-7">
                                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                                    <input onChange={(e)=>{setUsername(e.target.value)}} type="username" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" name="username" id="username" placeholder="Enter Username" />

                                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" name="password" id="password" placeholder="Enter Password" />
                                        <button onClick={PostUser} type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                            <span class="inline-block mr-2">Login</span>
                                        </button>
                                </div>
                            </form>
                        </div>
                        <div class="py-5">
                            <div class="grid grid-cols-2 gap-1">
                                <div class="text-center sm:text-left whitespace-nowrap">
                                    <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        <Link className="p-4" to="/">Back to home page</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )

}
export default Login
