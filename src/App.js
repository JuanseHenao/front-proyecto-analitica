import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/page2" component={Page2} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
