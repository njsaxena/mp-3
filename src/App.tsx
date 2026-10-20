
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumeLayout from "./components/ResumeLayout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Leadership from "./pages/Leadership";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
import Credits from "./pages/Credits";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<ResumeLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/leadership" element={<Leadership />}/>
            <Route path="/achievements" element={<Achievements />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/credits" element={<Credits />}/>
          </Route>
        </Routes>
      </BrowserRouter>
);
}

