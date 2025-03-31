import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Beverages = () => {
  const [beverages, setBeverages] = useState([]); // Ensure it's initialized as an array
  const API_URL = "https://67ea5b2334bcedd95f632598.mockapi.io/beverages"; // Correct API URL

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBeverages(data); // Ensure `data` is an array
        } else {
          setBeverages([]); // Set empty array if response is not correct
        }
      })
      .catch((error) => {
        console.error("Error fetching starters:", error);
        setBeverages([]); // Handle errors by setting an empty array
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Beverages</h2>
      <div className="row">
        {beverages.length > 0 ? (
          beverages.map((beverage) => (
            <div className="card-list col-md-4 mb-4" key={beverage.id}>
              <div className="card shadow-lg">
                <img
                  src={beverage.image}
                  className="card-img-top"
                  alt={beverage.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{beverage.name}</h5>
                  <p className="card-text">{beverage.description}</p>
                  <h6 className="text-primary">${beverage.price.toFixed(2)}</h6>
                  <button className="btn btn-warning w-100">Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Beverages available.</p>
        )}
      </div>
    </div>
  );
};

export default Beverages;
