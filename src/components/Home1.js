import "./home.scss";
import React, { useState, useEffect } from "react";
import img from "../assets/image.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";

function Home1() {
  return (
    <div className="new">
      <div className="container123">
        <div className="right">
          <img src={img} alt="" />
          <div className="image-text fw-bold fs-3">
            <h1 className="fw-bold fs-3">Custom Pop-up Tents</h1>
            Introducing Custom Pop-Up Tents: Your Brand's Ultimate
            Showcase!Instant Visibility: Stand out from the crowd with vibrant
            custom designs that catch eyes and turn heads at events, trade
            shows, and outdoor gatherings.
          </div>
        </div>
      </div>
      {/* <div className="row mt-2">
        <div className="card col-2 pt-4 ">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>
          </div>
        </div>
        <div className="card col-4">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>
          </div>
        </div>
        <div className="card col-6">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>
          </div>
        </div>
      </div> */}
      <div className="row mt-2">
        <div className="card col-12 col-sm-6 col-md-3 col-lg-2 pt-4">
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Custom Pop-Up Tents</h5>
            <p className="card-text">
              Instantly elevate your brand presence with our customizable pop-up
              tents. Perfect for events, trade shows, and outdoor promotions.
            </p>
            <a href="#" className="btn btn-primary">
              Explore Now
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
            <a href="#" className="btn btn-primary">
              Explore Now
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
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home1;
