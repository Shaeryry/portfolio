import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-600">
          Have a question, project idea, or just want to say hi? Drop me a message below
          or connect with me on my socials 👇
        </p>
      </div>

      {/* Social Links - Big and Prominent */}
      <div className="flex justify-center gap-8 text-gray-600">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform transform hover:scale-110"
        >
          <Github size={40} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-transform transform hover:scale-110"
        >
          <Linkedin size={40} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <Twitter size={40} />
        </a>
        <a
          href="mailto:your@email.com"
          className="hover:text-red-500 transition-transform transform hover:scale-110"
        >
          <Mail size={40} />
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
