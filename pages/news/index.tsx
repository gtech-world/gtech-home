import { HeaderLayout } from "@components/common/headerLayout";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { isMobile } from "@lib/utils";
import { Pagination } from "@components/common/pagination";
import { getNewsCount, getNewsList, getNewsListCount } from "@lib/http";
import moment from "moment";
import { Loading } from "@components/common/loading";
import { useRouter } from "next/router";
const check: any = {
  0: "/images/date.svg",
  1: "/images/checked_top.svg",
  2: "/images/checked_bottom.svg",
  3: "/images/date.svg",
};

const ArticleList = (p: { data: any[]; cateId?: number, setPgNum: any, onCheck:any,checked:any, tableDataTotal: any, pgNum: number, windowWidth: number }) => {
  const { cateId, data, setPgNum, tableDataTotal, pgNum, windowWidth,onCheck, checked } = p;


  return (

    <div className={`flex flex-wrap  md:w-[200px] mx-auto md:mx-0   rounded-lg  ${windowWidth > 900 && 'w-container'} md:mt-5`}>
     
      {!!data.length &&
        data.map((v, i) => {
          return (
            <Fragment key={`data${i}`}>
              {isMobile() ? null : (
                <div className=" mt-5 w-full  h-[34px] mb-[32px] border-b  border-[#DDDDDD] 
                 mx-auto  md:w-full md:px-5
                " > 
                 {data.length && i ===0 ? (
                <Fragment>
                  <div className=" text-[14px]   md:border-b 
                  w-full  md:border-t md: border-[#DDDDDD] 
                  
                  ">发布时间
                   <button
                    className=" ml-[10px] md:mb-[10px] mt-1"
                    onClick={() => onCheck()}
                  >
                    <img src={check[checked]} className="h-[10.89px] w-[7.82px]" alt='' />
                  </button>
                  </div>
                 
                </Fragment>
              ) : null}
                
                 </div>
               )}  
              <div
                className=" flex   md:items-center md:mb-5 w-full md:w-[221px] md:h-[4.875rem]"
              >
                <div
                  className={
                    " w-[19.375rem] md:w-[7.375rem]  h-[12.5rem] md:h-[4.875rem] rounded-lg "
                  }
                >
                  {/* <div className="w-[19.375rem] h-[12.5rem]  "> */}
                  <img className="max-w-[19.375rem] h-[12.5rem] md:w-[7.375rem]  rounded-lg md:h-[4.875rem] " src={v.thumbUrl} alt="" />
                  {/* </div> */}
                </div>


                <div className={`flex flex-col  h-[12.5rem] ml-[2rem] md:ml-[10px]    mx-auto  justify-between  md:h-[4.875rem] `}>
                  <div 
                  className="h-[9.4375rem]   md:overflow-hidden md:text-ellipsis md:whitespace-nowrap  "
                  
                  style={{  WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }}  
                  // className=" bg-red-300 md:hidden h-[9.4375rem] w-full text-[14px]  line-clamp-1 overflow-hidden"
                  >
                    <Link
                      className=" w-full   text-[20px] font-[600px]  md:text-[16px]
                       "
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                    >
                      {v.title}
                    </Link>
                    <time className=" md:py-0 text-[14px] md:text-[12px] flex text-gray-2">
                      <div className="mr-5 ">{v.author}</div>
                      {moment(v.newsUpdateTime * 1000).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </time>
                    {!isMobile()&&
                    <p style={{  WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }}  className="  md:hidden  text-[14px]  line-clamp-2 overflow-hidden">{v.digest}</p>
                  }
                    <div className="flex flex-row mt-[10px] md:h-[24px]">
                      {v?.newsTypes.map((e: any, i: number) => {
                        return (
                          <div key={`name_${i}`} className="mr-5 border   rounded-[0.25rem] px-[10px] text-[#29953A] text-[14px]  bg-[#29953A1A]">
                            {e.typeName}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                  <div className=" md:hidden h-[3.0625rem]  flex items-end">
                    <Link
                      className="text-green text-[14px] "
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                    >
                      详情 &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>

            </Fragment>
          );
        })}
      {data.length ? (
        <Pagination
          onChange={(v: any) => {
            setPgNum(v);
          }}
          className="my-8"
          total={tableDataTotal}
          pgSize={10}
          pgNum={pgNum}
        />
      ) : null}
    </div>
  );
}

const tempList = [
  { url: "/images/subtract.svg", id: 1 },
  { url: "/images/frame.svg", id: 2 },
  { url: "/images/three.svg", id: 3 },
];
export default function Index() {
  const { query } = useRouter()

  const tableDataTotal = useRef(0);
  const [checked, setChecked] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [newsType, setNewsType] = useState<NewsTypesController.ListRecord[]>(
    []
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const id = query?.cateId
    if (newsType && newsType.length && query.cateId) {
      const type: any = newsType.find((e) => e.id === Number(id))
      setSelected(type)
    }
  }, [query])


  const getListTotal = async () => {
    const res = await getNewsListCount(selected?.typeName, selected?.id);
    tableDataTotal.current = res;
  };
  useEffect(() => {
    getNewsType();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
    <HeaderLayout headerProps={headerProps} >





      <div className="mx-auto md:mx-3 ">
        <div className={`flex flex-wrap justify-between mx-auto mt-10 rounded-lg  ${windowWidth > 900 && 'w-container'} md:mt-5`}>

          {newsType.map((e, index) => {
            return (
              <div
                key={`type_${index}`}
                className={`w-[22.5rem]  h-[12.75rem]  rounded-lg shadow  
                   ${index === 2 ? "md:w-full md:mt-5 md:h-[139px]  " : "md:w-[10.625rem] md:h-[140px] "
                  }`
                }
              >
                <div
                  className={`  rounded-t-md  bg-green h-[4.25rem]  flex items-center
                
               ${index === 2 ? "md:w-full md:h-[50px] " : "md:w-[10.625rem] md:h-[50px]  "}
              `}
                >
                  <div className={`flex  flex-row items-center justify-between w-full mr-[0.75rem] `}>
                    <div className=" ml-[1.875rem] text-white  text-[1.25rem] md:text-[1.125rem]">
                      {e.typeGroup}
                    </div>
                    <div className="flex justify-end">
                      <img
                        className=" w-[3.6875rem] h-[3.0625rem] md:w-[2.1875rem] md:h-[1.8125rem]"
                        src={tempList[index].url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap">
                  {e.children.map((item: NewsTypesController.ListRecord, i: number) => {
                    return (
                      <div
                        key={`check_${i}`}
                        onClick={() => {
                          setSelected(item);
                          setChecked(0);
                        }}
                        className={` ${selected?.id === item.id ?
                            "text-[#29953A]  bg-[#29953A1A]" : ' bg-[#E9E9E9]'
                          } text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]`}
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

           
            

          <div className="">
            {loading ? (
              <Loading className="h-[22rem] " />
            ) : (
            //   <div className="flex mx-auto mt-5 bg-red-300 w-container">
            //   {data.length ? (
            //     <Fragment>
            //       <div className=" text-[14px]   md:border-b 
            //       w-full  md:border-t md: border-[#DDDDDD] 
                  
            //       ">发布时间
            //        <button
            //         className=" ml-[10px] md:mb-[10px] mt-1"
            //         onClick={() => onCheck()}
            //       >
            //         <img src={check[checked]} className="h-[10.89px] w-[7.82px]" alt='' />
            //       </button>
            //       </div>
                 
            //     </Fragment>
            //   ) : null}
            // </div>
              <ArticleList onCheck={onCheck} cateId={selected?.id} checked={checked} data={data} setPgNum={setPgNum} windowWidth={windowWidth} tableDataTotal={tableDataTotal.current} pgNum={pgNum} />
           
            )}
            </div>
         



            {loading ? (
              <Loading className="pt-8" />
            ) : (
              !(data && data.length > 0) && (
                <div className="flex flex-col justify-center w-full py-20 text-center ">
                  <div className="flex justify-center ">
                    <img
                      width={222}
                      height="125"
                      src="/images/noData.svg"
                      alt=""
                    />
                  </div>
                  <div>暂无数据</div>
                </div>
              )
            )}

      </div>


      {/* <div className="flex w-[75rem]  flex-col md:ml-5   md:mx-5  md:w-[21.9375rem] ">
        <div className="flex flex-wrap  justify-between mt-10 md:mt-5 rounded-lg   md:w-[21.9375rem]">
          {newsType.map((e, index) => {
            return (
              <div
                key={`type_${index}`}
                className={`w-[22.5rem]  h-[12.75rem]  rounded-lg shadow     ${
                  index === 2 ? "md:w-full md:mt-5 md:h-[139px]  " : "md:w-[10.625rem] md:h-[140px] "
                }`}
              >
                <div
                  className={`  rounded-t-md  bg-green h-[4.25rem]  flex items-center
                
               ${index === 2 ? "md:w-full md:h-[50px] " : "md:w-[10.625rem] md:h-[50px]  "}
              `}
                >
                  <div className={`flex  flex-row items-center justify-between w-full mr-[0.75rem] `}>
                    <div className=" ml-[1.875rem] text-white  text-[1.25rem] md:text-[1.125rem]">
                      {e.typeGroup}
                    </div>
                    <div className="flex justify-end">
                      <img
                        className=" w-[3.6875rem] h-[3.0625rem] md:w-[2.1875rem] md:h-[1.8125rem]"
                        src={tempList[index].url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap">
                  {e.children.map((item: NewsTypesController.ListRecord,i: number) => {
                    return (
                      <div
                      key={`check_${i}`}
                        onClick={() => {
                          setSelected(item);
                          setChecked(0);
                        }}
                        className={` ${
                          selected?.id === item.id ?
                          "text-[#29953A]  bg-[#29953A1A]" : ' bg-[#E9E9E9]'
                        } text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]`}
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
          <div className=" mx-auto md:border-b  md:w-[350px] flex flex-row items-center">
            {data.length ? (
              <Fragment>
                <div className=" text-[14px]  c-[#DDDDDD] h-[26px]">发布时间</div>
                <div
                  className="ml-[10px] md:mb-[10px] mt-1"
                  onClick={() => onCheck()}
                >
                  <img src={check[checked]} className="h-[10.89px] w-[7.82px]" alt=''/>
                </div>
              </Fragment>
            ) : null}
          </div>

          {loading ? (
            <Loading className="h-[22rem] " />
          ) : (
            <ArticleList cateId={selected?.id} data={data} setPgNum = {setPgNum} tableDataTotal={tableDataTotal.current} pgNum={pgNum} />
          )}

         

          {loading ? (
            <Loading className="pt-8" />
          ) : (
            !(data && data.length > 0) && (
              <div className="flex flex-col justify-center w-full py-20 text-center ">
                <div className="flex justify-center ">
                  <img
                    width={222}
                    height="125"
                    src="/images/noData.svg"
                    alt=""
                  />
                </div>
                <div>暂无数据</div>
              </div>
            )
          )}
        </div>
      </div>  */}
    </HeaderLayout>
  );
}
