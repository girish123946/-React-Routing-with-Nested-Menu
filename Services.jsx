import { Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <p>Select a service from the dropdown menu.</p>

      <Outlet />
    </div>
  );
}

export default Services;