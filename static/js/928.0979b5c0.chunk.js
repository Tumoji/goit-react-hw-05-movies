"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[928],{490:function(r,e,t){t.d(e,{uV:function(){return f},Y5:function(){return p},Hx:function(){return v},wr:function(){return s},o1:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o={params:{api_key:"72fb4ce318ea231f82c7f71796aa3c6e",language:"en-US"}},s=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/movie/day",o);case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie?query=".concat(e),o);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error('Error searching for "'.concat(e,'":'),r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(e),o);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits?"),o);case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie cast:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews?"),o);case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},928:function(r,e,t){t.r(e),t.d(e,{default:function(){return d}});var n=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(490),i=t(689),p=t(87),f="Movies_moviesContainer__toWeq",v="Movies_movies__09H+E",l="Movies_listItem__73ijX",h="Movies_submitBtn__1PvRE",m=t(184),d=function(){var r=(0,o.useState)(""),e=(0,a.Z)(r,2),t=e[0],c=e[1],d=(0,o.useState)([]),w=(0,a.Z)(d,2),x=w[0],g=w[1],b=(0,i.s0)(),_=(0,p.lr)(),k=(0,a.Z)(_,1)[0];(0,o.useEffect)((function(){var r=k.get("query");r&&(c(r),Z(r))}),[k]);var Z=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.o1)(e);case 3:t=r.sent,g(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),y=function(){var r=(0,n.Z)(u().mark((function r(e){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),t){r.next=3;break}return r.abrupt("return");case 3:b("/movies?query=".concat(t),{state:{from:"search"}});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:f,children:[(0,m.jsxs)("form",{onSubmit:y,children:[(0,m.jsx)("input",{type:"text",value:t,onChange:function(r){return c(r.target.value)},placeholder:"Search for a movie..."}),(0,m.jsx)("button",{type:"submit",className:h,children:"Search"})]}),(0,m.jsx)("ul",{className:v,children:x.map((function(r){return(0,m.jsx)("li",{className:l,children:(0,m.jsx)(p.rU,{to:"/movies/".concat(r.id),state:{from:"/movies",search:t},children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=928.0979b5c0.chunk.js.map