import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { TbLogin2 } from "react-icons/tb";
import { PiCashRegister } from "react-icons/pi";
const Navbar = () => {
    const navLinks = <>

        <div className="md:flex md:flex-row md:space-y-0 md:gap-4 flex-col space-y-2  ">

            <li ><NavLink className='btn bg-transparent font-semibold text-[#a95543] text-lg border-none' to="/">Home</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-[#a95543] text-lg border-none' to="/allart">All Art & Craft Items</NavLink></li>
            
            
            <li><NavLink className='btn  bg-transparent font-semibold text-[#a95543] text-lg border-none' to="/addart">Add Craft Item</NavLink></li>
            <li><NavLink className='btn  bg-transparent font-semibold text-[#a95543] text-lg border-none' to="/myart">My Art & Craft List</NavLink></li>

        </div>



    </>
    return (
        <div className="navbar text-[#a95543]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow navigation">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg  md:text-4xl font-bold">Wovenwood</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 navigation">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <Link to="/login"><a className="btn p-2 bg-red-500 text-white md:text-lg">Login <TbLogin2 /></a></Link>
                <Link to="/register"><a className="btn p-2 bg-green-600 text-white md:text-lg">Register <PiCashRegister /></a></Link>
            </div>
        </div>
    );
};

export default Navbar;