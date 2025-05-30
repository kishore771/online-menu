import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const Snacks = ({ addToCart }) => {
  const [snacks, setSnacks] = useState([]);
  const API_URL = "https://67ea5a8a34bcedd95f632389.mockapi.io/snacks";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSnacks(data);
        } else {
          setSnacks([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching snacks:", error);
        setSnacks([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Snack Items</h2>
      <div className="row">
        {snacks.length > 0 ? (
          snacks.map((snack) => (
            <div className="card-list col-md-4 mb-4" key={snack.id}>
              <div className="card shadow-lg">
                <img
                  src={snack.image}
                  className="card-img-top"
                  alt={snack.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{snack.name}</h5>
                  <p className="card-text">{snack.description}</p>
                  <h6 className="text-primary">${snack.price.toFixed(2)}</h6>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => addToCart(snack)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No snacks available.</p>
        )}
      </div>
    </div>
  );
};

export default Snacks;

