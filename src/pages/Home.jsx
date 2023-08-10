import img from "../assets/home-image.png";
const Home = () => {
  return (
    <section className="home-page">
      <div className="home-text-content">
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          nobis praesentium doloremque corporis omnis ducimus magnam nemo,
          aperiam, recusandae alias sapiente quidem aliquid veritatis quas amet!
          Ea ab eligendi a excepturi autem. Pariatur suscipit sunt qui debitis
          id explicabo eveniet.
        </p>
      </div>
      <div className="home-image-container">
        <img src={img} alt="" />
      </div>
    </section>
  );
};
export default Home;
