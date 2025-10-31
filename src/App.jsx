//import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/nav";
import Dictionary from "./pages/dictionary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employerpage from "./pages/employerpage";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/employer" element={<Employerpage />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
