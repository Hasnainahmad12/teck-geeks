import React, { useEffect } from "react";
import { Images } from "../assets/Images";
import { useLoginAdminMutation } from "../apis/Admin/AdminSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setAdmin } from "../redux/AdminReducer/AdminReducer";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAdmin, { data, isLoading, error, isSuccess, isError }] =
    useLoginAdminMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("email");
    const password = data.get("password");
    loginAdmin({ email: username, password });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Admin Login Successfully");
      navigate("/dashboard");
      dispatch(setAdmin(data));
    }
    if (isError) {
      toast.error(error?.data?.error || "Login Failed");
    }
  }, [isSuccess, isError]);

  return (
    <div className="flex min-h-screen  w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-green-600 absolute a-z-10 -left-20 -top-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width={40}
                height={40}
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x={0} y={0} width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth={1}
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-green-600 absolute a-z-10 -right-20 -bottom-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width={40}
                height={40}
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x={0} y={0} width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth={1}
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#b)"
            />
          </svg>
        </div>
        {/* Register */}
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            {/* Logo */}
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a
                href="#"
                className="flex cursor-pointer items-center  text-black no-underline hover:text-indigo-500"
              >
                {/* <h1 className="text-center text-4xl text-black font-bold">
                  BlueMid
                </h1> */}
                <img
                  className=""
                  src={Images.Logo}
                  alt="futurism"
                />
              </a>
            </div>
            {/* /Logo */}
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
              Welcome to Tech Geeks!
            </h4>
            <p className="mb-6 text-gray-500">
              Please sign-in to access admin dashboard
            </p>
            <form id className="mb-4" onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email"
                  placeholder="Enter your email or username"
                  autofocus
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="block">
                  <input
                    className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-[#111111] focus:border-[#0b0b0b] focus:shadow"
                    type="checkbox"
                    id="remember-me"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3e%3cpath fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10l3 3l6-6"/%3e%3c/svg%3e")',
                    }}
                    defaultChecked
                  />
                  <label className="inline-block" htmlFor="remember-me">
                    {" "}
                    Remember Me{" "}
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="w-full flex justify-center items-center cursor-pointer select-none rounded-md border bg-gradient-to-r from-[#56ae69] to-[#7abf89] py-2 px-5 text-center align-middle text-sm text-white shadow  focus:text-white focus:shadow-none"
                  type="submit"
                >
                   {isLoading ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3 ..."
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    ) : (
                      <span>Sign in </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* /Register */}
      </div>
    </div>
  );
}

export default Login;
