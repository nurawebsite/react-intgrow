(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{3829:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return r(5166)}])},1644:function(e,n,r){"use strict";r.d(n,{T:function(){return o}});var s=r(5893),t=r(2734),a=r(1664),i=r.n(a),l=r(3795);let o=()=>{let e=(0,t.Z)();return e.palette.primary.main,(0,s.jsx)(l.Z,{component:i(),href:"/",children:(0,s.jsx)("img",{src:"/assets/logos/main-logo.png",alt:"intgrow_logo"})})}},926:function(e,n,r){"use strict";r.d(n,{a:function(){return a}});var s=r(7294),t=r(261);let a=()=>(0,s.useContext)(t.Vo)},7148:function(e,n,r){"use strict";r.d(n,{t:function(){return R}});var s=r(5893),t=r(5697),a=r.n(t),i=r(3806),l=r(4502),o=r(2823),c=r(8396),d=r(7357),u=r(6447),h=r(4674),x=r(3219),p=r(2613),m=r(8139),g=r(9661),j=r(7294),f=r(9332),Z=r(4564),b=r(5861),w=r(7720),v=r(4118),C=r(431),y=r(926),k=r(2241);let _=e=>{let{anchorEl:n,onClose:r,open:t}=e,a=(0,f.useRouter)(),i=(0,y.a)(),l=(0,j.useCallback)(()=>{null==r||r(),i.signOut(),a.push("/auth/login")},[r,i,a]);return(0,s.jsxs)(Z.ZP,{anchorEl:n,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:r,open:t,PaperProps:{sx:{width:200}},children:[(0,s.jsxs)(d.Z,{sx:{py:1.5,px:2},children:[(0,s.jsx)(b.Z,{variant:"overline",children:"Account"}),(0,s.jsx)(b.Z,{color:"text.secondary",variant:"body2",children:(0,k.Ms)()})]}),(0,s.jsx)(w.Z,{}),(0,s.jsx)(v.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,s.jsx)(C.Z,{onClick:l,children:"Sign out"})})]})};_.propTypes={anchorEl:a().any,onClose:a().func,open:a().bool.isRequired};var E=r(1644);let R=e=>{let{onNavOpen:n}=e,r=(0,c.Z)(e=>e.breakpoints.up("lg")),t=function(){let e=(0,j.useRef)(null),[n,r]=(0,j.useState)(!1),s=(0,j.useCallback)(()=>{r(!0)},[]),t=(0,j.useCallback)(()=>{r(!1)},[]),a=(0,j.useCallback)(()=>{r(e=>!e)},[]);return{anchorRef:e,handleClose:t,handleOpen:s,handleToggle:a,open:n}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{component:"header",sx:{backdropFilter:"blur(6px)",background:"linear-gradient(-45deg, #0e588d, #274685)",position:"sticky",left:{lg:"".concat(280,"px")},top:0,zIndex:e=>e.zIndex.appBar},children:(0,s.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{minHeight:64,px:2},children:[(0,s.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:2,children:[!r&&(0,s.jsx)(h.Z,{onClick:n,children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(l.Z,{})})}),(0,s.jsx)(E.T,{})]}),(0,s.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,s.jsx)(p.Z,{title:"Notifications",children:(0,s.jsx)(h.Z,{children:(0,s.jsx)(m.Z,{badgeContent:4,color:"success",variant:"dot",children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(i.Z,{})})})})}),(0,s.jsx)(g.Z,{onClick:t.handleOpen,ref:t.anchorRef,sx:{cursor:"pointer",height:40,width:40},children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(o.Z,{})})})]})]})}),(0,s.jsx)(_,{anchorEl:t.anchorRef.current,open:t.open,onClose:t.handleClose})]})};R.propTypes={onNavOpen:a().func}},5166:function(e,n,r){"use strict";r.r(n);var s=r(5893),t=r(9008),a=r.n(t),i=r(1664),l=r.n(i),o=r(9332),c=r(8482),d=r(6310),u=r(7357),h=r(6447),x=r(5861),p=r(3795),m=r(6515),g=r(3321),j=r(926),f=r(7148),Z=r(7294);let b=()=>{let e=(0,o.useRouter)(),n=(0,j.a)(),[r,t]=(0,Z.useState)(null),[i,b]=(0,Z.useState)(null),w=(0,c.TA)({initialValues:{email:"",name:"",password:"",submit:null},validationSchema:d.Ry({email:d.Z_().email("Must be a valid email").max(255).required("Email is required"),name:d.Z_().max(255).required("Name is required"),password:d.Z_().max(255).required("Password is required")}),onSubmit:async(r,s)=>{try{let s=await n.signUp(r.email,r.name,r.password);if(!s.ok){let e=await s.json(),n=Error(e.message||"An error occurred");throw n.status=s.status,n}let a=await s.json();t(a),b(null),e.push("/")}catch(e){console.log("Error in registration"),s.setErrors({submit:e.message}),s.setSubmitting(!1)}}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:"Register | IntGrow Corp."})}),(0,s.jsx)(f.t,{onNavOpen:()=>setOpenNav(!0)}),(0,s.jsx)(u.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,s.jsx)(u.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(h.Z,{spacing:1,sx:{mb:3},children:[(0,s.jsx)(x.Z,{variant:"h4",children:"Register"}),(0,s.jsxs)(x.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,s.jsx)(p.Z,{component:l(),href:"/auth/login",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),(0,s.jsxs)("form",{noValidate:!0,onSubmit:w.handleSubmit,children:[(0,s.jsxs)(h.Z,{spacing:3,children:[(0,s.jsx)(m.Z,{error:!!(w.touched.name&&w.errors.name),fullWidth:!0,helperText:w.touched.name&&w.errors.name,label:"Name",name:"name",onBlur:w.handleBlur,onChange:w.handleChange,value:w.values.name}),(0,s.jsx)(m.Z,{error:!!(w.touched.email&&w.errors.email),fullWidth:!0,helperText:w.touched.email&&w.errors.email,label:"Email Address",name:"email",onBlur:w.handleBlur,onChange:w.handleChange,type:"email",value:w.values.email}),(0,s.jsx)(m.Z,{error:!!(w.touched.password&&w.errors.password),fullWidth:!0,helperText:w.touched.password&&w.errors.password,label:"Password",name:"password",onBlur:w.handleBlur,onChange:w.handleChange,type:"password",value:w.values.password})]}),w.errors.submit&&(0,s.jsx)(x.Z,{color:"error",sx:{mt:3},variant:"body2",children:w.errors.submit}),(0,s.jsx)(g.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Register"})]}),r&&(0,s.jsx)("span",{children:"Registration successful."})]})})})]})};b.getLayout=e=>(0,s.jsx)("div",{children:e}),n.default=b}},function(e){e.O(0,[123,664,953,709,703,515,783,774,888,179],function(){return e(e.s=3829)}),_N_E=e.O()}]);