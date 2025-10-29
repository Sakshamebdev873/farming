import React, { useState } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  Building2Icon,
  PlusCircleIcon,
  XIcon,
  CheckCircle2Icon,
  MailIcon,
  LeafIcon,
} from "lucide-react";

 const KVK = () => {
  const [centers, setCenters] = useState([
    {
      id: 1,
      name: "KVK Dehradun",
      location: "Selakui, Uttarakhand",
      contact: "+91 94563 11223",
      email: "kvk.dehradun@icar.gov.in",
      specialization: "Organic Farming & Soil Health",
      nextTraining: "2025-11-05",
      booked: false,
    },
    {
      id: 2,
      name: "KVK Haldwani",
      location: "Pantnagar, Uttarakhand",
      contact: "+91 90211 88855",
      email: "kvk.haldwani@icar.gov.in",
      specialization: "Dairy Management & Irrigation",
      nextTraining: "2025-11-08",
      booked: false,
    },
    {
      id: 3,
      name: "KVK Rishikesh",
      location: "Shyampur, Uttarakhand",
      contact: "+91 98200 77644",
      email: "kvk.rishikesh@icar.gov.in",
      specialization: "Crop Protection & Fertilizer Use",
      nextTraining: "2025-11-10",
      booked: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedKVK, setSelectedKVK] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleBookVisit = (kvk: any) => {
    setSelectedKVK(kvk);
    setShowForm(true);
  };

  const handleSubmitBooking = () => {
    if (!bookingDetails.name || !bookingDetails.phone || !bookingDetails.date) {
      alert("Please fill all fields.");
      return;
    }

    setCenters((prev) =>
      prev.map((c) =>
        c.id === selectedKVK.id ? { ...c, booked: true } : c
      )
    );

    setShowForm(false);
    setBookingDetails({ name: "", phone: "", date: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
        <Building2Icon className="h-8 w-8 text-green-700" />
        KVK Centers 🌾
      </h1>

      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Discover nearby Krishi Vigyan Kendras (KVKs) for expert agricultural training,
        personalized guidance, and community programs. You can even book a visit below!
      </p>

      {/* KVK Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {centers.map((kvk) => (
          <div
            key={kvk.id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <LeafIcon className="h-7 w-7 text-green-700" />
              <h2 className="text-xl font-semibold text-green-800">
                {kvk.name}
              </h2>
            </div>

            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-green-600" />
                {kvk.location}
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-green-600" />
                {kvk.contact}
              </p>
              <p className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-green-600" />
                {kvk.email}
              </p>
              <p>
                <strong>Specialization:</strong> {kvk.specialization}
              </p>
              <p className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-green-600" />
                Next Training: {kvk.nextTraining}
              </p>
            </div>

            <div className="mt-5 text-center">
              {kvk.booked ? (
                <div className="flex justify-center items-center gap-2 text-green-700 font-semibold">
                  <CheckCircle2Icon className="h-5 w-5" />
                  Visit Booked
                </div>
              ) : (
                <button
                  onClick={() => handleBookVisit(kvk)}
                  className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition shadow-md flex items-center gap-2 mx-auto"
                >
                  <PlusCircleIcon className="h-5 w-5" /> Book Visit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Booking Visit */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              Book Visit – {selectedKVK?.name}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={bookingDetails.name}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={bookingDetails.phone}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="date"
                value={bookingDetails.date}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, date: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitBooking}
                className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default KVK;