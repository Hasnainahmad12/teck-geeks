import React, { useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import SideNav from "../layouts/SideNav";
import { MdCancelPresentation } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useGetPlansQuery } from "../apis/AddBrand/AddBrandSlice";
import { useGetProductQuery } from "../apis/Products/Products";
import { useGetCategoryQuery } from "../apis/Category/Category";
import { useGetAsinQuery } from "../apis/Asin/Asin";
import { useGetCpuQuery } from "../apis/Cpu/Cpu";
import { useGetHardDeskQuery } from "../apis/AddHardDesk/AddHardDesk";

function Dashboard() {
  const navigate = useNavigate();
  const { data: brandsData, error: plansError } = useGetPlansQuery();
  const { data: productData, error: productError } = useGetProductQuery();
  const { data: categoryData, error: categoryError } = useGetCategoryQuery();
  const { data: asinData, error: asinError } = useGetAsinQuery();
  const { data: cpuData, error: cpuError } = useGetCpuQuery();
  const { data: hardiskData, error: hardiskError } = useGetHardDeskQuery();
  

  return (
    <SideNav>
      <section className="px-6 pt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Brands</p>
              <h2 className="text-2xl font-bold text-gray-700">{brandsData?.data.length > 0 ? `(${brandsData?.data.length})` : ''}</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <FiUsers className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Products</p>
              <h2 className="text-2xl font-bold text-gray-700">{productData?.data.length > 0 ? `(${productData?.data.length})` : ''}</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <IoMdCheckmarkCircleOutline className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Categories</p>
              <h2 className="text-2xl font-bold text-gray-700">{categoryData?.data.length > 0 ? `(${categoryData?.data.length})` : ''}</h2>
            </div>
          </div>
        </div>

        <div className=" mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <IoMdCloseCircleOutline className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Asin</p>
              <h2 className="text-2xl font-bold text-gray-700">{asinData?.data.length > 0 ? `(${asinData?.data.length})` : ''}</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <MdCancelPresentation className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Cpu</p>
              <h2 className="text-2xl font-bold text-gray-700">{cpuData?.data.length > 0 ? `(${cpuData?.data.length})` : ''}</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <FaBoxes className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Hard Disk</p>
              <h2 className="text-2xl font-bold text-gray-700">{hardiskData?.data.length > 0 ? `(${hardiskData?.data.length})` : ''}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div>
              <div className=" flex justify-between items-center w-full border-b border-gray-300">
                <h2 className="px-6 py-4 pb-4 text-xl font-medium">
                  Recent Products
                </h2>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="flex items-center py-3 pl-6 font-medium">
                      Images
                    </th>
                    <th className="px-6 py-3 font-medium">Products Name</th>
                    <th className="px-6 py-3 font-medium">Brands</th>
                    <th className="px-6 py-3 font-medium">hardisk</th>
                    {/* <th className="px-6 py-3 font-medium">cpu</th> */}
                    <th className="px-6 py-3 font-medium">operating sysytem</th>
                    <th className="px-6 py-3 font-medium">Ram</th>
                    <th className="px-6 py-3 font-medium">price</th>
                    <th className="px-6 py-3 font-medium">stock</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productData?.data?.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b border-gray-200"
                      >
                        <td className="px-6 text-sm font-medium">
                          <img
                            src={product?.image}
                            alt="product"
                            className="w-10 h-10 rounded-md"
                          />
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {product.productname.substring(0, 23)}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {product.brands}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {product.hardisk}
                        </td>
                        {/* <td className="px-6 text-sm font-medium">
                          {product.cpu}
                        </td> */}
                        <td className="px-6 text-sm font-medium">
                          {product.operatingsysytem}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {product.ram}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {product.price}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {product.stock}
                        </td>
                        <td className="px-6 text-sm">
                          <span
                            className={`inline-block px-2 py-1 ${
                              product.status === 1
                                ? "text-green-700 bg-green-100"
                                : "text-red-700 bg-red-100"
                            } rounded-md`}
                          >
                            {product.status === 1 ? "Active" : "Inactive"}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </SideNav>
  );
}

export default Dashboard;
