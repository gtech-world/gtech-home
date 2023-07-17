import React, {HTMLAttributes} from "react";
import classNames from "classnames";
import Image from "next/image";

export function QrGroup(p: any) {
  const { qrText,className } = p
  return (
    <div className={classNames('w-[18.875rem] mx-auto md:w-full md:max-w-[22rem]',className)}>
      <div className="p-1 border-[4px] border-green rounded-[2.75rem]">
        <div className={classNames("py-2 rounded-[2.25rem] border-[1.75px] border-green flex justify-center items-center")}>
          <div className="border-r-[3px] border-green-2 pr-5 mr-5 flex flex-col justify-between h-full">
            <Image className="mb-2 md:w-[7.1rem]" src="/images/carbon3_name.svg" alt=""/>
            <Image className="w-[6.25rem]" src="/images/earth.png" alt=""/>
          </div>
          <div className="w-[7.125rem] flex flex-col items-center">
            <p className="text-[0.6875rem] text-center mb-2 leading-[1rem] font-semibold">{qrText?qrText:'Product Carbon Footprint Certified by AIAG'}</p>
            <Image className="w-[5.75rem]" src="/images/qrcode.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
