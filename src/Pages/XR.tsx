import { useEffect, useState } from "react";
import * as Styled from "@styledComponents/Page";
import YouTubeEmbed from "@components/Videos/YoutubeEmbed";

type TProject = { title: string; videoId: string; description: string };
type TProjects = TProject[];

const XR = () => {
  const [projects, setProjects] = useState<TProjects | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resource = "xr";
    const fetchData = async (resource: string) => {
      try {
        const response = await fetch(
          `http://localhost:8000/api.php?resource=${resource}`
        );
        if (!response.ok) throw new Error("response not ok");
        const projects = await response.json();
        setProjects(projects);
      } catch (error: unknown) {
        if (error instanceof Error) {
          // Handle specific error related to network, fetch, or JSON parsing
          setError(error.message);
        } else {
          return "unknown error";
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(resource);
  }, []);

  return (
    <>
      {isLoading ? (
        <Styled.Title>Loading ...</Styled.Title>
      ) : error ? (
        <Styled.Title>{error}</Styled.Title>
      ) : (
        <Styled.Container>
          <Styled.Title>XR Portfolio</Styled.Title>
          <Styled.SubTitle>
            Below are three personal Virtual Reality projects that I have worked
            on since 2021, as well as a composition for a Virtual Reality
            project by Eric Carter.
          </Styled.SubTitle>
          {projects &&
            projects.map((project, index) => (
              <div key={index} style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <YouTubeEmbed
                  title={project.title}
                  videoId={project.videoId}
                  height="500px"
                  width="800px"
                />
                <Styled.Heading>{project.description}</Styled.Heading>
              </div>
            ))}
        </Styled.Container>
      )}
    </>
  );
};

export default XR;
