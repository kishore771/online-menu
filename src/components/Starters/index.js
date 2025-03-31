import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const Starters = () => {
  const [starters, setStarters] = useState([]); // Ensure it's initialized as an array
  const API_URL = "https://67e5065018194932a5842482.mockapi.io/starters/starters"; // Correct API URL

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setStarters(data); // Ensure `data` is an array
        } else {
          setStarters([]); // Set empty array if response is not correct
        }
      })
      .catch((error) => {
        console.error("Error fetching starters:", error);
        setStarters([]); // Handle errors by setting an empty array
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Starters</h2>
      <div className="row">
        {starters.length > 0 ? (
          starters.map((starter) => (
            <div className="card-list col-md-4 mb-4" key={starter.id}>
              <div className="card shadow-lg">
                <img
                  src={starter.image}
                  className="card-img-top"
                  alt={starter.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{starter.name}</h5>
                  <p className="card-text">{starter.description}</p>
                  <h6 className="text-primary">${starter.price.toFixed(2)}</h6>
                  <button className="btn btn-warning w-100">Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No starters available.</p>
        )}
      </div>
    </div>
  );
};

export default Starters;
