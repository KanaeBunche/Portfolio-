import { useEffect } from "react";
import FeaturedWork from "./Featured";
import "./Hero.css";
import avatarImg from "../assets/avatar.png";
import PortfolioChat from "./PortfolioChat";

import Resume from "./Resume";
import gsap from "gsap";
window.gsap = gsap;



export default function Hero() {
    useEffect(() => {
        const canvas = document.getElementById("mesh-canvas");
        const ctx = canvas.getContext("2d");

        // -----------------------------
        // FULL SCREEN CANVAS SETUP ✅
        // -----------------------------
        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        setCanvasSize();

        let width = canvas.width;
        let height = canvas.height;

        let target = { x: width / 2, y: height / 2 };
        let points = [];

        // Resize handler ✅
        window.addEventListener("resize", () => {
            setCanvasSize();
            width = canvas.width;
            height = canvas.height;

            target.x = width / 2;
            target.y = height / 2;
        });

        // -----------------------------
        // CREATE POINT GRID
        // -----------------------------
        for (let x = 0; x < width; x += width / 20) {
            for (let y = 0; y < height; y += height / 20) {
                let px = x + Math.random() * width / 20;
                let py = y + Math.random() * height / 20;
                points.push({
                    x: px,
                    originX: px,
                    y: py,
                    originY: py,
                    active: 0
                });
            }
        }

        // -----------------------------
        // FIND CLOSEST POINTS
        // -----------------------------
        points.forEach((p1) => {
            let closest = [];
            points.forEach((p2) => {
                if (p1 === p2) return;

                if (closest.length < 5) {
                    closest.push(p2);
                } else {
                    for (let i = 0; i < 5; i++) {
                        if (getDistance(p1, p2) < getDistance(p1, closest[i])) {
                            closest[i] = p2;
                            break;
                        }
                    }
                }
            });
            p1.closest = closest;
        });

        // -----------------------------
        // ASSIGN CIRCLES
        // -----------------------------
        points.forEach((p) => {
            p.circle = {
                radius: 2 + Math.random() * 2,
                active: 0
            };
        });

        // -----------------------------
        // POINT FLOATING ANIMATION
        // -----------------------------
        function shiftPoint(p) {
            gsap.to(p, {
                duration: 1 + Math.random(),
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: "circ.inOut",
                onComplete: () => shiftPoint(p)
            });
        }

        points.forEach((p) => shiftPoint(p));

        // -----------------------------
        // MAIN LOOP
        // -----------------------------
        function animate() {
            ctx.clearRect(0, 0, width, height);

            points.forEach((p) => {
                let dist = getDistance(target, p);

                p.active = dist < 4000 ? 0.3 : dist < 20000 ? 0.1 : 0.02;
                p.circle.active = p.active * 2;

                drawLines(p);
                drawCircle(p);
            });

            requestAnimationFrame(animate);
        }
        animate();

        // -----------------------------
        // DRAW FUNCTIONS
        // -----------------------------
        function drawLines(p) {
            if (p.active <= 0) return;

            p.closest.forEach((c) => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(c.x, c.y);
                ctx.strokeStyle = `rgba(20,241,200,${p.active})`;
                ctx.stroke();
            });
        }

        function drawCircle(p) {
            if (p.circle.active <= 0) return;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.circle.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(20,241,200,${p.circle.active})`;
            ctx.fill();
        }

        // -----------------------------
        // MOUSE INTERACTION
        // -----------------------------
        window.addEventListener("mousemove", (e) => {
            target.x = e.clientX;
            target.y = e.clientY;
        });

        function getDistance(p1, p2) {
            return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
        }
    }, []);

    return (
        <section className="hero">
            <canvas id="mesh-canvas" className="mesh-canvas"></canvas>

            <div className="hero-inner hero-stack">
                {/* TOP ROW */}
                <div className="hero-main-row">
                    <div className="hero-text">
                        <span className="hero-pill">Full-Stack Web Developer</span>

                        <h1 className="hero-title">
                            Hi, I’m <span className="hero-name">Kanae Bunche</span>
                        </h1>

                        <p className="hero-subtext">
                            I build bold, modern web experiences — from AI tools for Fordham University
                            to e-commerce and mission-driven platforms.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">View my projects</a>
                            <a href="#resume" className="btn btn-outline">Let's work together</a>
                            <a href="#resume" className="btn btn-outline">Resume</a>
                        </div>

                        <div className="tech-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>PostgreSQL</span>
                            <span>JavaScript</span>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="avatar-wrap">
                            <div className="avatar-circle"></div>
                            <img src={avatarImg} className="avatar-img" alt="Kanae Avatar" />
                        </div>
                    </div>
                </div>

                {/* ✅ CHAT UNDER TITLE + AVATAR */}
                <div className="hero-chat-row">
                    <PortfolioChat />
                </div>
                <div id="projects">
              <FeaturedWork/>
                </div>
                <div className="hero-resume" id="resume" >
                    <Resume/>
                </div>
            </div>
        </section>
    );

    
}
