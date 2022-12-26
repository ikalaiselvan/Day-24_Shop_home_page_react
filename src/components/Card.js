import React from "react";
import { useState } from "react";

export function Card({data, cartValue, setCartValue}) {
  console.log(data)
  const {image, productName, minPrice, maxPrice, saleBadge, productPrice, offerPrice, star} = data;
  
  let [toggle, setToggle] = useState(true);


  return (<>
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        {/* <!-- Sale badge--> */}
        {saleBadge ? <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div> : ""}        
        <img
          className="card-img-top"
          src={image}
          alt={productName} />

        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{productName}</h5>
            {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill">{star}</div>
                                        </div>
            {/* <!-- Product price--> */}
            {saleBadge ? <span class="text-muted text-decoration-line-through"> {productPrice} </span> : minPrice} -
            {saleBadge ? offerPrice : maxPrice}

          </div>
        </div>

        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {toggle ? (
            <div className="text-center">
              <button
                onClick={() => {
                  setCartValue(cartValue + 1);
                  setToggle(!toggle);
                }}
                className="btn btn-outline-dark mt-auto"
              >
                Add to cart
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => {
                  setCartValue(cartValue - 1);
                  setToggle(!toggle);
                }}
                className="btn btn-outline-dark mt-auto"
              >
                Remove from cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>


    
  </>

  );
}
