import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 h-[85vh] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          {/* Hero Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Quality <br />
              <span className="text-gray-800">Essential Tees</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md">
              Discover our collection of minimalist, high-quality t-shirts designed for everyday comfort and timeless style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Shop Collection</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-xl bg-white p-4 shadow-lg transform transition-transform hover:scale-[1.01] duration-300">
              <img 
                src="https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="T-shirt collection" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  Summer Collection 2025
                </h3>
                <p className="text-gray-700">New arrivals now available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}