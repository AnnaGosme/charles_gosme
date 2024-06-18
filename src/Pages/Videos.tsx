import * as Styled from "@styledComponents/Page";
import VideosLayout from "../components/Videos/VideosLayout";
import { useEffect, useState } from "react";

type TVideosResource = "videos";

type TVideo = {
  title: string;
  videoId: string;
};

type TFetchVideosFunction = {
  fetchData: (resource: TVideosResource) => Promise<TVideo[] | null>;
};

const Videos = ({ fetchData }: TFetchVideosFunction) => {
  const [videos, setVideos] = useState<TVideo[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videos = await fetchData("videos");
        setVideos(videos);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          return "An unknown error occured";
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);


  return (
    <Styled.Container>
      {isLoading ? (
        <Styled.Title>Loading ...</Styled.Title>
      ) : error ? (
        <Styled.Title>Error: {error}</Styled.Title>
      ) : (
        <>
          <Styled.Title>Videos</Styled.Title>
          <VideosLayout videos={videos} />
        </>
      )}
    </Styled.Container>
  );
};

export default Videos;
