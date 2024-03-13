import React, { useState, useEffect } from "react";
import SideNav from "../../layouts/SideNav";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { useAddPlanMutation, useGetPlansQuery } from "../../apis/AddBrand/AddBrandSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../apis/Products/Products";
import { useGetHardDeskQuery } from "../../apis/AddHardDesk/AddHardDesk";
import { useGetCpuQuery } from "../../apis/Cpu/Cpu";
import { useGetOperatingSystemQuery } from "../../apis/OperatingSystem/OperatingSystem";
import { useGetRamQuery } from "../../apis/Ram/Ram";
import { useGetAsinQuery } from "../../apis/Asin/Asin";
import { useGetCategoryQuery } from "../../apis/Category/Category";

function AddProduct() {
  const [preview, setPreview] = useState(null);
  const [productName, setProductName] = useState("");
  const [slug, setSlug] = useState("");
  const [brands, setBrands] = useState("");
  const [hardisk, setHardisk] = useState("");
  const [cpu, setCpu] = useState("");
  const [operatingSysytem, setOperatingSysytem] = useState("");
  const [ram, setRam] = useState("");
  const [asin, setAsin] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const [addPlan, { isLoading, error, isSuccess, isError }] =
    useAddProductMutation();

  const { data: brandsData, isLoading: brandsLoading, isError: brandsError } = useGetPlansQuery();
  const { data: hardDisksData, isError: hardDisksError } = useGetHardDeskQuery();
  const { data: cpuData, isError: cpuDataError } = useGetCpuQuery();
  const { data: operatinSystemData, isError: operatinSystemDataError } = useGetOperatingSystemQuery();
  const { data: ramData, isError: ramDataError } = useGetRamQuery();
  const { data: asinData, isError: asinDataError } = useGetAsinQuery();
  const { data: categoryData, isError: categoryDataError } = useGetCategoryQuery();

  useEffect(() => {
    if (brandsError) {
      toast.error("Failed to fetch brands");
    }
    if (hardDisksError) {
      toast.error("Failed to fetch hard disks");
    }
    if (cpuDataError) {
      toast.error("Failed to fetch cpu");
    }
    if (operatinSystemDataError) {
      toast.error("Failed to fetch operating system");
    }
    if (ramDataError) {
      toast.error("Failed to fetch ram");
    }
    if (asinDataError) {
      toast.error("Failed to fetch asin");
    }
    if (categoryDataError) {
      toast.error("Failed to fetch category");
    }
  }, [brandsError, hardDisksError, cpuDataError, operatinSystemDataError, ramDataError, asinDataError, categoryDataError]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added successfully");
      navigate("/products");
    } else if (isError) {
      toast.error(error?.data?.error || "Something went wrong");
      console.log(error);
    }
  }, [isSuccess, isError, error]);


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
    formData.append("productname", productName);
    formData.append("status", status);
    formData.append("categoryId", categoryId);
    formData.append("slug", slug);
    formData.append("brands", brands);
    formData.append("hardisk", hardisk);
    formData.append("cpu", cpu);
    formData.append("operatingsysytem", operatingSysytem);
    formData.append("ram", ram);
    formData.append("asin", asin);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("image", image);

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
                  Product Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                  type="text"
                  name="productName"
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Enter Product Name"
                />
              </div>
              {/* <div className="mb-6 flex flex-col">
                <span>Status</span>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  name="status"
                  value={status}
                  className="block max-w-md px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                >
                  <option value={""}>Select Status</option>
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div> */}

              <div className="w-full flex justify-between gap-4">
                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Status
                  </label>
                  <select
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                    onChange={(e) => setStatus(e.target.value)}
                    name="status"
                    value={status}
                  >
                    <option value={""}>Select Status</option>
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>

                </div>

                <div className="mb-6 w-full">
                  <div className="mb-6 w-full">
                    <label className="block mb-2 text-sm font-medium" htmlFor="brands">
                      Brands
                    </label>
                    <select
                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                      name="brands"
                      onChange={(e) => setBrands(e.target.value)}
                      value={brands}
                    >
                      <option value="">Select Brand</option>
                      {brandsData?.data?.map((brand) => (
                        <option key={brand.id} value={brand?.brandname}>
                          {brand?.brandname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-between gap-4">
                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Hardisk
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                      type="text"
                      name="hardisk"
                      onChange={(e) => setHardisk(e.target.value)}
                      placeholder="Enter Hardisk"
                      value={hardisk}
                    />
                </div>

                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Cpu
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                      type="text"
                      name="cpu"
                      onChange={(e) => setCpu(e.target.value)}
                      placeholder="Enter Cpu"
                      value={cpu}
                    />
                </div>
              </div>

              <div className="w-full flex justify-between gap-4">
                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Operating Sysytem
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                      type="text"
                      name="operatingsysytem"
                      onChange={(e) => setOperatingSysytem(e.target.value)}
                      placeholder="Enter Operating System"
                      value={operatingSysytem}
                    />
                </div>

                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Ram
                  </label>
                  <input className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                    type="text"
                    name="ram"
                    onChange={(e) => setRam(e.target.value)}
                    placeholder="Enter Ram"
                    value={ram}
                  />
                </div>
              </div>

              <div className="w-full flex justify-between gap-4">
                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Asin
                  </label>
                  <input className="
                    block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                      type="text"
                      name="asin"
                      onChange={(e) => setAsin(e.target.value)}
                      placeholder="Enter Asin"
                      value={asin}
                      />
                      
                  {/* <select
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                    name="asin"
                    onChange={(e) => setAsin(e.target.value)}
                    value={asin}
                  >
                    <option value="">Select Asin</option>
                    {asinData?.data?.map((asinItem) => (
                      <option key={asinItem.id} value={asinItem?.asinname}>
                        {asinItem?.asinname}
                      </option>
                    ))}
                  </select> */}
                </div> 

                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Category 
                  </label>
                  <select
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                    name="asin"
                    onChange={(e) => setCategoryId(e.target.value)}
                    value={categoryId}
                  >
                    <option value="">Select Category</option>
                    {categoryData?.data?.map((categoryItem) => (
                      <option key={categoryItem.id} value={categoryItem?._id}>
                        {categoryItem?.categoryname}
                      </option>
                    ))}
                  </select>
                </div> 
              </div>
          
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium" htmlFor>
                  Stock
                </label>
                <input
                  className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                  type="number"
                  name="stock"
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Enter Stock"
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
