(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4182:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2759)}])},1854:function(e,t,s){"use strict";s.d(t,{z:function(){return r}});var a=s(1527);s(959);var n=s(4875),i=s.n(n);function r(e){let{text:t,className:s,onClick:n}=e;return(0,a.jsx)("div",{onClick:()=>n&&n(),className:i()("inline-block bg-green text-white text-lg py-2.5 px-8 rounded-lg cursor-pointer text-center",s),children:t})}},7420:function(e,t,s){"use strict";s.d(t,{T:function(){return v}});var a=s(1527),n=s(4875),i=s.n(n),r=s(959),l=s(3517),c=s.n(l),o=s(3190),m=s(367),d=s(2239),u=s(7994),h=s(7191);function x(e){let{data:t=[]}=e,{pathname:s}=(0,o.useRouter)(),n=(0,r.useRef)(),[l,d]=(0,r.useState)("");return(0,m.Z)(n,()=>!!l&&d("")),(0,a.jsx)("div",{className:"text-xl flex md:hidden",children:t.map((e,t)=>e.children&&e.children.length?(0,a.jsxs)("div",{ref:n,className:"cursor-pointer flex relative".concat(0===t?"":" ml-14"),onClick:()=>d(l?"":e.href),children:[(0,a.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(s)?" border-b-2 border-green font-bold":""),children:e.name}),(0,a.jsx)(u.kR5,{className:i()("ml-2 mt-1",l?"rotate-180":"")}),l===e.href&&(0,a.jsx)("ul",{className:"w-[15.375rem] shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(c(),{href:e.href,className:i()(s===e.href?"text-green":""),children:e.name})},"nav-children-".concat(t)))})]},"nav-".concat(t)):(0,a.jsx)(c(),{className:"".concat(0===t?"":" ml-14"),href:e.href,children:(0,a.jsx)("span",{className:"pb-2.5".concat(e.href===s?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(t)))})}function f(e){let{pathname:t}=(0,o.useRouter)(),{data:s=[]}=e;return(0,a.jsx)("ul",{className:"text-sm mt-3 leading-8",children:s.map((e,s)=>(0,a.jsx)("li",{children:(0,a.jsx)(c(),{href:e.href,className:i()("inline-block w-full",t===e.href?"text-green":""),children:e.name})},"MobileSubNav-".concat(s)))})}function g(e){let{data:t=[]}=e,{pathname:s}=(0,o.useRouter)(),[n,l]=(0,r.useState)("/"===s?"":s),x=(0,r.useRef)(),[g,p]=(0,d.Z)(!1);return(0,m.Z)(x,()=>g&&p(!1)),(0,a.jsxs)("div",{className:"hidden md:block",ref:x,children:[(0,a.jsx)(h.otZ,{className:"text-green text-4xl",onClick:p}),g&&(0,a.jsx)("div",{className:"absolute right-0 bg-white w-screen px-5 py-4",children:t.map((e,t)=>{let r=e.children&&e.children.length;return(0,a.jsxs)("div",{className:i()("mt-4",0===t?"mt-3":""),onClick:()=>l(n?"":e.href),children:[(0,a.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[r?(0,a.jsx)("span",{children:e.name}):(0,a.jsx)(c(),{className:i()("inline-block w-full",s===e.href?"text-green":""),href:e.href,children:e.name}),r&&(0,a.jsx)(u.kR5,{className:n?"rotate-180":""})]}),n.indexOf(e.href)>-1&&(0,a.jsx)(f,{data:e.children})]},"MobileNav-".concat(t))})})]})}function p(){let e=[{href:"/",name:"HOME"},{href:"/solutions",name:"SOLUTIONS",children:[{href:"/solutions/web3",name:"Web3-Featured Data Solutions"},{href:"/solutions/governance",name:"Data Governance & BI Solutios"},{href:"/solutions/automotive",name:"Automotive BI & Data Solutions"}]},{href:"/contact",name:"CONTACT"}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{data:e}),(0,a.jsx)(g,{data:e})]})}function b(e){let{sticky:t=!0,isTransparent:s,className:n}=(null==e?void 0:e.props)||{};return console.log(null==e?void 0:e.props),(0,a.jsxs)("div",{className:i()(t?"sticky":"","w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",s?"bg-transparent":"bg-white",n),children:[(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)("img",{className:"block w-16",alt:"",src:"/images/logo.svg"})}),(0,a.jsx)(p,{})]})}function v(e){let{className:t,headerProps:s,children:n,...r}=e;return(0,a.jsxs)("div",{className:"h-full w-full bg-slate-50",children:[(0,a.jsx)(b,{props:s}),(0,a.jsx)("div",{className:i()("w-full mx-auto text-lg md:text-sm",t),...r,children:n})]})}},2759:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(1527),n=s(7420),i=s(1854),r=s(4875),l=s.n(r),c=s(3190);function o(){return(0,a.jsxs)("div",{className:"w-full bg-[url(/images/home_banner.png)] bg-no-repeat bg-center bg-cover flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center font-bold text-[4rem] leading-normal text-center md:text-[1.75rem]",children:[(0,a.jsx)("span",{className:"text-green mt-64 md:mt-36",children:"Trust, Transparency, Traceability."}),(0,a.jsx)("span",{className:"",children:"The Data-driven Future is Now."})]}),(0,a.jsx)("div",{className:"max-w-[34rem] px-3 text-lg text-center mt-[14.375rem] mb-5 md:text-sm md:mt-[8.375rem] md:mb-9",children:"Learn more about GTech and how we solve complex challenges cross-industry with cutting-edge data technologies"}),(0,a.jsx)("img",{alt:"",className:"pb-3 md:hidden",src:"images/home_head_arrow.svg"})]})}function m(){return(0,a.jsxs)("div",{className:"w-full bg-green flex flex-col items-center pt-16 pb-16 md:pt-8 md:pb-4",children:[(0,a.jsxs)("h3",{className:"text-white text-center",children:[(0,a.jsx)("span",{className:"text-yellow",children:"'Greener'"})," Data Technologies"]}),(0,a.jsx)("div",{className:"text-white max-w-[59.75rem] px-3 text-center mt-5",children:"GTech is a leading provider of cross-boundary, consolidated decentralized data solutions empowered by Web3.0 technologies. GTech’s ultimate mission is helping its customers to deliever more ‘trusted’ data to their users. "}),(0,a.jsx)("ul",{className:"w-container flex text-center justify-between mt-24 md:flex-col md:mt-16",children:[{title:"Perserverance & Immutability",text:"Our solution guarantees long-term data existence, validity and tamper-proofness based on Web3 technologies, which is crucial to many business use scenarios.",image:"images/solution.svg"},{title:"Programmable Data Privacy",text:"Structured, customizble data access and visibility solution ensures great data privacy under different authorization level according to business demands.",image:"images/eyes.svg"},{title:"Industry-specific Traceability",text:"GTech provides its customers from various industry sections with specified solutions to meet their special needs, i.e. a traceability framework for multi-tiered supply chain.",image:"images/traceability.svg"}].map((e,t)=>(0,a.jsxs)("li",{className:"flex flex-col items-center pb-12",children:[(0,a.jsx)("img",{className:"h-[8rem] md:h-[6.125rem]",src:e.image,alt:""}),(0,a.jsx)("h5",{className:"text-yellow mt-7 mb-5 md:text-base",children:e.title}),(0,a.jsx)("p",{className:"w-[19.375rem] text-sm text-white",children:e.text})]},"technologies".concat(t)))})]})}function d(){let e=(0,c.useRouter)();return(0,a.jsxs)("div",{className:"flex flex-col items-center pb-32 mt-16 md:mt-8 md:pb-12",children:[(0,a.jsx)("h3",{className:"",children:"Cross-boundary Solutions"}),(0,a.jsx)("p",{className:"text-center mt-5 max-w-[56.25rem] md:px-3",children:"Learn about how GTech helps enterprises, organizations and public sectors to manage complex challenges and risks in data processing, data storage, data traceability and data visibility within diverse scopes."}),(0,a.jsx)("div",{className:"w-container md:w-full md:px-3",children:[{url:"/solutions/web3",layout:"left",imgUrl:"images/map.png",title:"Web3-Featured Organizational Data Solutions",text:"GTech provides organizational-level users with data management solutions with regard to key web3 features, i.e. decentralization, data immutability, transparency and counter-SPoF. Such solution cover from the sourcing and maintenance of the data content to the regular management, storage and retrieval of the data content."},{url:"/solutions/governance",layout:"right",imgUrl:"images/governance_banner.png",title:"Data Governance & BI Solutions",text:"Gtech’s Data Goverance & BI solutions focus on the developement of data strategy, the development of policies concerning the top-level design of information structures and taxonomies and the development of the data analytics system for corporates and regional industry alliances."},{url:"/solutions/automotive",layout:"left",imgUrl:"images/automotive_banner.png",title:"Industry-specific BI & Data Solutions",text:"Many industrial sections, despite producing widely different products or services, are facing similar data challenges such as data credibility, data traceability and data abuse. GTech shows professionalities and insights into customizing industry-specific BI & data management solutions to meet urgent demands from cross-industries. "}].map((t,s)=>(0,a.jsxs)("div",{className:l()("mt-20 flex justify-between md:mt-12","left"===t.layout?"":"flex-row-reverse","md:flex-col"),children:[(0,a.jsx)("div",{className:"md:mx-auto",children:(0,a.jsx)("img",{className:"block w-[35rem] rounded-lg overflow-hidden md:max-w-full",src:t.imgUrl,alt:""})}),(0,a.jsxs)("div",{className:"w-[35rem] md:w-full md:text-center md:mt-8",children:[(0,a.jsx)("h5",{className:"md:px-12",children:t.title}),(0,a.jsx)("p",{className:l()("mt-5","left"===t.layout?"w-[36.5rem] md:w-full":""),children:t.text}),(0,a.jsx)(i.z,{onClick:()=>e.push(t.url),className:"mt-8 w-[19.25rem]",text:"Learn More & View Use Case"})]})]},"data-".concat(s)))})]})}function u(){return(0,a.jsxs)(n.T,{headerProps:{sticky:!1,isTransparent:!0,className:"absolute"},className:"relative",children:[(0,a.jsx)(o,{}),(0,a.jsx)(m,{}),(0,a.jsx)(d,{})]})}}},function(e){e.O(0,[455,222,195,774,888,179],function(){return e(e.s=4182)}),_N_E=e.O()}]);