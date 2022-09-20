import { useDispatch, useSelector } from "react-redux";
import {
  loadCat,
  toggleEnabled,
  toggleAutoRefresh,
} from "../../store/reducers/CatSlice";
import {
  AppWrapper,
  CatCardWrapper,
  CheckboxWrapper,
  GetCatBtnWrapper,
} from "./styles.js";
import CatCard from "../CatCard/CatCard";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { useEffect, useRef, useCallback } from "react";

function App() {
  const dispatch = useDispatch();
  const catImage = useSelector((state) => state.cat.catImage);
  const enabled = useSelector((state) => state.cat.enabled);
  const autoRefresh = useSelector((state) => state.cat.autoRefresh);
  const timerId = useRef();

  function handleBtnGetCatClick(event) {
    changeCat();
  }

  function handleEnabledChange() {
    dispatch(toggleEnabled());
  }

  function handleAutoRefreshChange() {
    dispatch(toggleAutoRefresh());
  }

  const changeCat = useCallback(() => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => response.json())
      .then((json) => dispatch(loadCat(json)))
      .catch((error) => console.error("Can't load a cat", error));
  }, [dispatch]);

  useEffect(() => {
    if (autoRefresh) {
      timerId.current = setInterval(changeCat, 1000);
    } else {
      clearInterval(timerId.current);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [autoRefresh, changeCat]);

  const disabled = enabled ? "" : "disabled";

  return (
    <AppWrapper>
      <CheckboxWrapper>
        <Checkbox
          name="Enabled"
          checked={enabled}
          onChange={handleEnabledChange}
        ></Checkbox>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          name="Auto-refresh every 5 second"
          checked={autoRefresh}
          onChange={handleAutoRefreshChange}
          disabled={disabled}
        ></Checkbox>
      </CheckboxWrapper>
      <GetCatBtnWrapper>
        <Button onClick={(e) => handleBtnGetCatClick(e)} disabled={disabled}>
          Get cat
        </Button>
      </GetCatBtnWrapper>
      <CatCardWrapper>
        <CatCard imageURL={catImage}></CatCard>
      </CatCardWrapper>
    </AppWrapper>
  );
}

export default App;
