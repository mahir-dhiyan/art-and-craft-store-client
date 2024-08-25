import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Authproviders";
import MyArtCard from "./MyArtCard";
import { Helmet } from "react-helmet-async";

const MyArt = () => {
    const { user } = useContext(AuthContext);
    const [arts, setArts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(""); // State for selected filter

    useEffect(() => {
        fetch(`https://art-and-craft-store-server-rouge.vercel.app/art/${user?.email}`)
            .then(result => result.json())
            .then(data => {
                setArts(data);
                setLoading(false);
            })
    }, []);
    // Filter the arts based on the selected customization filter
    const filteredArts = filter
        ? arts.filter(art => art.customization === filter)
        : arts;
    if (loading) {
        return <div className="mx-auto dark:text-fuchsia-50 flex justify-center h-screen"><span className="loading w-40  mx-auto  loading-infinity "></span></div>
    }
    console.log(filter);
    return (
        <div className="min-h-screen">
            <Helmet><title>My Art & Craft-Wovenwood</title></Helmet>
            <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold"> My <span className="text-[#C56652]">Art & Craft</span> List</h2>
            </div>

            {/* Dropdown menu for filtering */}
            <div className="text-center m-4">
                <label htmlFor="filter" className="mr-2 text-xl dark:text-fuchsia-50 font-bold">Filter by Customization:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border rounded p-2"
                >

                    <option value="">All</option>
                    <option value="Yes">Customization: Yes</option>
                    <option value="No">Customization: No</option>
                    {/* Add more options as per your customization values */}
                </select>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4  ">
                {
                    filteredArts.map(art => (
                        <MyArtCard key={art._id} setArts={setArts} arts={arts} art={art}></MyArtCard>
                    ))
                }
            </div>
        </div>
    );
};

export default MyArt;