import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <section className="relative min-h-[80vh] p-6 md:min-h-[90vh] flex items-center justify-center px-4">
      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            Get in Touch
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out to me via the form below or through my social
            media channels.
          </p>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Contact Information
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-300 text-sm sm:text-base md:text-lg">
              <li>
                Email:{" "}
                <a
                  href="mailto:newmearound@outlook.com"
                  className="text-blue-400 hover:text-blue-600"
                >
                  newmearound@outlook.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/rodrigo-arellano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  linkedin.com/in/rodrigo-arellano
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/rock_front_end/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  instagram.com/rock_front_end
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Send Me a Message
          </h3>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
