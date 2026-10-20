export default function Home() {
    return (
        <>
        <h2>Welcome</h2>
        <p className="intro">I am Nikhil Saxena, a Computer Science and Economics student at Boston
            University with an interest in software engineering, artificial intelligence, and building
            impactful products.</p>
        <p>I enjoy working across the full stack, exploring emerging technologies, and contributing to
            projects that solve practical problems.</p>

        <div className="contact-links">
            <a className="button-link" href="mailto:njsaxena07@gmail.com">Email</a>
            <a className="button-link" href="https://www.linkedin.com/in/nikhilsaxena07"
                target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button-link" href="https://github.com/njsaxena" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <img src="/headshot.jpg" alt="Nikhil Saxena" />           
        </>        
    );
}