import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayNav from "./pages/DisplayNav";
import HideNav from "./pages/HideNav";
import Candidate from "./pages/Candidate";

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
            <Route path="/candidates" element={<Candidate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;