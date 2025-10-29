import React, { useState } from "react";
import {
  DropletsIcon,
  CloudRainIcon,
  CalendarIcon,
  LeafIcon,
  PlusCircleIcon,
  XIcon,
  GlassWaterIcon,
  ClockIcon,
  CheckCircle2Icon,
} from "lucide-react";

export const Irrigation = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      crop: "Wheat",
      method: "Drip Irrigation",
      date: "2025-11-02",
      time: "6:00 AM",
      duration: "2 hours",
      soilMoisture: "45%",
      waterUsed: "1200 L",
      status: "Scheduled",
    },
    {
      id: 2,
      crop: "Rice",
      method: "Sprinkler System",
      date: "2025-11-04",
      time: "7:00 AM",
      duration: "1.5 hours",
      soilMoisture: "60%",
      waterUsed: "900 L",
      status: "Completed",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    crop: "",
    method: "",
    date: "",
    time: "",
    duration: "",
    soilMoisture: "",
    waterUsed: "",
  });

  const handleAddSchedule = () => {
    if (
      !newSchedule.crop ||
      !newSchedule.method ||
      !newSchedule.date ||
      !newSchedule.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newEntry = {
      ...newSchedule,
      id: Date.now(),
      status: "Scheduled",
    };

    setSchedules([...schedules, newEntry]);
    setShowForm(false);
    setNewSchedule({
      crop: "",
      method: "",
      date: "",
      time: "",
      duration: "",
      soilMoisture: "",
      waterUsed: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
        <DropletsIcon className="h-8 w-8 text-green-700" />
        Irrigation Management 💧
      </h1>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-green-100 rounded-xl shadow p-5">
          <GlassWaterIcon className="h-6 w-6 text-green-700" />
          <h3 className="text-lg font-semibold mt-2 text-green-800">
            Total Water Used
          </h3>
          <p className="text-gray-700 text-sm mt-1">2,100 L</p>
        </div>
        <div className="bg-green-100 rounded-xl shadow p-5">
          <ClockIcon className="h-6 w-6 text-green-700" />
          <h3 className="text-lg font-semibold mt-2 text-green-800">
            Next Schedule
          </h3>
          <p className="text-gray-700 text-sm mt-1">Nov 2, 6:00 AM</p>
        </div>
        <div className="bg-green-100 rounded-xl shadow p-5">
          <LeafIcon className="h-6 w-6 text-green-700" />
          <h3 className="text-lg font-semibold mt-2 text-green-800">
            Avg. Moisture
          </h3>
          <p className="text-gray-700 text-sm mt-1">52%</p>
        </div>
        <div className="bg-green-100 rounded-xl shadow p-5">
          <CloudRainIcon className="h-6 w-6 text-green-700" />
          <h3 className="text-lg font-semibold mt-2 text-green-800">
            Rain Forecast
          </h3>
          <p className="text-gray-700 text-sm mt-1">Light Rain Expected ☔</p>
        </div>
      </div>

      {/* Irrigation Schedule Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {schedules.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                <DropletsIcon className="h-6 w-6 text-green-700" />
                {item.crop}
              </h2>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  item.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            <div className="space-y-1 text-gray-700">
              <p>
                <strong>Method:</strong> {item.method}
              </p>
              <p>
                <strong>Date:</strong> {item.date}
              </p>
              <p>
                <strong>Time:</strong> {item.time}
              </p>
              <p>
                <strong>Duration:</strong> {item.duration}
              </p>
              <p>
                <strong>Soil Moisture:</strong> {item.soilMoisture}
              </p>
              <p>
                <strong>Water Used:</strong> {item.waterUsed}
              </p>
            </div>

            {item.status === "Completed" && (
              <div className="mt-4 text-green-700 text-sm flex items-center gap-2 font-medium">
                <CheckCircle2Icon className="h-5 w-5" />
                Irrigation Completed Successfully
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Schedule Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow font-semibold transition flex items-center justify-center mx-auto gap-2"
        >
          <PlusCircleIcon className="h-5 w-5" /> Add New Schedule
        </button>
      </div>

      {/* Modal for Adding New Schedule */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Add New Irrigation Schedule
            </h2>

            <div className="space-y-4">
              {Object.keys(newSchedule).map((key) => (
                <input
                  key={key}
                  type="text"
                  placeholder={
                    key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")
                  }
                  value={newSchedule[key as keyof typeof newSchedule]}
                  onChange={(e) =>
                    setNewSchedule({ ...newSchedule, [key]: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSchedule}
                className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-medium"
              >
                Save Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
