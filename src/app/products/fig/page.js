import Image from "next/image";
import Link from "next/link";

export default function FigProduct() {
  return (
    <div className="font-sans min-h-screen bg-[#F8FAF9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Premium Dried Figs</h1>
          <p className="text-xl text-[#CDE2D8] max-w-3xl mx-auto">
            Our signature product - naturally sun-dried figs from Aydın region. 
            Rich in fiber, vitamins, and natural sweetness with traditional Turkish quality.
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/fig.JPG"
                alt="Premium Dried Figs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Product Details</h2>
                <div className="space-y-4 text-[#6B7280] text-lg">
                  <p>
                    Our premium dried figs are carefully selected from the finest orchards in Aydın, 
                    Turkey's most renowned fig-growing region. Each fig is naturally sun-dried to preserve 
                    its authentic flavor and nutritional value.
                  </p>
                  <p>
                    These figs are rich in dietary fiber, essential vitamins, and natural sugars, 
                    making them a perfect healthy snack or ingredient for various culinary applications.
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-[#2E6B4D]">Origin:</span>
                    <span className="ml-2 text-[#6B7280]">Aydın, Turkey</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2E6B4D]">Processing:</span>
                    <span className="ml-2 text-[#6B7280]">Natural Sun-Dried</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2E6B4D]">Color:</span>
                    <span className="ml-2 text-[#6B7280]">Light Brown to Golden</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2E6B4D]">Texture:</span>
                    <span className="ml-2 text-[#6B7280]">Soft & Chewy</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2E6B4D]">Shelf Life:</span>
                    <span className="ml-2 text-[#6B7280]">24 Months</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#2E6B4D]">Storage:</span>
                    <span className="ml-2 text-[#6B7280]">Cool & Dry Place</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packaging Options Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Packaging Options</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              We offer various packaging options to meet different market needs and customer preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Packaging Option 1 */}
            <div className="bg-[#F8FAF9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Bulk Packaging</h3>
              <p className="text-[#6B7280] mb-4">
                Large quantities for wholesale distribution. Available in 25kg and 50kg cartons.
              </p>
              <ul className="text-sm text-[#6B7280] space-y-1">
                <li>• 25kg cartons</li>
                <li>• 50kg cartons</li>
                <li>• Food-grade packaging</li>
                <li>• Moisture barrier protection</li>
              </ul>
            </div>

            {/* Packaging Option 2 */}
            <div className="bg-[#F8FAF9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Retail Packaging</h3>
              <p className="text-[#6B7280] mb-4">
                Consumer-ready packages in various sizes for retail markets and direct sales.
              </p>
              <ul className="text-sm text-[#6B7280] space-y-1">
                <li>• 250g packages</li>
                <li>• 500g packages</li>
                <li>• 1kg packages</li>
                <li>• Custom branding available</li>
              </ul>
            </div>

            {/* Packaging Option 3 */}
            <div className="bg-[#F8FAF9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Private Label</h3>
              <p className="text-[#6B7280] mb-4">
                Custom packaging solutions for your brand. We can adapt to your specific requirements.
              </p>
              <ul className="text-sm text-[#6B7280] space-y-1">
                <li>• Custom packaging design</li>
                <li>• Your brand logo</li>
                <li>• Flexible quantities</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nutritional Information */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Nutritional Information</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Dried figs are a nutritional powerhouse, rich in essential vitamins, minerals, and fiber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-6">Per 100g Serving</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#6B7280]">Energy</span>
                  <span className="font-semibold text-[#2E6B4D]">249 kcal</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#6B7280]">Protein</span>
                  <span className="font-semibold text-[#2E6B4D]">3.3g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#6B7280]">Carbohydrates</span>
                  <span className="font-semibold text-[#2E6B4D]">63.9g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#6B7280]">Dietary Fiber</span>
                  <span className="font-semibold text-[#2E6B4D]">9.8g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#6B7280]">Sugars</span>
                  <span className="font-semibold text-[#2E6B4D]">47.9g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#6B7280]">Fat</span>
                  <span className="font-semibold text-[#2E6B4D]">0.9g</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E6B4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6B7280]">High in dietary fiber for digestive health</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E6B4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6B7280]">Rich in potassium for heart health</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E6B4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6B7280]">Natural source of calcium and iron</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E6B4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6B7280]">Antioxidants for immune support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2E6B4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#6B7280]">Natural energy boost without additives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-[#2E6B4D] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Interested in Our Premium Dried Figs?</h2>
          <p className="text-[#CDE2D8] text-lg mb-8 max-w-2xl mx-auto">
            Contact us for detailed pricing, samples, and custom packaging options. 
            We're ready to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#2E6B4D] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
            >
              Request Quote
            </a>
            <a
              href="/KAPLANLAR E-CATALOGUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2E6B4D] transition-colors duration-300 font-medium"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
