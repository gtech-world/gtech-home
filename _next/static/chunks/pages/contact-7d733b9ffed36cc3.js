(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{4485:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return l(9388)}])},7420:function(e,n,l){"use strict";l.d(n,{T:function(){return N}});var s=l(1527),t=l(4875),a=l.n(t),i=l(959),r=l(3517),c=l.n(r),o=l(3190),h=l(367),d=l(2239),m=l(7994),u=l(7191),f=l(183);function x(e){let{t:n,i18n:l}=(0,f.$G)("common"),{data:t=[]}=e,{pathname:r}=(0,o.useRouter)(),d=(0,i.useRef)(),[u,x]=(0,i.useState)(""),g=()=>{l.changeLanguage("en"===l.language?"zh":"en")};return(0,h.Z)(d,()=>!!u&&x("")),(0,s.jsxs)("div",{className:"text-xl flex md:hidden",ref:d,children:[t.map((e,n)=>e.children&&e.children.length?(0,s.jsxs)("div",{className:"relative".concat(0===n?"":" ml-14"),children:[(0,s.jsxs)("div",{className:"cursor-pointer flex",onClick:()=>x(u?"":e.href),children:[(0,s.jsx)("span",{className:"pb-2.5".concat(/^\/solutions\/\w+/.test(r)?" border-b-2 border-green font-bold":""),children:e.name}),(0,s.jsx)(m.kR5,{className:a()("ml-2 mt-1",u?"rotate-180":"")})]}),u===e.href&&(0,s.jsx)("ul",{style:{whiteSpace:"nowrap"},className:"w-auto shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg",children:e.children.map((e,n)=>(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:e.href,className:a()(r===e.href?"text-green":""),children:e.name})},"nav-children-".concat(n)))})]},"nav-".concat(n)):(0,s.jsx)(c(),{className:"".concat(0===n?"":" ml-14"),href:e.href,children:(0,s.jsx)("span",{className:"pb-2.5".concat(e.href===r?" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(n))),(0,s.jsx)("span",{className:"cursor-pointer ml-12",onClick:g,children:n("translation")})]})}function g(e){let{pathname:n}=(0,o.useRouter)(),{data:l=[]}=e;return(0,s.jsx)("ul",{className:"text-sm mt-3 leading-8",children:l.map((e,l)=>(0,s.jsx)("li",{children:e.href?(0,s.jsx)(c(),{href:e.href,className:a()("inline-block w-full",n===e.href?"text-green":""),children:e.name}):(0,s.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(l)))})}function p(e){let{t:n,i18n:l}=(0,f.$G)("common"),{data:t=[]}=e,{pathname:r}=(0,o.useRouter)(),x=(0,i.useRef)(),[p,j]=(0,i.useState)([]),[b,N]=(0,d.Z)(!1),v=t.concat({href:"language",name:n("translation_m"),children:[{name:"English",href:"",onClick:()=>{w("en")}},{name:"中文",href:"",onClick:()=>{w("zh")}}]});(0,h.Z)(x,()=>b&&N(!1));let w=e=>{l.changeLanguage(e)},k=(e,n)=>{e.stopPropagation();let l=[...p];if(n){let s=l.indexOf(n);-1===s?l.push(n):l.splice(s,1),j(l)}};return(0,s.jsxs)("div",{className:"hidden md:block",ref:x,children:[(0,s.jsx)(u.otZ,{className:"text-green text-4xl",onClick:N}),b&&(0,s.jsx)("div",{className:"absolute right-0 bg-white w-screen px-5 py-4",children:v.map((e,n)=>{let l=e.children&&e.children.length;return(0,s.jsxs)("div",{className:a()("mt-4",0===n?"mt-3":""),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[l?(0,s.jsx)("span",{onClick:n=>k(n,e.href),className:"inline-block; w-full",children:e.name}):(0,s.jsx)(c(),{className:a()("inline-block w-full",r===e.href?"text-green":""),href:e.href,children:e.name}),l&&(0,s.jsx)(m.kR5,{className:(null==p?void 0:p.indexOf(e.href))>-1?"rotate-180":""})]}),(null==p?void 0:p.indexOf(e.href))>-1&&(0,s.jsx)(g,{data:e.children})]},"MobileNav-".concat(n))})})]})}function j(){let{t:e}=(0,f.$G)("common"),n=[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),isSelected:!1,children:[{href:"/solutions/web3",name:e("navigation.list.item2.children.child1.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/automotive",name:e("navigation.list.item2.children.child3.name")}]}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{data:n}),(0,s.jsx)(p,{data:n})]})}function b(e){let{sticky:n=!0,isTransparent:l,className:t}=(null==e?void 0:e.props)||{};return(0,s.jsxs)("div",{className:a()(n?"sticky":"","w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",l?"bg-transparent":"bg-white",t),children:[(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)("img",{className:"block w-16 h-11",alt:"",src:"/images/logo.svg"})}),(0,s.jsx)(j,{})]})}function N(e){let{className:n,headerProps:l,children:t,...i}=e;return(0,s.jsxs)("div",{className:"h-full w-full bg-slate-50",children:[(0,s.jsx)(b,{props:l}),(0,s.jsx)("div",{className:a()("w-full mx-auto text-lg md:text-sm",n),...i,children:t})]})}},9388:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return a}});var s=l(1527),t=l(7420);function a(){return(0,s.jsx)(t.T,{})}}},function(e){e.O(0,[455,222,195,774,888,179],function(){return e(e.s=4485)}),_N_E=e.O()}]);