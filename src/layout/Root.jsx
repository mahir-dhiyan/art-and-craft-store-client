import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";
import Footer from "../pages/footer/Footer";
import '../layout/root.css'
import { HelmetProvider } from "react-helmet-async";
const Root = () => {
    return (
        <HelmetProvider>
            <div className="bg-[#ECF2EF] dark:bg-gray-800 back">
                <div className="bg-[#CCDDD3] dark:bg-gray-950 sticky top-0 z-10"> <Navbar className=""></Navbar></div>
                <div className="mx-auto max-w-6xl h-full ">
                    <Outlet></Outlet>
                </div>
                <div className=""><Footer></Footer></div>
            </div>
        </HelmetProvider>

    );
};

export default Root;