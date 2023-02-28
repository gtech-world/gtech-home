import React, {HTMLAttributes} from "react";
import classNames from "classnames";

export function QrGroup(p: HTMLAttributes<HTMLDivElement>) {
  const { className } = p
  return (
    <div className="w-[18.375rem] mx-auto md:w-full md:max-w-[22rem]">
      <div className={classNames("py-2 rounded-[2.25rem] outline outline-[5px] outline-green outline-offset-4 border-[1.75px] border-green flex justify-center items-center mr-[8px]",className)}>
        <div className="border-r-[3px] border-green-2 pr-5 mr-5">
          <img className="mb-4" src="/images/carbon3_name.svg" alt=""/>
          <img className="w-[6.25rem]" src="/images/earth.png" alt=""/>
        </div>
        <div className="w-[6.125rem]">
          <p className="text-[0.6875rem] text-center mb-2 leading-[1rem]">Product Carbon Footprint Certified by AIAG</p>
          <img className="w-[5.75rem]" src="/images/qrcode.svg" alt=""/>
        </div>
      </div>
    </div>
  );
}
