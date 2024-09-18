import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import RouterPages from "./routers/RouterPages";

function App() {
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    // Function to generate a random color
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    const colorInterval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="content-wrapper">
        <main className="main-content">
          <RouterPages />
        </main>
      </div>
      <footer
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          color: color,
          transition: "color 0.5s ease",
        }}
      >
        We are team 3 - HCM24_REACT_12
      </footer>
    </>
  );
}

export default App;
