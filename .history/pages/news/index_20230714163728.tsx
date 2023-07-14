import { HeaderLayout } from "@components/common/headerLayout";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { isMobile } from "@lib/utils";
import { useRouter } from "next/router";
import { Pagination } from "@components/common/pagination";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getNewsCount, getNewsList, getNewsListCount, noArgs } from "@lib/http";
import moment from "moment";
import { Loading } from "@components/common/loading";
// import {useNewsCate} from "@lib/hooks/useNewsCate";

function ArticleList(p: { data: any[]; cateId?: number }) {
  const { cateId, data } = p;

  return (
    <div className=" w-container md:w-full md:mt-8 md:px-3">
      {!!data.length &&
        data.map((v, i) => {
          return (
            <>
              {isMobile() ? null : (
                <div className="mt-5 mb-5 border-t text-sk border-gray-1" />
              )}
              <div
                key={`data${i}`}
                className="flex mb-12   md:items-center md:mb-5 w-full  h-[200px] md:h-[4.875rem]"
              >
                <div
                  className={
                    " max-w-[350px] w-full md:max-w-[7.375rem] h-[16.125rem] md:h-[4.875rem] rounded-lg overflow-hidden"
                  }
                >
                  <div className="w-[19.375rem] h-[12.5rem] ">
                    <img className="w-auto h-full" src={v.thumbUrl} alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between md:ml-[10px]">
                  <div className="">
                    <h4 className="text-2xl font-semibold md:text-base">
                      <Link
                        className="ellipsis-2 text-[20px] md:text-[16px]"
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
                      {v?.newsTypes.map((e) => {
                        return (
                          <div className="mr-5 border   rounded-lg px-[10px] text-[#29953A] text-[14px]  bg-[#29953A1A]">
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
  const ref = useRef(null);
  const tableDataTotal = useRef(0);
  const [checked, setChecked] = useState(false);

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
    const res = await getNewsList(selected?.id, checked, 10, pgSize);
    setData(res || []);
  };

  // useMemo(() => {
  //   if (isMobile() && ref?.current) {
  //     //@ts-ignore
  //     ref.current.scrollLeft = 30 * (selected - 1);
  //   }
  //   setPgNum(1);
  //   // history.replaceState(null, "", `/news?cateId=${selected}`);
  // }, [selected]);

  const headerProps = {
    className: isMobile() ? "" : "border-b border-black",
  };

  const onCheck = () => {
    setChecked(!checked);
  };

  console.log('datadata',data);
  

  return (
    <HeaderLayout headerProps={headerProps}>
      <div className="flex flex-col  mx-[155px] md:mx-0 ">
        <div className=" flex flex-wrap md:ml-5   md:mr-[2.5 md:mx-0 rem] mt-10 md:ml-[20px] rounded-lg justify-between">
          {newsType.map((e, index) => {
            return (
              <div
                key={`type_${e.id}`}
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
                          setChecked(false);
                        }}
                        className={` ${
                          selected?.id === item.id &&
                          "text-[#29953A]  bg-[#29953A1A] "
                        } cursor-pointer  bg-[#E9E9E9] min-w-[20px] h-[38px] flex items-center ml-5 mt-5 rounded-[0.25rem] px-[1rem]`}
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
          <div className="h-[26px] md:ml-5 md:border-b flex flex-row items-center">
            <div className=" text-[14px]">发布时间</div>
            <div className="ml-[10px]" onClick={() => onCheck()}>
              {checked ? (
                <img
                  className="h-[13px] "
                  src={"/images/checked_top.svg"}
                ></img>
              ) : (
                <img
                  className="h-[13px] "
                  src={"/images/checked_bottom.svg"}
                ></img>
              )}
            </div>
          </div>

          {loading ? (
            <Loading className="h-[22rem] " />
          ) : (
            <ArticleList cateId={selected?.id} data={data} />
          )}

          { !data.length && <Pagination
            onChange={(v: any) => {
              setPgNum(v);
            }}
            className="my-8"
            total={tableDataTotal.current}
            pgSize={10}
            pgNum={pgNum}
          />}

          {
          loading ? <Loading className="pt-8" /> :
            (
              !(data && data.length > 0) &&
              <div className="flex justify-center w-full py-20">
                无数据
              </div>
            )
        }
        </div>
      </div>
    </HeaderLayout>
  );
}
