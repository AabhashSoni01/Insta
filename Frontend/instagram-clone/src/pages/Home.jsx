import React from "react";
import {
  FaBars,
  FaColumns,
  FaHome,
  FaPlus,
  FaRegCompass,
  FaRegHeart,
  FaRegPaperPlane,
  FaRegPlayCircle,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-55 flex flex-col justify-between absolute left-0 top-0 border-r border-r-slate-800"
    >
        {/* instagram */}
      <div className="first w-full p-5">
        <div className="w-full p-2 mt-5">
          <span className="p-2">
            <a
              href="#home"
              className="text-4xl"
              style={{ fontFamily: "Cookie" }}
            >
              Instagram
            </a>
          </span>
        </div>
      </div>

        {/* menu */}
      <div className="second w-full flex flex-col gap-8 my-10">
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaHome size={22} />
              </span>
              Home
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaSearch size={22} />
              </span>
              Search
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaRegCompass size={22} />
              </span>
              Explore
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaRegPlayCircle size={22} />
              </span>
              Reels
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaRegPaperPlane size={22} />
              </span>
              Messages
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaRegHeart size={22} />
              </span>
              Notifications
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaPlus size={22} />
              </span>
              Create
            </a>
          </span>
        </div>
        <div>
          <span>
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-8 gap-3"
            >
              <span>
                <FaUser size={22} />
              </span>
              Profile
            </a>
          </span>
        </div>
      </div>

        {/* footer-menu */}
      <div className="third w-full flex flex-col">
        <div className="w-full flex flex-col gap-5 mx-8 font-semibold">
          <div>
            <span>
              <a href="#" className="flex items-center gap-3">
                <span>
                  <FaBars />
                </span>
                <span className="font-semibold">More</span>
              </a>
            </span>
          </div>
          <div className="mb-10">
            <span className="flex items-center gap-3">
              <FaColumns /> Also from Meta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
