(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{6148:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slugs]",function(){return s(2984)}])},2519:(e,t,s)=>{"use strict";s.d(t,{i$:()=>r});var n=s(722);function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",s={"y{4,}":e.getFullYear(),"M{2,}":e.getMonth()+1,"d{2,}":e.getDay(),"h{2,}":e.getHours(),"m{2,}":e.getMinutes(),"s{2,}":e.getSeconds()};for(let e in s){let r=RegExp("("+e+")");if(r.test(t)){let i=s[e],l=(0,n.getNumberDigits)(i),a=t.match(r);if(!a)return"";let c=a[0],o=(0,n.repeat)("0",c.length-l)+i;t=t.replace(c,o)}}return t}},2984:(e,t,s)=>{"use strict";s.r(t),s.d(t,{__N_SSG:()=>b,default:()=>A});var n=s(4848),r=s(6715),i=s(5218),l=s.n(i),a=s(1580),c=s(3368),o=s.n(c),x=s(5127),d=s(9741),u=s(1106),m=s.n(u),h=s(6210),f=s(6767);function j(e){return(0,n.jsx)(f.A,{fill:"none",viewSize:"24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-star",...e,children:(0,n.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}function p(e){return(0,n.jsxs)(f.A,{fill:"none",viewSize:"24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-share",...e,children:[(0,n.jsx)("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),(0,n.jsx)("polyline",{points:"16 6 12 2 8 6"}),(0,n.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]})}var v=s(6540),N=s(2519),k=s(2002);function g(e){let{post:t}=e,s=(0,r.useRouter)(),i=[{icon:t.star?(0,n.jsx)(k.A,{stroke:"#000000",size:(0,h.fW)(24)}):(0,n.jsx)(j,{size:(0,h.fW)(24)}),onClick(){}},{icon:(0,n.jsx)(p,{size:(0,h.fW)(24)}),onClick(){let e=window.location.href;navigator.clipboard.writeText(e)}}],l=40*i.length,[a,c]=(0,v.useState)("");return(0,v.useEffect)(()=>{(0,h.uY)(t.content).then(c)},[]),(0,n.jsxs)("div",{className:"flex justify-left mb-3 min-h-[70vh]",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex-1 mr-2",children:[(0,n.jsx)(x.A,{className:"m-2 mt-0",onClick:s.back}),(0,n.jsx)(d.A,{className:(0,h.xW)("w-10 m-2 pt-1 pb-1","h-[".concat(l,"px]")),children:i.map((e,t)=>(0,n.jsx)("div",{className:"flex justify-center m-2.5",onClick:e.onClick,children:e.icon},t))})]})}),(0,n.jsx)("div",{className:"mx-2 w-full",children:(0,n.jsxs)(d.A,{className:"max-w-3xl m-auto",children:[(0,n.jsxs)("div",{className:"px-7 py-5 my-2 text-left m-auto",children:[(0,n.jsx)("h1",{className:"text-xl font-bold font-serif",children:t.title}),t.excerpt&&(0,n.jsx)("p",{className:"mt-2 text-md",children:t.excerpt}),t.tags&&(0,n.jsx)("p",{className:"mt-1 text-md text-sky-500 flex flex-wrap",children:t.tags.map((e,t)=>(0,n.jsx)(m(),{className:"mr-2",href:e.href,children:"#".concat(e.title)},t))}),(0,n.jsx)("time",{className:"flex mt-2 text-gray-700",children:(0,N.i$)(new Date(t.date))}),t.cover&&(0,n.jsx)("div",{className:"m-auto p-5 max-w-[40rem]",children:(0,n.jsx)("img",{src:t.cover})})]}),(0,n.jsx)("article",{className:"m-2 p-3 px-5 pb-7",children:(0,n.jsx)("div",{className:"my-2 m-auto px-5 text-justify markdown-body",dangerouslySetInnerHTML:{__html:a}})})]})})]})}function y(e){let{post:t}=e,s=(0,r.useRouter)();return s.isFallback||(null==t?void 0:t.slugs)?(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:t.title})}),s.isFallback?(0,n.jsx)("div",{children:"Loading…"}):(0,n.jsx)("div",{className:"m-auto",children:(0,n.jsx)(g,{post:t})})]}):(0,n.jsx)(l(),{statusCode:404})}var w=s(4830),_=s(2224),b=!0;function A(e){let{post:t,layout:s}=e,r=_.Z.toPost(t),i=_.Z.toLayoutData(s);return(0,n.jsx)(w.A,{...i,children:(0,n.jsx)(y,{post:r})})}},5127:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var n=s(4848);s(6540);var r=s(5833),i=s(9363);function l(e){return(0,n.jsx)(r.A,{...e,children:(0,n.jsx)(i.A,{size:"24"})})}},5218:(e,t,s)=>{e.exports=s(3709)}},e=>{var t=t=>e(e.s=t);e.O(0,[305,28,254,636,593,792],()=>t(6148)),_N_E=e.O()}]);