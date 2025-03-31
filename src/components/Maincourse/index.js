import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Maincourse = () => {
  const [maincourses, setMainCourse] = useState([]); // Ensure it's initialized as an array
  const API_URL = "https://67ea540334bcedd95f63081b.mockapi.io/maincourse/maincourse"; // Correct API URL

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMainCourse(data); // Ensure `data` is an array
        } else {
          setMainCourse([]); // Set empty array if response is not correct
        }
      })
      .catch((error) => {
        console.error("Error fetching starters:", error);
        setMainCourse([]); // Handle errors by setting an empty array
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Main Courses</h2>
      <div className="row">
        {maincourses.length > 0 ? (
          maincourses.map((maincourse) => (
            <div className="col-md-4 mb-4" key={maincourse.id}>
              <div className="card shadow-lg">
                <img
                  src={maincourse.image}
                  className="card-img-top"
                  alt={maincourse.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{maincourse.name}</h5>
                  <p className="card-text">{maincourse.description}</p>
                  <h6 className="text-primary">${maincourse.price.toFixed(2)}</h6>
                  <button className="btn btn-warning w-100">Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Items available.</p>
        )}
      </div>
    </div>
  );
};

export default Maincourse;
