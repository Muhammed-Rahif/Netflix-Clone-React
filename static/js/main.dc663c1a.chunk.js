(this["webpackJsonpreact-netflix-clone"]=this["webpackJsonpreact-netflix-clone"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(32),i=a.n(n),r=(a(41),a(11)),o=a(3),l=a(2),d=a(21),j=(a(42),a(6)),b=a.n(j),u="https://image.tmdb.org/t/p/original",h="https://image.tmdb.org/t/p/w500",m=a(33),p=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3/"}),f=(a(60),a(13)),v=a(0);var O=function(e){var t=e.id,a=void 0===t?"":t,s=e.type,n=void 0===s?"movie":s,i=e.closeFunction,r=Object(c.useState)(),o=Object(l.a)(r,2),d=o[0],j=o[1],b=Object(c.useState)(),h=Object(l.a)(b,2),m=h[0],O=h[1],g=Object(c.useState)([]),x=Object(l.a)(g,2),N=x[0],y=x[1];return Object(c.useEffect)((function(){p.get("".concat(n,"/").concat(a,"?api_key=").concat("2a4afa027d254745d262a88cce34ee48")).then((function(e){O(e.data),y(e.data.genres)})).catch((function(e){alert(e.message)}))}),[n,a]),Object(c.useEffect)((function(){p.get("".concat(n,"/").concat(a,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(0!==e.data.results.length){var t=e.data.results[0];j(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert(e.message)}))}),[a]),Object(v.jsxs)("div",{className:"backdrop-card-wrapper",children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsxs)("div",{className:"inner-backdrop-card",style:{backgroundImage:"url(".concat(u).concat(m?m.backdrop_path:"",")")},children:[Object(v.jsxs)("div",{className:"backdrop-card-content",children:[Object(v.jsxs)("div",{className:"mb-4 d-flex align-items-center justify-content-between",children:[Object(v.jsx)("button",{className:"btn btn-close bg-secondary",onClick:function(){i(null)}}),Object(v.jsxs)("button",{className:"btn play-button mr-1",onClick:function(){document.querySelector(".backdrop-card-wrapper").scrollBy({top:window.innerHeight,left:0,behavior:"smooth"})},children:[Object(v.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(v.jsxs)("button",{className:"btn btn-secondary ",children:[Object(v.jsx)("i",{className:"fas fa-plus"})," Add to Playlist"]})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center",children:[Object(v.jsxs)("h5",{children:["Release Date :"," ",m?m.release_date||m.first_air_date:"Loading.."," ","|"]}),Object(v.jsxs)("h5",{children:["Rating : ",m?m.vote_average:"Loading..","/10"]})]}),Object(v.jsx)("div",{children:N.map((function(e,t){return Object(v.jsx)("span",{className:"badge bg-secondary mr-1",children:e.name},t)}))}),Object(v.jsx)("h2",{className:"text-white",children:m?m.original_title||m.name:"Loading.."}),Object(v.jsx)("p",{className:"mobile-device",children:m?m.overview:"Loading.."})]}),d&&Object(v.jsx)(f.a,{videoId:d,className:"backdrop-card-youtube",opts:{playerVars:{autoplay:1}}})]}),Object(v.jsx)("div",{className:"left-side-shade"}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]})},g=1;var x=function(e){var t=e.cardsArray,a=e.title,s=void 0===a?"Loading..":a,n=e.getNewCardsUrl,i=e.type,r=void 0===i?"movie":i,o=Object(c.useState)(),j=Object(l.a)(o,2),h=j[0],m=j[1],f=Object(c.useState)(),x=Object(l.a)(f,2),N=x[0],y=x[1];Object(c.useEffect)((function(){b()(window).scroll((function(){(b()(window).scrollTop()+b()(window).height())/b()(document).height()*100>89&&w()}))}),[]),Object(c.useEffect)((function(){m(t)}),[t]);var w=function(){g++,p.get(n+g).then((function(e){var t=e.data.results;m((function(e){return[].concat(Object(d.a)(e),Object(d.a)(t))}))}))};return Object(v.jsxs)("div",{className:"video-cards-wrapper",children:[Object(v.jsx)("div",{className:"video-cards-title-wrapper",children:Object(v.jsx)("h2",{children:s})}),N&&Object(v.jsx)(O,{id:N,type:r,closeFunction:y}),Object(v.jsx)("div",{className:"video-card-row",children:h&&h.map((function(e,t){return e.poster_path?Object(v.jsxs)("div",{className:"video-card",onClick:function(){y(e.id)},children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsx)("img",{src:"".concat(u+e.poster_path),alt:e.title||e.name}),Object(v.jsx)("i",{className:"far fa-play-circle video-cards-play-button fa-3x text-white"}),Object(v.jsxs)("div",{className:"video-card-text-wrapper",children:[Object(v.jsx)("h4",{className:"text-white",children:e.title||e.name}),Object(v.jsx)("p",{className:"text-white",children:e.overview.substring(0,120)+"..."})]}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]},t):null}))})]})};var N=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){p.get("movie/upcoming?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(x,{title:n?"Upcoming Movies":"Loading..",cardsArray:n||[],getNewCardsUrl:"movie/upcoming?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page="),type:"movie"})})};var y=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){p.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(x,{cardsArray:n||[],getNewCardsUrl:"discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page="),title:n?"Family Entertainment":"Loading..",type:"movie"})})};a(75);var w=function(e){var t=e.imageUrl,a=e.title,n=e.subtitle,i=e.id,r=Object(c.useState)(),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsxs)("div",{className:"header-banner lozad",style:{backgroundColor:"#222222e6",backgroundImage:"url(".concat(t,")")},children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsxs)("div",{className:"left-inner",children:[Object(v.jsx)("h1",{className:"main-title",children:a}),Object(v.jsx)("h4",{className:"sub-title",children:n}),Object(v.jsxs)("div",{className:"buttons-section",children:[Object(v.jsxs)("button",{className:"btn play-button",onClick:function(){!function(e){p.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(0!==e.data.results.length){var t=e.data.results[0];j(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert(e.message)}))}(i)},children:[Object(v.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(v.jsxs)("button",{className:"btn btn-secondary",children:[Object(v.jsx)("i",{className:"fas fa-plus"})," Playlist"]})]})]}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]}),d&&Object(v.jsx)(f.a,{videoId:d,opts:{playerVars:{autoplay:1}},className:"youtube-video"})]})},k=(a(76),a(77),a(16)),_=a.n(k);var S=function(e){var t=e.postersTitle,a=e.postersList,n=Object(c.useState)(),i=Object(l.a)(n,2),r=i[0],o=i[1];Object(c.useEffect)((function(){_()().observe()}));var d,j=function(e){p.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(0!==e.data.results.length){var t=e.data.results[0];o(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert(e.message)}))};return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("div",{className:"posters-title",children:Object(v.jsx)("h3",{children:t})}),Object(v.jsx)("div",{className:"small-device",children:a.length>0&&a.map((function(e,t){return(t+1)%2===0?Object(v.jsxs)("div",{className:"posters-wrapper",children:[Object(v.jsxs)("div",{onClick:function(){j(e.id)},className:"poster-card",children:[Object(v.jsx)("div",{className:"dark-fade-top"}),Object(v.jsx)("img",{className:"img lozad","data-src":h+e.poster_path,style:{backgroundColor:"#222222e6"},alt:e.title}),Object(v.jsx)("div",{className:"play-button-wrapper"}),Object(v.jsxs)("div",{className:"poster-text-wrapper",children:[Object(v.jsx)("h5",{className:"poster-title",children:d.title}),Object(v.jsx)("p",{className:"poster-subtitle",children:d.overview.substring(0,90)+"..."})]}),Object(v.jsx)("div",{className:"dark-fade-bottom"})]}),Object(v.jsxs)("div",{onClick:function(){j(d.id)},className:"poster-card",children:[Object(v.jsx)("div",{className:"dark-fade-top"}),Object(v.jsx)("img",{className:"img lozad","data-src":h+d.poster_path,style:{backgroundColor:"#222222e6"},alt:e.title}),Object(v.jsx)("div",{className:"play-button-wrapper"}),Object(v.jsxs)("div",{className:"poster-text-wrapper",children:[Object(v.jsx)("h5",{className:"poster-title",children:e.title}),Object(v.jsx)("p",{className:"poster-subtitle",children:e.overview.substring(0,90)+"..."})]}),Object(v.jsx)("div",{className:"dark-fade-bottom"})]})]},t):(d=e,null)}))}),Object(v.jsx)("div",{className:"posters-wrapper large-device",children:a.length>0&&a.map((function(e,t){return Object(v.jsxs)("div",{onClick:function(){j(e.id)},className:"poster-card",children:[Object(v.jsx)("div",{className:"dark-fade-top"}),Object(v.jsx)("img",{className:"img lozad","data-src":h+e.poster_path,style:{background:"#222222e6"},alt:e.title}),Object(v.jsx)("div",{className:"play-button-wrapper"}),Object(v.jsxs)("div",{className:"poster-text-wrapper",children:[Object(v.jsx)("h5",{className:"poster-title",children:e.title}),Object(v.jsx)("p",{className:"poster-subtitle",children:e.overview.substring(0,75)+"..."})]}),Object(v.jsx)("div",{className:"dark-fade-bottom"})]},t)}))}),r&&Object(v.jsx)(f.a,{videoId:r,opts:{playerVars:{autoplay:1}},className:"youtube-video"})]})};a(78);var C=function(e){return Object(v.jsxs)("div",{className:"row footer",children:[Object(v.jsx)("div",{className:"footer-shade-top"}),Object(v.jsxs)("div",{className:"footer-content",children:[Object(v.jsx)("img",{className:"footer-netflix-logo",src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"Netflix Clone React made by Rahif"}),Object(v.jsxs)("p",{children:["Netflix Clone React made by ",Object(v.jsx)("a",{href:"https://muhammed-rahif.github.io",rel:"noreferrer",target:"_blank",children:"Muhammed Rahif"})]}),Object(v.jsxs)("p",{className:"footer-copyright",children:["Copyrights @ Muhammed Rahif ",(new Date).getFullYear()]}),Object(v.jsxs)("div",{className:"footer-social-logos",children:[Object(v.jsx)("a",{href:"https://github.com/Muhammed-Rahif",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("i",{className:"fab fa-github"})}),Object(v.jsx)("a",{href:"https://muhammed-rahif.github.io",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("i",{className:"fas fa-user-circle"})}),Object(v.jsx)("a",{href:"https://www.instagram.com/_.raifu.op_/",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("i",{className:"fab fa-instagram"})}),Object(v.jsx)("a",{href:"mailto:rahifpalliyalil@gmail.com",children:Object(v.jsx)("i",{className:"fas fa-envelope"})})]})]})]})};var L=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(c.useState)(),b=Object(l.a)(j,2),h=b[0],m=b[1],f=Object(c.useState)(),O=Object(l.a)(f,2),g=O[0],x=O[1],N=Object(c.useState)(),y=Object(l.a)(N,2),k=y[0],L=y[1],T=Object(c.useState)(),E=Object(l.a)(T,2),F=E[0],U=E[1],R=Object(c.useState)(),z=Object(l.a)(R,2),M=z[0],B=z[1],I=Object(c.useState)(),A=Object(l.a)(I,2),P=A[0],Y=A[1],q=Object(c.useState)(),W=Object(l.a)(q,2),J=W[0],K=W[1];return Object(c.useEffect)((function(){_()().observe(),p.get("trending/all/day?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){var t=e.data.results;n(t.slice(0,8))})),p.get("movie/popular?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page=1")).then((function(e){var t=e.data.results;d(t.slice(0,8))})),p.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=28")).then((function(e){var t=e.data.results;K(t[Math.floor(Math.random()*t.length)]),m(t.slice(0,8))})),p.get("discover/tv?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_networks=213")).then((function(e){var t=e.data.results;L(t.slice(0,8))})),p.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=35")).then((function(e){var t=e.data.results;x(t.slice(0,8))})),p.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=27")).then((function(e){var t=e.data.results;U(t.slice(0,8))})),p.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10749")).then((function(e){var t=e.data.results;B(t.slice(0,8))})),p.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751")).then((function(e){var t=e.data.results;Y(t.slice(0,8))}))}),[]),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(w,{title:J?J.title:"Loading..",subtitle:J?J.overview:"Loading..",imageUrl:J?u+J.backdrop_path:"",id:J?J.id:""}),Object(v.jsx)(S,{postersTitle:s?"Trending on Netflix":"",postersList:s||[]}),Object(v.jsx)(S,{postersTitle:o?"Popular on Netflix":"",postersList:o||[]}),Object(v.jsx)(S,{postersTitle:k?"Orignials on Netflix":"",postersList:k||[]}),Object(v.jsx)(S,{postersTitle:F?"Horror Films":"",postersList:F||[]}),Object(v.jsx)(S,{postersTitle:M?"Romance Movies":"",postersList:M||[]}),Object(v.jsx)(S,{postersTitle:g?"Comedy Movies":"",postersList:g||[]}),Object(v.jsx)(S,{postersTitle:h?"Action Films":"",postersList:h||[]}),Object(v.jsx)(S,{postersTitle:P?"Family Entertainment":"",postersList:P||[]}),Object(v.jsx)(C,{})]})};a(79);var T=function(e){return Object(v.jsx)("div",{className:"row h-100",children:Object(v.jsxs)("div",{className:"content",style:{backgroundImage:"url('https://i.picsum.photos/id/957/1920/1080.jpg?hmac=j6IpszzgaWjKITEaLB7QiwR-han900vlNJ5vfezaGQE')"},children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsx)("h1",{className:"main-title-404 mb-4",children:"Lost your way ?"}),Object(v.jsx)("h4",{children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),Object(v.jsx)(r.b,{to:"/",children:Object(v.jsx)("button",{className:"btn mt-3",children:"Netflix Home"})}),Object(v.jsx)("div",{className:"error-code mt-3",children:Object(v.jsx)("h3",{children:"Error code 404 : Not Found"})}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]})})};a(83);var E=function(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),d=Object(l.a)(i,2),j=d[0],u=d[1],h=Object(o.f)();return Object(c.useEffect)((function(){window.onscroll=function(){0!==window.pageYOffset?b()("nav").css({"line-height":"0.3"}):b()("nav").css({"line-height":"1.5"})},window.innerWidth>400?b()(".search,.search-input").hover((function(){b()(".search-input").css({width:"18rem",padding:".3rem"}),b()(".search-input").focus()}),(function(){Boolean(b()(".search-input").val())||b()(".search-input").css({width:"0rem",padding:"0rem"})})):b()(".search").click((function(){n((function(e){return!e}))}))}),[]),Object(c.useEffect)((function(){s?(b()(".search-input").focus(),b()(".search-input").css({width:"18rem",padding:".3rem"})):b()(".search-input").css({width:"0rem",padding:"0rem"})}),[s]),Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-black fixed-top",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)(r.b,{className:"navbar-brand",to:"/",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"Netflix",width:"124"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link",to:"/top-rated",children:"Top Rated"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link",to:"/upcoming-movies",children:"Upcoming Movies"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/trending-shows",children:"Trending Shows"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link",to:"/family-entertainment",children:"Family Entertainment"})})]})}),Object(v.jsxs)("div",{className:"ml-auto text-white d-flex align-items-center justify-content-center",children:[Object(v.jsx)("button",{className:"navbar-toggler mr-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("i",{className:"fas fa-search fa-lg search"}),Object(v.jsx)("input",{type:"text",className:"search-input",placeholder:" Movies, TV Shows...",onChange:function(e){var t;t=e.target.value,u(t),h.push("/search?query="+t)},value:j})]})]})})};var F=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){p.get("trending/tv/week?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(x,{cardsArray:n||[],getNewCardsUrl:"trending/tv/week?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&page="),title:n?"Trending Shows on Netflix":"Loading..",type:"tv"})})};var U=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){p.get("movie/top_rated?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(x,{cardsArray:n||[],getNewCardsUrl:"movie/top_rated?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page="),title:n?"Top Rated on Netflix":"Loading..",type:"movie"})})};var R=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("query");i(e)})),Object(c.useEffect)((function(){n&&p.get("search/movie?query=".concat(n,"&api_key=").concat("2a4afa027d254745d262a88cce34ee48","&page=1")).then((function(e){var t=e.data.results;j(t)}))}),[n]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(x,{title:n?"Searching for '".concat(n,"'"):"Search something..!",cardsArray:d||[],getNewCardsUrl:"search/movie?query=".concat(n,"&api_key=").concat("2a4afa027d254745d262a88cce34ee48","&page="),type:"movie"})})};var z=function(){return Object(c.useEffect)((function(){window.onbeforeunload=function(){return"Hey, are you sure you want to leave? Think of the new trailers !"}})),Object(v.jsxs)(r.a,{basename:"/Netflix-Clone",children:[Object(v.jsx)(E,{}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(v.jsx)(o.a,{path:"/upcoming-movies",component:N}),Object(v.jsx)(o.a,{path:"/top-rated",component:U}),Object(v.jsx)(o.a,{path:"/trending-shows",component:F}),Object(v.jsx)(o.a,{path:"/family-entertainment",component:y}),Object(v.jsx)(o.a,{path:"/search",component:R}),Object(v.jsx)(o.a,{path:"",component:T})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),M()}},[[84,1,2]]]);
//# sourceMappingURL=main.dc663c1a.chunk.js.map