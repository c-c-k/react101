import { useState } from "react";
import Image from "next/image";
import prism from "./prism.jpeg";
import styles from "./Thumbnails.module.css";

export default function Thumbnails() {
  const [imageContainer, setImageContainer] = useState(
      [styles.imageContainerBase, styles.imageContainerNormal].join(" ")
  );
    console.log(imageContainer);
    console.log(styles);
  return (
    <>
      <div
        className={imageContainer}
        onMouseEnter={() => setImageContainer([styles.imageContainerBase, styles.imageContainerHovered].join(" "))}
        onMouseLeave={() => setImageContainer([styles.imageContainerBase, styles.imageContainerNormal].join(" "))}
      >
      </div>
    </>
  );
}
        // <Image src={prism} fill={true} alt="ttt" />
