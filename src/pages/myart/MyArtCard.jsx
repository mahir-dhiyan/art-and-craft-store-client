import { Link } from "react-router-dom";

const MyArtCard = ({art}) => {
    // console.log(art);
    const{image,item_name,subcategory_name,price,rating,_id,customization,stock_status}=art;
    const handleDelete = ()=>{
        console.log('delete');
    }
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
          <div className="">
          <h3 className="text-lg font-medium text-gray-500">Customization: <span className="text-base text-black">{customization}</span></h3>
          <h3 className="text-lg font-medium text-gray-500">Stock Status: <span className="text-base text-black">{stock_status}</span></h3>
          </div>
          
          <div className="card-actions  flex justify-between">
            <Link to={`/updateItem/${_id}`} className=" w-1/3 "><button className="btn btn-warning w-full text-lg text-white border-none">Update</button></Link>
            <div className="w-1/3"><button onClick={handleDelete} className="btn btn-error w-full  text-lg text-white border-none">Delete</button></div>
          </div>
        </div>
      </div>
    );
};

export default MyArtCard;