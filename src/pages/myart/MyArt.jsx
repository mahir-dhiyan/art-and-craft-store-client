import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authproviders";
import MyArtCard from "./MyArtCard";

const MyArt = () => {
    const {user}=useContext(AuthContext);
    
    
    const [arts,setArts]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/art/${user?.email}`)
        .then(result=>result.json())
        .then(data=>{
            setArts(data);
            // console.log(arts)
        })
    },[]);
    return (
        <div className="min-h-screen">
          
            <div className="bg-[#ECECF2] p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold"> My <span className="text-[#C56652]">Art & Craft</span> List</h2>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4  ">
            {
                arts.map(art=>(
                    <MyArtCard key={art._id} art={art}></MyArtCard>
                ))
            }
            </div>
        </div>
    );
};

export default MyArt;