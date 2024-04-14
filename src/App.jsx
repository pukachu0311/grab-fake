import "./App.css";
import { Route, Routes } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        {/* <TemporaryDrawer /> */}
      </div>
    </>
  );
}

export default App;
