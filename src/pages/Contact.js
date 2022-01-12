import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contáctanos</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="Escriba su nombre completo..." type="text" />
          <label htmlFor="email">Correo</label>
          <input name="email" placeholder="Escriba su correo..." type="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Escriba su mensaje..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
