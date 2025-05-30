import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    emailjs.send(
        "service_x1kckgc",   // ID du service (ex: gmail)
        "template_6v4jb69",  // ID du template email
        formData,           // données à envoyer (doivent matcher les champs du template)
        "UCmN1x2k066yTMKdR"    // clé publique EmailJS
      )
    .then(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-semibold mb-8 text-gray-900 text-center">📬 Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg" noValidate>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Votre message"
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md py-3 font-semibold hover:bg-blue-700 transition"
        >
          Envoyer
        </button>

        {status === "success" && (
          <p className="text-green-600 font-medium text-center mt-2">
            Merci, votre message a bien été envoyé !
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium text-center mt-2">
            Une erreur est survenue ou tous les champs ne sont pas remplis.
          </p>
        )}
      </form>
    </section>
  );
}
