import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function EditModel({ isOpen, onClose }) {
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

                <div className="flex flex-col items-center px-8 py-10">
                  <label className="block w-full" htmlFor="name">
                    <p className="mb-1 text-sm text-gray-600">Name</p>
                    <input
                      className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                      type="text"
                      placeholder="Enter name"
                    />
                  </label>
                  <label className="mt-4 block w-full" htmlFor="name">
                    <p className="mb-1 text-sm text-gray-600">Email Address</p>
                    <input
                      className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                      type="email"
                      placeholder="Enter email"
                    />
                  </label>
                  <label className="mt-4 block w-full" htmlFor="name">
                    <p className="mb-1 text-sm text-gray-600">Subscription</p>
                    <select
                      className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                      type="email"
                    >
                      <option>None</option>
                      <option>Media Streaming/mo</option>
                      <option>Media Streaming/yr</option>
                      <option>Media with PWRTC/mo</option>
                      <option>Media with PWRTC/yr</option>
                    </select>
                  </label>
                  <label className="mt-4 block w-full" htmlFor="name">
                    <p className="mb-1 text-sm text-gray-600">Free Trail</p>
                    <select
                      className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                      type="email"
                    >
                      <option>None</option>
                      <option>Media Streaming/mo</option>
                      <option>Media Streaming/yr</option>
                      <option>Media with PWRTC/mo</option>
                      <option>Media with PWRTC/yr</option>
                    </select>
                  </label>
                  <label className="mt-4 block w-full" htmlFor="name">
                    <p className="mb-1 text-sm text-gray-600">Status</p>
                    <select
                      className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                      type="email"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </label>
                  {/* start date end date  */}
                    <div className="mt-4 w-full flex flex-col sm:flex-row sm:space-x-3 sm:space-y-0 space-y-3">
                        <div className="w-full">
                        <label className="block w-full" htmlFor="name">
                            <p className="mb-1 text-sm text-gray-600">
                            Start Date
                            </p>
                            <input
                            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                            type="date"
                            placeholder="Enter name"
                            />
                        </label>
                        </div>
                        <div className="w-full">
                        <label className="block w-full" htmlFor="name">
                            <p className="mb-1 text-sm text-gray-600">End Date</p>
                            <input
                            className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                            type="date"
                            placeholder="Enter name"
                            />
                        </label>
                        </div>
                    </div>

          
               

                    {/* update */}
                    <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                        Update
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
