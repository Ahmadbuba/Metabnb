import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import Places from "./pages/Places";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toogleShowModal = () => {
    setShowModal((preVal) => !preVal);
  };

  return (
    <React.Fragment>
      {showModal && <Modal toogleModal={toogleShowModal} />}
      <Header toogleModal={toogleShowModal} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
