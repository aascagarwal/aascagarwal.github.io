"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[982],{65982:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ne}});var r=t(15861),i=t(29439),o=t(1413),s=t(64687),a=t.n(s),l=t(47313),c=t(19860),u=t(23477),d=t(24076),h=t(67478),x=t(44758),p=t(82558),f=t(57829),Z=t(9289),g=t(61113),m=t(61689),v=t(47131),j=t(93405),b=t(9019),S=t(24631),C=t(41727),w=t(42420),y=t(51629),P=t(66835),k=t(57861),R=t(90891),D=t(70024),z=t(97649),A=t(66149),I=t(50282),F=(t(39236),t(33497)),T=t(25823),M=t(49786),N=t(51997),q=t(44289),O=t(94788),B=t(49854),W=t(57983),E=t(83033),L=t(16031),V=t.n(L),_=t(87462),H=t(63366),U=t(83061),G=t(21921),Y=t(17592),J=t(77342),K=t(77430),Q=t(32298);function X(e){return(0,Q.Z)("MuiDialogTitle",e)}var $=(0,K.Z)("MuiDialogTitle",["root"]),ee=t(63909),ne=t(46417),te=["className","id"],re=(0,Y.ZP)(g.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),ie=l.forwardRef((function(e,n){var t=(0,J.Z)({props:e,name:"MuiDialogTitle"}),r=t.className,i=t.id,o=(0,H.Z)(t,te),s=t,a=function(e){var n=e.classes;return(0,G.Z)({root:["root"]},X,n)}(s),c=l.useContext(ee.Z).titleId,u=void 0===c?i:c;return(0,ne.jsx)(re,(0,_.Z)({component:"h2",className:(0,U.Z)(a.root,r),ownerState:s,ref:n,variant:"h6",id:u},o))})),oe=t(19536),se=t(4942);function ae(e){return(0,Q.Z)("MuiDialogContent",e)}(0,K.Z)("MuiDialogContent",["root","dividers"]);var le=["className","dividers"],ce=(0,Y.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.dividers&&n.dividers]}})((function(e){var n=e.theme,t=e.ownerState;return(0,_.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((n.vars||n).palette.divider),borderBottom:"1px solid ".concat((n.vars||n).palette.divider)}:(0,se.Z)({},".".concat($.root," + &"),{paddingTop:0}))})),ue=l.forwardRef((function(e,n){var t=(0,J.Z)({props:e,name:"MuiDialogContent"}),r=t.className,i=t.dividers,o=void 0!==i&&i,s=(0,H.Z)(t,le),a=(0,_.Z)({},t,{dividers:o}),l=function(e){var n=e.classes,t={root:["root",e.dividers&&"dividers"]};return(0,G.Z)(t,ae,n)}(a);return(0,ne.jsx)(ce,(0,_.Z)({className:(0,U.Z)(l.root,r),ownerState:a,ref:n},s))})),de=t(83929),he=t(4117),xe=t(35898),pe=t(69099),fe=t(43394),Ze=t(23658),ge=t(3463),me=t(79429),ve=t(12401),je=t(17551),be=t(70501),Se=t(80614),Ce=t(81195),we=t(19713),ye=(0,Y.ZP)("div")((function(e){var n=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:n.spacing(.5),borderRadius:n.shape.borderRadius,"&:hover":{opacity:.72}}}));function Pe(e){console.log(e);var n=e.setFieldValue,t=(0,l.useState)([]),r=(0,i.Z)(t,2),s=r[0],a=r[1],c=(0,l.useCallback)((function(e){a(e.map((function(e){var n=new FileReader;return n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){var e=n.result;console.log(e)},n.readAsArrayBuffer(e),Object.assign(e,{preview:URL.createObjectURL(e)})}))),n("image",e[0])}),[a,n]),u=(0,Se.uI)({onDrop:c,multiple:!1,noDrag:!0}),d=u.getRootProps,h=u.getInputProps,x=u.isDragActive;return(0,ne.jsxs)(ne.Fragment,{children:[s.map((function(e){var n=e.name,t=e.preview,r=(0,L.isString)(e)?e:n;return(0,ne.jsxs)(f.Z,{sx:{p:0,m:.5,width:64,height:64,borderRadius:.25,overflow:"hidden",position:"relative"},children:[(0,ne.jsx)(be.Z,{variant:"outlined",component:"img",src:(0,L.isString)(e)?e:t,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",borderRadius:1}}),(0,ne.jsx)(f.Z,{sx:{top:6,right:6,position:"absolute"},children:(0,ne.jsx)(v.Z,{size:"small",onClick:function(){return function(e){var n=s.filter((function(n){return n!==e}));a(n)}(e)},sx:{p:"1px",color:"common.white",bgcolor:function(e){return(0,je.Fq)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return(0,je.Fq)(e.palette.grey[900],.48)}}},children:(0,ne.jsx)(Ce.Z,{})})})]},r)})),(0,ne.jsxs)(ye,(0,o.Z)((0,o.Z)({},d()),{},{sx:(0,o.Z)({},x&&{opacity:.72}),children:[(0,ne.jsx)("input",(0,o.Z)({},h())),(0,ne.jsx)(pe.Z,{variant:"outlined",size:"large",sx:{p:2.25},children:(0,ne.jsx)(we.Z,{})})]}))]})}var ke=function(e){return(0,ne.jsx)(f.Z,{sx:{display:"flex"},children:(0,ne.jsx)(Pe,(0,o.Z)({},e))})},Re=function(e,n){var t={name:"",slug:"",status:!0};return e||n?V().merge({},t,e):t},De=function(e){var n=e.category,t=e.range,i=e.handleDelete,s=e.handleCreate,l=e.handleUpdate,u=e.onCancel,d=((0,c.Z)(),!n),h=ge.Ry().shape({name:ge.Z_().max(255).required("Name is required"),slug:ge.Z_().max(255).required("Slug is required")}),x=(0,me.TA)({initialValues:Re(n,t),validationSchema:h,onSubmit:function(){var e=(0,r.Z)(a().mark((function e(t,r){var i,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.resetForm,o=r.setSubmitting;try{c={name:t.name,slug:t.slug,status:t.status,image:t.image,template:!1},n?l(n.id,c):s(c),i(),u(),o(!1)}catch(a){console.error(a)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}),p=x.values,f=x.errors,Z=x.touched,j=x.handleSubmit,C=x.isSubmitting,w=x.getFieldProps,y=x.setFieldValue;return(0,ne.jsx)(me.Hy,{value:x,children:(0,ne.jsx)(fe._,{dateAdapter:Ze.H,children:(0,ne.jsxs)(me.l0,{autoComplete:"off",noValidate:!0,onSubmit:j,children:[(0,ne.jsx)(ie,{children:n?"Edit Category":"Add Category"}),(0,ne.jsx)(oe.Z,{}),(0,ne.jsx)(ue,{sx:{p:3},children:(0,ne.jsxs)(b.ZP,{container:!0,spacing:ve.dv,children:[(0,ne.jsx)(b.ZP,{item:!0,xs:12,children:(0,ne.jsx)(S.Z,(0,o.Z)((0,o.Z)({fullWidth:!0,label:"Name"},w("name")),{},{error:Boolean(Z.name&&f.name),helperText:Z.name&&f.name}))}),(0,ne.jsx)(b.ZP,{item:!0,xs:12,children:(0,ne.jsx)(S.Z,(0,o.Z)((0,o.Z)({fullWidth:!0,label:"Slug"},w("slug")),{},{error:Boolean(Z.slug&&f.slug),helperText:Z.slug&&f.slug}))}),(0,ne.jsx)(b.ZP,{item:!0,xs:12,children:(0,ne.jsxs)(b.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,ne.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,ne.jsx)(g.Z,{variant:"subtitle1",children:"Attachments:"})}),(0,ne.jsx)(b.ZP,{item:!0,xs:12,sm:8,children:(0,ne.jsx)(ke,{attachments:[],setFieldValue:y})})]})}),(0,ne.jsx)(b.ZP,{item:!0,xs:12,children:(0,ne.jsx)(de.Z,{control:(0,ne.jsx)(D.Z,(0,o.Z)({checked:p.status},w("status"))),label:"Active"})})]})}),(0,ne.jsx)(he.Z,{sx:{p:3},children:(0,ne.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,ne.jsx)(b.ZP,{item:!0,children:!d&&(0,ne.jsx)(m.Z,{title:"Delete Category",children:(0,ne.jsx)(v.Z,{onClick:function(){return i(null===n||void 0===n?void 0:n.id)},size:"large",children:(0,ne.jsx)(N.Z,{color:"error"})})})}),(0,ne.jsx)(b.ZP,{item:!0,children:(0,ne.jsxs)(xe.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,ne.jsx)(pe.Z,{type:"button",variant:"outlined",onClick:u,children:"Cancel"}),(0,ne.jsx)(pe.Z,{type:"submit",variant:"contained",disabled:C,children:n?"Edit":"Add"})]})})]})})]})})})};function ze(e,n,t){var r=n[t];!0===n[t]?r=1:!1===n[t]&&(r=0);var i=e[t];return!0===e[t]?i=1:!1===e[t]&&(i=0),r<i?-1:r>i?1:0}var Ae=function(e,n){return"desc"===e?function(e,t){return ze(e,t,n)}:function(e,t){return-ze(e,t,n)}};function Ie(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var Fe=[{id:"name",numeric:!1,label:"Category Name",align:"left"},{id:"slug",numeric:!1,label:"Slug",align:"left"},{id:"status",numeric:!1,label:"Status",align:"center"}];function Te(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,i=e.numSelected,o=e.rowCount,s=e.onRequestSort,a=e.selected;return(0,ne.jsxs)(u.Z,{children:[(0,ne.jsx)(d.Z,{children:i>0&&(0,ne.jsx)(h.Z,{padding:"none",colSpan:8,children:(0,ne.jsx)(Me,{numSelected:a.length})})}),(0,ne.jsxs)(d.Z,{children:[(0,ne.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},children:(0,ne.jsx)(x.Z,{color:"primary",indeterminate:i>0&&i<o,checked:o>0&&i===o,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),Fe.map((function(e){return(0,ne.jsx)(h.Z,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&t,children:(0,ne.jsxs)(p.Z,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){s(e,n)}),children:[e.label,r===e.id?(0,ne.jsx)(f.Z,{component:"span",sx:I.Z,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})]})}var Me=function(e){var n=e.numSelected;return(0,ne.jsxs)(Z.Z,{sx:(0,o.Z)({p:0,pl:1,pr:1},n>0&&{color:function(e){return e.palette.secondary.main}}),children:[n>0?(0,ne.jsxs)(g.Z,{color:"inherit",variant:"h4",children:[n," Selected"]}):(0,ne.jsx)(g.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,ne.jsx)(f.Z,{sx:{flexGrow:1}}),n>0&&(0,ne.jsx)(m.Z,{title:"Delete",children:(0,ne.jsx)(v.Z,{size:"large",children:(0,ne.jsx)(N.Z,{fontSize:"small"})})})]})},Ne=function(){var e=(0,c.Z)(),n=(0,T.I0)(),t=l.useState("asc"),o=(0,i.Z)(t,2),s=o[0],u=o[1],p=l.useState("calories"),f=(0,i.Z)(p,2),Z=f[0],g=f[1],I=l.useState([]),N=(0,i.Z)(I,2),L=N[0],V=N[1],_=l.useState(0),H=(0,i.Z)(_,2),U=H[0],G=H[1],Y=l.useState(5),J=(0,i.Z)(Y,2),K=J[0],Q=J[1],X=l.useState(""),$=(0,i.Z)(X,2),ee=$[0],te=$[1],re=(0,l.useState)(null),ie=(0,i.Z)(re,2),oe=ie[0],se=ie[1],ae=l.useState(!1),le=(0,i.Z)(ae,2),ce=le[0],ue=le[1],de=function(){ue(!1)},he=l.useState([]),xe=(0,i.Z)(he,2),pe=xe[0],fe=xe[1],Ze=(0,T.v9)((function(e){return console.log(e),e.category})).categories;l.useEffect((function(){n((0,M.CP)())}),[n]);var ge=function(e,n){var t=e;if(te(t||""),t){var r=n.filter((function(e){var n=!0,r=!1;return["name","status"].forEach((function(n){var i;null!==(i=e[n])&&void 0!==i&&i.toString().toLowerCase().includes(t.toString().toLowerCase())&&(r=!0)})),r||(n=!1),n}));fe(r)}else fe(n)};l.useEffect((function(){ge(ee,Ze)}),[Ze]);var me=U>0?Math.max(0,(1+U)*K-pe.length):0,ve=function(){var e=(0,r.Z)(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,n((0,M.ri)(r,t.target.checked));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),je=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,n((0,M.i8)(t));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),be=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(ue(!0),se(n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,ne.jsxs)(F.Z,{title:"Category List",content:!1,children:[(0,ne.jsx)(j.Z,{children:(0,ne.jsxs)(b.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,ne.jsx)(b.ZP,{item:!0,xs:12,sm:6,children:(0,ne.jsx)(S.Z,{InputProps:{startAdornment:(0,ne.jsx)(C.Z,{position:"start",children:(0,ne.jsx)(W.Z,{fontSize:"small"})})},onChange:function(e){return ge(e.target.value,Ze)},placeholder:"Search Category",value:ee,size:"small"})}),(0,ne.jsxs)(b.ZP,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[(0,ne.jsx)(m.Z,{title:"Copy",children:(0,ne.jsx)(v.Z,{size:"large",children:(0,ne.jsx)(B.Z,{})})}),(0,ne.jsx)(m.Z,{title:"Print",children:(0,ne.jsx)(v.Z,{size:"large",children:(0,ne.jsx)(O.Z,{})})}),(0,ne.jsx)(m.Z,{title:"Filter",children:(0,ne.jsx)(v.Z,{size:"large",children:(0,ne.jsx)(q.Z,{})})}),(0,ne.jsx)(m.Z,{title:"Add Category",children:(0,ne.jsx)(w.Z,{color:"primary",size:"small",onClick:function(){ue(!0)},sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:(0,ne.jsx)(E.Z,{fontSize:"small"})})})]})]})}),(0,ne.jsx)(y.Z,{children:(0,ne.jsxs)(P.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[(0,ne.jsx)(Te,{theme:e,numSelected:L.length,order:s,orderBy:Z,onSelectAllClick:function(e){if(e.target.checked)if(L.length>0)V([]);else{var n=pe.map((function(e){return e.name}));V(n)}else V([])},onRequestSort:function(e,n){u(Z===n&&"asc"===s?"desc":"asc"),g(n)},rowCount:pe.length,selected:L}),(0,ne.jsxs)(k.Z,{children:[Ie(pe,Ae(s,Z)).slice(U*K,U*K+K).map((function(e,n){if("number"===typeof e)return null;var t,r=(t=e.name,-1!==L.indexOf(t)),i="enhanced-table-checkbox-".concat(n);return(0,ne.jsxs)(d.Z,{hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[(0,ne.jsx)(h.Z,{padding:"checkbox",sx:{pl:3},onClick:function(n){return function(e,n){var t=L.indexOf(n),r=[];-1===t?r=r.concat(L,n):0===t?r=r.concat(L.slice(1)):t===L.length-1?r=r.concat(L.slice(0,-1)):t>0&&(r=r.concat(L.slice(0,t),L.slice(t+1))),V(r)}(0,e.name)},children:(0,ne.jsx)(x.Z,{color:"primary",checked:r,inputProps:{"aria-labelledby":i}})}),(0,ne.jsx)(h.Z,{component:"th",id:i,scope:"row",sx:{cursor:"pointer"},children:(0,ne.jsx)(R.Z,{underline:"hover",color:"default",onClick:function(){return be(e)},sx:{overflow:"hidden",display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap",":hover":{color:"primary.main"},cursor:"pointer"},children:e.name})}),(0,ne.jsx)(h.Z,{children:e.slug}),(0,ne.jsx)(h.Z,{align:"center",children:(0,ne.jsx)(D.Z,{checked:e.status,color:"".concat(e.status?"success":"error"),inputProps:{"aria-label":"controlled"},onChange:function(n,t){ve(n,e),console.log(t)}})})]},n)})),me>0&&(0,ne.jsx)(d.Z,{style:{height:53*me},children:(0,ne.jsx)(h.Z,{colSpan:6})})]})]})}),(0,ne.jsx)(z.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:pe.length,rowsPerPage:K,page:U,onPageChange:function(e,n){G(n)},onRowsPerPageChange:function(e){Q(parseInt(null===e||void 0===e?void 0:e.target.value,10)),G(0)}}),(0,ne.jsx)(A.Z,{maxWidth:"sm",fullWidth:!0,onClose:de,open:ce,sx:{"& .MuiDialog-paper":{p:0}},children:ce&&(0,ne.jsx)(De,{category:oe,handleCreate:je,open:ce,handleCloseDialog:de,onCancel:de})})]})}}}]);