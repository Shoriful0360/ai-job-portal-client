import { Outlet } from "react-router";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";


const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Home;