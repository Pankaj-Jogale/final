import { Route, Routes } from "react-router-dom";
import AppNavLinks from "./components/AppNavLinks";
import Contact from "./components/Contact";
import Home1 from "./components/Home1";
import React from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import { ThemeProvider, BaseStyles } from "@primer/react";
import Blog from "./components/Blog";

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div>
          <AppNavLinks />
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />

            <Route
              path="*"
              element={
                <h1
                  style={{
                    color: "black",
                    marginLeft: "38%",
                    marginTop: "20%",
                  }}
                >
                  Page Not Found
                </h1>
              }
            />
          </Routes>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
