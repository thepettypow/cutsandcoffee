export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Cuts & Coffee — hours, address, phone.",
};

export default function ContactPage() {
  return (
    <main className="text-center">
      <section className="section">
        <div className="container">
          <h1 className="heading">Contact Us</h1>
          <p className="subheading mt-3">We’re here to help.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-medium">Hours</h3>
              <ul className="mt-2 text-white/80">
                <li>9 am to 7 pm — Monday to Saturday</li>
                <li>10 am to 5 pm — Sunday</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium">Address</h3>
              <p className="mt-2 text-white/80">1136 8 Ave SW, Calgary, Canada</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium">Contact</h3>
              <p className="mt-2"><a className="text-white hover:text-white/90" href="tel:+18258824884">+1 (825) 882-4884</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}