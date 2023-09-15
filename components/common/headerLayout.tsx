import classNames from "classnames";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Header } from "./header";
import { Footer } from "@components/common/footer";
import { Policy } from "@components/common/policy";
import { TopTips } from "@components/common/topTips";

export function HeaderLayout(
  p: { headerProps?: object; hiddenFooter?: boolean; hiddenHeader?: boolean } & HTMLAttributes<HTMLDivElement>,
) {
  const { className, headerProps, hiddenFooter = false, hiddenHeader = false, children, ...props } = p;
  const [tipsVisible, setTipsVisible] = useState(true);
  useEffect(() => {
    const tips = sessionStorage.getItem("tips");
    setTipsVisible(!tips);
  }, []);
  return (
    <div className="h-full w-full bg-white relative">
      {!hiddenHeader && <Header props={headerProps} />}
      <div className={classNames("w-full mx-auto text-lg md:text-sm", className)} {...props}>
        {children}
      </div>
      {!hiddenFooter && <Footer />}
      {<Policy className={classNames("block", !tipsVisible ? "md:block" : "md:hidden")} />}
      <TopTips
        className="hidden md:flex md:shadow-[0_-3px_15px_0px_rgba(0,0,0,0.3)]"
        onClose={() => setTipsVisible(false)}
      />
    </div>
  );
}
