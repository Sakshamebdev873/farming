import React, { useState } from "react";
import { SproutIcon, FlaskRoundIcon, CheckCircle2Icon, XIcon } from "lucide-react";

export const Fertilizer = () => {
  const [fertilizers, setFertilizers] = useState([
    {
      id: 1,
      crop: "Wheat",
      type: "NPK (12:32:16)",
      schedule: "Apply 50kg/acre before sowing and 25kg/acre after 30 days.",
      benefit: "Improves early growth and enhances yield quality.",
      applied: false,
    },
    {
      id: 2,
      crop: "Rice",
      type: "Urea (46% N)",
      schedule: "Apply 45kg/acre during tillering stage.",
      benefit: "Promotes healthy tillers and green leaves.",
      applied: false,
    },
    {
      id: 3,
      crop: "Maize",
      type: "DAP (18:46:0)",
      schedule: "Apply 40kg/acre at planting for root development.",
      benefit: "Supports root strength and early growth.",
      applied: false,
    },
  ]);

  const [selected, setSelected] = useState<any>(null);

  const markApplied = (id: number) => {
    setFertilizers((prev) =>
      prev.map((f) => (f.id === id ? { ...f, applied: true } : f))
    );
    setSelected(fertilizers.find((f) => f.id === id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
        <FlaskRoundIcon className="h-8 w-8 text-green-700" />
        Fertilizer Management
      </h1>
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Plan your fertilizer usage smartly to maximize yield and reduce cost.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fertilizers.map((f) => (
          <div
            key={f.id}
            className="bg-white border border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition p-6"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2">
              <SproutIcon className="h-5 w-5 text-green-700" />
              {f.crop}
            </h2>
            <p className="text-gray-700 mb-1"><strong>Type:</strong> {f.type}</p>
            <p className="text-gray-700 mb-1"><strong>Schedule:</strong> {f.schedule}</p>
            <p className="text-gray-700 mb-4"><strong>Benefit:</strong> {f.benefit}</p>

            {f.applied ? (
              <div className="flex items-center justify-center gap-2 text-green-700 font-semibold">
                <CheckCircle2Icon className="h-5 w-5" /> Applied
              </div>
            ) : (
              <button
                onClick={() => markApplied(f.id)}
                className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold shadow-md mx-auto block"
              >
                Apply Plan
              </button>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              ✅ Fertilizer Plan Applied
            </h2>
            <p className="text-gray-700 text-center mb-6">
              You have applied fertilizer plan for <strong>{selected.crop}</strong>.
              Keep monitoring crop growth for best results.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSelected(null)}
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
