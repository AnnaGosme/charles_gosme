import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LawAndPolicy from "Pages/LawAndPolicy";
import Music from "Pages/Music";
import XR from "Pages/XR";
import Videos from "@components/Videos/Videos";
import Photos from "Pages/Photos";
import Contact from "Pages/Contact";
import Home from "@components/Home";
import Nav from "@components/Nav";
import Body from "@components/Body";

type TResource = "publications" | "music" | "xr" | "videos" | "photos";

const App = () => {
  const fetchData = async (resource: TResource) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api.php?resource=${resource}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error;
      } else {
        return "An unknown error occured";
      }
    }
  };

  return (
    <Router>
      <Nav />
      <Body>
        <Routes>
          <Route
            path="/law-policy"
            element={<LawAndPolicy fetchData={fetchData} />}
          />
          <Route path="/music" element={<Music />} />
          <Route path="xr/" element={<XR />} />
          <Route path="/videos" element={<Videos fetchData={fetchData} />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Body>
    </Router>
  );
};

export default App;
