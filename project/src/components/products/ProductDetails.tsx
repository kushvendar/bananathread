import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 p-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
                <p className="text-xl font-medium text-gray-900 mt-1">${product.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      flex items-center justify-center w-9 h-9 rounded-full border
                      ${selectedColor === color 
                        ? 'ring-2 ring-offset-2 ring-black' 
                        : 'ring-1 ring-gray-200'
                      }
                    `}
                    style={{ 
                      backgroundColor: 
                        color === 'Black' ? '#000' : 
                        color === 'White' ? '#fff' : 
                        color === 'Navy' ? '#001f3f' : 
                        color === 'Gray' ? '#808080' : 
                        color === 'Blue' ? '#0000ff' : 
                        color === 'Green' ? '#008000' : 
                        color === 'Brown' ? '#a52a2a' : '#ccc'
                    }}
                    title={color}
                  >
                    {selectedColor === color && color === 'White' && (
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a 
                  href="#" 
                  className="text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  Size Guide
                </a>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      py-2 px-4 text-sm font-medium rounded-md
                      ${selectedSize === size
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-4 text-gray-900 font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button 
                variant="outline" 
                onClick={() => {
                  alert(`Added ${quantity} ${product.name} (${selectedSize}, ${selectedColor}) to cart`);
                  onClose();
                }}
                fullWidth
              >
                Add to Cart
              </Button>
              <Button 
                onClick={() => {
                  alert(`Proceeding to checkout for ${quantity} ${product.name} (${selectedSize}, ${selectedColor})`);
                  onClose();
                }}
                fullWidth
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}