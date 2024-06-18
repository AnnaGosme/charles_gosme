import { useState } from "react";
import "@styles/imagelayout.css";
import Image from "./Image";

type TImage = { id: number; title: string, credit: string };
type TImagesProps = { photos: TImage[] };

const ImagesLayout = ({ photos }: TImagesProps) => {
  const [currentImage, setCurrentImage] = useState<TImage>(photos[0]);

  const handleCurrentImageChange = (image: TImage) => {
    setCurrentImage(image);
  };

  return (
    <div className="container">
      <div className="large-image-container">
        {currentImage && (
          <Image
            title={currentImage.title}
            id={currentImage.id}
            className="large-image"
            credit={currentImage.credit}
          />
        )}
      </div>
      <div className="thumbnails-container">
        {photos.slice(1).map((image: TImage, index: number) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => handleCurrentImageChange(image)}
          >
            <Image
              title={image.title}
              id={image.id}
              className="thumbnail-image"
              credit={image.credit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesLayout;
