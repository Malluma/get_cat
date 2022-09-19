import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CatImage } from "./styles.js";

function CatCard(props) {
  console.log('cat card')
  console.log(props.imageURL)

  return (
    <CatImage src={props.imageURL}/>
  
  );
}

export default CatCard;
