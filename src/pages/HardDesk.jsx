import React, { useState } from "react";
import SideNav from "../layouts/SideNav";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import DeletePackage from "../components/Brands/DeleteBrands";
import { useGetHardDeskQuery } from "../apis/AddHardDesk/AddHardDesk";
import DeleteHardDesk from "../components/HardDesk/DeleteHardDesk";

function HardDesk() {
  const { data, error, isLoading } = useGetHardDeskQuery();
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
                Hard Desk
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <Link
                    to={"/hard-desk/add"}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <IoAddOutline />
                    <span className="mr-2 text-xs ">Add HardDesk</span>
                  </Link>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium">Hardisk</th>
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
                        {plan.hardiskname || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {plan.status === 0 ? "Inactive" : plan.status === 1 ? "Active" : "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {plan.createdAt || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {plan.updatedAt || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium flex">
                        <Link
                          to={`/hardisk/edit/${plan._id}`}
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
        <DeleteHardDesk onClose={() => setIsDelete(false)} id={deleteId} />
      )}
    </SideNav>
  );
}

export default HardDesk;
