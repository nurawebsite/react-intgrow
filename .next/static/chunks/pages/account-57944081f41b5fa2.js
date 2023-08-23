(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{2023:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var n=t(3366),r=t(7462),s=t(7294),l=t(6010),i=t(4780),o=t(948),d=t(1657),c=t(1588),u=t(4867);function h(e){return(0,u.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);var x=t(5893);let m=["disableSpacing","className"],Z=e=>{let{classes:a,disableSpacing:t}=e;return(0,i.Z)({root:["root",!t&&"spacing"]},h,a)},v=(0,o.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.root,!t.disableSpacing&&a.spacing]}})(({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),p=s.forwardRef(function(e,a){let t=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:s=!1,className:i}=t,o=(0,n.Z)(t,m),c=(0,r.Z)({},t,{disableSpacing:s}),u=Z(c);return(0,x.jsx)(v,(0,r.Z)({className:(0,l.Z)(u.root,i),ownerState:c,ref:a},o))});var f=p},8445:function(e,a,t){"use strict";t.d(a,{Z:function(){return C}});var n=t(3366),r=t(7462),s=t(7294),l=t(6010),i=t(4780),o=t(5861),d=t(1657),c=t(948),u=t(1588),h=t(4867);function x(e){return(0,h.Z)("MuiCardHeader",e)}let m=(0,u.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var Z=t(5893);let v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,a)},f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,r.Z)({[`& .${m.title}`]:a.title,[`& .${m.subheader}`]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),y=s.forwardRef(function(e,a){let t=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:s,avatar:i,className:c,component:u="div",disableTypography:h=!1,subheader:x,subheaderTypographyProps:m,title:y,titleTypographyProps:C}=t,N=(0,n.Z)(t,v),w=(0,r.Z)({},t,{component:u,disableTypography:h}),S=p(w),A=y;null==A||A.type===o.Z||h||(A=(0,Z.jsx)(o.Z,(0,r.Z)({variant:i?"body2":"h5",className:S.title,component:"span",display:"block"},C,{children:A})));let P=x;return null==P||P.type===o.Z||h||(P=(0,Z.jsx)(o.Z,(0,r.Z)({variant:i?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},m,{children:P}))),(0,Z.jsxs)(f,(0,r.Z)({className:(0,l.Z)(S.root,c),as:u,ref:a,ownerState:w},N,{children:[i&&(0,Z.jsx)(j,{className:S.avatar,ownerState:w,children:i}),(0,Z.jsxs)(b,{className:S.content,ownerState:w,children:[A,P]}),s&&(0,Z.jsx)(g,{className:S.action,ownerState:w,children:s})]}))});var C=y},5458:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return t(2353)}])},2353:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return w}});var n=t(5893),r=t(9008),s=t.n(r),l=t(7357),i=t(5582),o=t(6447),d=t(5861),c=t(1426),u=t(2689),h=t(6242),x=t(4267),m=t(9661),Z=t(7720),v=t(2023),p=t(3321);let f=()=>(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(x.Z,{children:(0,n.jsxs)(l.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,n.jsx)(m.Z,{src:"/assets/avatars/avatar-anika-visser.png",sx:{height:80,mb:2,width:80}}),(0,n.jsx)(d.Z,{gutterBottom:!0,variant:"h5",children:"Test"}),(0,n.jsxs)(d.Z,{color:"text.secondary",variant:"body2",children:["Los Angeles"," ","USA"]}),(0,n.jsx)(d.Z,{color:"text.secondary",variant:"body2",children:"GTM-7"})]})}),(0,n.jsx)(Z.Z,{}),(0,n.jsx)(v.Z,{children:(0,n.jsx)(p.Z,{fullWidth:!0,variant:"text",children:"Upload picture"})})]});var j=t(7294),g=t(8445),b=t(6515);let y=[{value:"alabama",label:"Alabama"},{value:"new-york",label:"New York"},{value:"san-francisco",label:"San Francisco"},{value:"los-angeles",label:"Los Angeles"}],C=()=>{let[e,a]=(0,j.useState)({firstName:"Anika",lastName:"Visser",email:"demo@devias.io",phone:"",state:"los-angeles",country:"USA"}),t=(0,j.useCallback)(e=>{a(a=>({...a,[e.target.name]:e.target.value}))},[]),r=(0,j.useCallback)(e=>{e.preventDefault()},[]);return(0,n.jsx)("form",{autoComplete:"off",noValidate:!0,onSubmit:r,children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(g.Z,{subheader:"The information can be edited",title:"Profile"}),(0,n.jsx)(x.Z,{sx:{pt:0},children:(0,n.jsx)(l.Z,{sx:{m:-1.5},children:(0,n.jsxs)(c.Z,{container:!0,spacing:3,children:[(0,n.jsx)(c.Z,{xs:12,md:6,children:(0,n.jsx)(b.Z,{fullWidth:!0,helperText:"Please specify the first name",label:"First name",name:"firstName",onChange:t,required:!0,value:e.firstName})}),(0,n.jsx)(c.Z,{xs:12,md:6,children:(0,n.jsx)(b.Z,{fullWidth:!0,label:"Last name",name:"lastName",onChange:t,required:!0,value:e.lastName})}),(0,n.jsx)(c.Z,{xs:12,md:6,children:(0,n.jsx)(b.Z,{fullWidth:!0,label:"Email Address",name:"email",onChange:t,required:!0,value:e.email})}),(0,n.jsx)(c.Z,{xs:12,md:6,children:(0,n.jsx)(b.Z,{fullWidth:!0,label:"Phone Number",name:"phone",onChange:t,type:"number",value:e.phone})}),(0,n.jsx)(c.Z,{xs:12,md:6,children:(0,n.jsx)(b.Z,{fullWidth:!0,label:"Country",name:"country",onChange:t,required:!0,value:e.country})}),(0,n.jsx)(c.Z,{xs:12,md:6,children:(0,n.jsx)(b.Z,{fullWidth:!0,label:"Select State",name:"state",onChange:t,required:!0,select:!0,SelectProps:{native:!0},value:e.state,children:y.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})})]})})}),(0,n.jsx)(Z.Z,{}),(0,n.jsx)(v.Z,{sx:{justifyContent:"flex-end"},children:(0,n.jsx)(p.Z,{variant:"contained",children:"Save details"})})]})})},N=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:"Account | IntGrow Corp."})}),(0,n.jsx)(l.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsx)(i.Z,{maxWidth:"lg",children:(0,n.jsxs)(o.Z,{spacing:3,children:[(0,n.jsx)("div",{children:(0,n.jsx)(d.Z,{variant:"h4",children:"Account"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(c.Z,{container:!0,spacing:3,children:[(0,n.jsx)(c.Z,{xs:12,md:6,lg:4,children:(0,n.jsx)(f,{})}),(0,n.jsx)(c.Z,{xs:12,md:6,lg:8,children:(0,n.jsx)(C,{})})]})})]})})})]});N.getLayout=e=>(0,n.jsx)(u.A,{children:e});var w=N}},function(e){e.O(0,[497,172,709,174,703,515,55,689,774,888,179],function(){return e(e.s=5458)}),_N_E=e.O()}]);