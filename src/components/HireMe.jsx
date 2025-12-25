import "./HireMe.css";

export default function HireMe() {
    return (
        <section className="hire-section" id="hire">
            <div className="hire-header">
                <h2>Hire Me</h2>
                <p>
                    Small businesses & nonprofits — modern websites, fixes, and updates.
                </p>
            </div>

            <div className="hire-tree">
                <div className="hire-line" />

                {/* Services */}
                <div className="hire-node left">
                    <div className="hire-dot" />
                    <div className="hire-card">
                        <h3>Services</h3>
                        <div className="hire-pills">
                            <span>Website Builds</span>
                            <span>Fixes & Updates</span>
                            <span>Landing Pages</span>
                            <span>Forms</span>
                            <span>Maintenance</span>
                            <span>Full-Stack Engineering</span>
                            <span>Start-from Scratch</span>
                        </div>
                    </div>
                </div>

                {/* Why */}
                <div className="hire-node right">
                    <div className="hire-dot" />
                    <div className="hire-card">
                        <h3>Why work with me</h3>
                        <ul>
                            <li>Production experience (real users, real deadlines)</li>
                            <li>Clear communication, no jargon</li>
                            <li>Fast delivery without cutting corners</li>
                        </ul>
                    </div>
                </div>

                {/* How I work */}
                <div className="hire-node left">
                    <div className="hire-dot" />
                    <div className="hire-card">
                        <h3>How I work</h3>
                        <p>
                            I use modern tools — including AI — to speed up research, debugging,
                            and repetitive tasks. <strong>AI does not build projects on its own.</strong>{" "}
                            Every solution is planned, reviewed, and implemented by me.
                        </p>
                    </div>
                </div>

                {/* Process + pricing */}
                <div className="hire-node right">
                    <div className="hire-dot" />
                    <div className="hire-card">
                        <h3>Process & pricing</h3>
                        <p className="hire-mini">
                            Free consult → 50% deposit → build → final payment before delivery
                        </p>
                        <p className="hire-mini">
                            Most small projects start at <strong>$500–$1,000</strong>.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="hire-node left">
                    <div className="hire-dot" />
                    <div className="hire-card">
                        <h3>Schedule</h3>
                        <div className="hire-cta">
                            <a
                                className="hire-btn"
                                href="https://calendly.com/kanae-bunche/new-meeting"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book a free 30-minute consultation
                            </a>

                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

