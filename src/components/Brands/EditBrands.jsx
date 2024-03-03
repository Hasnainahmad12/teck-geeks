import React, { useEffect, useState } from "react";
// layout
import SideNav from "../../layouts/SideNav";
// utility
import { Link, useParams, useNavigate } from "react-router-dom";
// style
import { IoArrowBackOutline } from "react-icons/io5";
// api
import {
  useGetPlansQuery,
  useUpdatePlanMutation,
} from "../../apis/AddBrand/AddBrandSlice";
import toast from "react-hot-toast";

function EditPackage() {
  const [brandName, setBrandName] = useState("");
  const [status, setStatus] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetPlansQuery();
  const [updatePlan, { isLoading, isSuccess, isError, error }] =
    useUpdatePlanMutation();
  const Data = data?.data?.filter((plan) => plan._id === id);

  useEffect(() => {
    if (Data?.data?.length > 0) {
      const planData = Data[0];
      setBrandName(planData.brandname);
      setStatus(planData.status);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Brand updated successfully");
      navigate("/brands");
    } else if (isError) {
      toast.error(error?.data?.error || "Error updating");
    }
  }, [isSuccess, isError, error]);

  
  const handleUpdatePackage = async () => {
    const payload = {
      brandname: brandName,
      status: status,
     };
    await updatePlan({ data: payload, id });
  };

  return (
    <SideNav>
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 ~bg-white rounded-md shadow bg-white">
            <div className="flex justify-between  items-center">
              <h2 className="mb-6 text-xl  font-medium leading-6 text-gray-900 ">
                Edit Package
              </h2>
              {/* back button */}
              <div className="flex items-center mb-6">
                <Link
                  to={"/brands"}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <IoArrowBackOutline />
                  <span className="mr-2 text-xs ">Back</span>
                </Link>
              </div>
            </div>
            <div>
              <div className="container px-4 mx-auto" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium" htmlFor>
                  Brand
                </label>
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                  type="text"
                  name="brandname"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g Basic, Premium, Pro etc."
                />
              </div>

              {/* subscirpon plans  */}
              <div className="mb-6 flex flex-col">
                <span>Status</span>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
                    onClick={handleUpdatePackage}
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
                      <span>Update Package</span>
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

export default EditPackage;
