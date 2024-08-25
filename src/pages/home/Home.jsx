import { Helmet } from "react-helmet-async";
import Header from "./header/Header";
import Craft from "./craftItem/Craft";
import CraftSubcat from "./craftSubcat/CraftSubcat";
import Map from "./map/Map";
import CustomIdea from "./customIdea/CustomIdea";

const Home = () => {
    return (
        <div>
          <Helmet><title>Home-Wovenwood</title></Helmet>
            <Header></Header>
            <Craft></Craft>
            <CraftSubcat></CraftSubcat>
            <Map></Map>
            <CustomIdea></CustomIdea>
        </div>
    );
};

export default Home;