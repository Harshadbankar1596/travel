import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-80 flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: 'url("https://travel-advice.net/media/cache/cover_2000/build/img/front/cover/bgcover.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl font-bold relative z-10 animate-fadeDown">Contact Us</h1>
      </section>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="btn-warning px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fa fa-map-marker-alt text-blue-600 text-xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p className="text-gray-600">123 Travel Street, Adventure City<br />Tourism State, 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fa fa-phone text-blue-600 text-xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fa fa-envelope text-blue-600 text-xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600">info@skywardjourneys.com<br />support@skywardjourneys.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <i className="fa fa-clock text-blue-600 text-xl mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;