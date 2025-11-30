import "../index.css";
import { FaFacebook } from "react-icons/fa";
import instaImg from "../assets/images/insta-landing_page-img.png";

function LandingPage() {
  return (
    <>
      <div className="w-6xl h-[50vh] flex flex-col justify-center items-center gap-15">
        <div className="main h-140 w-[80%] flex justify-center items-center m-auto mr-15 gap-10">
          <div className="left-side h-full flex items-center justify-center -m-10">
            <img
              src={instaImg}
              alt="Example"
              style={{ width: 600, height: "auto" }}
            />
          </div>

          <div className="right-side flex flex-col justify-center items-center w-[50%]">
            <div className="log-m w-90 text-center mx-16 p-10">
              <h1 className="text-6xl font-semibold text-center mb-8" style={{ fontFamily: "Cookie" }}>
                Instagram
              </h1>

              <div className="w-[95%] flex flex-col mx-auto gap-2">
                <input
                  type="text"
                  placeholder="Phone number, username or email address"
                  className="text-xs placeholder:text-gray-400 border border-gray-500 rounded-md p-3 outline-0"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="text-xs placeholder:text-gray-400 border border-gray-500 rounded-md p-3 outline-0"
                />

                <div className="text-xs rounded-md p-2 my-2 bg-indigo-800">
                  <button className="cursor-pointer font-bold text-gray-300">
                    Log In
                  </button>
                </div>

                <div className="flex items-center gap-4 m-3">
                  <div className="flex-1 border-t border-gray-700"></div>
                  <span className="text-slate-400">Or</span>
                  <div className="flex-1 border-t border-gray-700"></div>
                </div>

                <div className="flex flex-col-reverse justify-center items-center">
                  <div className="flex justify-center items-center text-blue-400 gap-2">
                    <a
                      href="#"
                      className="flex justify-center items-center gap-1"
                    >
                      <FaFacebook size={20} color="#1877F2" />
                      Log in with Facebook
                    </a>
                  </div>
                </div>

                <div className="m-2">
                  <a href="#" className="font-semibold">
                    Forgotten your password?
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="font-light">
                <span>Don't have an account?</span>
              </div>
              <div className="text-indigo-400 font-semibold">
                <a href="">Sign up</a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-30 flex flex-wrap justify-center items-center p-10 gap-5">
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Meta</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">About</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Blog</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Jobs</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Help</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">API</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Privacy</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Terms</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Locations</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Instagram Lite</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Meta AI</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Meta AI articles</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Threads</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Contact uploading and non-users</a>
          </span>
          <span className="text-xs text-gray-400 ">
            <a className="hover:underline" href="#">Meta Verified</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
