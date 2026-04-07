import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
import PopupModal from "./components/PopupModal";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const services = [
    {
      name: "Haircut",
      description: "Modern, stylish, and precise cuts.",
      price: "$45",
      duration: "45 min",
      image: "/haircut.jpeg",
    },
    {
      name: "Beard",
      description: "Sharp, clean, and well-groomed.",
      price: "$25",
      duration: "30 min",
      image: "/beard.png",
    },
    {
      name: "Hair & Beard",
      description: "Complete head-to-face grooming.",
      price: "$70",
      duration: "1 hour",
      image: "/hair-beard.png",
    },
    {
      name: "Skin Fade",
      description: "Sleek, smooth, and trendy fade.",
      price: "$50",
      duration: "45 min",
      image: "/skinfade.png",
    },
    {
      name: "Hot Shave",
      description: "Luxurious, smooth, and traditional shave.",
      price: "$45",
      duration: "30 min",
      image: "/hot-shave.png",
    },
    {
      name: "Kids Under 13",
      description: "Fun, fast, and kid-friendly cuts.",
      price: "$35",
      duration: "30 min",
      image: "/kids.png",
    },
    {
      name: "Buzzcut",
      description: "Quick, clean, and low-maintenance style.",
      price: "$25",
      duration: "30 min",
      image: "/buzzcut.jpg",
    },
  ];

  const professionals = [
    { name: "BEHRAD", image: "/behrad.png", bookingLink: "https://getsquire.com/booking/book/cuts-and-coffee-calgary/barber/behrad-3/services" },
    { name: "MAZIAR", image: "/maziar.png", bookingLink: "https://getsquire.com/booking/book/cuts-and-coffee-calgary/barber/maziar-1/services" },
  ];

  return (
    <main className="text-center">
      <PopupModal />
      {/* Hero */}
      <section className="section pb-6 sm:pb-8 hero-full-bg" role="banner" aria-label="Premium barbering at Cuts & Coffee">
        <div className="hero-top-fade" />
        <div className="container">
          <div className="hero-content">
            <div className="flex flex-col items-center gap-4">
              <h1 className="hero-title">TRUST YOUR BARBER</h1>
              <div className="flex justify-center gap-4">
                <a href="tel:+18258824884" className="btn btn-primary" aria-label="Call to book an appointment">
                  Call Now
                </a>
                <a href="https://getsquire.com/booking/book/cuts-and-coffee-calgary" className="btn btn-accent-light" aria-label="Book online with any available barber">
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="section pt-6 sm:pt-8">
         <div className="container">
          <h2 className="heading text-[#da724f] uppercase mb-8">Book your appointment</h2>
          
          <div className="lux-card">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              
              <img 
                src="/shop.jpg" 
                alt="Cuts & Coffee Barbershop" 
                className="w-full rounded-xl object-cover mb-8 shadow-xl md:hidden"
              />
              
              <img 
                src="/shop-pc.jpg" 
                alt="Cuts & Coffee Barbershop" 
                className="w-full rounded-xl object-cover mb-8 shadow-xl hidden md:block"
              />
              
              <a
                href="https://getsquire.com/booking/book/cuts-and-coffee-calgary"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-accent-light text-xl px-12 py-4"
                aria-label="Book now"
              >
                Book now
              </a>
              
              <p className="mt-8 text-white/80">All services include washing, waxing, styling, and neck shaving.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="heading text-[#da724f] uppercase mb-12">OUR SERVICES</h2>
          <div className="space-y-16">
            {services.map((s) => (
              <ServiceCard
                key={s.name}
                title={s.name}
                description={s.description}
                price={s.price}
                duration={s.duration}
                image={s.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="section">
        <div className="container">
          <div className="lux-card">
            <h2 className="text-2xl sm:text-3xl font-semibold">50% off on your birthday</h2>
            <p className="mt-2 text-white/80 max-w-2xl mx-auto">
              This one’s just for you, enjoy 50% off on your special day! Offer valid only on your actual birthday.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="section">
        <div className="container">
          <h2 className="heading text-[#da724f] uppercase mb-12">WORKSHOP</h2>
          <div className="lux-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/IMG_2409-1.png"
                    alt="Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4">Workshop Info</h3>
                <p className="text-white/80 mb-6">
                  Check out our latest workshop details and join us for an amazing experience. Contact us on Instagram for more information.
                </p>
                <a 
                  href="https://www.instagram.com/cutsandcoffee.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  DM on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <ContactSection />


    </main>
  );
}
