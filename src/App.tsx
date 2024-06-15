import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LawAndPolicy from "@components/LawAndPolicy";
import Music from "@components/Music";
import XR from "@components/XR";
import Videos from "@components/Videos";
import Photos from "@components/Photos";
import Contact from "@components/Contact";
import Home from "@components/Home";
import Nav from "@components/Nav";
import Body from "@components/Body";

const App = () => {
  return (
    <Router>
      <Nav />
      <Body>
        <Routes>
          <Route path="/law-policy" element={<LawAndPolicy />} />
          <Route path="/music" element={<Music />} />
          <Route path="xr/" element={<XR />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Body>
    </Router>
  );
};

export default App;
