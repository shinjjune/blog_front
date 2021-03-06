/* eslint-disable */
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Advertise from "./Advertise";
import Join from "./Join";
import Write from "./Write";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = {
    isLoggedIn,
    isAdmin,
    setIsLoggedIn,
    setIsAdmin
  };
  return (
    <BrowserRouter>
      <Nav {...auth} />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" render={props => <Login {...props} {...auth} />} />
      <Route path="/advertise/:id" component={Advertise} />
      <Route path="/join" component={Join} />
      <Route path="/write" component={Write} />
      <Footer />
    </BrowserRouter>
  );
}
