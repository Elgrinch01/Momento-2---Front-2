import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "Principiante",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const request = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const storedRequests = JSON.parse(localStorage.getItem("bookingRequests") || "[]");
    storedRequests.push(request);
    localStorage.setItem("bookingRequests", JSON.stringify(storedRequests));

    console.log("Reserva enviada:", request);

    setFormData({
      fullName: "",
      email: "",
      experience: "Principiante",
      message: "",
    });
  }

  return (
    <section className="booking-panel" aria-label="Formulario de reservas">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="booking-field" htmlFor="fullName">
          <span>Nombre completo</span>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Ej. Ana Silva"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label className="booking-field" htmlFor="email">
          <span>Correo electrónico</span>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label className="booking-field" htmlFor="experience">
          <span>Nivel de experiencia</span>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="Principiante">Principiante (Nunca he tenido un Bonsái)</option>
            <option value="Intermedio">Intermedio (Tengo algunos árboles)</option>
            <option value="Avanzado">Avanzado (Busco perfeccionar técnicas)</option>
          </select>
        </label>

        <label className="booking-field" htmlFor="message">
          <span>Mensaje (Opcional)</span>
          <textarea
            id="message"
            name="message"
            placeholder="¿Qué te gustaría aprender?"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button className="booking-submit" type="submit">
          Enviar Solicitud
        </button>
      </form>
    </section>
  );
}