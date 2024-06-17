import { useState } from "react";
import YouTubeEmbed from "./YoutubeEmbed";
import { Button } from "@styledComponents/Page";
import "@styles/videolayout.css";

type TVideo = { title: string; videoId: string };
type TVideosProps = {
  videos: TVideo[] | null;
};

const VideosLayout = ({ videos }: TVideosProps) => {
  const [currentVideo, setCurrentVideo] = useState<TVideo>(
    videos && videos.length > 0 ? videos[0] : {title: "", videoId: ""}
  );

  const handleCurrentVideoChange = (video: TVideo) => {
    setCurrentVideo(video);
  };

  return (
    <>
      <YouTubeEmbed
        title={currentVideo && currentVideo.title!}
        videoId={currentVideo.videoId!}
        height="500px"
        width="800px"
      />
      <div className="video_thumbnails-outer">
        <div className="video_thumbnails-inner">
          {videos && videos.slice(1).map((video, index) => (
            <div key={index} className="video_thumbnail">
              <YouTubeEmbed
                title={video.title!}
                videoId={video.videoId!}
                height="auto"
                width="300px"
              />
              <Button onClick={() => handleCurrentVideoChange(video)}>
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideosLayout;
