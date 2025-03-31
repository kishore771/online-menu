import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Deserts = () => {
  const [desserts, setDesserts] = useState([]); // Ensure it's initialized as an array
  const API_URL = "https://67ea584a34bcedd95f631aac.mockapi.io/desserts"; // Correct API URL

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDesserts(data); // Ensure `data` is an array
        } else {
          setDesserts([]); // Set empty array if response is not correct
        }
      })
      .catch((error) => {
        console.error("Error fetching starters:", error);
        setDesserts([]); // Handle errors by setting an empty array
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Desserts</h2>
      <div className="row">
        {desserts.length > 0 ? (
          desserts.map((dessert) => (
            <div className="card-list col-md-4 mb-4" key={dessert.id}>
              <div className="card shadow-lg">
                <img
                  src={dessert.image}
                  className="card-img-top"
                  alt={dessert.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{dessert.name}</h5>
                  <p className="card-text">{dessert.description}</p>
                  <h6 className="text-primary">${dessert.price.toFixed(2)}</h6>
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

export default Deserts;
