import React, { useState, useEffect } from "react";
import SideNav from "../../layouts/SideNav";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useUpdateBannerMutation } from "../../apis/Banner/Banner";

function EditBanner() {
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const [updatePlan, { isLoading, isSuccess, isError, error }] =
    useUpdateBannerMutation();
  const { id } = useParams();

  useEffect(() => {
    const handleUpdateData = async () => {
      try {
        const res = await axios.get(`https://fierce-veil-elk.cyclic.app/banner/${id}`);
          console.log(res?.data);
          setStatus(res?.data?.data?.status.toString() || "");
          setPreview(res?.data?.data?.image);
        } 
        catch (error) {
          toast.error(error?.data?.error || "Error fetching Banner data");
        }
    };
        
    handleUpdateData();
   }, [id]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Banner updated successfully");
      navigate("/banner");
    } else if (isError) {
      toast.error(error?.data?.error || "something went wrong");
    }
  }, [isError, isSuccess, error]);

  const handleSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("status", status);
    if (image instanceof File) {
      formData.append("image", image);
    }

    try {
      await updatePlan({ id, data: formData });
      if (isSuccess) {
        // handle success, e.g. navigate to another page
      }
    } catch (error) {
      // handle error
    }
  };

  return (
    <SideNav>
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 ~bg-white rounded-md shadow bg-white">
            <div className="flex justify-between  items-center">
              <h2 className="mb-6 text-xl  font-medium leading-6 text-gray-900 ">
                Edit Banner
              </h2>
              {/* back button */}
              <div className="flex items-center mb-6">
                <Link
                  to={"/banner"}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <IoArrowBackOutline />
                  <span className="mr-2 text-xs ">Back</span>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="container px-4 mx-auto" />
              <div className="mb-6 flex flex-col">
                <span>Status</span>
                {/* dropdwon list for active and inactive */}
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="block max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div>
           
              {/* image */}
              <div className="mb-6">
                <h6>Image </h6>
                <label className="block mb-2 text-sm font-medium">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={handleSelect}
                  />
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-64 rounded object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-64 bg-gray-200 border-2 border-dashed border-gray-400 rounded cursor-pointer">
                      <IoCloudUploadOutline size={48} />
                    </div>
                  )}
                </label>
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
                      "Update"
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

export default EditBanner;
