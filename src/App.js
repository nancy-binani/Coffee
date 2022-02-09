import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
