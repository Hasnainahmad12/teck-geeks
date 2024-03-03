import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Subscribers from "./pages/Subscribers";
import CustomersList from "./pages/CustomersList";
import CustomerDetails from "./components/Customers/CustomerDetails";
import TransactionHistory from "./components/Customers/TransactionHistory";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";
import Login from "./pages/Login";
import MyAccount from "./components/Profile/MyAccount";
import Administrator from "./pages/Administrator";
import PrivateRoute from "./components/security/ProtectedRoute";
import ManagePackage from "./pages/Brands";
import ManageAddOn from "./pages/ManageAddOn";
import ManageSuites from "./pages/ManageSuites";
import AddPackage from "./components/Brands/AddBrands";
import EditPackage from "./components/Brands/EditBrands";
import Brands from "./pages/Brands";
import HardDesk from "./pages/HardDesk";
import AddHardDesk from "./components/HardDesk/AddHardDesk";
import EditHardDesk from "./components/HardDesk/EditHardDesk";
const App = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        <Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          
          <Route path="/brands" element={<Brands />} />
          <Route path="/manage-add-on" element={<ManageAddOn />} />
          <Route path="/manage-suites" element={<ManageSuites />} />
          <Route path="/package/add" element={<AddPackage />} />
          <Route path="/package/edit/:id" element={<EditPackage />} />

          <Route path="/hard-desk" element={<HardDesk />} />
          <Route path="/hard-desk/add" element={<AddHardDesk />} />
          <Route path="/hardisk/edit/:id" element={<EditHardDesk />} />

          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/customer-list" element={<CustomersList />} />
          <Route path="/customers/edit/:id" element={<CustomerDetails />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/admin/profile" element={<MyAccount />} />
          <Route path="/administrator" element={<Administrator />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
