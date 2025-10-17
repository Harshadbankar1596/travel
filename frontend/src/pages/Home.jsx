import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [showHelp, setShowHelp] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle search logic here
  };

  const destinations = [
    {
      id: 1,
      name: "Dubai",
      description: "Somewhere between living and dreaming.",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/03/9c/66.jpg"
    },
    {
      id: 2,
      name: "Maldives",
      description: "Luxury overwater villas & turquoise seas.",
      image: "https://afar.brightspotcdn.com/dims4/default/ea28eda/2147483647/strip/false/crop/3000x1688+0+275/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg"
    },
    {
      id: 3,
      name: "Thailand",
      description: "Natural beauty and adventure.",
      image: "https://cdn.tourradar.com/s3/serp/original/4600_t8afNwa2.jpg"
    }
  ];

  const packages = [
    {
      id: 1,
      name: "Beach Escape",
      description: "Relax with 5-star luxury and serene ocean views.",
      image: "https://www.shutterstock.com/image-photo/tropical-beach-scene-two-lounge-600nw-2480649815.jpg"
    },
    {
      id: 2,
      name: "Mountain Adventure",
      description: "7 days of thrill in the breathtaking Alps.",
      image: "https://www.journeysinternational.com/wp-content/uploads/2019/05/nepal-mountain-hikers-625x390.jpg"
    },
    {
      id: 3,
      name: "City Explorer",
      description: "Discover global cities full of life and culture.",
      image: "https://www.ceh.ac.uk/sites/default/files/2021-09/billboard-vers-d7-paris-.1920x1080jpg.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: 'url("https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 z-0"></div>
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Dream Journey</h1>
          <p className="text-xl mb-8">Discover breathtaking destinations with Skyward Journeys</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Destination"
              className="bg-black form-control color-white"
              {...register("destination")}
            />
            <input
              type="date"
              className=" bg-black form-control max-w-xs"
              {...register("date")}
            />
            <select className="form-control bg-black max-w-xs" {...register("travelers")}>
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3+ Travelers</option>
            </select>
            <button type="submit" className="btn-warning font-semibold px-6 py-2 rounded">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Top Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="destination-card bg-white">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="p-6 text-center">
                  <h5 className="font-semibold text-lg">{destination.name}</h5>
                  <p className="text-gray-600 mt-2">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card bg-white">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h5 className="font-semibold text-lg">{pkg.name}</h5>
                  <p className="mt-2">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          className="btn-warning rounded-full w-12 h-12 shadow-lg flex items-center justify-center"
          onClick={() => setShowHelp(!showHelp)}
        >
          <i className="fa fa-comments"></i>
        </button>
        {showHelp && (
          <div className="bg-white rounded-xl p-4 mt-3 shadow-lg">
            <p className="flex items-center mb-2">
              <i className="fab fa-whatsapp text-green-500 mr-2"></i> WhatsApp Us
            </p>
            <p className="flex items-center mb-2">
              <i className="fa fa-envelope text-red-500 mr-2"></i> Email Support
            </p>
            <p className="flex items-center">
              <i className="fa fa-phone text-blue-500 mr-2"></i> Call Now
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;