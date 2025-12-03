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
  FaRegUser,
  FaSearch,
} from "react-icons/fa";

const Home = () => {
  // Define menu items array for cleaner code
  const menuItems = [
    { icon: <FaHome size={22} />, label: "Home" },
    { icon: <FaSearch size={22} />, label: "Search" },
    { icon: <FaRegCompass size={22} />, label: "Explore" },
    { icon: <FaRegPlayCircle size={22} />, label: "Reels" },
    { icon: <FaRegPaperPlane size={22} />, label: "Messages" },
    { icon: <FaRegHeart size={22} />, label: "Notifications" },
    { icon: <FaPlus size={22} />, label: "Create" },
    { icon: <FaRegUser size={22} />, label: "Profile" },
  ];

  return (
    <div
      id="home"
      className="h-screen w-56 flex flex-col justify-between absolute left-0 top-0 border-r border-r-slate-800 bg-black text-white"
    >
      {/* Instagram Logo */}
      <div className="first w-full p-5">
        <div className="w-full p-2 mt-5">
          <a
            href="#home"
            className="text-4xl block p-2"
            style={{ fontFamily: "Cookie" }}
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Menu Items (Mapped) */}
      <div className="second w-full flex flex-col"> 
        {menuItems.map((item, index) => (
          <div key={index} className="p-3 mx-2 hover:bg-gray-900 rounded-2xl transition-all duration-200 group cursor-pointer">
            <a
              href="#home"
              className="flex items-center text-md font-semibold gap-4 group-hover:scale-105 transition-transform"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          </div>
        ))}
      </div>

      {/* Footer Menu */}
      <div className="third w-full flex flex-col p-4 mb-4">
        <div className="flex flex-col gap-4 mx-4 font-semibold">
          <a href="#" className="flex items-center gap-4 hover:bg-gray-900 p-3 rounded-2xl -ml-3 transition-colors">
            <FaBars size={22} />
            <span>More</span>
          </a>
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <FaColumns /> Also from Meta
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;