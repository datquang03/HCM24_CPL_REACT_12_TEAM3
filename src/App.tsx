import "./App.css";
import Navbar from "./component/navbar";
import RouterPages from "./routers/RouterPages";

function App() {
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
    </>
  );
}

export default App;
