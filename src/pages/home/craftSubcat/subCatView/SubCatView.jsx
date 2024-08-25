import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CraftCard from "../../craftItem/CraftCard";
import { Helmet } from "react-helmet-async";

const SubCatView = () => {
    // const [subCats,setSubCats]=useState();
    const { name } = useParams();
    const arts = useLoaderData();
    console.log(arts);
    const crafts = arts.filter(art => art.subcategory_name === name);
    // console.log(subCatArts);
    return (
        < div className="min-h-screen">
            <Helmet><title>Subcategorised Items-Wovenwood</title></Helmet>
            <div className="bg-[#ECECF2] p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">All <span className="text-[#C56652]">{name} </span>Items</h2>
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-4 justify-center">
                {
                    crafts.map(craft => (

                        <CraftCard key={craft._id} craft={craft}></CraftCard>

                    ))
                }
            </div>
            {/* className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4" */}
        </div>
    );
};

export default SubCatView;