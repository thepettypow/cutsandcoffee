import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
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
      {/* Hero */}
      <section className="section pb-6 sm:pb-8 hero-full-bg" role="banner" aria-label="Premium barbering at Cuts & Coffee">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">TRUST YOUR BARBER</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+18258824884" className="btn btn-primary" aria-label="Call to book an appointment">
                Fastest Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals */}
       <section className="section pt-6 sm:pt-8">
         <div className="container">
          <h2 className="heading text-[#da724f] uppercase mb-6">OUR TEAM</h2>
           <p className="subheading mb-4">Choose your professional</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {professionals.map((pro) => (
              <div key={pro.name}>
                <h3 className="pro-name">{pro.name}</h3>
                 <div className="relative">
                   <Image
                     src={pro.image}
                     alt={`${pro.name} — Cuts & Coffee barber`}
                     width={480}
                     height={480}
                     className="w-full h-auto object-cover"
                   />
                 </div>
                 <div className="mt-4">
                   <a href={pro.bookingLink} className="btn btn-accent-light" aria-label={`Book with ${pro.name}`}>
                     Book your time
                   </a>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-10">
             <h2 className="heading uppercase text-[#da724f] mb-4">FASTEST APPOINTMENT</h2>
             <div className="flex justify-center">
               <a
                 href="https://getsquire.com/booking/book/cuts-and-coffee-calgary/barber/any/services"
                className="btn btn-accent-light"
                 aria-label="Book now with any available barber"
               >
                 Book now
               </a>
             </div>
             <p className="mt-4 text-white/80">All services include washing, waxing, styling, and neck shaving.</p>
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

      {/* Contact & Hours */}
      <ContactSection />


    </main>
  );
}
