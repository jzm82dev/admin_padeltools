"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8795],{9533:(M,f,l)=>{l.d(f,{s:()=>c});var n=l(6382),e=l(4650),h=l(27),b=l(6519),m=l(866),r=l(6895),g=l(2466),u=l(9183);function i(_,v){1&_&&(e.TgZ(0,"div",37)(1,"div",38)(2,"div",39),e._UZ(3,"span",40)(4,"span",40)(5,"span",40)(6,"span",40),e.qZA()()())}const t=function(){return["/cookie-policy"]},a=function(){return["/login"]};let c=(()=>{const v=class{constructor(s,d,o,p,T,L,k){this.router=s,this.sideBar=d,this.authSrv=o,this.location=p,this.translate=T,this.clubSrv=L,this.viewportScroller=k,this.routes=n._,this.openBox=!1,this.miniSidebar=!1,this.addClass=!1,this.language_selected="en",this.code_language="es",this.active_languages=[{name:"Espa\xf1ol",logo:"./assets/img/spain.png",code:"es"},{name:"English",logo:"assets/img/uk.png",code:"en"}],this.translations=[],this.loaded=!1,this.scroll=()=>{var A=document.getElementById("menu-nav-bar");let E;E=window.innerWidth<350?150:window.innerWidth<500&&window.innerWidth>350?250:window.innerWidth<700&&window.innerWidth>500?350:window.innerWidth<1e3&&window.innerWidth>700?500:650,window.scrollY>=E&&null!=A?A.classList.add("fixed-header"):window.scrollY<E&&null!=A&&A.classList.remove("fixed-header")},this.sideBar.toggleSideBar.subscribe(A=>{this.miniSidebar="true"==A}),this.user=o.user}scrollToAnchroingPosition(s){this.viewportScroller.scrollToAnchor(s),document.getElementById("menu-nav-bar")?.classList.add("fixed-header");var o=document.getElementById("navbar-menu");null!=o&&o.classList.contains("show-menu-mobile")?o.classList.remove("show-menu-mobile"):o?.classList.add("show-menu-mobile")}openMenu(){var s=document.getElementById("navbar-menu");null!=s&&s.classList.contains("show-menu-mobile")?s.classList.remove("show-menu-mobile"):s?.classList.add("show-menu-mobile")}ngOnInit(){let s=this.location.path(),d=document.querySelector("#modal-cookie"),o=localStorage.getItem("cookieAccepted");"yes"==o?d?.classList.add("hide-cookie-modal"):0==s.includes("cookie-policy")&&setTimeout(()=>{"yes"!=o&&d?.classList.remove("hide-cookie-modal")},2e3),this.initializeLanguage(),window.addEventListener("scroll",this.scroll,!0),this.translate.addLangs(["es","en","fr","de"]),this.translate.setDefaultLang(this.clubSrv.authSrv.language),this.translate.use(this.clubSrv.authSrv.language),this.default_flag_language="es"==this.clubSrv.authSrv.language?this.active_languages[1]:this.active_languages[0],this.loaded=!0}initializeLanguage(){this.translate.get(["home_page"]).subscribe(s=>{this.translations=s})}changeLanguage(s){localStorage.setItem("language",s),this.translate.use(s),this.translate.setDefaultLang(s),"es"==s?(localStorage.setItem("language",s),this.default_flag_language=this.active_languages[1],this.code_language="en",this.router.navigate([""])):(localStorage.setItem("language",s),this.default_flag_language=this.active_languages[0],this.code_language="es",this.router.navigate(["/en"]))}acceptCookie(){console.log("pasamos"),document.querySelector("#modal-cookie")?.classList.add("hide-cookie-modal"),localStorage.setItem("cookieAccepted","yes")}};let _=v;return v.\u0275fac=function(d){return new(d||v)(e.Y36(h.F0),e.Y36(b.G),e.Y36(m.e),e.Y36(r.Ye),e.Y36(g.sK),e.Y36(u.I),e.Y36(r.EM))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-home-header"]],decls:85,vars:29,consts:[["id","loader-wrapper",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],["id","modal-cookie",1,"cookie-consent-modal","active"],[1,"content-cookie"],["target","_blank",3,"routerLink"],[1,"btns"],[1,"btn","cancel"],["id","accetp_cookie",1,"btn","accept",3,"click"],[1,"top-header"],[1,"col-md-6"],[1,"list-inline-items","d-flex"],["href","tel:+34 626804645",1,"contact_list"],["aria-hidden","true",1,"la","la-phone"],[1,"col-md-6","text-right"],[1,"list-inline-item","list-unstyled","m-0"],[1,"list-inline-items"],["href","mailto:business@matchpoint.plus",1,"contact_list"],["aria-hidden","true",1,"la","la-envelope"],["href","mailto:support@matchpoint.plus",1,"contact_list"],["href","javascript:void(0);",3,"click"],[1,"flag-size",3,"src","alt"],["id","home",1,"header"],["id","menu-nav-bar",1,"navbar","navbar-expand-md","home-menu"],[1,"container"],["type","button",1,"navbar-toggler",3,"click"],[1,"la","la-bars"],["id","navbar-menu",1,"collapse","navbar-collapse"],[1,"nav","navbar-nav","ml-auto"],[1,"nav-item"],["href","#home",1,"smooth-menu","nav-link"],["href","javascript:void(0);",1,"smooth-menu","nav-link",3,"click"],[1,"nav-btn"],[1,"download-btn",3,"routerLink"],[1,"text-right","show-language"],["alt","Admin",1,"flag-size",3,"src"],["id","loader-wrapper"],["id","loader"],[1,"loader-ellips"],[1,"loader-ellips__dot"]],template:function(d,o){1&d&&(e.YNc(0,i,7,0,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7,"Permitir cookies"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Esta web utiliza cookies propias para su correcto funcionamiento. Contiene enlaces a sitios web de terceros con pol\xedticas de privacidad ajenas que podr\xe1s aceptar o no cuando accedas a ellos. Al hacer clic en el bot\xf3n Aceptar, acepta el uso de estas tecnolog\xedas y el procesamiento de tus datos para estos prop\xf3sitos. M\xe1s informaci\xf3n "),e.TgZ(10,"a",6),e._uU(11," aqu\xed"),e.qZA(),e._uU(12,"."),e.qZA(),e.TgZ(13,"div",7)(14,"button",8),e._uU(15,"cancel"),e.qZA(),e.TgZ(16,"button",9),e.NdJ("click",function(){return o.acceptCookie()}),e._uU(17,"Accept"),e.qZA()()()()()()(),e.TgZ(18,"div",10)(19,"div",1)(20,"div",2)(21,"div",11)(22,"div",12)(23,"a",13),e._UZ(24,"i",14),e._uU(25,"+34 626804645"),e.qZA()()(),e.TgZ(26,"div",15)(27,"ul",16)(28,"li",17)(29,"a",18),e._UZ(30,"i",19),e._uU(31,"business@matchpoint.plus"),e.qZA()(),e.TgZ(32,"li")(33,"span"),e._uU(34,"|"),e.qZA()(),e.TgZ(35,"li",17)(36,"a",20),e._UZ(37,"i",19),e._uU(38,"support@matchpoint.plus"),e.qZA()(),e.TgZ(39,"li")(40,"span"),e._uU(41,"|"),e.qZA()(),e.TgZ(42,"li",17)(43,"a",21),e.NdJ("click",function(){return o.changeLanguage(o.default_flag_language.code)}),e.TgZ(44,"span"),e._UZ(45,"img",22),e.qZA()()()()()()()(),e.TgZ(46,"header",23)(47,"nav",24)(48,"div",25)(49,"button",26),e.NdJ("click",function(){return o.openMenu()}),e._UZ(50,"i",27),e.qZA(),e.TgZ(51,"div",28)(52,"ul",29)(53,"li",30)(54,"a",31),e._uU(55),e.ALo(56,"translate"),e.qZA()(),e.TgZ(57,"li",30)(58,"a",32),e.NdJ("click",function(){return o.scrollToAnchroingPosition("features")}),e._uU(59),e.ALo(60,"translate"),e.qZA()(),e.TgZ(61,"li",30)(62,"a",32),e.NdJ("click",function(){return o.scrollToAnchroingPosition("viewdemos")}),e._uU(63),e.ALo(64,"translate"),e.qZA()(),e.TgZ(65,"li",30)(66,"a",32),e.NdJ("click",function(){return o.scrollToAnchroingPosition("about")}),e._uU(67),e.ALo(68,"translate"),e.qZA()(),e.TgZ(69,"li",30)(70,"a",32),e.NdJ("click",function(){return o.scrollToAnchroingPosition("customize")}),e._uU(71),e.ALo(72,"translate"),e.qZA()(),e.TgZ(73,"li",30)(74,"a",32),e.NdJ("click",function(){return o.scrollToAnchroingPosition("overview")}),e._uU(75),e.ALo(76,"translate"),e.qZA()()(),e.TgZ(77,"div",33)(78,"a",34),e._uU(79),e.ALo(80,"translate"),e.qZA()()(),e.TgZ(81,"div",35)(82,"a",21),e.NdJ("click",function(){return o.changeLanguage(o.default_flag_language.code)}),e.TgZ(83,"span"),e._UZ(84,"img",36),e.qZA()()()()()()),2&d&&(e.Q6J("ngIf",0==o.loaded),e.xp6(10),e.Q6J("routerLink",e.DdM(27,t)),e.xp6(35),e.Q6J("src",o.default_flag_language.logo,e.LSH)("alt",o.default_flag_language.code),e.xp6(10),e.Oqu(e.lcZ(56,13,"home_page.home")),e.xp6(4),e.Oqu(e.lcZ(60,15,"home_page.features")),e.xp6(4),e.Oqu(e.lcZ(64,17,"home_page.demo")),e.xp6(4),e.Oqu(e.lcZ(68,19,"home_page.about")),e.xp6(4),e.Oqu(e.lcZ(72,21,"home_page.customize")),e.xp6(4),e.Oqu(e.lcZ(76,23,"home_page.pages")),e.xp6(3),e.Q6J("routerLink",e.DdM(28,a)),e.xp6(1),e.Oqu(e.lcZ(80,25,"home_page.login")),e.xp6(5),e.Q6J("src",o.default_flag_language.logo,e.LSH))},dependencies:[r.O5,h.rH,g.X$]}),_})()},9183:(M,f,l)=>{l.d(f,{I:()=>m});var n=l(529),e=l(5862),h=l(4650),b=l(866);let m=(()=>{const g=class{constructor(i,t){this.http=i,this.authSrv=t}listClubs(i=1,t=""){let a=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs?page="+i+"&search="+t,{headers:a})}getClub(i){let t=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/"+i,{headers:t})}storeDataClub(i){let t=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs",i,{headers:t})}storeWeeklyScheduleClub(i){let t=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs/updateWeekly",i,{headers:t})}getClubProfile(){let i=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/profile",{headers:i})}editClub(i,t){let a=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs/update/"+i,t,{headers:a})}deleteClub(i){let t=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(e.$g+"/clubs/"+i,{headers:t})}config(){let i=new n.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/config",{headers:i})}};let r=g;return g.\u0275fac=function(t){return new(t||g)(h.LFG(n.eN),h.LFG(b.e))},g.\u0275prov=h.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),r})()},3210:(M,f,l)=>{l.d(f,{E:()=>r});var n=l(529),e=l(5862),h=l(4650),b=l(27),m=l(866);let r=(()=>{const u=class{constructor(t,a,c){this.router=t,this.http=a,this.authSrv=c}findClubs(t){let a=new n.WM({"Access-Control-Allow-Origin":"*"});return this.http.post(e.$g+"/public/find-clubs",t,{headers:a})}getClub(t){return this.http.post(e.$g+"/public/club-data/get-info/"+t,null)}config(t,a,c,_){return this.http.post(e.$g+"/public/config?hash="+t+"&day_week_number="+a+"&date="+c+"&sport_selected="+_,null)}storeReservation(t){return this.http.post(e.$g+"/public/create-booking",t)}getBooking(t){return this.http.post(e.$g+"/public/get-booking/"+t,null)}cancelBooking(t){return this.http.post(e.$g+"/public/cancel-booking",t)}getLeagues(t=1,a,c=""){return this.http.post(e.$g+"/public/get-leagues?hash_club="+a+"&page="+t+"&search="+c,null)}getLeague(t){return this.http.post(e.$g+"/public/get-league/"+t,null)}getDataCategoryLeague(t){return this.http.post(e.$g+"/public/get-category-league/"+t,null)}getDataCategoryTournament(t){return this.http.post(e.$g+"/public/get-category-tournament/"+t,null)}getCouple(t){return this.http.post(e.$g+"/public/get-couple/"+t,null)}getCoupleResults(t){return this.http.post(e.$g+"/public/get-couple-results/"+t,null)}getMatchsJourney(t){return this.http.post(e.$g+"/public/get-matchs-journey/"+t,null)}getTournaments(t=1,a,c=""){return this.http.post(e.$g+"/public/get-tournaments?hash_club="+a+"&page="+t+"&search="+c,null)}getTournament(t){return this.http.post(e.$g+"/public/get-tournament/"+t,null)}getDraw(t){return this.http.post(e.$g+"/public/get-draw",t)}};let g=u;return u.\u0275fac=function(a){return new(a||u)(h.LFG(b.F0),h.LFG(n.eN),h.LFG(m.e))},u.\u0275prov=h.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),g})()},6519:(M,f,l)=>{l.d(f,{G:()=>b});var n=l(1135),e=l(4650),h=l(7945);let b=(()=>{const r=class{constructor(u){this.data=u,this.toggleSideBar=new n.X(localStorage.getItem("isMiniSidebar")||"false"),this.toggleMobileSideBar=new n.X(localStorage.getItem("isMobileSidebar")||"false"),this.expandSideBar=new n.X("false")}switchSideMenuPosition(){localStorage.getItem("isMiniSidebar")?(this.toggleSideBar.next("false"),localStorage.removeItem("isMiniSidebar"),this.data.sideBar.map(u=>{u.menu.map(i=>{const t=sessionStorage.getItem("menuValue");t&&t==i.menuValue&&(i.showSubRoute=!0)})})):(this.toggleSideBar.next("true"),localStorage.setItem("isMiniSidebar","true"),this.data.sideBar.map(u=>{u.menu.map(i=>{i.showSubRoute=!1})}))}switchMobileSideBarPosition(){localStorage.getItem("isMobileSidebar")?(this.toggleMobileSideBar.next("false"),localStorage.removeItem("isMobileSidebar")):(this.toggleMobileSideBar.next("true"),localStorage.setItem("isMobileSidebar","true"))}};let m=r;return r.\u0275fac=function(i){return new(i||r)(e.LFG(h.D))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),m})()}}]);