import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/header.jsx";
import CoreConcept from "./components/coreconcept.jsx";
// import DiscountButton from "./components/discount.jsx"
import TabButton from "./components/TabButton.jsx";
import Trying from "./components/justTryingThings.jsx";
import { Example } from "./data.js";

let users = {
  firstName: "Maximilian",
  lastName: "devjay",
  title: "front end dev",
};

function MainGoal() {
  return (
    <div>
      <p>my main goal is to learn react</p>
    </div>
  );
}

function User() {
  return (
    <div>
      <h2>
        {users.lastName} {users.firstName}
      </h2>
      <p>{users.title}</p>
    </div>
  );
}

function App() {
  let [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <main>
        <section id="core-concept">
          <h2>core concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
      <Header />
      <MainGoal />
      <nav>
        <Trying label="just try" />
        <Trying label="just try" />
        <Trying label="just try" />
        <Trying label="just try" />
      </nav>
      <User />
      {/* <ul>
        <DiscountButton onClick={() => handleDis("100 box")} label="price 1" />
        <DiscountButton onClick={() => handleDis("10 box")} label="price 2" />
        <DiscountButton onClick={() => handleDis("600 box")} label="price 3" />
        <DiscountButton onClick={() => handleDis("500 box")} label="price 4" />
        {prices}
      </ul> */}
      <section id="examples">
        <h2>examples</h2>
        <menu>
          <TabButton
            onClick={() => handleClick("components")}
            label="component"
          />
          <TabButton onClick={() => handleClick("jsx")} label="jsx" />
          <TabButton onClick={() => handleClick("jsx")} label="jsx" />
          <TabButton onClick={() => handleClick("props")} label="props" />
          <TabButton onClick={() => handleClick("state")} label="state" />
          {/* <TabButton label="component" /> */}
        </menu>
        <div id="tab-content">
          <h3>{Example[selectedTopic].titles}</h3>
          <p>{Example[selectedTopic].description}</p>
          <pre>
            <code>{Example[selectedTopic].code}</code>
          </pre>
        </div>
        {/* {selectedTopic} */}
      </section>
    </div>
  );
}

export default App;