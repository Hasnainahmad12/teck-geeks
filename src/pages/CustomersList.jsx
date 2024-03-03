import React, { useState } from "react";
import SideNav from "../layouts/SideNav";
import { Link } from "react-router-dom";
import CustomerDelete from "../components/Customers/DeActivateCustomer";
import {
  useGetCustomersQuery,
  useDeleteCustomerMutation,
} from "../apis/Customers/CustomersList";

function CustomersList() {
  const [DeactivateModel, setDeactivateModel] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const { data, error, isLoading } = useGetCustomersQuery();

  const handleDeleteCustomer = (id) => {
    setDeactivateModel(true);
    setCustomerId(id);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = data?.users?.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SideNav>
      <section className="lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                Customers List
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
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
                    <th className="px-6 py-3 font-medium">Name</th>
                    <th className="px-6 py-3 font-medium">Email</th>
                    <th className="px-6 py-3 font-medium">Subscription Plan</th>
                    <th className="px-6 py-3 font-medium">
                      Subscription Status
                    </th>
                    <th className="px-6 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers &&
                    filteredUsers?.map((customer) => (
                      <tr
                        key={customer._id}
                        className="border-b border-gray-200"
                      >
                        <td className="px-6 text-sm font-medium">
                          {customer.username}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {customer.email}
                        </td>
                        <td className="px-6 text-sm font-medium">
                          {customer?.subscription?.title || "N/A"}{" "}
                        </td>
                        {/* Subscription Plan */}
                        <td className="px-6 text-sm">
                          <span
                            className={`inline-block px-2 py-1 text-red-700 bg-red-100 rounded-md`}
                          >
                            Inactive
                          </span>
                        </td>
                        <td className="px-6 text-sm font-medium">
                          <Link
                            to={`/customers/edit/${customer._id}`}
                            className="px-4 py-1 font-medium text-blue-500 border border-blue-500 rounded-md hover:text-gray-100 hover:bg-blue-500"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDeleteCustomer(customer._id)}
                            className="ml-2 px-4 py-1 font-medium text-red-500 border border-red-500 rounded-md hover:text-gray-100 hover:bg-red-500"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
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
      {DeactivateModel && (
        <CustomerDelete
          onClose={() => setDeactivateModel(false)}
          id={customerId}
        />
      )}
    </SideNav>
  );
}

export default CustomersList;
