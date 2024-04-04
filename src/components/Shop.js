import "./skills.scss";
import React, { useEffect, useState } from "react";
import img from "../assets/image.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img4.jpeg";
import img4 from "../assets/img5.jpeg";
import img5 from "../assets/img6.jpeg";
import img6 from "../assets/img7.jpeg";
import img7 from "../assets/img8.jpeg";
const Skills = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleEnquireNow = () => {
    setIsEnquiryOpen(true);
    console.log("click");
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Retrieve cart count from local storage on component mount
    const savedCartCount = localStorage.getItem("cartCount");
    if (savedCartCount) {
      setCartCount(parseInt(savedCartCount, 10));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever cart count changes
    localStorage.setItem("cartCount", cartCount);
    console.log(cartCount);
  }, [cartCount]);

  const handleAddToCart = () => {
    // Increment the cart count when the user clicks on "Add to cart" button
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="main">
      <div className="row mt-2">
        <div className="card col-12 col-sm-6 col-md-3 col-lg-2 pt-4">
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="card col-12 col-sm-6 col-md-6 col-lg-4">
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="card col-12 col-md-3 col-lg-6">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="row mt-2">
        <div className="card col-12 col-sm-6 col-md-3 col-lg-4 pt-4">
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="card col-12 col-sm-6 col-md-6 col-lg-2">
          <img src={img4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="card col-12 col-md-3 col-lg-6">
          <img src={img5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="card col-12 col-sm-6 col-md-3 col-lg-4 pt-4">
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-suecondarym-1  "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="card col-12 col-sm-6 col-md-6 col-lg-2">
          <img src={img7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="card col-12 col-md-3 col-lg-6">
          <img src={img6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-success" onClick={handleEnquireNow}>
              Enquire Now
            </a>
            <a
              href="#"
              className="btn btn-secondary m-1 "
              onClick={handleAddToCart}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      {isEnquiryOpen && (
        <div className="enquiry-form">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseEnquiry}>
              X
            </button>
            <h2>Enquiry Form</h2>
            {/* Add your enquiry form fields here */}
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Email:</label>
              <input type="email" id="email" name="name" required />
              <label htmlFor="name">Company Details:</label>
              <input type="text" id="name" name="name" required />
              {/* Add more fields as needed */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
