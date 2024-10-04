import React from "react";
import hatIcon from "/hat.svg";

const Navbar = () => {
    return (
        <div className='w-full h-full flex justify-center items-center sticky top-0 z-10'>
            <nav className="bg-white/5 border-white/20 rounded-full border  w-4/5 ">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        {/* logo section */}
                        <div className="flex space-x-4">
                            <div>
                                <a
                                    href="#"
                                    className="flex items-center py-5 px-2 text-white hover:text-slate-200"
                                >
                                    <img
                                        src={hatIcon}
                                        alt=""
                                        width={30}
                                        className="mx-2 stroke-white fill-white"
                                    />
                                    <span className="font-bold">CapSun</span>
                                </a>
                            </div>
                        </div>
                        {/* nav links section */}

                        <div className="hidden md:flex items-center space-x-1">
                            <div className="hidden md:flex items-center space-x-1">
                                <a
                                    href="#hero"
                                    className="py-5 px-3 text-white hover:text-slate-200"
                                >
                                    Home
                                </a>
                                <a
                                    href="#capsun"
                                    className="py-5 px-3 text-white hover:text-slate-200"
                                >
                                    Capsun
                                </a>
                                <a
                                    href="#news"
                                    className="py-5 px-3 text-white hover:text-slate-200"
                                >
                                    News
                                </a>
                                <a
                                    href="#quiz"
                                    className="py-5 px-3 text-white hover:text-slate-200"
                                >
                                    Take a Quiz!
                                </a>
                                <a
                                    href="#team"
                                    className="py-5 px-3 text-white hover:text-slate-200"
                                >
                                    Our Team
                                </a>
                            </div>

                            {/* <a href="" className="py-5 px-3">
              Login
            </a>
            <a
              href=""
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;