import _ from "lodash";
import {HTMLAttributes, useMemo} from "react";
import classnames from "classnames";
import Image from "next/image";
export interface Props {
  total: number;
  pgSize: number;
  pgNum: number;
  onChange?: (p: number) => void;
}

interface Item {
  name: string;
}

const omit = "...";
export function Pagination(p: Props & HTMLAttributes<HTMLDivElement>) {
  const { total,pgSize, pgNum, onChange,className } = p;
  const count = Math.ceil(total/pgSize)
  const items: Item[] = useMemo(() => {
    if (count <= 1) return [];
    if (count <= 6) return _.range(count).map((i) => ({ name: `${i + 1}` }));
    if (pgNum <= 3)
      return _.range(pgNum + 1)
        .map((i) => ({ name: `${i + 1}` }))
        .concat([{ name: omit }, { name: "" + count }]);
    if (pgNum >= count - 2)
      return [{ name: "1" }, { name: omit }].concat(
        _.range(pgNum - 2, count).map((i) => ({ name: `${i + 1}` }))
      );
    return [
      { name: "1" },
      { name: omit },
      { name: pgNum - 1 + "" },
      { name: pgNum + "" },
      { name: pgNum + 1 + "" },
      { name: omit },
      { name: count + "" },
    ];
  }, [count, pgNum]);
  const doNext = ()=>{
    onChange && pgNum<count && onChange(_.toNumber(pgNum+1))
  }
  const doFirst = ()=>{
    onChange && onChange(1)
  }
  const doPrev = ()=>{
    onChange && pgNum>1 && onChange(_.toNumber(pgNum-1))
  }
  const doLast = ()=>{
    onChange && onChange(count)
  }
  // console.log(total)
  if(total <= pgSize ) return null
  return (
    <div className={classnames('flex justify-center text-[0.8125rem] text-center leading-8 font-semibold',className)}>
      <div className="flex">
        {
          count>1 &&
          <span onClick={doFirst} className="mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
            <Image src="/images/arrow_page.svg" alt=""/>
            <Image src="/images/arrow_page.svg" alt=""/>
          </span>
        }
        {
          count>1 &&
          <span onClick={doPrev} className="mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
            <Image src="/images/arrow_page.svg" alt=""/>
          </span>
        }
        {items.map((page, i) => (
          <div key={`key_page_${i}`}
               className={classnames({
                 "text-white bg-green-1": page.name === "" + pgNum,
                 omit: page.name === omit,
               },'mx-[0.185rem] min-w-[32px] h-[32px] px-1.5 rounded-lg',page.name!=omit && 'border cursor-pointer')}
               onClick={() => {
                 onChange && page.name !== omit && onChange(_.toNumber(page.name));
               }}
          >
            {page.name}
          </div>
        ))}
        {
          count>1 &&
          <span onClick={doNext} className="mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
            <Image src="/images/arrow_page.svg" alt=""/>
          </span>
        }
        {
          count>1 &&
          <span onClick={doLast} className=" mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg">
            <Image src="/images/arrow_page.svg" alt=""/>
            <Image src="/images/arrow_page.svg" alt=""/>
          </span>
        }
      </div>
    </div>
  );
}
