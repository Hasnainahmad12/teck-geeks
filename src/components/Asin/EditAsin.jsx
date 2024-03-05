import React, { useEffect, useState } from "react";
// layout
import SideNav from "../../layouts/SideNav";
// utility
import { Link, useParams, useNavigate } from "react-router-dom";
// style
import { IoArrowBackOutline } from "react-icons/io5";

import toast from "react-hot-toast";

// api
import { useUpdateAsinMutation } from "../../apis/Asin/Asin";

//axios api calling
import axios from "axios";

function EditAsin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [asinName, setAsinName] = useState("");
  const [status, setStatus] = useState("");

  const [updateRam, { isLoading, isSuccess, isError, error }] = useUpdateAsinMutation();

  useEffect(() => {
    const handleUpdateData = async () => {
      try {
        const res = await axios.get(`https://fierce-veil-elk.cyclic.app/get-asinbyid/${id}`);
        setAsinName(res?.data?.data?.asinname || "");
        setStatus(res?.data?.data?.status.toString() || "");
      } 
      catch (error) {
        toast.error(error?.data?.error || "Error fetching Asin data");
      }
    };
  
    handleUpdateData();
  }, [id]);
  

  const handleUpdatePackage = async () => {
    try {
      await updateRam({ id, data: { asinname: asinName, status: status } });
      toast.success("Asin updated successfully");
      navigate("/asin");
    } catch (error) {
      toast.error(error?.data?.error || "Error updating");
    }
  };

  // if (isFetching) return <div>Loading...</div>;

  return (
    <SideNav>
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 bg-white rounded-md shadow">
            <div className="flex justify-between items-center">
              <h2 className="mb-6 text-xl font-medium leading-6 text-gray-900">Edit Ram</h2>
              <div className="flex items-center mb-6">
                <Link to={"/ram"} className="flex items-center text-gray-700 hover:text-blue-600">
                  <IoArrowBackOutline />
                  <span className="mr-2 text-xs">Back</span>
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium" htmlFor="ramname">
                    Asin
                </label>
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                  type="text"
                  id="ramname"
                  value={asinName}
                  onChange={(e) => setAsinName(e.target.value)}
                  placeholder="Enter Asin Name"
                />
              </div>
              <div className="mb-6 flex flex-col">
                <span>Status</span>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="block w-full max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                >
                  <option value={""}>Select Status</option>
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div>
              <div className="mt-7">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={handleUpdatePackage}
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : (
                      <span>Update Asin</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SideNav>
  );
}

export default EditAsin;
