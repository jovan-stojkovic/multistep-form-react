import Navbar from "./Components/Navbar";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Third from "./Pages/Third";
import Fourth from "./Pages/Fourth";
import Summary from "./Pages/Summary";

import "./Styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/two" element={<Second />} />
            <Route path="/three" element={<Third />} />
            <Route path="/four" element={<Fourth />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
