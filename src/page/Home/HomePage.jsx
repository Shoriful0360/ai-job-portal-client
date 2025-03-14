
import Banner from "../../component/Homepage/Banner";
import State from "../../Section/State";
import SuggestedJob from "../../Section/SuggestedJob";


const HomePage = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div><State></State></div>
            <div><SuggestedJob></SuggestedJob></div>
        </div>
    );
};

export default HomePage;