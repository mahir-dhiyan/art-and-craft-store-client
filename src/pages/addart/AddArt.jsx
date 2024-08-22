import { useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/Authproviders";
const AddArt = () => {
    const {user}=useContext(AuthContext);
    
    const handleAddCraft = e =>{
        const notifyArtAdded = () => {
            toast.success('Art Added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
    
            });
        }
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const email = form.email.value;
        const name = form.name.value;
        // console.log(image,item_name,subcategory_name,short_description,price,rating,customization,processing_time);
        const craft = {image,item_name,subcategory_name,short_description,price,rating,customization,processing_time,stock_status,email,name};
        // console.log(craft);
        // Send data to the server
        fetch("http://localhost:5000/art",{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(craft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                notifyArtAdded();
            };
        })
        form.reset();

    }
    return (
        <div className="  min-h-screen">
            <div className="hero-content flex-col  ">
                <div className="bg-[#ECECF2] p-4 rounded-3xl border-dashed border-2 border-[#C56652] ">
                    <h2 className="text-5xl font-semibold"> Add <span className="text-[#C56652]">Craft</span> Item  <IoIosAddCircleOutline className="inline-block" /></h2>
                </div>
                <div className="card bg-[#ECECF2] rounded-3xl border-dashed border-2 border-[#C56652] w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleAddCraft} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="Image URL" name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" placeholder="Item Name" name="item_name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <input type="text" placeholder="Subcategory Name" name="subcategory_name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" name="short_description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" placeholder="Customization" name="customization" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" placeholder="Processing Time" name="processing_time" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" placeholder="Stock Status" name="stock_status" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" defaultValue={user.email} disabled  className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="User Name" name="name" defaultValue={user.displayName} className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-warning text-white bg-[#C56652] border-none">Add Craft Item</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"

            />
        </div>
    );
};

export default AddArt;