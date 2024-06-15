import * as Styled from "@styledComponents/Page";
import YouTubeEmbed from "./YoutubeEmbed";

const projects = [
  {
    title: "Crime Scence Witness Memory",
    videoId: "QU9uImW4Q9A",
    description:
      "VR prototype of a crime scene for a research project on eyewitness testimony that I developed within the framework of a University Diploma on VR and Psychology at Université Paris Cité.",
  },
  {
    title: "Prototype of a Skatepark Experience",
    videoId: "jehM7LztfDY",
    description:
      "VR prototype of a Skatepark experience, which I co-created as part of a team of four students during the 2021 Antwerp Summerschool on Storytelling in VR. I was the team's Unity developer. I also contributed to the storytelling, design and 3D modelling of the North Antwerp Skatepark.",
  },
  {
    title: "Performance Anxiety",
    videoId: "AquWEcbBA7c",
    description:
      "VR prototype of a performance anxiety app that I developed as a personal project within the framework of Circuit Stream's course on XR development.",
  },
  {
    title: "Solo Dream",
    videoId: "XNcf_-ixQN4",
    description:
      "'Solar Dream' is a work in progress that I am currently composing for a VR project led and developed in the Unreal Engine by Eric Carter. ",
  },
];

const XR = () => {
  return (
    <Styled.Container>
      <Styled.Title>XR Portfolio</Styled.Title>
      <Styled.SubTitle>
        Below are three personal Virtual Reality projects that I have worked on
        since 2021, as well as a composition for a Virtual Reality project by
        Eric Carter.
      </Styled.SubTitle>
      {projects.map((project) => {
        return (
          <>
            <YouTubeEmbed title={project.title} videoId={project.videoId} />
            <Styled.Heading>{project.description}</Styled.Heading>
          </>
        );
      })}
    </Styled.Container>
  );
};

export default XR;
