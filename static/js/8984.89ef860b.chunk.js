"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[8984],{28984:function(e,n,t){t.r(n);var r=t(15861),c=t(29439),i=t(1413),s=t(64687),a=t.n(s),o=t(47313),l=t(19860),d=t(23477),u=t(24076),h=t(67478),x=t(44758),v=t(82558),f=t(57829),Z=t(9289),p=t(61113),j=t(61689),m=t(47131),g=t(93405),b=t(9019),S=t(24631),z=t(41727),k=t(51629),y=t(66835),C=t(57861),w=t(70024),P=t(62323),H=t(50282),M=t(33497),T=t(77863),V=t(66795),I=t(51997),L=t(44289),A=t(94788),O=t(49854),E=t(57983),F=t(46417);function R(e,n,t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var c=e[t];return!0===e[t]?c=1:!1===e[t]&&(c=0),r<c?-1:r>c?1:0}var q=function(e,n){return"desc"===e?function(e,t){return R(e,t,n)}:function(e,t){return-R(e,t,n)}};function B(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var D=[{id:"name",numeric:!1,label:"Country Name",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"}];function N(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,c=e.numSelected,i=e.rowCount,s=e.onRequestSort,a=e.selected;return(0,F.jsxs)(d.Z,{children:[(0,F.jsx)(u.Z,{children:c>0&&(0,F.jsx)(h.Z,{padding:"none",colSpan:8,children:(0,F.jsx)(_,{numSelected:a.length})})}),(0,F.jsxs)(u.Z,{children:[(0,F.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,F.jsx)(x.Z,{color:"primary",indeterminate:c>0&&c<i,checked:i>0&&c===i,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),D.map((function(e){return(0,F.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,F.jsxs)(v.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){s(e,n)}),children:[e.label,r===e.id?(0,F.jsx)(f.Z,{component:"span",sx:H.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})]})}var _=function(e){var n=e.numSelected;return(0,F.jsxs)(Z.Z,{sx:(0,i.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,F.jsxs)(p.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,F.jsx)(p.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,F.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,F.jsx)(j.Z,{title:"Delete",children:(0,F.jsx)(m.Z,{size:"large",children:(0,F.jsx)(I.Z,{fontSize:"small"})})})]})};n.default=function(){var e=(0,l.Z)(),n=(0,T.I0)(),t=o.useState("asc"),i=(0,c.Z)(t,2),s=i[0],d=i[1],v=o.useState("calories"),f=(0,c.Z)(v,2),Z=f[0],H=f[1],I=o.useState([]),R=(0,c.Z)(I,2),D=R[0],_=R[1],G=o.useState(0),W=(0,c.Z)(G,2),J=W[0],K=W[1],Q=o.useState(5),U=(0,c.Z)(Q,2),X=U[0],Y=U[1],$=o.useState(""),ee=(0,c.Z)($,2),ne=ee[0],te=ee[1],re=o.useState([]),ce=(0,c.Z)(re,2),ie=ce[0],se=ce[1],ae=(0,T.v9)((function(e){return console.log(e),e.demographics})).countries;o.useEffect((function(){n((0,V.ox)())}),[n]);var oe=function(e,n){var t=e;if(te(t||""),t){var r=n.filter((function(e){var n=!0,r=!1;return["name","status"].forEach((function(n){var c;null!==(c=e[n])&&void 0!==c&&c.toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));se(r)}else se(n)};o.useEffect((function(){oe(ne,ae)}),[ae]);var le=function(e,n){var t=D.indexOf(n),r=[];-1===t?r=r.concat(D,n):0===t?r=r.concat(D.slice(1)):t===D.length-1?r=r.concat(D.slice(0,-1)):t>0&&(r=r.concat(D.slice(0,t),D.slice(t+1))),_(r)},de=J>0?Math.max(0,(1+J)*X-ie.length):0,ue=function(){var e=(0,r.Z)(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,n((0,V.wO)(r,t.target.checked));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,F.jsxs)(M.Z,{title:"Country List",content:!1,children:[(0,F.jsx)(g.Z,{children:(0,F.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,F.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,F.jsx)(S.Z,{InputProps:{startAdornment:(0,F.jsx)(z.Z,{position:"start",children:(0,F.jsx)(E.Z,{fontSize:"small"})})},onChange:function(e){return oe(e.target.value,ae)},placeholder:"Search Country",value:ne,size:"small"})}),(0,F.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,F.jsx)(j.Z,{title:"Copy",children:(0,F.jsx)(m.Z,{size:"large",children:(0,F.jsx)(O.Z,{})})}),(0,F.jsx)(j.Z,{title:"Print",children:(0,F.jsx)(m.Z,{size:"large",children:(0,F.jsx)(A.Z,{})})}),(0,F.jsx)(j.Z,{title:"Filter",children:(0,F.jsx)(m.Z,{size:"large",children:(0,F.jsx)(L.Z,{})})})]})]})}),(0,F.jsx)(k.Z,{children:(0,F.jsxs)(y.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,F.jsx)(N,{theme:e,numSelected:D.length,order:s,orderBy:Z,onSelectAllClick:function(e){if(e.target.checked)if(D.length>0)_([]);else{var n=ie.map((function(e){return e.name}));_(n)}else _([])},onRequestSort:function(e,n){d(Z===n&&"asc"===s?"desc":"asc"),H(n)},rowCount:ie.length,selected:D}),(0,F.jsxs)(C.Z,{children:[B(ie,q(s,Z)).slice(J*X,J*X+X).map((function(n,t){if("number"===typeof n)return null;var r,c=(r=n.name,-1!==D.indexOf(r)),i="enhanced-table-checkbox-".concat(t);return(0,F.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[(0,F.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return le(0,n.name)},children:(0,F.jsx)(x.Z,{color:"primary",checked:c,inputProps:{"aria-labelledby":i}})}),(0,F.jsxs)(h.Z,{component:"th",id:i,scope:"row",onClick:function(e){return le(0,n.name)},sx:{cursor:"pointer"},children:[(0,F.jsxs)(p.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:[" ",n.name," "]}),(0,F.jsxs)(p.Z,{variant:"caption",children:[" ",n.email," "]})]}),(0,F.jsx)(h.Z,{align:"center",children:(0,F.jsx)(w.Z,{checked:n.status,color:"".concat(n.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,t){ue(e,n),console.log(t)}})})]},t)})),de>0&&(0,F.jsx)(u.Z,{style:{height:53*de},children:(0,F.jsx)(h.Z,{colSpan:6})})]})]})}),(0,F.jsx)(P.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ie.length,rowsPerPage:X,page:J,onPageChange:function(e,n){K(n)},onRowsPerPageChange:function(e){Y(parseInt(null===e||void 0===e?void 0:e.target.value,10)),K(0)}})]})}},49854:function(e,n,t){var r=t(64836);n.Z=void 0;var c=r(t(45045)),i=t(46417),s=(0,c.default)([(0,i.jsx)("path",{d:"M14 7H8v14h11v-9h-5z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"},"1")],"FileCopyTwoTone");n.Z=s},44289:function(e,n,t){var r=t(64836);n.Z=void 0;var c=r(t(45045)),i=t(46417),s=(0,c.default)((0,i.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterListTwoTone");n.Z=s},94788:function(e,n,t){var r=t(64836);n.Z=void 0;var c=r(t(45045)),i=t(46417),s=(0,c.default)([(0,i.jsx)("path",{d:"M8 5h8v3H8z",opacity:".3"},"0"),(0,i.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1"),(0,i.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"2"),(0,i.jsx)("path",{d:"M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",opacity:".3"},"3")],"PrintTwoTone");n.Z=s}}]);