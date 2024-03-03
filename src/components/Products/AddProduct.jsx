import React, { useState, useEffect } from "react";
import SideNav from "../../layouts/SideNav";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { useAddPlanMutation } from "../../apis/AddBrand/AddBrandSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddProduct() {
  const [features, setFeatures] = useState([{ value: "" }]);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [subscription, setSubscription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const [addPlan, { isLoading, error, isSuccess, isError }] =
    useAddPlanMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added successfully");
      navigate("/products");
    } else if (isError) {
      toast.error(error?.data?.error || "Something went wrong");
    }
  }, [isSuccess, isError, error]);

  const handleAddFeature = () => {
    setFeatures([...features, { value: "" }]);
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = [...features];
    newFeatures.splice(index, 1);
    setFeatures(newFeatures);
  };

  const handleSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", description);
    formData.append("price", price);
    formData.append("period", subscription);
    formData.append("status", status);
    features.forEach((feature, index) => {
      formData.append(`features[]`, feature.value);
    });
    formData.append("images", image);

    const result = await addPlan(formData);
  };

  return (
    <SideNav>
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 ~bg-white rounded-md shadow bg-white">
            <div className="flex justify-between  items-center">
              <h2 className="mb-6 text-xl  font-medium leading-6 text-gray-900 ">
                Add Product
              </h2>
              {/* back button */}
              <div className="flex items-center mb-6">
                <Link
                  to={"/products"}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <IoArrowBackOutline />
                  <span className="mr-2 text-xs ">Back</span>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="container px-4 mx-auto" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium" htmlFor>
                  Title
                </label>
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Product Title"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium " htmlFor>
                  Price
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="price"
                    className="block max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                    placeholder="0"
                    pattern="\d*"
                    inputMode="numeric"
                    onChange={(e) => setPrice(e.target.value)}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    style={{ paddingLeft: "20px" }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500">$</span>
                  </span>
                </div>
              </div>
              <div className="mb-6 flex flex-col">
                <span>Status</span>
                {/* dropdwon list for active and inactive */}
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  name="status"
                  value={status}
                  className="block max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                >
                  <option value={""}>Select Status</option>
                  <option value={"active"}>Active</option>
                  <option value={"inactive"}>Inactive</option>
                </select>
              </div>
              {/* subscirpon plans  */}
              <div className="mb-6 flex flex-col">
                <span>Subscription Plans</span>
                {/* dropdwon list for active and inactive */}
                <select
                  onChange={(e) => setSubscription(e.target.value)}
                  name="period"
                  value={subscription}
                  className="block max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                >
                  <option value={""}>Select Subscription Plan</option>
                  <option value={"month"}>Monthly</option>
                  <option value={"year"}>Yearly</option>
                </select>
              </div>
              {/* features */}
              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium">
                  Features
                </label>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      className="block max-w-md px-4 py-3 text-sm placeholder-gray-500 bg-white border rounded"
                      type="text"
                      name="features"
                      value={feature.value}
                      onChange={(e) => {
                        const newFeatures = [...features];
                        newFeatures[index].value = e.target.value;
                        setFeatures(newFeatures);
                      }}
                      placeholder="Enter Product Feature"
                    />
                    <IoIosAddCircleOutline
                      className="ml-2 cursor-pointer text-2xl"
                      onClick={handleAddFeature}
                    />
                    {features.length > 1 && (
                      <IoIosRemoveCircleOutline
                        className="ml-2 cursor-pointer text-2xl"
                        onClick={() => handleRemoveFeature(index)}
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* image */}
              <div className="mb-6">
                <h6>Image </h6>
                <label className="block mb-2 text-sm font-medium">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    name="image"
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
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium " htmlFor>
                  Description
                </label>
                <textarea
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                  name="description"
                  rows={5}
                  placeholder="Write something..."
                  defaultValue={""}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
                      <span>Add Product</span>
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

export default AddProduct;
