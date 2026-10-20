import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Nav";
import Footer from "./Footer";
import Main from "./Main";

const pageDetails: Record<
    string,
    { title: string; subtitle: string }
> = {
    "/": {
        title: "Nikhil Saxena",
        subtitle: "Computer Science & Economics | Boston University",
    },
    "/education": {
        title: "Education",
        subtitle: "Academic background and studies",
    },
    "/experience": {
        title: "Work Experience",
        subtitle: "Professional experience",
    },
    "/projects": {
        title: "Projects",
        subtitle: "Selected software projects",
    },
    "/skills": {
        title: "Skills",
        subtitle: "Technical skills and proficiencies",
    },
    "/leadership": {
        title: "Extracurricular Experience",
        subtitle: "Leadership, campus involvement, and technical development",
    },
    "/achievements": {
        title: "Achievements",
        subtitle: "Selected accomplishments",
    },
    "/credits": {
        title: "Credits",
        subtitle: "Website sources and acknowledgements",
    },
};

export default function ResumeLayout() {
    const { pathname } = useLocation();
    const details = pageDetails[pathname] ?? pageDetails["/"];

    return (
        <>
            <Header
                title={details.title}
                subtitle={details.subtitle}
            />
            <Navigation />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}