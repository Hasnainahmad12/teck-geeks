import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import DeActivateCustomer from "./DeActivateCustomer";



function ViewModel({ isOpen, onClose }) {
  const [banCustomer, setBanCustomer] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <section className={`flex items-center h-screen bg-gray-100 font-poppins`}>
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto text-center lg:py-10 ">
        <div className>
          <div
            className="absolute top-0  z-[999] left-0 flex items-center justify-center w-full h-screen"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          >
            <div className="relative mx-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
              <div
                className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-auto"
                style={{ maxHeight: "80vh" }}
              >
                <div className="flex items-start justify-between">
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <IoMdClose className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div class="flex gap-3 px-4 py-5 sm:px-6">
                      <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          User Profile
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                          This is some information about the user.
                        </p>
                      </div>
                      <img
                        src="https://robohash.org/553c4c0abcae724cbf1d73fa4786fb0b?set=set4&bgset=&size=400x400"
                        alt=""
                        className="w-14 h-14 mx-auto rounded-full"
                      />
                    </div>
                    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Full name
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            John Doe
                          </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            johndoe@example.com
                          </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Subscription
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Cloud Server Monthly Plan
                          </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Status
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md">
                              Active
                            </span>
                          </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Amount Spent
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $49,000
                          </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Start Date
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Mar 19, 2020
                          </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            End Date
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Mar 19, 2020
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                    onClick={() => setBanCustomer(true)}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-blue-500 border border-transparent border-blue-600 rounded-md shadow-sm bg-blue-50 hover:text-gray-100 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                    Deactivate
                    </button>
                    <button
                    onClick={onClose}
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {banCustomer && (
        <DeActivateCustomer
          isOpen={banCustomer}
          onClose={() => setBanCustomer(false)}
        />
      )}
    </section>
  );
}

export default ViewModel;
