import LazyImage from "./LazyImage";
import { data } from "../constant/data";  // Import your data array here
import "./LazyImage.css";

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {data.map((item, index) => (
        <LazyImage
          key={index}
          src={item.src}
          alt={item.caption}
          caption={item.caption}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
