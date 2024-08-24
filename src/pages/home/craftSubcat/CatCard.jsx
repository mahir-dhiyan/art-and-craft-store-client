import { Link } from "react-router-dom";

const CatCard = ({ cat }) => {
    // console.log(cat);
    const { image, name, description, materials } = cat;
    return (
        <Link to={`/subCatView/${name}`}>
        <div className="card bg-[#ECECF2] h-full hover:bg-[#ECF2EF] hover:text-[#A95543] hover:opacity-95 shadow-xl">
            <figure>
                <img className="h-96 w-full"
                    src={image}
                    alt="products" />
            </figure>
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">{name}</h2>
                <h3 className="text-lg font-medium text-gray-500">Details:</h3>
                <p>{description}</p>
                <h3 className="text-lg font-medium text-gray-500">Materials:</h3>
                <p>{materials}</p>
               
            </div>
        </div>
        </Link>
    );
};

export default CatCard;