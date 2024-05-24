"use strict";(self.webpackChunk_jandiasnow_frontend=self.webpackChunk_jandiasnow_frontend||[]).push([[435],{78795:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(99291),l=n(17816),i=n(29249),t=n(91258),_=n(47139),r=n(17976);e.default=function(){var s=(0,t.useState)("init"),m=d()(s,2),u=m[0],P=m[1],o=function(){(0,_.flushSync)(function(){P("change")})};return(0,r.jsxs)(a.Z,{children:[u,(0,r.jsx)(l.ZP,{onClick:o,children:"Change"}),(0,r.jsx)(i.Z,{onChange:function(D){return P(D.target.value)},value:u})]})}},7524:function(f,e,n){n.r(e),n.d(e,{LevelContext:function(){return a}});var E=n(91258),d=n(17976),a=(0,E.createContext)(""),l=function(){var t=(0,E.useContext)(a);return(0,d.jsx)(d.Fragment,{children:t})};e.default=function(){return(0,d.jsx)(a.Provider,{value:"context",children:(0,d.jsx)(l,{})})}},54829:function(f,e,n){n.r(e),n.d(e,{TasksProvider:function(){return o},useTasks:function(){return c},useTasksDispatch:function(){return D}});var E=n(48305),d=n.n(E),a=n(26068),l=n.n(a),i=n(99291),t=n(17816),_=n(91258),r=n(17976),s=[{id:0,text:"Philosopher\u2019s Path",done:!0}],m=(0,_.createContext)(s),u=(0,_.createContext)(null),P=function(O,v){switch(v.type){case"changed":return O.map(function(C){return C.id===v.task.id?l()(l()({},v.task),{},{change:(v.task.change||0)+1}):C});default:throw new Error("Unknown action: "+v.type)}},o=function(O){var v=O.children,C=(0,_.useReducer)(P,s),T=d()(C,2),R=T[0],A=T[1];return(0,r.jsx)(m.Provider,{value:R,children:(0,r.jsx)(u.Provider,{value:A,children:v})})},c=function(){return(0,_.useContext)(m)},D=function(){return(0,_.useContext)(u)},h=function(){var O=D(),v=c();return(0,r.jsxs)(i.Z,{direction:"vertical",children:[(0,r.jsx)(t.ZP,{onClick:function(){O({type:"changed",task:v==null?void 0:v[0]})},children:"change"}),(0,r.jsx)("code",{children:JSON.stringify(v)})]})};e.default=function(){return(0,r.jsx)(o,{children:(0,r.jsx)(h,{})})}},10497:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(26068),l=n.n(a),i=n(99291),t=n(17816),_=n(91258),r=n(17976),s=function(P,o){switch(o.type){case"changed":return P.map(function(c){return c.id===o.task.id?l()(l()({},o.task),{},{change:(o.task.change||0)+1}):c});default:throw new Error("Unknown action: "+o.type)}},m=[{id:0,text:"Visit Kafka Museum",done:!0}];e.default=function(){var u=(0,_.useReducer)(s,m),P=d()(u,2),o=P[0],c=P[1];return(0,r.jsxs)(i.Z,{direction:"vertical",children:[(0,r.jsx)(t.ZP,{onClick:function(){c({type:"changed",task:o[0]})},children:"change"}),(0,r.jsx)("code",{children:JSON.stringify(o)})]})}},38379:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(99291),l=n(17816),i=n(91258),t=n(69305),_=n(17976),r=function(u,P){switch(P.type){case"changed":{u[0].id=u[0].id+1;break}default:throw new Error("Unknown action: "+P.type)}},s=[{id:0,text:"Visit Kafka Museum",done:!0}];e.default=function(){var m=(0,t.C)(r,s),u=d()(m,2),P=u[0],o=u[1];return(0,_.jsxs)(a.Z,{direction:"vertical",children:[(0,_.jsx)(l.ZP,{onClick:function(){o({type:"changed"})},children:"change"}),(0,_.jsx)("code",{children:JSON.stringify(P)})]})}},30353:function(f,e,n){n.r(e);var E=n(99291),d=n(29249),a=n(17816),l=n(91258),i=n(17976);e.default=function(){var t=(0,l.useRef)(null),_=function(){var s;t==null||(s=t.current)===null||s===void 0||s.focus()};return(0,i.jsxs)(E.Z,{children:[(0,i.jsx)(d.Z,{ref:t}),(0,i.jsx)(a.ZP,{onClick:_,children:"Focus the input"})]})}},19536:function(f,e,n){n.r(e);var E=n(26068),d=n.n(E),a=n(29249),l=n(99291),i=n(17816),t=n(91258),_=n(17976),r=(0,t.forwardRef)(function(s,m){var u=(0,t.useRef)(null);return(0,t.useImperativeHandle)(m,function(){return{focus:function(){u.current.focus()}}}),(0,_.jsx)(a.Z,d()(d()({},s),{},{ref:u}))});e.default=function(){var s=(0,t.useRef)(null);function m(){s.current.focus()}return(0,_.jsxs)(l.Z,{children:[(0,_.jsx)(r,{ref:s}),(0,_.jsx)(i.ZP,{onClick:m,children:"Focus the input"})]})}},45826:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(99291),l=n(29249),i=n(17816),t=n(91258),_=n(17976);e.default=function(){var r=(0,t.useRef)(null),s=(0,t.useState)([1,2,3]),m=d()(s,2),u=m[0],P=m[1],o=function(){return r.current?r.current:r.current=new Map},c=function(h){var M=o(),O=M.get(h);O.focus()};return(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(a.Z,{children:u.map(function(D){return(0,_.jsx)(l.Z,{placeholder:"my name is ".concat(D),ref:function(M){var O=o();return O.set(D,M),function(){O.delete(D)}}},D)})}),(0,_.jsx)(i.ZP,{onClick:function(){return c(u[1])},children:"Focus Node"})]})}},52757:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(99291),l=n(17816),i=n(91258),t=n(17976);e.default=function(){var _=(0,i.useState)([]),r=d()(_,2),s=r[0],m=r[1],u=(0,i.useState)(1),P=d()(u,2),o=P[0],c=P[1],D=function(M){return new Promise(function(O){setTimeout(function(){O(M)},1e3)})};return(0,i.useEffect)(function(){var h=!1;return D(o).then(function(M){h||m(M)}),function(){h=!0}},[o]),(0,t.jsxs)(a.Z,{children:[o,":",s,(0,t.jsx)(l.ZP,{onClick:function(){c(o+1)},children:"please multi click"})]})}},14521:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(99291),l=n(43998),i=n(17816),t=n(91258),_=n(17976);e.default=function(){var r=(0,t.useState)(0),s=d()(r,2),m=s[0],u=s[1];return(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(l.Z.Text,{children:m}),(0,_.jsx)(i.ZP,{onClick:function(){u(function(o){return o+1}),u(function(o){return o+1}),u(function(o){return o+1})},children:"+3"})]})}},85820:function(f,e,n){n.r(e);var E=n(48305),d=n.n(E),a=n(99291),l=n(29249),i=n(91258),t=n(69305),_=n(17976);e.default=function(){var r=(0,t.x)({meta:{name:"Niki de Saint Phalle"}}),s=d()(r,2),m=s[0],u=s[1];function P(o){u(function(c){c.meta.name=o.target.value})}return(0,_.jsxs)(a.Z,{direction:"vertical",children:[(0,_.jsx)(l.Z,{onChange:P,placeholder:"name",value:m.meta.name}),(0,_.jsx)("p",{children:m.meta.name})]})}},21742:function(f,e,n){n.r(e);var E=n(99291),d=n(91258),a=n(17976),l=function(_){return window.addEventListener("online",_),window.addEventListener("offline",_),function(){window.removeEventListener("online",_),window.removeEventListener("offline",_)}},i=function(){return(0,d.useSyncExternalStore)(l,function(){return navigator.onLine},function(){return!0})};e.default=function(){var t=i();return(0,a.jsx)(E.Z,{children:t&&t.toString()})}}}]);
