import React from 'react';
import img from '../components/assets/Images/img.jpg';
import { Link } from "react-router-dom";
import Testimonial from './commonComponents/Testimonial';

const Home = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="p-4 md:col-span-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              <div>Gear Up Your Business</div> <div> Operations With Automated</div> <div>Tech Phoenix Solutions</div>
            </h1>
            <p className="text-gray-600 mb-4">
              Our Professionals Work Tirelessly To Help You Achieve Your Business Goals Without Burning A Hole In Your Pocket.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              <Link to="/demo">Let's Go</Link>
            </button>
          </div>
          <div className="md:col-span-1">
            <img className="w-full rounded" src={img} alt="Business Solutions" />
          </div>
        </div>
        <Testimonial/>
      </div>
    </div>
  );
}

export default Home;
