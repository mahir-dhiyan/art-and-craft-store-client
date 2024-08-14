import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h3>This is root</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;