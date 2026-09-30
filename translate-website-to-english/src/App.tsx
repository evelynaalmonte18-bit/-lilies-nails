import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    name: "Signature Manicure",
    detail: "Meticulous nail care, shaping, cuticle work, and a finish that feels entirely yours.",
  },
  {
    number: "02",
    name: "Gel Polish",
    detail: "Long-wearing colour with a clean, glossy finish and careful natural nail preparation.",
  },
  {
    number: "03",
    name: "Nail Art",
    detail: "Thoughtful details, from a quiet French tip to custom designs made by hand.",
  },
  {
    number: "04",
    name: "Pedicure",
    detail: "A restorative moment for your feet, finished with the colour or treatment of your choice.",
  },
];

function LilyMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M30 53.5C30 38.8 31.3 27.4 40.7 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M30 36.2C20.7 33.6 15 26.2 15.8 15.8c9.2.6 14.2 8 14.2 20.4Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M32.5 28.9C37.4 20.3 45.5 16.8 54 19.8c-3 8.3-10.5 11.7-21.5 9.1Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M31.1 18.8C25 13.2 24.1 6.9 29.9 2c6.3 5.1 6.8 11.4 1.2 16.8Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M29.9 53.6c-4.4 1.6-8.6 1.7-12.6.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="overflow-x-hidden bg-[#f7f4ef] text-[#292323]">
      <section id="home" className="relative min-h-[760px] overflow-hidden bg-[#272025] text-[#fffaf4] sm:min-h-[820px]">
        <div
          className="hero-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lilies-nails-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,18,22,.91)_0%,rgba(27,22,25,.76)_31%,rgba(32,24,25,.23)_65%,rgba(32,24,25,.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#272025]/55 to-transparent" />

        <header className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14 lg:py-8">
          <a href="#home" className="flex items-center gap-2.5 text-[#fffaf4]" aria-label="Lilies Nails home">
            <LilyMark className="h-7 w-7" />
            <span className="font-serif text-[1.35rem] leading-none tracking-[-0.04em]">Lilies Nails</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#fffaf4]/80 md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-white" href="#services">Services</a>
            <a className="transition-colors hover:text-white" href="#about">Our approach</a>
            <a className="transition-colors hover:text-white" href="#booking">Contact</a>
          </nav>

          <a href="#booking" className="hidden border border-[#fffaf4]/65 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition hover:bg-[#fffaf4] hover:text-[#292323] md:inline-flex">
            Book now
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center md:hidden"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] block h-px w-5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </header>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-[88px] z-10 bg-[#272025]/95 px-6 py-8 backdrop-blur-sm transition-all duration-300 md:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
        >
          <nav className="flex flex-col gap-5 text-lg" aria-label="Mobile navigation">
            <a onClick={closeMenu} href="#services">Services</a>
            <a onClick={closeMenu} href="#about">Our approach</a>
            <a onClick={closeMenu} href="#booking">Contact & booking</a>
          </nav>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] items-end px-6 pb-20 pt-16 sm:min-h-[700px] sm:px-10 sm:pb-24 lg:px-14 lg:pb-28">
          <div className="hero-copy max-w-2xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.23em] text-[#f7e9df]/72">Nail care, made personal</p>
            <h1 className="font-serif text-[clamp(4.2rem,10vw,9.5rem)] leading-[0.79] tracking-[-0.075em] text-[#fffaf4]">
              Lilies<br />Nails
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[#fffaf4]/80 sm:text-lg">
              Beautiful nails begin with a little time for yourself. Thoughtful care, refined detail, and a calm moment just for you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center justify-center bg-[#fffaf4] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#30272b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f2d8d1]">
                Book an appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center border border-[#fffaf4]/55 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#fffaf4] transition duration-300 hover:border-[#fffaf4] hover:bg-white/10">
                Explore services
              </a>
            </div>
          </div>
        </div>

        <a href="#services" className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#fffaf4]/70 transition hover:text-white sm:flex sm:right-10 lg:right-14" aria-label="Scroll to services">
          Scroll to discover
          <span className="scroll-line block h-px w-10 bg-current" />
        </a>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="section-label">At your service</p>
            <h2 className="mt-5 max-w-sm font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-[#292323] sm:text-6xl">
              The details make the difference.
            </h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-[#655c5b]">
              Every appointment is tailored to your hands, your pace, and the finish that makes you feel your best.
            </p>
          </div>

          <div className="border-t border-[#d9d0ca]">
            {services.map((service) => (
              <article key={service.number} className="service-row group grid gap-3 border-b border-[#d9d0ca] py-7 sm:grid-cols-[58px_1fr_auto] sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs text-[#9c7571]">{service.number}</span>
                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#322a2a] sm:text-[1.8rem]">{service.name}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#756a68]">{service.detail}</p>
                </div>
                <a href="#booking" className="self-start text-xs font-medium uppercase tracking-[0.14em] text-[#8e5e5a] transition-transform duration-300 group-hover:translate-x-1 sm:self-auto">Book <span aria-hidden="true">&#8594;</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#d9d0ca] bg-[#eee7e1]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-14 lg:py-40">
          <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-[#dbc2b9] sm:min-h-[340px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,250,244,.82),transparent_30%),linear-gradient(130deg,rgba(128,80,75,.15),transparent_55%)]" />
            <LilyMark className="lily-drift relative h-44 w-44 text-[#654a4b] sm:h-56 sm:w-56" />
          </div>
          <div className="lg:py-5">
            <p className="section-label text-[#8e5e5a]">The Lilies way</p>
            <blockquote className="mt-5 max-w-2xl font-serif text-[clamp(2.3rem,4.6vw,4.4rem)] leading-[0.98] tracking-[-0.058em] text-[#292323]">
              "Nail care should be a pause in the day, not another thing to rush through."
            </blockquote>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#655c5b] sm:text-lg">
              We take our time with the quiet things: healthy preparation, beautiful colour, and details that still feel like you. Come in, settle down, and leave with hands you cannot stop looking at.
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-[#30272b] text-[#fffaf4]">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-14 lg:py-40">
          <div>
            <p className="section-label text-[#e4b9b0]">Make time for you</p>
            <h2 className="mt-5 max-w-md font-serif text-5xl leading-[0.92] tracking-[-0.055em] sm:text-6xl">Let&apos;s make your next appointment.</h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-[#fffaf4]/70">
              Send us your preferred service and day. We will be in touch to confirm a time that suits you.
            </p>
            <div className="mt-12 flex items-center gap-4 text-[#fffaf4]/70">
              <LilyMark className="h-9 w-9 text-[#e4b9b0]" />
              <p className="font-serif text-xl tracking-[-0.025em]">A small ritual, beautifully done.</p>
            </div>
          </div>

          <div className="lg:pt-2">
            {formSubmitted ? (
              <div className="booking-reveal border-t border-[#fffaf4]/25 py-12" role="status">
                <p className="font-serif text-4xl tracking-[-0.045em] text-[#f3d7d0]">Thank you.</p>
                <p className="mt-4 max-w-md leading-relaxed text-[#fffaf4]/75">Your appointment request is on its way. We will get back to you shortly to confirm your visit.</p>
                <button type="button" onClick={() => setFormSubmitted(false)} className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#fffaf4] underline decoration-[#e4b9b0] underline-offset-8 transition hover:text-[#f3d7d0]">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="border-t border-[#fffaf4]/25">
                <div className="grid gap-x-7 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Your name</span>
                    <input required name="name" autoComplete="name" placeholder="Jane Smith" />
                  </label>
                  <label className="form-field">
                    <span>Email address</span>
                    <input required type="email" name="email" autoComplete="email" placeholder="jane@email.com" />
                  </label>
                </div>
                <div className="grid gap-x-7 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Service</span>
                    <select required name="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => <option key={service.number} value={service.name}>{service.name}</option>)}
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Preferred day</span>
                    <input required type="date" name="day" />
                  </label>
                </div>
                <label className="form-field">
                  <span>A note for us (optional)</span>
                  <textarea name="note" rows={2} placeholder="Tell us a little about what you have in mind." />
                </label>
                <button type="submit" className="mt-8 inline-flex bg-[#f3d7d0] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#30272b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fffaf4]">
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#30272b] px-6 pb-7 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 border-t border-[#fffaf4]/15 pt-7 text-xs text-[#fffaf4]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Lilies Nails</p>
          <a href="#home" className="transition-colors hover:text-[#fffaf4]">Back to top &#8593;</a>
        </div>
      </footer>
    </main>
  );
}