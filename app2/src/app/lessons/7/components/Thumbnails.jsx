import  Image  from "next/image";
import prism from "./prism.jpeg"
import "./styles.css";

export default function Thumbnails() {
    return (
        <>
        <div className="image-container">
        <Image src={prism} fill={true} alt="ttt"/>
        </div>
        </>
    )
}
