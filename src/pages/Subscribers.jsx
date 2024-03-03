import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5"
// component
import SideNav from "../layouts/SideNav";
import ViewModel from "../components/Customers/ViewModel";
import EditModel from "../components/Customers/EditModel";
import Filters from "../components/Subscribers/Filters";

function Customers() {
  const [veiwCustomer, SetVewCustomer] = useState(false);
  const [editCustomer, setEditCustomer] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <SideNav>
      <section className="lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                Subscribers
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <input
                    type="text"
                    className="w-full pr-4 text-sm text-gray-700 bg-white placeholder-text-100 focus:ring-0 focus:outline-none"
                    placeholder="search..."
                  />
                  <button className="flex items-center text-gray-700 hover:text-blue-600">
                    <span className="mr-2 text-xs ">Go</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </button>
                </div>
                  <button
                    onClick={() => setFilter(true)}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                    <IoFilterSharp className="mr-2" /> Filter
                  </button>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium">ID</th>
                    <th className="px-6 py-3 font-medium">Name</th>
                    <th className="px-6 py-3 font-medium">Email</th>
                    <th className="px-6 py-3 font-medium">Subscription Plan</th>
                    <th className="px-6 py-3 font-medium">Amount Spent</th>
                    <th className="px-6 py-3 font-medium"> Subscription Status</th>
                    <th className="px-6 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <p className="text-gray-400">1001</p>
                    </td>
                    <td className="px-6 text-sm font-medium">Johan Doie</td>
                    <td className="px-6 text-sm font-medium">
                      johandoie@example.com
                    </td>
                    <td className="px-6 text-sm font-medium">Cloud Server</td>
                    <td className="px-6 text-sm font-medium">
                      <span className="inline-block px-2 py-1 text-gray-700">
                        $837.46
                      </span>
                    </td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md">
                        Active
                      </span>
                    </td>
                    <td className="flex px-2 gap-2 py-3 text-sm">
                      <button
                        onClick={() => SetVewCustomer(true)}
                        className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600"
                      >
                        View
                      </button>
                      <button
                        onClick={() => setEditCustomer(true)}
                        className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <p className="text-gray-400">1002</p>
                    </td>
                    <td className="px-6 text-sm font-medium">Elia Bilish</td>
                    <td className="px-6 text-sm font-medium">
                      Bilish@example.com
                    </td>
                    <td className="px-6 text-sm font-medium">
                      Media Streaming
                    </td>
                    <td className="px-6 text-sm font-medium">
                      <span className="inline-block px-2 py-1 text-gray-700">
                        $987.63
                      </span>
                    </td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md">
                        Active
                      </span>
                    </td>
                    <td className="flex px-2 gap-2 py-3 text-sm">
                      <button className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600">
                        View
                      </button>
                      <button className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <p className="text-gray-400">1003</p>
                    </td>
                    <td className="px-6 text-sm font-medium">Anderson</td>
                    <td className="px-6 text-sm font-medium">
                      Anderson@example.com
                    </td>
                    <td className="px-6 text-sm font-medium">
                      Bluemidx Solution
                    </td>
                    <td className="px-6 text-sm font-medium">
                      <span className="inline-block px-2 py-1 text-gray-700">
                        $746.32
                      </span>
                    </td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-orange-700 bg-orange-100 rounded-md">
                        InActive
                      </span>
                    </td>
                    <td className="flex px-2 gap-2 py-3 text-sm">
                      <button className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600">
                        View
                      </button>
                      <button className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <p className="text-gray-400">1004</p>
                    </td>
                    <td className="px-6 text-sm font-medium">Mr.wow</td>
                    <td className="px-6 text-sm font-medium">
                      wow@example.com
                    </td>
                    <td className="px-6 text-sm font-medium">Cloud Server</td>
                    <td className="px-6 text-sm font-medium">
                      <span className="inline-block px-2 py-1 text-gray-700">
                        $123.45
                      </span>
                    </td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-orange-700 bg-orange-100 rounded-md">
                        InActive
                      </span>
                    </td>
                    <td className="flex px-2 gap-2 py-3 text-sm">
                      <button className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600">
                        View
                      </button>
                      <button className="flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded-md hover:text-gray-100 hover:bg-blue-600">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-wrap items-center justify-end px-6 py-3">
                <nav aria-label="page-navigation ">
                  <ul className="flex mb-4 list-style-none lg:mb-0">
                    <li className="page-item disabled ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md pointer-events-none hover:text-gray-100 hover:bg-blue-600"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-100 transition-all duration-300 bg-blue-600 rounded-md hover:text-blue-700 hover:bg-blue-200 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 "
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 mr-1 text-xs text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 "
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1 text-xs text-gray-700 transition-all duration-300 rounded-md dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-blue-100 "
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {veiwCustomer && (
        <ViewModel
          isOpen={veiwCustomer}
          onClose={() => SetVewCustomer(false)}
        />
      )}
      {editCustomer && (
        <EditModel
          isOpen={editCustomer}
          onClose={() => setEditCustomer(false)}
        />
      )}
      {filter && (
        <Filters
          isOpen={filter}
          onClose={() => setFilter(false)}
        />
      )}
    </SideNav>
  );
}

export default Customers;
