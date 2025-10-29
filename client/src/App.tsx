import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Import Page Components ---
import AuthPage from "./pages/AuthPage";
import Homepage from "./pages/Homepage"; // Assuming this is now in its own file
import Dashboard from "./pages/Dashboard";
// Dedicated CropPlans page
import { Irrigation } from "./pages/Irrigation";

// --- Import Shared Layout Components (only Navbar for homepage) ---
import { Navbar } from "./components/Navbar";
// Footer and DashboardNavbar are imported within DashboardLayout, so no need here
// import { Footer } from "./components/Footer"; // Not needed here anymore
// import { DashboardNavbar } from "./components/DashboardNavbar"; // Not needed here anymore

// --- Import Layouts ---
import { DashboardLayout } from "./layouts/DashboardLayout"; // Import the new layout
import { Footer } from "./components/Footer";
import CropPlans from "./pages/Dashboard";
import KVK from "./pages/KVK";
import { Training } from "./pages/Training";
import { DiseaseControl } from "./pages/DiseaseControl";
import { Fertilizer } from "./pages/Fertilizers";
import { Community } from "./pages/Community";

/**
 * The main App component with the router.
 * This sets up all the application's top-level routes.
 */
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ks-stone-50/50 font-sans text-stone-900 flex flex-col">
        <Routes>
          {/* Route 1: Homepage */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer /> {/* Footer is still needed for the homepage */}
              </>
            }
          />

          {/* Route 2: Auth Page */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Route 3: Dashboard Layout and Nested Routes */}
          {/* The DashboardLayout component now serves as the wrapper for ALL dashboard-related content. */}
          {/* It contains the DashboardNavbar, an <Outlet /> for nested content, and the Footer. */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* The index route for /dashboard will render the Dashboard component */}
            <Route index element={<Dashboard />} />
            {/* Specific dashboard pages, these will render inside DashboardLayout's <Outlet /> */}
            <Route path="crop-plans" element={<CropPlans />} />
            <Route path="irrigation" element={<Irrigation />} />
            <Route path="kvk" element={<KVK />} />
            <Route path="training" element={<Training />} />
            <Route path="disease" element={<DiseaseControl />} />
            <Route path="fertilizer" element={<Fertilizer/>}/>
            <Route path="community" element={<Community/>}/>
            {/* Add more dashboard sub-routes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
