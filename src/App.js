import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Hero from "./src/Components/Hero";
import AboutUs from "./Components/AboutUs";
import HomeServies from ".//Components/HomeServies";
import Different_Services from "./Components/Different_Services";
import Testimonal from "./src/Components/Testimonal";
import ContactUs from "./src/Components/ContactUs";
import Footer from " ./src/Components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <HomeServies />
      <Different_Services />
      <Testimonal />
      <ContactUs />
      <Footer />
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
