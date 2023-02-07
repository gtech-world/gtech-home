import React, {HTMLAttributes} from "react";
import classNames from "classnames";

interface IButton{
  text: string
  onClick?: Function
}

export function Button(p:IButton & HTMLAttributes<HTMLDivElement>) {
  const { text,className,onClick } = p
  return (
    <div onClick={()=>onClick && onClick} className={classNames("inline-block bg-green text-white text-lg py-3 px-8 rounded-lg cursor-pointer text-center",className)}>
      {text}
    </div>
  );
}
