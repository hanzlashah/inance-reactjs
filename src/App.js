import logo from "./logo.svg";
import "./App.css";
import Header from "../../my-app/src/Components/Header";
import Navigation from "../../my-app/src/Components/Navigation";
import Hero from "../../my-app/src/Components/Hero";
import AboutUs from "../../my-app/src/Components/AboutUs";
import HomeServies from "../../my-app/src/Components/HomeServies";
import Different_Services from "../../my-app/src/Components/Different_Services";
import Testimonal from "../src/Components/Testimonal"
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <HomeServies />
      <Different_Services />
      <Testimonal />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
