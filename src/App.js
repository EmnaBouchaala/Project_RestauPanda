import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Components/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact/Contact";
import FamilyList from "./Components/FamillyFood/FamillyList";
import FoodList from "./Components/Food/FoodList";
import CommandList from "./Components/Command/CommandList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          {/* <Route exact path="/product/:name"  /> */}
          <Route
            exact
            path="/product/:name"
            render={(props) => (
              <div>
                <HomePage />
                <FoodList {...props} />
              </div>
            )}
          />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={FamilyList} />
          <Route exact path="/Command" component={CommandList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
