import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAdmin } from "../../redux/AdminReducer/AdminReducer";

// PrivateRoute component
function PrivateRoute() {
  const auth = useSelector(selectAdmin);
  const token = auth?.token;

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
