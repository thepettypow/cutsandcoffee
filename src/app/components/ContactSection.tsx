import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="section pb-6 sm:pb-8">
      <div className="container">
        <h2 id="contact" className="heading text-[#da724f] uppercase mb-8 scroll-mt-24">GET IN TOUCH</h2>
        <div className="lux-card">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="info-title">Hours</h3>
              <ul className="info-text mt-3">
                <li>Mon–Sat: 9:00 am – 7:00 pm</li>
                <li>Sun: 10:00 am – 5:00 pm</li>
              </ul>
            </div>
            <div>
              <h3 className="info-title">Address</h3>
              <p className="info-text mt-3">
                <a
                  className="hover:text-white"
                  href="https://maps.google.com/?q=1136+8+Ave+SW,+Calgary,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1136 8 Ave SW, Calgary, Canada
                </a>
              </p>
            </div>
            <div>
              <h3 className="info-title">Contact</h3>
              <p className="mt-3">
                <a className="text-white hover:text-white/90" href="tel:+18258824884">+1 (825) 882-4884</a>
              </p>
            </div>
          </div>
          <div className="mt-8 map-container">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?hl=en&q=1136+8+Ave+SW,+Calgary,+Canada&ie=UTF8&t=&z=15&iwloc=B&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of 1136 8 Ave SW, Calgary, Canada"
              allowFullScreen
            />
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <a href="tel:+18258824884" className="btn btn-primary" aria-label="Call to book an appointment">
              Call Now
            </a>
            <Link href="/book" className="btn btn-outline" aria-label="Book an appointment">
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}