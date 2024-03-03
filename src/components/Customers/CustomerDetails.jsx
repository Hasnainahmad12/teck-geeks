import React, { useEffect, useState } from "react";
import SideNav from "../../layouts/SideNav";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  useGetCustomersQuery,
  useUpdateCustomerMutation,
} from "../../apis/Customers/CustomersList";
import toast from "react-hot-toast";

function CustomerDetails() {
  
  const [FullName, setFullName] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Password, setPassword] = useState();
  const [SubscriptionPlan, setSubscriptionPlan] = useState();
  const [SubscriptionStatus, setSubscriptionStatus] = useState();
  const [Joind, setJoind] = useState();

  const navigate = useNavigate();

  const { data, error, isLoading } = useGetCustomersQuery();
  const { id } = useParams();
  const customer = data?.users?.find((customer) => customer._id === id);

  const [
    updateCustomer,
    {
      isLoading: isUpdating,
      isError: updateError,
      isSuccess: updateSuccess,
      error: updateErrorMsg,
    },
  ] = useUpdateCustomerMutation();

  useEffect(() => {
    setFullName(customer?.username || "N/A");
    setEmail(customer?.email || "N/A");
    setPhoneNumber(customer?.phone || ""); // As phoneNumber is not available
    setSubscriptionPlan(customer?.subscription?.title || "N/A"); // As subscriptionPlan is not available
    setSubscriptionStatus(customer?.subscriptionStatus || "Inactive"); // As subscriptionStatus is not available
    setJoind(customer?.createdAt || "N/A");
  }, [customer]);

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Customer updated successfully");
      navigate(-1);
    } else if (updateError) {
      toast.error(updateErrorMsg?.data?.error || "something went wrong");
    }
  }, [updateSuccess, updateError, updateErrorMsg]);

  const calculateTimeDifference = (date) => {
    const now = new Date();
    const joinedDate = new Date(date);
    const diffInMilliseconds = Math.abs(now - joinedDate);
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffInMinutes = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (diffInDays > 0) {
      return `${diffInDays} day(s) ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour(s) ago`;
    } else {
      return `${diffInMinutes} minute(s) ago`;
    }
  };

  let joinedTime = calculateTimeDifference(Joind);

  const handleUpdateCustomer = async () => {
    const formData = new FormData();
    formData.append("username", FullName);
    formData.append("email", Email);
    if (Password) {
      formData.append("password", Password);
    }
    formData.append("phone", PhoneNumber);

    await updateCustomer({ id, data: formData });
  };

  return (
    <SideNav>
      <section className="lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="overflow-x-auto bg-white rounded shadow">
            <div className="flex justify-between ">
              <h2 className="px-6 py-4 pb-4 text-xl font-medium  border-gray-300">
                Customer Detials
              </h2>

              <Link
                to="/customer-list"
                className="px-6 py-4 text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                <svg
                  className="inline-block w-3 h-3 mr-2 stroke-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 6H1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6 10.5L1.5 6L6 1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Back
              </Link>
            </div>

            {/* form  first name, last name*/}
            <div className="flex flex-col my-6 mx-10 ">
              <div className="flex items-center">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="first-name"
                >
                  Full Name
                </label>
                <input
                  className="w-2/3 px-3 py-2 text-gray-700 border rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={FullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="First name"
                />
              </div>

              <div className="flex items-center mt-4">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="last-name"
                >
                  Email
                </label>
                <input
                  className="w-2/3 px-3 py-2 text-gray-700 border rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  type="email"
                  name="last-name"
                  id="last-name"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center mt-4">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="telephone"
                >
                  Phone Number
                </label>
                <input
                  className="w-2/3 px-3 py-2 text-gray-700 border rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  type="tel"
                  name="telephone"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="telephone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex items-center mt-4">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  New Password
                </label>
                <input
                  className="w-2/3 px-3 py-2 text-gray-700 border rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  type="password"
                  name="password"
                  id="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter New Password"
                />
              </div>
              <div className="flex items-center mt-4">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="subscriptions plan"
                >
                  Subscription Plan
                </label>
                <div className="ml-4">{SubscriptionPlan}</div>
              </div>
              <div className="flex items-center mt-4">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="subscriptions plan"
                >
                  Subscription Status
                </label>
                <div className="ml-4">
                  <span className="inline-block px-2 py-1 text-red-700 bg-red-100 rounded-md">
                    {SubscriptionStatus}
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <label
                  className="w-1/3 text-sm font-medium text-gray-700"
                  htmlFor="last-name"
                >
                  Joind
                </label>
                <div className="ml-4">{joinedTime}</div>
              </div>
              {/* submit button */}
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  onClick={handleUpdateCustomer}
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-blue-700 focus:outline-none"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SideNav>
  );
}

export default CustomerDetails;
