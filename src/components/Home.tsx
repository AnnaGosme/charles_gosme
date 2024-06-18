import { Container } from "@styledComponents/Page";
import "@styles/home.css";
import houseOfTheRisingSun from "@assets/houseOfTheRisingSun.png";

const Home = () => {
  return (
    <Container>
      <img
        id="homepage"
        src={houseOfTheRisingSun}
        alt="house of the rising sun"
      />
      <h1>Charles_Gosme</h1>
      <h2 id="homepage">
        Musician | <br /> <span>Extended Reality Engineer</span> <br />| Doctor
        of Laws
      </h2>
    </Container>
  );
};

export default Home;
