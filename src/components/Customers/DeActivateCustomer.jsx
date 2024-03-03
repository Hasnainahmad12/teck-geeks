import React from "react";
import { useDeleteCustomerMutation } from "../../apis/Customers/CustomersList";

function CustomerDelete({ id, onClose }) {
  const [
    deleteCustomer,
    { isLoading: isDeleting, isError: deleteError, isSuccess: deleteSuccess },
  ] = useDeleteCustomerMutation();

  const handleDleteCustomer = async () => {
    await deleteCustomer(id);
    onClose();
  };

  return (
    <section className="flex items-center h-screen bg-gray-100 font-poppins">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto text-center lg:py-10 ">
        <div className x-data="{ open: false }">
          <div
            className="absolute z-[9999] top-0 left-0 flex items-center justify-center w-full h-full"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
            x-show="open"
          >
            <div className="relative mx-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 text-blue-600 bi bi-exclamation-triangle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Are you sure want to Delete this account?
                    </h2>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleDleteCustomer}
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent border-red-600 rounded-md shadow-sm bg-red-500 hover:text-gray-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confrim
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerDelete;
