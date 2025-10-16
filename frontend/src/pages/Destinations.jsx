import React from 'react';

const Destinations = () => {
  const popularDestinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "https://www.ceh.ac.uk/sites/default/files/2021-09/billboard-vers-d7-paris-.1920x1080jpg.jpg"
    },
    {
      id: 2,
      name: "Maldives",
      image: "https://afar.brightspotcdn.com/dims4/default/ea28eda/2147483647/strip/false/crop/3000x1688+0+275/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg"
    },
    {
      id: 3,
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1528916513539-cf411685f257?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMGdpcmx8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Skyward Journeys made our honeymoon magical in Maldives!",
      author: "Sarah & James"
    },
    {
      id: 2,
      text: "Booking was smooth, and the trip to Paris was unforgettable.",
      author: "Aditi"
    },
    {
      id: 3,
      text: "Great support team, they helped us throughout our New York adventure.",
      author: "Rajesh"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover animate-zoomBg"
        >
          <source
            src="/vid.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-600 bg-opacity-40 z-10"></div>
        <div className="relative z-20 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <i className="fa fa-plane-departure mr-3"></i>Explore Our Destinations
          </h1>
          <p className="text-xl">Discover breathtaking places around the world 🌍</p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="destination-card overflow-hidden rounded-2xl shadow-lg transition-all duration-400 hover:-translate-y-2 hover:scale-102 hover:shadow-xl"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h5 className="font-semibold">{destination.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Why Travel With Skyward Journeys?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <i className="fa fa-user-shield text-3xl text-blue-600 mb-4"></i>
              <h5 className="font-semibold text-lg mt-2">Trusted Agents</h5>
              <p className="text-gray-600">Certified and reliable travel partners.</p>
            </div>
            <div>
              <i className="fa fa-headset text-3xl text-blue-600 mb-4"></i>
              <h5 className="font-semibold text-lg mt-2">24/7 Support</h5>
              <p className="text-gray-600">Always here to help you during trips.</p>
            </div>
            <div>
              <i className="fa fa-dollar-sign text-3xl text-blue-600 mb-4"></i>
              <h5 className="font-semibold text-lg mt-2">Best Prices</h5>
              <p className="text-gray-600">Affordable packages with no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="section-title">Traveler Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
              <h6 className="font-semibold">- {testimonial.author}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="navbar-gradient text-white py-12 rounded-2xl mx-4 md:mx-auto max-w-6xl mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Travel Community</h2>
        <p className="text-lg mb-6">Subscribe for exclusive deals and updates ✈️</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border-none"
          />
          <button type="submit" className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Destinations;