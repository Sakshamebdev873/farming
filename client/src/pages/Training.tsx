import React, { useState } from "react";
import {
  BookOpenIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  CheckCircle2Icon,
  PlusCircleIcon,
  XIcon,
} from "lucide-react";

export const Training = () => {
  const [trainings, setTrainings] = useState([
    {
      id: 1,
      title: "Advanced Organic Farming Techniques",
      date: "2025-11-12",
      time: "10:00 AM - 3:00 PM",
      location: "KVK Dehradun",
      trainer: "Dr. Meera Joshi",
      seats: 25,
      enrolled: false,
      description:
        "Learn soil health management, composting, and organic pest control methods to maximize crop yield sustainably.",
    },
    {
      id: 2,
      title: "Smart Irrigation & Water Efficiency",
      date: "2025-11-15",
      time: "9:30 AM - 2:00 PM",
      location: "KVK Haldwani",
      trainer: "Er. Ankit Sharma",
      seats: 30,
      enrolled: false,
      description:
        "Hands-on training on modern irrigation tools, drip setup, and weather-based irrigation planning.",
    },
    {
      id: 3,
      title: "Pest & Disease Management in Crops",
      date: "2025-11-20",
      time: "11:00 AM - 4:00 PM",
      location: "KVK Rishikesh",
      trainer: "Dr. Ramesh Pandey",
      seats: 20,
      enrolled: false,
      description:
        "Understand how to identify, prevent, and treat crop pests and diseases effectively using AI tools and organic practices.",
    },
  ]);

  const [selectedTraining, setSelectedTraining] = useState<any>(null);

  const handleEnroll = (id: number) => {
    setTrainings((prev) =>
      prev.map((t) => (t.id === id ? { ...t, enrolled: true } : t))
    );
    setSelectedTraining(trainings.find((t) => t.id === id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
        <BookOpenIcon className="h-8 w-8 text-green-700" />
        Training Programs 📘
      </h1>
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Join hands-on agricultural training sessions led by experts from your
        nearest KVKs. Learn, grow, and connect with other farmers.
      </p>

      {/* Training Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainings.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2">
                <BookOpenIcon className="h-5 w-5 text-green-700" />
                {t.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{t.description}</p>

              <div className="space-y-2 text-gray-700 text-sm">
                <p className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-green-600" />
                  <span>{t.date}</span>
                </p>
                <p className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-green-600" />
                  <span>{t.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-green-600" />
                  <span>{t.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <UsersIcon className="h-5 w-5 text-green-600" />
                  <span>Trainer: {t.trainer}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-5 w-5 text-green-600" />
                  <span>Seats: {t.seats}</span>
                </p>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-6 text-center">
              {t.enrolled ? (
                <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
                  <CheckCircle2Icon className="h-5 w-5" /> Enrolled
                </div>
              ) : (
                <button
                  onClick={() => handleEnroll(t.id)}
                  className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition shadow-md flex items-center gap-2 mx-auto"
                >
                  <PlusCircleIcon className="h-5 w-5" /> Enroll Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {selectedTraining && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setSelectedTraining(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              🎉 Successfully Enrolled!
            </h2>
            <p className="text-gray-700 text-center mb-6">
              You’ve successfully enrolled in{" "}
              <strong>{selectedTraining.title}</strong> at{" "}
              <strong>{selectedTraining.location}</strong>.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedTraining(null)}
                className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
