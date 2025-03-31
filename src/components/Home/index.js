import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
    return (
        <div className="homepage-container">
            <h3 className="tagline">Gustus Purus Laetitiae</h3>
            <div className="main-title">
                <h1 className="title">WELCOME TO <br />DELICIA!</h1>
                {/* Use Link to navigate to the menu page */}
                <Link to="/menu">
                    <button className="dining-button">Dine with Us</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
