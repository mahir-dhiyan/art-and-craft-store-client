import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const {id} = useParams();
    const arts = useLoaderData();
    const art = arts.find(art=>art._id===id);
    console.log(art);
    const {image,item_name,subcategory_name,short_description,price,rating,customization,processing_time,stock_status,email,name}=art;
    return (
        <div>
            <p className="text-4xl">{id}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default ViewDetails;