import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
    // const [crafts, setCrafts] = useState([]);

    // useEffect(() => {
    //     fetch("https://art-and-craft-store-server-rouge.vercel.app/art")
    //         .then(result => result.json())
    //         .then(data => {
    //             setCrafts(data);
    //         })
    // }, []);
    const crafts = useLoaderData();

    return (
        <>
            <Helmet><title>All Art & Craft-Wovenwood</title></Helmet>
            <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold"> All <span className="text-[#C56652]">Art & Craft</span> Items  </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows   table-pin-cols">
                    <thead>
                        <tr className="">
                            <th className="bg-[#A95543] text-white"></th>
                            <th className="bg-[#A95543] text-white">Item Name</th>
                            <th className="bg-[#A95543] text-white">Subcategory</th>
                            <th className="bg-[#A95543] text-white">User's Email</th>
                            <th className="bg-[#A95543] text-white">Details</th>
                            <th className="bg-[#A95543] text-white"></th>
                        </tr>
                    </thead>
                    {
                        crafts.map((craft, index) => (
                            <tbody>
                                {/* row 1 */}
                                <tr className=" text-black dark:text-fuchsia-50 font-medium">
                                    <th className="text-black">{index + 1}</th>
                                    <td >{craft.item_name}</td>
                                    <td >{craft.subcategory_name}</td>
                                    <td >{craft.name}</td>
                                    <td ><Link to={`/viewDetails/${craft._id}`}><button className="btn
                                 btn-warning bg-[#A95543]
                                 border-none
                                  text-white">View Details</button></Link></td>
                                </tr>
                            </tbody>
                        ))
                    }
                    <tfoot>
                        <tr className="">
                            <th className="bg-[#A95543] text-white"></th>
                            <th className="bg-[#A95543] text-white">Item Name</th>
                            <th className="bg-[#A95543] text-white">Subcategory</th>
                            <th className="bg-[#A95543] text-white">User's Email</th>
                            <th className="bg-[#A95543] text-white">Details</th>
                            <th className="bg-[#A95543] text-white"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default AllArt;