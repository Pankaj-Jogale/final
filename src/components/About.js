import "./Blog.scss";
import React from "react";
import tent1 from "../assets/tent5.jpg";
import tent2 from "../assets/tent6.jpg";
import tent3 from "../assets/tent7.jpg";

function Resume() {
  return (
    // <div className="container">
    //   <h1 className="bg-black">About Our Tents</h1>
    //   <p>
    //     We are passionate about providing high-quality tents for all your
    //     outdoor adventures and events.
    //   </p>

    //   <div className="row">
    //     <div className="col-md-4">
    //       <img src={tent1} className="img-fluid rounded" alt="Tent 1" />
    //     </div>
    //     <div className="col-md-4">
    //       <img src={tent2} className="img-fluid rounded" alt="Tent 2" />
    //     </div>
    //     <div className="col-md-4">
    //       <img src={tent3} className="img-fluid rounded" alt="Tent 3" />
    //     </div>
    //   </div>

    //   <p>
    //     With our wide range of tents, you can find the perfect shelter for
    //     camping trips, outdoor events, festivals, and more. Our tents are
    //     durable, weather-resistant, and easy to set up, ensuring a hassle-free
    //     experience wherever you go.
    //   </p>

    //   <p>
    //     At OurTents, we are committed to customer satisfaction and providing
    //     top-notch products and service. Whether you're a seasoned outdoor
    //     enthusiast or planning your first camping trip, we've got you covered!
    //   </p>
    // </div>
    <div className="container">
      <h1 className="mb-4 text-primary">About Our Tents</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Our Passion for Quality</h2>
          <p>
            We are passionate about providing high-quality tents for all your
            outdoor adventures and events. Our tents are carefully crafted using
            premium materials to ensure durability, reliability, and
            performance.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Wide Range of Options</h2>
          <p>
            With our wide range of tents, you can find the perfect shelter for
            camping trips, outdoor events, festivals, and more. From spacious
            family tents to lightweight backpacking tents, we have options to
            suit every need and budget.
          </p>
        </div>
      </div>

      <h2 className="mt-4">Explore Our Collection</h2>
      <div className="row">
        <div className="col-md-3">
          <img
            src={tent1}
            className="img-fluid rounded tent-img"
            alt="Tent 1"
          />
        </div>
        <div className="col-md-4">
          <img
            src={tent2}
            className="img-fluid rounded tent-img"
            alt="Tent 2"
          />
        </div>
        <div className="col-md-3">
          <img
            src={tent3}
            className="img-fluid rounded tent-img"
            alt="Tent 3"
          />
        </div>
      </div>

      <h2 className="mt-4">Our Commitment to You</h2>
      <p>
        We are committed to customer satisfaction and providing top-notch
        products and service. Our knowledgeable staff are here to help you find
        the perfect tent for your needs, and our hassle-free return policy
        ensures your peace of mind.
      </p>

      <p>
        Whether you're a seasoned outdoor enthusiast or planning your first
        camping trip, we've got you covered!
      </p>
    </div>
  );
}

export default Resume;
