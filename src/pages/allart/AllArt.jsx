import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
    // const [crafts, setCrafts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/art")
    //         .then(result => result.json())
    //         .then(data => {
    //             setCrafts(data);
    //         })
    // }, []);
    const crafts = useLoaderData();
   
    return (
        <div className="overflow-x-auto">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr className="bg-[#A95543] text-white md:text-lg">
                        <th></th>
                        <th>Item Name</th>
                        <th>Subcategory</th>
                        <th>User's Email</th>
                        <th>Details</th>
                    </tr>
                </thead>
                {
                    crafts.map((craft, index) => (
                        <tbody>
                            {/* row 1 */}
                            <tr className="hover text-base md:font-medium">
                                <th>{index + 1}</th>
                                <td>{craft.item_name}</td>
                                <td>{craft.subcategory_name}</td>
                                <td>{craft.email}</td>
                                <td><Link to={`/viewDetails/${craft._id}`}><button className="btn
                                 btn-warning bg-[#A95543]
                                 border-none
                                  text-white">View Details</button></Link></td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default AllArt;