import React from "react";
import { SproutIcon } from "lucide-react";

export const DashboardFooter = () => {
  return (
    <footer className="bg-green-800 text-green-100 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <SproutIcon className="h-6 w-6 text-amber-400" />
          <span className="font-semibold text-lg">Kissan Saathi Dashboard</span>
        </div>

        <p className="text-sm text-green-300 text-center sm:text-right">
          © {new Date().getFullYear()} Farm360 — Empowering Smarter Farming 🌱
        </p>
      </div>
    </footer>
  );
};
