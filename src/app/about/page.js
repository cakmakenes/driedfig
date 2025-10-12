import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-[#F8FAF9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-[#CDE2D8] max-w-3xl mx-auto">
            Discover the story behind Kaplanlar Fig Company, a world-renowned dried fig producer 
            with over two decades of excellence in quality and innovation.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Company Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/company.jpg"
                alt="Kaplanlar Fig Company Production Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Company Story Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold text-[#1F2937] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#6B7280] text-lg leading-relaxed">
                <p>
                  <strong className="text-[#2E6B4D]">KAPLANLAR FIG Company</strong>, which is known worldwide for its dried fig production, 
                  was founded in Nazilli in 1999. Within its first decade of establishment, the company introduced itself to the domestic 
                  market through its trade activities, and from 2009 onwards, it transformed into an export-oriented company.
                </p>
                <p>
                  KAPLANLAR FIG, exporting to <strong className="text-[#2E6B4D]">15 countries</strong>, operates with a highly modern 
                  production facility and experienced team members. KAPLANLAR serves with a total area of 
                  <strong className="text-[#2E6B4D]"> 13,500m²</strong>, including <strong className="text-[#2E6B4D]">8,500m²</strong> of enclosed space.
                </p>
                <p>
                  Besides dried figs, the company also produces and exports various other dried food products, 
                  maintaining the same high standards of quality and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Target Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Our Mission & Target</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-6">
              We are committed to delivering excellence in every aspect of our business, 
              from production to customer satisfaction.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Target */}
            <div className="bg-[#F8FAF9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Our Target</h3>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                To ensure that our products maintain a consistent level of quality, enabling customers from 
                many countries around the world to access them.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-[#F8FAF9] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">Our Mission</h3>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                We prepare naturally grown dried foods in hygienic environments, ensuring quality, health, 
                and meticulous care, and serve them to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats Section */}
      <div className="py-16 bg-[#2E6B4D] text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">Company Statistics</h2>
            <p className="text-[#CDE2D8] text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CDE2D8] mb-2">25+</div>
              <div className="text-lg text-white/80">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CDE2D8] mb-2">15</div>
              <div className="text-lg text-white/80">Export Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CDE2D8] mb-2">13,500m²</div>
              <div className="text-lg text-white/80">Total Area</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CDE2D8] mb-2">8,500m²</div>
              <div className="text-lg text-white/80">Enclosed Space</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1F2937] mb-4">Our Values</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              The principles that guide our business and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Quality Excellence</h3>
              <p className="text-[#6B7280]">
                We maintain the highest standards in every product we produce, ensuring consistent quality across all our offerings.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Natural Process</h3>
              <p className="text-[#6B7280]">
                We use traditional methods combined with modern technology to preserve the natural goodness of our products.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E6B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Global Reach</h3>
              <p className="text-[#6B7280]">
                We serve customers in 15 countries worldwide, bringing Turkish quality to international markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
