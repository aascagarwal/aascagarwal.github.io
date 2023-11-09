"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[1217],{31217:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var r=t(15861),i=t(29439),a=t(1413),s=t(64687),c=t.n(s),o=t(47313),l=t(19860),d=t(23477),u=t(24076),h=t(67478),x=t(44758),p=t(82558),f=t(57829),m=t(9289),Z=t(61113),j=t(61689),g=t(47131),v=t(93405),y=t(9019),C=t(24631),b=t(41727),S=t(42420),w=t(51629),k=t(66835),P=t(57861),z=t(90891),A=t(62323),I=t(94469),D=t(50282),R=(t(39236),t(33497)),E=t(25823),T=t(84517),_=t(51997),q=t(44289),F=t(94788),L=t(49854),N=t(57983),O=t(83033),W=t(16031),B=t.n(W),H=t(33604),V=t(19536),M=t(96467),U=t(4117),G=t(42832),Q=t(24193),J=t(43394),K=t(97101),X=t(3463),Y=t(79429),$=t(12401),ee=t(17592),ne=t(46417);(0,ee.ZP)("div")((function(e){var n=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),borderRadius:n.shape.borderRadius,"&:hover":{opacity:.72}}}));var te=function(e,n){var t={name:""};return e||n?B().merge({},t,e):t},re=function(e){var n=e.category,t=e.range,i=e.handleDelete,s=e.handleCreate,o=e.handleUpdate,d=e.onCancel,u=((0,l.Z)(),!n),h=X.Ry().shape({name:X.Z_().max(255).required("Name is required")}),x=(0,Y.TA)({initialValues:te(n,t),validationSchema:h,onSubmit:function(){var e=(0,r.Z)(c().mark((function e(t,r){var i,a,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.resetForm,a=r.setSubmitting;try{l={name:t.name},n?o(n.id,l):s(l),i(),d(),a(!1)}catch(c){console.error(c)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),p=(x.values,x.errors),f=x.touched,m=x.handleSubmit,Z=x.isSubmitting,v=x.getFieldProps;x.setFieldValue;return(0,ne.jsx)(Y.Hy,{value:x,children:(0,ne.jsx)(J._,{dateAdapter:K.H,children:(0,ne.jsxs)(Y.l0,{autoComplete:"off",noValidate:!0,onSubmit:m,children:[(0,ne.jsx)(H.Z,{children:n?"Edit Category":"Add Category"}),(0,ne.jsx)(V.Z,{}),(0,ne.jsx)(M.Z,{sx:{p:3},children:(0,ne.jsx)(y.ZP,{container:!0,spacing:$.dv,children:(0,ne.jsx)(y.ZP,{item:!0,xs:12,children:(0,ne.jsx)(C.Z,(0,a.Z)((0,a.Z)({fullWidth:!0,label:"Name"},v("name")),{},{error:Boolean(f.name&&p.name),helperText:f.name&&p.name}))})})}),(0,ne.jsx)(U.Z,{sx:{p:3},children:(0,ne.jsxs)(y.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,ne.jsx)(y.ZP,{item:!0,children:!u&&(0,ne.jsx)(j.Z,{title:"Delete Category",children:(0,ne.jsx)(g.Z,{onClick:function(){return i(null===n||void 0===n?void 0:n.id)},size:"large",children:(0,ne.jsx)(_.Z,{color:"error"})})})}),(0,ne.jsx)(y.ZP,{item:!0,children:(0,ne.jsxs)(G.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,ne.jsx)(Q.Z,{type:"button",variant:"outlined",onClick:d,children:"Cancel"}),(0,ne.jsx)(Q.Z,{type:"submit",variant:"contained",disabled:Z,children:n?"Edit":"Add"})]})})]})})]})})})};function ie(e,n,t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var i=e[t];return!0===e[t]?i=1:!1===e[t]&&(i=0),r<i?-1:r>i?1:0}var ae=function(e,n){return"desc"===e?function(e,t){return ie(e,t,n)}:function(e,t){return-ie(e,t,n)}};function se(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var ce=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Category Name",align:"left"}];function oe(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,i=e.numSelected,a=e.rowCount,s=e.onRequestSort,c=e.selected;return(0,ne.jsxs)(d.Z,{children:[(0,ne.jsx)(u.Z,{children:i>0&&(0,ne.jsx)(h.Z,{padding:"none",colSpan:8,children:(0,ne.jsx)(le,{numSelected:c.length})})}),(0,ne.jsxs)(u.Z,{children:[(0,ne.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,ne.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<a,checked:a>0&&i===a,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),ce.map((function(e){return(0,ne.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,ne.jsxs)(p.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){s(e,n)}),children:[e.label,r===e.id?(0,ne.jsx)(f.Z,{component:"span",sx:D.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})]})}var le=function(e){var n=e.numSelected;return(0,ne.jsxs)(m.Z,{sx:(0,a.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,ne.jsxs)(Z.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,ne.jsx)(Z.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,ne.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,ne.jsx)(j.Z,{title:"Delete",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(_.Z,{fontSize:"small"})})})]})},de=function(){var e=(0,l.Z)(),n=(0,E.I0)(),t=o.useState("asc"),s=(0,i.Z)(t,2),d=s[0],p=s[1],f=o.useState("calories"),m=(0,i.Z)(f,2),D=m[0],_=m[1],W=o.useState([]),B=(0,i.Z)(W,2),H=B[0],V=B[1],M=o.useState(0),U=(0,i.Z)(M,2),G=U[0],Q=U[1],J=o.useState(5),K=(0,i.Z)(J,2),X=K[0],Y=K[1],$=o.useState(""),ee=(0,i.Z)($,2),te=ee[0],ie=ee[1],ce=(0,o.useState)(null),le=(0,i.Z)(ce,2),de=le[0],ue=le[1],he=o.useState(!1),xe=(0,i.Z)(he,2),pe=xe[0],fe=xe[1],me=function(){fe(!1)},Ze=o.useState([]),je=(0,i.Z)(Ze,2),ge=je[0],ve=je[1],ye=(0,E.v9)((function(e){return console.log(e),e.venueCategory})).venueCategories;o.useEffect((function(){n((0,T.fQ)())}),[n]);var Ce=function(e,n){var t=e;if(ie(t||""),t){var r=n.filter((function(e){var n=!0,r=!1;return["name","status"].forEach((function(n){var i;null!==(i=e[n])&&void 0!==i&&i.toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));ve(r)}else ve(n)};o.useEffect((function(){Ce(te,ye)}),[ye]);var be=G>0?Math.max(0,(1+G)*X-ge.length):0,Se=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n((0,T.LT)(t));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),we=function(){var e=(0,r.Z)(c().mark((function e(t,r){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(0,a.Z)((0,a.Z)({},r),{},{id:t,_method:"put"}),n((0,T.Ss)(i,(function(){}),(function(){}))),fe(!1);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ke=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(fe(!0),ue(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,ne.jsxs)(R.Z,{title:"Category List",content:!1,children:[(0,ne.jsx)(v.Z,{children:(0,ne.jsxs)(y.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,ne.jsx)(y.ZP,{item:!0,xs:12,sm:6,children:(0,ne.jsx)(C.Z,{InputProps:{startAdornment:(0,ne.jsx)(b.Z,{position:"start",children:(0,ne.jsx)(N.Z,{fontSize:"small"})})},onChange:function(e){return Ce(e.target.value,ye)},placeholder:"Search Category",value:te,size:"small"})}),(0,ne.jsxs)(y.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,ne.jsx)(j.Z,{title:"Copy",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(L.Z,{})})}),(0,ne.jsx)(j.Z,{title:"Print",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(F.Z,{})})}),(0,ne.jsx)(j.Z,{title:"Filter",children:(0,ne.jsx)(g.Z,{size:"large",children:(0,ne.jsx)(q.Z,{})})}),(0,ne.jsx)(j.Z,{title:"Add Category",children:(0,ne.jsx)(S.Z,{color:"primary",size:"small",onClick:function(){fe(!0)},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,ne.jsx)(O.Z,{fontSize:"small"})})})]})]})}),(0,ne.jsx)(w.Z,{children:(0,ne.jsxs)(k.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,ne.jsx)(oe,{theme:e,numSelected:H.length,order:d,orderBy:D,onSelectAllClick:function(e){if(e.target.checked)if(H.length>0)V([]);else{var n=ge.map((function(e){return e.name}));V(n)}else V([])},onRequestSort:function(e,n){p(D===n&&"asc"===d?"desc":"asc"),_(n)},rowCount:ge.length,selected:H}),(0,ne.jsxs)(P.Z,{children:[se(ge,ae(d,D)).slice(G*X,G*X+X).map((function(n,t){if("number"===typeof n)return null;var r,i=(r=n.name,-1!==H.indexOf(r)),a="enhanced-table-checkbox-".concat(t);return(0,ne.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,ne.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return function(e,n){var t=H.indexOf(n),r=[];-1===t?r=r.concat(H,n):0===t?r=r.concat(H.slice(1)):t===H.length-1?r=r.concat(H.slice(0,-1)):t>0&&(r=r.concat(H.slice(0,t),H.slice(t+1))),V(r)}(0,n.name)},children:(0,ne.jsx)(x.Z,{color:"primary",checked:i,inputProps:{"aria-labelledby":a}})}),(0,ne.jsx)(h.Z,{align:"center",component:"th",id:a,scope:"row",sx:{cursor:"pointer"},children:(0,ne.jsxs)(Z.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:["#",n.id," "]})}),(0,ne.jsx)(h.Z,{component:"th",id:a,scope:"row",sx:{cursor:"pointer"},children:(0,ne.jsx)(z.Z,{underline:"hover",color:"default",onClick:function(){return ke(n)},sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:n.name})})]},t)})),be>0&&(0,ne.jsx)(u.Z,{style:{height:53*be},children:(0,ne.jsx)(h.Z,{colSpan:6})})]})]})}),(0,ne.jsx)(A.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ge.length,rowsPerPage:X,page:G,onPageChange:function(e,n){Q(n)},onRowsPerPageChange:function(e){Y(parseInt(null===e||void 0===e?void 0:e.target.value,10)),Q(0)}}),(0,ne.jsx)(I.Z,{maxWidth:"sm",fullWidth:!0,onClose:me,open:pe,sx:{"& .MuiDialog-paper":{p:0}},children:pe&&(0,ne.jsx)(re,{category:de,handleCreate:Se,handleUpdate:we,open:pe,handleCloseDialog:me,onCancel:me})})]})}}}]);