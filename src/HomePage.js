import React from "react";
import CommandList from "./Components/Command/CommandList";
import FamilyList from "./Components/FamillyFood/FamillyList";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import About from "./Components/About/About";

const HomePage = () => {
  return (
    <div class="container">
      {/* <!-- Top box --> */}
      {/* <!-- Logo & Site Name --> */}

      <main>
        <header class="row tm-welcome-section">
          <h2 class="col-12 text-center tm-section-title">
            Welcome to Panda Express Restaurant
          </h2>
          <p class="col-12 text-center">
            This is our tasty menu , hope you enjoy your command
          </p>
        </header>
        <h1 class="col-12 text-center tm-section-title">OUR MENU</h1>
        <FamilyList />
        {/* <FoodList /> */}
      </main>
    </div>
  );
};

export default HomePage;
