"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[7726],{11146:function(e,t,n){n.d(t,{Z:function(){return h}});n(47313);var r=n(19860),a=n(94469),i=n(33604),o=n(96467),c=n(97762),l=n(61113),s=n(4117),d=n(24193),u=n(46417);function h(e){var t=e.open,n=void 0!==t&&t,h=e.setOpen,p=e.onConfirm,x=e.onCancel,m=(e.item,(0,r.Z)());return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.Z,{open:n,onClose:function(){h(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{id:"alert-dialog-title",children:"Confirm Action"}),(0,u.jsx)(o.Z,{children:(0,u.jsx)(c.Z,{id:"alert-dialog-description",children:(0,u.jsx)(l.Z,{variant:"body2",component:"span",children:"Are you sure you want to proceed with the action"})})}),(0,u.jsxs)(s.Z,{sx:{pr:2.5},children:[(0,u.jsx)(d.Z,{sx:{color:m.palette.error.dark,borderColor:m.palette.error.dark},onClick:p,color:"secondary",children:"Delete"}),(0,u.jsx)(d.Z,{variant:"contained",size:"small",onClick:x,autoFocus:!0,children:"Cancel"})]})]})})})}},97726:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var r=n(15861),a=n(29439),i=n(1413),o=n(64687),c=n.n(o),l=n(47313),s=n(19860),d=n(23477),u=n(24076),h=n(67478),p=n(44758),x=n(82558),m=n(57829),f=n(61113),v=n(9289),g=n(61689),Z=n(47131),j=n(93405),b=n(9019),S=n(24631),k=n(41727),w=n(42420),y=n(51629),C=n(66835),z=n(57861),P=n(90891),T=n(70024),R=n(79601),_=n(51405),E=n(62323),A=n(50282),O=n(50301),M=n(94469),B=n(33604),I=n(96467),D=n(83929),F=n(4117),N=n(24193),q=n(12401),W=n(66182),L=n(3463),V=n(79429),H=n(717),U=n(85554),X=n(5866),G=n(46417),J=[{value:"percent",label:"Percentage"},{value:"fixed",label:"Fixed"}],Q=[{value:"inclusive",label:"Inclusive"},{value:"exclusive",label:"Exclusive"}],$=(0,l.forwardRef)((function(e,t){return(0,G.jsx)(O.Z,(0,i.Z)({direction:"left",ref:t},e))})),K=function(e){var t=e.open,n=e.handleCloseDialog,o=e.editingTax,s=(0,U.I0)(),d=(0,l.useState)(0),u=(0,a.Z)(d,2),h=u[0],p=u[1],x=(0,l.useRef)((function(){}));(0,l.useEffect)((function(){x.current=function(){if(h>100)p(0);else{var e=10*Math.random();p(h+e)}}})),(0,l.useEffect)((function(){var e=setInterval((function(){x.current()}),500);return function(){clearInterval(e)}}),[]);var f=function(e){n(),s((0,X.ss)({open:!0,message:"Tax Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!1}))},v=function(){var e=(0,r.Z)(c().mark((function e(t,n,r,a,i){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n,!0,!0);case 2:i(n,t[n].join(", "));case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,a,i){return e.apply(this,arguments)}}(),g=function(e){var t=e.setFieldTouched,n=void 0===t?null:t,r=e.setErrors,a=void 0===r?null:r,i=e.setFieldError,o=void 0===i?null:i;return function(e){var t;if(null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.errors){var r,i=null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.errors;Object.keys(i).forEach((function(e){v(i,e,n,a,o)}))}}};return(0,G.jsx)(M.Z,{open:t,TransitionComponent:$,keepMounted:!0,onClose:n,sx:{"&>div:nth-of-type(3)":{justifyContent:"flex-end","&>div":{m:0,borderRadius:"0px",maxWidth:450,maxHeight:"100%"}}},children:t&&(0,G.jsx)(V.J9,{initialValues:(0,i.Z)({title:"",rate_type:"percent",rate:"",net_price:"exclusive",status:!0,admin_tax:!1},o),enableReinitialize:!0,validationSchema:L.Ry().shape({title:L.Z_().required("Title is required"),rate:L.Rx().moreThan(0,"Rate should be greater than zero").required("Rate is required").when("rate_type",(function(e,t){return"percent"===e?t.max(100,"Rate % should be less than 100"):t}))}),onSubmit:function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a,o,l,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,n.setStatus,n.setSubmitting,a=n.setFieldTouched,o=n.setFieldError,l=(0,i.Z)({},t),console.log(t),d={setFieldTouched:a,setErrors:r,setFieldError:o};try{l.id?(l._method="put",s((0,H.We)(l,f,g(d)))):l.id||s((0,H.OE)(l,f,g(d)))}catch(c){s((0,X.ss)({open:!0,message:"An Error Occured",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},close:!1})),console.error(c)}case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,r=e.setFieldValue,a=e.handleBlur,i=e.handleChange,o=e.handleSubmit,c=e.isSubmitting,l=e.touched,s=e.values;return(0,G.jsxs)("form",{noValidate:!0,onSubmit:o,children:[(0,G.jsx)(B.Z,{children:"".concat(s.id?"Edit":"Add"," Tax")}),(0,G.jsx)(I.Z,{children:(0,G.jsxs)(b.ZP,{container:!0,spacing:q.dv,sx:{mt:.25},children:[(0,G.jsx)(b.ZP,{item:!0,xs:12,children:(0,G.jsx)(S.Z,{id:"tax-title",fullWidth:!0,label:"Enter Tax Title*",name:"title",value:s.title,onBlur:a,onChange:i,error:Boolean(l.title&&t.title),helperText:l.title&&t.title})}),(0,G.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,G.jsx)(S.Z,{id:"standard-select-rate-type",name:"rate_type",select:!0,label:"Select Rate Type*",value:s.rate_type,fullWidth:!0,onBlur:a,onChange:i,children:J.map((function(e){return(0,G.jsx)(_.Z,{value:e.value,children:e.label},e.value)}))})}),(0,G.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,G.jsx)(S.Z,{label:"Rate (".concat("percent"===s.rate_type?"%":"\u20b9",")"),id:"tax-rate",name:"rate",type:"number",value:s.rate,onBlur:a,onChange:i,InputProps:{startAdornment:"percent"===s.rate_type?(0,G.jsx)(k.Z,{position:"start",children:"%"}):null},error:Boolean(l.rate&&t.rate),helperText:l.rate&&t.rate})}),(0,G.jsx)(b.ZP,{item:!0,xs:12,children:(0,G.jsx)(S.Z,{id:"standard-select-net-price",name:"net_price",select:!0,label:"Net Price Incl/Excl",value:s.net_price,fullWidth:!0,onBlur:a,onChange:i,children:Q.map((function(e){return(0,G.jsx)(_.Z,{value:e.value,children:e.label},e.value)}))})}),(0,G.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,G.jsx)(D.Z,{control:(0,G.jsx)(T.Z,{checked:s.status||!1,name:"status",onChange:function(e){return r("status",e.target.checked)}}),label:"Active"})}),(0,G.jsx)(b.ZP,{item:!0,md:6,xs:12,children:(0,G.jsx)(D.Z,{control:(0,G.jsx)(T.Z,{checked:s.admin_tax||!1,name:"admin_tax",onChange:function(e){return r("admin_tax",e.target.checked)}}),label:"Admin Tax?"})})]})}),(0,G.jsxs)(F.Z,{children:[(0,G.jsx)(W.Z,{children:(0,G.jsx)(N.Z,{color:"secondary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"".concat(s.id?"Update":"Create")})}),(0,G.jsx)(W.Z,{children:(0,G.jsx)(N.Z,{variant:"text",color:"error",onClick:n,children:"Close"})})]}),(0,G.jsx)(m.Z,{sx:{mt:2}})]})}})})},Y=n(33497),ee=n(25823),te=n(51997),ne=n(44289),re=n(94788),ae=n(49854),ie=n(57983),oe=n(83033),ce=n(38398),le=n(11146);function se(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var de=function(e,t){return"desc"===e?function(e,n){return se(e,n,t)}:function(e,n){return-se(e,n,t)}};function ue(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}var he=[{id:"id",numeric:!0,label:"ID",align:"center"},{id:"name",numeric:!1,label:"Tax Title",align:"left"},{id:"rate_type",numeric:!1,label:"Rate Type",align:"left"},{id:"rate",numeric:!0,label:"Rate",align:"right"},{id:"net_price",numeric:!1,label:"Net Price",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"},{id:"admin_tax",numeric:!1,label:"Admin Tax",align:"center"}];function pe(e){var t=e.onSelectAllClick,n=e.order,r=e.orderBy,a=e.numSelected,i=e.rowCount,o=e.onRequestSort,c=e.theme,l=e.selected;return(0,G.jsx)(d.Z,{children:(0,G.jsxs)(u.Z,{children:[(0,G.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,G.jsx)(p.Z,{color:"primary",indeterminate:a>0&&a<i,checked:i>0&&a===i,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),a>0&&(0,G.jsx)(h.Z,{padding:"none",colSpan:7,children:(0,G.jsx)(xe,{numSelected:l.length})}),a<=0&&he.map((function(e){return(0,G.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&n,children:(0,G.jsxs)(x.Z,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(t=e.id,function(e){o(e,t)}),children:[e.label,r===(null===e||void 0===e?void 0:e.id)?(0,G.jsx)(m.Z,{component:"span",sx:A.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t})),a<=0&&(0,G.jsx)(h.Z,{sortDirection:!1,align:"center",sx:{pr:3},children:(0,G.jsx)(f.Z,{variant:"subtitle1",sx:{color:"dark"===c.palette.mode?"grey.600":"grey.900"},children:"Action"})})]})})}var xe=function(e){var t=e.numSelected;return(0,G.jsxs)(v.Z,{sx:(0,i.Z)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?(0,G.jsxs)(f.Z,{color:"inherit",variant:"h4",children:[t," Selected"]}):(0,G.jsx)(f.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,G.jsx)(m.Z,{sx:{flexGrow:1}}),t>0&&(0,G.jsx)(g.Z,{title:"Delete",children:(0,G.jsx)(Z.Z,{size:"large",children:(0,G.jsx)(te.Z,{fontSize:"small"})})})]})},me=function(){var e=(0,s.Z)(),t=(0,ee.I0)(),n=l.useState(null),r=(0,a.Z)(n,2),i=r[0],o=r[1],c=l.useState(!1),d=(0,a.Z)(c,2),x=d[0],m=d[1],v=function(e){o(e),m(!0)},A=l.useState("asc"),O=(0,a.Z)(A,2),M=O[0],B=O[1],I=l.useState("calories"),D=(0,a.Z)(I,2),F=D[0],N=D[1],q=l.useState([]),W=(0,a.Z)(q,2),L=W[0],V=W[1],U=l.useState(0),J=(0,a.Z)(U,2),Q=J[0],$=J[1],te=l.useState(5),se=(0,a.Z)(te,2),he=se[0],xe=se[1],me=l.useState(""),fe=(0,a.Z)(me,2),ve=fe[0],ge=fe[1],Ze=l.useState([]),je=(0,a.Z)(Ze,2),be=je[0],Se=je[1],ke=(0,ee.v9)((function(e){return e.tax})).taxes,we=l.useState(!1),ye=(0,a.Z)(we,2),Ce=ye[0],ze=ye[1];l.useEffect((function(){t((0,H.fb)())}),[t]),l.useEffect((function(){Se(ke)}),[ke]);var Pe=l.useState(null),Te=(0,a.Z)(Pe,2),Re=Te[0],_e=Te[1],Ee=function(e){_e(null===e||void 0===e?void 0:e.currentTarget)},Ae=function(){_e(null)},Oe=function(){t((0,X.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},message:"Tax Deleted"})),t((0,H.fb)())},Me=function(){t((0,X.ss)({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"error"},message:"An Error Occured"}))},Be=Q>0?Math.max(0,(1+Q)*he-be.length):0;return(0,G.jsxs)(Y.Z,{title:"Tax List",content:!1,children:[(0,G.jsx)(j.Z,{children:(0,G.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,G.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,G.jsx)(S.Z,{InputProps:{startAdornment:(0,G.jsx)(k.Z,{position:"start",children:(0,G.jsx)(ie.Z,{fontSize:"small"})})},onChange:function(e){var t=null===e||void 0===e?void 0:e.target.value;if(ge(t||""),t){var n=be.filter((function(e){var n=!0,r=!1;return["name","category","price","qty","id"].forEach((function(n){e[n].toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));Se(n)}else Se(ke)},placeholder:"Search Tax",value:ve,size:"small"})}),(0,G.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,G.jsx)(g.Z,{title:"Copy",children:(0,G.jsx)(Z.Z,{size:"large",children:(0,G.jsx)(ae.Z,{})})}),(0,G.jsx)(g.Z,{title:"Print",children:(0,G.jsx)(Z.Z,{size:"large",children:(0,G.jsx)(re.Z,{})})}),(0,G.jsx)(g.Z,{title:"Filter",children:(0,G.jsx)(Z.Z,{size:"large",children:(0,G.jsx)(ne.Z,{})})}),(0,G.jsx)(g.Z,{title:"Add Tax",children:(0,G.jsx)(w.Z,{color:"primary",size:"small",onClick:v,sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,G.jsx)(oe.Z,{fontSize:"small"})})}),(0,G.jsx)(K,{open:x,editingTax:i,handleCloseDialog:function(){m(!1),o(null)}})]})]})}),(0,G.jsx)(y.Z,{children:(0,G.jsxs)(C.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,G.jsx)(pe,{numSelected:L.length,order:M,orderBy:F,onSelectAllClick:function(e){if(e.target.checked)if(L.length>0)V([]);else{var t=be.map((function(e){return e.id}));V(t)}else V([])},onRequestSort:function(e,t){B(F===t&&"asc"===M?"desc":"asc"),N(t)},rowCount:be.length,theme:e,selected:L}),(0,G.jsxs)(z.Z,{children:[ue(be,de(M,F)).slice(Q*he,Q*he+he).map((function(n,r){if("number"===typeof n)return null;var a,i=(a=n.id,-1!==L.indexOf(a)),c="enhanced-table-checkbox-".concat(r);return(0,G.jsxs)(u.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,G.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(e){return function(e,t){var n=L.indexOf(t),r=[];-1===n?r=r.concat(L,t):0===n?r=r.concat(L.slice(1)):n===L.length-1?r=r.concat(L.slice(0,-1)):n>0&&(r=r.concat(L.slice(0,n),L.slice(n+1))),V(r)}(0,n.id)},children:(0,G.jsx)(p.Z,{color:"primary",checked:i,inputProps:{"aria-labelledby":c}})}),(0,G.jsx)(h.Z,{align:"center",component:"th",id:c,scope:"row",sx:{cursor:"pointer"},children:(0,G.jsxs)(f.Z,{variant:"subtitle1",sx:{color:"dark"===e.palette.mode?"grey.600":"grey.900"},children:["#",n.id," "]})}),(0,G.jsx)(h.Z,{component:"th",id:c,scope:"row",sx:{cursor:"pointer"},onClick:function(e){return v(n)},children:(0,G.jsx)(P.Z,{underline:"hover",color:"default",sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:n.title})}),(0,G.jsx)(h.Z,{children:n.rate_type}),(0,G.jsx)(h.Z,{align:"right",children:n.rate}),(0,G.jsx)(h.Z,{children:n.net_price}),(0,G.jsx)(h.Z,{align:"center",children:(0,G.jsx)(T.Z,{checked:n.status,color:"".concat(n.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,r){var a={id:n.id,status:e.target.checked,_method:"put"};t((0,H.We)(a,(function(){}),(function(){})))}})}),(0,G.jsx)(h.Z,{align:"center",children:(0,G.jsx)(T.Z,{checked:n.admin_tax,color:"".concat(n.admin_tax?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(e,r){var a={id:n.id,admin_tax:e.target.checked,_method:"put"};t((0,H.We)(a,(function(){}),(function(){})))}})}),(0,G.jsxs)(h.Z,{align:"center",sx:{pr:3},children:[(0,G.jsx)(Z.Z,{onClick:Ee,size:"large","aria-label":"more options",children:(0,G.jsx)(ce.Z,{fontSize:"small","aria-controls":"menu-popular-card-1","aria-haspopup":"true",sx:{color:"grey.500"}})}),(0,G.jsxs)(R.Z,{id:"menu-popular-card-1",anchorEl:Re,keepMounted:!0,open:Boolean(Re),onClose:Ae,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiMenu-paper":{boxShadow:e.customShadows.z1}},children:[(0,G.jsx)(_.Z,{onClick:function(){return function(e){v(e),Ae()}(n)},children:"Edit"}),(0,G.jsx)(_.Z,{onClick:function(){return function(e){Ae(),o(e),ze(!0)}(n)},children:"Delete"})]})]})]},r)})),Be>0&&(0,G.jsx)(u.Z,{style:{height:53*Be},children:(0,G.jsx)(h.Z,{colSpan:6})})]})]})}),(0,G.jsx)(E.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:be.length,rowsPerPage:he,page:Q,onPageChange:function(e,t){$(t)},onRowsPerPageChange:function(e){xe(parseInt(null===e||void 0===e?void 0:e.target.value,10)),$(0)}}),(0,G.jsx)(le.Z,{open:Ce,setOpen:ze,item:i,onConfirm:function(){ze(!1),t((0,H.NQ)(i,Oe,Me))},onCancel:function(){return ze(!1)}})]})}},4117:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(63366),a=n(87462),i=n(47313),o=n(94146),c=n(21921),l=n(17592),s=n(77342),d=n(77430),u=n(32298);function h(e){return(0,u.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var p=n(46417),x=["className","disableSpacing"],m=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),f=i.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiDialogActions"}),i=n.className,l=n.disableSpacing,d=void 0!==l&&l,u=(0,r.Z)(n,x),f=(0,a.Z)({},n,{disableSpacing:d}),v=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(n,h,t)}(f);return(0,p.jsx)(m,(0,a.Z)({className:(0,o.Z)(v.root,i),ownerState:f,ref:t},u))}))},70024:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),a=n(63366),i=n(87462),o=n(47313),c=n(94146),l=n(21921),s=n(17551),d=n(91615),u=n(97423),h=n(77342),p=n(17592),x=n(77430),m=n(32298);function f(e){return(0,m.Z)("MuiSwitch",e)}var v=(0,x.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),g=n(46417),Z=["className","color","edge","size","sx"],j=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,d.Z)(n.edge))],t["size".concat((0,d.Z)(n.size))]]}})((function(e){var t,n=e.ownerState;return(0,i.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8},"end"===n.edge&&{marginRight:-8},"small"===n.size&&(t={width:40,height:24,padding:7},(0,r.Z)(t,"& .".concat(v.thumb),{width:16,height:16}),(0,r.Z)(t,"& .".concat(v.switchBase),(0,r.Z)({padding:4},"&.".concat(v.checked),{transform:"translateX(16px)"})),t))})),b=(0,p.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,r.Z)({},"& .".concat(v.input),t.input),"default"!==n.color&&t["color".concat((0,d.Z)(n.color))]]}})((function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(v.checked),{transform:"translateX(20px)"}),(0,r.Z)(t,"&.".concat(v.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,r.Z)(t,"&.".concat(v.checked," + .").concat(v.track),{opacity:.5}),(0,r.Z)(t,"&.".concat(v.disabled," + .").concat(v.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,r.Z)(t,"& .".concat(v.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,n=e.theme,a=e.ownerState;return(0,i.Z)({"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},(0,r.Z)(t,"&.".concat(v.checked),(0,r.Z)({color:(n.vars||n).palette[a.color].main,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[a.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(v.disabled),{color:n.vars?n.vars.palette.Switch["".concat(a.color,"DisabledColor")]:"".concat("light"===n.palette.mode?(0,s.$n)(n.palette[a.color].main,.62):(0,s._j)(n.palette[a.color].main,.55))})),(0,r.Z)(t,"&.".concat(v.checked," + .").concat(v.track),{backgroundColor:(n.vars||n).palette[a.color].main}),t))})),S=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),k=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),w=o.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiSwitch"}),r=n.className,o=n.color,s=void 0===o?"primary":o,u=n.edge,p=void 0!==u&&u,x=n.size,m=void 0===x?"medium":x,v=n.sx,w=(0,a.Z)(n,Z),y=(0,i.Z)({},n,{color:s,edge:p,size:m}),C=function(e){var t=e.classes,n=e.edge,r=e.size,a=e.color,o=e.checked,c=e.disabled,s={root:["root",n&&"edge".concat((0,d.Z)(n)),"size".concat((0,d.Z)(r))],switchBase:["switchBase","color".concat((0,d.Z)(a)),o&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,l.Z)(s,f,t);return(0,i.Z)({},t,u)}(y),z=(0,g.jsx)(k,{className:C.thumb,ownerState:y});return(0,g.jsxs)(j,{className:(0,c.Z)(C.root,r),sx:v,ownerState:y,children:[(0,g.jsx)(b,(0,i.Z)({type:"checkbox",icon:z,checkedIcon:z,ref:t,ownerState:y},w,{classes:(0,i.Z)({},C,{root:C.switchBase})})),(0,g.jsx)(S,{className:C.track,ownerState:y})]})}))}}]);