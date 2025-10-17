// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const Home = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [showHelp, setShowHelp] = useState(false);
//   const [openModal, setOpenModal] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const onSubmit = async (data) => {
//   try {
//     const payload = {
//       user: {
//         name: data.name,
//         email: data.email,
//         phone: data.phone
//       },
//       bus: {
//         busNumber: data.busNumber,
//         busName: data.busName
//       },
//       journeyDate: data.journeyDate,
//       seats: Number(data.seats),
//       pickupAddress: data.pickupAddress,
//       dropAddress: data.dropAddress
//     };

//     const res = await axios.post('https://travel-backend-t24n.onrender.com/user', payload);
//     setSuccessMsg("Booking Successful!");
//     setErrorMsg("");
//     reset();
//     setOpenModal(false);
//   } catch (err) {
//     console.error(err);
//     setErrorMsg(err.response?.data?.message || "Booking failed");
//     setSuccessMsg("");
//   }
// };


//   const destinations = [
//     { id: 1, name: "Dubai", description: "Somewhere between living and dreaming.", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/03/9c/66.jpg" },
//     { id: 2, name: "Maldives", description: "Luxury overwater villas & turquoise seas.", image: "https://afar.brightspotcdn.com/dims4/default/ea28eda/2147483647/strip/false/crop/3000x1688+0+275/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg" },
//     { id: 3, name: "Thailand", description: "Natural beauty and adventure.", image: "https://cdn.tourradar.com/s3/serp/original/4600_t8afNwa2.jpg" }
//   ];

//   const packages = [
//     { id: 1, name: "Beach Escape", description: "Relax with 5-star luxury and serene ocean views.", image: "https://www.shutterstock.com/image-photo/tropical-beach-scene-two-lounge-600nw-2480649815.jpg" },
//     { id: 2, name: "Mountain Adventure", description: "7 days of thrill in the breathtaking Alps.", image: "https://www.journeysinternational.com/wp-content/uploads/2019/05/nepal-mountain-hikers-625x390.jpg" },
//     { id: 3, name: "City Explorer", description: "Discover global cities full of life and culture.", image: "https://www.ceh.ac.uk/sites/default/files/2021-09/billboard-vers-d7-paris-.1920x1080jpg.jpg" }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section 
//         className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
//         style={{ backgroundImage: 'url("https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg")' }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-45 z-0"></div>
//         <div className="relative z-10 animate-fadeIn">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Dream Journey</h1>
//           <p className="text-xl mb-8">Discover breathtaking destinations with Skyward Journeys</p>

//           {/* Book Ticket Button */}
//           <button
//             onClick={() => setOpenModal(true)}
//             className="bg-yellow-500 text-black px-6 py-3 font-bold rounded hover:bg-yellow-600 transition mb-4"
//           >
//             Book Ticket
//           </button>

          
//         </div>
//       </section>

//       {/* Booking Modal */}
//       {openModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-lg p-6">
//             <h2 className="text-2xl font-bold mb-4 text-center">Book Bus Ticket</h2>
            
//             {successMsg && <p className="text-green-600 mb-2 text-center">{successMsg}</p>}
//             {errorMsg && <p className="text-red-600 mb-2 text-center">{errorMsg}</p>}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//               <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" {...register("name")} required />
//               <input type="email" placeholder="Email" className="w-full p-2 border rounded" {...register("email")} required />
//               <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" {...register("phone")} required />

//               <input type="text" placeholder="Bus Number" className="w-full p-2 border rounded" {...register("busNumber")} required />
//               <input type="text" placeholder="Bus Name" className="w-full p-2 border rounded" {...register("busName")} required />

//               <input type="date" className="w-full p-2 border rounded" {...register("journeyDate")} required />
//               <input type="number" placeholder="Seats" min={1} className="w-full p-2 border rounded" {...register("seats")} required />
//               <input type="text" placeholder="Pickup Address" className="w-full p-2 border rounded" {...register("pickupAddress")} required />
//               <input type="text" placeholder="Drop Address" className="w-full p-2 border rounded" {...register("dropAddress")} required />

//               <div className="flex justify-between mt-4">
//                 <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Submit</button>
//                 <button type="button" onClick={() => setOpenModal(false)} className="bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-500 transition">Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Top Destinations */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title">Top Destinations</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {destinations.map(dest => (
//               <div key={dest.id} className="destination-card bg-white">
//                 <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover rounded-t-xl" />
//                 <div className="p-6 text-center">
//                   <h5 className="font-semibold text-lg">{dest.name}</h5>
//                   <p className="text-gray-600 mt-2">{dest.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Packages */}
//       <section className="py-16 text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title">Featured Packages</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {packages.map(pkg => (
//               <div key={pkg.id} className="package-card bg-white">
//                 <img src={pkg.image} alt={pkg.name} className="w-full h-64 object-cover rounded-t-xl" />
//                 <div className="p-6">
//                   <h5 className="font-semibold text-lg">{pkg.name}</h5>
//                   <p className="mt-2">{pkg.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Help Widget */}
//       <div className="fixed bottom-5 right-5 z-50">
//         <button className="btn-warning rounded-full w-12 h-12 shadow-lg flex items-center justify-center" onClick={() => setShowHelp(!showHelp)}>
//           <i className="fa fa-comments"></i>
//         </button>
//         {showHelp && (
//           <div className="bg-white rounded-xl p-4 mt-3 shadow-lg">
//             <p className="flex items-center mb-2"><i className="fab fa-whatsapp text-green-500 mr-2"></i> WhatsApp Us</p>
//             <p className="flex items-center mb-2"><i className="fa fa-envelope text-red-500 mr-2"></i> Email Support</p>
//             <p className="flex items-center"><i className="fa fa-phone text-blue-500 mr-2"></i> Call Now</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showHelp, setShowHelp] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Message to show in modal
  const [isSuccess, setIsSuccess] = useState(false); // Success or error modal

  const onSubmit = async (data) => {
    try {
      const payload = {
        user: {
          name: data.name,
          email: data.email,
          phone: data.phone
        },
        bus: {
          busNumber: data.busNumber,
          busName: data.busName
        },
        journeyDate: data.journeyDate,
        seats: Number(data.seats),
        pickupAddress: data.pickupAddress,
        dropAddress: data.dropAddress
      };

      await axios.post('https://travel-backend-t24n.onrender.com/user', payload);

      // Send WhatsApp message (backend endpoint should handle this)
      // Open success modal
      setModalMessage("Booking Successful!");
      setIsSuccess(true);
      reset();
      setOpenModal(false);

    } catch (err) {
      console.error(err);
      setModalMessage(err.response?.data?.message || "Booking failed");
      setIsSuccess(false);
      setOpenModal(false);
    }
  };

  const destinations = [
    { id: 1, name: "Dubai", description: "Somewhere between living and dreaming.", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/03/9c/66.jpg" },
    { id: 2, name: "Maldives", description: "Luxury overwater villas & turquoise seas.", image: "https://afar.brightspotcdn.com/dims4/default/ea28eda/2147483647/strip/false/crop/3000x1688+0+275/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg" },
    { id: 3, name: "Thailand", description: "Natural beauty and adventure.", image: "https://cdn.tourradar.com/s3/serp/original/4600_t8afNwa2.jpg" }
  ];

  const packages = [
    { id: 1, name: "Beach Escape", description: "Relax with 5-star luxury and serene ocean views.", image: "https://www.shutterstock.com/image-photo/tropical-beach-scene-two-lounge-600nw-2480649815.jpg" },
    { id: 2, name: "Mountain Adventure", description: "7 days of thrill in the breathtaking Alps.", image: "https://www.journeysinternational.com/wp-content/uploads/2019/05/nepal-mountain-hikers-625x390.jpg" },
    { id: 3, name: "City Explorer", description: "Discover global cities full of life and culture.", image: "https://www.ceh.ac.uk/sites/default/files/2021-09/billboard-vers-d7-paris-.1920x1080jpg.jpg" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{ backgroundImage: 'url("https://www.muchbetteradventures.com/magazine/content/images/2019/07/10083602/iStock-499263804.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 z-0"></div>
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Dream Journey</h1>
          <p className="text-xl mb-8">Discover breathtaking destinations with Skyward Journeys</p>

          {/* Book Ticket Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-500 text-black px-6 py-3 font-bold rounded hover:bg-yellow-600 transition mb-4"
          >
            Book Ticket
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Book Bus Ticket</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" {...register("name")} required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" {...register("email")} required />
              <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" {...register("phone")} required />
              <input type="text" placeholder="Bus Number" className="w-full p-2 border rounded" {...register("busNumber")} required />
              <input type="text" placeholder="Bus Name" className="w-full p-2 border rounded" {...register("busName")} required />
              <input type="date" className="w-full p-2 border rounded" {...register("journeyDate")} required />
              <input type="number" placeholder="Seats" min={1} className="w-full p-2 border rounded" {...register("seats")} required />
              <input type="text" placeholder="Pickup Address" className="w-full p-2 border rounded" {...register("pickupAddress")} required />
              <input type="text" placeholder="Drop Address" className="w-full p-2 border rounded" {...register("dropAddress")} required />
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Submit</button>
                <button type="button" onClick={() => setOpenModal(false)} className="bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-500 transition">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success / Error Modal */}
      {modalMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`bg-white rounded-xl w-full max-w-md p-6 text-center ${isSuccess ? "border-green-500 border-2" : "border-red-500 border-2"}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isSuccess ? "text-green-600" : "text-red-600"}`}>
              {isSuccess ? "Success" : "Error"}
            </h2>
            <p>{modalMessage}</p>
            <button onClick={() => setModalMessage("")} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Close</button>
          </div>
        </div>
      )}

      {/* Top Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Top Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map(dest => (
              <div key={dest.id} className="destination-card bg-white">
                <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover rounded-t-xl" />
                <div className="p-6 text-center">
                  <h5 className="font-semibold text-lg">{dest.name}</h5>
                  <p className="text-gray-600 mt-2">{dest.description}</p>
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
            {packages.map(pkg => (
              <div key={pkg.id} className="package-card bg-white">
                <img src={pkg.image} alt={pkg.name} className="w-full h-64 object-cover rounded-t-xl" />
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
        <button className="btn-warning rounded-full w-12 h-12 shadow-lg flex items-center justify-center" onClick={() => setShowHelp(!showHelp)}>
          <i className="fa fa-comments"></i>
        </button>
        {showHelp && (
          <div className="bg-white rounded-xl p-4 mt-3 shadow-lg">
            <p className="flex items-center mb-2"><i className="fab fa-whatsapp text-green-500 mr-2"></i> WhatsApp Us</p>
            <p className="flex items-center mb-2"><i className="fa fa-envelope text-red-500 mr-2"></i> Email Support</p>
            <p className="flex items-center"><i className="fa fa-phone text-blue-500 mr-2"></i> Call Now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
