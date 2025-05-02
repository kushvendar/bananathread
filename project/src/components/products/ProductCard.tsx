import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onClick={() => onClick(product)}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          {product.colors.slice(0, 3).map((color) => (
            <span 
              key={color}
              className="inline-block w-3 h-3 rounded-full border border-gray-300"
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
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}