import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-semibold text-xl">
            <a href="/" className="flex items-center">
              BANANA threads
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#" 
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Shop
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Collection
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Cart Icon */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-gray-900 hover:text-gray-600 p-2 rounded-full"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-6 w-6" />
            </a>
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden ml-2 p-2 rounded-md text-gray-900 hover:text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Collection
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
}