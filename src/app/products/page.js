import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="font-sans min-h-screen bg-[#F8FAF9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-[#CDE2D8] max-w-3xl mx-auto">
            Discover our premium collection of dried fruits, carefully selected and processed 
            to maintain the highest quality standards and natural flavors.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-[#E1DDD4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">Product Collection</h2>
            <p className="text-[#6B7280] text-lg mb-6 max-w-2xl mx-auto">
              Explore our premium selection of dried fruits. For detailed product information, 
              specifications, and pricing, download our comprehensive catalog.
            </p>
            <a
              href="/KAPLANLAR E-CATALOGUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2E6B4D] text-white px-6 py-3 rounded-lg hover:bg-[#23523A] transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              E-Catalog
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Product Card 7: Dried Figs */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/fig.JPG"
                  alt="Premium Dried Figs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Premium Dried Figs</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Our signature product - naturally sun-dried figs from Aydın region. Rich in fiber, vitamins, and natural sweetness with traditional Turkish quality.
                </p>
                <Link 
                  href="/products/fig" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>
            
            {/* Product Card 1: Dried Apricots */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/apricot.JPG"
                  alt="Dried Apricots"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Premium Dried Apricots</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Sun-dried in Anatolia, maintaining the same traditional taste for generations. Rich in vitamins and natural sweetness.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>

            {/* Product Card 2: Medjool Dates */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/date.JPG"
                  alt="Medjool Dates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Organic Date Series</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Certified organic, additive-free and natural. A healthy choice packed with fiber and natural energy.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>

            {/* Product Card 3: Pistachios */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/pistachio.jpg"
                  alt="Premium Pistachios"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Gourmet Pistachios</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Delicious taste for breakfast and desserts. Premium quality nuts with no added sugar or preservatives.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>

            {/* Product Card 4: Dried Plums */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/plum.JPG"
                  alt="Dried Plums"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Traditional Dried Plums</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Naturally dried plums with rich flavor and health benefits. Perfect for snacking or cooking.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>

            {/* Product Card 5: Mixed Dates */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/date2.JPG"
                  alt="Mixed Dates Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Mixed Dates Collection</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  A premium blend of different date varieties. Rich in natural sugars and essential minerals.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>

            {/* Product Card 6: Raisins */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="aspect-square relative">
                <Image
                  src="/raisins.JPG"
                  alt="Premium Raisins"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Premium Raisins</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Golden and dark raisins blend. Natural sweetness and chewy texture perfect for baking and snacking.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block w-full text-center rounded-md border-2 border-[#2E6B4D] bg-white text-[#2E6B4D] px-4 py-2 hover:bg-[#2E6B4D] hover:text-white transition-colors duration-300"
                >
                  Examine Now
                </Link>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
}
