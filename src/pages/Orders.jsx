import React from "react";
import SideNav from "../layouts/SideNav";

function Orders() {
  return (
    <SideNav>
      <section className="lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                Orders
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
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="flex items-center py-3 pl-6 font-medium">
                      <input className="mr-4" type="checkbox" name id />
                      <span> Order No.</span>
                    </th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Products</th>
                    <th className="px-6 py-3 font-medium">Monthly</th>
                    <th className="px-6 py-3 font-medium">Yearly</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <input className="mr-4" type="checkbox" name id />
                      <p className="text-gray-400">1002</p>
                    </td>
                    <td className="px-6 text-sm font-medium">06.01.2022</td>
                    <td className="px-6 text-sm font-medium">Cloud Server</td>
                    <td className="px-6 text-sm font-medium">No</td>
                    <td className="px-6 text-sm font-medium">Yes</td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 text-sm font-medium">$13</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <input className="mr-4" type="checkbox" name id />
                      <p className="text-gray-400">1002</p>
                    </td>
                    <td className="px-6 text-sm font-medium">11.01.2022</td>
                    <td className="px-6 text-sm font-medium">Media Streaming</td>
                    <td className="px-6 text-sm font-medium">
                      Yes
                    </td>
                    <td className="px-6 text-sm font-medium">No</td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 text-sm font-medium">$19</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <input className="mr-4" type="checkbox" name id />
                      <p className="text-gray-400">1002</p>
                    </td>
                    <td className="px-6 text-sm font-medium">02.07.2022</td>
                    <td className="px-6 text-sm font-medium">Bluemidx Solution</td>
                    <td className="px-6 text-sm font-medium">No</td>
                    <td className="px-6 text-sm font-medium">Yes</td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-orange-700 bg-orange-100 rounded-md">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 text-sm font-medium">$22</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="flex items-center px-6 py-3 text-sm font-medium">
                      <input className="mr-4" type="checkbox" name id />
                      <p className="text-gray-400">1002</p>
                    </td>
                    <td className="px-6 text-sm font-medium">01.01.2022</td>
                    <td className="px-6 text-sm font-medium">Bluewolf</td>
                    <td className="px-6 text-sm font-medium">Yes</td>
                    <td className="px-6 text-sm font-medium">No</td>
                    <td className="px-6 text-sm">
                      <span className="inline-block px-2 py-1 text-gray-700 bg-gray-200 rounded-md">
                        Due in 3 weeks
                      </span>
                    </td>
                    <td className="px-6 text-sm font-medium">$46</td>
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
    </SideNav>
  );
}

export default Orders;
