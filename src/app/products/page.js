import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="font-sans min-h-screen">
      {/* Products Section */}
      <section className="py-16 bg-[#E1DDD4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#1F2937] text-center mb-12">Product Collection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  src="/plumb.JPG"
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
                  src="/raisins.jpg"
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
