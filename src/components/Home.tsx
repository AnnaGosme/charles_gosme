import { Title, Container } from "@styledComponents/Page";
import "@styles/home.css";
import houseOfTheRisingSun from "@assets/houseOfTheRisingSun.png";

const Home = () => {
  return (
    <Container>
      <img id="homepage" src={houseOfTheRisingSun} alt="house of the rising sun" />
      <h1>Charles Gosme</h1>
      <h2>
        Musician | <span>Extended Reality Engineer</span> | Doctor of Laws
      </h2>
      <footer>
        Made with 💜 by{" "}
        <a
          href="https://www.linkedin.com/in/anna-gosme/"
          target="_blank"
          rel="noreferrer"
        >
          Disco Cat
        </a>
      </footer>
    </Container>
  );
};

export default Home;
