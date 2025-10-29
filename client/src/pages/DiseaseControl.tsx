import React, { useState } from "react";
import {
  AlertTriangleIcon,
  LeafIcon,
  ShieldCheckIcon,
  CheckCircle2Icon,
  MicroscopeIcon,
  XIcon,
} from "lucide-react";

export const DiseaseControl = () => {
  const [diseases, setDiseases] = useState([
    {
      id: 1,
      crop: "Wheat",
      name: "Rust Disease",
      symptoms: "Orange or brown pustules on leaves, stems, and spikes.",
      cause: "Fungal infection caused by *Puccinia triticina*.",
      control:
        "Use resistant varieties, apply fungicide (Propiconazole 25 EC) at early stage, and avoid excessive nitrogen fertilizer.",
      resolved: false,
    },
    {
      id: 2,
      crop: "Rice",
      name: "Blast Disease",
      symptoms: "Diamond-shaped lesions on leaves with gray centers.",
      cause: "Fungus *Magnaporthe oryzae* under humid conditions.",
      control:
        "Spray tricyclazole or isoprothiolane, maintain proper water level, and avoid overcrowding.",
      resolved: false,
    },
    {
      id: 3,
      crop: "Tomato",
      name: "Early Blight",
      symptoms:
        "Dark concentric spots on lower leaves leading to yellowing and dropping.",
      cause: "Fungus *Alternaria solani*, spread by wind and rain.",
      control:
        "Remove infected leaves, rotate crops, and spray Mancozeb 75 WP every 10 days.",
      resolved: false,
    },
  ]);

  const [selectedDisease, setSelectedDisease] = useState<any>(null);

  const markResolved = (id: number) => {
    setDiseases((prev) =>
      prev.map((d) => (d.id === id ? { ...d, resolved: true } : d))
    );
    setSelectedDisease(diseases.find((d) => d.id === id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
        <MicroscopeIcon className="h-8 w-8 text-green-700" />
        Disease Control 🧬
      </h1>
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Identify common crop diseases, learn their symptoms, and apply proven
        control measures to protect your crops effectively.
      </p>

      {/* Disease Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {diseases.map((disease) => (
          <div
            key={disease.id}
            className="bg-white border border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2">
                <AlertTriangleIcon className="h-5 w-5 text-green-700" />
                {disease.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Crop:</strong> {disease.crop}
              </p>
              <p className="text-gray-700 mb-2 text-sm">
                <strong>Symptoms:</strong> {disease.symptoms}
              </p>
              <p className="text-gray-700 mb-2 text-sm">
                <strong>Cause:</strong> {disease.cause}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Control:</strong> {disease.control}
              </p>
            </div>

            <div className="mt-6 text-center">
              {disease.resolved ? (
                <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
                  <ShieldCheckIcon className="h-5 w-5" /> Resolved
                </div>
              ) : (
                <button
                  onClick={() => markResolved(disease.id)}
                  className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition shadow-md flex items-center gap-2 mx-auto"
                >
                  <LeafIcon className="h-5 w-5" /> Mark as Resolved
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {selectedDisease && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setSelectedDisease(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              🌱 Disease Resolved
            </h2>
            <p className="text-gray-700 text-center mb-6">
              You’ve successfully marked <strong>{selectedDisease.name}</strong>{" "}
              in <strong>{selectedDisease.crop}</strong> as resolved. Keep
              monitoring your crop health regularly!
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedDisease(null)}
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
