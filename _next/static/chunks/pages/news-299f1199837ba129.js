(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8729:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(802)}])},818:function(e,t,n){"use strict";n.d(t,{g:function(){return m}});var r=n(1527),s=n(4875),a=n.n(s),i=n(6349);function m(e){let{className:t,...n}=e;return(0,r.jsx)("div",{...n,className:a()("text-black w-full h-full flex items-center justify-center",t),children:(0,r.jsx)(i.uur,{className:"text-[3.125rem] animate-spin"})})}},7395:function(e,t,n){"use strict";n.d(t,{p6:function(){return o},uF:function(){return u},Ik:function(){return d},Pk:function(){return x},Pf:function(){return l}});var r=n(7306),s=n(5685);let a=s.env.NEXT_PUBLIC_API_BASE||"https://news.gtech-cn.co";var i=n(8778);function m(e){return"".concat(a).concat(e)}function c(e){let t=e.data;if(t){if(t.code&&200!==t.code)throw t.msg;return e.data}}function l(e,t){return()=>t.some(e=>!e)?(0,i._v)():e()}async function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(!e)return;let a=await r.Z.get(m("/wechat/news?newsTypeId=".concat(e,"&invert=").concat(!t,"&pageNumber=").concat(n,"&pageSize=").concat(s)));return c(a)}async function o(){let e=await r.Z.get(m("/wechat/news/types"));return c(e)}async function x(e,t){if(!e)return;let n=await r.Z.get(m("/wechat/news/count?newsTypeId=".concat(e,"&newsType=").concat(t)));return c(n)}async function u(e){if(!e)return;let t=await r.Z.get(m("/wechat/news/detail/".concat(e)));return c(t)}},8778:function(e,t,n){"use strict";function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(()=>t(void 0),e)})}function s(){return window.innerWidth<=900}n.d(t,{_v:function(){return r},tq:function(){return s}})},802:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(1527),s=n(5300),a=n(818),i=n(7207),m=n.n(i),c=n(959),l=n(4875),d=n.n(l);function o(e){let{total:t,pgSize:n,pgNum:s,onChange:a,className:i}=e,l=Math.ceil(t/n),o=(0,c.useMemo)(()=>l<=1?[]:l<=6?m().range(l).map(e=>({name:"".concat(e+1)})):s<=3?m().range(s+1).map(e=>({name:"".concat(e+1)})).concat([{name:"..."},{name:""+l}]):s>=l-2?[{name:"1"},{name:"..."}].concat(m().range(s-2,l).map(e=>({name:"".concat(e+1)}))):[{name:"1"},{name:"..."},{name:s-1+""},{name:s+""},{name:s+1+""},{name:"..."},{name:l+""}],[l,s]),x=()=>{a&&s<l&&a(m().toNumber(s+1))},u=()=>{a&&a(1)},p=()=>{a&&s>1&&a(m().toNumber(s-1))},h=()=>{a&&a(l)};return t<=n?null:(0,r.jsx)("div",{className:d()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",i),children:(0,r.jsxs)("div",{className:"flex",children:[l>1&&(0,r.jsxs)("span",{onClick:u,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]}),l>1&&(0,r.jsx)("span",{onClick:p,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),o.map((e,t)=>(0,r.jsx)("div",{className:d()({"text-white bg-green-1":e.name===""+s,omit:"..."===e.name},"mx-[0.185rem] flex justify-center items-center min-w-[32px] h-[32px] px-1.5 rounded-lg","..."!=e.name&&"border cursor-pointer"),onClick:()=>{a&&"..."!==e.name&&a(m().toNumber(e.name))},children:e.name},"key_page_".concat(t))),l>1&&(0,r.jsx)("span",{onClick:x,className:"mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),l>1&&(0,r.jsxs)("span",{onClick:h,className:" mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]})]})})}var x=n(7395),u=n(8778),p=n(5399),h=n.n(p),f=n(3517),w=n.n(f),g=n(3190);let j={0:"/images/date.svg",1:"/images/checked_top.svg",2:"/images/checked_bottom.svg"},v=[{url:"/images/subtract.svg",id:1},{url:"/images/frame.svg",id:2},{url:"/images/three.svg",id:3}],b=e=>{let{cateId:t,data:n,onCheck:s,checked:a,windowWidth:i}=e;return(0,r.jsx)("div",{className:"flex flex-wrap mb-[50px]  md:w-[100%] mx-auto md:mx-0   rounded-lg   w-container md:mt-5",children:!!n.length&&n.map((e,m)=>(0,r.jsxs)(c.Fragment,{children:[(0,u.tq)()&&0===m&&(0,r.jsxs)("div",{className:" text-[14px] md:border-b w-full md: border-[#DDDDDD] ",onClick:()=>s(),children:["发布时间",(0,r.jsx)("button",{className:" ml-[10px] md:mb-[10px] mt-1",children:(0,r.jsx)("img",{src:j[String(a)],className:"h-[10.89px] w-[7.82px]",alt:""})})]}),(0,u.tq)()?null:(0,r.jsx)("div",{className:" ".concat(0===m?"mt-5 ":"","w-full  h-[34px] mb-[32px] border-b  border-[#DDDDDD] \n                 mx-auto  md:w-full md:px-5 cursor-pointer\n                 "),children:n.length&&0===m?(0,r.jsx)(c.Fragment,{children:(0,r.jsxs)("div",{className:" text-[14px] md:border-b w-full md:border-t md: border-[#DDDDDD] ",onClick:()=>s(),children:["发布时间",(0,r.jsx)("button",{className:" ml-[10px] md:mb-[10px] mt-1",children:(0,r.jsx)("img",{src:j[String(a)],className:"h-[10.89px] w-[7.82px]",alt:""})})]})}):null}),(0,r.jsxs)("div",{className:" flex md:mt-5 w-full sm:w-[100%] md:h-[4.75rem]",children:[(0,r.jsx)("div",{className:" w-[19.375rem] md:w-[7.375rem]  h-[12.5rem] md:h-[4.75rem] rounded-lg ",children:(0,r.jsx)("img",{className:"max-w-[19.375rem] h-[12.5rem] md:w-[7.375rem] rounded-lg md:h-[4.75rem] object-cover",src:e.thumbUrl,alt:""})}),(0,r.jsxs)("div",{className:"flex flex-col md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   h-[12.5rem] ml-[2rem] md:ml-[10px] md:w-[100%]    mx-auto  justify-between  md:h-[4.75rem] ",children:[(0,r.jsxs)("div",{className:" h-[9.4375rem] md:w-[100%] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap ",children:[(0,r.jsx)(w(),{className:" md:w-[100%] font-semibold text-[20px] md:text-[16px] ",rel:"opener",target:(0,u.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t.id||t.cateId,"&id=").concat(e.id),children:e.title}),(0,r.jsxs)("time",{className:" md:h-[18px] leading-[18px] mt-[10px] md:mt-[6px] md:mb-[6px] mb-[5px] md:py-0 text-[14px] md:text-[12px] flex text-gray-2",children:[(0,r.jsx)("div",{className:"mr-5 ",children:e.author}),h()(1e3*e.newsUpdateTime).format("YYYY-MM-DD HH:mm:ss")]}),!(0,u.tq)()&&(0,r.jsx)("p",{title:e.digest,style:{WebkitLineClamp:i>1200?2:1,WebkitBoxOrient:"vertical",display:"-webkit-box"},className:" leading-[21px] text-ellipsis md:hidden text-[14px] line line-clamp-1 overflow-hidden",children:e.digest}),(0,r.jsx)("div",{className:"flex flex-row items-center   mt-[10px] md:h-[24px]",children:null==e?void 0:e.newsTypes.map((e,t)=>(0,r.jsx)("div",{className:"mr-5 font-OpenSans rounded-[0.25rem] md:text-[12px] px-[10px] text-[#29953A] text-[14px] bg-[#29953A1A]",children:e.typeName},"name_".concat(t)))})]}),(0,r.jsx)("div",{className:" md:hidden h-[3.0625rem] flex items-end mb-[-5px]",children:(0,r.jsx)(w(),{className:"text-green text-[14px] ",rel:"opener",target:(0,u.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t.id||t.cateId,"&id=").concat(e.id),children:"详情 >>"})})]})]})]},"data".concat(m)))})};function N(){let{query:e}=(0,g.useRouter)(),{typeName:t="数字碳知识库"}=e,n=(0,c.useRef)(0),[i,m]=(0,c.useState)(0),[l,p]=(0,c.useState)(!1),[h,f]=(0,c.useState)([]),[w,j]=(0,c.useState)([]),[N,y]=(0,c.useState)(window.innerWidth),[_,k]=(0,c.useState)({}),[D,E]=(0,c.useState)(1),[C]=(0,c.useState)(10),S=(0,g.useRouter)(),I=async()=>{p(!0);try{let e=await (0,x.p6)(),t={};e.forEach(e=>{let{typeGroup:n}=e;t[n]||(t[n]={id:e.id,typeGroup:e.typeGroup,children:[]});let{id:r,typeName:s,createTime:a,updateTime:i}=e;t[n].children.push({id:r,typeName:s,typeGroup:n,createTime:a,updateTime:i})});let n=Object.values(t);j(n)}catch(r){console.log("reeee",r)}finally{p(!1)}};(0,c.useEffect)(()=>{k({id:Number(S.query.cateId)})},[S.query]);let T=async()=>{let e=await (0,x.Pk)(null==_?void 0:_.id);n.current=e};(0,c.useEffect)(()=>{I()},[]),(0,c.useEffect)(()=>{let e=()=>{y(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,c.useEffect)(()=>{T()},[_.id]);let q=(0,c.useCallback)(async()=>{let e=await (0,x.Ik)(null==_?void 0:_.id,1===i,D,C);f(e||[])},[D,_.id,i]);(0,c.useEffect)(()=>{q()},[q]);let P={className:(0,u.tq)()?"":"border-b border-black"},A=()=>{m(2===i?1:i+1)},W=()=>{window.scrollTo({top:0})};return(0,r.jsx)(s.T,{headerProps:P,children:(0,r.jsxs)("div",{className:"mx-auto md:mx-3 ",children:[(0,r.jsx)("div",{id:"content",className:"flex  flex-wrap justify-between mx-auto md:w-full mt-10 rounded-lg  w-container md:mt-5",children:w.map((e,t)=>(0,r.jsxs)("div",{id:"box-medium",className:d()("w-[22.5rem]  h-[12.75rem] border-[#DDDDDD]  rounded-lg border sm:w-[49%]",{"md:w-full md:mt-5 md:h-[139px]  ":2===t," md:h-[140px] ":2!==t}),children:[(0,r.jsx)("div",{className:"  rounded-t-md  bg-green h-[4.25rem]  flex items-center\n                  ".concat(2===t?"md:w-full md:h-[50px] ":"md:h-[50px]  ","\n              "),children:(0,r.jsxs)("div",{className:"flex  flex-row items-center justify-between w-full mr-[0.75rem] ",children:[(0,r.jsx)("div",{className:" ml-[1.875rem] text-white text-[1.25rem] md:text-[1.125rem]",children:e.typeGroup}),(0,r.jsx)("div",{className:"flex justify-end ",children:(0,r.jsx)("img",{className:" w-[3.6875rem] h-[3.0625rem] md:w-[2.1875rem] md:h-[1.8125rem]",src:v[t].url,alt:""})})]})}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap ",children:e.children.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{E(1),m(0),S.push("/news?cateId=".concat(e.id))},className:d()("text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]",{"text-[#29953A]  bg-[#29953A1A]":_.id===e.id," bg-[#E9E9E9]":_.id!==e.id}),children:e.typeName},"check_".concat(t)))})]},"type_".concat(t)))}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(b,{windowWidth:N,onCheck:A,cateId:_,checked:i,data:h,pgNum:D})}),h.length?(0,r.jsx)(o,{onChange:e=>{E(e),W()},className:"mb-10 mt-50 md:mt-0 ",total:n.current,pgSize:10,pgNum:D}):null,l?(0,r.jsx)(a.g,{className:"pt-8"}):!(h&&h.length>0)&&(0,r.jsxs)("div",{className:"flex flex-col justify-center w-full py-20 text-center ",children:[(0,r.jsx)("div",{className:"flex justify-center ",children:(0,r.jsx)("img",{width:222,height:"125",src:"/images/noData.svg",alt:""})}),(0,r.jsx)("div",{children:"暂无数据"})]})]})})}}},function(e){e.O(0,[455,222,492,725,344,401,541,300,774,888,179],function(){return e(e.s=8729)}),_N_E=e.O()}]);