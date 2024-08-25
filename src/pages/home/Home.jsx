import { Helmet } from "react-helmet-async";
import Header from "./header/Header";
import Craft from "./craftItem/Craft";
import CraftSubcat from "./craftSubcat/CraftSubcat";
import Map from "./map/Map";

const Home = () => {
    return (
        <div>
          <Helmet><title>Home-Wovenwood</title></Helmet>
            <Header></Header>
            <Craft></Craft>
            <CraftSubcat></CraftSubcat>
            <Map></Map>
        </div>
    );
};

export default Home;