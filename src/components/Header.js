import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
    const { isAuthenticated } = useAuth();
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-orange-500">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                            <div
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                                <Link to="/" className='button-type'>TODO APP</Link>
                            </div>

                        </div>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <div
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <Link to="/" className='button-type'>HOME</Link>
                                </div>
                            </li>
                            {
                                isAuthenticated
                                    ?
                                    <li className="nav-item flex flex-col lg:flex-row list-none lg:ml-auto">
                                        <div
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                            <Link to="/mytodos" className='button-type'>MY TODOS</Link>
                                        </div>
                                        <div className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">
                                            <Link to="/myaccount" className='button-type'>{localStorage.getItem("user")}</Link>
                                        </div>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <div
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                            <Link to="/login" className='button-type'>LOGIN</Link>
                                        </div>
                                    </li>
                            }
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default Header;