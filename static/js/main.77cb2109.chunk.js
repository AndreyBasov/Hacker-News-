(this.webpackJsonpstub=this.webpackJsonpstub||[]).push([[0],{39:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=n(9),i=n(10),u=n(36),s=n(11),m=n(7),d=n.n(m),p=n(15),v=n(37),f=n.n(v).a.create({baseURL:"https://hacker-news.firebaseio.com/v0"}),E=n(14),b=Object(l.b)((function(e){return{posts:e.posts}}),{fetchPost:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("/item/".concat(e,".json"));case 2:r=n.sent,a({type:"FETCH_POST",payload:r.data,index:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t,n,c,o,l=e.fetchPost,i=e.userId,u=e.userIndex,s=e.posts;return Object(a.useEffect)((function(){l(i,u)}),[l,i,u]),r.a.createElement("div",{className:"item",key:i},s[u]&&r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description"},r.a.createElement(E.b,{to:"/".concat(u),onClick:function(){window.scrollTo(0,0)}},r.a.createElement("h2",{style:{marginBottom:"10px"}},null===(t=s[u])||void 0===t?void 0:t.title)),r.a.createElement("p",null,r.a.createElement("b",null,"Score: ")," ",null===(n=s[u])||void 0===n?void 0:n.score),r.a.createElement("p",null,r.a.createElement("b",null,"Author: ")," ",null===(c=s[u])||void 0===c?void 0:c.by),r.a.createElement("p",null,r.a.createElement("b",null,"Date and time: "),new Date(1e3*(null===(o=s[u])||void 0===o?void 0:o.time)).toLocaleString()))))})),h=n(2),y=n(18),x=n(38),j=Object(l.b)((function(e){return{comments:e.comments}}),{fetchComment:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.get("/item/".concat(e,".json"));case 2:r=n.sent,a({type:"FETCH_COMMENT",payload:r.data,index:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t,n,c=e.fetchComment,o=e.commentId,l=e.commentIndex,i=e.comments;Object(a.useEffect)((function(){c(o,l)}),[c,o,l]);var u=Object(a.useState)(!1),m=Object(s.a)(u,2),v=m[0],E=m[1],b=Object(a.useState)([]),h=Object(s.a)(b,2),j=h[0],O=h[1],k=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O([]),E(!v),!i[l].kids||v){e.next=19;break}t=Object(x.a)(i[l].kids),e.prev=4,a=d.a.mark((function e(){var t,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.next=3,f.get("/item/".concat(t,".json"));case 3:a=e.sent,r=a.data.text,O((function(e){return[].concat(Object(y.a)(e),[r])}));case 6:case"end":return e.stop()}}),e)})),t.s();case 7:if((n=t.n()).done){e.next=11;break}return e.delegateYield(a(),"t0",9);case 9:e.next=7;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(4),t.e(e.t1);case 16:return e.prev=16,t.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{onClick:k,className:"item",key:o},(null===(t=i[l])||void 0===t?void 0:t.text)&&r.a.createElement("p",{style:{marginTop:"5px"}},v?r.a.createElement("i",{className:"angle down icon"}):r.a.createElement("i",{className:"angle up icon"}),r.a.createElement("b",{style:{cursor:"pointer"}},"Comment ",l,": "),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:null===(n=i[l])||void 0===n?void 0:n.text}})),r.a.createElement("div",{style:{marginLeft:"2rem"}},v&&j.map((function(e,t){return e&&r.a.createElement("span",{key:t,dangerouslySetInnerHTML:{__html:"".concat(t+1,") ").concat(e," <br></br>")}})}))))})),O=Object(l.b)((function(e,t){return{post:e.posts[t.match.params.pageNum]}}),{})((function(e){var t=e.match.params.pageNum,n=e.post,c=Object(a.useState)(!0),o=Object(s.a)(c,2),l=o[0],i=o[1];Object(a.useEffect)((function(){var e=setInterval((function(){i(!l)}),6e4);return function(){clearInterval(e)}}),[l]);var u=function(){var e;return r.a.createElement("div",{style:{paddingBottom:"2rem"}},r.a.createElement(E.b,{to:"/",onClick:function(){window.scrollTo(0,0)}},r.a.createElement("button",{className:"ui red button",style:{}},"Go back")),r.a.createElement("button",{onClick:function(){i(!l)},className:"ui primary button",style:{}},"Reload"),r.a.createElement("div",{className:"ui relaxed divided list"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",{style:{marginBottom:"10px"}},null===n||void 0===n?void 0:n.title),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,r.a.createElement("b",null,"URL: ")," ",r.a.createElement("a",{href:"".concat(null===n||void 0===n?void 0:n.url," ")},null===n||void 0===n?void 0:n.url)),r.a.createElement("p",null,r.a.createElement("b",null,"Number of comments: ")," ",null===n||void 0===n?void 0:n.descendants),r.a.createElement("p",null,r.a.createElement("b",null,"Author: ")," ",null===n||void 0===n?void 0:n.by),r.a.createElement("p",null,r.a.createElement("b",null,"Date and time: "),new Date(1e3*(null===n||void 0===n?void 0:n.time)).toLocaleString())),r.a.createElement("h1",null,"Comment Section"),null===n||void 0===n||null===(e=n.kids)||void 0===e?void 0:e.map((function(e,t){return r.a.createElement(j,{key:e,commentId:e,commentIndex:t})}))))))};return r.a.createElement(h.a,{path:"/"+t,exact:!0,component:u})})),k=Object(l.b)((function(e){return{ids:e.ids}}),{fetchPostIds:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/newstories.json");case 2:n=e.sent,a=n.data.sort((function(e,t){return t>e})).splice(0,100),t({type:"FETCH_IDS",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.fetchPostIds,n=e.ids,c=Object(a.useState)(!0),o=Object(s.a)(c,2),l=o[0],i=o[1];Object(a.useEffect)((function(){t();var e=setInterval((function(){t()}),6e4);return function(){clearInterval(e)}}),[t]);return r.a.createElement(E.a,null,r.a.createElement("h1",{style:{backgroundColor:"#98acf8"}},r.a.createElement("i",{className:"hacker news icon"}),"Hacker News"),r.a.createElement(h.a,{path:"/",exact:!0,component:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return i(!l)},className:"ui primary button",style:{}},"Reload"),r.a.createElement("div",{className:"ui relaxed divided list"},n.map((function(e,t){return r.a.createElement(b,{key:e,userId:e,userIndex:t})}))))}}),r.a.createElement(h.a,{path:"/:pageNum",component:O}))})),g=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(k,null))},w=Object(i.c)({ids:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_IDS":return t.payload;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POST":var n=Object(y.a)(e);return n[t.index]=t.payload,n;default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMMENT":var n=Object(y.a)(e);return n[t.index]=t.payload,n;default:return e}}}),N=Object(i.d)(w,Object(i.a)(u.a));o.a.render(r.a.createElement(l.a,{store:N},r.a.createElement(g,null)),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.77cb2109.chunk.js.map