import { useDispatch, useSelector } from "react-redux";
import { loadCat, toggleEnabled, toggleAutoRefrash } from "../../store/reducers/CatSlice";
import { AppWrapper, CatCardWrapper, GetCatBtnWrapper } from "./styles.js";
import CatCard from "../CatCard/CatCard";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const catImage = useSelector((state) => state.cat.catImage);
  const enabled = useSelector((state) => state.cat.enabled);
  const autoRefrash = useSelector((state) => state.cat.autoRefrash);
  let timerId = '';

  function handleBtnGetCatClick(event) {
    changeCat();
  }

  function changeCat(){
    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((json) => dispatch(loadCat(json)))
    .catch((error) => console.error("Can't load a cat", error));
  }

  function handleEnabledChange(){
    dispatch(toggleEnabled())
  }

  function handleAutoRefrashChange(){
    dispatch(toggleAutoRefrash())
  }

  useEffect(() => {
    if (autoRefrash){
      timerId = setInterval(changeCat, 1000);
    }else{
      console.log('clearInterval')
      console.log(timerId)
      clearInterval(timerId);
    }
    
  }, [autoRefrash]);

  return (
    <AppWrapper>
      <Checkbox name='Enabled' checked={enabled} onChange={handleEnabledChange}></Checkbox>
      <Checkbox name='Auto-refrash every 5 second' checked={autoRefrash} onChange={handleAutoRefrashChange}></Checkbox>
      <GetCatBtnWrapper>
        <Button onClick={(e) => handleBtnGetCatClick(e)}>Get cat</Button>
      </GetCatBtnWrapper>
      <CatCardWrapper>
        <CatCard imageURL={catImage}></CatCard>
      </CatCardWrapper>
    </AppWrapper>
  );
}

export default App;
