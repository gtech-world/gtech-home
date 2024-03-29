import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export function TopTips(p: any) {
  const { onClose, className } = p;
  const { t, i18n } = useTranslation("common");
  const [visible, setVisible] = useState(false);
  const onCloseTips = () => {
    setVisible(false);
    onClose && onClose();
    localStorage.setItem("tips", "enable");
  };
  useEffect(() => {
    const tips = localStorage.getItem("tips");
    setVisible(!tips);
  }, []);
  if (!visible) return null;
  return (
    <div
      className={classNames(
        "sticky md:fixed bg-green flex items-center text-white justify-between text-base py-5 px-6 md:text-sm md:bottom-0 md:z-10 md:bg-white md:text-black md:h-[9.125rem] md:px-5 md:text-center md:w-full md:items-start",
        className,
      )}>
      <div className="flex items-center justify-center flex-1 h-full">
        <span className="inline-block">
          {t("header.tips")}
          <a href="mailto:hi@gtech.world" className="underline inline-block ml-1.5">
            {" "}
            hi@gtech.world
          </a>
          {i18n.language === "en" ? "." : "。"}
        </span>
      </div>
      <FiX onClick={onCloseTips} className="text-xl cursor-pointer" />
    </div>
  );
}
