(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8729:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(446)}])},818:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var s=n(1527),a=n(4875),r=n.n(a),c=n(6349);function l(e){let{className:t,...n}=e;return(0,s.jsx)("div",{...n,className:r()("text-black w-full h-full flex items-center justify-center",t),children:(0,s.jsx)(c.uur,{className:"text-[3.125rem] animate-spin"})})}},7395:function(e,t,n){"use strict";n.d(t,{p6:function(){return x},uF:function(){return u},Ik:function(){return d},Pk:function(){return o},Pf:function(){return m}});var s=n(7306),a=n(5685);let r=a.env.NEXT_PUBLIC_API_BASE||"https://news.gtech-cn.co";var c=n(8778);function l(e){return"".concat(r).concat(e)}function i(e){let t=e.data;if(t){if(t.code&&200!==t.code)throw t.msg;return e.data}}function m(e,t){return()=>t.some(e=>!e)?(0,c._v)():e()}async function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,r=await s.Z.get(l("/wechat/news?newsTypeId=".concat(e,"&invert=").concat(t,"&pageNumber=").concat(n,"&pageSize=").concat(a)));return i(r)}async function x(){let e=await s.Z.get(l("/wechat/news/types"));return i(e)}async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=await s.Z.get(l("/wechat/news/count?newsTypeId=".concat(t,"&newsType=").concat(e)));return i(n)}async function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=await s.Z.get(l("/wechat/news/detail/".concat(e)));return i(t)}},8778:function(e,t,n){"use strict";function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(()=>t(void 0),e)})}function a(){return window.innerWidth<=900}n.d(t,{_v:function(){return s},tq:function(){return a}})},446:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(1527),a=n(4919),r=n(959),c=n(3517),l=n.n(c),i=n(8778),m=n(7207),d=n.n(m),x=n(4875),o=n.n(x);function u(e){let{total:t,pgSize:n,pgNum:a,onChange:c,className:l}=e,i=Math.ceil(t/n),m=(0,r.useMemo)(()=>i<=1?[]:i<=6?d().range(i).map(e=>({name:"".concat(e+1)})):a<=3?d().range(a+1).map(e=>({name:"".concat(e+1)})).concat([{name:"..."},{name:""+i}]):a>=i-2?[{name:"1"},{name:"..."}].concat(d().range(a-2,i).map(e=>({name:"".concat(e+1)}))):[{name:"1"},{name:"..."},{name:a-1+""},{name:a+""},{name:a+1+""},{name:"..."},{name:i+""}],[i,a]),x=()=>{c&&a<i&&c(d().toNumber(a+1))},u=()=>{c&&c(1)},p=()=>{c&&a>1&&c(d().toNumber(a-1))},h=()=>{c&&c(i)};return t<=n?null:(0,s.jsx)("div",{className:o()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",l),children:(0,s.jsxs)("div",{className:"flex",children:[i>1&&(0,s.jsxs)("span",{onClick:u,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,s.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,s.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]}),i>1&&(0,s.jsx)("span",{onClick:p,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,s.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),m.map((e,t)=>(0,s.jsx)("div",{className:o()({"text-white bg-green-1":e.name===""+a,omit:"..."===e.name},"mx-[0.185rem] min-w-[32px] h-[32px] px-1.5 rounded-lg","..."!=e.name&&"border cursor-pointer"),onClick:()=>{c&&"..."!==e.name&&c(d().toNumber(e.name))},children:e.name},"key_page_".concat(t))),i>1&&(0,s.jsx)("span",{onClick:x,className:"mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,s.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),i>1&&(0,s.jsxs)("span",{onClick:h,className:" mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,s.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,s.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]})]})})}var p=n(7395),h=n(5399),f=n.n(h),g=n(818);let w=e=>{let{cateId:t,data:n}=e;return(0,s.jsx)("div",{className:" w-container md:w-[351px] md:mt-8 md:px-[20px]",children:!!n.length&&n.map((e,n)=>(0,s.jsxs)(r.Fragment,{children:[(0,i.tq)()?null:(0,s.jsx)("div",{className:"mt-5 mb-5 border-t text-sk border-gray-1"}),(0,s.jsxs)("div",{className:"flex mb-12 md:items-center md:mb-5 w-full h-[200px] md:h-[4.875rem]",children:[(0,s.jsx)("div",{className:"  max-w-[350px] md:max-w-[118px] w-full md:w-[118px]    h-[16.125rem] md:h-[4.875rem] rounded-lg ",children:(0,s.jsx)("div",{className:"w-[19.375rem] h-[12.5rem] ",children:(0,s.jsx)("img",{className:"w-auto h-full md:max-w-[118px] rounded-lg md:max-h-[78px] ",src:e.thumbUrl,alt:""})})}),(0,s.jsx)("div",{className:"flex flex-col md:w-full justify-between md:ml-[10px] md:max-h-[78px] ",children:(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h4",{className:"overflow-hidden text-2xl font-semibold md:text-base",children:(0,s.jsx)(l(),{className:"ellipsis-2 text-[20px] md:text-[16px] md:w-[221px] md:text-ellipsis md:overflow-hidden md:whitespace-nowrap",rel:"opener",target:(0,i.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t,"&id=").concat(e.id),children:e.title})}),(0,s.jsxs)("time",{className:" md:py-0 text-[14px] md:text-[12px] flex text-gray-2",children:[(0,s.jsx)("div",{className:"mr-5 ",children:e.author}),f()(1e3*e.newsUpdateTime).format("YYYY-MM-DD HH:mm:ss")]}),(0,s.jsx)("p",{className:"md:hidden text-[14px] ",children:e.digest}),(0,s.jsx)("div",{className:"flex flex-row mt-[10px] md:h-[24px]",children:null==e?void 0:e.newsTypes.map((e,t)=>(0,s.jsx)("div",{className:"mr-5 border rounded-lg px-[10px] text-[#29953A] text-[14px] bg-[#29953A1A]",children:e.typeName},"name_".concat(t)))}),(0,s.jsx)("div",{className:"mt-5 md:hidden",children:(0,s.jsx)(l(),{className:"text-green text-[14px] mb-5",rel:"opener",target:(0,i.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t,"&id=").concat(e.id),children:"详情 >>"})})]})})]})]},"data".concat(n)))})},j=[{url:"/images/subtract.svg",id:1},{url:"/images/frame.svg",id:2},{url:"/images/three.svg",id:3}];function v(){let e=(0,r.useRef)(0),[t,n]=(0,r.useState)(0),[c,l]=(0,r.useState)(!1),[m,d]=(0,r.useState)([]),[x,o]=(0,r.useState)([]),[h,f]=(0,r.useState)({}),[v,N]=(0,r.useState)(1),[b]=(0,r.useState)(10),y=async()=>{l(!0);try{let e=await (0,p.p6)(),t={};e.forEach(e=>{let{typeGroup:n}=e;t[n]||(t[n]={id:e.id,typeGroup:e.typeGroup,children:[]});let{id:s,typeName:a,createTime:r,updateTime:c}=e;t[n].children.push({id:s,typeName:a,typeGroup:n,createTime:r,updateTime:c})});let n=Object.values(t);f(n[0]),o(n)}catch(s){console.log("reeee",s)}finally{l(!1)}},_=async()=>{let t=await (0,p.Pk)(null==h?void 0:h.typeName,null==h?void 0:h.id);e.current=t};(0,r.useEffect)(()=>{y()},[]),(0,r.useEffect)(()=>{_()},[h.id]),(0,r.useEffect)(()=>{k()},[v,h.id,t]);let k=async()=>{let e=await (0,p.Ik)(null==h?void 0:h.id,1==t,v,b);d(e||[])},E={className:(0,i.tq)()?"":"border-b border-black"},C=()=>{n(3===t?1:t+1)};return(0,s.jsx)(a.T,{headerProps:E,children:(0,s.jsxs)("div",{className:"flex flex-col mx-[155px] md:mx-0 md:w-[351]",children:[(0,s.jsx)("div",{className:" flex flex-wrap md:ml-5 md:mr-[2.5 md:mx-0 rem] mt-10 md:ml-[20px] rounded-lg justify-between",children:x.map((e,t)=>(0,s.jsxs)("div",{className:"w-[360px]  h-[12.75rem]  rounded-lg shadow-lg   md:mr-[25px] ".concat(2===t?"md:w-full md:mt-5  ":"md:w-[10.625rem] "),children:[(0,s.jsx)("div",{className:"  rounded-t-md  bg-green h-[68px] md:w-50px flex items-center\n                \n               ".concat(2===t?"md:w-full  ":"md:w-[10.625rem]","\n              "),children:(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between w-full mr-[12px] ",children:[(0,s.jsx)("div",{className:" ml-[1.875rem] text-white md:text-[16px]",children:e.typeGroup}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("img",{className:" w-[59px] h-[49px] md:w-[35px] md:h-[29px]",src:j[t].url,alt:""})})]})}),(0,s.jsx)("div",{className:"flex flex-row flex-wrap",children:e.children.map((e,t)=>(0,s.jsx)("div",{onClick:()=>{f(e),n(0)},className:" ".concat((null==h?void 0:h.id)===e.id&&"text-[#29953A]  bg-[#29953A1A] "," cursor-pointer   bg-[#E9E9E9] min-w-[20px] h-[38px] flex items-center ml-5 mt-5 rounded-[0.25rem] px-[1rem]"),children:e.typeName},"check_".concat(t)))})]},"type_".concat(t)))}),(0,s.jsxs)("div",{className:"mt-5 ",children:[(0,s.jsx)("div",{className:"h-[26px] md:ml-5 md:border-b md:w-[380px] flex flex-row items-center",children:m.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:" text-[14px] md:mb-[15px]",children:"发布时间"}),(0,s.jsx)("div",{className:"ml-[10px] md:mb-[15px]",onClick:()=>C(),children:(0,s.jsx)("img",{src:{0:"/images/date.svg",1:"/images/checked_top.svg",2:"/images/checked_bottom.svg",3:"/images/date.svg"}[t],className:"h-[13px] w-[13px]",alt:""})})]}):null}),c?(0,s.jsx)(g.g,{className:"h-[22rem] "}):(0,s.jsx)(w,{cateId:null==h?void 0:h.id,data:m}),m.length?(0,s.jsx)(u,{onChange:e=>{N(e)},className:"my-8",total:e.current,pgSize:10,pgNum:v}):null,c?(0,s.jsx)(g.g,{className:"pt-8"}):!(m&&m.length>0)&&(0,s.jsxs)("div",{className:"flex flex-col justify-center w-full py-20 text-center ",children:[(0,s.jsxs)("div",{className:"flex justify-center ",children:[" ",(0,s.jsx)("img",{width:222,height:"125",src:"/images/noData.svg",alt:""})]}),(0,s.jsx)("div",{children:"暂无数据"})]})]})]})})}}},function(e){e.O(0,[455,222,492,725,344,401,541,919,774,888,179],function(){return e(e.s=8729)}),_N_E=e.O()}]);