import { HeaderLayout } from "@components/common/headerLayout";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { isMobile } from "@lib/utils";
import { Pagination } from "@components/common/pagination";
import { getNewsCount, getNewsList, getNewsListCount } from "@lib/http";
import moment from "moment";
import { Loading } from "@components/common/loading";

const ArticleList =(p: { data: any[]; cateId?: number })=> {
  const { cateId, data } = p;

  return (
    <div className=" w-container md:w-[351px] md:mt-8 md:px-[20px]">
      {!!data.length &&
        data.map((v, i) => {
          return (
            <>
              {isMobile() ? null : (
                <div className="mt-5 mb-5 border-t text-sk border-gray-1" />
              )}
              <div
                key={`data${i}`}
                className="flex mb-12  md:items-center md:mb-5 w-full  h-[200px] md:h-[4.875rem]"
              >
                <div
                  className={
                    "  max-w-[350px] md:max-w-[118px] w-full md:w-[118px]    h-[16.125rem] md:h-[4.875rem] rounded-lg "
                  }
                >
                  <div className="w-[19.375rem] h-[12.5rem]  ">
                    <img className="w-auto h-full md:max-w-[118px]  rounded-lg md:max-h-[78px] " src={v.thumbUrl} alt="" />
                  </div>
                </div>
                <div className="flex flex-col md:w-full justify-between md:ml-[10px] md:max-h-[78px] ">
                  <div className="">
                    <h4 className="overflow-hidden text-2xl font-semibold md:text-base">
                      <Link
                        className="ellipsis-2 text-[20px] md:text-[16px] md:w-[221px] md:text-ellipsis md:overflow-hidden md:whitespace-nowrap"
                        rel="opener"
                        target={isMobile() ? "" : "_blank"}
                        href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                      >
                        {v.title}
                      </Link>
                    </h4>
                    <time className=" md:py-0 text-[14px] md:text-[12px] flex text-gray-2">
                      <div className="mr-5 ">{v.author}</div>
                      {moment(v.newsUpdateTime * 1000).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </time>
                    <p className="md:hidden text-[14px] ">{v.digest}</p>
                    <div className="flex flex-row mt-[10px] md:h-[24px]">
                      {v?.newsTypes.map((e:any,i: number) => {
                        return (
                          <div key={`name_${i}`} className="mr-5 border   rounded-lg px-[10px] text-[#29953A] text-[14px]  bg-[#29953A1A]">
                            {e.typeName}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-5 md:hidden">
                      <Link
                        className="text-green text-[14px] mb-5"
                        rel="opener"
                        target={isMobile() ? "" : "_blank"}
                        href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                      >
                        详情 &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

const tempList = [
  { url: "/images/subtract.svg", id: 1 },
  { url: "/images/frame.svg", id: 2 },
  { url: "/images/three.svg", id: 3 },
];
export default function Index() {
  const tableDataTotal = useRef(0);
  const [checked, setChecked] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [newsType, setNewsType] = useState<NewsTypesController.ListRecord[]>(
    []
  );
  const [selected, setSelected] = useState<
    Partial<NewsTypesController.TypeList>
  >({});
  const [pgNum, setPgNum] = useState(1);
  const [pgSize] = useState(10);
  const check: any = {
    0: "/images/date.svg",
    1: "/images/checked_top.svg",
    2: "/images/checked_bottom.svg",
    3: "/images/date.svg",
  };

  const getNewsType = async () => {
    setLoading(true);
    try {
      const res = await getNewsCount();
      const mergedData: any = {};

      res.forEach((item: NewsTypesController.ListRecord) => {
        const { typeGroup } = item;

        if (!mergedData[typeGroup]) {
          mergedData[typeGroup] = {
            id: item.id,
            typeGroup: item.typeGroup,
            children: [],
          };
        }
        const { id, typeName, createTime, updateTime } = item;
        mergedData[typeGroup].children.push({
          id,
          typeName,
          typeGroup,
          createTime,
          updateTime,
        });
      });
      const finalData = Object.values(mergedData);

      setSelected(finalData[0] as any);
      setNewsType(finalData as NewsTypesController.ListRecord[]);
    } catch (e) {
      console.log("reeee", e);
    } finally {
      setLoading(false);
    }
  };

  const getListTotal = async () => {
    const res = await getNewsListCount(selected?.typeName, selected?.id);
    tableDataTotal.current = res;
  };
  useEffect(() => {
    getNewsType();
  }, []);

  useEffect(() => {
    getListTotal();
  }, [selected.id]);

  useEffect(() => {
    getList();
  }, [pgNum, selected.id, checked]);

  const getList = async () => {
    const res = await getNewsList(selected?.id, checked == 1, pgNum, pgSize);
    setData(res || []);
  };

  const headerProps = {
    className: isMobile() ? "" : "border-b border-black",
  };

  const onCheck = () => {
      setChecked(checked === 3 ? 1 : checked + 1);
  };

  return (
    <HeaderLayout headerProps={headerProps}>
      <div className="flex flex-col  mx-[155px]   md:mx-0 md:w-[351]">
        <div className=" flex flex-wrap md:ml-5   md:mr-[2.5 md:mx-0 rem] mt-10 md:ml-[20px] rounded-lg justify-between">
          {newsType.map((e, index) => {
            return (
              <div
                key={`type_${index}`}
                className={`w-[360px]  h-[12.75rem]  rounded-lg shadow-lg   md:mr-[25px] ${
                  index === 2 ? "md:w-full md:mt-5  " : "md:w-[10.625rem] "
                }`}
              >
                <div
                  className={`  rounded-t-md  bg-green h-[68px] md:w-50px flex items-center
                
               ${index === 2 ? "md:w-full  " : "md:w-[10.625rem]"}
              `}
                >
                  <div className="flex flex-row items-center justify-between w-full mr-[12px] ">
                    <div className=" ml-[1.875rem] text-white md:text-[16px]">
                      {e.typeGroup}
                    </div>
                    <div className="flex justify-end">
                      <img
                        className=" w-[59px] h-[49px] md:w-[35px] md:h-[29px]"
                        src={tempList[index].url}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap">
                  {e.children.map((item: NewsTypesController.ListRecord) => {
                    return (
                      <div
                        onClick={() => {
                          setSelected(item);
                          setChecked(0);
                        }}
                        className={` ${
                          selected?.id === item.id &&
                          "text-[#29953A]  bg-[#29953A1A] "
                        } cursor-pointer   bg-[#E9E9E9] min-w-[20px] h-[38px] flex items-center ml-5 mt-5 rounded-[0.25rem] px-[1rem]`}
                      >
                        {item.typeName}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 ">
          <div className="h-[26px] md:ml-5 md:border-b  md:w-[380px] flex flex-row items-center">
            {data.length ? (
              <>
                <div className=" text-[14px] md:mb-[15px]">发布时间</div>
                <div
                  className="ml-[10px] md:mb-[15px]"
                  onClick={() => onCheck()}
                >
                  <img src={check[checked]} className="h-[13px] w-[13px]"></img>
                </div>
              </>
            ) : null}
          </div>

          {loading ? (
            <Loading className="h-[22rem] " />
          ) : (
            <ArticleList cateId={selected?.id} data={data} />
          )}

          {data.length ? (
            <Pagination
              onChange={(v: any) => {
                setPgNum(v);
              }}
              className="my-8"
              total={tableDataTotal.current}
              pgSize={10}
              pgNum={pgNum}
            />
          ) : null}

          {loading ? (
            <Loading className="pt-8" />
          ) : (
            !(data && data.length > 0) && (
              <div className="flex flex-col justify-center w-full py-20 text-center ">
                <div className="flex justify-center ">
                  {" "}
                  <img
                    width={"222px"}
                    height="125"
                    src="/images/noData.svg"
                  ></img>
                </div>
                <div>暂无数据</div>
              </div>
            )
          )}
        </div>
      </div>
    </HeaderLayout>
  );
}
