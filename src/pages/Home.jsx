import img from "../assets/home-image-1.png";
import Typewriter from "typewriter-effect";
import "../styles/homePage.css";

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-text-content">
        <h2 className="home-text-content-title">
          Hello,{" "}
          <span className="greeting">
            Everyone! <span className="waving">👋</span>
          </span>
        </h2>
        <div className="hero-page-text-desc">
          <span>I am Vujadin and I'm </span>
          <span className="home-text-typing">
            <Typewriter
              options={{
                strings: ["JavaScript", "React", "NextJS"],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 150,
              }}
            />
          </span>
          <p> Frontend Developer</p>
        </div>
      </div>
      <div className="home-image-container">
        <img src={img} alt="" />
      </div>
    </section>
  );
};
export default Home;
