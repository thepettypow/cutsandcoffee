import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "About — Cuts & Coffee",
  description: "Our story and values: where grooming meets culture.",
};

export default function AboutPage() {
  return (
    <main className="text-center">
      {/* Hero */}
      <section className="section pb-6 sm:pb-8 about-hero-bg" role="banner" aria-label="About Cuts & Coffee">
        <div className="container min-h-[580px] sm:min-h-[720px] grid place-items-center">
          <div className="hero-content">
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <h2 className="heading text-[#da724f] uppercase mb-8">OUR STORY</h2>
          <div className="max-w-4xl mx-auto text-center text-white/90 space-y-6 sm:space-y-7 text-lg sm:text-xl leading-relaxed">
            <p>
              It all began in 2019, when Maziar and Behrad first met in Ukraine. Both were young, ambitious, and obsessed with the art of barbering. From fades to shaves, they honed their craft in shops across Eastern Europe, learning styles, techniques, and the culture that lives inside every chair. Every city, every client, and every cut sharpened their vision: to one day build something of their own.
            </p>
            <p>
              That vision carried them across continents. In 2024, they made the move to Canada, a new chapter, a fresh start, and the birthplace of an idea bigger than either of them: Cuts & Coffee. More than scissors and clippers, more than beans and brews, this was about creating a lifestyle. A place where grooming meets culture, and where every visit feels like a reset.
            </p>
            <p>
              Today, Cuts & Coffee stands for more than sharp cuts and bold flavor. It’s a hub for community, conversation, and connection. It’s where the smell of fresh coffee mixes with the sound of clippers, where strangers become friends, and where every detail is delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section">
        <div className="container">
          <h2 className="heading text-[#da724f] uppercase mb-6 sm:mb-8">MEMBERSHIP</h2>
          <div className="lux-card max-w-4xl mx-auto text-left">
            <p>At Cuts & Coffee, loyalty pays off, literally.</p>
            <p>Our membership isn’t just about saving money; it’s about becoming part of our community.</p>
            <p>As a member you can lock in your services in your way, whether that’s booking ahead right here online or dropping by in person at the shop. Either route, you get the same perks, the same priority.</p>
            <ul className="list-disc list-inside text-white/80 space-y-2 mt-4">
              <li>Priority scheduling</li>
              <li>Consistent grooming routine</li>
              <li>Personalized attention to your style</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading text-[#da724f] uppercase mb-6 sm:mb-8 text-5xl sm:text-6xl">BENEFITS</h2>
            <ul className="list-disc list-inside text-white text-lg sm:text-xl space-y-2 mb-6 sm:mb-8">
              <li>Effortless booking for your schedule</li>
              <li>Expert grooming by skilled barbers</li>
              <li>Personalized attention to your style</li>
              <li>Relaxed and stylish atmosphere</li>
            </ul>

            {/* Price rows with connecting line */}
            <div className="space-y-3 sm:space-y-4">
              <div className="price-row">
                <span className="price-label">2 BUZZCUTS</span>
                <span className="price-line" />
                <span className="price-old">$50</span>
                <span className="price-new">$40</span>
              </div>
              <div className="price-row">
                <span className="price-label">2 HAIRCUTS</span>
                <span className="price-line" />
                <span className="price-old">$90</span>
                <span className="price-new">$80</span>
              </div>
              <div className="price-row">
                <span className="price-label">2 SKINFADES</span>
                <span className="price-line" />
                <span className="price-old">$100</span>
                <span className="price-new">$90</span>
              </div>
              <div className="price-row">
                <span className="price-label">2 BUZZCUTS + BEARD</span>
                <span className="price-line" />
                <span className="price-old">$100</span>
                <span className="price-new">$85</span>
              </div>
              <div className="price-row">
                <span className="price-label">2 HAIRCUTS + BEARD</span>
                <span className="price-line" />
                <span className="price-old">$140</span>
                <span className="price-new">$125</span>
              </div>
              <div className="price-row">
                <span className="price-label">2 SKINFADES + BEARD</span>
                <span className="price-line" />
                <span className="price-old">$150</span>
                <span className="price-new">$135</span>
              </div>
            </div>

            <p className="text-white/80 mt-8 sm:mt-10 text-lg sm:text-xl">Taxes not included in listed prices</p>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <ContactSection />
    </main>
  );
}