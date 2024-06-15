import * as Styled from "@styledComponents/Page";

type TYoutubeVideo = {
    title: string;
    videoId: string;
}

const YouTubeEmbed = ({title, videoId}: TYoutubeVideo) => {
return (
      <Styled.YoutubeFrame>
        <Styled.IFrame
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Styled.YoutubeFrame>
  );
};

export default YouTubeEmbed;