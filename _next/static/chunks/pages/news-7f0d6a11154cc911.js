(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8729:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(446)}])},818:function(e,t,n){"use strict";n.d(t,{g:function(){return m}});var r=n(1527),a=n(4875),s=n.n(a),c=n(6349);function m(e){let{className:t,...n}=e;return(0,r.jsx)("div",{...n,className:s()("text-black w-full h-full flex items-center justify-center",t),children:(0,r.jsx)(c.uur,{className:"text-[3.125rem] animate-spin"})})}},7395:function(e,t,n){"use strict";n.d(t,{p6:function(){return o},uF:function(){return x},Ik:function(){return d},Pk:function(){return u},Pf:function(){return l}});var r=n(7306),a=n(5685);let s=a.env.NEXT_PUBLIC_API_BASE||"https://news.gtech-cn.co";var c=n(8778);function m(e){return"".concat(s).concat(e)}function i(e){let t=e.data;if(t){if(t.code&&200!==t.code)throw t.msg;return e.data}}function l(e,t){return()=>t.some(e=>!e)?(0,c._v)():e()}async function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(!e)return;let s=await r.Z.get(m("/wechat/news?newsTypeId=".concat(e,"&invert=").concat(!t,"&pageNumber=").concat(n,"&pageSize=").concat(a)));return i(s)}async function o(){let e=await r.Z.get(m("/wechat/news/types"));return i(e)}async function u(e,t){if(!e)return;let n=await r.Z.get(m("/wechat/news/count?newsTypeId=".concat(e,"&newsType=").concat(t)));return i(n)}async function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=await r.Z.get(m("/wechat/news/detail/".concat(e)));return i(t)}},8778:function(e,t,n){"use strict";function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(()=>t(void 0),e)})}function a(){return window.innerWidth<=900}n.d(t,{_v:function(){return r},tq:function(){return a}})},446:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(1527),a=n(5300),s=n(959),c=n(3517),m=n.n(c),i=n(8778),l=n(7207),d=n.n(l),o=n(4875),u=n.n(o);function x(e){let{total:t,pgSize:n,pgNum:a,onChange:c,className:m}=e,i=Math.ceil(t/n),l=(0,s.useMemo)(()=>i<=1?[]:i<=6?d().range(i).map(e=>({name:"".concat(e+1)})):a<=3?d().range(a+1).map(e=>({name:"".concat(e+1)})).concat([{name:"..."},{name:""+i}]):a>=i-2?[{name:"1"},{name:"..."}].concat(d().range(a-2,i).map(e=>({name:"".concat(e+1)}))):[{name:"1"},{name:"..."},{name:a-1+""},{name:a+""},{name:a+1+""},{name:"..."},{name:i+""}],[i,a]),o=()=>{c&&a<i&&c(d().toNumber(a+1))},x=()=>{c&&c(1)},p=()=>{c&&a>1&&c(d().toNumber(a-1))},h=()=>{c&&c(i)};return t<=n?null:(0,r.jsx)("div",{className:u()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",m),children:(0,r.jsxs)("div",{className:"flex",children:[i>1&&(0,r.jsxs)("span",{onClick:x,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]}),i>1&&(0,r.jsx)("span",{onClick:p,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),l.map((e,t)=>(0,r.jsx)("div",{className:u()({"text-white bg-green-1":e.name===""+a,omit:"..."===e.name},"mx-[0.185rem] min-w-[32px] h-[32px] px-1.5 rounded-lg","..."!=e.name&&"border cursor-pointer"),onClick:()=>{c&&"..."!==e.name&&c(d().toNumber(e.name))},children:e.name},"key_page_".concat(t))),i>1&&(0,r.jsx)("span",{onClick:o,className:"mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),i>1&&(0,r.jsxs)("span",{onClick:h,className:" mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]})]})})}var p=n(7395),h=n(5399),f=n.n(h),w=n(818),g=n(3190);let v={0:"/images/date.svg",1:"/images/checked_top.svg",2:"/images/checked_bottom.svg",3:"/images/date.svg"},N=[{url:"/images/subtract.svg",id:1},{url:"/images/frame.svg",id:2},{url:"/images/three.svg",id:3}],j=e=>{let{cateId:t,data:n,onCheck:a,checked:c,windowWidth:l}=e;return console.log("cateId",t),(0,r.jsx)("div",{className:"flex flex-wrap mb-20  md:w-[100%] mx-auto md:mx-0   rounded-lg   w-container md:mt-5",children:!!n.length&&n.map((e,d)=>{var o,u;return e.newsTypes.map(e=>e.typeName),(0,r.jsxs)(s.Fragment,{children:[(0,i.tq)()&&0===d&&(0,r.jsxs)("div",{className:" text-[14px] md:border-b w-full md: border-[#DDDDDD] ",onClick:()=>a(),children:["发布时间",(0,r.jsx)("button",{className:" ml-[10px] md:mb-[10px] mt-1",children:(0,r.jsx)("img",{src:v[String(c)],className:"h-[10.89px] w-[7.82px]",alt:""})})]}),(0,i.tq)()?null:(0,r.jsx)("div",{className:" ".concat(0===d?"mt-5 ":"","w-full  h-[34px] mb-[32px] border-b  border-[#DDDDDD] \n                 mx-auto  md:w-full md:px-5 cursor-pointer\n                 "),children:n.length&&0===d?(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)("div",{className:" text-[14px] md:border-b w-full md:border-t md: border-[#DDDDDD] ",onClick:()=>a(),children:["发布时间",(0,r.jsx)("button",{className:" ml-[10px] md:mb-[10px] mt-1",children:(0,r.jsx)("img",{src:v[String(c)],className:"h-[10.89px] w-[7.82px]",alt:""})})]})}):null}),(0,r.jsxs)("div",{className:" flex md:mt-5 w-full sm:w-[100%] md:h-[4.875rem]",children:[(0,r.jsx)("div",{className:" w-[19.375rem] md:w-[7.375rem]  h-[12.5rem] md:h-[4.875rem] rounded-lg ",children:(0,r.jsx)("img",{className:"max-w-[19.375rem] h-[12.5rem] md:w-[7.375rem] rounded-lg md:h-[4.875rem] ",src:e.thumbUrl,alt:""})}),(0,r.jsxs)("div",{className:"flex flex-col md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   h-[12.5rem] ml-[2rem] md:ml-[10px] md:w-[100%]    mx-auto  justify-between  md:h-[4.875rem] ",children:[(0,r.jsxs)("div",{className:"h-[9.4375rem] md:w-[100%] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap ",children:[(0,r.jsx)(m(),{className:"md:w-[100%] font-semibold text-[20px] md:text-[16px] ",rel:"opener",target:(0,i.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t.id||t.cateId,"&id=").concat(e.id,"&typeName=").concat(null===(o=t.typeName)||void 0===o?void 0:o.replace(/\&/g,"%26")),children:e.title}),(0,r.jsxs)("time",{className:" mt-[10px] md:mt-[6px] md:mb-[6px] mb-[5px] md:py-0 text-[14px] md:text-[12px] flex text-gray-2",children:[(0,r.jsx)("div",{className:"mr-5 ",children:e.author}),f()(1e3*e.newsUpdateTime).format("YYYY-MM-DD HH:mm:ss")]}),!(0,i.tq)()&&(0,r.jsx)("p",{title:e.digest,style:{WebkitLineClamp:l>1200?2:1,WebkitBoxOrient:"vertical",display:"-webkit-box"},className:" text-ellipsis md:hidden text-[14px] line-clamp-1 overflow-hidden",children:e.digest}),(0,r.jsx)("div",{className:"flex flex-row items-center mt-[10px] md:h-[24px]",children:null==e?void 0:e.newsTypes.map((e,t)=>(0,r.jsx)("div",{className:"mr-5 rounded-[0.25rem] md:text-[12px] px-[10px] text-[#29953A] text-[14px] bg-[#29953A1A]",children:e.typeName},"name_".concat(t)))})]}),(0,r.jsx)("div",{className:" md:hidden h-[3.0625rem] flex items-end",children:(0,r.jsx)(m(),{className:"text-green text-[14px] ",rel:"opener",target:(0,i.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t.id||t.cateId,"&id=").concat(e.id,"&typeName=").concat(null===(u=t.typeName)||void 0===u?void 0:u.replace(/\&/g,"%26")),children:"详情 >>"})})]})]})]},"data".concat(d))})})};function b(){let{query:e,pathname:t}=(0,g.useRouter)(),{cateId:n,typeName:c="数字碳知识库"}=e,m=(0,s.useRef)(0),[l,d]=(0,s.useState)(0),[o,u]=(0,s.useState)(!1),[h,f]=(0,s.useState)([]),[v,b]=(0,s.useState)([]),[y,_]=(0,s.useState)(window.innerWidth),[k,D]=(0,s.useState)({}),[E,C]=(0,s.useState)(1),[I]=(0,s.useState)(10),S=(0,g.useRouter)(),T=async()=>{u(!0);try{let e=await (0,p.p6)(),t={};e.forEach(e=>{let{typeGroup:n}=e;t[n]||(t[n]={id:e.id,typeGroup:e.typeGroup,children:[]});let{id:r,typeName:a,createTime:s,updateTime:c}=e;t[n].children.push({id:r,typeName:a,typeGroup:n,createTime:s,updateTime:c})});let n=Object.values(t);b(n)}catch(r){console.log("reeee",r)}finally{u(!1)}};console.log("asd",S),(0,s.useEffect)(()=>{D({id:Number(S.query.cateId),typeName:decodeURIComponent(S.query.typeName)})},[S.query.id,S.query.typeName]);let q=async()=>{let e=await (0,p.Pk)(null==k?void 0:k.id,(null==k?void 0:k.typeName)||c);m.current=e};(0,s.useEffect)(()=>{T()},[]),(0,s.useEffect)(()=>{let e=()=>{_(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,s.useEffect)(()=>{q()},[k.id,n]);let P=(0,s.useCallback)(async()=>{let e=await (0,p.Ik)(null==k?void 0:k.id,1==l,E,I);f(e||[])},[E,k.id,l]);(0,s.useEffect)(()=>{P()},[P,e,n]);let A={className:(0,i.tq)()?"":"border-b border-black"},W=()=>{d(3===l?1:l+1)},z=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,r.jsx)(a.T,{headerProps:A,children:(0,r.jsxs)("div",{className:"mx-auto md:mx-3 ",children:[(0,r.jsx)("div",{id:"content",className:" flex flex-wrap justify-between mx-auto md:w-full mt-10 rounded-lg  ".concat(y>900&&"w-container"," md:mt-5"),children:v.map((e,t)=>(0,r.jsxs)("div",{id:"box-medium",className:"w-[22.5rem]  h-[12.75rem]  rounded-lg shadow\n                 sm:w-[49%]\n                \n                ".concat(2===t?"md:w-full md:mt-5 md:h-[139px]  ":" md:h-[140px] "),children:[(0,r.jsx)("div",{className:"  rounded-t-md  bg-green h-[4.25rem]  flex items-center\n                \n               ".concat(2===t?"md:w-full md:h-[50px] ":"md:h-[50px]  ","\n              "),children:(0,r.jsxs)("div",{className:"flex  flex-row items-center justify-between w-full mr-[0.75rem] ",children:[(0,r.jsx)("div",{className:" ml-[1.875rem] text-white text-[1.25rem] md:text-[1.125rem]",children:e.typeGroup}),(0,r.jsx)("div",{className:"flex justify-end ",children:(0,r.jsx)("img",{className:" w-[3.6875rem] h-[3.0625rem] md:w-[2.1875rem] md:h-[1.8125rem]",src:N[t].url,alt:""})})]})}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap ",children:e.children.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{D(e),C(1),d(0),S.push("/news?cateId=".concat(e.id,"&typeName=").concat(e.typeName))},className:" ".concat(k.id===e.id?"text-[#29953A]  bg-[#29953A1A]":" bg-[#E9E9E9]"," text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] \n                          h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]"),children:e.typeName},"check_".concat(t)))})]},"type_".concat(t)))}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(j,{windowWidth:y,onCheck:W,cateId:k,checked:l,data:h,pgNum:E})}),h.length?(0,r.jsx)(x,{onChange:e=>{C(e),z()},className:"my-8",total:m.current,pgSize:10,pgNum:E}):null,o?(0,r.jsx)(w.g,{className:"pt-8"}):!(h&&h.length>0)&&(0,r.jsxs)("div",{className:"flex flex-col justify-center w-full py-20 text-center ",children:[(0,r.jsx)("div",{className:"flex justify-center ",children:(0,r.jsx)("img",{width:222,height:"125",src:"/images/noData.svg",alt:""})}),(0,r.jsx)("div",{children:"暂无数据"})]})]})})}}},function(e){e.O(0,[455,222,492,725,344,401,541,300,774,888,179],function(){return e(e.s=8729)}),_N_E=e.O()}]);