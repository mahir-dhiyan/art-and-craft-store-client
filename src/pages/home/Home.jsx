import { Helmet } from "react-helmet-async";
import Header from "./header/Header";

const Home = () => {
    return (
        <div>
          <Helmet><title>Home-Wovenwood</title></Helmet>
            <Header></Header>
        </div>
    );
};

export default Home;