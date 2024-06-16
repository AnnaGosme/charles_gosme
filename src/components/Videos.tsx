import * as Styled from "@styledComponents/Page";
import VideosLayout from "./VideosLayout";

const videos = [
  {
    title: "on this shore",
    videoId: "N0atjkFXpTY",
  },
  {
    title: "falling from high",
    videoId: "3ZwkhBffk2Y",
  },
  {
    title: "edge of chaos",
    videoId: "LkI4xAzAYeY",
  },
  {
    title: "the word",
    videoId: "eVwVrN979aI",
  },
  {
    title: "falling from high",
    videoId: "59yWnDYuILM",
  },
  {
    title: "edge of chaos - album",
    videoId: "J5kZB7ohDPY",
  },
  {
    title: "where did you sleep last night",
    videoId: "ZlJ8n7gXEI8",
  },
  {
    title: "hurt",
    videoId: "IBFynoHiEuM",
  },
  {
    title: "the lines",
    videoId: "7hoqLmKgo0Q",
  },
  {
    title: "cello in a rush",
    videoId: "vQxmv1EdaVI",
  },
  {
    title: "god and claus",
    videoId: "OOxj_Flo_V4",
  },
  {
    title: "our time",
    videoId: "r_NMHrwxjZw",
  },
  {
    title: "house of the rising sun",
    videoId: "AszoN-FWulQ",
  },
  {
    title: "morpheus and gaia",
    videoId: "300LQyFNDXI",
  },
  {
    title: "river limbo",
    videoId: "10n4ypp5Hvk",
  },
  {
    title: "our time",
    videoId: "ivdynUG_xEw",
  },
  {
    title: "in the sky",
    videoId: "odEJ3-wKIFk",
  },
  {
    title: "live in berlin",
    videoId: "SQwr2HbURGc",
  },
  {
    title: "running blind",
    videoId: "JVPNPGh64JE",
  },
  {
    title: "stairway to heaven",
    videoId: "vQvnU8kOPME",
  },
];

const Videos = () => {
  return (
    <Styled.Container>
      <Styled.Title>Videos</Styled.Title>
      <VideosLayout videos={videos} />
    </Styled.Container>
  );
};

export default Videos;
