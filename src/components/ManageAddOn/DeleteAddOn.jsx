import React, { useEffect } from "react";
import { useDeleteAddOnMutation } from "../../apis/Add-On/AddOn";
import toast from "react-hot-toast";

function DeleteAddOn({ onClose }) {

  const [deleteAddOn, { isLoading, isSuccess, isError, error }] =
    useDeleteAddOnMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Add-On deleted successfully");
      onClose();
    } else if (isError) {
      toast.error(error?.data?.error || "Failed to delete Add-On");
    }
  }, [isSuccess, isError, error]);

  const handleDelete = async () => {
    try {
      await deleteAddOn();
    } catch (error) {
      console.log(error);
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
          <div className="relative mx-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
            <div className="m-10 flex max-w-lg flex-col items-center px-8 py-10 text-gray-800 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-xl bg-red-50 p-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              {/* <img src="" alt=""> */}
              <p className="mt-4 text-center text-xl font-bold">
                Deleting Add-On
              </p>
              <p className="mt-2 text-center text-lg">
                Are you sure you want to delete the Add-On
                <span className="truncate font-medium"></span>?
              </p>
              <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <button
                  onClick={handleDelete}
                  className="whitespace-nowrap rounded-md bg-red-500 px-4 py-3 font-medium text-white"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 border-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth={4}
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  ) : (
                    "  Yes, delete the product"
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium"
                >
                  Cancel, keep the Add-ON
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAddOn;
