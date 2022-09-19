import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CatImage } from "./styles.js";

function CatCard(props) {

  return (
    <CatImage src= {props.src}>
      cat image
    </CatImage>
  );
}

export default CatCard;
