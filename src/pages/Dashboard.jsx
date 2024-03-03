import React, { useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import SideNav from "../layouts/SideNav";
import { MdCancelPresentation } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useGetHistoryQuery } from "../apis/History/HistorySlice";
import toast from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetHistoryQuery();

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
              <h2 className="text-2xl font-bold text-gray-700">$1,25,220</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <FiUsers className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Users</p>
              <h2 className="text-2xl font-bold text-gray-700">100</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <IoMdCheckmarkCircleOutline className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Active Subscription</p>
              <h2 className="text-2xl font-bold text-gray-700">56</h2>
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
              <p className="mb-2 text-gray-700">Inactive Subscription</p>
              <h2 className="text-2xl font-bold text-gray-700">99</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <MdCancelPresentation className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Cancelled Subscription</p>
              <h2 className="text-2xl font-bold text-gray-700">100</h2>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-md shadow bg-gray-50">
            <div className="mr-4">
              <span className="inline-block p-4 mr-2 text-blue-600 bg-blue-100 rounded-full">
                <FaBoxes className="text-2xl" />
              </span>
            </div>
            <div>
              <p className="mb-2 text-gray-700">Total Products</p>
              <h2 className="text-2xl font-bold text-gray-700">56</h2>
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
                  Recent Transctions
                </h2>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="flex items-center py-3 pl-6 font-medium">
                      <span> Transcation ID</span>
                    </th>
                    <th className="px-6 py-3 font-medium">Name</th>
                    <th className="px-6 py-3 font-medium">Email</th>
                    <th className="px-6 py-3 font-medium">Subscription Plan</th>
                    <th className="px-6 py-3 font-medium">
                      Subscription Status
                    </th>
                    <th className="px-6 py-3 font-medium">Payment Status</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="flex items-center px-6 py-3 text-sm font-medium">
                        <p className="text-gray-400">
                          {transaction?.user?.userPanelId || "N/A"}
                        </p>
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {transaction?.user?.username || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {transaction?.user?.email || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {transaction?.subscriptionDetails?.plan?.title || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md">
                          {transaction?.user?.subscriptionStatus}
                        </span>
                      </td>
                      <td className="px-6 text-sm">
                        <span
                          className={`inline-block px-2 py-1 rounded-md ${
                            transaction?.paymentStatus === "success"
                              ? "text-green-700 bg-green-100"
                              : transaction?.paymentStatus === "pending"
                              ? "text-orange-500 bg-orange-100"
                              : "text-gray-400 bg-gray-100"
                          }`}
                        >
                          {transaction?.paymentStatus || "N/A"}
                        </span>
                      </td>
                      <td className="px-6 text-sm font-medium">
                        ${transaction?.amount || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-wrap items-center justify-end px-6 py-3">
                <button
                  className="px-4 py-2 mr-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  onClick={() => navigate("/transaction-history")}
                >
                  view all
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SideNav>
  );
}

export default Dashboard;
