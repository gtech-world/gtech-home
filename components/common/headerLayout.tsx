import classNames from "classnames";
import React,{ HTMLAttributes,useEffect,useState } from "react";
import { Header } from "./header";
import {Footer} from "@components/common/footer";
import {getCookie,setCookie} from "cookies-next";
import {useTranslation} from "react-i18next";
import {FiX} from "react-icons/fi";

export function HeaderLayout(p:{headerProps?:object} & HTMLAttributes<HTMLDivElement>) {
  const { className,headerProps, children, ...props } = p;
  const {t,i18n} = useTranslation('common')
  const statement = getCookie('statement')
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    setVisible(!statement)
  },[])
  return (
    <div className="h-full w-full bg-slate-50 relative">
      <Header props={headerProps} />
      <div className={classNames("w-full mx-auto text-lg md:text-sm", className)} {...props}>
        { children }
      </div>
      <Footer />
      {
        visible &&
          <div className={"sticky bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5"}>
            <span className="md:px-8 md:text-center md:pb-8 md:pt-12">{t('footer.text')}</span>
            <div onClick={()=>{setCookie('statement','access');setVisible(false)}} className="border border-black bg-black text-white px-4 h-11 rounded flex items-center justify-center ml-5 cursor-pointer md:w-full md:mb-4 md:ml-0">{t('footer.acceptBtn')}</div>
            <div onClick={()=>window.open(i18n.language === 'en'?'/enstatement':'/zhstatement','_blank')} className="border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0">{t('footer.viewBtn')}</div>
            <FiX onClick={()=>setVisible(false)} className="absolute right-8 text-xl cursor-pointer md:top-4 md:right-5" />
          </div>
      }
    </div>
  );
}
