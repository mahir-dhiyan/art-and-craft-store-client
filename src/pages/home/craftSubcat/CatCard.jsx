import { Link } from "react-router-dom";

const CatCard = ({ cat }) => {
    // console.log(cat);
    const { image, name, description, materials } = cat;
    return (
        <Link to={`/subCatView/${name}`}>
        <div className="card bg-[#ECECF2] dark:bg-gray-500 h-full hover:bg-[#ECF2EF] hover:text-[#A95543] 
        hover:opacity-95
        dark:hover:bg-gray-600
        dark:hover:opacity-85
        shadow-xl">
            <figure>
                <img className="h-96 w-full"
                    src={image}
                    alt="products" />
            </figure>
            <div className="card-body flex flex-col dark:text-black justify-between">
                <h2 className="card-title">{name}</h2>
                <h3 className="text-lg font-medium text-gray-500 dark:text-fuchsia-50">Details:</h3>
                <p>{description}</p>
                <h3 className="text-lg font-medium text-gray-500 dark:text-fuchsia-50">Materials:</h3>
                <p>{materials}</p>
               
            </div>
        </div>
        </Link>
    );
};

export default CatCard;