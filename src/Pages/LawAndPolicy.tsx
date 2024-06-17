import { useState, useEffect } from "react";
import * as Styled from "@styledComponents/Page";

type TPublicationResource = "publications";

type TPublication = {
  title: string;
  link: string;
};

type TFetchResourceFunction = {
  fetchData: (resource: TPublicationResource) => Promise<TPublication[] | null>;
};

const LawAndPolicy = ({ fetchData }: TFetchResourceFunction) => {
  const [publications, setPublications] = useState<TPublication[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const publications = await fetchData("publications");
        setPublications(publications);
      } catch (error: unknown) {
        if (error instanceof Error) {
          return error;
        } else {
          return "An unknown error occured";
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPublications();
  }, []);

  return (
    <Styled.Container>
      {isLoading ? (
        <Styled.Title>Loading ...</Styled.Title>
      ) : error ? (
        <Styled.Title>Error: {error}</Styled.Title>
      ) : (
        <>
          <Styled.Title>Law and Policy</Styled.Title>
          {publications && publications.map((publication, index) => (
            <Styled.Anchor
              key={index}
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {publication.title.toUpperCase()}
            </Styled.Anchor>
          ))}
        </>
      )}
    </Styled.Container>
  );
};

export default LawAndPolicy;
