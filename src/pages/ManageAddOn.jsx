import React, { useState } from "react";
import SideNav from "../layouts/SideNav";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGetAddOnQuery } from "../apis/Add-On/AddOn";
import CreateAddOn from "../components/ManageAddOn/createAddOn";
import DeleteAddOn from "../components/ManageAddOn/DeleteAddOn";

function ManageAddOn() {
  const [AddOnModel, setAddOnModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  const { data, error, isLoading } = useGetAddOnQuery();

  return (
    <SideNav>
      <section className=" lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                Manage Add-On
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <button
                    onClick={() => setAddOnModel(true)}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <IoAddOutline />
                    <span className="mr-2 text-xs ">Add Add-On</span>
                  </button>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium">Title</th>
                    <th className="px-6 py-3 font-medium">Price</th>
                    <th className="px-6 py-3 font-medium">Description</th>
                    <th className="px-6 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className=" px-6 text-sm font-medium">{data?.title}</td>

                    <td className="px-6 text-sm">${data?.price}</td>
                    <td className="px-6 text-sm font-medium">{data?.desc}</td>
                    <td className="px-6 text-sm font-medium">
                      <button
                        onClick={() => setDeleteModel(true)}
                        className="ml-2 px-4 py-1 font-medium text-red-500 border border-red-500 rounded-md hover:text-gray-100 hover:bg-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {AddOnModel && <CreateAddOn onClose={() => setAddOnModel(false)} />}
      {deleteModel && <DeleteAddOn onClose={() => setDeleteModel(false)} />}
    </SideNav>
  );
}

export default ManageAddOn;
