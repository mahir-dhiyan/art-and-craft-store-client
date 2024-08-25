import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const { id } = useParams();
    const arts = useLoaderData();
    const art = arts.find(art => art._id === id);
    console.log(art);
    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, email, name } = art;
    return (
        <>
            <Helmet><title>View Details-Wovenwood</title></Helmet>
            <div className="bg-[#ECECF2] p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">  <span className="text-[#C56652]">Craft</span> Details  </h2>
            </div>
            <div className="card bg-[#ECECF2] md:flex md:flex-row rounded-3xl m-4 shadow-xl">
                <div className="flex justify-center">
                    <img className="md:h-96 md:w-80  rounded-3xl"
                        src={image}
                        alt="products" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <h3 className="text-lg font-medium text-gray-500">Subcategory Name: <span className="text-base">{subcategory_name}</span></h3>
                    <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-green-600">Rating: <span className="text-base text-black">{rating}/5</span></h3>
                        <h3 className="text-lg font-medium text-yellow-500">Price: <span className="text-base text-black">{price}</span></h3>
                    </div>
                    <h3 className="text-lg font-medium text-gray-500">Details:</h3>
                    <div className=""><p className="">{short_description}</p></div>
                    <div className=" md:flex justify-between bordder-4 border-violet-500">
                        <h3 className="text-lg font-medium text-gray-500">Customization: <span className="text-base text-black">{customization}</span></h3>
                        <h3 className="text-lg font-medium text-gray-500">Processing Time: <span className="text-base text-black">{processing_time}</span></h3>
                        <h3 className="text-lg font-medium text-gray-500">Stock Status: <span className="text-base text-black">{stock_status}</span></h3>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-medium text-gray-500">User Email: <span className="text-base text-black">{email}</span></h3>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-medium text-gray-500">User Name: <span className="text-base text-black">{name}</span></h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ViewDetails;