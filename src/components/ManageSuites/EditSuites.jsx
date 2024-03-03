import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useGetSuitesQuery,
  useUpdateSuiteMutation,
} from "../../apis/EngageSuites/SuitesSlice";
import { IoCloudUploadOutline } from "react-icons/io5";

function EditSuites({ onClose, suitesId }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState("");

  const { data, error, isLoading } = useGetSuitesQuery();
  const suite = data.find((suite) => suite?._id === suitesId);


  const [
    updateSuite,
    {
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      error: updateError,
      isLoading: updateLoading,
    },
  ] = useUpdateSuiteMutation();

  useEffect(() => {
    if (suite) {
      setTitle(suite?.title);
      setPrice(suite?.price);
      setDescription(suite?.description);
      setPreview(suite?.image?.url);
    }
  }, [data]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Suite Updated Successfully");
      onClose();
    }
    if (isUpdateError) {
      toast.error(updateError?.data?.error || "Error Creating Suite");
    }
  }, [isUpdateSuccess, isUpdateError, updateError]);

  const handleUpdateSuite = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    if (image instanceof File) {
      formData.append("image", image);
    }
    try {
      await updateSuite({ id: suitesId, data: formData });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div>
                <h3
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                  id="modal-title"
                >
                  Add Engage Suite
                </h3>
              </div>
              <div class="mb-6">
                <label for="" className="block mb-2 text-sm font-medium ">
                  Title
                </label>
                <input
                  type="Add On Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded "
                  placeholder="Add On title...."
                  required
                />
              </div>
              <div class="mb-6">
                <label for="" className="block mb-2 text-sm font-medium ">
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
                    value={price}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleUpdateSuite}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                {updateLoading ? "Updating..." : "Update"}
              </button>
              <button
                onClick={onClose}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSuites;
