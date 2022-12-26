import React, { useState } from "react";
import { Card } from "./Card";
import Nav from "./Nav";
// import Star-rating from './Star-rating'

function Home() {
  let [cartValue, setCartValue] = useState(0);

  const data = [
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: ""
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "true",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: "⭐⭐⭐⭐⭐"
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "true",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: ""
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: "⭐⭐⭐⭐⭐"
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "true",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: ""
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: ""
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "true",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: "⭐⭐⭐⭐⭐"
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      minPrice: "$40.00",
      maxPrice: "$80.00",
      saleBadge: "",
      productPrice: "$20.00",
      offerPrice: "$18",
      star: "⭐⭐⭐⭐⭐"
    },
  ];

  return (
    <>
      <Nav value={cartValue} />
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((e) => (
              <Card
                data={e}
                cartValue={cartValue}
                setCartValue={setCartValue}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
