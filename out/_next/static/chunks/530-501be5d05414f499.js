"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{1644:function(e,t,n){n.d(t,{T:function(){return a}});var r=n(5893),o=n(2734),l=n(1664),i=n.n(l),s=n(3795);let a=()=>{let e=(0,o.Z)();return e.palette.primary.main,(0,r.jsx)(s.Z,{component:i(),href:"/",children:(0,r.jsx)("img",{src:"/assets/logos/main-logo.png",alt:"intgrow_logo"})})}},734:function(e,t,n){n.d(t,{L:function(){return s}});var r=n(2729),o=n(4096),l=n(948);function i(){let e=(0,r._)([""]);return i=function(){return e},e}let s=(0,l.ZP)(o.Z)(i())},926:function(e,t,n){n.d(t,{a:function(){return l}});var r=n(7294),o=n(261);let l=()=>(0,r.useContext)(o.Vo)},7495:function(e,t,n){n.d(t,{ev:function(){return p},mb:function(){return f}});var r=n(5893),o=n(8964),l=n(9047),i=n(6223),s=n(472),a=n(9396),c=n(2643),d=n(3922),u=n(1427),h=n(4186),x=n(3219);let p=[{title:"Dashboard",path:"/",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(i.Z,{})})},{title:"HS Code Finder",path:"/hscodefinder",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(a.Z,{})})},{title:"Duty Calculator",path:"/dutycalculator",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(c.Z,{})})},{title:"Duty Saver Pro",path:"/dutysaver",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(s.Z,{})})},{title:"Profile Settings",path:"/settings",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(o.Z,{})})},{title:"HSN History",path:"/hsn-history",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(u.Z,{})})},{title:"Import Duty History",path:"/dutycalc-history",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(c.Z,{})})},{title:"Duty Saver History",path:"/fta-history",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(h.Z,{})})},{title:"Home",path:"/home",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(l.Z,{})})}],f=[{title:"HS Code Finder",value:"used_hscode",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(a.Z,{})})},{title:"Duty Calculator",value:"used_duty",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(c.Z,{})})},{title:"Duty Saver Pro",value:"used_fta",icon:(0,r.jsx)(x.Z,{fontSize:"small",children:(0,r.jsx)(d.Z,{})})}]},5530:function(e,t,n){n.d(t,{A:function(){return z}});var r,o=n(5893),l=n(7294),i=n(9332),s=n(948),a=n(1163),c=n(5697),d=n.n(c),u=n(261);let h=e=>{let{children:t}=e,n=(0,a.useRouter)(),r=(0,l.useRef)(!1),[o,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{if(!n.isReady||r.current)return;r.current=!0;let e=window.localStorage.getItem("access_token"),t=!(0,u.pw)(e),o=(0,u.pw)(e);!t&&o?(window.localStorage.removeItem("authenticated"),window.localStorage.removeItem("access_token"),window.localStorage.removeItem("points"),console.log("Not authenticated, redirecting"),n.replace({pathname:"/auth/login",query:"/"!==n.asPath?{continueUrl:n.asPath}:void 0}).catch(console.error)):i(!0)},[n.isReady]),o)?t:null};h.propTypes={children:d().node};var x=n(1664),p=n.n(x),f=n(8396),m=n(7357),j=n(6447),g=n(7720),Z=n(7533);n(1644);var y=n(734),w=n(7495),b=n(6747);let v=e=>{let{active:t=!1,disabled:n,external:r,icon:l,path:i,title:s}=e,a=i?r?{component:"a",href:i,target:"_blank"}:{component:p(),href:i}:{};return(0,o.jsx)("li",{children:(0,o.jsxs)(b.Z,{sx:{alignItems:"center",borderRadius:1,display:"flex",justifyContent:"flex-start",pl:"16px",pr:"16px",py:"16px",textAlign:"left",width:"100%",...t&&{backgroundColor:"rgba(255, 255, 255, 0.04)"},"&:hover":{backgroundColor:"rgba(255, 255, 255, 0.04)"}},...a,children:[l&&(0,o.jsx)(m.Z,{component:"span",sx:{alignItems:"center",color:"neutral.400",display:"inline-flex",justifyContent:"center",mr:2,...t&&{color:"primary.main"}},children:l}),(0,o.jsx)(m.Z,{component:"span",sx:{color:"common.white",flexGrow:1,fontFamily:e=>e.typography.fontFamily,fontSize:14,fontWeight:600,lineHeight:"normal",whiteSpace:"nowrap",...t&&{color:"common.white"},...n&&{color:"neutral.500"}},children:s})]})})};v.propTypes={active:d().bool,disabled:d().bool,external:d().bool,icon:d().node,path:d().string,title:d().string.isRequired};let S=e=>{let{open:t,onClose:n}=e,r=(0,i.usePathname)(),l=(0,f.Z)(e=>e.breakpoints.up("lg")),s=(0,o.jsx)(y.L,{sx:{height:"100%","& .simplebar-content":{height:"100%"},"& .simplebar-scrollbar:before":{background:"neutral.400"}},children:(0,o.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,o.jsx)(m.Z,{component:"nav",sx:{flexGrow:1,px:2,py:3},children:(0,o.jsx)(j.Z,{component:"ul",spacing:.5,sx:{listStyle:"none",p:0,m:0},children:w.ev.map(e=>{let t=!!e.path&&r===e.path,n=e.path.startsWith("/")?e.path:"https://".concat(e.path);return(0,o.jsx)(v,{active:t,disabled:e.disabled,external:e.external,icon:e.icon,path:n,title:e.title},e.title)})})}),(0,o.jsx)(g.Z,{sx:{borderColor:"neutral.700"}})]})});return l?(0,o.jsx)(Z.ZP,{anchor:"left",open:!0,PaperProps:{sx:{background:"linear-gradient(0deg, #1391a5, #274685)",color:"common.white",width:240,top:81,border:"none"}},variant:"permanent",children:s}):(0,o.jsx)(Z.ZP,{anchor:"left",onClose:n,open:t,PaperProps:{sx:{backgroundColor:"neutral.800",color:"common.white",width:240}},sx:{zIndex:e=>e.zIndex.appBar+100},variant:"temporary",children:s})};S.propTypes={onClose:d().func,open:d().bool};var C=n(7148);let k=(0,s.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",flex:"1 1 auto",maxWidth:"100%",[t.breakpoints.up("lg")]:{paddingLeft:240}}}),P=(0,s.ZP)("div")({display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%"}),z=(r=e=>{let{children:t}=e,n=(0,i.usePathname)(),[r,s]=(0,l.useState)(!1),a=(0,l.useCallback)(()=>{r&&s(!1)},[r]);return(0,l.useEffect)(()=>{a()},[n]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.t,{onNavOpen:()=>s(!0)}),(0,o.jsx)(S,{onClose:()=>s(!1),open:r}),(0,o.jsx)(k,{children:(0,o.jsx)(P,{children:t})})]})},e=>(0,o.jsx)(h,{children:(0,o.jsx)(r,{...e})}))},7148:function(e,t,n){n.d(t,{t:function(){return P}});var r=n(5893),o=n(5697),l=n.n(o),i=n(4502),s=n(2823),a=n(9396),c=n(2643),d=n(8396),u=n(7357),h=n(6447),x=n(4674),p=n(3219),f=n(9661),m=n(5861),j=n(7294),g=n(9332),Z=n(5724),y=n(7720),w=n(2096),b=n(3599),v=n(926),S=n(2241);let C=e=>{let{anchorEl:t,onClose:n,open:o}=e,l=(0,g.useRouter)(),i=(0,v.a)(),s=(0,j.useCallback)(()=>{null==n||n(),i.signOut(),l.push("/auth/login")},[n,i,l]);return(0,r.jsxs)(Z.ZP,{anchorEl:t,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:n,open:o,PaperProps:{sx:{width:200}},children:[(0,r.jsx)(y.Z,{}),(0,r.jsx)(w.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,r.jsx)(b.Z,{onClick:s,children:"Sign out"})})]})};C.propTypes={anchorEl:l().any,onClose:l().func,open:l().bool.isRequired};var k=n(1644);let P=e=>{let{onNavOpen:t}=e,[n,o]=(0,j.useState)({hs_code:0,duty_calc:0}),l=(0,d.Z)(e=>e.breakpoints.up("lg")),g=function(){let e=(0,j.useRef)(null),[t,n]=(0,j.useState)(!1),r=(0,j.useCallback)(()=>{n(!0)},[]),o=(0,j.useCallback)(()=>{n(!1)},[]),l=(0,j.useCallback)(()=>{n(e=>!e)},[]);return{anchorRef:e,handleClose:o,handleOpen:r,handleToggle:l,open:t}}(),Z=(0,v.a)();async function y(){if(window.localStorage.getItem("authenticated")){let e=await Z.getWalletPoints();if(e&&!e.ok){let t=await e.json(),n=Error(t.error||"An error occurred");throw n.status=e.status,n}let t=await e.json();window.localStorage.setItem("points",JSON.stringify(t.result)),o(t.result)}}return(0,j.useEffect)(()=>{y()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{component:"header",sx:{backdropFilter:"blur(6px)",background:"linear-gradient(-45deg, #0e588d, #274685)",position:"sticky",left:{lg:"".concat(240,"px")},top:0,zIndex:e=>e.zIndex.appBar},children:(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",sx:{minHeight:64,px:2},children:[(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",children:[!l&&(0,r.jsx)(x.Z,{onClick:t,children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(i.Z,{})})}),(0,r.jsx)(k.T,{})]}),"true"==window.localStorage.getItem("authenticated")&&(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",sx:{marginRight:"40px",cursor:"pointer"},children:[(0,r.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(f.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(a.Z,{})})}),(0,r.jsxs)(m.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:["HS Code Points: ",n.hs_code]})]}),(0,r.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(f.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(c.Z,{})})}),(0,r.jsxs)(m.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:["Duty Calculation Points: ",n.duty_calc]})]}),(0,r.jsxs)(h.Z,{onClick:g.handleOpen,ref:g.anchorRef,direction:"row",alignItems:"center",children:[(0,r.jsx)(f.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(s.Z,{})})}),(0,r.jsx)(m.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:(0,S.Ms)()})]})]})]})}),(0,r.jsx)(C,{anchorEl:g.anchorRef.current,open:g.open,onClose:g.handleClose})]})};P.propTypes={onNavOpen:l().func}}}]);