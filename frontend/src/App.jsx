import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Donation from "./components/Donation/Donation";
import Register from "./components/Register/Register";
import LogIn from "./components/Login/LogIn";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";

// 🔁 Wrap layout conditionals in a custom component
const Layout = ({ children }) => {
  const location = useLocation();
  const hidePaths = ["/login", "/register", "/donation"];
  const shouldHide = hidePaths.includes(location.pathname);

  return (
    <>
      <Header />
      {!shouldHide && <Nav />}
      {children}
      {!shouldHide && <Contact />}
      {!shouldHide && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
