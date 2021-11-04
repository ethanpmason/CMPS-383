import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { Link, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Events = () => {
    
    const [get, setGet] = useState([]);
    //const [obj, setObj] = useState([]);
    const [name, setName] = useState("");

    const [time, setTime] = useState("");

    const [location, setlocation] = useState("");
    // location = occurs

    const PostEvent = (event) =>{
        event.preventDefault();
        axios({
            method: 'post',
            url : '/api/events',
            data :{
            name: name,
            time: time,
            location: location,
            //capacity: capacity
        },
    }).then((res)=>{
            //setObj(res.data);
            res.preventDefault();
        }).catch((err)=>{
            console.log(err);
        })

    
}

useEffect(()=>{
    axios.get('/api/events')
    .then((res)=>{
        setGet(res.data);

    })
},[]);

console.log(get);

    return (
        <div class="flex items-center justify-center">
            <div class= "items-center">
            <div class="items-center">
            <h1 class="font-bold text-center text-2xl mb-5">Add Event</h1>
            <h3 class="text-center">Please fill in details about the event.</h3>
            <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-gray-100 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6 sm:col-span-4">
                        <label for="event_name" class="block text-sm font-medium text-gray-700">Event Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="event_name" id="event_name" autocomplete="event" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                        <label for="event_name" class="block text-sm font-medium text-gray-700">Event Time & Date</label>
                        <input onChange={(e)=>{setTime(e.target.value)}} type="datetime-local" name="event_name" id="event_name" autocomplete="event" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                        <input onChange={(e)=>{setlocation(e.target.value)}} type="location" name="location" id="location" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                    </div>

                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-100 text-right sm:px-6">
                    <button onClick={PostEvent} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button>
                </div>
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
            </form>
            </div>
        </div>
        </div>

        
    )
}

export default Events;