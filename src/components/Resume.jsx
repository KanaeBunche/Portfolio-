import "./Resume.css";
import resumePdf from "../assets/Kanae_Bunche_Resume.pdf";

export default function Resume() {
    return (
        <section className="resume-section">
            <div className="resume-layout">
                {/* LEFT — PDF */}
                <div className="resume-left">
                    <h2>Resume</h2>

                    <a
                        href={resumePdf}
                        download
                        className="download-btn"
                    >
                        Download PDF
                    </a>

                    <iframe
                        src={`${resumePdf}#zoom=page-width`}
                        title="Kanae Bunche Resume"
                        className="resume-frame"
                    />
                </div>

                {/* RIGHT — CONTACT */}
               <div className="resume-right">
    <h3>Contact</h3>

    <div className="contact-icons">
        {/* EMAIL */}
        <a
            href="mailto:kanae.bunche@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Email"
            />
        </a>

        {/* LINKEDIN */}
        <a
            href="https://www.linkedin.com/in/kanae-bunche-it-professional/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
            />
        </a>

        {/* GITHUB */}
        <a
            href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
            />
        </a>
    </div>
</div>

            </div>
        </section>
    );
}
