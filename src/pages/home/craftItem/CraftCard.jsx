import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  const { image, item_name, subcategory_name, short_description, price, rating, _id } = craft;

  return (
    <div className="card bg-[#ECECF2]  shadow-xl">
      <figure>
        <img className="h-96 w-full"
          src={image}
          alt="products" />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">{item_name}</h2>
        <h3 className="text-lg font-medium text-gray-500">Subcategory Name: <span className="text-base">{subcategory_name}</span></h3>
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-green-600">Rating: <span className="text-base text-black">{rating}/5</span></h3>
          <h3 className="text-lg font-medium text-yellow-500">Price: <span className="text-base text-black">{price}</span></h3>
        </div>
        <h3 className="text-lg font-medium text-gray-500">Details:</h3>
        <p>{short_description}</p>
        <div className="card-actions  ">
          <Link to={`/viewDetails/${_id}`} className="w-full "><button className="btn btn-warning w-full text-white bg-[#A95543] border-none">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;