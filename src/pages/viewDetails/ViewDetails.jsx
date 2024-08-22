import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const { id } = useParams();
    const arts = useLoaderData();
    const art = arts.find(art => art._id === id);
    console.log(art);
    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status, email, name } = art;
    return (
        <div className="card bg-[#ECECF2] md:flex md:flex-row rounded-3xl m-4 shadow-xl">
            <div>
                <img className="md:h-96 rounded-3xl"
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
                <p>{short_description}</p>

            </div>
        </div>
    );
};

export default ViewDetails;