(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{2933:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dutycalculator",function(){return r(719)}])},719:function(e,t,r){"use strict";r.r(t);var a=r(5893),s=r(9008),i=r.n(s);r(1664);var n=r(9332),u=r(8482),l=r(6310),o=r(7357),c=r(926);r(7148);var d=r(7294),m=r(2689);let h=()=>{let e=(0,n.useRouter)(),t=(0,c.a)(),[r,s]=(0,d.useState)(null),[m,h]=(0,d.useState)(null);return(0,u.TA)({initialValues:{email:"",name:"",password:"",submit:null},validationSchema:l.Ry({email:l.Z_().email("Must be a valid email").max(255).required("Email is required"),name:l.Z_().max(255).required("Name is required"),password:l.Z_().max(255).required("Password is required")}),onSubmit:async(r,a)=>{try{let a=await t.signUp(r.email,r.name,r.password);if(!a.ok){let e=await a.json(),t=Error(e.message||"An error occurred");throw t.status=a.status,t}let i=await a.json();s(i),h(null),e.push("/")}catch(e){console.log("Error in registration"),a.setErrors({submit:e.message}),a.setSubmitting(!1)}}}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:"Duty Calculator | IntGrow Corp."})}),(0,a.jsx)(o.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,a.jsx)("iframe",{src:"/duty.html",width:"100%",height:"100%"})})]})};h.getLayout=e=>(0,a.jsx)(m.A,{children:e}),t.default=h}},function(e){e.O(0,[123,664,690,783,689,774,888,179],function(){return e(e.s=2933)}),_N_E=e.O()}]);