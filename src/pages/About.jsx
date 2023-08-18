import { Link } from "react-router-dom";
import imgUrl from "../assets/about-img.png";
import "../styles/aboutPage.css";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

import certificateData from "../data/certificateData";
import CardDetail from "../components/CardDetail/CardDetail.component";
import { useState } from "react";

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const loaded = () => setIsImageLoaded(true);

  return (
    <section className="about__page">
      <div className="about-container">
        <div
          className={`about-container-image-wrapper ${
            !isImageLoaded ? "aboutImgLoading" : ""
          }`}
        >
          <img
            className="about-image"
            loading="lazy"
            src={imgUrl}
            alt=""
            onLoad={loaded}
          />
        </div>
        <div className="about-text-wrapper">
          <h1 className="about-text-title">Let me introduce myself</h1>
          <p>
            My name is Vujadin Dagovic, self-taught Frontend Web Developer based
            in Kragujevac, Serbia.
          </p>
          <p>
            I've always loved technology so I decided to try coding. Naturaly I
            fell in love immediately and after learning from various web
            platforms I've done a few applications using JavaScript, HTML, CSS
            and React. Learning to code for me was the best decision that I've
            made and I hope to become really good at it.
          </p>
          <p>You can see my project's by clicking the button below.</p>
          <Link className="about-projects-btn" to={"/projects"}>
            Projects
          </Link>
        </div>
      </div>
      <div className="tech-icons-container">
        <div className="tech-icon-wrap">
          <AiFillHtml5 />
          <p>Html</p>
        </div>
        <div className="tech-icon-wrap">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="tech-icon-wrap">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="tech-icon-wrap">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div className="tech-icon-wrap">
          <RiReactjsFill />
          <p>React</p>
        </div>
        <div className="tech-icon-wrap">
          <SiNextdotjs />
          <p>NextJS</p>
        </div>
        <div className="tech-icon-wrap">
          <SiTailwindcss />
          <p>Tailwind</p>
        </div>
        <div className="tech-icon-wrap">
          <BsGit />
          <p>Git</p>
        </div>
      </div>
      <div className="hr-line"></div>
      <div className="cert-container">
        <h2>CERTIFICATIONS</h2>
        <div className="cert-grid">
          {certificateData.map((cert) => (
            <CardDetail key={cert.id} project={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
