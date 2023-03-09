import {useEffect, useState} from "react";

export default function useTips(){
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    const tips = localStorage.getItem('tips')
    setVisible(!tips)
  },[])
  const onCloseTips = ()=>{
    localStorage.setItem('tips','enable')
    setVisible(false)
  }
  return {visible,onCloseTips}
}