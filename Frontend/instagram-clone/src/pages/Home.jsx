import "../index.css";
import { FaFacebook } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="main h-140 w-[95%] flex justify-center mx-auto">
        <div className="left-side w-1/2 h-full flex items-center justify-center -m-10">
          <img
            src="./src/assets/Images/insta-landing_page-img.png"
            alt="Example"
            style={{ width: 600, height: "auto" }}
          />
        </div>

        <div className="right-side w-1/2">
          <div className="log-m w-90 text-center mt-20 mx-16 p-10">
            <h1 className="text-4xl font-sans font-semibold text-center mb-6">
              Instagram
            </h1>

            <div className="w-[95%] flex flex-col mx-auto gap-2">
              <input
                type="text"
                placeholder="Phone number, username or email address"
                className="text-xs border border-slate-300 rounded-md p-3 outline-0"
              />
              <input
                type="text"
                placeholder="Password"
                className="text-xs border border-slate-300 rounded-md p-3 outline-0"
              />
              <div className="text-xs  rounded-md p-2 bg-indigo-700">
                <button className="cursor-pointer">Log In</button>
              </div>
              <div class="flex items-center gap-4 m-3">
                <div class="flex-1 border-t border-gray-600"></div>
                <span class="text-slate-400">Or</span>
                <div class="flex-1 border-t border-gray-600"></div>
              </div>
              <div className="flex flex-col-reverse justify-center items-center">
                <div className="flex justify-center items-center text-blue-400 gap-2">
                  <a href="#" className="flex justify-center items-center gap-1">
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
        </div>
      </div>
    </>
  );
}

export default Home;
