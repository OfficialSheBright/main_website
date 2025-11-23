"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error('Failed to send message');
    }
  } catch {
    setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fef0fc] to-white pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold text-[#aa6182] mb-6"
            style={{ fontFamily: '"Tusker Grotesk 5600 Semibold", sans-serif' }}
          >
            GET IN TOUCH
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform education at your institution? Have questions about our programs? 
            We&#39;d love to hear from you and discuss how SheBright can help you build the future of learning.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-br from-[#ca5b8e] to-[#cc6594] rounded-3xl p-8 lg:p-12 text-white">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Let&#39;s Start a Conversation</h2>
                <p className="text-lg opacity-90">
                  Whether you&#39;re a college looking to modernize your campus, a student seeking 
                  opportunities, or a community interested in our programs, we&#39;re here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="opacity-90">admin@shebright.tech</p>
                    <p className="text-sm opacity-75 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="opacity-90">Kota, Rajasthan, India</p>
                    <p className="text-sm opacity-75 mt-1">Education Hub of Rajasthan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Partnership Inquiries</h3>
                    <p className="opacity-90">For Institutional Collaborations</p>
                    <p className="text-sm opacity-75 mt-1">B2B partnerships and campus modernization</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="border-t border-white/20 pt-6">
                <h3 className="font-semibold text-lg mb-4">Why Choose SheBright?</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm opacity-75">Students Trained</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-75">Institutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600">Fill out the form below and we&#39;ll get back to you as soon as possible.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="institutional-partnership">Institutional Partnership (B2B)</option>
                  <option value="student-programs">Student Programs (B2C)</option>
                  <option value="infrastructure-setup">Infrastructure & Lab Setup</option>
                  <option value="trainer-deployment">Trainer Deployment</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ca5b8e] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements, institution, or how we can help you..."
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-xl ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ca5b8e] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#b84c7a] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Education Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the SheBright community and be part of India&#39;s educational revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:admin@shebright.tech" 
              className="bg-[#ca5b8e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b84c7a] transition-colors"
            >
              Email Us Directly
            </a>
            <a 
              href="/services" 
              className="border-2 border-[#ca5b8e] text-[#ca5b8e] px-6 py-3 rounded-full font-semibold hover:bg-[#ca5b8e] hover:text-white transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}