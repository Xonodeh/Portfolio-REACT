import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setLoading(true);

    emailjs.send(
      "service_x1kckgc",
      "template_6v4jb69",
      formData,
      "UCmN1x2k066yTMKdR"
    )
    .then(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("error");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-semibold mb-8 text-gray-900 dark:text-white text-center">📬 Contactez-moi</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        noValidate
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Votre message"
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className={`rounded-md py-3 font-semibold transition text-white ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          Envoyer
        </button>

        {loading && (
          <div className="text-center mt-2">
            <p className="text-blue-600 dark:text-blue-400 font-medium">Envoi en cours...</p>
            <div className="mt-2 mx-auto w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 font-medium text-center mt-2">
            Merci, votre message a bien été envoyé !
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 font-medium text-center mt-2">
            Une erreur est survenue ou tous les champs ne sont pas remplis.
          </p>
        )}
      </form>
    </section>
  );
}
