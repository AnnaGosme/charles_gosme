import { useState } from "react";
import "@styles/imagelayout.css";
import Image from "./Image";

type TImage = { title: string };
type TImages = TImage[];
type TImagesProps = {
  images: TImages;
};

const ImagesLayout = ({ images }: TImagesProps) => {
    const [currentImage, setCurrentImage] = useState(images[0].title);
  
    const handleCurrentImageChange = (imageTitle: TImage) => {
        setCurrentImage(imageTitle.title);
    }

  return (
    <div className="container">
      <div className="large-image-container">
        <Image
          ImageLink={currentImage}
          alt="Large"
          className="large-image"
        />
      </div>
      <div className="thumbnails-container">
        {images.slice(1).map((image, index) => (
          <div key={index} className="thumbnail" onClick={() => handleCurrentImageChange(image)}>
            <Image
              ImageLink={image.title}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesLayout;
