import React from "react";
import SideNav from "../../layouts/SideNav";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../redux/AdminReducer/AdminReducer";

function MyAccount() {
  const user = useSelector(selectAdmin);

  console.log(user);
  return (
    <SideNav>
      <div className="my-4 bg-white  max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <p className="font-medium">Account Details</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Name</p>
          <div className=" ml-2 flex flex-col sm:flex-row text-gray-500 items-center">
            {user?.adminData?.username}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Email</p>
          <div className=" ml-2 flex flex-col sm:flex-row text-gray-500 items-center">
            {user?.adminData?.email}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
          <p className="shrink-0 w-32 font-medium">Role</p>
          <div className=" ml-2 flex flex-col sm:flex-row text-gray-500 items-center">
            {user?.adminData?.role === "admin" ? (
              <>
                <MdAdminPanelSettings className="mr-2 text-2xl" />
                {user?.adminData?.role}
              </>
            ) : (
              <>
                <IoPersonCircleOutline className="mr-2 text-2xl" />
                {user?.adminData?.role}
              </>
            )}
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 py-4  lg:flex-row">
          <div className="shrink-0 w-32  sm:py-4">
            <p className="mb-auto font-medium">Avatar</p>
            <p className="text-sm text-gray-600">Change your avatar</p>
          </div>
          <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
            <img
              src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
              className="h-16 w-16 rounded-full"
            />
            <p className="text-sm text-gray-600">
              Drop your desired image file here to start the upload
            </p>
            <input
              type="file"
              className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
            />
          </div>
        </div> */}
        {/* <div className="flex justify-end py-4 sm:hidden">
          <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
            Cancel
          </button>
          <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
            Save
          </button>
        </div> */}
      </div>
    </SideNav>
  );
}

export default MyAccount;
