import * as Styled from "@styledComponents/Page";
import Photo from "./Photo";

const photos = [
  {
    title: "Silencio1",
    link: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/218831/9ebffc12ce43f999d4eb3be90de1c348b486b87b/original/fbeb4338-ed38-4936-84e5-fa149daad48e.jpeg/!!/b%3AW1sic2l6ZSIsInBob3RvIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
  },
  {
    title: "Silencio2",
    link: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/218831/7771635c27de4ec850e9cbbb90743c07077e7309/original/363b09cb-3d5f-4754-9c56-4c6fbd131d60.jpeg/!!/b%3AW1sic2l6ZSIsInBob3RvIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
  },
  {
    title: "Silencio3",
    link: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/218831/30a57f3d5725d52ceca4d0640c7b6e9522c45ac2/original/fbeb4338-ed38-4936-84e5-fa149daad48e-1.jpeg/!!/b%3AW1sic2l6ZSIsInBob3RvIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
  },
  {
    title: "Silencio4",
    link: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/218831/592b3a03b787bc9a5c310fcd742666813a520ee4/original/11f69fb8-2639-4d1c-9320-687d02521766.jpeg/!!/b%3AW1sic2l6ZSIsInBob3RvIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
  },
  {
    title: "Silencio5",
    link: "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/218831/2f56376fb046aee0aa2a450aa646ec0ad63be839/original/3fbf142a-cfa5-4f9a-9f13-3d61501012b6.jpeg/!!/b%3AW1sic2l6ZSIsInBob3RvIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
  },
];

const Photos = () => {
  return (
    <Styled.Container>
      <Styled.Title>Photos</Styled.Title>
      <Styled.SubTitle>Concert at SILENCIO (pictures taken by Zoe Fan)</Styled.SubTitle>
      {photos.map((photo) => (
        <Photo src={photo.title} title={photo.link} />
      ))}
    </Styled.Container>
  );
};

export default Photos;
