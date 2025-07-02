
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineChartPie, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashsidebar() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">


      {
        currentUser && (
          <>
            <div className="flex py-3 rounded-lg mx-2 mt-2 hover:bg-[#F3F4F6]">

              <Link to={'/dashboard?tab=dashboard'} className="w-full">
                <div className="flex  items-center justify-between px-2"  >
                  <div className="flex space-x-4  items-center">
                    <HiChartPie className="w-[25px] h-[25px]" />
                    <span>
                      Dashboard
                    </span>
                  </div>

                  <div className="w-[50px] text-center bg-gray-800 text-white font-semibold rounded-md py-1 text-[12px]">
                    admin
                  </div>
                </div>

              </Link>
            </div>

          </>

        )
      }

      {
        currentUser && (
          <>
            <div className="flex py-3 rounded-lg mx-2 mt-2 hover:bg-[#F3F4F6]">

              <Link to={'/dashboard?tab=profile'} className="w-full">
                <div className="flex  items-center justify-between px-2">
                  <div className="flex space-x-4 items-center">
                    <HiOutlineChartPie className="w-[25px] h-[25px]" />
                    <span>
                      Profile
                    </span>
                  </div>

                  <div className="w-[50px] text-center bg-gray-800 text-white font-semibold rounded-md py-1 text-[12px]">
                    {currentUser.isAdmin ? 'admin' : 'user'}
                  </div>
                </div>

              </Link>
            </div>

          </>

        )
      }

      {
        currentUser && (
          <>
            <div className="flex py-3 rounded-lg mx-2 mt-2 hover:bg-[#F3F4F6]">

              <Link to={'/dashboard?tab=user'} className="w-full">
                <div className="flex  items-center justify-between px-2"  >
                  <div className="flex space-x-4  items-center">
                    <HiUser className="w-[25px] h-[25px]" />
                    <span>
                      Users
                    </span>
                  </div>

                  <div className="w-[50px] text-center bg-gray-800 text-white font-semibold rounded-md py-1 text-[12px]">
                    admin
                  </div>
                </div>

              </Link>
            </div>

          </>

        )
      }

      <div className="flex py-3 rounded-lg mx-2 mt-2 hover:bg-[#F3F4F6]">

        <div className="flex space-x-4 ps-2 items-center" label={currentUser.isAdmin ? 'admin' : 'user'} labelColor='dark' >
          <HiArrowSmRight className="w-[25px] h-[25px]" />
          <span className="font-normal">
            Signout
          </span>
        </div>

      </div>

    </div >
  );
};

export default Dashsidebar;
