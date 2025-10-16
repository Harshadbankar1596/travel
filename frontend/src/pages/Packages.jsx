import React from 'react';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Maldives Escape",
      price: "Rs. 45,000",
      duration: "4 Nights",
      image: "https://2cw.co.uk/mv235/images/1+84e95d-centara-ras-fushi-resort-spa.jpg?preset=sig,high"
    },
    {
      id: 2,
      name: "Swiss Adventure",
      price: "Rs. 85,000",
      duration: "6 Nights",
      image: "https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg"
    },
    {
      id: 3,
      name: "Thailand Tour",
      price: "Rs. 60,000",
      duration: "5 Nights",
      image: "https://cdn.tourradar.com/s3/serp/original/4600_t8afNwa2.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="mt-20 py-20 text-center text-white relative"
        style={{
          backgroundImage: 'url("https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Travel Packages</h1>
          <p className="text-xl">Choose from curated travel plans designed for every explorer.</p>
        </div>
      </section>

      {/* Packages Grid */}
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card bg-white">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-2">{pkg.name}</h5>
                <p className="text-gray-600 mb-4">{pkg.duration} | {pkg.price}</p>
                <button className="btn-warning px-6 py-2 rounded-lg font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;