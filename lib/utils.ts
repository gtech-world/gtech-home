export const getCurNewsCate = (cate: any, cateList: any[]) => {
  let cur: any = {};
  for (let j = 0; j < cateList.length; j++) {
    if (cate === cateList[j].code) {
      cur = cateList[j];
      break;
    }
  }
  return cur;
};

export function sleep(t: number = 0) {
  return new Promise<undefined>((resolve) => {
    setTimeout(() => resolve(undefined), t);
  });
}
export function isMobile() {
  return window.innerWidth <= 900;
}
