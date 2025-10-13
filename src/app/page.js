import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero section */}
      <section className="relative isolate">
        <div className="relative h-[100vh] w-full overflow-hidden">
          {/* Desktop hero image */}
          <Image
            src="/hero.png"
            alt="Basket of premium dried figs on a rustic table"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 hidden md:block"
          />
          {/* Mobile responsive hero image */}
          <Image
            src="/hero_responsive.png"
            alt="Dried figs in a basket on a rustic table"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 md:hidden"
          />
          {/* Gradient + dark veil for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
          <div className="absolute inset-0">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 h-full flex items-center">
              <div className="max-w-2xl text-white drop-shadow">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Kaplanlar Figs & Dried Fruits</h1>
                <p className="mt-4 text-base sm:text-lg text-white/90">
                  From harvest to packaging, Kaplanlar delivers consistent quality you can trust.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link href="/products" className="inline-flex items-center rounded-md bg-[#2E6B4D] px-4 py-2 text-white hover:bg-[#23523A]">
                    Explore Products
                  </Link>
                  <Link href="/production" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20">
                    Our Production
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-[#F8FAF9]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#1F2937] text-center mb-12">Why Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Naturalness and Purity */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/leafbig.JPG"
                  alt="Fig leaf icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Naturalness and Purity</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Our figs are grown in Aydın's fertile lands using traditional methods without any additives. They are naturally dried in the sun.
              </p>
            </div>

            {/* Column 2: From Farm to Table */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/workerbig.JPG"
                  alt="Farmer with basket icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">From Farm to Your Table</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Our products are carefully packaged immediately after harvest and delivered directly to your door while preserving freshness. Direct taste.
              </p>
            </div>

            {/* Column 3: Health and Taste */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/heartbig.JPG"
                  alt="Heart with figs icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Health and Taste Combined</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Rich in fiber, vitamins, and minerals, figs contribute to healthy eating while being a uniquely sweet snack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Options Section */}
      <section className="py-16 bg-[#E1DDD4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">Packaging Options</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Choose from our variety of packaging solutions tailored for retail, wholesale, and private label needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/kutu1.jpeg", title: "Window Box 2500g" },
              { src: "/kutu2.jpeg", title: "Premium Green Box 2500g" },
              { src: "/kutu3.jpg", title: "Black Gold Box 10kg" },
              { src: "/kutu4.jpg", title: "Classic White Box 2000g" },
              { src: "/kutu5.jpg", title: "Premium Green Box 1000g" },
              { src: "/kutu6.jpg", title: "Classic Kraft Box 2500g" },
              { src: "/kutu7.jpg", title: "Retail Window Box" },
            ].map((box) => (
              <div key={box.src} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/2.5]">
                  <Image src={box.src} alt={box.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-[#1F2937] font-semibold">{box.title}</h3>
                  <Link href="/contact" className="text-[#2E6B4D] hover:underline text-sm">Request</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder main sections per design; to be implemented next */}
    {/*   <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-semibold text-[#1F2937]">Welcome</h2>
        <p className="mt-2 text-[#6B7280]">Homepage sections will follow the design specification.</p>
      </main> */}
    </div>
  );
}
