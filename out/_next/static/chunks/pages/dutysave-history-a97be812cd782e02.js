(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{4841:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dutysave-history",function(){return t(5681)}])},5681:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(5893),s=t(7294),l=t(9008),c=t.n(l),o=t(7357),a=t(5582),i=t(6447),u=t(5861);let h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],[n,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{t([])},[e]);let r=(0,s.useCallback)(()=>{t([...e])},[e]),l=(0,s.useCallback)(e=>{t(n=>[...n,e])},[]),c=(0,s.useCallback)(()=>{t([])},[]),o=(0,s.useCallback)(e=>{t(n=>n.filter(n=>n!==e))},[]);return{handleDeselectAll:c,handleDeselectOne:o,handleSelectAll:r,handleSelectOne:l,selected:n}};var d=t(5530),g=t(5697),x=t.n(g),j=t(2912),p=t(6242),Z=t(7906),f=t(3184),m=t(3816),y=t(8102),S=t(295),w=t(3911),v=t(734);let C=e=>{let{count:n=0,items:t=[],onPageChange:s=()=>{},page:l=0,rowsPerPage:c=10,selected:a=[]}=e;return a.length>0&&(a.length,t.length),t.length>0&&(a.length,t.length),console.log("---customer => ",t),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(v.L,{children:(0,r.jsx)(o.Z,{sx:{minWidth:800},children:(0,r.jsxs)(Z.Z,{children:[(0,r.jsx)(f.Z,{children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(y.Z,{children:"Date"}),(0,r.jsx)(y.Z,{children:"HSN"}),(0,r.jsx)(y.Z,{children:"IMPORT DESTINATION"}),(0,r.jsx)(y.Z,{children:"EXPORT DESTINATION"}),(0,r.jsx)(y.Z,{children:"CREDIT POINTS"})]})}),(0,r.jsx)(S.Z,{children:t&&t.length&&t.map(e=>{let n=(0,j.Z)(e.createdAt,"dd/MM/yyyy"),t=e&&e.query&&JSON.parse(e.query)||{},s=e&&e.response&&JSON.parse(e.response)||{},l=s&&s.import&&s.import.map(e=>e.value)||"",c=s&&s.export&&s.export.map(e=>e.value)||"";return(0,r.jsxs)(m.Z,{hover:!0,selected:isSelected,children:[(0,r.jsx)(y.Z,{children:n}),(0,r.jsx)(y.Z,{children:t?t.hs:""}),(0,r.jsx)(y.Z,{children:l.toString()}),(0,r.jsx)(y.Z,{children:c.toString()})]},e.id)})})]})})}),(0,r.jsx)(w.Z,{component:"div",count:n,onPageChange:s,page:l,rowsPerPage:c})]})};C.propTypes={count:x().number,items:x().array,onDeselectAll:x().func,onDeselectOne:x().func,onPageChange:x().func,onSelectAll:x().func,onSelectOne:x().func,page:x().number,rowsPerPage:x().number,selected:x().array},t(926);var N=t(261);let P=[],_=async e=>{console.log("page => ",e);let n=await (0,N.tD)(e);if(!n.ok){let e=await n.json(),t=Error(e.error||"An error occurred");throw t.status=n.status,t}let t=await n.json();console.log("--- response => ",t),console.log(P),P=t},b=(e,n,t)=>(0,s.useMemo)(()=>e&&e.length&&e.slice(n*t,n*t+t),[n,t]),E=e=>(0,s.useMemo)(()=>e&&e.length&&e.map(e=>e.id),[e]),O=()=>{let[e,n]=(0,s.useState)(0),[t,l]=(0,s.useState)();_(e+1);let[d,g]=(0,s.useState)(10),x=b(P,e,d),j=E(x);h(j);let p=(0,s.useCallback)((e,t)=>{n(t),console.log("--value => ",t),getHsnHistoryData(t+1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"Duty Saver History | IntGrow Corp."})}),(0,r.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsx)(a.Z,{maxWidth:"xl",children:(0,r.jsxs)(i.Z,{spacing:3,children:[(0,r.jsx)(i.Z,{direction:"row",justifyContent:"space-between",spacing:4,children:(0,r.jsx)(i.Z,{spacing:1,children:(0,r.jsx)(u.Z,{variant:"h4",children:"Duty Saver Search History"})})}),(0,r.jsx)(C,{count:P.length+10,items:x,onPageChange:p,page:e})]})})})]})};O.getLayout=e=>(0,r.jsx)(d.A,{children:e});var T=O}},function(e){e.O(0,[94,658,603,436,308,71,690,530,774,888,179],function(){return e(e.s=4841)}),_N_E=e.O()}]);