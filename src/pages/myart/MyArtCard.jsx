import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/Authproviders";
const MyArtCard = ({ art, setArts, arts }) => {
    const { image, item_name, subcategory_name, price, rating, _id, customization, stock_status } = art;
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure want to delete this coffee?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://art-and-craft-store-server-rouge.vercel.app/art/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = arts.filter(art => art._id !== _id);
                            setArts(remaining);
                        }
                    })
            }
        });

    }
    return (
        <div className="card bg-[#ECECF2] dark:bg-gray-500 shadow-xl">
            <figure>
                <img className="h-96 w-full"
                    src={image}
                    alt="products" />
            </figure>
            <div className="card-body dark:text-black flex flex-col justify-between">
                <h2 className="card-title">{item_name}</h2>
                <h3 className="text-lg font-medium text-gray-500 dark:text-fuchsia-50">Subcategory Name: <span className="text-base">{subcategory_name}</span></h3>
                <div className="flex justify-between">
                    <h3 className="text-lg font-medium dark:text-green-500 text-green-600">Rating: <span className="text-base text-black">{rating}/5</span></h3>
                    <h3 className="text-lg font-medium text-yellow-500">Price: <span className="text-base text-black">{price}</span></h3>
                </div>
                <div className="">
                    <h3 className="text-lg font-medium text-gray-500 dark:text-fuchsia-50">Customization: <span className="text-base text-black">{customization}</span></h3>
                    <h3 className="text-lg font-medium text-gray-500 dark:text-fuchsia-50">Stock Status: <span className="text-base text-black">{stock_status}</span></h3>
                </div>

                <div className="card-actions flex justify-between">
                    <Link to={`/updateItem/${_id}`} className=" w-1/3 "><button className="btn btn-warning w-full text-lg text-white border-none">Update</button></Link>
                    <div className="w-1/3"><button onClick={handleDelete} className="btn btn-error w-full  text-lg text-white border-none">Delete</button></div>
                </div>
            </div>
        </div>
    );
};

export default MyArtCard;