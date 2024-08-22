import { Helmet } from "react-helmet-async";
import Header from "./header/Header";
import Craft from "./craftItem/Craft";

const Home = () => {
    return (
        <div>
          <Helmet><title>Home-Wovenwood</title></Helmet>
            <Header></Header>
            <Craft></Craft>
        </div>
    );
};

export default Home;