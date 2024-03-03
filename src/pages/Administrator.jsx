import React, { useEffect, useState } from "react";
import SideNav from "../layouts/SideNav";
import { IoAddOutline } from "react-icons/io5";
import { Images } from "../assets/Images";
import { Link } from "react-router-dom";
import {
  useGetAdminsQuery,
  useDeleteAdminMutation,
} from "../apis/Admin/AdminSlice";
// components
import AddRole from "../components/Administrator/AddRole";
import UpdateRole from "../components/Administrator/UpdateRole";
import toast from "react-hot-toast";

function Administrator() {
  const [addRole, setAddRole] = useState(false);
  const [updateRole, setUpdateRole] = useState(false);
  const [preData, setPreData] = useState(null);
  const { data, error, isLoading } = useGetAdminsQuery();
  const [deleteAdmin, { isSuccess, isError }] = useDeleteAdminMutation();

  const handleUpdateRole = (role) => {
    setUpdateRole(true);
    setPreData(role);
  };

  const handleDeleteAdmin = async (id) => {
    try {
      const response = await deleteAdmin(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Adminstatior Delete successfully");
    } else if (isError) {
      toast.error("something went wrong");
    }
  }, [isError, isSuccess]);

  return (
    <SideNav>
      <section className=" lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                Administrator
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <button
                    onClick={() => setAddRole(true)}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <IoAddOutline />
                    <span className="mr-2 text-xs ">Add New Role</span>
                  </button>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium">Name</th>
                    <th className="px-6 py-3 font-medium">Email</th>
                    <th className="px-6 py-3 font-medium">Role</th>
                    <th className="px-6 py-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((admin, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-6 text-sm font-medium">
                        {admin.username || "N/A"}
                      </td>
                      <td className="px-6 text-sm font-medium">
                        {admin.email || "N/A"}
                      </td>
                      <td className="px-6 text-sm">{admin.role || "N/A"}</td>
                      <td className="px-6 text-sm font-medium">
                        <button
                          onClick={() => handleUpdateRole(admin)}
                          className="px-4 py-1 font-medium text-blue-500 border border-blue-500 rounded-md hover:text-gray-100 hover:bg-blue-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAdmin(admin._id)}
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
      {addRole && (
        <AddRole isOpen={addRole} onClose={() => setAddRole(false)} />
      )}
      {updateRole && (
        <UpdateRole onClose={() => setUpdateRole(false)} preData={preData} />
      )}
    </SideNav>
  );
}

export default Administrator;
