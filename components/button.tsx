import React, { HTMLAttributes } from "react";
import classNames from "classnames";

interface IButton {
  text?: any;
  onClick?: Function;
  className?: string;
  children?: any;
}

export function Button(p: IButton) {
  const { text, className, onClick, children } = p;
  return (
    <div
      onClick={() => onClick && onClick()}
      className={classNames(
        "inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center hover:bg-green-hover",
        className,
      )}>
      {text ? text : children}
    </div>
  );
}
