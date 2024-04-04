import "./Blog.scss";
import React from "react";
import tent1 from "../assets/tent4.jpg";
import tent2 from "../assets/tent2.jpg";
import tent3 from "../assets/tent3.jpg";

function Blog() {
  return (
    <div className="container">
      <header>
        <h1 className="mb-4 text-warning">Exploring the World of Tents</h1>
        <p className="lead">
          Discover the beauty and functionality of our high-quality tents
          designed for outdoor enthusiasts and adventurers.
        </p>
      </header>

      <section>
        <h2 className="mt-5">Our Passion for Quality</h2>
        <p>
          We are thrilled to share our passion for providing high-quality tents
          that are meticulously designed and crafted to meet the needs of
          outdoor enthusiasts and adventurers alike. Each tent in our collection
          undergoes rigorous testing to ensure durability, reliability, and
          performance, so you can trust that you're investing in a product that
          will withstand the elements and last for years to come.
        </p>
      </section>

      <section>
        <h2 className="mt-5">Discover Our Collection</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src={tent1}
              className="img-fluid rounded tent-img"
              alt="Tent 1"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src={tent2}
              className="img-fluid rounded tent-img"
              alt="Tent 2"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src={tent3}
              className="img-fluid rounded tent-img"
              alt="Tent 3"
            />
          </div>
        </div>
        <p>
          Explore our diverse collection of tents, ranging from spacious family
          tents to lightweight backpacking tents. Whether you're planning a
          weekend camping trip with friends or embarking on a solo adventure in
          the wilderness, we have the perfect shelter for you.
        </p>
      </section>

      <section>
        <h2 className="mt-5">Our Commitment to You</h2>
        <p>
          At OurTents, we are committed to providing exceptional products and
          service to our customers. Our knowledgeable team is here to assist you
          every step of the way, from selecting the right tent for your needs to
          providing expert advice on care and maintenance. We stand behind our
          products and offer a hassle-free return policy to ensure your complete
          satisfaction.
        </p>
      </section>

      <footer className="mt-5">
        <p>
          Thank you for joining us on this journey through the world of tents.
          We hope you find the perfect shelter for your next outdoor adventure!
        </p>
      </footer>
    </div>
  );
}

export default Blog;
