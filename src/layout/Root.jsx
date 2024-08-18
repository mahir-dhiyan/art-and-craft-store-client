import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";
import Footer from "../pages/footer/Footer";
import '../layout/root.css'
const Root = () => {
    return (
        <div className="bg-[#ECF2EF] back">
            <div className="bg-[#CCDDD3] sticky top-0 z-10"> <Navbar className=""></Navbar></div>
            <div className="mx-auto max-w-6xl h-full ">
                <Outlet></Outlet>
            </div>
            <div className=""><Footer></Footer></div>
        </div>
    );
};

export default Root;