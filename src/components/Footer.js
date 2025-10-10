import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white mt-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Maps */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.3481221575703!2d28.359625276335834!3d37.92229700364785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8b933359e21f5%3A0xfd55909d2ca339e1!2sKaplanlar%20%C4%B0ncir!5e0!3m2!1str!2str!4v1760110145875!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaplanlar İncir Location"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2 text-white/80 max-w-prose">
              Reach out for product inquiries, private label, or logistics. We typically respond within one business day.
            </p>

            <div className="mt-6 space-y-3 text-white/90">
              <div>
                <span className="block text-white/60">Phone</span>
                <a href="tel:+902563456789" className="hover:text-[#CDE2D8]">+90 256 345 67 89</a>
              </div>
              <div>
                <span className="block text-white/60">Fax</span>
                <a href="tel:+902563456788" className="hover:text-[#CDE2D8]">+90 256 345 67 88</a>
              </div>
              <div>
                <span className="block text-white/60">Email</span>
                <a href="mailto:info@kaplanlar.com" className="hover:text-[#CDE2D8]">info@kaplanlar.com</a>
              </div>
              <div>
                <span className="block text-white/60">Address</span>
                <p>
                  Kaplanlar İncir, Ortaklar / Germencik,
                  <br />
                  Aydın, Türkiye
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kaplanlar Dried Fruits. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#CDE2D8]">Privacy</a>
            <a href="/cookies" className="hover:text-[#CDE2D8]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
