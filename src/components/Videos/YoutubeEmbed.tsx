import * as Styled from "@styledComponents/Page";

type TYoutubeVideoProps = {
  title: string;
  videoId: string;
  height: string;
  width: string;
};

const YouTubeEmbed = ({ title, videoId, height, width }: TYoutubeVideoProps) => {
  return (
    <Styled.YoutubeFrame>
      <Styled.IFrame
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        height={height}
        width={width}
      />
    </Styled.YoutubeFrame>
  );
};

export default YouTubeEmbed;
