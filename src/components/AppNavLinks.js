import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Button } from "@primer/react";
import {
  RiSearchLine,
  RiUserFill,
  RiHeartFill,
  RiShoppingCartFill,
} from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

function AppNavLinks() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }
  useEffect(() => {
    // Retrieve cart count from local storage on component mount
    const savedCartCount = localStorage.getItem("cartCount");
    if (savedCartCount) {
      setCartCount(parseInt(savedCartCount, 10));
    }
  }, [cartCount]);
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top ps-2 ">
      <div className="container-fluid justify-content-center">
        <Link
          className="navbar-brand "
          to="#"
          onClick={() => setIsNavOpen(false)}
        >
          <span className="text-danger fw-bold fs-3">Shop-at-Tip</span>
        </Link>
        {/*  */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" onClick={toggleNav}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleNav}>
                About
              </Link>
            </li>
            <li className="nav-item pe-2 ">
              <Link className="nav-link" to="/blog" onClick={toggleNav}>
                Blogs
              </Link>
            </li>
            {/* <li className="nav-item d-flex align-items-center">
              <div className="searchboxy">
                <input
                  type="search"
                  name="search"
                  placeholder="Search for product"
                  id=""
                />
              </div>
              <div className="search-icon d-flex align-items-center">
                <Button>
                  <RiSearchLine />
                  Search
                </Button>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <li className="nav-item d-flex align-items-center">
            <div className="searchboxy ">
              <input
                className="form-control form-control-sm mr-sm-2 fs-0"
                type="search"
                name="search"
                placeholder="Search for product"
                id=""
              />
            </div>
            <div className="search-icon d-flex align-items-center">
              <button className="btn btn-primary btn-sm ms-1">
                <RiSearchLine />
                Search
              </button>
            </div>
          </li>
          {/* <button className="btn btn-unstyled">
            <FaShoppingCart className="fs-4 ms-2" />
          </button> */}
          <button className="btn btn-unstyled position-relative">
            <FaShoppingCart className="fs-4 ms-2" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                {cartCount}
              </span>
            </span>
          </button>

          <button
            className="navbar-toggler ms-4 "
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default AppNavLinks;
