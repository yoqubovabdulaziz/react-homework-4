import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Mac from "./pages/mac/Mac"
import Ipad from "./pages/iPad/Ipad"
import Iphone from "./pages/iPhone/Iphone"
import Watch from "./pages/watch/Watch"
import Vision from "./pages/vision/Vision"
import AirPods from "./pages/airpods/AirPods"
import TvHome from "./pages/tvhome/TvHome"
import Entertainment from "./pages/entertainment/Entertainment"
import Accessories from "./pages/accessories/Accessories"
import Support from "./pages/support/Support"

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iPad" element={<Ipad />} />
        <Route path="/iPhone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/tvhome" element={<TvHome />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
