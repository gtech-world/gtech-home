(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{7349:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions/web3",function(){return t(6382)}])},1854:function(e,s,t){"use strict";t.d(s,{z:function(){return n}});var l=t(1527);t(959);var a=t(4875),i=t.n(a);function n(e){let{text:s,className:t,onClick:a}=e;return(0,l.jsx)("div",{onClick:()=>a&&a(),className:i()("inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center",t),children:s})}},7420:function(e,s,t){"use strict";t.d(s,{T:function(){return N}});var l=t(1527),a=t(4875),i=t.n(a),n=t(959),r=t(3517),m=t.n(r),c=t(3190),d=t(367),x=t(2239),o=t(7994),h=t(7191),g=t(183);function u(e){let{t:s,i18n:t}=(0,g.$G)("common"),{data:a=[]}=e,{pathname:r}=(0,c.useRouter)(),x=(0,n.useRef)(),[h,u]=(0,n.useState)(""),f=()=>{t.changeLanguage("en"===t.language?"zh":"en")};return(0,d.Z)(x,()=>!!h&&u("")),(0,l.jsxs)("div",{className:"text-xl flex md:hidden",ref:x,children:[a.map((e,s)=>e.children&&e.children.length?(0,l.jsxs)("div",{className:"relative".concat(0===s?"":" ml-14"),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>u(h?"":e.href),children:[(0,l.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,l.jsx)(o.kR5,{className:i()("ml-2 mt-1",h?"rotate-180":"")})]}),h===e.href&&(0,l.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,s)=>(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:e.href,className:i()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(s)))})]},"nav-".concat(s)):(0,l.jsx)(m(),{className:"".concat(0===s?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(s))),(0,l.jsx)("span",{className:"cursor-pointer ml-12",onClick:f,children:s("translation")})]})}function f(e){let{pathname:s}=(0,c.useRouter)(),{data:t=[]}=e;return(0,l.jsx)("ul",{className:"text-sm mt-3 leading-8",children:t.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(m(),{href:e.href,className:i()("inline-block w-full",s===e.href?"text-green":""),children:e.name})},"MobileSubNav-".concat(t)))})}function p(e){let{data:s=[]}=e,{pathname:t}=(0,c.useRouter)(),[a,r]=(0,n.useState)("/"===t?"":t),g=(0,n.useRef)(),[u,p]=(0,x.Z)(!1);return(0,d.Z)(g,()=>u&&p(!1)),(0,l.jsxs)("div",{className:"hidden md:block",ref:g,children:[(0,l.jsx)(h.otZ,{className:"text-green text-4xl",onClick:p}),u&&(0,l.jsx)("div",{className:"absolute right-0 bg-white w-screen px-5 py-4",children:s.map((e,s)=>{let n=e.children&&e.children.length;return(0,l.jsxs)("div",{className:i()("mt-4",0===s?"mt-3":""),onClick:()=>r(a?"":e.href),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[n?(0,l.jsx)("span",{children:e.name}):(0,l.jsx)(m(),{className:i()("inline-block w-full",t===e.href?"text-green":""),href:e.href,children:e.name}),n&&(0,l.jsx)(o.kR5,{className:a?"rotate-180":""})]}),a.indexOf(e.href)>-1&&(0,l.jsx)(f,{data:e.children})]},"MobileNav-".concat(s))})})]})}function b(){let{t:e}=(0,g.$G)("common"),s=[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]},{href:"/contact",name:e("navigation.list.item3.name")}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{data:s}),(0,l.jsx)(p,{data:s})]})}function j(e){let{sticky:s=!0,isTransparent:t,className:a}=(null==e?void 0:e.props)||{};return(0,l.jsxs)("div",{className:i()(s?"sticky":"","w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",t?"bg-transparent":"bg-white",a),children:[(0,l.jsx)(m(),{href:"/",children:(0,l.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,l.jsx)(b,{})]})}function N(e){let{className:s,headerProps:t,children:a,...n}=e;return(0,l.jsxs)("div",{className:"h-full w-full bg-slate-50",children:[(0,l.jsx)(j,{props:t}),(0,l.jsx)("div",{className:i()("w-full mx-auto text-lg md:text-sm",s),...n,children:a})]})}},6382:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var l=t(1527),a=t(7420),i=t(1854),n=t(183);function r(){let{t:e}=(0,n.$G)("web3");return(0,l.jsx)("div",{className:"h-[44.625rem] w-full bg-[url(/images/map.png)] bg-no-repeat bg-[length:auto_100%] bg-center flex justify-center items-center px-9 md:h-[26rem]",children:(0,l.jsxs)("div",{className:"bg-green/[.92] flex flex-col justify-center w-[58.5rem] px-8 py-10 text-[2rem] leading-[2.75rem] text-yellow md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto",children:[(0,l.jsx)("h3",{className:"text-white font-bold text-5xl md:text-[1.75rem] md:leading-9",children:e("banner.title")}),(0,l.jsx)("p",{className:"mt-3",children:e("banner.subtitle")})]})})}function m(){let{t:e}=(0,n.$G)("web3");return(0,l.jsxs)("div",{className:"flex flex-col items-center pb-20 md:pb-8",children:[(0,l.jsx)("h3",{className:"my-16 text-center md:px-8 md:my-12",children:e("storageInitiative.title")}),(0,l.jsxs)("div",{className:"flex md:flex-col md:px-3",children:[(0,l.jsx)("img",{className:"mx-auto w-[29.875rem] md:w-full md:max-w-[20.875rem]",src:"/images/web3_pic.svg",alt:""}),(0,l.jsxs)("div",{className:"ml-14 w-[39.75rem] leading-6 md:w-full md:ml-0 md:text-center md:mt-8",children:[(0,l.jsx)("h4",{className:"text-2xl font-bold md:text-base",children:e("storageInitiative.list.item1.title")}),(0,l.jsx)("p",{className:"mt-5",children:e("storageInitiative.list.item1.text.p1")}),(0,l.jsx)("p",{children:e("storageInitiative.list.item1.text.p2")}),(0,l.jsx)("h4",{className:"text-2xl font-bold mb-5 mt-8 md:text-base",children:e("storageInitiative.list.item2.title")}),(0,l.jsx)("p",{children:e("storageInitiative.list.item2.text.p1")}),(0,l.jsx)("p",{children:e("storageInitiative.list.item2.text.p2")})]})]})]})}function c(){let{t:e}=(0,n.$G)("web3");return(0,l.jsxs)("div",{className:"w-full bg-bgc flex flex-col items-center pt-16 pb-16 md:pt-8 md:pb-10",children:[(0,l.jsx)("h3",{className:"text-green mb-20 px-12 text-center md:mb-8",children:e("storageMiddlewares.title")}),(0,l.jsxs)("div",{className:"flex items-center md:flex-col-reverse text-base",children:[(0,l.jsx)("div",{className:"w-[29.875rem] md:w-full md:text-center md:mt-8",children:(0,l.jsxs)("div",{className:"px-7",children:[(0,l.jsx)("p",{children:e("storageMiddlewares.text")}),(0,l.jsx)("h5",{className:"mt-8 mb-5",children:e("storageMiddlewares.list.item1.title")}),(0,l.jsx)("p",{children:e("storageMiddlewares.list.item1.text")}),(0,l.jsx)("h5",{className:"mt-8 mb-5",children:e("storageMiddlewares.list.item2.title")}),(0,l.jsx)("p",{children:e("storageMiddlewares.list.item2.text")})]})}),(0,l.jsxs)("div",{className:"flex ml-24 md:flex-col md:px-8 md:ml-0",children:[(0,l.jsxs)("div",{className:"w-[19.625rem] h-[23.5rem] border-2 border-black bg-white rounded-l-xl md:rounded-t-xl md:rounded-b-none md:pb-2",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center border-b-2 border-black pt-6 pb-5",children:[(0,l.jsx)("div",{className:"text-[1.75rem] font-medium",children:"PaaS"}),(0,l.jsx)("span",{className:"leading-[1.3125rem] mt-[.625rem]",children:e("storageMiddlewares.table.paas.text")})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center py-7",children:[(0,l.jsxs)("div",{className:"flex items-center text-4xl mb-8",children:[(0,l.jsx)("span",{className:"mr-2",children:"W3"}),(0,l.jsx)("img",{src:"/images/container.svg"}),(0,l.jsx)("span",{className:"px-3",children:"+"}),(0,l.jsx)("span",{className:"mr-2",children:"W3"}),(0,l.jsx)("img",{src:"/images/upload.svg"})]}),(0,l.jsx)("h6",{className:"text-[1.35rem] leading-5 font-medium leading-7 mb-2 underline no-skip-ink",children:"W3Buckets"}),(0,l.jsx)("span",{className:"leading-[1.375rem]",children:e("storageMiddlewares.table.paas.w3bucket")}),(0,l.jsx)("h6",{className:"text-[1.35rem] leading-5 font-medium leading-7 mt-6 mb-2 underline no-skip-ink",children:"W3Gateways"}),(0,l.jsx)("span",{className:"leading-[1.375rem]",children:e("storageMiddlewares.table.paas.w3gateways")})]})]}),(0,l.jsxs)("div",{className:"w-[19.625rem] h-[23.5rem] border-l-2 border-black border-2 border-black bg-white rounded-r-xl md:mt-3 md:rounded-b-xl md:rounded-t-none md:pb-12",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center border-b-2 border-black pt-6 pb-5",children:[(0,l.jsx)("div",{className:"text-[1.75rem] font-medium",children:"SaaS"}),(0,l.jsx)("span",{className:"leading-[1.3125rem] mt-[.625rem]",children:e("storageMiddlewares.table.saas.text")})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center py-7 px-7",children:[(0,l.jsxs)("div",{className:"flex items-center text-4xl",children:[(0,l.jsx)("span",{className:"mr-2",children:"W3"}),(0,l.jsx)("img",{src:"/images/widget.svg",alt:""})]}),(0,l.jsx)("h6",{className:"text-[1.35rem] leading-5 font-medium leading-7 mt-8 mb-2 underline no-skip-ink",children:"Web3 Storage Widgets"}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p1")}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p2")}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p3")}),(0,l.jsx)("p",{className:"leading-[1.375rem] text-center",children:e("storageMiddlewares.table.saas.p4")})]})]})]})]}),(0,l.jsx)(i.z,{onClick:()=>window.open("https://cloud3.cc/","_blank"),className:"w-96 mt-16 md:max-w-[19.375rem] md:mt-8",text:e("storageMiddlewares.button")})]})}function d(){let{t:e}=(0,n.$G)("web3"),s=[{title:e("storageCases.list.item1.title"),text:e("storageCases.list.item1.text"),imgUrl:"/images/uniswap.svg"},{title:e("storageCases.list.item2.title"),text:e("storageCases.list.item2.text"),imgUrl:"/images/aave.svg"}];return(0,l.jsxs)("div",{className:"flex flex-col items-center bg-white",children:[(0,l.jsx)("h3",{className:"text-center my-16 px-12 md:my-8",children:e("storageCases.title")}),(0,l.jsx)("div",{className:"flex flex-col mt-10 md:mt-0",children:s.map((e,s)=>(0,l.jsxs)("div",{className:"mb-20 flex px-3 md:flex-col md:mb-10",children:[(0,l.jsx)("img",{className:"mx-auto w-[21.375rem] md:w-[17.125rem]",src:e.imgUrl,alt:""}),(0,l.jsxs)("div",{className:"w-[50.75rem] ml-12 md:w-full md:ml-0 md:text-center",children:[(0,l.jsx)("h5",{className:"md:px-12 md:mt-4",children:e.title}),(0,l.jsx)("p",{className:"mt-5",children:e.text})]})]},"data-".concat(s)))})]})}function x(){return(0,l.jsxs)(a.T,{children:[(0,l.jsx)(r,{}),(0,l.jsx)(m,{}),(0,l.jsx)(c,{}),(0,l.jsx)(d,{})]})}}},function(e){e.O(0,[455,222,195,774,888,179],function(){return e(e.s=7349)}),_N_E=e.O()}]);