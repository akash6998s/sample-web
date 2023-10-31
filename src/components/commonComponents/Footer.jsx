import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {

const date = new Date().getFullYear()

  return (
    <div className='footer'>
      <footer className='bg-white'>
        <div className='mx-auto w-full'>
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4  md:mx-2">
            <div className='flex flex-col justify-center items-center'>
              <h2 class="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Company</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className='my-3 text-sm'><Link to="/">Home</Link></li>
                <li className='my-3 text-sm'><Link to="/about">About</Link></li>
                <li className='my-3 text-sm'><Link to="/about">Blog</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">More</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 class="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Industries</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className='my-3 text-sm'><Link to="/">Home</Link></li>
                <li className='my-3 text-sm'><Link to="/about">About</Link></li>
                <li className='my-3 text-sm'><Link to="/about">Blog</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">More</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 class="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Solutions</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className='my-3 text-sm'><Link to="/">Home</Link></li>
                <li className='my-3 text-sm'><Link to="/about">About</Link></li>
                <li className='my-3 text-sm'><Link to="/about">Blog</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">More</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 class="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Products</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className='my-3 text-sm'><Link to="/">Home</Link></li>
                <li className='my-3 text-sm'><Link to="/about">About</Link></li>
                <li className='my-3 text-sm'><Link to="/about">Blog</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">More</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 class="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Resources</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className='my-3 text-sm'><Link to="/">Home</Link></li>
                <li className='my-3 text-sm'><Link to="/about">About</Link></li>
                <li className='my-3 text-sm'><Link to="/about">Blog</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">More</Link></li>
                <li className='my-3 text-sm'><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 class="mb-4 text-sm font-bold text-gray-700 uppercase dark:text-white">Contact Us</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li className='my-3 text-sm'><Link to="/">Home</Link></li>
                  <li className='my-3 text-sm'><Link to="/about">About</Link></li>
                  <li className='my-3 text-sm'><Link to="/about">Blog</Link></li>
                  <li className='my-3 text-sm'><Link to="/contactus">More</Link></li>
                  <li className='my-3 text-sm'><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-span-2">
              <div className="col-span-2">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56037.13260300602!2d77.31914493403995!3d28.62014632162587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1698513062159!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className='px-6 md:px-2 md:flex md:justify-between'>
          <div className='md:col-span-12 col-span-6'>© Copyright {date} Tech Phoenix Pvt. Ltd. All Rights Reserved</div>
          <div className='md:col-span-12 col-span-6'>aaaaaaaaaaaaaaaaaaaa</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer