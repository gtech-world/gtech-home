import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useSetLanguage(lng: "zh" | "en") {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
    }
  }, [lng]);
}
