import classNames from "classnames";
import React,{ HTMLAttributes } from "react";
import { Header } from "./header";

export function HeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  return (
    <div className="h-full w-full bg-slate-50">
      <Header />
      <div className={classNames("w-full py-6 px-8 mx-auto max-w-7xl bg-white", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
