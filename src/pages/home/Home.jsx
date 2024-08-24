import { Helmet } from "react-helmet-async";
import Header from "./header/Header";
import Craft from "./craftItem/Craft";
import CraftSubcat from "./craftSubcat/CraftSubcat";

const Home = () => {
    return (
        <div>
          <Helmet><title>Home-Wovenwood</title></Helmet>
            <Header></Header>
            <Craft></Craft>
            <CraftSubcat></CraftSubcat>
        </div>
    );
};

export default Home;