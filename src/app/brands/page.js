import Image from "next/image";

export default function Brands() {
  const brands = [
    {
      name: "Kaplanlar",
      logo: "/LOGO_Kaplanlar-removebg-preview.png",
      description: "Our flagship brand, known worldwide for premium dried fig production. Kaplanlar represents over two decades of excellence in quality and innovation, serving customers in 15 countries with the finest dried fruits.",
      features: [
        "Premium dried fig production",
        "25+ years of experience",
        "Export to 15 countries",
        "Modern production facilities"
      ],
      established: "1999",
      focus: "Dried Figs & Dried Fruits"
    },
    {
      name: "SMS İNCİR",
      logo: "/LOGO_sms.png",
      description: "SMS İNCİR specializes in high-quality dried fig products with a focus on traditional Turkish methods combined with modern processing techniques. Our commitment to quality ensures every product meets international standards.",
      features: [
        "Traditional Turkish methods",
        "International quality standards",
        "Specialized fig processing",
        "Hygienic production environment"
      ],
      established: "2005",
      focus: "Specialized Fig Products"
    },
    {
      name: "KAP-TAT",
      logo: "/LOGO_kaptat.JPG",
      description: "KAP-TAT embodies our philosophy that 'Health is Wealth'. This brand focuses on naturally grown dried foods, emphasizing health benefits and nutritional value while maintaining the highest quality standards.",
      features: [
        "Health-focused products",
        "Naturally grown ingredients",
        "Nutritional value emphasis",
        "Quality assurance"
      ],
      established: "2010",
      focus: "Health & Wellness Products"
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-[#F8FAF9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Brands</h1>
          <p className="text-xl text-[#CDE2D8] max-w-3xl mx-auto">
            Discover our diverse portfolio of premium brands, each representing our commitment to quality, 
            innovation, and excellence in the dried fruit industry.
          </p>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-20">
            {brands.map((brand, index) => (
              <div key={brand.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Brand Logo */}
                <div className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <div className="w-full h-full bg-white flex items-center justify-center p-8">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      width={400}
                      height={300}
                      className="object-contain max-w-full max-h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Brand Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-semibold text-[#1F2937]">{brand.name}</h2>
                    <div className="flex items-center gap-4 text-[#6B7280]">
                      <span className="bg-[#2E6B4D] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Est. {brand.established}
                      </span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{brand.focus}</span>
                    </div>
                  </div>

                  <p className="text-[#6B7280] text-lg leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#1F2937]">Key Features</h3>
                    <ul className="space-y-2">
                      {brand.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-[#6B7280]">
                          <div className="w-2 h-2 bg-[#2E6B4D] rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button className="bg-[#2E6B4D] text-white px-6 py-3 rounded-lg hover:bg-[#23523A] transition-colors duration-300 font-medium">
                      Learn More About {brand.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Comparison Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Brand Overview</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              A comprehensive comparison of our three premium brands and their unique value propositions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#2E6B4D] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Brand</th>
                  <th className="px-6 py-4 text-left font-semibold">Established</th>
                  <th className="px-6 py-4 text-left font-semibold">Focus Area</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Strength</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {brands.map((brand, index) => (
                  <tr key={brand.name} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative">
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} Logo`}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>
                        <span className="font-medium text-[#1F2937]">{brand.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#6B7280]">{brand.established}</td>
                    <td className="px-6 py-4 text-[#6B7280]">{brand.focus}</td>
                    <td className="px-6 py-4 text-[#6B7280]">{brand.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-[#2E6B4D] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to Experience Our Brands?</h2>
          <p className="text-[#CDE2D8] text-lg mb-8 max-w-2xl mx-auto">
            Discover the quality and excellence that each of our brands represents. 
            Contact us to learn more about our products and how we can serve your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-[#2E6B4D] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
            >
              View Our Products
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2E6B4D] transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
