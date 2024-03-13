import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CustomersList from "./pages/CustomersList";
import CustomerDetails from "./components/Customers/CustomerDetails";
import TransactionHistory from "./components/Customers/TransactionHistory";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";
import Login from "./pages/Login";
import MyAccount from "./components/Profile/MyAccount";
import Administrator from "./pages/Administrator";
import PrivateRoute from "./components/security/ProtectedRoute";
import AddPackage from "./components/Brands/AddBrands";
import EditPackage from "./components/Brands/EditBrands";
import Brands from "./pages/Brands";
import HardDesk from "./pages/HardDesk";
import AddHardDesk from "./components/HardDesk/AddHardDesk";
import EditHardDesk from "./components/HardDesk/EditHardDesk";
import Cpu from "./pages/Cpu";
import AddCpu from "./components/Cpu/AddCpu";
import EditCpu from "./components/Cpu/EditCpu";
import OperatingSystem from "./pages/OperatingSystem";
import AddOperatingSystem from "./components/OperatingSystem/AddOperatingSystem";
import EditOperatingSystem from "./components/OperatingSystem/EditOperatingSystem";
import Ram from "./pages/Ram";
import AddRam from "./components/Ram/AddRam";
import EditRam from "./components/Ram/EditRam";
import Asin from "./pages/Asin";
import AddAsin from "./components/Asin/AddAsin";
import EditAsin from "./components/Asin/EditAsin";
import Category from "./pages/Category";
import AddCategory from "./components/Category/AddCategory";
import EditCategory from "./components/Category/EditCategory";
import AddThumbnail from "./components/Products/AddThumbnail";
const App = () => {
  return (
    <>
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        <Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          
          <Route path="/brands" element={<Brands />} />
          <Route path="/package/add" element={<AddPackage />} />
          <Route path="/package/edit/:id" element={<EditPackage />} />

          <Route path="/hard-desk" element={<HardDesk />} />
          <Route path="/hard-desk/add" element={<AddHardDesk />} />
          <Route path="/hardisk/edit/:id" element={<EditHardDesk />} />

          <Route path="/cpu" element={<Cpu />} />
          <Route path="/cpu/add" element={<AddCpu />} />
          <Route path="/cpu/edit/:id" element={<EditCpu />} />

          <Route path="/operating-system" element={<OperatingSystem />} />
          <Route path="/operating-system/add" element={<AddOperatingSystem />} />
          <Route path="/operating-system/edit/:id" element={<EditOperatingSystem />} />

          <Route path="/ram" element={<Ram />} />
          <Route path="/ram/add" element={<AddRam />} />
          <Route path="/ram/edit/:id" element={<EditRam />} />

          <Route path="/asin" element={<Asin />} />
          <Route path="/asin/add" element={<AddAsin />} />
          <Route path="/asin/edit/:id" element={<EditAsin />} />

          <Route path="/category" element={<Category />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/edit/:id" element={<EditCategory />} />

          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/thumbnail/edit/:id" element={<AddThumbnail />} />

          <Route path="/customer-list" element={<CustomersList />} />
          <Route path="/customers/edit/:id" element={<CustomerDetails />} />
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
