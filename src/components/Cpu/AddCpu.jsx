import React, { useState, useEffect } from "react";
// component
import SideNav from "../../layouts/SideNav";
// utilities
import { Link, useNavigate } from "react-router-dom";
// style
import { IoArrowBackOutline } from "react-icons/io5";

import toast from "react-hot-toast";
// api
import { useAddCpuMutation } from "../../apis/Cpu/Cpu";

function AddCpu() {

  const navigate = useNavigate();

  const [PostPlan, { isLoading, isSuccess, isError, error }] =
    useAddCpuMutation();

  
  const handleAddPackage = async (e) => {
    e.preventDefault();
    const cpuname = e.target[0].value;
    const status = e.target[1].value;
    
    const data = {
      cpuname: cpuname,
      status: status,
    };
    await PostPlan(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Cpu added successfully");
      navigate("/cpu");
    } else if (isError) {
      toast.error(error?.data?.error || "Failed to add Cpu");
    }
  }, [isSuccess, isError]);

  return (
    <SideNav>
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 ~bg-white rounded-md shadow bg-white">
            <div className="flex justify-between  items-center">
              <h2 className="mb-6 text-xl  font-medium leading-6 text-gray-900 ">
                Add Cpu
              </h2>
              {/* back button */}
              <div className="flex items-center mb-6">
                <Link
                  to={"/cpu"}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <IoArrowBackOutline />
                  <span className="mr-2 text-xs ">Back</span>
                </Link>
              </div>
            </div>
            <form onSubmit={handleAddPackage}>
              <div className="container px-4 mx-auto" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium" htmlFor>
                  Cpu Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                  type="text"
                  name="cpuname"
                  id="cpuname"
                  placeholder="e.g Basic, Premium, Pro etc."
                />
              </div>
              
              {/* subscirpon plans  */}
              <div className="mb-6 flex flex-col">
                <span>Status</span>
                <select
                  name="status"
                  id="status"
                  className="block max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                >
                  <option value={""}>Select Status</option>
                  <option value={1}>Active</option>
                  <option value={0}>InActive</option>
                </select>
              </div>

              <div className="mt-7">
                <div className="flex justify-end space-x-2">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                  >
                    {isLoading ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3 ..."
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    ) : (
                      <span>Add Cpu</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SideNav>
  );
}

export default AddCpu;
