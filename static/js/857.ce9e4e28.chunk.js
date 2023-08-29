"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[857],{44857:function(r,o,n){n.d(o,{Z:function(){return S}});var a=n(4942),t=n(63366),i=n(87462),e=n(47313),l=n(83061),c=function(r){var o=e.useRef({});return e.useEffect((function(){o.current=r})),o.current},s=n(21921);var g=n(77430),v=n(32298);function d(r){return(0,v.Z)("MuiBadge",r)}(0,g.Z)("MuiBadge",["root","badge","invisible"]);var u=n(55229),h=n(46417),m=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],p=e.forwardRef((function(r,o){var n=r.component,a=r.children,e=r.max,l=void 0===e?99:e,g=r.slotProps,v=void 0===g?{}:g,p=r.slots,f=void 0===p?{}:p,b=r.showZero,Z=void 0!==b&&b,O=(0,t.Z)(r,m),x=function(r){var o=r.badgeContent,n=r.invisible,a=void 0!==n&&n,t=r.max,i=void 0===t?99:t,e=r.showZero,l=void 0!==e&&e,s=c({badgeContent:o,max:i}),g=a;!1!==a||0!==o||l||(g=!0);var v=g?s:r,d=v.badgeContent,u=v.max,h=void 0===u?i:u;return{badgeContent:d,invisible:g,max:h,displayValue:d&&Number(d)>h?"".concat(h,"+"):d}}((0,i.Z)({},r,{max:l})),w=x.badgeContent,R=x.max,C=x.displayValue,y=x.invisible,z=(0,i.Z)({},r,{badgeContent:w,invisible:y,max:R,showZero:Z}),S=function(r){var o={root:["root"],badge:["badge",r.invisible&&"invisible"]};return(0,s.Z)(o,d,void 0)}(z),B=n||f.root||"span",P=(0,u.Z)({elementType:B,externalSlotProps:v.root,externalForwardedProps:O,additionalProps:{ref:o},ownerState:z,className:S.root}),N=f.badge||"span",T=(0,u.Z)({elementType:N,externalSlotProps:v.badge,ownerState:z,className:S.badge});return(0,h.jsxs)(B,(0,i.Z)({},P,{children:[a,(0,h.jsx)(N,(0,i.Z)({},T,{children:C}))]}))})),f=p,b=n(17592),Z=n(77342),O=n(34635),x=n(91615);function w(r){return(0,v.Z)("MuiBadge",r)}var R=(0,g.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),C=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],y=(0,b.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(r,o){return o.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),z=(0,b.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(r,o){var n=r.ownerState;return[o.badge,o[n.variant],o["anchorOrigin".concat((0,x.Z)(n.anchorOrigin.vertical)).concat((0,x.Z)(n.anchorOrigin.horizontal)).concat((0,x.Z)(n.overlap))],"default"!==n.color&&o["color".concat((0,x.Z)(n.color))],n.invisible&&o.invisible]}})((function(r){var o=r.theme,n=r.ownerState;return(0,i.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen})},"default"!==n.color&&{backgroundColor:(o.vars||o).palette[n.color].main,color:(o.vars||o).palette[n.color].contrastText},"dot"===n.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(R.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(R.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(R.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(R.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(R.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(R.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(R.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(R.invisible),{transform:"scale(0) translate(-50%, 50%)"}),n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})})})),S=e.forwardRef((function(r,o){var n,a,e,g,v,d,u=(0,Z.Z)({props:r,name:"MuiBadge"}),m=u.anchorOrigin,p=void 0===m?{vertical:"top",horizontal:"right"}:m,b=u.className,R=u.component,S=void 0===R?"span":R,B=u.components,P=void 0===B?{}:B,N=u.componentsProps,T=void 0===N?{}:N,M=u.overlap,k=void 0===M?"rectangular":M,L=u.color,W=void 0===L?"default":L,I=u.invisible,j=void 0!==I&&I,F=u.max,E=u.badgeContent,V=u.slots,_=u.slotProps,A=u.showZero,D=void 0!==A&&A,H=u.variant,q=void 0===H?"standard":H,G=(0,t.Z)(u,C),J=c({anchorOrigin:p,color:W,overlap:k,variant:q}),K=j;!1===j&&(0===E&&!D||null==E&&"dot"!==q)&&(K=!0);var Q,U=K?J:u,X=U.color,Y=void 0===X?W:X,$=U.overlap,rr=void 0===$?k:$,or=U.anchorOrigin,nr=void 0===or?p:or,ar=U.variant,tr=void 0===ar?q:ar,ir=function(r){var o=r.color,n=r.anchorOrigin,a=r.invisible,t=r.overlap,i=r.variant,e=r.classes,l=void 0===e?{}:e,c={root:["root"],badge:["badge",i,a&&"invisible","anchorOrigin".concat((0,x.Z)(n.vertical)).concat((0,x.Z)(n.horizontal)),"anchorOrigin".concat((0,x.Z)(n.vertical)).concat((0,x.Z)(n.horizontal)).concat((0,x.Z)(t)),"overlap".concat((0,x.Z)(t)),"default"!==o&&"color".concat((0,x.Z)(o))]};return(0,s.Z)(c,w,l)}((0,i.Z)({},u,{anchorOrigin:nr,invisible:K,color:Y,overlap:rr,variant:tr}));"dot"!==tr&&(Q=E&&Number(E)>F?"".concat(F,"+"):E);var er=null!=(n=null!=(a=null==V?void 0:V.root)?a:P.Root)?n:y,lr=null!=(e=null!=(g=null==V?void 0:V.badge)?g:P.Badge)?e:z,cr=null!=(v=null==_?void 0:_.root)?v:T.root,sr=null!=(d=null==_?void 0:_.badge)?d:T.badge;return(0,h.jsx)(f,(0,i.Z)({invisible:j,badgeContent:Q,showZero:D,max:F},G,{slots:{root:er,badge:lr},className:(0,l.Z)(null==cr?void 0:cr.className,ir.root,b),slotProps:{root:(0,i.Z)({},cr,(0,O.Z)(er)&&{as:S,ownerState:(0,i.Z)({},null==cr?void 0:cr.ownerState,{anchorOrigin:nr,color:Y,overlap:rr,variant:tr})}),badge:(0,i.Z)({},sr,{className:(0,l.Z)(ir.badge,null==sr?void 0:sr.className)},(0,O.Z)(lr)&&{ownerState:(0,i.Z)({},null==sr?void 0:sr.ownerState,{anchorOrigin:nr,color:Y,overlap:rr,variant:tr})})},ref:o}))}))},34635:function(r,o,n){var a=n(43066);o.Z=function(r){return!r||!(0,a.Z)(r)}}}]);