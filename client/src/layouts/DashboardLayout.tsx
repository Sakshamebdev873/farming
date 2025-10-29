
import { Outlet } from 'react-router-dom';
import { DashboardNavbar } from '../components/DashboardNavbar'; // Make sure this path is correct

import { DashboardFooter } from '../components/DashboardFooter';

/**
 * A layout component for all dashboard-related pages, providing a consistent header and footer.
 */
export function DashboardLayout() {
  return (
    <>
      <DashboardNavbar /> {/* This will be at the top of all dashboard pages */}
      <main className="grow"> {/* Added main with grow to ensure content takes available space */}
        <Outlet /> {/* This is where the specific dashboard page component (e.g., Dashboard, CropPlans, Irrigation) will render */}
      </main>
      <DashboardFooter /> {/* This will be at the bottom of all dashboard pages */}
    </>
  );
}