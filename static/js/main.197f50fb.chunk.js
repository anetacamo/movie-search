(this.webpackJsonpyoyo=this.webpackJsonpyoyo||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=(a(11),a(5)),o=a(2),u=a.n(o),s=a(1),m=function(e){var t="like fa fa-heart";return e.liked||(t+="-o black"),l.a.createElement("i",{onClick:e.onClick,className:t,"aria-hidden":"true"})},v=function(e){for(var t=[],a=0;a<e.popularity;a++)t.push(l.a.createElement("i",{className:"fa fa-star","aria-hidden":"true",key:a}));return t};function f(e){return l.a.createElement("div",{className:"film-details"},e.movie?l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("span",null,e.movie.title),e.movie.title!==e.movie.original_title?l.a.createElement("span",{className:"red"}," ",e.movie.original_title):null),l.a.createElement(m,{liked:e.movies.some((function(t){return t.id===e.movie.id})),onClick:e.handleClick}),l.a.createElement(v,{popularity:e.movie.popularity/10}),l.a.createElement("span",null," ",e.movie.vote_count," votes"),l.a.createElement("p",null,e.movie.overview),l.a.createElement("p",null,l.a.createElement("b",null,"release date")," ",e.movie.release_date,l.a.createElement("br",null),l.a.createElement("b",null,"original language")," ",e.movie.original_language)):l.a.createElement("p",null))}function d(e){return l.a.createElement("div",{className:"favourite-movies movie-listing"},l.a.createElement("p",null,l.a.createElement("span",{className:"red underlined"},"Your favourite movies")," ",e.moviesList.length),e.moviesList.map((function(t){return l.a.createElement("p",{key:t.id,onClick:function(){return e.handleClick(t)}},t.title)})))}a(13);a(14);i.a.render(l.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),m=o[0],v=o[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),h=E[0],g=E[1],b=Object(n.useState)([]),k=Object(s.a)(b,2),O=k[0],j=k[1],y=Object(n.useState)(null),N=Object(s.a)(y,2),S=N[0],C=N[1],w=Object(n.useState)([]),_=Object(s.a)(w,2),x=_[0],I=_[1];return Object(n.useEffect)((function(){if(0!==h.length){r(!0),v(null);var e=setTimeout((function(){!function(){var e,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("4cb1eeab94f45affe2536f2c684a5c9e","&query=").concat(h)));case 3:return e=a.sent,a.next=6,u.a.awrap(e.json());case 6:t=a.sent,j(t.results),r(!1),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),v("Something went wrong"),r(!1);case 15:case"end":return a.stop()}}),null,null,[[0,11]])}()}),250);return function(){return clearTimeout(e)}}if(j([]),null!==localStorage.getItem("liked")){var t=JSON.parse(localStorage.getItem("liked"));I(t)}}),[h]),l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"search-field",placeholder:"Search for a movie",value:h,onChange:function(e){return g(e.target.value)}}),l.a.createElement("div",{className:"underline"}),l.a.createElement("div",{className:"results movie-listing"},a?l.a.createElement("p",null,"Loading..."):m?l.a.createElement("p",null,m):0!==h.length&&0===O.length?l.a.createElement("p",null,"No movies found"):O.map((function(e){return l.a.createElement("p",{key:e.id,onClick:function(){return C(e)}},e.title)}))),l.a.createElement(f,{movie:S,movies:x,handleClick:function(){return e=S,void I((function(t){if(t.some((function(t){return t.id===e.id})))a=t.filter((function(t){return t.id!==e.id}));else var a=[].concat(Object(c.a)(t),[e]);I(a),localStorage.setItem("liked",JSON.stringify(a))}));var e}}),l.a.createElement(d,{moviesList:x,handleClick:C}))}),null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.197f50fb.chunk.js.map