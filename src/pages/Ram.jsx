import React, { useState } from "react";
import SideNav from "../layouts/SideNav";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import DeleteCpu from "../components/Cpu/DeleteCpu";
import { useGetRamQuery } from "../apis/Ram/Ram";
import DeleteRam from "../components/Ram/DeleteRam";

function Ram() {
  const { data, error, isLoading } = useGetRamQuery();
  const [isDelete, setIsDelete] = useState(false);
  const [deleteId, setDelteId] = useState("");

  const handleDelete = (id) => {
    setDelteId(id);
    setIsDelete(true);
  };

  return (
    <SideNav>
      <section className=" lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                RAM
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <Link
                    to={"/ram/add"}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <IoAddOutline />
                    <span className="mr-2 text-xs ">Add Ram</span>
                  </Link>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium">Ram Name</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium">Created Date</th>
                    <th className="px-6 py-3 font-medium">Updated Date</th>
                    <th className="px-6 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((plan, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className=" px-6 text-sm font-medium">
                        {plan.ramname || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                      <span
                            className={`inline-block px-2 py-1 ${
                                plan.status === 1
                                ? "text-green-700 bg-green-100"
                                : "text-red-700 bg-red-100"
                            } rounded-md`}
                          >
                            {plan.status === 1 ? "Active" : "Inactive"}
                          </span>
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {plan.createdAt || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {plan.updatedAt || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium flex">
                        <Link
                          to={`/ram/edit/${plan._id}`}
                          className="px-4 py-1 font-medium text-blue-500 border border-blue-500 rounded-md hover:text-gray-100 hover:bg-blue-500"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(plan._id)}
                          className="ml-2 px-4 py-1 font-medium text-red-500 border border-red-500 rounded-md hover:text-gray-100 hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {isDelete && (
        <DeleteRam onClose={() => setIsDelete(false)} id={deleteId} />
      )}
    </SideNav>
  );
}

export default Ram;
