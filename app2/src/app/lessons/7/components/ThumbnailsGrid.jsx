import { useState } from "react";
import Image from "next/image";
import prism from "./prism.jpeg";
import styles from "./ThumbnailsGrid.module.css";

export default function ThumbnailsGrid() {
  const [imageContainer, setImageContainer] = useState(
    [styles.imageContainerBase, styles.imageContainerNormal].join(" ")
  );
  console.log(imageContainer);
  console.log(styles);
  return (
    <>
      <div
        className={imageContainer}
        onMouseEnter={() =>
          setImageContainer(
            [styles.imageContainerBase, styles.imageContainerHovered].join(" ")
          )
        }
        onMouseLeave={() =>
          setImageContainer(
            [styles.imageContainerBase, styles.imageContainerNormal].join(" ")
          )
        }
      >
<Image src={prism} fill={true} alt="ttt" />
      </div>
    </>
  );
}

function Thumbnail({imageInfo}) {
  const [imageContainer, setImageContainer] = useState(
    [styles.imageContainerBase, styles.imageContainerNormal].join(" ")
  );
  return (
    <>
      <div
        className={imageContainer}
        onMouseEnter={() =>
          setImageContainer(
            [styles.imageContainerBase, styles.imageContainerHovered].join(" ")
          )
        }
        onMouseLeave={() =>
          setImageContainer(
            [styles.imageContainerBase, styles.imageContainerNormal].join(" ")
          )
        }
      >
<Image src={imageInfo.src} fill={true} alt={imageInfo.alt}/>
      </div>
    </>
  );
}
