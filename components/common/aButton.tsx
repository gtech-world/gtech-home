import React, { FC } from "react";
import classNames from "classnames";

const AButton: FC<AllComponent.AButton> = ({
  href,
  text,
  className,
  onClick,
  transComponent,
}) => {

  return (
    <a
      href={href}
      onClick={onClick}
      className={classNames(
        className,
        "pl-0 pr-0 md:w-[20rem]",
        "inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center hover:bg-green-hover w-[17.7rem] pl-0 pr-0 md:w-[20rem]"
      )}
    >
      { transComponent || text }
    </a>
  );
};

export default AButton;
