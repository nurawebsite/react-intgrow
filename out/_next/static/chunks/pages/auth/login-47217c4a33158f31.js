(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return r(7995)}])},1644:function(e,n,r){"use strict";r.d(n,{T:function(){return o}});var s=r(5893),t=r(2734),i=r(1664),a=r.n(i),l=r(3795);let o=()=>{let e=(0,t.Z)();return e.palette.primary.main,(0,s.jsx)(l.Z,{component:a(),href:"/",children:(0,s.jsx)("img",{src:"/assets/logos/main-logo.png",alt:"intgrow_logo"})})}},926:function(e,n,r){"use strict";r.d(n,{a:function(){return i}});var s=r(7294),t=r(261);let i=()=>(0,s.useContext)(t.Vo)},7148:function(e,n,r){"use strict";r.d(n,{t:function(){return E}});var s=r(5893),t=r(5697),i=r.n(t),a=r(3806),l=r(4502),o=r(2823),c=r(8396),u=r(7357),d=r(6447),h=r(4674),x=r(3219),p=r(2613),m=r(8139),g=r(9661),j=r(7294),f=r(9332),Z=r(4564),b=r(5861),w=r(7720),v=r(4118),y=r(431),C=r(926),k=r(2241);let _=e=>{let{anchorEl:n,onClose:r,open:t}=e,i=(0,f.useRouter)(),a=(0,C.a)(),l=(0,j.useCallback)(()=>{null==r||r(),a.signOut(),i.push("/auth/login")},[r,a,i]);return(0,s.jsxs)(Z.ZP,{anchorEl:n,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:r,open:t,PaperProps:{sx:{width:200}},children:[(0,s.jsxs)(u.Z,{sx:{py:1.5,px:2},children:[(0,s.jsx)(b.Z,{variant:"overline",children:"Account"}),(0,s.jsx)(b.Z,{color:"text.secondary",variant:"body2",children:(0,k.Ms)()})]}),(0,s.jsx)(w.Z,{}),(0,s.jsx)(v.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,s.jsx)(y.Z,{onClick:l,children:"Sign out"})})]})};_.propTypes={anchorEl:i().any,onClose:i().func,open:i().bool.isRequired};var S=r(1644);let E=e=>{let{onNavOpen:n}=e,r=(0,c.Z)(e=>e.breakpoints.up("lg")),t=function(){let e=(0,j.useRef)(null),[n,r]=(0,j.useState)(!1),s=(0,j.useCallback)(()=>{r(!0)},[]),t=(0,j.useCallback)(()=>{r(!1)},[]),i=(0,j.useCallback)(()=>{r(e=>!e)},[]);return{anchorRef:e,handleClose:t,handleOpen:s,handleToggle:i,open:n}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{component:"header",sx:{backdropFilter:"blur(6px)",background:"linear-gradient(-45deg, #0e588d, #274685)",position:"sticky",left:{lg:"".concat(280,"px")},top:0,zIndex:e=>e.zIndex.appBar},children:(0,s.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{minHeight:64,px:2},children:[(0,s.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,children:[!r&&(0,s.jsx)(h.Z,{onClick:n,children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(l.Z,{})})}),(0,s.jsx)(S.T,{})]}),(0,s.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,s.jsx)(p.Z,{title:"Notifications",children:(0,s.jsx)(h.Z,{children:(0,s.jsx)(m.Z,{badgeContent:4,color:"success",variant:"dot",children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(a.Z,{})})})})}),(0,s.jsx)(g.Z,{onClick:t.handleOpen,ref:t.anchorRef,sx:{cursor:"pointer",height:40,width:40},children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(o.Z,{})})})]})]})}),(0,s.jsx)(_,{anchorEl:t.anchorRef.current,open:t.open,onClose:t.handleClose})]})};E.propTypes={onNavOpen:i().func}},7995:function(e,n,r){"use strict";r.r(n);var s=r(5893),t=r(7294),i=r(9008),a=r.n(i),l=r(1664),o=r.n(l),c=r(9332),u=r(8482),d=r(6310),h=r(7357),x=r(6447),p=r(5861),m=r(3795),g=r(6515),j=r(3321),f=r(926),Z=r(7148),b=r(2241),w=r(261);let v=()=>{let e=(0,c.useRouter)(),n=(0,f.a)(),[r,i]=(0,t.useState)("email"),[l,v]=(0,t.useState)(null),[y,C]=(0,t.useState)(null),[k,_]=(0,t.useReducer)(w.I6,w.E3),S=(0,u.TA)({initialValues:{email:"",password:"",submit:null},validationSchema:d.Ry({email:d.Z_().email("Must be a valid email").max(255).required("Email is required"),password:d.Z_().max(255).required("Password is required")}),onSubmit:async(r,s)=>{try{let s=await n.signIn(r.email,r.password);if(!s.ok){let e=await s.json(),n=Error(e.error||"An error occurred");throw n.status=s.status,n}let t=await s.json();window.sessionStorage.setItem("authenticated","true"),window.localStorage.setItem("access_token",t.result.token),v(t),C(null);let i={id:t.result.id,name:t.result.first_name,email:t.result.email};_({type:b.xm.SIGN_IN,payload:i}),e.push("/")}catch(e){console.log("Error in login"),C(e.message),s.setStatus({success:!1}),s.setErrors({submit:e.message}),s.setSubmitting(!1)}}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"Login | IntGrow Corp."})}),(0,s.jsx)(Z.t,{onNavOpen:()=>setOpenNav(!0)}),(0,s.jsx)(h.Z,{sx:{backgroundColor:"background.paper",flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,s.jsx)(h.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(x.Z,{spacing:1,sx:{mb:3},children:[(0,s.jsx)(p.Z,{variant:"h4",children:"Login"}),(0,s.jsxs)(p.Z,{color:"text.secondary",variant:"body2",children:["Don't have an account? \xa0",(0,s.jsx)(m.Z,{component:o(),href:"/auth/register",underline:"hover",variant:"subtitle2",children:"Register"})]})]}),(0,s.jsxs)("form",{noValidate:!0,onSubmit:S.handleSubmit,children:[(0,s.jsxs)(x.Z,{spacing:3,children:[(0,s.jsx)(g.Z,{error:!!(S.touched.email&&S.errors.email),fullWidth:!0,helperText:S.touched.email&&S.errors.email,label:"Email Address",name:"email",onBlur:S.handleBlur,onChange:S.handleChange,type:"email",value:S.values.email}),(0,s.jsx)(g.Z,{error:!!(S.touched.password&&S.errors.password),fullWidth:!0,helperText:S.touched.password&&S.errors.password,label:"Password",name:"password",onBlur:S.handleBlur,onChange:S.handleChange,type:"password",value:S.values.password})]}),S.errors.submit&&(0,s.jsx)(p.Z,{color:"error",sx:{mt:3},variant:"body2",children:S.errors.submit}),(0,s.jsx)(j.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Log In"})]}),l&&(0,s.jsx)("span",{children:"Login successful."})]})})})]})};v.getLayout=e=>(0,s.jsx)("div",{children:e}),n.default=v}},function(e){e.O(0,[123,664,953,709,703,515,783,774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);