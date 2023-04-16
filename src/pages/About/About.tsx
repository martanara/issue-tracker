import React, { useRef, useEffect } from "react";

import "./styles.scss";

const About = () => {
    const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        });

        paragraphRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            paragraphRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const handleObserver: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    };

    return (
        <React.Fragment>
            <div className="about">
                <div className="about-message">
                    <p className="about-message-text">
                        Drawing inspiration from a variety of sources, the creators of <span>Trackly</span> set out to create a tool that
                        was both functional and easy to use. Read on to learn more about how <span>Trackly</span> was inspired and
                        developed.
                    </p>
                </div>
            </div>
            <div className="about-trackly">
                <div className="about-trackly-content">
                    <p ref={(el) => (paragraphRefs.current[0] = el)}>
                        Trackly is an issue tracking app that was inspired by the need for a simple and intuitive way to manage and track
                        issues in software development projects. The creators of Trackly saw that many existing issue tracking tools were
                        either too complex and difficult to use, or too simplistic and lacking in features. They wanted to create a tool
                        that struck the right balance between functionality and ease of use.
                    </p>
                    <p ref={(el) => (paragraphRefs.current[1] = el)}>
                        To achieve this goal, the creators of Trackly drew inspiration from a variety of sources. They looked at other
                        popular issue tracking tools to see what worked well and what could be improved. They also talked to developers and
                        project managers to get a better understanding of their needs and pain points when it comes to issue tracking.{" "}
                    </p>
                    <p ref={(el) => (paragraphRefs.current[2] = el)}>
                        Additionally, the creators of Trackly drew inspiration from modern design principles and user experience best
                        practices. They wanted to create an app that was not only functional, but also visually appealing and easy to
                        navigate. They focused on creating a clean and simple user interface that would allow users to quickly and easily
                        create, assign, and track issues.
                    </p>
                    <p ref={(el) => (paragraphRefs.current[3] = el)}>
                        Overall, Trackly was inspired by a desire to create a better issue tracking tool that would meet the needs of
                        developers and project managers, while also being easy and enjoyable to use.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
