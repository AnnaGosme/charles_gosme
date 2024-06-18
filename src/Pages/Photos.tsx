import * as Styled from "@styledComponents/Page";
import ImagesLayout from "@components/Images/ImagesLayout";
import { useEffect, useState } from "react";

type TPhotosResource = "photos";
type TImage = { id: number; title: string, credit: string };
type TImages = TImage[];

const Photos = () => {
  const [photos, setPhotos] = useState<TImages | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (resource: TPhotosResource) => {
      try {
        const response = await fetch(
          `http://localhost:8000/api.php?resource=${resource}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setPhotos(result);
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
    fetchData("photos");
  }, []);

  return (
    <Styled.Container>
      {isLoading ? (
        <Styled.Title>Loading ...</Styled.Title>
      ) : error ? (
        <Styled.Title>Error: {error}</Styled.Title>
      ) : (
        <>
          <Styled.Title>Photos</Styled.Title>
          {photos && <ImagesLayout photos={photos} />}
        </>
      )}
    </Styled.Container>
  );
};

export default Photos;
