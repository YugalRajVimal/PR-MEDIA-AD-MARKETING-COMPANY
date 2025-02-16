import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Contact Us
        </h2>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions? Reach out to us and we'll be happy to assist.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xl">📍</span>
                <p className="text-gray-700">123 Tech Street, City, Country</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">📧</span>
                <p className="text-gray-700">contact@example.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">📞</span>
                <p className="text-gray-700">+123 456 7890</p>
              </div>
            </div>
          </div>

          {/* Right Section:  Google Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-72 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95373531531835!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfefcfd91%3A0xb1a4d0b1d65e7b2c!2sFederation+Square!5e0!3m2!1sen!2sus!4v1642230395621!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
          </div>
        </div>

       
       
      </div>
    </section>
  );
};

export default ContactUs;
