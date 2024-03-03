import React from "react";

function Filters({ isOpen, onClose }) {
  return (
    <section className={`flex items-center h-screen bg-gray-100 font-poppins`}>
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto text-center lg:py-10 ">
        <div className>
          <div
            className="absolute top-0  z-[999] left-0 flex items-center justify-center w-full h-screen"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          >
            <details
              open
              className="m-10 max-w-md w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700 bg-white"
            >
              <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                <span className="text-sm font-medium"> Toggle Filters </span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <form
                action
                className="flex border-t border-gray-200 lg:border-t-0"
              >
                <fieldset className="w-full">
                  <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                    Subscription Plans
                  </legend>
                  <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                      <input
                        id="New"
                        type="checkbox"
                        name="type[New]"
                        className="h-5 w-5 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="New" className="ml-3 text-sm font-medium">
                        {" "}
                        Clud Server
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Used"
                        type="checkbox"
                        name="type[Used]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="Used"
                        className="ml-3 text-sm font-medium"
                      >
                        Media Streaming
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Branded"
                        type="checkbox"
                        name="type[Branded]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="Branded"
                        className="ml-3 text-sm font-medium"
                      >
                        {" "}
                        BlueMidx solution
                      </label>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        className="text-xs text-gray-500 underline"
                      >
                        Reset Plans
                      </button>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="w-full">
                  <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                    Subscription Status
                  </legend>
                  <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                      <input
                        id="New"
                        type="checkbox"
                        name="type[New]"
                        className="h-5 w-5 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="New" className="ml-3 text-sm font-medium">
                        {" "}
                        Active
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Used"
                        type="checkbox"
                        name="type[Used]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="Used"
                        className="ml-3 text-sm font-medium"
                      >
                        Inactive
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Branded"
                        type="checkbox"
                        name="type[Branded]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="Branded"
                        className="ml-3 text-sm font-medium"
                      >
                        {" "}
                        Expired
                      </label>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        className="text-xs text-gray-500 underline"
                      >
                        Reset Status
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className>
                <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                  <button
                    name="reset"
                    type="button"
                    className="rounded text-xs font-medium text-gray-600 underline"
                  >
                    Reset All
                  </button>
                  <button
                    onClick={onClose}
                    name="commit"
                    type="button"
                    className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filters;
