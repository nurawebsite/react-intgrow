(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8356:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t(7998)}])},7998:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return S}});var a=t(5893),n=t(9008),l=t.n(n),i=t(7357),r=t(5582),c=t(6447),d=t(5861),o=t(7720),x=t(7294),h=t(6242),u=t(8445),j=t(4267),m=t(1426),Z=t(480),f=t(5071),p=t(2023),b=t(3321);let g=()=>{let e=(0,x.useCallback)(e=>{e.preventDefault()},[]);return(0,a.jsx)("form",{onSubmit:e,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(u.Z,{subheader:"Manage the notifications",title:"Notifications"}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(m.Z,{container:!0,spacing:6,wrap:"wrap",children:(0,a.jsx)(m.Z,{xs:12,sm:6,md:4,children:(0,a.jsxs)(c.Z,{spacing:1,children:[(0,a.jsx)(d.Z,{variant:"h6",children:"Notifications"}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(Z.Z,{control:(0,a.jsx)(f.Z,{defaultChecked:!0}),label:"Email"}),(0,a.jsx)(Z.Z,{control:(0,a.jsx)(f.Z,{defaultChecked:!0}),label:"Push Notifications"}),(0,a.jsx)(Z.Z,{control:(0,a.jsx)(f.Z,{defaultChecked:!0}),label:"Text Messages"}),(0,a.jsx)(Z.Z,{control:(0,a.jsx)(f.Z,{defaultChecked:!0}),label:"Phone calls"})]})]})})})}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(p.Z,{sx:{mb:3},children:(0,a.jsx)(b.Z,{variant:"contained",children:"Save"})})]})})};var v=t(6515);let w=()=>{let[e,s]=(0,x.useState)({password:"********",confirm:"",first_name:"Test",email:"test@test.com"}),t=(0,x.useCallback)(e=>{s(s=>({...s,[e.target.name]:e.target.value}))},[]),n=(0,x.useCallback)(e=>{e.preventDefault()},[]);return(0,a.jsx)("form",{onSubmit:n,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(u.Z,{subheader:"Update password",title:"Password"}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(j.Z,{children:(0,a.jsxs)(c.Z,{spacing:3,sx:{maxWidth:400},children:[(0,a.jsx)(v.Z,{fullWidth:!0,label:"Password",name:"password",onChange:t,type:"password",value:e.password}),(0,a.jsx)(v.Z,{fullWidth:!0,label:"Password (Confirm)",name:"confirm",onChange:t,type:"password",value:e.confirm})]})}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(p.Z,{sx:{mb:3},children:(0,a.jsx)(b.Z,{variant:"contained",type:"submit",children:"Update Password"})})]})})};var C=t(1737),_=t(926);let y=()=>{let[e,s]=(0,x.useState)({first_name:"Test",email:"test@test.com"}),[t,n]=(0,x.useState)(null),l=(0,_.a)(),i=(0,x.useCallback)(e=>{s(s=>({...s,[e.target.name]:e.target.value}))},[]),r=async(e,s)=>{try{let s=await l.updateUserInfo(e.name);n(s),C.Z}catch(e){helpers.setStatus({success:!1}),helpers.setErrors({submit:e.message}),helpers.setSubmitting(!1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("form",{onSubmit:r,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(u.Z,{subheader:"Update your personal information",title:"Personal Information"}),(0,a.jsx)(j.Z,{children:(0,a.jsxs)(c.Z,{spacing:3,sx:{maxWidth:400},children:[(0,a.jsx)(v.Z,{fullWidth:!0,label:"Name",name:"first_name",onChange:i,type:"text",value:e.first_name}),(0,a.jsx)(v.Z,{fullWidth:!0,label:"Email-Id",name:"email",type:"email",value:e.email,disabled:!0})]})}),(0,a.jsx)(p.Z,{sx:{mb:3},children:(0,a.jsx)(b.Z,{variant:"contained",type:"submit",onClick:r,children:"Update Information"})}),(0,a.jsx)(o.Z,{})]})}),t&&(0,a.jsx)(C.Z,{color:"primary",severity:"info",sx:{mt:3},children:(0,a.jsx)("div",{children:"Updated successfully."})})]})};var k=t(2689);let P=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{children:(0,a.jsx)("title",{children:"Profile | IntGrow Corp."})}),(0,a.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8,paddingTop:2},children:(0,a.jsx)(r.Z,{maxWidth:"lg",children:(0,a.jsxs)(c.Z,{spacing:3,children:[(0,a.jsx)(d.Z,{variant:"h4",children:"Profile Settings"}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(y,{}),(0,a.jsx)(w,{}),(0,a.jsx)(g,{})]})})})]});P.getLayout=e=>(0,a.jsx)(k.A,{children:e});var S=P}},function(e){e.O(0,[497,224,709,174,703,515,55,545,689,774,888,179],function(){return e(e.s=8356)}),_N_E=e.O()}]);