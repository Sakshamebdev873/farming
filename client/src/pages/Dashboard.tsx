import React, { useState } from "react";
import {
  SproutIcon,
  MapIcon,
  CalendarIcon,
  BarChart3Icon,
  CloudSunIcon,
  CheckCircle2Icon,
  PlusCircleIcon,
  XIcon,
} from "lucide-react";


const CropPlans = () => {
  const [cropPlans, setCropPlans] = useState([
    {
      id: 1,
      crop: "Wheat",
      area: "5 Acres",
      soilType: "Loamy",
      status: "Ongoing",
      nextAction: "Irrigation on Nov 2",
      profitEstimate: "₹65,000",
      progress: 70,
      weather: "Moderate 🌤️",
    },
    {
      id: 2,
      crop: "Rice",
      area: "3 Acres",
      soilType: "Clay",
      status: "Upcoming",
      nextAction: "Sowing in 3 Days",
      profitEstimate: "₹48,000",
      progress: 10,
      weather: "Humid 🌦️",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPlan, setNewPlan] = useState({
    crop: "",
    area: "",
    soilType: "",
    nextAction: "",
    profitEstimate: "",
  });

  const handleAddPlan = () => {
    if (
      !newPlan.crop ||
      !newPlan.area ||
      !newPlan.soilType ||
      !newPlan.nextAction ||
      !newPlan.profitEstimate
    ) {
      alert("Please fill all fields before adding a crop plan.");
      return;
    }

    const newCrop = {
      ...newPlan,
      id: Date.now(),
      status: "Upcoming",
      progress: 0,
      weather: "TBD 🌤️",
    };

    setCropPlans([...cropPlans, newCrop]);
    setNewPlan({
      crop: "",
      area: "",
      soilType: "",
      nextAction: "",
      profitEstimate: "",
    });
    setShowForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 relative">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex justify-center items-center gap-2">
        <SproutIcon className="h-8 w-8 text-green-700" />
        My Crop Plans Dashboard 🌾
      </h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-green-100 rounded-xl shadow p-5">
          <MapIcon className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold mt-2">Total Crops</h3>
          <p className="text-gray-700 text-sm mt-1">{cropPlans.length}</p>
        </div>

        <div className="bg-blue-100 rounded-xl shadow p-5">
          <CloudSunIcon className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold mt-2">Weather Status</h3>
          <p className="text-gray-700 text-sm mt-1">Mostly Clear ☀️</p>
        </div>

        <div className="bg-amber-100 rounded-xl shadow p-5">
          <BarChart3Icon className="h-6 w-6 text-amber-600" />
          <h3 className="text-lg font-semibold mt-2">Total Profit</h3>
          <p className="text-gray-700 text-sm mt-1">₹1,13,000</p>
        </div>

        <div className="bg-pink-100 rounded-xl shadow p-5">
          <CalendarIcon className="h-6 w-6 text-pink-600" />
          <h3 className="text-lg font-semibold mt-2">Next Task</h3>
          <p className="text-gray-700 text-sm mt-1">Irrigation in 2 days</p>
        </div>
      </div>

      {/* Crop Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cropPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                <SproutIcon className="h-6 w-6 text-green-700" />
                {plan.crop}
              </h2>
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  plan.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : plan.status === "Ongoing"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {plan.status}
              </span>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Area:</strong> {plan.area}
              </p>
              <p>
                <strong>Soil Type:</strong> {plan.soilType}
              </p>
              <p>
                <strong>Next Action:</strong> {plan.nextAction}
              </p>
              <p>
                <strong>Profit Estimate:</strong> {plan.profitEstimate}
              </p>
              <p>
                <strong>Weather:</strong> {plan.weather}
              </p>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progress</span>
                <span>{plan.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div
                  className={`h-2 rounded-full ${
                    plan.progress === 100
                      ? "bg-green-600"
                      : plan.progress > 50
                      ? "bg-amber-500"
                      : "bg-blue-400"
                  }`}
                  style={{ width: `${plan.progress}%` }}
                ></div>
              </div>
            </div>

            {plan.progress === 100 && (
              <div className="mt-4 text-green-700 text-sm flex items-center gap-2 font-medium">
                <CheckCircle2Icon className="h-5 w-5" />
                Harvest Completed Successfully
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Crop Plan Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow font-semibold transition flex items-center justify-center mx-auto gap-2"
        >
          <PlusCircleIcon className="h-5 w-5" /> Add New Crop Plan
        </button>
      </div>

      {/* Add Plan Modal */}
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
              Add New Crop Plan
            </h2>

            <div className="space-y-4">
              {Object.keys(newPlan).map((key) => (
                <input
                  key={key}
                  type="text"
                  placeholder={
                    key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")
                  }
                  value={newPlan[key as keyof typeof newPlan]}
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, [key]: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
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
                onClick={handleAddPlan}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
              >
                Save Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CropPlans;