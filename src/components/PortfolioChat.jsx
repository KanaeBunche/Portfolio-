import { useState } from "react";
import "./PortfolioChat.css";


const PRESET_ANSWERS = [
    {
        match: ["fordham", "ai", "tools", "university"],
        answer:
            "At Fordham University, I built a full-stack AI tools platform using React, Node.js, and PostgreSQL with authentication, admin approvals, search, and curated AI recommendations."
    },
    {
        match: ["tech", "stack", "tools", "languages"],
        answer:
            "My main stack includes React, JavaScript, Node.js, Express, PostgreSQL, REST APIs, GSAP animations, and Prisma."
    },
    {
        match: ["frontend", "backend", "fullstack"],
        answer:
            "I'm a full-stack developer with strong frontend experience, focusing on clean UI, motion design, and thoughtful UX."
    },
    {
        match: ["projects", "build", "portfolio"],
        answer:
            "I’ve built AI dashboards, admin systems, e-commerce platforms, landing pages, and interactive JavaScript applications."
    },
    {
        match: ["available", "hire", "work"],
        answer:
            "Yes — I’m open to opportunities where I can build meaningful, user-centered products with modern teams."
    },
    {
        match: ["design", "ui", "ux", "style"],
        answer:
            "My design style leans toward dark themes, subtle animations, clean layouts, and interactive details that enhance usability."
    },
    {
        match: ["experience", "background", "journey"],
        answer:
            "I started by teaching web development, then transitioned into building real-world applications and platforms for organizations."
    }
];

function getAnswer(question) {
    const q = question.toLowerCase();
    const found = PRESET_ANSWERS.find(item =>
        item.match.some(word => q.includes(word))
    );

    return (
        found?.answer ||
        "Great question — my work focuses on building modern, scalable web experiences with strong UX and clean architecture."
    );
}

export default function PortfolioChat() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!question.trim()) return;
        setAnswer(getAnswer(question));
    }

    return (
        <section className="portfolio-chat-section">
            <div className="portfolio-chat-card">
                <h3>Ask me about my work</h3>
                <p>
                    Curious about my skills, experience, or projects? Ask below.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="e.g. What tech stack do you use?"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button type="submit">Ask</button>
                </form>

                {answer && (
                    <div className="chat-answer">
                        {answer}
                    </div>
                )}
            </div>
           
        </section>
        
    );
}
