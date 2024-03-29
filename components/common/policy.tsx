import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
export function Policy(p: any) {
  const { className } = p;
  const { t, i18n } = useTranslation("common");
  const statement = localStorage.getItem("statement");
  console.log("statementstatement", statement);

  const [policyVisible, setPolicyVisible] = useState(false);
  const onAccess = () => {
    localStorage.setItem("statement", "access");
    setPolicyVisible(false);
  };
  useEffect(() => {
    setPolicyVisible(!statement);
  }, []);
  if (!policyVisible) return null;
  return (
    <div
      className={classNames(
        "fixed bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",
        className,
      )}>
      <span className="inline-block md:px-8 md:text-center md:pb-8 md:pt-12">{t("footer.text")}</span>
      <div
        onClick={onAccess}
        className="flex items-center justify-center px-4 ml-5 text-white bg-black border border-black rounded cursor-pointer h-11 md:w-full md:mb-4 md:ml-0">
        {t("footer.acceptBtn")}
      </div>
      <div
        onClick={() => window.open(i18n.language === "en" ? "/enstatement" : "/zhstatement", "_blank")}
        className="border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0">
        {t("footer.viewBtn")}
      </div>
      <FiX onClick={onAccess} className="absolute text-xl cursor-pointer right-8 md:top-4 md:right-5" />
    </div>
  );
}
