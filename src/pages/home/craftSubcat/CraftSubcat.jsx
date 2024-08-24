import { useEffect } from "react";
import { useState } from "react";
import CatCard from "./CatCard";

const CraftSubcat = () => {
    // const [loading, setLoading] = useState([]);
    const [subCat, setSubCat] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sub")
            .then(result => result.json())
            .then(data => {
                setSubCat(data);
            })
    }, []);
    return (
        <div className="mt-4">
            <div className="bg-[#ECECF2] p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold"><span className="text-[#C56652]">Craft </span>Subcategories</h2>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4  ">
                {
                    subCat.map(cat=>(
                        <CatCard key={cat._id} cat={cat}></CatCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CraftSubcat;