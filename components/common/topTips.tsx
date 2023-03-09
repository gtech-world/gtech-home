import React, {useEffect, useState} from "react";
import {FiX} from "react-icons/fi";
import {useTranslation} from "react-i18next";

export function TopTips(p:any) {
  const {onClose} = p
  const { t } = useTranslation('common');
  const [visible,setVisible] = useState(false)
  const onCloseTips = ()=>{
    setVisible(false)
    onClose && onClose()
    localStorage.setItem('tips','enable')
  }
  useEffect(()=>{
    const tips = localStorage.getItem('tips')
    setVisible(!tips)
  })
  if(!visible) return null
  return (
    <div className="sticky bg-green text-white text-base py-5 flex justify-center px-6 items-center md:text-sm md:bottom-0 md:z-10 md:bg-white md:text-black md:h-[9.125rem] md:px-16 md:text-center">
      <span className="inline-block">{t('header.tips')}<span className="underline inline-block ml-1.5"> hi@gtech.world</span></span>
      <FiX onClick={onCloseTips} className="absolute right-6 text-xl cursor-pointer md:top-3 md:right-5" />
    </div>
  );
}
