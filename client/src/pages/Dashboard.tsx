import React, { useState } from "react";
import { SproutIcon, PlusCircleIcon, XIcon, ImageIcon } from "lucide-react";

const mockDiseaseData = [
  {
    disease: "Rust Fungus",
    symptoms: "Yellow-orange pustules on leaves and stems",
    cure: "Spray Propiconazole (Tilt 25 EC) 1ml/litre water",
    prevention: "Avoid over-irrigation and use rust-resistant varieties",
  },
  {
    disease: "Bacterial Leaf Blight",
    symptoms: "Yellowing and drying of leaves from tip downward",
    cure: "Spray Streptocycline 0.1g/litre + Copper oxychloride 2g/litre",
    prevention: "Use clean seeds and avoid water stagnation",
  },
  {
    disease: "Powdery Mildew",
    symptoms: "White powdery coating on leaves and stems",
    cure: "Spray sulfur-based fungicides (2g/litre)",
    prevention: "Avoid dense planting and improve air circulation",
  },
  {
    disease: "Early Blight",
    symptoms: "Brown concentric spots on lower leaves",
    cure: "Spray Chlorothalonil or Mancozeb 2g/litre water",
    prevention: "Use certified seeds and avoid overhead irrigation",
  },
  {
    disease: "Downy Mildew",
    symptoms: "Pale yellow patches on upper leaf surfaces",
    cure: "Spray Metalaxyl or Mancozeb 2g/litre water",
    prevention: "Avoid waterlogging and provide proper spacing",
  },
];

const getRandomDisease = () => {
  return mockDiseaseData[Math.floor(Math.random() * mockDiseaseData.length)];
};

const CropPlans = () => {
  const [cropPlans, setCropPlans] = useState([
    {
      id: 1,
      crop: "Wheat",
      area: "5 Acres",
      soilType: "Loamy",
      image: "https://plus.unsplash.com/premium_photo-1661963447711-27f892ffe292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      diseaseInfo: getRandomDisease(),
    },
    {
      id: 2,
      crop: "Rice",
      area: "3 Acres",
      soilType: "Clay",
      image: "https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      diseaseInfo: getRandomDisease(),
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [newPlan, setNewPlan] = useState({
    crop: "",
    area: "",
    soilType: "",
    image: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewPlan({ ...newPlan, image: imageUrl });
    }
  };

  const handleAddPlan = () => {
    if (!newPlan.crop || !newPlan.area || !newPlan.soilType || !newPlan.image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const diseaseInfo = getRandomDisease();
      const newCrop = {
        ...newPlan,
        id: Date.now(),
        diseaseInfo,
      };

      setCropPlans([...cropPlans, newCrop]);
      setNewPlan({ crop: "", area: "", soilType: "", image: "" });
      setIsAnalyzing(false);
      setShowForm(false);
      alert(
        `Mock Analysis Complete 🌾\nDetected: ${diseaseInfo.disease}\nCure: ${diseaseInfo.cure}`
      );
    }, 2500); // Mock 2.5 sec ML analysis
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 relative">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex justify-center items-center gap-2">
        <SproutIcon className="h-8 w-8 text-green-700" />
        Smart Crop Plans 🌾
      </h1>

      {/* Crop Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cropPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
              <SproutIcon className="h-6 w-6 text-green-700" />
              {plan.crop}
            </h2>
            {plan.image && (
              <img
                src={plan.image}
                alt={plan.crop}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-sm text-gray-700">
              <strong>Area:</strong> {plan.area}
            </p>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Soil Type:</strong> {plan.soilType}
            </p>

            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-semibold text-green-700">
                🦠 Disease Detected: {plan.diseaseInfo.disease}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Symptoms:</strong> {plan.diseaseInfo.symptoms}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cure:</strong> {plan.diseaseInfo.cure}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Prevention:</strong> {plan.diseaseInfo.prevention}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Crop Plan Button */}
      <div className="text-center">
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
              <input
                type="text"
                placeholder="Crop Name"
                value={newPlan.crop}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, crop: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Area (e.g. 2 Acres)"
                value={newPlan.area}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, area: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Soil Type (e.g. Loamy)"
                value={newPlan.soilType}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, soilType: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />

              <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-700">
                  <ImageIcon className="h-5 w-5 text-green-600" />
                  Upload Crop Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>

              {newPlan.image && (
                <img
                  src={newPlan.image}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
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
                disabled={isAnalyzing}
              >
                {isAnalyzing ? "Analyzing..." : "Save Plan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropPlans;
