(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{3829:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return n(5166)}])},1644:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(5893),s=n(2734),o=n(1664),i=n.n(o),a=n(3795);let l=()=>{let e=(0,s.Z)();return e.palette.primary.main,(0,r.jsx)(a.Z,{component:i(),href:"/",children:(0,r.jsx)("img",{src:"/assets/logos/main-logo.png",alt:"intgrow_logo"})})}},926:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(7294),s=n(261);let o=()=>(0,r.useContext)(s.Vo)},7148:function(e,t,n){"use strict";n.d(t,{t:function(){return _}});var r=n(5893),s=n(5697),o=n.n(s),i=n(4502),a=n(2823),l=n(9396),c=n(2643),u=n(8396),d=n(7357),h=n(6447),x=n(4674),p=n(3219),m=n(9661),f=n(5861),g=n(7294),j=n(9332),Z=n(5724),b=n(7720),w=n(2096),v=n(3599),y=n(926),C=n(2241);let S=e=>{let{anchorEl:t,onClose:n,open:s}=e,o=(0,j.useRouter)(),i=(0,y.a)(),a=(0,g.useCallback)(()=>{null==n||n(),i.signOut(),o.push("/auth/login")},[n,i,o]);return(0,r.jsxs)(Z.ZP,{anchorEl:t,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:n,open:s,PaperProps:{sx:{width:200}},children:[(0,r.jsx)(b.Z,{}),(0,r.jsx)(w.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,r.jsx)(v.Z,{onClick:a,children:"Sign out"})})]})};S.propTypes={anchorEl:o().any,onClose:o().func,open:o().bool.isRequired};var k=n(1644);let _=e=>{let{onNavOpen:t}=e,[n,s]=(0,g.useState)({hs_code:0,duty_calc:0}),o=(0,u.Z)(e=>e.breakpoints.up("lg")),j=function(){let e=(0,g.useRef)(null),[t,n]=(0,g.useState)(!1),r=(0,g.useCallback)(()=>{n(!0)},[]),s=(0,g.useCallback)(()=>{n(!1)},[]),o=(0,g.useCallback)(()=>{n(e=>!e)},[]);return{anchorRef:e,handleClose:s,handleOpen:r,handleToggle:o,open:t}}(),Z=(0,y.a)();return(0,g.useEffect)(()=>{(async function(){if(window.localStorage.getItem("authenticated")){let e=await Z.getWalletPoints();if(e&&!e.ok){let t=await e.json(),n=Error(t.error||"An error occurred");throw n.status=e.status,n}let t=await e.json();s(t.result)}})()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{component:"header",sx:{backdropFilter:"blur(6px)",background:"linear-gradient(-45deg, #0e588d, #274685)",position:"sticky",left:{lg:"".concat(240,"px")},top:0,zIndex:e=>e.zIndex.appBar},children:(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",sx:{minHeight:64,px:2},children:[(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",children:[!o&&(0,r.jsx)(x.Z,{onClick:t,children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(i.Z,{})})}),(0,r.jsx)(k.T,{})]}),"true"==window.localStorage.getItem("authenticated")&&(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",sx:{marginRight:"40px",cursor:"pointer"},children:[(0,r.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(m.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(l.Z,{})})}),(0,r.jsxs)(f.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:["HS Code Points: ",n.hs_code]})]}),(0,r.jsxs)(h.Z,{direction:"row",alignItems:"center",children:[(0,r.jsx)(m.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(c.Z,{})})}),(0,r.jsxs)(f.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:["Duty Calculation Points: ",n.duty_calc]})]}),(0,r.jsxs)(h.Z,{onClick:j.handleOpen,ref:j.anchorRef,direction:"row",alignItems:"center",children:[(0,r.jsx)(m.Z,{sx:{cursor:"pointer",height:30,width:30,background:"none"},children:(0,r.jsx)(p.Z,{fontSize:"small",children:(0,r.jsx)(a.Z,{})})}),(0,r.jsx)(f.Z,{color:"#fff",variant:"overline",sx:{margin:"0 8px"},children:(0,C.Ms)()})]})]})]})}),(0,r.jsx)(S,{anchorEl:j.anchorRef.current,open:j.open,onClose:j.handleClose})]})};_.propTypes={onNavOpen:o().func}},5166:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(9008),o=n.n(s),i=n(1664),a=n.n(i),l=n(9332),c=n(8482),u=n(6310),d=n(7357),h=n(6447),x=n(5861),p=n(3795),m=n(9272),f=n(3321),g=n(926),j=n(7148),Z=n(7294);let b=()=>{let e=(0,l.useRouter)(),t=(0,g.a)(),[n,s]=(0,Z.useState)(null),[i,b]=(0,Z.useState)(null),w=(0,c.TA)({initialValues:{email:"",name:"",password:"",submit:null},validationSchema:u.Ry({email:u.Z_().email("Must be a valid email").max(255).required("Email is required"),name:u.Z_().max(255).required("Name is required"),password:u.Z_().max(255).required("Password is required")}),onSubmit:async(n,r)=>{try{let r=await t.signUp(n.email,n.name,n.password);if(!r.ok){let e=await r.json(),t=Error(e.message||"An error occurred");throw t.status=r.status,t}let o=await r.json();o&&o.result&&o.result.token&&(window.localStorage.setItem("access_token",o.result.token),window.localStorage.setItem("authenticated","true")),s(o),b(null),e.push("/")}catch(e){console.log("Error in registration"),r.setErrors({submit:e.message}),r.setSubmitting(!1)}}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Register | IntGrow Corp."})}),(0,r.jsx)(j.t,{onNavOpen:()=>setOpenNav(!0)}),(0,r.jsx)(d.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,r.jsx)(d.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(h.Z,{spacing:1,sx:{mb:3},children:[(0,r.jsx)(x.Z,{variant:"h4",children:"Register"}),(0,r.jsxs)(x.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,r.jsx)(p.Z,{component:a(),href:"/auth/login",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),(0,r.jsxs)("form",{noValidate:!0,onSubmit:w.handleSubmit,children:[(0,r.jsxs)(h.Z,{spacing:3,children:[(0,r.jsx)(m.Z,{error:!!(w.touched.name&&w.errors.name),fullWidth:!0,helperText:w.touched.name&&w.errors.name,label:"Name",name:"name",onBlur:w.handleBlur,onChange:w.handleChange,value:w.values.name}),(0,r.jsx)(m.Z,{error:!!(w.touched.email&&w.errors.email),fullWidth:!0,helperText:w.touched.email&&w.errors.email,label:"Email Address",name:"email",onBlur:w.handleBlur,onChange:w.handleChange,type:"email",value:w.values.email}),(0,r.jsx)(m.Z,{error:!!(w.touched.password&&w.errors.password),fullWidth:!0,helperText:w.touched.password&&w.errors.password,label:"Password",name:"password",onBlur:w.handleBlur,onChange:w.handleChange,type:"password",value:w.values.password})]}),w.errors.submit&&(0,r.jsx)(x.Z,{color:"error",sx:{mt:3},variant:"body2",children:w.errors.submit}),(0,r.jsx)(f.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Register"})]}),n&&(0,r.jsx)("span",{children:"Registration successful."})]})})})]})};b.getLayout=e=>(0,r.jsx)("div",{children:e}),t.default=b},7685:function(e,t,n){"use strict";var r=n(6092).Z.Symbol;t.Z=r},3589:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7685),s=Object.prototype,o=s.hasOwnProperty,i=s.toString,a=r.Z?r.Z.toStringTag:void 0,l=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var s=i.call(e);return r&&(t?e[a]=n:delete e[a]),s},c=Object.prototype.toString,u=r.Z?r.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?l(e):c.call(e)}},3413:function(e,t){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;t.Z=n},6092:function(e,t,n){"use strict";var r=n(3413),s="object"==typeof self&&self&&self.Object===Object&&self,o=r.Z||s||Function("return this")();t.Z=o},7226:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},8533:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},2714:function(e,t,n){"use strict";var r=n(3589),s=n(8533);t.Z=function(e){return"symbol"==typeof e||(0,s.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}}},function(e){e.O(0,[94,658,783,436,308,586,774,888,179],function(){return e(e.s=3829)}),_N_E=e.O()}]);