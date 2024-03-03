import React, { useEffect, useState } from "react";
import { useAddAdminMutation } from "../../apis/Admin/AdminSlice";
import toast from "react-hot-toast";

function AddRole({ isOpen, onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const [addRole, { isLoading, isError, isSuccess, error }] =
    useAddAdminMutation();

  const handleAddRole = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("username", fullName);
    formData.append("role", role);

    try {
      const response = await addRole(formData);
      console.log(response);
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Adminstatior added successfully");
    } else if (isError) {
      toast.error("something went wrong");
    }
  }, [isSuccess, isError, error]);

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
              <div class="mb-6">
                <label for="" class="block mb-2 text-sm font-medium ">
                  Full Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded "
                  placeholder="Full name...."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div class="mb-6">
                <label for="" class="block mb-2 text-sm font-medium ">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded "
                  placeholder="Email...."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label for="" class="block mb-2 text-sm font-medium ">
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded "
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb">
                <label for="" class="block mb-2 text-sm font-medium ">
                  Role
                </label>
                <select
                  name=""
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  id=""
                  className="block w-full px-4 py-3 mb-2 text-sm bg-gray-100 border rounded "
                >
                  <option value="admin">Admin</option>
                  <option value="operator">Operator</option>
                </select>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleAddRole}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                Add
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

export default AddRole;
