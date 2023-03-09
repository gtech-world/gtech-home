import {useEffect} from "react";
import {createGlobalState} from "react-hooks-global-state";

export default function useTips(){
  const initialState = { tipsVisible: false };
  const { useGlobalState } = createGlobalState(initialState);
  const [tipsVisible, setTipsVisible] = useGlobalState('tipsVisible');
  useEffect(()=>{
    const tips = localStorage.getItem('tips')
    console.log("!tips")
    console.log(!tips)
    setTipsVisible(!tips)
  })
  const onCloseTips = ()=>{
    localStorage.setItem('tips','enable')
    setTipsVisible(false)
  }
  return {tipsVisible,onCloseTips}
}