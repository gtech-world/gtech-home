(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{4791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/detail",function(){return n(8982)}])},818:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(1527),c=n(4875),a=n.n(c),s=n(6349);function i(e){let{className:t,...n}=e;return(0,r.jsx)("div",{...n,className:a()("text-black w-full h-full flex items-center justify-center",t),children:(0,r.jsx)(s.uur,{className:"text-[3.125rem] animate-spin"})})}},7395:function(e,t,n){"use strict";n.d(t,{p6:function(){return d},uF:function(){return f},Ik:function(){return o},Pk:function(){return m},Pf:function(){return u}});var r=n(7306),c=n(5685);let a=c.env.NEXT_PUBLIC_API_BASE||"https://news.gtech-cn.co";var s=n(8778);function i(e){return"".concat(a).concat(e)}function l(e){let t=e.data;if(t){if(t.code&&200!==t.code)throw t.msg;return e.data}}function u(e,t){return()=>t.some(e=>!e)?(0,s._v)():e()}async function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(!e)return;let a=await r.Z.get(i("/wechat/news?newsTypeId=".concat(e,"&invert=").concat(!t,"&pageNumber=").concat(n,"&pageSize=").concat(c)));return l(a)}async function d(){let e=await r.Z.get(i("/wechat/news/types"));return l(e)}async function m(e,t){if(!e)return;let n=await r.Z.get(i("/wechat/news/count?newsTypeId=".concat(e)));return l(n)}async function f(e){if(!e)return;let t=await r.Z.get(i("/wechat/news/detail/".concat(e)));return l(t)}},8778:function(e,t,n){"use strict";function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>{setTimeout(()=>t(void 0),e)})}function c(){return window.innerWidth<=900}n.d(t,{_v:function(){return r},tq:function(){return c}})},8982:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(1527),c=n(5300),a=n(959),s=n(3190),i=n(4875),l=n.n(i),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},o=n(7395),d=n(5399),m=n.n(d),f=n(8778),p=n(7487),x=n(818);let h=e=>{let{content:t,className:n}=e,c=[];return t.map(e=>{e.href?c.push('<a href="'.concat(e.href,'" rel="noreferrer">').concat(e.name,"</a>")):c.push('<span class="text-gray-1">'.concat(e.name,"</span>"))}),(0,r.jsx)("div",{className:l()("text-sm font-medium",n),dangerouslySetInnerHTML:{__html:c.join(" / ")}})},g=()=>{let{query:e}=(0,s.useRouter)(),{id:t,cateId:n}=e,{push:i}=(0,s.useRouter)(),[l,d]=(0,a.useState)(!1),{value:g,loading:w}=function(e){var t,n,r,c,s,i,l,o,d;let m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=(0,a.useRef)(!0),p=(0,a.useRef)(0),[,x]=(0,a.useState)(1),h=(0,a.useCallback)(e=>{f.current=e,x(e=>1-e)},[]),[g,w]=(void 0===(t=m)&&(t=[]),void 0===n&&(n={loading:!1}),r=(0,a.useRef)(0),c=(0,a.useRef)(!1),s=(0,a.useCallback)(function(){return c.current},[]),(0,a.useEffect)(function(){return c.current=!0,function(){c.current=!1}},[]),l=(i=(0,a.useState)(n))[0],o=i[1],d=(0,a.useCallback)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var c=++r.current;return l.loading||o(function(e){return u(u({},e),{loading:!0})}),e.apply(void 0,t).then(function(e){return s()&&c===r.current&&o({value:e,loading:!1}),e},function(e){return s()&&c===r.current&&o({error:e,loading:!1}),e})},t),[l,d]),v=()=>{f.current||h(!0);let e=p.current+1>1e5?0:p.current+1;p.current=e,w().finally(()=>p.current==e&&h(!1))};return(0,a.useEffect)(()=>{v()},m),(0,a.useMemo)(()=>({...g,value:f.current||g.error?void 0:g.value,loading:f.current,req:v}),[g,f.current])}((0,o.Pf)(async()=>(0,o.uF)(t),[t]),[t]),v=(0,a.useMemo)(()=>{var e;return(null==g?void 0:g.newsItem)?(d(!0),{type:(null===(e=null==g?void 0:g.newsTypes.find(e=>e.id===Number(n)))||void 0===e?void 0:e.typeName)||"",title:g.title,time:m()(1e3*g.newsUpdateTime).format("YYYY-MM-DD HH:mm:ss"),content:JSON.parse(null==g?void 0:g.newsItem).content.replace(/data-src/g,"src").replace(/color:[\s\S]*?;/g,"").replace(/font-size:\s*16\.?\d*pt;/g,"font-size: ".concat((0,f.tq)()?"1rem":"1.5rem",";")).replace(/font-size:\s*(11|12(\.0)?)pt;/g,"font-size: ".concat((0,f.tq)()?"0.875rem":"1.125rem",";")).replace(/(line|font)-(height|weight):\s+normal;/g,"").replace(/width:\s*100%;/g,"").replace(/height:\s*\d+\.?\d+px;/g,"").replace(/margin-\w+:\s*0\.?\d*pt;/g,"").replace(/<br\s*\/>/g,"").replace(/&nbsp;/g,"")}):{content:"",title:"",time:""}},[g]),N={className:(0,f.tq)()?"":"border-b border-black"};return(0,r.jsxs)(c.T,{hiddenHeader:(0,f.tq)(),headerProps:N,children:[(0,r.jsxs)("div",{className:"h-[4rem] justify-center items-center hidden md:flex",children:[(0,r.jsx)(p.u1R,{onClick:()=>i("/news?cateId=".concat(n)),className:"absolute text-xl left-2 text-green"}),(0,r.jsx)("h4",{className:"text-lg text-center text-green",children:"资讯动态"})]}),(0,r.jsxs)("div",{className:"mx-auto w-container md:w-full md:px-3 md:mt-2",children:[(0,r.jsxs)("header",{className:"border-b pb-9 border-gray-10 md:pb-5",children:[(0,r.jsx)(h,{className:"py-8 md:hidden",content:[{name:v.type||"",href:"/news?cateId=".concat(e.cateId)},{name:"详情"}]}),(0,r.jsx)("h1",{className:"text-4xl font-semibold md:text-lg",children:v.title}),(0,r.jsxs)("div",{className:"flex flex-row pt-[24px] w-[70%] md:w-[290px] md:flex-wrap ",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("span",{className:"text-gray-1 text-[16px] md:text-[14px] min-w-min ",children:null==g?void 0:g.author}),(0,r.jsx)("time",{className:"inline-block ml-5 text-[16px] md:text-[14px] text-gray-1 md:text-sm",children:v.time})]}),(0,r.jsx)("div",{className:"flex flex-row mr-16 ",children:null==g?void 0:g.newsTypes.map((e,t)=>(0,r.jsx)("div",{className:"flex md:mr-5 ml-5 rounded-[0.25rem] px-[10px] flex-row items-center md:max-w-[96px] md:ml-0 md:mt-2 md:h-[28px] text-[#29953A] text-[14px] md:text-[12px] bg-[#29953A1A]",children:(0,r.jsx)("span",{className:"",children:e.typeName})},"list_".concat(t)))})]})]}),l?(0,r.jsx)("div",{className:"mt-8 article-content",dangerouslySetInnerHTML:{__html:v.content}}):(0,r.jsx)(x.g,{className:"h-[40rem]"})]})]})};var w=g}},function(e){e.O(0,[455,222,492,725,439,401,541,300,774,888,179],function(){return e(e.s=4791)}),_N_E=e.O()}]);