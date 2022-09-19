import { useDispatch } from "react-redux";
import { loadCat } from "../../store/reducers/CatSlice";
import { AppWrapper, GetCatBtnWrapper } from "./styles.js";
import CatCard from '../CatCard/CatCard';
import Button from '../Button/Button';


function App() {
  const dispatch = useDispatch();
  function handleBtnGetCatClick(event){

    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => response.json())
      .then((json) => 
      {console.log('json')
      console.log(json[0].url)
        dispatch(loadCat(json))})
      .catch((error) => console.error("Can't load a cat", error));

  }

  return (
    <AppWrapper>
      <GetCatBtnWrapper>
        <Button onClick={(e)=> handleBtnGetCatClick(e)}>Get cat</Button>
      </GetCatBtnWrapper>
    </AppWrapper>
  );
}

export default App;
