import { useParams } from "react-router-dom";

const UpdateItem = () => {
    const {id} = useParams();
    return (
        <div>
            This is update item:{id}
        </div>
    );
};

export default UpdateItem;