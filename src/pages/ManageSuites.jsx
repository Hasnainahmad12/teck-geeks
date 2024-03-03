import React, { useState } from "react";
import SideNav from "../layouts/SideNav";
import { IoAddOutline } from "react-icons/io5";
import AddSuites from "../components/ManageSuites/AddSuites";
import EditSuites from "../components/ManageSuites/EditSuites";
import DeleteSuites from "../components/ManageSuites/DeleteSuties";
import { useGetSuitesQuery } from "../apis/EngageSuites/SuitesSlice";

function ManageSuites() {
  const [openAddSuites, setOpenAddSuites] = useState(false);
  const [openEditSuites, setOpenEditSuites] = useState(false);
  const [openDeleteSuites, setOpenDeleteSuites] = useState(false);
  const [suitesId, setSuitesId] = useState(null);

  const handleEdit = (id) => {
    setSuitesId(id);
    setOpenEditSuites(true);
  };

  const { data, error, isLoading } = useGetSuitesQuery();
  return (
    <SideNav>
      <section className=" lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className>
              <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300">
                Manage Engage Suites
              </h2>
              <div className="flex flex-wrap items-center justify-end px-4 py-2 border-b">
                <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0">
                  <button
                    onClick={() => setOpenAddSuites(true)}
                    className="flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <IoAddOutline />
                    <span className="mr-2 text-xs ">Add Suites</span>
                  </button>
                </div>
              </div>
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr className="text-xs text-left text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium">Image</th>
                    <th className="px-6 py-3 font-medium">Title</th>
                    <th className="px-6 py-3 font-medium">Price</th>
                    <th className="px-6 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td>Loading...</td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td>Error: {error?.data?.error}</td>
                    </tr>
                  ) : (
                    data.map((suite) => (
                      <tr key={suite.id} className="border-b border-gray-200">
                        <td className="px-6 py-4">
                          <img
                            src={suite?.image?.url}
                            alt={suite.title}
                            className="w-12 h-12"
                          />
                        </td>
                        <td className=" px-6 text-sm font-medium">
                          {suite.title}
                        </td>
                        <td className="px-6 text-sm">${suite.price}</td>
                        <td className="px-6 text-sm font-medium">
                          <button
                            onClick={() => handleEdit(suite._id)}
                            className="px-4 py-1 font-medium text-blue-500 border border-blue-500 rounded-md hover:text-gray-100 hover:bg-blue-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              setSuitesId(suite._id);
                              setOpenDeleteSuites(true);
                            }}
                            className="ml-2 px-4 py-1 font-medium text-red-500 border border-red-500 rounded-md hover:text-gray-100 hover:bg-red-500"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {openAddSuites && <AddSuites onClose={() => setOpenAddSuites(false)} />}
      {openEditSuites && (
        <EditSuites
          onClose={() => setOpenEditSuites(false)}
          suitesId={suitesId}
        />
      )}
      {openDeleteSuites && (
        <DeleteSuites
          onClose={() => setOpenDeleteSuites(false)}
          id={suitesId}
        />
      )}
    </SideNav>
  );
}

export default ManageSuites;
