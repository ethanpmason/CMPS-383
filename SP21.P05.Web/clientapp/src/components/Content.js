import React from 'react'
import { Link } from 'react-router-dom';
//import ImageOne from '../images/defaultimage1.jpg'
//import ImageTwo from '../images/defaultimage2.jpg'
//import ImageThree from '../images/defaultimage3.jpg'
//import ImageFour from '../images/defaultimage4.jpg'

const Content = () => {
    return (
        <div>
        <main className="min-h-screen flex flex-col justify-center sm:py-12 space-y-6">

            <div class="md:w-auto lg:max-w-full lg:flex justify-center sm:h-auto md:h-auto lg:h-auto mx-auto">
                <div class="md:w-auto rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <Link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" to="/events">Add Event</Link>
                    </div>
                </div>
            </div>
        
        
            <div class="lg:flex justify-center sm:h-auto md:h-auto lg:h-auto mx-auto max-w-screen-lg space-y-6">
                <div class="w-auto rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Homecoming</div>
                        <p class="text-gray-700 text-base">
                         Southeastern Louisiana University will celebrate Homecoming Oct. 17 – 24 with a myriad of activities and a televised replay of Southeastern’s home football playoff win against Sam Houston State. The regular football season is scheduled to begin Feb. 27, when the Lions hit the road in a matchup with Sam Houston State. For more information on the football schedule, visit lionsports.net.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">10/17/2021</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">07:00 PM</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Hammond</span>
                    </div>
                </div>
            </div>
        
        
            <div class="lg:flex justify-center sm:h-auto md:h-auto lg:h-auto mx-auto max-w-screen-lg">
                <div class="w-auto rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Career Expo</div>
                        <p class="text-gray-700 text-base">
                        LSU's Career Expos connects nearly 2,000 students and alumni of all majors with over 200 employers from across the country to form valuable career connections through a day of networking.  
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">10/01/2021</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">10:00 AM</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Baton Rouge</span>
                    </div>
                </div>
            </div>

            <div class="lg:flex justify-center sm:h-auto md:h-auto lg:h-auto mx-auto max-w-screen-lg">
                <div class="w-auto rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Festival of the Arts</div>
                        <p class="text-gray-700 text-base">
                        The annual Festival of the Arts is a two-week celebration of the innovative, creative work from our faculty, students, and community partners at UL Lafayette and in the local community.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">03/02/2022</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">07:30 AM</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lafayette</span>
                    </div>
                </div>
            </div>

       
        </main>

        <footer className='mb-auto sm:h-auto md:h-auto lg:h-auto'>
            <div className='flex justify-center items-center h-16 bg-black text-white font-mono'>
                <p>Copyright © 2021 Collegiate Events LLC All rights reserved.</p> 
            </div>
        </footer>
            
    </div>
    )
}

export default Content
