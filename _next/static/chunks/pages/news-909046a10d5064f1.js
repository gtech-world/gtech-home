(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{8729:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(446)}])},818:function(e,t,n){"use strict";n.d(t,{g:function(){return m}});var r=n(1527),a=n(4875),s=n.n(a),c=n(6349);function m(e){let{className:t,...n}=e;return(0,r.jsx)("div",{...n,className:s()("text-black w-full h-full flex items-center justify-center",t),children:(0,r.jsx)(c.uur,{className:"text-[3.125rem] animate-spin"})})}},7395:function(e,t,n){"use strict";n.d(t,{p6:function(){return o},uF:function(){return u},Ik:function(){return d},Pk:function(){return x},Pf:function(){return l}});var r=n(7306),a=n(5685);let s=a.env.NEXT_PUBLIC_API_BASE||"https://news.gtech-cn.co";var c=n(8778);function m(e){return"".concat(s).concat(e)}function i(e){let t=e.data;if(t){if(t.code&&200!==t.code)throw t.msg;return e.data}}function l(e,t){return()=>t.some(e=>!e)?(0,c._v)():e()}async function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,s=await r.Z.get(m("/wechat/news?newsTypeId=".concat(e,"&invert=").concat(t,"&pageNumber=").concat(n,"&pageSize=").concat(a)));return i(s)}async function o(){let e=await r.Z.get(m("/wechat/news/types"));return i(e)}async function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=await r.Z.get(m("/wechat/news/count?newsTypeId=".concat(t,"&newsType=").concat(e)));return i(n)}async function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=await r.Z.get(m("/wechat/news/detail/".concat(e)));return i(t)}},8778:function(e,t,n){"use strict";function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(()=>t(void 0),e)})}function a(){return window.innerWidth<=900}n.d(t,{_v:function(){return r},tq:function(){return a}})},446:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(1527),a=n(4919),s=n(959),c=n(3517),m=n.n(c),i=n(8778),l=n(7207),d=n.n(l),o=n(4875),x=n.n(o);function u(e){let{total:t,pgSize:n,pgNum:a,onChange:c,className:m}=e,i=Math.ceil(t/n),l=(0,s.useMemo)(()=>i<=1?[]:i<=6?d().range(i).map(e=>({name:"".concat(e+1)})):a<=3?d().range(a+1).map(e=>({name:"".concat(e+1)})).concat([{name:"..."},{name:""+i}]):a>=i-2?[{name:"1"},{name:"..."}].concat(d().range(a-2,i).map(e=>({name:"".concat(e+1)}))):[{name:"1"},{name:"..."},{name:a-1+""},{name:a+""},{name:a+1+""},{name:"..."},{name:i+""}],[i,a]),o=()=>{c&&a<i&&c(d().toNumber(a+1))},u=()=>{c&&c(1)},h=()=>{c&&a>1&&c(d().toNumber(a-1))},p=()=>{c&&c(i)};return t<=n?null:(0,r.jsx)("div",{className:x()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",m),children:(0,r.jsxs)("div",{className:"flex",children:[i>1&&(0,r.jsxs)("span",{onClick:u,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]}),i>1&&(0,r.jsx)("span",{onClick:h,className:"mx-[0.185rem] flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),l.map((e,t)=>(0,r.jsx)("div",{className:x()({"text-white bg-green-1":e.name===""+a,omit:"..."===e.name},"mx-[0.185rem] min-w-[32px] h-[32px] px-1.5 rounded-lg","..."!=e.name&&"border cursor-pointer"),onClick:()=>{c&&"..."!==e.name&&c(d().toNumber(e.name))},children:e.name},"key_page_".concat(t))),i>1&&(0,r.jsx)("span",{onClick:o,className:"mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})}),i>1&&(0,r.jsxs)("span",{onClick:p,className:" mx-[0.185rem] rotate-180 flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:[(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""}),(0,r.jsx)("img",{src:"/images/arrow_page.svg",alt:""})]})]})})}var h=n(7395),p=n(5399),f=n.n(p),w=n(818),g=n(3190);let v={0:"/images/date.svg",1:"/images/checked_bottom.svg",2:"/images/checked_top.svg",3:"/images/date.svg"},j=e=>{let{cateId:t,data:n,setPgNum:a,tableDataTotal:c,pgNum:l,windowWidth:d,onCheck:o,checked:x}=e;return(0,r.jsx)("div",{className:"flex flex-wrap  md:w-[100%] mx-auto md:mx-0   rounded-lg  ".concat(d>900&&"w-container"," md:mt-5"),children:!!n.length&&n.map((e,a)=>(0,r.jsxs)(s.Fragment,{children:[(0,i.tq)()&&0===a&&(0,r.jsxs)("div",{className:" text-[14px] md:border-b w-full md: border-[#DDDDDD] ",onClick:()=>o(),children:["发布时间",(0,r.jsx)("button",{className:" ml-[10px] md:mb-[10px] mt-1",children:(0,r.jsx)("img",{src:v[x],className:"h-[10.89px] w-[7.82px]",alt:""})})]}),(0,i.tq)()?null:(0,r.jsx)("div",{className:" mt-5 w-full h-[34px] mb-[32px] border-b border-[#DDDDDD] mx-auto md:w-full md:px-5 cursor-pointer ",children:n.length&&0===a?(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)("div",{className:" text-[14px] md:border-b w-full md:border-t md: border-[#DDDDDD] ",onClick:()=>o(),children:["发布时间",(0,r.jsx)("button",{className:" ml-[10px] md:mb-[10px] mt-1",children:(0,r.jsx)("img",{src:v[x],className:"h-[10.89px] w-[7.82px]",alt:""})})]})}):null}),(0,r.jsxs)("div",{className:" flex md:mt-5 md:mb-5 w-full sm:w-[100%] md:h-[4.875rem]",children:[(0,r.jsx)("div",{className:" w-[19.375rem] md:w-[7.375rem]  h-[12.5rem] md:h-[4.875rem] rounded-lg ",children:(0,r.jsx)("img",{className:"max-w-[19.375rem] h-[12.5rem] md:w-[7.375rem] rounded-lg md:h-[4.875rem] ",src:e.thumbUrl,alt:""})}),(0,r.jsxs)("div",{className:"flex flex-col md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   h-[12.5rem] ml-[2rem] md:ml-[10px] md:w-[100%]    mx-auto  justify-between  md:h-[4.875rem] ",children:[(0,r.jsxs)("div",{className:"h-[9.4375rem] md:w-[100%] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap ",children:[(0,r.jsx)(m(),{className:"md:w-[100%] text-[20px] font-[600px] md:text-[16px] ",rel:"opener",target:(0,i.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t.id,"&id=").concat(e.id,"&name=").concat(t.typeName,"&type=").concat(e.author),children:e.title}),(0,r.jsxs)("time",{className:" md:py-0 text-[14px] md:text-[12px] flex text-gray-2",children:[(0,r.jsx)("div",{className:"mr-5 ",children:e.author}),f()(1e3*e.newsUpdateTime).format("YYYY-MM-DD HH:mm:ss")]}),!(0,i.tq)()&&(0,r.jsx)("p",{style:{WebkitLineClamp:2,WebkitBoxOrient:"vertical",display:"-webkit-box"},className:" md:hidden text-[14px] line-clamp-2 overflow-hidden",children:e.digest}),(0,r.jsx)("div",{className:"flex flex-row mt-[10px] md:h-[24px]",children:null==e?void 0:e.newsTypes.map((e,t)=>(0,r.jsx)("div",{className:"mr-5 border rounded-[0.25rem] px-[10px] text-[#29953A] text-[14px] bg-[#29953A1A]",children:e.typeName},"name_".concat(t)))})]}),(0,r.jsx)("div",{className:" md:hidden h-[3.0625rem] flex items-end",children:(0,r.jsx)(m(),{className:"text-green text-[14px] ",rel:"opener",target:(0,i.tq)()?"":"_blank",href:"/news/detail?cateId=".concat(t.id,"&id=").concat(e.id,"&name=").concat(t.typeName,"&type=").concat(e.author),children:"详情 >>"})})]})]})]},"data".concat(a)))})},N=[{url:"/images/subtract.svg",id:1},{url:"/images/frame.svg",id:2},{url:"/images/three.svg",id:3}];function b(){let{query:e}=(0,g.useRouter)(),t=(0,s.useRef)(0),[n,c]=(0,s.useState)(0),[m,l]=(0,s.useState)(!1),[d,o]=(0,s.useState)([]),[x,p]=(0,s.useState)([]),[f,v]=(0,s.useState)(window.innerWidth),[b,y]=(0,s.useState)({}),[_,k]=(0,s.useState)(1),[D]=(0,s.useState)(10),E=async()=>{l(!0);try{let e=await (0,h.p6)(),t={};e.forEach(e=>{let{typeGroup:n}=e;t[n]||(t[n]={id:e.id,typeGroup:e.typeGroup,children:[]});let{id:r,typeName:a,createTime:s,updateTime:c}=e;t[n].children.push({id:r,typeName:a,typeGroup:n,createTime:s,updateTime:c})});let n=Object.values(t);y(n[0].children[0]),p(n)}catch(r){console.log("reeee",r)}finally{l(!1)}};(0,s.useEffect)(()=>{let t=null==e?void 0:e.cateId;if(x&&x.length&&e.cateId){let n=x.find(e=>e.id===Number(t));y(n)}},[e]);let C=async()=>{let e=await (0,h.Pk)(null==b?void 0:b.typeName,null==b?void 0:b.id);t.current=e};(0,s.useEffect)(()=>{E()},[]),(0,s.useEffect)(()=>{let e=()=>{v(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,s.useEffect)(()=>{C()},[b.id]),(0,s.useEffect)(()=>{I()},[_,b.id,n]);let I=async()=>{let e=await (0,h.Ik)(null==b?void 0:b.id,1==n,_,D);o(e||[])},S={className:(0,i.tq)()?"":"border-b border-black"},T=()=>{c(3===n?1:n+1)};return(0,r.jsx)(a.T,{headerProps:S,children:(0,r.jsxs)("div",{className:"mx-auto md:mx-3 ",children:[(0,r.jsx)("div",{id:"content",className:" flex flex-wrap justify-between mx-auto md:w-full mt-10 rounded-lg  ".concat(f>900&&"w-container"," md:mt-5"),children:x.map((e,t)=>(0,r.jsxs)("div",{id:"box-medium",className:"w-[22.5rem]  h-[12.75rem]  rounded-lg shadow\n                 sm:w-[49%]\n                \n                ".concat(2===t?"md:w-full md:mt-5 md:h-[139px]  ":" md:h-[140px] "),children:[(0,r.jsx)("div",{className:"  rounded-t-md  bg-green h-[4.25rem]  flex items-center\n                \n               ".concat(2===t?"md:w-full md:h-[50px] ":"md:h-[50px]  ","\n\n              "),children:(0,r.jsxs)("div",{className:"flex  flex-row items-center justify-between w-full mr-[0.75rem] ",children:[(0,r.jsx)("div",{className:" ml-[1.875rem] text-white text-[1.25rem] md:text-[1.125rem]",children:e.typeGroup}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)("img",{className:" w-[3.6875rem] h-[3.0625rem] md:w-[2.1875rem] md:h-[1.8125rem]",src:N[t].url,alt:""})})]})}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:e.children.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{y(e),c(0)},className:" ".concat((null==b?void 0:b.id)===e.id?"text-[#29953A]  bg-[#29953A1A]":" bg-[#E9E9E9]"," text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]"),children:e.typeName},"check_".concat(t)))})]},"type_".concat(t)))}),(0,r.jsx)("div",{className:"",children:m?(0,r.jsx)(w.g,{className:"h-[22rem] "}):(0,r.jsx)(j,{onCheck:T,cateId:b,checked:n,data:d,setPgNum:k,windowWidth:f,tableDataTotal:t.current,pgNum:_})}),d.length?(0,r.jsx)(u,{onChange:e=>{k(e)},className:"my-8",total:t.current,pgSize:10,pgNum:_}):null,m?(0,r.jsx)(w.g,{className:"pt-8"}):!(d&&d.length>0)&&(0,r.jsxs)("div",{className:"flex flex-col justify-center w-full py-20 text-center ",children:[(0,r.jsx)("div",{className:"flex justify-center ",children:(0,r.jsx)("img",{width:222,height:"125",src:"/images/noData.svg",alt:""})}),(0,r.jsx)("div",{children:"暂无数据"})]})]})})}}},function(e){e.O(0,[455,222,492,725,344,401,541,919,774,888,179],function(){return e(e.s=8729)}),_N_E=e.O()}]);