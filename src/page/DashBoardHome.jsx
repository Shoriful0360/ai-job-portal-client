import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import StatisticsPage from "../Dashboard/StatisticsPage";


const DashBoardHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="py-16">
           
            <a href="https://git.io/typing-svg">
                    <img className="my-8 " src={`https://readme-typing-svg.herokuapp.com/?lines=Hello+${user?.displayName}....;Welcome+to+you!&center=true&size=30`} alt="" />
                </a>
                <StatisticsPage></StatisticsPage>
        </div>

    );
};

export default DashBoardHome;