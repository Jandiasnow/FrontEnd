"use strict";(self.webpackChunk_jandiasnow_frontend=self.webpackChunk_jandiasnow_frontend||[]).push([[481],{89798:function(D,r,t){t.r(r);var s=t(4502),e=t(88683),d=t(91258),E=t(98423),n=t(17976),a=function(){var v=[{price:100,type:"A"},{price:120,type:"B"},{price:150,type:"C"}],i=new s.w,_=i.advise({data:v});return(0,n.jsx)(e.Z,{justify:"space-around",children:_==null?void 0:_.map(function(l){return(0,n.jsxs)(e.Z,{vertical:!0,children:[(0,n.jsxs)("div",{children:["\u7C7B\u578B\uFF1A",l.type]}),(0,n.jsx)(E.Z,{options:l.spec})]},l.type)})})};r.default=a},50879:function(D,r,t){t.r(r);var s=t(60373),e=t(88683),d=t(75771),E=t(70066),n=t(91258),a=t(17976),u=(0,s.n)(),v=function(){return(0,a.jsx)(e.Z,{gap:"middle",wrap:"wrap",children:Object.keys(u).map(function(_){var l=u[_];return(0,a.jsx)(d.Z,{style:{width:"23%",height:350,overflowY:"auto"},title:l.name,children:(0,a.jsx)(E.Z,{column:1,children:Object.keys(l).map(function(o){return(0,a.jsx)(E.Z.Item,{label:o,children:JSON.stringify(l[o])},o)})})},_)})})};r.default=v},25942:function(D,r,t){t.r(r);var s=t(19138),e=t(70066),d=t(88683),E=t(91258),n=t(17976),a=function(i){var _=i.title,l=i.json;return(0,n.jsx)(e.Z,{column:1,title:_,children:Object.keys(l).map(function(o){return(0,n.jsx)(e.Z.Item,{label:o,children:JSON.stringify(l[o])},o)})})},u=function(){var i,_=new s.Z([{a:1,b:4,c:7},{a:2,b:5,c:8},{a:3,b:6,c:9}]);return(0,n.jsxs)(d.Z,{vertical:!0,children:[(0,n.jsx)(e.Z,{title:"entry json",children:(0,n.jsx)(e.Z.Item,{children:`
        [
          { a: 1, b: 4, c: 7 },
          { a: 2, b: 5, c: 8 },
          { a: 3, b: 6, c: 9 },
        ]
      `})}),(0,n.jsx)(a,{json:_,title:"df"}),(0,n.jsx)(a,{json:(i=_.info())===null||i===void 0?void 0:i[0],title:"df.info().[0]"})]})};r.default=u},423:function(D,r,t){t.r(r);var s=t(98269),e=t(3629),d=t(91258),E=t(17976),n=[{year:"2000",value:1},{year:"2001",value:-1},{year:"2002",value:2},{year:"2003",value:-2},{year:"2004",value:7},{year:"2005",value:3},{year:"2006",value:-3},{year:"2007",value:0},{year:"2008",value:0},{year:"2009",value:1}],a=(0,s.o)(n).insights[0],u=function(){return(0,E.jsx)(e.L,{insightInfo:a,visualizationOptions:{lang:"zh-CN"}})};r.default=u},51540:function(D,r,t){t.r(r);var s=t(98278),e=t(3346),d=t(60474),E=t(91258),n=t(98423),a=t(17976),u=[{month:"2020-01",value:2681567,count:1},{month:"2020-02",value:4137415,count:1234},{month:"2020-03",value:4684506},{month:"2020-04",value:2447301},{month:"2020-05",value:815039},{month:"2020-06",value:1303124}],v={sections:[{paragraphs:[{type:"normal",phrases:[{type:"entity",value:"\u9500\u91CF",metadata:{entityType:"metric_name"}},{type:"text",value:" "},{type:"entity",value:"1.23\u4EBF",metadata:{entityType:"metric_value"}},{type:"text",value:"\uFF0C\u73AF\u6BD4\u6628\u65E5"},{type:"entity",value:"50\u4E07",metadata:{entityType:"delta_value",assessment:"positive"}},{type:"text",value:"\u3002"}],styles:{marginBottom:24}},{customType:"line",value:{type:"view",autoFit:!0,data:u,encode:{x:"month",y:"value"},scale:{x:{range:[0,1]},y:{domainMin:0,nice:!0}},children:[{type:"line",labels:[{text:"value",style:{dx:-10,dy:-12}}]},{type:"point",style:{fill:"white"},tooltip:!1}]}}]}]},i=new s.Q([(0,e.L)({key:"line",render:function(o){return o!=null&&o.value?(0,a.jsx)(n.Z,{height:300,options:o.value,width:900}):null}})]),_=function(){return(0,a.jsx)(d.mg,{pluginManager:i,spec:v})};r.default=_},98423:function(D,r,t){var s=t(93759),e=t(91258),d=t(17976),E=function(a){var u=(0,e.useRef)(null),v=(0,e.useRef)(),i=a.options,_=a.width,l=a.height;return(0,e.useEffect)(function(){v.current||!u.current||(v.current=new s.kL({container:u.current,autoFit:!0,width:_||200,height:l||200}),!(!v.current&&!i)&&(v.current.options(i),v.current.render()))},[v,i,u]),(0,d.jsx)("div",{ref:u})};r.Z=E}}]);