import { Link } from "react-router-dom";

const MyArtCard = ({art}) => {
    console.log(art);
    const{image,item_name,subcategory_name,price,rating,_id,customization,stock_status}=art;
    return (
        <div className="card bg-[#ECECF2]  shadow-xl">
        <figure>
          <img
            src={image}
            alt="products" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <h3 className="text-lg font-medium text-gray-500">Subcategory Name: <span className="text-base">{subcategory_name}</span></h3>
          <div className="flex justify-between">
          <h3 className="text-lg font-medium text-green-600">Rating: <span className="text-base text-black">{rating}/5</span></h3>
          <h3 className="text-lg font-medium text-yellow-500">Price: <span className="text-base text-black">{price}</span></h3>
          </div>
          <div className="flex justify-between">
          <h3 className="text-lg font-medium text-green-600">Customization: <span className="text-base text-black">{rating}/5</span></h3>
          <h3 className="text-lg font-medium text-yellow-500">Stock Status: <span className="text-base text-black">{price}</span></h3>
          </div>
          
          <div className="card-actions  ">
            <Link to={`/update/${_id}`} className="w-full "><button className="btn btn-warning w-full text-white bg-[#A95543] border-none">Update</button></Link>
          </div>
        </div>
      </div>
    );
};

export default MyArtCard;