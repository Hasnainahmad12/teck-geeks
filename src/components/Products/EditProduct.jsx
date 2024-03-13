import React, { useState, useEffect } from "react";
import SideNav from "../../layouts/SideNav";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  useGetPlansQuery,
} from "../../apis/AddBrand/AddBrandSlice";
import toast from "react-hot-toast";
import { useGetCategoryQuery } from "../../apis/Category/Category";
import axios from "axios";
import { useUpdateProductMutation } from "../../apis/Products/Products";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddThumbnail from "./AddThumbnail";

function EditProduct() {
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
 
  const handleChangeeng = (value) => {
      setDescription(value);
  };

  const navigate = useNavigate();

  // const { data } = useGetPlansQuery();
  const [updatePlan, { isLoading, isSuccess, isError, error }] =
    useUpdateProductMutation();
  const { id } = useParams();

  const { data: brandsData, isError: brandsError } = useGetPlansQuery();
  const { data: categoryData, isError: categoryDataError } = useGetCategoryQuery();

  useEffect(() => {
    const handleUpdateData = async () => {
      try {
        const res = await axios.get(`https://fierce-veil-elk.cyclic.app/products/${id}`);
        console.log(res?.data);
        setProductName(res?.data?.data?.productname || "");
        setSlug(res?.data?.data?.slug || "");
        setBrands(res?.data?.data?.brands || "");
        setHardisk(res?.data?.data?.hardisk || "");
        setCpu(res?.data?.data?.cpu || "");
        setOperatingSysytem(res?.data?.data?.operatingsysytem || "");
        setRam(res?.data?.data?.ram || "");
        setAsin(res?.data?.data?.asin || "");
        setStock(res?.data?.data?.stock || "");
        setDescription(res?.data?.data?.description[0] || "");
        setPrice(res?.data?.data?.price || "");
        setStatus(res?.data?.data?.status.toString() || "");
        setCategoryId(res?.data?.data?.categoryId || "");
        setPreview(res?.data?.data?.image || "");
      } 
      catch (error) {
        toast.error(error?.data?.error || "Error fetching Product data");
      }
    };
      
    handleUpdateData();
  }, [id]);

  useEffect(() => {
    if (brandsError) {
      toast.error("Failed to fetch brands");
    }
    if (categoryDataError) {
      toast.error("Failed to fetch category");
    }
  }, [brandsError, categoryDataError]);


  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully");
      navigate("/products");
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


  const modules = {
      toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' }
          ],
          ['link', 'image', 'video'],
          ['clean'], // <-- Comma was missing here
          [{ 'color': [] }],
          [{ 'background': [] }],
          [{ 'font': [] }],
      ],
      clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false
      },
    
  };

  const formats = [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'color',
      'background',

  ];

  return (
    <SideNav>
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl px-4 mx-auto ">
          <div className="p-6 ~bg-white rounded-md shadow bg-white">
            <div className="flex justify-between  items-center">
              <h2 className="mb-6 text-xl  font-medium leading-6 text-gray-900 ">
                Edit Product
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
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Enter Product Name"
                />
              </div>
            
              <div className="w-full flex justify-between gap-4">
                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    Status
                  </label>
                  <select
                    className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
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
                  <input className="
                    block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded "
                    type="text"
                    name="hardisk"
                    value={hardisk}
                    onChange={(e) => setHardisk(e.target.value)}
                    placeholder="Enter Hardisk"
                  />

                </div>

                <div className="mb-6 w-full">
                  <label className="block mb-2 text-sm font-medium" htmlFor>
                    CPU
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
                      name="operatingSystem"
                      onChange={(e) => setOperatingSysytem(e.target.value)}
                      placeholder="
                      Enter Operating System"
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
                      <option key={categoryItem.id} value={categoryItem?.categoryId}>
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
                  value={stock}
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
                    value={price}
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
                <h6>Thumbnail </h6>
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

              <div className="mb-6">
                <div className="w-full font-body sm:text-base text-sm flex flex-col gap-2">
                  <label className="block mb-2 text-sm font-medium " htmlFor>
                    Description
                  </label>
                  <ReactQuill theme="snow" modules={modules} formats={formats} className=' h-40'
                    value={description}
                    onChange={handleChangeeng} />
                </div>
              </div>

              <div className="mt-24">
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


          <div>
            <AddThumbnail />
          </div>
        </div>
      </section>
    </SideNav>
  );
}

export default EditProduct;
