import "./FeaturedWork.css";
import fordhamVideo from "../assets/fordham-preview.mp4";
import cyberVideo from "../assets/cybermissions-preview.mp4";

export default function FeaturedWork() {
    return (
        <section className="featured-work">

            {/* SECTION HEADER */}
            <div className="section-header">
                <h2 className="section-title">
                    Professional Projects
                </h2>
                <p className="section-subtitle1">
                    Real-world applications I independently designed and built from concept to production.
                </p>
            </div>

            <div className="work-list">

                {/* FORDHAM */}
                <div className="work-card">
                    <div className="work-media">
                        <video
                            src={fordhamVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <h3>AI Tools Platform — Fordham University</h3>

                    <p className="work-summary">
                        University-wide AI discovery and governance platform supporting responsible adoption,
                        administrative workflows, and faculty engagement.
                    </p>

                    <div className="work-tech">
                        React • Node.js • PostgreSQL • Prisma • GSAP
                    </div>

                    <a
                        className="work-link"
                        href="https://www.loom.com/share/1f335e36b83e4037a82870195559750e"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project →
                    </a>
                </div>

                {/* CYBERMISSIONS */}
                <div className="work-card">
                    <div className="work-media">
                        <video
                            src={cyberVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <h3>Cybermissions Website Redesign</h3>

                    <p className="work-summary">
                        End-to-end front-end rebuild focused on performance, accessibility, and modern UI standards
                        for a live production site.
                    </p>

                    <div className="work-tech">
                        HTML • CSS • JavaScript • React
                    </div>

                    <a
                        className="work-link"
                        href="https://cybermissions.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Website →
                    </a>
                </div>

            </div>
        </section>
    );
}
