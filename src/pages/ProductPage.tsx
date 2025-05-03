import  { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProductDetails } from '../components/products/ProductDetails';
import { products } from '../data/products';

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    navigate('/');
    return null;
  }

  // Create an array of related products (excluding current product)
  const relatedProducts = products.filter(p => p.id !== product.id);
  
  // Duplicate the array three times for smooth infinite scroll
  const extendedProducts = [...relatedProducts, ...relatedProducts, ...relatedProducts];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const scrollEnd = scrollWidth / 3;

    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductDetails product={product} isPage />
          
          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
            <div className="relative">
              <div 
                ref={scrollRef}
                className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
              >
                <div className="flex space-x-6">
                  {extendedProducts.map((relatedProduct, index) => (
                    <div 
                      key={`${relatedProduct.id}-${index}`}
                      className="flex-none w-72"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    >
                      <div className="group cursor-pointer">
                        <div className="aspect-square w-full overflow-hidden rounded-lg">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-lg font-medium text-gray-900">{relatedProduct.name}</h3>
                          <p className="mt-1 text-gray-700">${relatedProduct.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}