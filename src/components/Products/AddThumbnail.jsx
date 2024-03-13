import React, { useState, useEffect } from "react";
import SideNav from "../../layouts/SideNav";
import { IoArrowBackOutline, IoCloudUploadOutline } from "react-icons/io5";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useUpdatethumbnailMutation,
} from "../../apis/Products/Products";

function AddThumbnail() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBackImage, setSelectedBackImage] = useState(null);
  const [imageOptional1, setImageOptional1] = useState(null);
  const [imageOptional2, setImageOptional2] = useState(null);
  const [imageOptional3, setImageOptional3] = useState(null);
  const navigate = useNavigate();
 
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setSelectedImage(imageUrl);
  };

  const handleBackImageChange = (event) => {
    const backImageFile = event.target.files[0];
    const backImageUrl = URL.createObjectURL(backImageFile);
    setSelectedBackImage(backImageUrl);
  };

  const handleImageOptional1Change = (event) => {
    const imageOptional1File = event.target.files[0];
    const imageOptional1Url = URL.createObjectURL(imageOptional1File);
    setImageOptional1(imageOptional1Url);
  };

  const handleImageOptional2Change = (event) => {
    const imageOptional2File = event.target.files[0];
    const imageOptional2Url = URL.createObjectURL(imageOptional2File);
    setImageOptional2(imageOptional2Url);
  };

  const handleImageOptional3Change = (event) => {
    const imageOptional3File = event.target.files[0];
    const imageOptional3Url = URL.createObjectURL(imageOptional3File);
    setImageOptional3(imageOptional3Url);
  };

  const [updatePlan, { isLoading, isSuccess, isError, error }] =
    useUpdatethumbnailMutation();
  const { id } = useParams();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product Thumbnail Added successfully");
      navigate("/products");
    } else if (isError) {
      toast.error(error?.data?.error || "something went wrong");
    }
  }, [isError, isSuccess, error]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    // Append each image to formData if they exist
    if (selectedImage) formData.append("thumbnails", selectedImage);
    if (selectedBackImage) formData.append("thumbnails", selectedBackImage);
    if (imageOptional1) formData.append("thumbnails", imageOptional1);
    if (imageOptional2) formData.append("thumbnails", imageOptional2);
    if (imageOptional3) formData.append("thumbnails", imageOptional3);
  
    try {
      await updatePlan(id, formData);
    } catch (error) {
      console.error("Error updating thumbnails:", error);
      // Handle error
      return;
    }
  
    // If successful, handle success
    toast.success("Product Thumbnail(s) added successfully");
    navigate("/products");
  };
  

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-4xl mx-auto ">
        <div className="p-6 ~bg-white rounded-md shadow bg-white">
          <div className="flex justify-between  items-center">
            <h2 className="mb-6 text-xl  font-medium leading-6 text-gray-900 ">
              Add Images
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="container px-4 mx-auto" />

            <div>
              {/* Image container */}
              <div className="flex justify-between items-center gap-7 flex-wrap mt-10">
                <div>
                  <span className="text-secondary font-body sm:text-base text-sm">
                    Add Image1
                  </span>
                  <div className="border-2 border-dashed h-56 w-56 relative flex justify-center">
                    <div className="absolute -bottom-4 flex justify-center items-center h-10 w-3/4 bg-blue-500 text-white font-body">
                      <label
                        htmlFor="imageInput"
                        className="cursor-pointer whitespace-nowrap"
                      >
                        Select Image
                        <input
                          type="file"
                          id="imageInput"
                          // accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                    {selectedImage && (
                      <div className="h-56 flex justify-center items-center object-contain w-auto">
                        <img
                          src={selectedImage}
                          className="h-56 w-56"
                          alt="Selected Image"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-secondary font-body sm:text-base text-sm">
                    Add Image2
                  </span>
                  <div className="border-2 border-dashed h-56 w-56 relative flex justify-center">
                    <div className="absolute -bottom-4 flex justify-center items-center h-10 w-3/4 bg-blue-500 text-white font-body">
                      <label
                        htmlFor="backImageInput"
                        className="cursor-pointer whitespace-nowrap"
                      >
                        Select Image
                        <input
                          type="file"
                          id="backImageInput"
                          onChange={handleBackImageChange}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                    {selectedBackImage && (
                      <div className="h-56 flex justify-center items-center object-contain w-auto">
                        <img
                          src={selectedBackImage}
                          className="h-56 w-56"
                          alt="Selected Image"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* optional images code */}
              <div className="flex justify-center">
                <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16 sm:mt-20 mt-24">
                  <div>
                    <span className="text-secondary font-body sm:text-base text-sm">
                      Add Image3
                    </span>
                    <div className="border-2 border-dashed h-56 w-56 relative flex justify-center">
                      <div className="absolute -bottom-4 flex justify-center items-center h-10 w-3/4 bg-blue-500 text-white font-body">
                        <label
                          htmlFor="imageOptional1Input"
                          className="cursor-pointer whitespace-nowrap"
                        >
                          Select Image
                          <input
                            type="file"
                            id="imageOptional1Input"
                            onChange={handleImageOptional1Change}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      {imageOptional1 && (
                        <div className="h-56 flex justify-center items-center object-contain w-auto">
                          <img
                            src={imageOptional1}
                            className="h-56 w-56"
                            alt="Selected Image"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="text-secondary font-body sm:text-base text-sm">
                      Add Image4
                    </span>
                    <div className="border-2 border-dashed h-56 w-56 relative flex justify-center">
                      <div className="absolute -bottom-4 flex justify-center items-center h-10 w-3/4 bg-blue-500 text-white font-body">
                        <label
                          htmlFor="imageOptional2Input"
                          className="cursor-pointer whitespace-nowrap"
                        >
                          Select Image
                          <input
                            type="file"
                            id="imageOptional2Input"
                            onChange={handleImageOptional2Change}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      {imageOptional2 && (
                        <div className="h-56 flex justify-center items-center object-contain w-auto">
                          <img
                            src={imageOptional2}
                            className="h-56 w-56"
                            alt="Selected Image"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="text-secondary font-body sm:text-base text-sm">
                      Add Image5
                    </span>
                    <div className="border-2 border-dashed h-56 w-56 relative flex justify-center">
                      <div className="absolute -bottom-4 flex justify-center items-center h-10 w-3/4 bg-blue-500 text-white font-body">
                        <label
                          htmlFor="imageOptional3Input"
                          className="cursor-pointer whitespace-nowrap"
                        >
                          Select Image
                          <input
                            type="file"
                            id="imageOptional3Input"
                            onChange={handleImageOptional3Change}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      {imageOptional3 && (
                        <div className="h-56 flex justify-center items-center object-contain w-auto">
                          <img
                            src={imageOptional3}
                            className="h-56 w-56"
                            alt="Selected Image"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
                    "Add Images"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddThumbnail;
