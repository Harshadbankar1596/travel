import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Neha Kashid",
      role: "CEO",
      image: "https://source.unsplash.com/300x300/?portrait,woman,business"
    },
    {
      id: 2,
      name: "Riya Kandekar",
      role: "Travel Expert",
      image: "https://source.unsplash.com/300x300/?portrait,woman,professional"
    },
    {
      id: 3,
      name: "Premal Vanarse",
      role: "Customer Support",
      image: "https://source.unsplash.com/300x300/?portrait,man,business"
    }
  ];

  const partners = [
    {
      id: 1,
      name: "Expedia",
      logo: "https://play-lh.googleusercontent.com/C1LCYinwKsGIHkAx_NlXRr4SuwCq7CkdtqcOVtHWpoPbGM3NbG1IJf2rmu-pN9sjnfg"
    },
    {
      id: 2,
      name: "Airbnb",
      logo: "https://yt3.googleusercontent.com/1236ePdfsipfwgiNT9CQ9dDU9xYkpbh9PkTzrb1nrccbzAVoYvmxxmvgPvv94GPw35-1ZtvUOw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 3,
      name: "TripAdvisor",
      logo: "https://play-lh.googleusercontent.com/bfy2rE4Iu_15VyVAujaCtwQkThjUWWZSljcpnX2pdd4tcTO8SoGwrBhcTMwqeYjRlw"
    },
    {
      id: 4,
      name: "Booking.com",
      logo: "https://play-lh.googleusercontent.com/eJuvWSnbPwEWAQCYwl8i9nPJXRzTv94JSYGGrKIu0qeuG_5wgYtb982-2F_jOGtIytY"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-96 flex items-center justify-center text-center text-white relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://go2kashmir.com/kashmir/img/sonamarg-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl font-bold relative z-10 animate-fadeDown">About Us</h1>
      </section>

      {/* Our Story */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="border-l-4 border-blue-600 pl-8 relative max-w-2xl mx-auto">
          <div className="mb-8 relative">
            <div className="absolute -left-11 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fa fa-calendar text-sm"></i>
            </div>
            <h5 className="text-xl font-semibold mb-2">2010</h5>
            <p>Founded with a dream to connect travelers worldwide.</p>
          </div>
          <div className="mb-8 relative">
            <div className="absolute -left-11 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fa fa-calendar text-sm"></i>
            </div>
            <h5 className="text-xl font-semibold mb-2">2015</h5>
            <p>Expanded to 50+ destinations across 20 countries.</p>
          </div>
          <div className="mb-8 relative">
            <div className="absolute -left-11 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fa fa-calendar text-sm"></i>
            </div>
            <h5 className="text-xl font-semibold mb-2">2020</h5>
            <p>Reached 100,000+ happy travelers globally.</p>
          </div>
          <div className="mb-8 relative">
            <div className="absolute -left-11 top-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fa fa-calendar text-sm"></i>
            </div>
            <h5 className="text-xl font-semibold mb-2">2023</h5>
            <p>Introduced AI-powered trip planning for personalized journeys.</p>
          </div>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="bg-gray-50 py-16 rounded-2xl mx-4 md:mx-8 my-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="fa fa-bullseye text-4xl text-blue-600 mb-4"></i>
              <h5 className="text-xl font-semibold mb-3">Our Mission</h5>
              <p className="text-gray-600">To make traveling accessible, memorable, and hassle-free for everyone.</p>
            </div>
            <div>
              <i className="fa fa-eye text-4xl text-blue-600 mb-4"></i>
              <h5 className="text-xl font-semibold mb-3">Our Vision</h5>
              <p className="text-gray-600">To be the world's most trusted travel partner by 2030.</p>
            </div>
            <div>
              <i className="fa fa-heart text-4xl text-blue-600 mb-4"></i>
              <h5 className="text-xl font-semibold mb-3">Our Values</h5>
              <p className="text-gray-600">Integrity, passion for travel, customer-first service, and innovation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
              />
              <h6 className="text-lg font-semibold mt-3">{member.name}</h6>
              <p className="text-gray-600 mb-3">{member.role}</p>
              <div className="social flex justify-center space-x-4">
                <a href="#" className="text-blue-600 text-xl hover:text-purple-600 transition">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-blue-600 text-xl hover:text-purple-600 transition">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;