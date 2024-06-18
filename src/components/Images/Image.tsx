import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage, placeholder } from "@cloudinary/react";

// https://res.cloudinary.com/demo/image/upload/w_640/e_blur:1000,q_1,f_auto/e_grayscale/string_1.jpg

type TImageProps = {
  id: number;
  title: string;
  className: string;
  credit: string;
};

const Image = ({ id, title, className, credit }: TImageProps) => {
  const cld = new Cloudinary({ cloud: { cloudName: "octavian2111" } });

  const img = cld
    .image(`${title}${id}`)
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (
    <div style={{display: 'flex', flexDirection:'column'}}>
    <AdvancedImage
      className={className}
      cldImg={img}
      alt={`photo of a concert at ${title}`}

      plugins={[placeholder({ mode: "blur" })]}
      style={{
        borderRadius: "20px",
        border: "6px solid black",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      }}
      />
      <figcaption style={{fontSize: '0.8rem', marginLeft:'0.3rem', marginTop: '-1.2rem', color: 'white'}}>{`Photo by ${credit}`}</figcaption>
      </div>
  );
};

export default Image;
