(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,n){e.exports=n(56)},31:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),c=n.n(l),o=n(16),u=n(10);n(31);var i=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var m=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},s=n(11),E=n.n(s),f=function(){return E.a.get("/api/books")},d=function(e){return E.a.get("/api/books/"+e)},h=function(e){return E.a.delete("/api/books/"+e)},b=function(e){return E.a.post("/api/books",e)},p=n(8);function v(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function g(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function j(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(50);function k(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function O(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function y(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function z(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var S=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)({}),s=Object(u.a)(c,2),E=s[0],d=s[1];function S(){f().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}function x(e){var t=e.target,n=t.name,a=t.value;d(Object(o.a)(Object(o.a)({},E),{},{[n]:a}))}return Object(a.useEffect)((function(){S()}),[]),r.a.createElement(v,{fluid:!0},r.a.createElement(g,null,r.a.createElement(j,{size:"md-6"},r.a.createElement(m,null,r.a.createElement("h1",null,"What Books Should I Read?")),r.a.createElement("form",null,r.a.createElement(O,{onChange:x,name:"title",placeholder:"Title (required)"}),r.a.createElement(O,{onChange:x,name:"author",placeholder:"Author (required)"}),r.a.createElement(y,{onChange:x,name:"synopsis",placeholder:"Synopsis (Optional)"}),r.a.createElement(z,{disabled:!(E.author&&E.title),onClick:function(e){e.preventDefault(),E.title&&E.author&&b({title:E.title,author:E.author,synopsis:E.synopsis}).then((function(e){return S()})).catch((function(e){return console.log(e)}))}},"Submit Book"))),r.a.createElement(j,{size:"md-6 sm-12"},r.a.createElement(m,null,r.a.createElement("h1",null,"Books On My List")),n.length?r.a.createElement(k,null,n.map((function(e){return r.a.createElement(N,{key:e._id},r.a.createElement(p.b,{to:"/books/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(i,{onClick:function(){return t=e._id,void h(t).then((function(e){return S()})).catch((function(e){return console.log(e)}));var t}}))}))):r.a.createElement("h3",null,"No Results to Display"))))},x=n(1);var B=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(x.f)().id;return Object(a.useEffect)((function(){d(c).then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(v,{fluid:!0},r.a.createElement(g,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(m,null,r.a.createElement("h1",null,n.title," by ",n.author)))),r.a.createElement(g,null,r.a.createElement(j,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Synopsis"),r.a.createElement("p",null,n.synopsis)))),r.a.createElement(g,null,r.a.createElement(j,{size:"md-2"},r.a.createElement(p.b,{to:"/"},"\u2190 Back to Authors"))))};var w=function(){return r.a.createElement(v,{fluid:!0},r.a.createElement(g,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(m,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var C=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var R=function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/books/:id"},r.a.createElement(B,null)),r.a.createElement(x.a,{exact:!0,path:["/","/books"]},r.a.createElement(S,null)),r.a.createElement(x.a,{path:"/*"},r.a.createElement(w,null)))))};c.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c111c760.chunk.js.map