import { useState, useEffect } from "react"
import './index.css';

const OffersandCoupons = () =>{
    const[offersandcoupons, setOffersandCoupons] = useState([]);
    const API_URL = 'https://67ebb8ebaa794fb3222b5d84.mockapi.io/offers';

    useEffect(() =>{
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) =>{
            if(Array.isArray(data)){
                setOffersandCoupons(data);
            } else{
                setOffersandCoupons([])
            }
        } )
        .catch((error) =>{
            console.error("Error fetching offers and coupons", error);
        });
    }, []);
    return(
         <div className="container mt-4">
        <h1 className="text-center mb-4">Offers and Coupons</h1>
        <div className="row">
        <h3 className="offers-card-title">Exclusive offers for you</h3>
            {offersandcoupons.length > 0 ?(
                offersandcoupons.map((offerandcoupon)=>(
                    <div className="offers-card-container col-md-4 mb-4" key={offerandcoupon.id}>
                        <div className="offers-cards shadow-lg">
                            <img src={offerandcoupon.image} className="card-image" alt="offer image"/>
                            <div className="card-body">
                                <p className="card-title">{offerandcoupon.title}</p>
                                <p className="description">{offerandcoupon.description}</p>
                                <p className="card-code">{offerandcoupon.code}</p>
                                <p className="card-validity">{offerandcoupon.validity}</p>
                                <button className="btn btn-warning">Apply</button>
                            </div>
                        </div>
                    </div>
                ))
                ):(
                    <p className="text-center">No starters available.</p>
                )}
        </div>
        </div>
    )
}

export default OffersandCoupons;