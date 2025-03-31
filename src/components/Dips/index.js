import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dips = () => {
  const [dips, setDips] = useState([]); // Ensure it's initialized as an array
  const API_URL = "https://67ea5e0934bcedd95f633338.mockapi.io/dips"; // Correct API URL

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDips(data); // Ensure `data` is an array
        } else {
          setDips([]); // Set empty array if response is not correct
        }
      })
      .catch((error) => {
        console.error("Error fetching starters:", error);
        setDips([]); // Handle errors by setting an empty array
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Dips</h2>
      <div className="row">
        {dips.length > 0 ? (
          dips.map((dip) => (
            <div className="card-list col-md-4 mb-4" key={dip.id}>
              <div className="card shadow-lg">
                <img
                  src={dip.image}
                  className="card-img-top"
                  alt={dip.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{dip.name}</h5>
                  <p className="card-text">{dip.description}</p>
                  <h6 className="text-primary">${dip.price.toFixed(2)}</h6>
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

export default Dips;
