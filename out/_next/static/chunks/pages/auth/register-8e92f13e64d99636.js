(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{3829:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return r(5166)}])},1644:function(e,n,r){"use strict";r.d(n,{T:function(){return o}});var s=r(5893),a=r(2734),t=r(1664),i=r.n(t),l=r(3795);let o=()=>{let e=(0,a.Z)();return e.palette.primary.main,(0,s.jsx)(l.Z,{component:i(),href:"/",children:(0,s.jsx)("img",{src:"/assets/logos/main-logo.png",alt:"intgrow_logo"})})}},926:function(e,n,r){"use strict";r.d(n,{a:function(){return t}});var s=r(7294),a=r(261);let t=()=>(0,s.useContext)(a.Vo)},7148:function(e,n,r){"use strict";r.d(n,{t:function(){return E}});var s=r(5893),a=r(5697),t=r.n(a),i=r(3806),l=r(9721),o=r(4502),c=r(8396),d=r(7357),u=r(6447),h=r(4674),x=r(3219),p=r(2613),m=r(8139),j=r(9661),g=r(7294),Z=r(9332),f=r(4564),b=r(5861),v=r(7720),w=r(4118),C=r(431),y=r(926);let k=e=>{let{anchorEl:n,onClose:r,open:a}=e,t=(0,Z.useRouter)(),i=(0,y.a)(),l=(0,g.useCallback)(()=>{null==r||r(),i.signOut(),t.push("/auth/login")},[r,i,t]);return(0,s.jsxs)(f.ZP,{anchorEl:n,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:r,open:a,PaperProps:{sx:{width:200}},children:[(0,s.jsxs)(d.Z,{sx:{py:1.5,px:2},children:[(0,s.jsx)(b.Z,{variant:"overline",children:"Account"}),(0,s.jsx)(b.Z,{color:"text.secondary",variant:"body2",children:"Test"})]}),(0,s.jsx)(v.Z,{}),(0,s.jsx)(w.Z,{disablePadding:!0,dense:!0,sx:{p:"8px","& > *":{borderRadius:1}},children:(0,s.jsx)(C.Z,{onClick:l,children:"Sign out"})})]})};k.propTypes={anchorEl:t().any,onClose:t().func,open:t().bool.isRequired};var _=r(1644);let E=e=>{let{onNavOpen:n}=e,r=(0,c.Z)(e=>e.breakpoints.up("lg")),a=function(){let e=(0,g.useRef)(null),[n,r]=(0,g.useState)(!1),s=(0,g.useCallback)(()=>{r(!0)},[]),a=(0,g.useCallback)(()=>{r(!1)},[]),t=(0,g.useCallback)(()=>{r(e=>!e)},[]);return{anchorRef:e,handleClose:a,handleOpen:s,handleToggle:t,open:n}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{component:"header",sx:{backdropFilter:"blur(6px)",background:"linear-gradient(-45deg, #0e588d, #274685)",position:"sticky",left:{lg:"".concat(280,"px")},top:0,zIndex:e=>e.zIndex.appBar},children:(0,s.jsxs)(u.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{minHeight:64,px:2},children:[(0,s.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:2,children:[!r&&(0,s.jsx)(h.Z,{onClick:n,children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(o.Z,{})})}),(0,s.jsx)(_.T,{})]}),(0,s.jsxs)(u.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,s.jsx)(p.Z,{title:"Contacts",children:(0,s.jsx)(h.Z,{children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(l.Z,{})})})}),(0,s.jsx)(p.Z,{title:"Notifications",children:(0,s.jsx)(h.Z,{children:(0,s.jsx)(m.Z,{badgeContent:4,color:"success",variant:"dot",children:(0,s.jsx)(x.Z,{fontSize:"small",children:(0,s.jsx)(i.Z,{})})})})}),(0,s.jsx)(j.Z,{onClick:a.handleOpen,ref:a.anchorRef,sx:{cursor:"pointer",height:40,width:40},src:"/assets/avatars/avatar-anika-visser.png"})]})]})}),(0,s.jsx)(k,{anchorEl:a.anchorRef.current,open:a.open,onClose:a.handleClose})]})};E.propTypes={onNavOpen:t().func}},5166:function(e,n,r){"use strict";r.r(n);var s=r(5893),a=r(9008),t=r.n(a),i=r(1664),l=r.n(i),o=r(9332),c=r(8482),d=r(6310),u=r(1737),h=r(7357),x=r(6447),p=r(5861),m=r(3795),j=r(6515),g=r(3321),Z=r(926),f=r(7148);let b=()=>{let e=(0,o.useRouter)(),n=(0,Z.a)(),r=(0,c.TA)({initialValues:{email:"",name:"",password:"",submit:null},validationSchema:d.Ry({email:d.Z_().email("Must be a valid email").max(255).required("Email is required"),name:d.Z_().max(255).required("Name is required"),password:d.Z_().max(255).required("Password is required")}),onSubmit:async(r,s)=>{try{await n.signUp(r.email,r.name,r.password),u.Z,e.push("/")}catch(e){s.setStatus({success:!1}),s.setErrors({submit:e.message}),s.setSubmitting(!1)}}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t(),{children:(0,s.jsx)("title",{children:"Register | IntGrow Corp."})}),(0,s.jsx)(f.t,{onNavOpen:()=>setOpenNav(!0)}),(0,s.jsx)(h.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,s.jsx)(h.Z,{sx:{maxWidth:550,px:3,py:"100px",width:"100%"},children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(x.Z,{spacing:1,sx:{mb:3},children:[(0,s.jsx)(p.Z,{variant:"h4",children:"Register"}),(0,s.jsxs)(p.Z,{color:"text.secondary",variant:"body2",children:["Already have an account? \xa0",(0,s.jsx)(m.Z,{component:l(),href:"/auth/login",underline:"hover",variant:"subtitle2",children:"Log in"})]})]}),(0,s.jsxs)("form",{noValidate:!0,onSubmit:r.handleSubmit,children:[(0,s.jsxs)(x.Z,{spacing:3,children:[(0,s.jsx)(j.Z,{error:!!(r.touched.name&&r.errors.name),fullWidth:!0,helperText:r.touched.name&&r.errors.name,label:"Name",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name}),(0,s.jsx)(j.Z,{error:!!(r.touched.email&&r.errors.email),fullWidth:!0,helperText:r.touched.email&&r.errors.email,label:"Email Address",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,type:"email",value:r.values.email}),(0,s.jsx)(j.Z,{error:!!(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password})]}),r.errors.submit&&(0,s.jsx)(p.Z,{color:"error",sx:{mt:3},variant:"body2",children:r.errors.submit}),(0,s.jsx)(g.Z,{fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Register"})]})]})})})]})};b.getLayout=e=>(0,s.jsx)("div",{children:e}),n.default=b}},function(e){e.O(0,[497,172,709,703,515,129,774,888,179],function(){return e(e.s=3829)}),_N_E=e.O()}]);