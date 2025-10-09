import { useRef, useState } from "react";
import emailjs from "emailjs-com";

// Helper Components
const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold mb-2">{children}</h2>
);

const SectionSubtitle = ({ children }) => (
  <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{children}</p>
);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_dzy06ob",   // e.g. "service_abcd123"
        "template_kto8hjg",  // e.g. "template_efgh456"
        form.current,
        "aIbBWdeCcv1GXUa5M"    // e.g. "AbCdEfGh12345"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <SectionTitle>
            Contact <GradientText>Me</GradientText>
          </SectionTitle>
          <SectionSubtitle>
            Have a project in mind or want to connect? I'd love to hear from you.
          </SectionSubtitle>
        </div>

        <div className="max-w-xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {status && (
            <p className="text-center mt-6 text-gray-300 font-medium">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
