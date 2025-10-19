export const metadata = {
  title: "Book Now",
  description: "Book your appointment at Cuts & Coffee — sharp, fast, stylish.",
};

export default function BookPage() {
  return (
    <main className="text-center">
      <section className="section">
        <div className="container">
          <h1 className="heading">Book Now</h1>
          <p className="subheading mt-3">Look sharp. Feel confident.</p>
          <p className="max-w-2xl mx-auto mt-4 text-white/80">
            Call us to secure the fastest appointment. All services include washing, waxing, styling, and neck shaving.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="tel:+18258824884" className="btn btn-primary" aria-label="Call to book an appointment">
              Call +1 (825) 882-4884
            </a>
            <a href="/" className="btn btn-outline" aria-label="Back to home">
              Back Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}