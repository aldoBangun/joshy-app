import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayNav from "./pages/DisplayNav";
import HideNav from "./pages/HideNav";
import Candidate from "./pages/Candidate";
import Landing from "./pages/landing/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HideNav />}>
            {/* nanti komentar ini dihapus saja mas Verdy */}
            {/*  */}
          </Route>
          <Route element={<DisplayNav />}>
            <Route path="/" element={<Landing />} />
            <Route path="/candidates" element={<Candidate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;