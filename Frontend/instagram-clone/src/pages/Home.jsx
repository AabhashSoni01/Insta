import React from "react";
import {
  FaBars,
  FaCamera,
  FaColumns,
  FaCompass,
  FaGooglePlay,
  FaGripLines,
  FaHeart,
  FaHome,
  FaPaperPlane,
  FaPlayCircle,
  FaPlus,
  FaRegCompass,
  FaRegHeart,
  FaRegPaperPlane,
  FaRegPlayCircle,
  FaRegPlusSquare,
  FaSearch,
  FaSeedling,
  FaTable,
  FaUser,
} from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-55 flex flex-col justify-between absolute left-0 top-0"
    >
      <div className="first h-full w-full">
        <div className="w-full h-full p-5">
          <span className="p-2">
            <a
              href="#home"
              className="text-3xl"
              style={{ fontFamily: "Cookie" }}
            >
              Instagram
            </a>
          </span>
        </div>
      </div>

      <div className="second h-full w-full flex flex-col  p-2">
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaHome size={20} />
              </span>
              Home
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaSearch size={20} />
              </span>
              Search
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaRegCompass size={20} />
              </span>
              Explore
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaRegPlayCircle size={20} />
              </span>
              Reels
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaRegPaperPlane size={20} />
              </span>
              Messages
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaRegHeart size={20} />
              </span>
              Notifications
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaPlus size={20} />
              </span>
              Create
            </a>
          </span>
        </div>
        <div>
          <span className="p-2">
            <a
              href="#home"
              className="flex items-center text-md font-semibold mx-4 gap-3"
            >
              <span>
                <FaUser size={20} />
              </span>
              Profile
            </a>
          </span>
        </div>
      </div>

      <div className="third h-full w-full flex flex-col p-2 -my-5 bg-amber-800">
        <div className="mx-4">
          <div className="p-1">
            <span>
              <a href="#" className="flex items-center gap-3">
                <span>
                  <FaBars />
                </span>
                <span className="font-semibold">More</span>
              </a>
            </span>
          </div>
          <div className="p-1">
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
