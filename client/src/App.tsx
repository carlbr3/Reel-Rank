import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>ReelRank</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
