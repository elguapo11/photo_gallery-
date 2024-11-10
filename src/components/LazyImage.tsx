import React, { useRef, useEffect } from "react";
import "./LazyImage.css";

type LazyImageProps = {
  src: string;
  alt?: string;
  caption?: string;
  description?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, caption, description }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { rootMargin: "-300px" }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting && imageRef.current) {
      const dataSrc = imageRef.current.getAttribute("data-src");
      if (dataSrc) {
        imageRef.current.src = dataSrc;
      }
    }
  }, [isIntersecting]);

  return (
    <div className="image-item">
      <img
        data-test-id="component-image"
        className="lazy-image"
        ref={imageRef}
        src={src + `?w=10`}
        alt={alt}
        data-src={src + `?w=1800`}
      />
      {caption && <h3 className="image-caption">{caption}</h3>}
      {description && <p className="image-description">{description}</p>}
    </div>
  );
};

export default LazyImage;
