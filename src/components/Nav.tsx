import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav id="main-nav" aria-label="Main navigation">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/leadership">Leadership</NavLink></li>
                <li><NavLink to="/achievements">Achievements</NavLink></li>
                <li><NavLink to="/credits">Credits</NavLink></li>
            </ul>
        </nav>
    );
}