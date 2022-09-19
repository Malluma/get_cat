import { useDispatch, useSelector } from "react-redux";
import { loadCat } from "../../store/reducers/CatSlice";
import { AppWrapper, GetCatBtnWrapper } from "./styles.js";
import CatCard from '../CatCard/CatCard';
import Button from '../Button/Button';


function App() {
  const dispatch = useDispatch();
  function handleBtnGetCatClick(event){

    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => response.json())
      .then((json) => dispatch(loadCat(json)))
      .catch((error) => console.error("Can't load a cat", error));

  }

  const catImage = useSelector((state) => state.cat.catImage);

  return (
    <AppWrapper>
      <GetCatBtnWrapper>
        <Button onClick={(e)=> handleBtnGetCatClick(e)}>Get cat</Button>
      </GetCatBtnWrapper>
      <CatCard imageURL={catImage}></CatCard>
    </AppWrapper>
  );
}

export default App;
