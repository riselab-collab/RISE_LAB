import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* SECTION 1: FACULTY CONTACT */}
        <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-8">
          <h2 className="text-3xl font-bold text-[#FF6600] mb-8 border-b-2 border-[#FF6600] inline-block pb-2 uppercase text-left">
            Dr. Avala Lavakumar
          </h2>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Address</h3>
                <p className="text-lg text-slate-800 leading-relaxed">
                  Department of Metallurgical and Materials Engineering<br />
                  Indian Institute of Technology Ropar
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex gap-4">
              <div className="w-6" /> {/* Spacer to align with icon above */}
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Office</h3>
                <p className="text-lg text-slate-800">
                  B-M05, Har Gobind Khorana Building (SAB Building)
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Email</h3>
                  <a href="mailto:lava@iitrpr.ac.in" className="text-lg text-rise-ocean font-medium hover:underline">
                    lava@iitrpr.ac.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Phone</h3>
                  <a href="tel:+911881232412" className="text-lg text-rise-ocean font-medium hover:underline">
                    +91-1881-23-2412
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: RISE LABORATORY */}
        <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-8">
          <h2 className="text-3xl font-bold text-[#FF6600] mb-8 border-b-2 border-[#FF6600] inline-block pb-2 uppercase text-left">
            RISE LABORATORY
          </h2>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Address</h3>
                <p className="text-lg text-slate-800 leading-relaxed">
                  B-203, 2nd Floor, Block B, Har Gobind Khorana Building (SAB Building)<br />
                  Department of Metallurgical and Materials Engineering<br />
                  Indian Institute of Technology, Ropar<br />
                  Bara Phool, Rupnagar, Punjab, INDIA
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Email</h3>
                  <a href="mailto:riselab@iitrpr.ac.in" className="text-lg text-rise-ocean font-medium hover:underline">
                    riselab@iitrpr.ac.in
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <ExternalLink className="text-[#FF6600] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Location</h3>
                  <a
                    href="https://www.google.com/maps/place/Process+Metallurgy+Research+Laboratory+(PMR+Lab)/@30.9672193,76.4745956,17z/data=!3m1!4b1!4m6!3m5!1s0x3905550010ecb523:0x53a63c88f6eab8e3!8m2!3d30.9672193!4d76.4745956!16s%2Fg%2F11w25jgg4v?entry=tts&g_ep=EgoyMDI0MDcxMC4wKgBIAVAD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-rise-ocean font-medium flex items-center gap-1 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LOCATION MAP */}
        <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-2 overflow-hidden">
          <div className="h-[450px] w-full bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.279637035303!2d76.471354!3d30.970185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390551fdc6bfb3d7:0x5d0b3a9a8a4d23f8!2sIIT%20Ropar!5e0!3m2!1sen!2sin!4v0000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RISE Lab Location"
            >
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
