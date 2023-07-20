"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{5300:function(e,n,t){t.d(n,{T:function(){return z}});var l=t(1527),s=t(4875),i=t.n(s),a=t(959),c=t(3517),r=t.n(c),m=t(3190),o=t(2239),d=t(367),h=t(7994),x=t(7191),f=t(8537);function u(){let{t:e}=(0,f.$G)("common");return(0,a.useEffect)(()=>{},[]),[{name:e("navigation.list.item3.children.child1.name"),id:1,typeName:"数字碳知识库"},{name:e("navigation.list.item3.children.child2.name"),id:2,typeName:"国内动态"},{name:e("navigation.list.item3.children.child3.name"),id:4,typeName:"国际/联合国"}]}let g=["/enstatement","/zhstatement"];function j(){let{t:e,i18n:n}=(0,f.$G)("common"),{pathname:t,push:s}=(0,m.useRouter)(),i=(0,a.useRef)(),[c,o]=(0,a.useState)(""),d=()=>{let e="en"===n.language?"zh":"en";n.changeLanguage(e),localStorage.setItem("lng",e),g.indexOf(t)>-1&&s("en"===e?"/enstatement":"zhstatement")},h=[{href:"/",isLink:!0,name:e("navigation.list.item1.name")},{href:"/solutions",isLink:!1,name:e("navigation.list.item2.name"),childrenNode:(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"flex justify-between mx-auto w-container",children:[(0,l.jsxs)("div",{className:"w-[28.125rem]",children:[(0,l.jsx)("h4",{className:"text-xl font-semibold",children:e("navigation.list.item2.name")}),(0,l.jsx)("p",{className:"mt-5",children:e("navigation.list.item2.desc")})]}),(0,l.jsxs)("div",{className:"w-[24.125rem] ml-[2.05rem]",children:[(0,l.jsx)("h4",{className:"text-xl font-semibold",children:(0,l.jsx)(f.cC,{i18nKey:"2",components:[(0,l.jsx)("sup",{},"dsd")],children:e("navigation.list.item2.children.child1.name")})}),(0,l.jsx)("p",{className:"mt-5 text-gray-1",onClick:()=>o(""),children:(0,l.jsx)(r(),{className:"link-hover",href:"/solutions/automotive",children:e("navigation.list.item2.children.child1.desc")})})]}),(0,l.jsxs)("div",{className:"ml-[2.05rem]",children:[(0,l.jsx)("h4",{className:"text-xl font-semibold",children:e("navigation.list.item2.children.more")}),(0,l.jsx)("p",{className:"mt-5 text-gray-1",onClick:()=>o(""),children:(0,l.jsx)(r(),{className:"link-hover",href:"/solutions/web3",children:e("navigation.list.item2.children.child2.name")})}),(0,l.jsx)("p",{className:"text-gray-1 mt-2.5",onClick:()=>o(""),children:(0,l.jsx)(r(),{className:"link-hover",href:"/solutions/governance",children:e("navigation.list.item2.children.child3.name")})})]})]})})},{href:"/news?cateId=1&typeName=数字碳知识库",isLink:!0,name:e("navigation.list.item3.name")},{href:"/contact",isLink:!0,name:e("navigation.list.item4.name")}];"en"===n.language&&h.splice(2,1);let x=e=>"/"===e?t===e:"/news"===t&&0===e.indexOf(t)||t.indexOf(e)>-1;return(0,l.jsxs)("div",{className:"text-xl flex md:hidden h-[4.6rem] items-center",ref:i,onMouseLeave:e=>{o("")},children:[h.map((e,n)=>(0,l.jsxs)("div",{className:"",children:[e.isLink?(0,l.jsx)(r(),{onMouseEnter:n=>{o(e.href)},className:"".concat(0===n?"":" ml-14"),href:e.href,children:(0,l.jsx)("span",{className:"inline-block cursor-pointer mt-[0.785rem] pb-2.5".concat(x(e.href)?"/"===t?" border-b-2 border-green-3":" border-b-2 border-green font-bold":""),children:e.name})},"nav-".concat(n)):(0,l.jsx)("span",{onMouseEnter:n=>{o(e.href)},className:"inline-block cursor-pointer mt-[0.785rem] pb-2.5".concat(x(e.href)?"/"===t?" border-b-2 border-green-3":" nav-active font-bold":"").concat(0===n?"":" ml-14"),children:e.name}),!!e.childrenNode&&c===e.href&&(0,l.jsx)("div",{className:"absolute shadow left-0 mt-[0.79rem] z-12 w-screen py-10 bg-white text-black text-lg border-t border-black",children:e.childrenNode})]},"navlist".concat(n))),(0,l.jsx)("span",{className:"ml-12 cursor-pointer",onClick:d,children:e("translation")})]})}function b(e){let{pathname:n}=(0,m.useRouter)(),{data:t=[],onClick:s}=e;return(0,l.jsx)("ul",{className:"mt-3 text-sm leading-8",children:t.map((e,t)=>(0,l.jsx)("li",{children:e.href?(0,l.jsx)(r(),{href:e.href,onClick:()=>s&&s(),className:i()("inline-block w-full",n===e.href?"text-green":""),children:e.name}):(0,l.jsx)("span",{className:"inline-block w-full",onClick:()=>e.onClick(),children:e.name})},"MobileSubNav-".concat(t)))})}function p(){let{t:e,i18n:n}=(0,f.$G)("common"),{pathname:t,push:s}=(0,m.useRouter)();u();let c=(0,a.useRef)(),[j,p]=(0,a.useState)([]),[v,N]=(0,o.Z)(!1),w=[{href:"/",name:e("navigation.list.item1.name")},{href:"/solutions",name:e("navigation.list.item2.name"),children:[{href:"/solutions/automotive",name:(0,l.jsx)(f.cC,{i18nKey:"2",components:[(0,l.jsx)("sup",{},"dsd")],children:e("navigation.list.item2.children.child1.name")})},{href:"/solutions/web3",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child3.name")}]},{href:"/news?cateId=1&typeName=数字碳知识库",name:e("navigation.list.item3.name")},{href:"/contact",name:e("navigation.list.item4.name")},{href:"language",name:e("translation_m"),children:[{name:"English",href:"",onClick:()=>{k("en"),N(!1)}},{name:"中文",href:"",onClick:()=>{k("zh"),N(!1)}}]}];"en"===n.language&&w.splice(2,1),(0,d.Z)(c,()=>v&&N(!1));let k=e=>{n.changeLanguage(e),g.indexOf(t)>-1&&s("en"===e?"/enstatement":"zhstatement")},y=(e,n)=>{e.stopPropagation();let t=[...j];if(n){let l=t.indexOf(n);-1===l?t.push(n):t.splice(l,1),p(t)}};return(0,l.jsxs)("div",{className:"hidden md:block",ref:c,children:[(0,l.jsx)(x.otZ,{className:i()("text-4xl","/"===t?"text-white":"text-green"),onClick:N}),v&&(0,l.jsx)("div",{className:"absolute right-0 w-screen px-5 py-4 text-black bg-white",children:w.map((e,n)=>{let s=e.children&&e.children.length;return(0,l.jsxs)("div",{className:i()("mt-4",0===n?"mt-3":""),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between text-base font-bold",children:[s?(0,l.jsx)("span",{onClick:n=>y(n,e.href),className:"inline-block; w-full",children:e.name}):(0,l.jsx)(r(),{onClick:()=>N(!1),className:i()("inline-block w-full",t===e.href?"text-green":""),href:e.href,children:e.name}),s&&(0,l.jsx)(h.kR5,{className:(null==j?void 0:j.indexOf(e.href))>-1?"rotate-180":""})]}),(null==j?void 0:j.indexOf(e.href))>-1&&(0,l.jsx)(b,{onClick:N,data:e.children})]},"MobileNav-".concat(n))})})]})}function v(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j,{}),(0,l.jsx)(p,{})]})}var N=t(2362);function w(e){let{onClose:n,className:t}=e,{t:s,i18n:c}=(0,f.$G)("common"),[r,m]=(0,a.useState)(!1),o=()=>{m(!1),n&&n(),localStorage.setItem("tips","enable")};return((0,a.useEffect)(()=>{let e=localStorage.getItem("tips");m(!e)},[]),r)?(0,l.jsxs)("div",{className:i()("sticky md:fixed bg-green flex items-center text-white justify-between text-base py-5 px-6 md:text-sm md:bottom-0 md:z-10 md:bg-white md:text-black md:h-[9.125rem] md:px-5 md:text-center md:w-full md:items-start",t),children:[(0,l.jsx)("div",{className:"flex items-center justify-center flex-1 h-full",children:(0,l.jsxs)("span",{className:"inline-block",children:[s("header.tips"),(0,l.jsx)("a",{href:"mailto:hi@gtech.world",className:"underline inline-block ml-1.5",children:" hi@gtech.world"}),"en"===c.language?".":"。"]})}),(0,l.jsx)(N.q5L,{onClick:o,className:"text-xl cursor-pointer"})]}):null}function k(e){let{sticky:n=!0,isTransparent:t,className:s}=(null==e?void 0:e.props)||{},{pathname:a}=(0,m.useRouter)();return(0,l.jsxs)("div",{className:i()(n?"sticky":"","w-full z-10 top-0",t?"bg-transparent":"bg-white",s),children:[(0,l.jsx)("div",{className:"md:hidden",children:(0,l.jsx)(w,{})}),(0,l.jsxs)("div",{className:"flex items-center justify-between mx-auto w-container md:w-full md:px-5",children:[(0,l.jsx)(r(),{href:"/",className:"",children:(0,l.jsx)("img",{className:i()("block md:w-16 py-4","/"===a?"w-[7.5rem]":"w-20"),alt:"",src:"/"===a?"/images/logo_light.svg":"/images/logo.svg"})}),(0,l.jsx)(v,{})]})]})}function y(e){let{className:n,data:t}=e;return(0,l.jsx)("ul",{className:i()("flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]",n),children:t.length&&t.map((e,n)=>e.render?e.render():e.href?(0,l.jsx)(r(),{href:e.href,className:"link-hover",children:e.name},"".concat(n)):(0,l.jsx)("span",{children:e.name}))})}function C(){let{t:e,i18n:n}=(0,f.$G)("common"),t=u(),s=[{href:"/solutions",name:e("navigation.list.item2.name"),children:[{href:"/solutions/automotive",name:(0,l.jsx)(f.cC,{i18nKey:"2",components:[(0,l.jsx)("sup",{},"dsd")],children:e("navigation.list.item2.children.child1.name")})},{href:"/solutions/web3",name:e("navigation.list.item2.children.child2.name")},{href:"/solutions/governance",name:e("navigation.list.item2.children.child3.name")}]},{href:"/news",name:e("navigation.list.item3.name"),children:t.map(e=>({href:"/news?cateId=".concat(e.id,"&typeName=").concat(e.typeName),name:e.name}))},{href:"/contact",name:e("navigation.list.item4.name"),children:[{name:"hi@gtech.world"},{name:"(+86)021-66271287"}]},{name:e("navigation.list.item4.children.qrSubtitle"),href:"",children:[{render:()=>(0,l.jsx)("img",{className:"w-[7.5rem] mt-2",src:"/images/wechat_qrcode.png",alt:""})}]}];return"en"===n.language&&s.splice(1,1),(0,l.jsx)("div",{className:"pb-5 bg-bgc md:px-8 md:py-12",children:(0,l.jsxs)("div",{className:"flex flex-col mx-auto w-container md:w-full",children:[(0,l.jsx)("div",{className:"flex flex-col mt-12 md:mt-0",children:(0,l.jsx)("div",{className:"flex flex-col justify-between",children:(0,l.jsxs)("ul",{className:"flex mt-5 md:flex-col",children:[(0,l.jsx)("li",{className:"mr-14 mt-[-1.3rem]",children:(0,l.jsx)(r(),{className:"md:float-left",href:"/",children:(0,l.jsx)("img",{className:"w-20",src:"/images/logo.svg",alt:""})})}),s.map((e,n)=>(0,l.jsxs)("li",{className:i()("md:mt-5",n===s.length-1?"mr-0":"mr-[3.75rem] md:mr-2"),children:[e.href&&!e.children?(0,l.jsx)(r(),{className:"text-xl font-bold link-hover md:text-xl",href:e.href,children:e.name}):(0,l.jsx)("span",{className:"text-xl font-bold md:text-xl",children:e.name}),e.children&&(0,l.jsx)(y,{data:e.children})]},"".concat(n)))]})})}),(0,l.jsxs)("div",{className:"flex justify-between pt-4 mt-16 text-sm border-t border-black md:flex-col md:mt-8",children:[(0,l.jsx)("div",{children:(0,l.jsx)("a",{rel:"noreferrer",href:"https://beian.miit.gov.cn/",target:"_blank",children:" 沪ICP备2022024704号-2"})}),(0,l.jsx)("span",{onClick:()=>window.open("zh"===n.language?"/zhstatement":"/enstatement","_blank"),className:"cursor-pointer md:mt-5 link-hover",children:e("footer.viewBtn")})]})]})})}function _(e){let{className:n}=e,{t,i18n:s}=(0,f.$G)("common"),c=localStorage.getItem("statement");console.log("statementstatement",c);let[r,m]=(0,a.useState)(!1),o=()=>{localStorage.setItem("statement","access"),m(!1)};return((0,a.useEffect)(()=>{m(!c)},[]),r)?(0,l.jsxs)("div",{className:i()("fixed bottom-0 left-0 z-10 h-20 w-full z-10 flex justify-center items-center bg-white text-sm shadow-[0_-3px_15px_0_rgba(0,0,0,0.1)] md:flex-col md:px-5 md:h-auto md:pb-5",n),children:[(0,l.jsx)("span",{className:"inline-block md:px-8 md:text-center md:pb-8 md:pt-12",children:t("footer.text")}),(0,l.jsx)("div",{onClick:o,className:"flex items-center justify-center px-4 ml-5 text-white bg-black border border-black rounded cursor-pointer h-11 md:w-full md:mb-4 md:ml-0",children:t("footer.acceptBtn")}),(0,l.jsx)("div",{onClick:()=>window.open("en"===s.language?"/enstatement":"/zhstatement","_blank"),className:"border border-black px-4 h-11 rounded ml-2.5 flex items-center justify-center cursor-pointer md:w-full md:ml-0",children:t("footer.viewBtn")}),(0,l.jsx)(N.q5L,{onClick:o,className:"absolute text-xl cursor-pointer right-8 md:top-4 md:right-5"})]}):null}function z(e){let{className:n,headerProps:t,hiddenFooter:s=!1,hiddenHeader:c=!1,children:r,...m}=e,[o,d]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=sessionStorage.getItem("tips");d(!e)},[]),(0,l.jsxs)("div",{className:"h-full w-full bg-white relative",children:[!c&&(0,l.jsx)(k,{props:t}),(0,l.jsx)("div",{className:i()("w-full mx-auto text-lg md:text-sm",n),...m,children:r}),!s&&(0,l.jsx)(C,{}),(0,l.jsx)(_,{className:i()("block",o?"md:hidden":"md:block")}),(0,l.jsx)(w,{className:"hidden md:flex md:shadow-[0_-3px_15px_0px_rgba(0,0,0,0.3)]",onClose:()=>d(!1)})]})}}}]);