import * as Styled from "@styledComponents/Page";

import ImagesLayout from "./ImagesLayout";

type TImages = { title: string }[];

const images: TImages = [
  { title: "silencio1" },
  { title: "silencio2" },
  { title: "silencio3" },
  { title: "silencio4" },
];

const Photos = () => {
  return (
    <Styled.Container>
      <Styled.Title>Photos</Styled.Title>
      <Styled.SubTitle>
        Concert at Silencio (pictures taken by Zoe Fan)
      </Styled.SubTitle>
      <ImagesLayout images={images} />
    </Styled.Container>
  );
};

export default Photos;
