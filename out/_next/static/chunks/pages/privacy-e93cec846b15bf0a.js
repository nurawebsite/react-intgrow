(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{3030:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return n(308)}])},1644:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var o=n(5893),r=n(2734),i=n(1664),s=n.n(i),a=n(3795);let l=()=>{let e=(0,r.Z)();return e.palette.primary.main,(0,o.jsx)(a.Z,{component:s(),href:"/",children:(0,o.jsx)("img",{src:"/assets/logos/main-logo.png",alt:"intgrow_logo"})})}},926:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var o=n(7294),r=n(261);let i=()=>(0,o.useContext)(r.Vo)},7148:function(e,t,n){"use strict";n.d(t,{t:function(){return _}});var o=n(5893),r=n(5697),i=n.n(r),s=n(4502),a=n(2823),l=n(9396),c=n(2643),d=n(8396),h=n(7357),u=n(6447),p=n(4674),x=n(3219),f=n(9661),g=n(5861),w=n(7294),y=n(9332),m=n(5724),j=n(7720),v=n(2096),b=n(3599),Z=n(926),k=n(2241);let C=e=>{let{anchorEl:t,onClose:n,open:r}=e,i=(0,y.useRouter)(),s=(0,Z.a)(),a=(0,w.useCallback)(()=>{null==n||n(),s.signOut(),i.push("/auth/login")},[n,s,i]);return(0,o.jsxs)(m.ZP,{anchorEl:t,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:n,open:r,PaperProps:{sx:{width:200}},children:[(0,o.jsx)(j.Z,{}),(0,o.jsx)(v.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,o.jsx)(b.Z,{onClick:a,children:"Sign out"})})]})};C.propTypes={anchorEl:i().any,onClose:i().func,open:i().bool.isRequired};var I=n(1644);let _=e=>{let{onNavOpen:t}=e,[n,r]=(0,w.useState)({hs_code:0,duty_calc:0}),i=(0,d.Z)(e=>e.breakpoints.up("lg")),y=function(){let e=(0,w.useRef)(null),[t,n]=(0,w.useState)(!1),o=(0,w.useCallback)(()=>{n(!0)},[]),r=(0,w.useCallback)(()=>{n(!1)},[]),i=(0,w.useCallback)(()=>{n(e=>!e)},[]);return{anchorRef:e,handleClose:r,handleOpen:o,handleToggle:i,open:t}}(),m=(0,Z.a)();async function j(){if(window.localStorage.getItem("authenticated")){let e=await m.getWalletPoints();if(e&&!e.ok){let t=await e.json(),n=Error(t.error||"An error occurred");throw n.status=e.status,n}let t=await e.json();window.localStorage.setItem("points",JSON.stringify(t.result)),r(t.result)}}return(0,w.useEffect)(()=>{j();let e=window.location.protocol+"//"+window.location.host;window.addEventListener("message",t=>{if(t.origin===e){let e=window.localStorage.getItem("points");r(JSON.parse(e))}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{component:"header",sx:{backdropFilter:"blur(6px)",background:"linear-gradient(-45deg, #0e588d, #274685)",position:"sticky",left:{lg:"".concat(230,"px")},top:0,zIndex:e=>e.zIndex.appBar},children:(0,o.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",sx:{minHeight:64,px:2},children:[(0,o.jsxs)(u.Z,{alignItems:"center",direction:"row",children:[!i&&(0,o.jsx)(p.Z,{onClick:t,children:(0,o.jsx)(x.Z,{fontSize:"small",children:(0,o.jsx)(s.Z,{})})}),(0,o.jsx)(I.T,{})]}),"true"==window.localStorage.getItem("authenticated")&&(0,o.jsxs)(u.Z,{alignItems:"center",direction:"row",sx:{marginRight:"40px",cursor:"pointer"},children:[(0,o.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[(0,o.jsx)(f.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,o.jsx)(x.Z,{fontSize:"small",children:(0,o.jsx)(l.Z,{})})}),(0,o.jsxs)(g.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:["HS Code Points: ",n.hs_code]})]}),(0,o.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[(0,o.jsx)(f.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,o.jsx)(x.Z,{fontSize:"small",children:(0,o.jsx)(c.Z,{})})}),(0,o.jsxs)(g.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:["Duty Calculation Points: ",n.duty_calc]})]}),(0,o.jsxs)(u.Z,{onClick:y.handleOpen,ref:y.anchorRef,direction:"row",alignItems:"center",children:[(0,o.jsx)(f.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,o.jsx)(x.Z,{fontSize:"small",children:(0,o.jsx)(a.Z,{})})}),(0,o.jsx)(g.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:(0,k.Ms)()})]})]})]})}),(0,o.jsx)(C,{anchorEl:y.anchorRef.current,open:y.open,onClose:y.handleClose})]})};_.propTypes={onNavOpen:i().func}},308:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(9008),i=n.n(r),s=n(9332),a=n(7357),l=n(6447),c=n(5861),d=n(926),h=n(7148),u=n(8223);let p=()=>((0,s.useRouter)(),(0,d.a)(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i(),{children:(0,o.jsx)("title",{children:"Privacy Policy | IntGrow Corp."})}),(0,o.jsx)(h.t,{onNavOpen:()=>setOpenNav(!0)}),(0,o.jsx)(a.Z,{sx:{backgroundColor:"background.paper",flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,o.jsx)(a.Z,{sx:{maxWidth:"100vw",px:3,py:"100px",width:"100%",background:"linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%), url(/assets/hero-banner.jpg)"},children:(0,o.jsxs)("div",{children:[(0,o.jsxs)(l.Z,{spacing:1,sx:{mb:3,alignItems:"center",justifyContent:"center",color:"#fff"},children:[(0,o.jsx)(c.Z,{variant:"h2",children:"Privacy Policy"}),(0,o.jsx)(c.Z,{variant:"subtitle2",children:"We take your privacy seriously."})]}),(0,o.jsx)(l.Z,{sx:{position:"absolute",left:0,width:"100%"},children:(0,o.jsx)("svg",{width:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:(0,o.jsx)("g",{id:"Apple-TV",transform:"translate(0.000000, -402.000000)",fill:"#FFFFFF",children:(0,o.jsx)("path",{d:"M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z",id:"Path"})})})})})]})})}),(0,o.jsx)("div",{children:(0,o.jsxs)(l.Z,{sx:{margin:"30px auto",width:"90vw",textAlign:"justify",color:"neutral.400"},children:[(0,o.jsxs)("p",{children:["Your privacy is important to us. It is Intgrow's policy to respect your privacy regarding any information we may collect from you across our website, ",(0,o.jsx)("a",{href:"#",children:"https://intgrow.co/"}),", and other sites we own and operate."]}),(0,o.jsx)("p",{children:"We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used."}),(0,o.jsx)("p",{children:"We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification."}),(0,o.jsx)("p",{children:"We don't share any personally identifying information publicly or with third-parties, except when required to by law."}),(0,o.jsx)("p",{children:"Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies."}),(0,o.jsx)("p",{children:"You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."}),(0,o.jsx)("p",{children:"As is common practice with almost all professional websites this site uses cookies, which are small files that are downloaded to your computer to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies."}),(0,o.jsx)("p",{children:"If you create an account with us then we will use cookies for the management of the signupprocess and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out."}),(0,o.jsx)("p",{children:"We use cookies when you are logged in. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in."}),(0,o.jsx)("p",{children:"This site uses Google Analytics which for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to enhance our user experience."}),(0,o.jsx)("p",{children:"This policy is effective as of 10 August 2021."})]})}),(0,o.jsx)(u.$,{})]}));p.getLayout=e=>(0,o.jsx)("div",{children:e}),t.default=p},8223:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var o=n(5893),r=n(7294),i=n(6447),s=n(5582),a=n(5861),l=n(3795),c=n(3321),d=n(7357),h=n(1664);let u=()=>((0,r.useEffect)(()=>{var e=document.getElementById("footer");e&&(e.width=e.contentWindow.document.body.scrollWidth,e.height=e.contentWindow.document.body.scrollHeight)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{direction:"row",sx:{p:"32px 0",m:"36px 0 0",background:"linear-gradient(to right, rgb(39, 70, 133) 0%, rgb(61, 179, 197) 100%)"},children:(0,o.jsx)(s.Z,{maxWidth:"100%",children:(0,o.jsxs)(i.Z,{direction:"row",sx:{textAlign:"center",alignItems:"center",position:"relative"},children:[(0,o.jsxs)(i.Z,{sx:{textAlign:"left",marginLeft:"10%"},children:[(0,o.jsx)(a.Z,{variant:"h2",color:"#fff",children:"Subscribe for your free account"}),(0,o.jsx)(a.Z,{variant:"body2",color:"#fff",sx:{mt:2},children:"Get access to free calculations and HS code lookups. No credit card needed."})]}),(0,o.jsx)(i.Z,{sx:{textAlign:"right",position:"absolute",right:"10%"},children:(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{component:h.NextLink,href:"/auth/register",children:(0,o.jsx)(c.Z,{sx:{backgroundColor:"#000",color:"#fff"},variant:"contained",children:"Register Now"})})})})]})})}),(0,o.jsx)(d.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,o.jsx)("iframe",{id:"footer",src:"/footer.html",width:"100%",height:"100%",style:{border:"none",maxHeight:"400px",height:"75vh"},"data-tf-redirect-target":"_self"})})]}))}},function(e){e.O(0,[94,658,462,774,888,179],function(){return e(e.s=3030)}),_N_E=e.O()}]);