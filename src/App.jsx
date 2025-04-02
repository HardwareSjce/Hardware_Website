import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Upcoming from "./components/Upcoming";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";
import Events from "./components/Events";
function App() {
  const [selectedSection, setSelectedSection] = useState("home");

  return (
    <div>
      <Header setSelectedSection={setSelectedSection} />
      
      {selectedSection === "home" && <Main />}
      {selectedSection === "calendar" && <Upcoming />}
      {selectedSection === "event" && <Events />}
      {selectedSection === "about" && <About />}
      {selectedSection === "contact" && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;
