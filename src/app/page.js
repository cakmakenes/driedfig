import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero section */}
      <section className="relative isolate pt-16">{/* reserve space for fixed header height */}
        <div className="relative h-[85vh] w-full overflow-hidden">
          <Image
            src="/hero.png"
            alt="Basket of premium dried figs on a rustic table"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105 blur-[1px]"
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

      {/* Placeholder main sections per design; to be implemented next */}
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-semibold text-[#1F2937]">Welcome</h2>
        <p className="mt-2 text-[#6B7280]">Homepage sections will follow the design specification.</p>
      </main>
    </div>
  );
}
