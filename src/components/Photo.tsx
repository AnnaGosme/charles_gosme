import * as Styled from "@styledComponents/Page";

type TPhoto = {
  title: string;
  src: string;
};

const Photo = ({ title, src }: TPhoto) => {
  return (
    <>
      <img src={src} alt={title} />
    </>
  );
};

export default Photo;