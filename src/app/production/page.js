"use client";

import { useState } from "react";
import Image from "next/image";

export default function Production() {
  const [currentImage, setCurrentImage] = useState(0);

  const productionImages = [
    {
      src: "/2raw.jpg",
      title: "Raw Material Collection",
      description: "Careful selection of the finest raw figs directly from the orchards, ensuring top quality from the start."
    },
    {
      src: "/1sundry.jpg",
      title: "Sun Drying Process",
      description: "Our figs are carefully laid out under the sun for natural drying, preserving their authentic flavor and nutritional value."
    },
    {
      src: "/3Fumugation.jpg", 
      title: "Fumigation Room",
      description: "State-of-the-art fumigation facilities ensure our products meet international quality and safety standards."
    },
    {
      src: "/4sizewidth.jpg",
      title: "Size Sorting",
      description: "Advanced sorting technology ensures consistent size and quality across all our dried fruit products."
    },
    {
      src: "/5wash.jpg",
      title: "Washing & Cleaning",
      description: "Thorough cleaning process removes impurities while maintaining the natural texture and taste of our fruits."
    },
    {
      src: "/6restwidth.jpg",
      title: "Quality Control",
      description: "Rigorous quality control measures ensure only the finest products reach our customers."
    },
    {
      src: "/7selection.jpg",
      title: "Manual Selection",
      description: "Our skilled workers perform a final manual selection, picking only the best figs for our customers."
    },
    {
      src: "/8package.jpg",
      title: "Packaging",
      description: "Figs are carefully packaged in various sizes and types, ensuring freshness and protection during transit."
    },
    {
      src: "/9shipping.jpg",
      title: "Shipping & Logistics",
      description: "Efficient logistics and shipping ensure our premium dried figs reach customers worldwide in perfect condition."
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productionImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productionImages.length) % productionImages.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="font-sans min-h-screen bg-[#F8FAF9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Production Process</h1>
          <p className="text-xl text-[#CDE2D8] max-w-3xl mx-auto">
            From sun-dried figs to premium packaging, discover how we maintain the highest quality standards 
            in every step of our production process.
          </p>
        </div>
      </div>

      {/* Production Carousel Section */}
      <div className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Production Stages</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Each stage of our production process is carefully monitored to ensure the highest quality 
              and safety standards for our dried fruit products.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Main Image Display */}
            <div className="relative h-[500px] md:h-[600px]">
              <Image
                src={productionImages[currentImage].src}
                alt={productionImages[currentImage].title}
                fill
                className="object-cover"
                priority={currentImage === 0}
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{productionImages[currentImage].title}</h3>
                <p className="text-lg text-[#CDE2D8] max-w-2xl">{productionImages[currentImage].description}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="p-6 bg-gray-50">
              <div className="flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {productionImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${
                      currentImage === index 
                        ? 'ring-4 ring-[#2E6B4D] scale-110' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  {currentImage + 1} of {productionImages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Production Process Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Quality Assurance</h3>
              <p className="text-[#6B7280]">
                Every step of our production process is monitored to ensure the highest quality standards.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Natural Process</h3>
              <p className="text-[#6B7280]">
                We use traditional sun-drying methods combined with modern technology for optimal results.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Food Safety</h3>
              <p className="text-[#6B7280]">
                Our facilities meet international food safety standards with regular inspections and certifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
