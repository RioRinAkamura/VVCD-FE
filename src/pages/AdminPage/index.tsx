import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboard } from "../../components/Dashboard";

const AdminPage = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default AdminPage;
