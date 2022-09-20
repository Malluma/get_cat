import { CatImage } from "./styles.js";

function CatCard(props) {

  return (
    <CatImage src={props.imageURL}/>
  
  );
}

export default CatCard;
