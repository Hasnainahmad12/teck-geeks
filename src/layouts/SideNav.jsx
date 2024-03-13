import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { BsInboxes } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaUsers } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Images } from "../assets/Images";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyAdmin, selectAdmin } from "../redux/AdminReducer/AdminReducer";

function SideNav({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [isCustomersOpen, setIsCustomersOpen] = useState(false);
  const [isMangeOpen, setIsMangeOpen] = useState(false);
  const [isMangeSliderOpen, setIsMangeSliderOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const admin = useSelector(selectAdmin);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleCustomers = () => {
    setIsCustomersOpen(!isCustomersOpen);
  };
  const handleToggleMange = () => {
    setIsMangeOpen(!isMangeOpen);
  };
  const handleToggleMangeSlider = () => {
    setIsMangeSliderOpen(!isMangeSliderOpen);
  };

  const handleLogut = () => {
    dispatch(emptyAdmin());
    navigate("/");
  };

  return (
    <>
      <div className="bg-gray-100 lg:h-screen">
        <div className="body-content" x-data="{ open: true }">
          <div className="relative lg:block navbar-menu">
            <nav
              className={`fixed top-0 transition-all lg:mt-0 mt-16 left-0 bottom-0 flex flex-col shadow bg-primary-sidebar overflow-hidden z-50 ${
                isOpen ? "w-[280px]" : "w-0"
              }`}
              id="sidenav"
            >
              <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-300 ">
                <Link to="/dashboard">
                  <img
                    src={Images.Logo}
                    alt="logo"
                    className="object-contain "
                  />
                </Link>
              </div>
              <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                <ul className="mb-8 text-sm ">
                  <li>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-6 py-4 text-gray-700 group hover:text-gray-600 hover:bg-gray-100"
                    >
                      <span
                        className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                                            justify-center rounded-lg bg-D2D180 bg-center 
                                                             text-center xl:p-2.5"
                      >
                        <AiOutlineDashboard className="w-5 h-5" />
                      </span>
                      <span className="font-semibold">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <div
                      className="flex items-center px-6 py-4 text-gray-700 group hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                      onClick={handleToggleMange}
                    >
                      <span
                        className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                    justify-center rounded-lg bg-white bg-center 
                    text-center xl:p-2.5"
                      >
                        <FaUsers className="w-5 h-5" />
                      </span>
                      <span>Available Services</span>
                      <span className="inline-block ml-auto sidenav-arrow">
                        {isMangeOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                    {isMangeOpen && (
                      <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu">
                        <ul className="text-sm">
                          <li>
                            <Link
                              to="/brands"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Brands
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/hard-desk"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Hard Desk
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/cpu"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Cpu
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/operating-system"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Operating System
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/ram"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                RAM
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/asin"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Asin
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/category"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Category
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Products
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>


                  <li>
                    <div
                      className="flex items-center px-6 py-4 text-gray-700 group hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                      onClick={handleToggleMangeSlider}
                    >
                      <span
                        className="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                    justify-center rounded-lg bg-white bg-center 
                    text-center xl:p-2.5"
                      >
                        <FaUsers className="w-5 h-5" />
                      </span>
                      <span>Media</span>
                      <span className="inline-block ml-auto sidenav-arrow">
                        {isMangeSliderOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                    {isMangeSliderOpen && (
                      <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu">
                        <ul className="text-sm">
                          <li>
                            <Link
                              to="/slider"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Slider
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/banner"
                              className="flex items-center py-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                            >
                              <span className="text-gray-700">
                                Banner
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* top nav */}
        <div
          className={`mx-auto transition-all content-wrapper ${
            isOpen ? "lg:ml-[280px]" : "lg:ml-0"
          }`}
          id="dash"
        >
          <section className="sticky top-0 z-40 px-3 py-3 bg-white shadow text-gray-100 lg:px-5">
            <nav className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <button
                    onClick={toggleSideNav}
                    className="px-2 py-3 t bg-blue-100 rounded text-gray-400"
                  >
                    <svg
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center">
                  <div
                    className="relative text-left lg:inline-block"
                    x-data="{ open: false }"
                  >
                    <div>
                      <button
                        onClick={() => setShowProfile(!showProfile)}
                        className="flex items-center"
                      >
                        <div className="hidden mr-3 text-right md:block">
                          <p className="text-sm font-bold text-black">
                            {" "}
                            {admin?.adminData?.username}
                          </p>
                        </div>
                        <div className="mr-2">
                          <div className="w-8 h-8 flex rounded-full uppercase bg-gray-400 text-white text-center items-center justify-center">
                            <img src={Images.Logo} alt=""/>
                          </div>
                        </div>
                        <span>
                          <svg
                            className="text-gray-400"
                            width={10}
                            height={6}
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>

                          </svg>
                        </span>
                      </button>
                    </div>
                    <div
                      id="dropdown_profile"
                      className="absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow"
                      style={{ display: showProfile ? "block" : "none" }}
                    >
                      <div className="py-1">
                        <Link
                          to="/admin/profile"
                          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={12} cy={12} r={3} />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                          Account
                        </Link>
                        <button
                          onClick={handleLogut}
                          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1={21} y1={12} x2={9} y2={12} />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </section>

          {/* main content */}
          {children}
        </div>
      </div>
    </>
  );
}

export default SideNav;
