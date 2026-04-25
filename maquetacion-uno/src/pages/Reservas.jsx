import NavBarHeader from "../components/NavBarHeader";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

export default function Reservas() {
  return (
    <div className="booking-page">
      <NavBarHeader />

      <main className="booking-main">
        <section className="booking-hero">
          <h1 className="booking-title">Reserva un Taller</h1>
          <p className="booking-description">
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>
        </section>

        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}