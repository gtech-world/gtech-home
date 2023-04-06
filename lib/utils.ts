import {NEWS_CATE} from "@lib/const";

export const getCurNewsCate = (cate:any)=>{
  let cur:any = {}
  for(let j=0; j<NEWS_CATE.length; j++){
    if(cate === NEWS_CATE[j].code){
      cur = NEWS_CATE[j]
      break;
    }
  }
  return cur
}