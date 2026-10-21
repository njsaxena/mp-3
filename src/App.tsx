
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumeLayout from "./components/ResumeLayout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Leadership from "./pages/Leadership";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
import Credits from "./pages/Credits";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ResumeLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "education", element: <Education /> },
            { path: "experience", element: <Experience /> },
            { path: "projects", element: <Projects /> },
            { path: "leadership", element: <Leadership /> },
            { path: "achievements", element: <Achievements /> },
            { path: "skills", element: <Skills /> },
            { path: "credits", element: <Credits /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

