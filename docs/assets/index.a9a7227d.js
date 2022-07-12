import{r as R,a as N,c as _,b as g,o as d,d as r,e,f as h,g as b,p as x,h as w,F as H,i as q,j as M,k as V,S as E,l as W,t as B,m as z,w as U,n as G,q as K}from"./vendor.0e9570ca.js";const Y=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerpolicy&&(o.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?o.credentials="include":c.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(c){if(c.ep)return;c.ep=!0;const o=s(c);fetch(c.href,o)}};Y();const u=R({user:{},account:{},page:1}),T=window.location.origin.includes("localhost"),P=T?"http://localhost:3000":"",F="",J="",Q="";function m(t,a){if(T)console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...a);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${new Date().toLocaleTimeString()} :: `,...a)}}const p={log(){m("log",arguments)},error(){m("error",arguments)},warn(){m("warn",arguments)},assert(){m("assert",arguments)},trace(){m("trace",arguments)}},y=N.create({baseURL:P,timeout:8e3});class X{switchPage(a){u.page=a}}const Z=new X;var v=(t,a)=>{for(const[s,i]of a)t[s]=i;return t};const ee={name:"App",setup(){return{appState:_(()=>u)}}},ae={class:"computer d-flex justify-content-center"},te={id:"monitor"},se={id:"bezel"},ie={id:"crt",class:"off"},ce=e("div",{class:"scanline"},null,-1),oe={class:"terminal"},ne=b('<div class="bg-white d-flex justify-content-start topbar"><div class="row"><div class="col-4 d-flex"><i class="mdi mdi-apple mdi-24px mx-2"></i><p class="fs-3 my-0 pb-0">Home</p></div><div class="col-4"><p class="fs-3 ps-2 my-0 pb-0">Skills</p></div><div class="col-4"><p class="fs-3 my-0 pb-0">About</p></div></div></div>',1),le={class:"row window-row"},de={class:"col-12"};function re(t,a,s,i,c,o){const n=g("Windows");return d(),r("div",ae,[e("div",te,[e("div",se,[e("div",ie,[ce,e("div",oe,[e("div",null,[ne,e("div",le,[e("div",de,[h(n)])])])])])])])])}var ue=v(ee,[["render",re]]),fe="/WIP-Portfolio/assets/inspire.97f83d7e.png",pe="/WIP-Portfolio/assets/scurvydogs.28836a2e.png",ve="/WIP-Portfolio/assets/herbalist.a2d8fbae.png";const me={setup(){return{}}},S=t=>(x("data-v-41fba9d2"),t=t(),w(),t),_e={class:"container my-5"},ge=S(()=>e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-4 mt-5"},[e("h1",null,"Austin Dye"),e("h4",null,"Software Developer"),e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ratione odio? Vel quaerat adipisci ducimus, vero, accusamus harum animi facilis quod quos similique doloremque et dignissimos optio culpa repellendus voluptate? "),e("div",{class:"btn text-white border btn-success me-4"}," DOWNLOAD RESUME "),e("div",{class:"btn text-white border btn-info"},"CONTACT")]),e("div",{class:"col-md-4 mx-2 mb-5"},[e("div",{class:"border rounded-circle p-3 bg-dark"},[e("img",{class:"rounded-circle w-100 outline shadow-lg",alt:"100x100",src:"https://avatars.githubusercontent.com/u/101369015?v=4","data-holder-rendered":"true"})])])],-1)),he=S(()=>e("div",{class:"row"},[e("div",{class:"col-md-6"},[e("div",{id:"carouselExampleCaptions",class:"carousel slide","data-bs-ride":"carousel"},[e("div",{class:"carousel-indicators"},[e("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),e("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),e("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]),e("div",{class:"carousel-inner rounded"},[e("div",{class:"carousel-item active"},[e("h1",{class:"bg-info text-dark"},"Inspire"),e("img",{src:fe,class:"d-block w-100",alt:"..."})]),e("div",{class:"carousel-item"},[e("h1",{class:"bg-info text-dark"},"Scurvy Dogs"),e("img",{src:pe,class:"d-block w-100",alt:"..."})]),e("div",{class:"carousel-item"},[e("h1",{class:"bg-info text-dark"},"Herbalist Simulator"),e("img",{src:ve,class:"d-block w-100",alt:"..."})])]),e("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev"},[e("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),e("span",{class:"visually-hidden"},"Previous")]),e("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next"},[e("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),e("span",{class:"visually-hidden"},"Next")])]),e("div",{class:"card my-5"},[e("h4",{class:"bg-warning text-dark rounded-top ps-2"},"Projects"),e("ul",null,[e("li",null,"HTML 5"),e("li",null,"CSS 3"),e("li",null,"SCSS"),e("li",null,"BootStrap 5"),e("li",null,"JavaScript"),e("li",null,"Vue.js")])])]),e("div",{class:"col-md-6"},[e("div",{class:"card mb-4"},[e("h4",{class:"bg-warning text-dark rounded-top ps-2"},"Front-End"),e("ul",null,[e("li",null,"HTML 5"),e("li",null,"CSS 3"),e("li",null,"SCSS"),e("li",null,"BootStrap 5"),e("li",null,"JavaScript"),e("li",null,"Vue.js")])]),e("div",{class:"card"},[e("h4",{class:"bg-primary rounded-top ps-2"},"Back-End"),e("ul",null,[e("li",null,"Node.js"),e("li",null,"C#"),e("li",null,".NET"),e("li",null,"Restful APIs"),e("li",null,"mySQL"),e("li",null,"MongoDB")])]),e("div",{class:"card my-4"},[e("h4",{class:"bg-danger rounded-top ps-2"},"Other"),e("ul",null,[e("li",null,"MVCS"),e("li",null,"SCRUM"),e("li",null,"Customer Service"),e("li",null,"Professional Communtcation"),e("li",null,"Windows"),e("li",null,"MacOS")])]),e("div",{class:"card my-4"},[e("h4",{class:"bg-info text-dark rounded-top ps-2"},"Software QA"),e("ul",null,[e("li",null,"Jira"),e("li",null,"Bugzilla"),e("li",null,"X-Code"),e("li",null,"ADB"),e("li",null,"Test Writing"),e("li",null,"VR Testing")])])])],-1)),be=S(()=>e("div",{class:"row"},[e("div",{class:"col-md-6"}),e("div",{class:"col-md-6"}),e("div",{class:"col-md-6"}),e("div",{class:"col-md-6"})],-1)),xe=[ge,he,be];function we(t,a,s,i,c,o){return d(),r("div",_e,xe)}var ye=v(me,[["render",we],["__scopeId","data-v-41fba9d2"]]),Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const ke={setup(){return{}}},Ae={class:"containerr"},Ce=b('<div class="cube" data-v-8ce86d8a><div class="face front d-flex justify-contnet-center" data-v-8ce86d8a><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" data-v-8ce86d8a></div><div class="face back d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid c-badge" src="https://res.cloudinary.com/practicaldev/image/fetch/s--IMy76vSA--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/33/csharp-badge.png" data-v-8ce86d8a></div><div class="face right d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid badgetd w-90 h-99" src="https://www.nicepng.com/png/detail/142-1423886_html5-css3-js-html-css-javascript.png" data-v-8ce86d8a></div><div class="face left d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid badget" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" data-v-8ce86d8a></div><div class="face bottom d-flex justify-content-center p-3" data-v-8ce86d8a><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" data-v-8ce86d8a></div><div class="face top d-flex justify-content-center" data-v-8ce86d8a><img class="img-fluid" src="https://res.cloudinary.com/practicaldev/image/fetch/s--JEjbOLD1--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/23/node-sticker.png" data-v-8ce86d8a></div></div>',1),$e=[Ce];function Ee(t,a,s,i,c,o){return d(),r("div",Ae,$e)}var Te=v(ke,[["render",Ee],["__scopeId","data-v-8ce86d8a"]]),Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});const je={setup(){return{}}},De=t=>(x("data-v-3e11affc"),t=t(),w(),t),Oe=De(()=>e("nav",{class:"navbar navbar-expand-lg bg-dark p-0"},[e("div",{class:"container-fluid"},[e("a",{class:"navbar-brand",href:"#"},[e("i",{class:"mdi mdi-github mdi-36px text-white"})]),e("div",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"},[e("i",{class:"mdi mdi-menu text-white fs-1"})])]),e("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[e("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[e("li",{class:"nav-item"},[e("form",{class:"d-flex",role:"search"},[e("input",{class:"form-control p-0 mt-2 fs-6",type:"search",placeholder:" Search or jump to.. .","aria-label":"Search"})])]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Pull Requests")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Issues")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Marketplace")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link text-white"},"Explore")])]),e("span",null,[e("i",{class:"mdi mdi-bell-outline text-white fs-5 mx-2"}),e("i",{class:"mdi mdi-plus text-white fs-5"},[e("i",{class:"mdi mdi-chevron-down text-white p-0 m-0"})]),e("img",{class:"rounded-circle user-img ms-2",alt:"100x100",src:"https://avatars.githubusercontent.com/u/101369015?v=4","data-holder-rendered":"true"})])])])],-1)),Ie=b('<div class="row p-2 git-font" data-v-3e11affc><div class="col-12" data-v-3e11affc><div class="d-sm none d-md-block d-lg-none" data-v-3e11affc><div class="d-flex" data-v-3e11affc><img class="rounded-circle w-25 h-25" alt="100x100" src="https://avatars.githubusercontent.com/u/101369015?v=4" data-holder-rendered="true" data-v-3e11affc><span class="ms-4" data-v-3e11affc><h5 class="text-start p-0 m-0" data-v-3e11affc>Austin Dye</h5><p class="text-start p-0 m-0" data-v-3e11affc>AustinDye</p></span></div></div></div><div class="col-12 d-flex mb-4 mt-2 profile-nav sticky-top d-none d-md-flex" data-v-3e11affc><div class="container d-flex justify-content-center align-items-baseline overflow-scroll pt-2" data-v-3e11affc><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-book-open-blank-variant d-none d-md-inline" data-v-3e11affc></i>Overview </p><div class="d-flex" data-v-3e11affc><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-book p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Repositories </p></div><p class="bg-dark text-light rounded-pill px-2 py-0" style="min-width:20px;" data-v-3e11affc> 46 </p><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-application-outline p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Projects </p><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-cube-outline p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Packages </p><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-star-outline p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Stars </p></div></div><div class="col-12 d-flex mb-4 mt-2 profile-nav sticky-top d-flex d-md-none" data-v-3e11affc><div class="container d-flex align-items-baseline overflow-scroll pt-2" data-v-3e11affc><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-book-open-blank-variant d-none d-md-inline" data-v-3e11affc></i>Overview </p><div class="d-flex" data-v-3e11affc><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-book p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Repositories </p></div><p class="bg-dark text-light rounded-pill px-2 py-0" style="min-width:20px;" data-v-3e11affc> 46 </p><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-application-outline p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Projects </p><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-cube-outline p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Packages </p><p class="mx-1 p-1 m-0" data-v-3e11affc><i class="mdi mdi-star-outline p-0 m-0 d-none d-md-inline" data-v-3e11affc></i>Stars </p></div></div><div class="col-lg-3 mb-5 ps-5 d-none d-lg-flex" data-v-3e11affc><div class="position-relative profile-img" data-v-3e11affc><div class="position-absolute" data-v-3e11affc><img class="rounded-circle w-100" alt="100x100" src="https://avatars.githubusercontent.com/u/101369015?v=4" data-holder-rendered="true" data-v-3e11affc></div><div class="profile-text" data-v-3e11affc><h1 class="fs-2 m-0 p-0" data-v-3e11affc>Austin Dye</h1><h5 class="m-0 p-0 mb-4" data-v-3e11affc>AustinDye</h5><span class="d-flex" data-v-3e11affc><p data-v-3e11affc><i class="mdi mdi-account-multiple-outline pe-2" data-v-3e11affc></i><b data-v-3e11affc>1</b> follower </p><div class="mdi mdi-circle-small p-1" data-v-3e11affc></div><p data-v-3e11affc><b data-v-3e11affc>4</b> following</p></span><i class="mdi mdi-link-variant pe-2" data-v-3e11affc></i><a class="" data-v-3e11affc>aupredye@gmail.com</a></div></div></div><div class="col-md-8" data-v-3e11affc><div class="row" data-v-3e11affc><div class="col-md-12 my-2" data-v-3e11affc><div class="info-box card p-3 m-0" data-v-3e11affc><p data-v-3e11affc>AustinDye/README.md</p><h1 data-v-3e11affc>Hi there \u{1F44B} My name is Austin Dye</h1><h4 data-v-3e11affc>Male || He/Him || INTP-T</h4><p data-v-3e11affc> Interested in: QA Test Automation || Machine Learning || Virtual Reality / Augemented Reality Technology || Video Game Development </p></div></div><h4 data-v-3e11affc>Pinned</h4><div class="col-md-6 my-2" data-v-3e11affc><div class="card p-3" data-v-3e11affc><span class="d-flex justify-content-between" data-v-3e11affc><a class="d-flex" data-v-3e11affc><i class="mdi mdi-book mx-1" data-v-3e11affc></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-3e11affc>public</p><i class="mdi mdi-dots-grid" data-v-3e11affc></i></span><h6 class="p-1" data-v-3e11affc><i class="mdi mdi-circle text-info" data-v-3e11affc></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-3e11affc><div class="card p-3" data-v-3e11affc><span class="d-flex justify-content-between" data-v-3e11affc><a class="d-flex" data-v-3e11affc><i class="mdi mdi-book mx-1" data-v-3e11affc></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-3e11affc>public</p><i class="mdi mdi-dots-grid" data-v-3e11affc></i></span><h6 class="p-1" data-v-3e11affc><i class="mdi mdi-circle text-info" data-v-3e11affc></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-3e11affc><div class="card p-3" data-v-3e11affc><span class="d-flex justify-content-between" data-v-3e11affc><a class="d-flex" data-v-3e11affc><i class="mdi mdi-book mx-1" data-v-3e11affc></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-3e11affc>public</p><i class="mdi mdi-dots-grid" data-v-3e11affc></i></span><h6 class="p-1" data-v-3e11affc><i class="mdi mdi-circle text-info" data-v-3e11affc></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-3e11affc><div class="card p-3" data-v-3e11affc><span class="d-flex justify-content-between" data-v-3e11affc><a class="d-flex" data-v-3e11affc><i class="mdi mdi-book mx-1" data-v-3e11affc></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-3e11affc>public</p><i class="mdi mdi-dots-grid" data-v-3e11affc></i></span><h6 class="p-1" data-v-3e11affc><i class="mdi mdi-circle text-info" data-v-3e11affc></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-3e11affc><div class="card p-3" data-v-3e11affc><span class="d-flex justify-content-between" data-v-3e11affc><a class="d-flex" data-v-3e11affc><i class="mdi mdi-book mx-1" data-v-3e11affc></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-3e11affc>public</p><i class="mdi mdi-dots-grid" data-v-3e11affc></i></span><h6 class="p-1" data-v-3e11affc><i class="mdi mdi-circle text-info" data-v-3e11affc></i>CSS</h6></div></div><div class="col-md-6 my-2" data-v-3e11affc><div class="card p-3" data-v-3e11affc><span class="d-flex justify-content-between" data-v-3e11affc><a class="d-flex" data-v-3e11affc><i class="mdi mdi-book mx-1" data-v-3e11affc></i>checkpoint-3-real </a><p class="public-bool my-1 fs-6" data-v-3e11affc>public</p><i class="mdi mdi-dots-grid" data-v-3e11affc></i></span><h6 class="p-1" data-v-3e11affc><i class="mdi mdi-circle text-info" data-v-3e11affc></i>CSS</h6></div></div></div></div></div>',1);function Le(t,a,s,i,c,o){return d(),r(H,null,[Oe,Ie],64)}var Re=v(je,[["render",Le],["__scopeId","data-v-3e11affc"]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re});const He="modulepreload",j={},qe="/WIP-Portfolio/",k=function(a,s){return!s||s.length===0?a():Promise.all(s.map(i=>{if(i=`${qe}${i}`,i in j)return;j[i]=!0;const c=i.endsWith(".css"),o=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":He,c||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),c)return new Promise((f,$)=>{n.addEventListener("load",f),n.addEventListener("error",$)})})).then(()=>a())};function Me(t){switch(t){case"./pages/AboutPage.vue":return k(()=>import("./AboutPage.0c7d9a55.js"),["assets/AboutPage.0c7d9a55.js","assets/vendor.0e9570ca.js"]);case"./pages/AccountPage.vue":return k(()=>import("./AccountPage.139fccfb.js"),["assets/AccountPage.139fccfb.js","assets/AccountPage.1d38451d.css","assets/vendor.0e9570ca.js"]);case"./pages/HomePage.vue":return k(()=>import("./HomePage.6a5de366.js"),["assets/HomePage.6a5de366.js","assets/HomePage.31323586.css","assets/vendor.0e9570ca.js"]);default:return new Promise(function(a,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function A(t){return()=>Me(`./pages/${t}.vue`)}const Ve=[{path:"/",name:"Home",component:A("HomePage")},{path:"/about",name:"About",component:A("AboutPage")},{path:"/account",name:"Account",component:A("AccountPage"),beforeEnter:V}],D=q({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:M(),routes:Ve});class We{async getAccount(){try{const a=await y.get("/account");u.account=a.data}catch(a){p.error("HAVE YOU STARTED YOUR SERVER YET???",a)}}}const Be=new We;class ze{static async confirm(a="Are you sure?",s="You won't be able to revert this!",i="warning",c="Yes, delete it!"){try{return!!(await E.fire({title:a,text:s,icon:i,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c})).isConfirmed}catch{return!1}}static toast(a="Warning!",s="warning",i="top-end",c=3e3,o=!0){E.fire({title:a,icon:s,position:i,timer:c,timerProgressBar:o,toast:!0,showConfirmButton:!1})}static error(a){var s;if(a.isAxiosError){const{response:i}=a;this.toast(((s=i.data.error)==null?void 0:s.message)||i.data.message,"error")}else this.toast(a.message||a,"error")}static success(a="Success!"){this.toast(a,"success")}}const Ue={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Ge{constructor(a=!1,s=P){}on(a,s){var i;return(i=this.socket)==null||i.on(a,s.bind(this)),this}onConnected(a){p.log("[SOCKET_CONNECTION]",a),this.connected=!0,this.playback()}onAuthenticated(a){p.log("[SOCKET_AUTHENTICATED]",a),this.authenticated=!0,this.playback()}authenticate(a){var s;(s=this.socket)==null||s.emit(Ue.authenticate,a)}onError(a){p.error("[SOCKET_ERROR]",a)}enqueue(a,s){p.log("[ENQUEING_ACTION]",{action:a,payload:s}),this.queue.push({action:a,payload:s})}playback(){p.log("[SOCKET_PLAYBACK]");const a=[...this.queue];this.queue=[],a.forEach(s=>{this.emit(s.action,s.payload)})}emit(a,s=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(a,s);if(!this.connected)return this.enqueue(a,s);this.socket.emit(a,s)}}class Ke extends Ge{constructor(){super();this.on("error",this.onError)}onError(a){ze.toast(a.message,"error")}}const O=new Ke,l=W({domain:F,clientId:J,audience:Q,useRefreshTokens:!0,onRedirectCallback:t=>{D.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});l.on(l.AUTH_EVENTS.AUTHENTICATED,async function(){y.defaults.headers.authorization=l.bearer,y.interceptors.request.use(Ye),u.user=l.user,await Be.getAccount(),O.authenticate(l.bearer)});async function Ye(t){if(!l.isAuthenticated)return t;const a=l.identity.exp*1e3,s=a<Date.now(),i=a<Date.now()+1e3*60*60*12;return s?await l.loginWithPopup():i&&(await l.getTokenSilently(),y.defaults.headers.authorization=l.bearer,O.authenticate(l.bearer)),t}const Fe={setup(){return{user:_(()=>u.user),account:_(()=>u.account),async login(){l.loginWithPopup()},async logout(){l.logout({returnTo:window.location.origin})}}}},I=t=>(x("data-v-f7b5cf20"),t=t(),w(),t),Je={class:"navbar-text"},Qe={key:1,class:"dropdown my-2 my-lg-0"},Xe={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Ze={key:0},ea=["src"],aa={class:"mx-3 text-success lighten-30"},ta={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},sa=I(()=>e("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),ia=I(()=>e("i",{class:"mdi mdi-logout"},null,-1)),ca=G(" logout "),oa=[ia,ca];function na(t,a,s,i,c,o){const n=g("router-link");return d(),r("span",Je,[i.user.isAuthenticated?(d(),r("div",Qe,[e("div",Xe,[i.account.picture?(d(),r("div",Ze,[e("img",{src:i.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,ea),e("span",aa,B(i.account.name),1)])):z("",!0)]),e("div",ta,[h(n,{to:{name:"Account"}},{default:U(()=>[sa]),_:1}),e("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:a[1]||(a[1]=(...f)=>i.logout&&i.logout(...f))},oa)])])):(d(),r("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:a[0]||(a[0]=(...f)=>i.login&&i.login(...f))}," Login "))])}var la=v(Fe,[["render",na],["__scopeId","data-v-f7b5cf20"]]),da=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:la});const ra={setup(){return{page:_(()=>u.page),switchPage(t){console.log(u.page),Z.switchPage(t)}}}},C=t=>(x("data-v-6d57ec13"),t=t(),w(),t),ua={class:"window",id:"system-window","data-is-open":"data-is-closed"},fa=b('<div class="title-bar" data-v-6d57ec13><button class="close" data-v-6d57ec13><span class="hidden" data-v-6d57ec13>Close</span></button><h1 class="title" data-v-6d57ec13>Austin Dye</h1><button class="resize" data-v-6d57ec13><span class="hidden" data-v-6d57ec13>Resize</span></button></div>',1),pa=C(()=>e("span",null,null,-1)),va=C(()=>e("span",null,"https://github.com/AustinDye",-1)),ma=C(()=>e("span",null,null,-1)),_a=[pa,va,ma],ga={key:0,class:"window_pane p-0"},ha={key:1,class:"window_pane p-0"};function ba(t,a,s,i,c,o){const n=g("GitHub"),f=g("About");return d(),r("div",ua,[fa,e("div",{class:"details-bar",onClick:a[0]||(a[0]=$=>i.switchPage(2))},_a),(i.page=1)?(d(),r("div",ga,[h(n)])):(d(),r("div",ha,[h(f)]))])}var xa=v(ra,[["render",ba],["__scopeId","data-v-6d57ec13"]]),wa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xa});function ya(t){Object.entries({"./components/About.vue":Se,"./components/Cube.vue":Pe,"./components/GitHub.vue":Ne,"./components/Login.vue":da,"./components/Windows.vue":wa}).forEach(([s,i])=>{const c=i.name||s.substr(s.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(c,i.default)})}const L=K(ue);ya(L);L.use(D).mount("#app");export{u as A,v as _};
