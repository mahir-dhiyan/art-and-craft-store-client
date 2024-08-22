import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <p className="text-4xl">{id}</p>
        </div>
    );
};

export default ViewDetails;