(this.webpackJsonpjinga=this.webpackJsonpjinga||[]).push([[0],{13:function(t,e,n){},7:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),o=n(5),s=n(2),r=n(1),i=n(6),u=n.n(i),l=(n(13),n(0)),d=function(){var t=Object(r.useState)(0),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)([]),u=Object(s.a)(i,2),d=u[0],j=u[1],m=Object(r.useState)("idle"),g=Object(s.a)(m,2),f=g[0],p=g[1],O=Object(r.useState)({quote:"",author:"",hashtag:[]}),x=Object(s.a)(O,2),v=x[0],w=x[1],q=Object(r.useState)("https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/data/quotes.json"),y=Object(s.a)(q,1)[0],k=0,C=function(t){return Math.floor(Math.random()*t)};Object(r.useEffect)((function(){y&&function(){var t=Object(o.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p("fetching"),t.next=3,fetch(y);case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,j(n.quotes),p("idle");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().catch(console.log)}),[y]),Object(r.useEffect)((function(){0!==d.length&&(a(C(9)),w(d[C(d.length)]))}),[d]),Object(r.useEffect)((function(){console.log(f)}),[f]);var Q=function(){var t=Object(o.a)(c.a.mark((function t(){var e,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(p("busy"),e=n;e===n;)e=C(9);for(a(e),o=v;o===v;)o=d[C(d.length)];return w(o),t.next=9,new Promise((function(t){return setTimeout(t,400)}));case 9:k=n,p("idle");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"backdrop",style:{backgroundColor:"busy"===f?k:"var(--col-pri-".concat(n,")")},children:[Object(l.jsx)(h,{theme:n,status:f}),Object(l.jsx)(b,{getQuote:Q,quote:v,theme:n,status:f})]})},h=function(t){return Object(l.jsx)("div",{id:"backAnim",style:{backgroundColor:"var(--col-pri-".concat(t.theme,")"),animation:"busy"===t.status?"expand 450ms":"none"}})},b=function(t){var e=Object(l.jsxs)("div",{id:"contQuote",children:[Object(l.jsx)("ul",{id:"hashtags",children:t.quote.hashtag.map((function(t,e){return Object(l.jsxs)("li",{children:["#",t]},e)}))}),Object(l.jsx)("p",{id:"text",children:t.quote.quote}),Object(l.jsxs)("p",{id:"author",children:["-",t.quote.author]})]}),n=Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/img/loading.gif",alt:"loading",className:"large centered"});return Object(l.jsxs)("div",{id:"quote-box",style:{backgroundColor:"var(--col-acc1-".concat(t.theme,")"),color:"var(--col-txt1-".concat(t.theme,")"),animation:"busy"===t.status?window.innerWidth>=769?"bouncy2 400ms":"bouncy 400ms":"none"},children:["idle"!==t.status?n:e,Object(l.jsxs)("div",{id:"contButton",children:[Object(l.jsx)(j,{theme:t.theme,quote:t.quote,status:t.status}),Object(l.jsx)(m,{onClick:t.getQuote,theme:t.theme,status:t.status})]})]})},j=function(t){var e=Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/img/loading.gif",alt:"loading",className:"small"}),n=Object(l.jsx)("i",{className:"fab fa-twitter"}),a=t.quote.hashtag.join(","),c="https://twitter.com/intent/tweet?hashtags=".concat(a,"&related=freecodecamp&text=").concat(encodeURIComponent('"'+t.quote.quote+'" '+t.quote.author));return Object(l.jsx)("a",{id:"tweet-quote",className:"idle"!==t.status?"disableButton":"button",href:"idle"!==t.status?"#":c,target:"_blank",rel:"noreferrer",style:{backgroundColor:"idle"!==t.status?"grey":"var(--col-pri-".concat(t.theme,")"),color:"var(--col-acc2-".concat(t.theme,")")},children:"idle"!==t.status?e:n})},m=function(t){var e=Object(l.jsx)("img",{src:"https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/img/loading.gif",alt:"loading",className:"small"});return Object(l.jsx)("button",{id:"new-quote",className:"idle"!==t.status?"disableButton":"button",onClick:"idle"!==t.status?null:t.onClick,style:{backgroundColor:"idle"!==t.status?"grey":"var(--col-pri-".concat(t.theme,")"),color:"var(--col-acc2-".concat(t.theme,")")},disabled:"idle"!==t.status,children:"idle"!==t.status?e:"New Quote"})};u.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.16a5472a.chunk.js.map