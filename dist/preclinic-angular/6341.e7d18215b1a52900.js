"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[6341],{9689:(B,U,a)=>{a.d(U,{G:()=>m});var _=a(6382),e=a(4650),t=a(27),b=a(6519),f=a(866),c=a(2466),d=a(9183),T=a(6895),s=a(4006);function o(v,A){if(1&v){const M=e.EpF();e.TgZ(0,"a",39),e.NdJ("click",function(){const i=e.CHM(M).$implicit,L=e.oxw();return e.KtG(L.changeLanguage(i.code))}),e._UZ(1,"img",34),e._uU(2),e.qZA()}if(2&v){const M=A.$implicit;e.xp6(1),e.Q6J("src",M.logo,e.LSH),e.xp6(1),e.hij("\xa0 ",M.name," ")}}let m=(()=>{const A=class{constructor(l,g,i,L,r,p){this.router=l,this.sideBar=g,this.authSrv=i,this.translate=L,this.clubSrv=r,this.viewportScroller=p,this.routes=_._,this.openBox=!1,this.miniSidebar=!1,this.addClass=!1,this.language_selected="en",this.default_flag_language="assets/img/user-06.jpg",this.active_languages=[{name:"Espa\xf1ol",logo:"./assets/img/spain.png",code:"es"},{name:"English",logo:"assets/img/uk.png",code:"en"},{name:"Deutsch",logo:"assets/img/germany.png",code:"en"},{name:"Fran\xe7ais",logo:"assets/img/france.png",code:"en"}],this.scroll=()=>{var n=document.getElementById("menu-nav-bar");let u;u=window.innerWidth<350?150:window.innerWidth<500&&window.innerWidth>350?250:window.innerWidth<700&&window.innerWidth>500?350:window.innerWidth<1e3&&window.innerWidth>700?500:650,window.scrollY>=u&&null!=n?n.classList.add("fixed-header"):window.scrollY<u&&null!=n&&n.classList.remove("fixed-header")},this.sideBar.toggleSideBar.subscribe(n=>{this.miniSidebar="true"==n}),this.user=i.user}scrollToAnchroingPosition(l){this.viewportScroller.scrollToAnchor(l),document.getElementById("menu-nav-bar")?.classList.add("fixed-header");var i=document.getElementById("navbar-menu");null!=i&&i.classList.contains("show-menu-mobile")?i.classList.remove("show-menu-mobile"):i?.classList.add("show-menu-mobile")}openMenu(){var l=document.getElementById("navbar-menu");null!=l&&l.classList.contains("show-menu-mobile")?l.classList.remove("show-menu-mobile"):l?.classList.add("show-menu-mobile")}ngOnInit(){window.addEventListener("scroll",this.scroll,!0),this.translate.addLangs(["es","en","fr","de"]),this.translate.setDefaultLang(this.clubSrv.authSrv.language),this.translate.use(this.clubSrv.authSrv.language);let l=this.active_languages.findIndex(g=>g.code==this.clubSrv.authSrv.language);-1!=l&&(this.default_flag_language=this.active_languages[l].logo)}switchLang(l){localStorage.setItem("language",l),console.log("lang->",this.language_selected),this.translate.use(this.language_selected),this.translate.setDefaultLang(this.language_selected),document.location.reload()}changeLanguage(l){l!=this.clubSrv.authSrv.language&&(localStorage.setItem("language",l),console.log("lang->",l),this.translate.use(l),this.translate.setDefaultLang(l),document.location.reload()),console.log(event)}getRoleName(){return this.user.role[0]}openBoxFunc(){this.openBox=!this.openBox;var l=document.getElementsByClassName("main-wrapper")[0];this.openBox?l.classList.add("open-msg-box"):l.classList.remove("open-msg-box")}toggleSideBar(){this.sideBar.switchSideMenuPosition()}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition(),this.addClass=!this.addClass,document.getElementsByTagName("html");var g=document.getElementById("sidebar");this.addClass?g.classList.add("opened"):g.classList.remove("opened"),localStorage.getItem("isMobileSidebar")?g.classList.add("menu-opened"):g.classList.remove("menu-opened")}logout(){this.authSrv.logout()}};let v=A;return A.\u0275fac=function(g){return new(g||A)(e.Y36(t.F0),e.Y36(b.G),e.Y36(f.e),e.Y36(c.sK),e.Y36(d.I),e.Y36(T.EM))},A.\u0275cmp=e.Xpm({type:A,selectors:[["app-header"]],decls:300,vars:29,consts:[[1,"header"],[1,"header-left"],[1,"logo",3,"routerLink"],["src","assets/img/logo.png","width","35","height","35","alt",""],["id","toggle_btn","href","javascript:void(0);",3,"click"],["src","assets/img/icons/bar-icon.svg","alt",""],["id","mobile_btn",1,"mobile_btn","float-start",3,"click"],[1,"top-nav-search","mob-view"],["type","text","placeholder","Search here",1,"form-control"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"nav","user-menu","float-end"],[1,"nav-item","dropdown","d-none","d-sm-block"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link"],["src","assets/img/icons/note-icon-02.svg","alt",""],[1,"pulse"],[1,"dropdown-menu","notifications"],[1,"topnav-dropdown-header"],[1,"drop-scroll"],[1,"notification-list"],[1,"notification-message"],[3,"routerLink"],[1,"media"],[1,"avatar"],["alt","Jornadas","src","assets/img/user.jpg",1,"img-fluid"],[1,"media-body"],[1,"noti-details"],[1,"noti-title"],[1,"noti-time"],[1,"notification-time"],[1,"topnav-dropdown-footer"],[1,"nav-item","dropdown","has-arrow","user-profile-list"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link","user-link"],[1,"user-names"],["alt","Admin",1,"flag",3,"src"],[1,"dropdown-menu"],["class","dropdown-item","href","#","onclick","return false;",3,"click",4,"ngFor","ngForOf"],[1,"user-img"],["src","assets/img/user-06.jpg","alt","Admin"],["href","#","onclick","return false;",1,"dropdown-item",3,"click"],[1,"dropdown","mobile-user-menu","float-end"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],[1,"fa-solid","fa-ellipsis-vertical"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"notification-box"],[1,"msg-sidebar","notifications","msg-noti"],["id","msg_list",1,"drop-scroll","msg-list-scroll"],[1,"list-box"],[1,"list-item"],[1,"list-left"],[1,"list-body"],[1,"message-author"],[1,"message-time"],[1,"clearfix"],[1,"message-content"],[1,"list-item","new-message"]],template:function(g,i){1&g&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.TgZ(4,"span"),e._uU(5,"Padel Tools"),e.qZA()()(),e.TgZ(6,"a",4),e.NdJ("click",function(){return i.toggleSideBar()}),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"a",6),e.NdJ("click",function(){return i.toggleMobileSideBar()}),e._UZ(9,"img",5),e.qZA(),e.TgZ(10,"div",7)(11,"form"),e._UZ(12,"input",8),e.TgZ(13,"a",9),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"ul",11)(16,"li",12)(17,"a",13),e._UZ(18,"img",14)(19,"span",15),e.qZA(),e.TgZ(20,"div",16)(21,"div",17)(22,"span"),e._uU(23,"Notifications"),e.qZA()(),e.TgZ(24,"div",18)(25,"ul",19)(26,"li",20)(27,"a",21)(28,"div",22)(29,"span",23),e._UZ(30,"img",24),e.qZA(),e.TgZ(31,"div",25)(32,"p",26)(33,"span",27),e._uU(34,"Noticia"),e.qZA(),e._uU(35," nueva "),e.TgZ(36,"span",27),e._uU(37,"Jornada jugada"),e.qZA()(),e.TgZ(38,"p",28)(39,"span",29),e._uU(40,"hace unos 2 d\xedas"),e.qZA()()()()()(),e.TgZ(41,"li",20)(42,"a",21)(43,"div",22)(44,"span",23),e._UZ(45,"img",24),e.qZA(),e.TgZ(46,"div",25)(47,"p",26)(48,"span",27),e._uU(49,"Nueva"),e.qZA(),e._uU(50," jornada "),e.TgZ(51,"span",27),e._uU(52," jugada"),e.qZA()(),e.TgZ(53,"p",28)(54,"span",29),e._uU(55,"hace 1 semana"),e.qZA()()()()()(),e.TgZ(56,"li",20)(57,"a",21)(58,"div",22)(59,"span",23),e._UZ(60,"img",24),e.qZA(),e.TgZ(61,"div",25)(62,"p",26)(63,"span",27),e._uU(64,"Nueva"),e.qZA(),e._uU(65," jornada "),e.TgZ(66,"span",27),e._uU(67," jugada"),e.qZA()(),e.TgZ(68,"p",28)(69,"span",29),e._uU(70,"hace m\xe1s de una semana"),e.qZA()()()()()()()(),e.TgZ(71,"div",30)(72,"a",21),e._uU(73,"View all Notifications"),e.qZA()()()(),e.TgZ(74,"li",31)(75,"a",32)(76,"div",33)(77,"h5"),e._uU(78),e.ALo(79,"translate"),e.qZA()(),e.TgZ(80,"span"),e._UZ(81,"img",34),e.qZA()(),e.TgZ(82,"div",35),e.YNc(83,o,3,2,"a",36),e.qZA()(),e.TgZ(84,"li",31)(85,"a",32)(86,"div",33)(87,"h5"),e._uU(88),e.qZA(),e.TgZ(89,"span"),e._uU(90),e.qZA()(),e.TgZ(91,"span",37),e._UZ(92,"img",38),e.qZA()(),e.TgZ(93,"div",35)(94,"a",39),e.NdJ("click",function(){return i.logout()}),e._uU(95,"Logout"),e.qZA()()()(),e.TgZ(96,"div",40)(97,"a",41),e._UZ(98,"i",42),e.qZA(),e.TgZ(99,"div",43)(100,"a",44),e._uU(101,"My Profile"),e.qZA(),e.TgZ(102,"a",44),e._uU(103,"Edit Profile"),e.qZA(),e.TgZ(104,"a",44),e._uU(105,"Settings"),e.qZA(),e.TgZ(106,"a",39),e.NdJ("click",function(){return i.logout()}),e._uU(107,"Logout"),e.qZA()()()(),e.TgZ(108,"div",45)(109,"div",46)(110,"div",17)(111,"span"),e._uU(112,"Messages"),e.qZA()(),e.TgZ(113,"div",47)(114,"ul",48)(115,"li")(116,"a",21)(117,"div",49)(118,"div",50)(119,"span",23),e._uU(120,"R"),e.qZA()(),e.TgZ(121,"div",51)(122,"span",52),e._uU(123,"Richard Miles "),e.qZA(),e.TgZ(124,"span",53),e._uU(125,"12:28 AM"),e.qZA(),e._UZ(126,"div",54),e.TgZ(127,"span",55),e._uU(128,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(129,"li")(130,"a",21)(131,"div",56)(132,"div",50)(133,"span",23),e._uU(134,"J"),e.qZA()(),e.TgZ(135,"div",51)(136,"span",52),e._uU(137,"John Doe"),e.qZA(),e.TgZ(138,"span",53),e._uU(139,"1 Aug"),e.qZA(),e._UZ(140,"div",54),e.TgZ(141,"span",55),e._uU(142,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(143,"li")(144,"a",21)(145,"div",49)(146,"div",50)(147,"span",23),e._uU(148,"T"),e.qZA()(),e.TgZ(149,"div",51)(150,"span",52),e._uU(151," Tarah Shropshire "),e.qZA(),e.TgZ(152,"span",53),e._uU(153,"12:28 AM"),e.qZA(),e._UZ(154,"div",54),e.TgZ(155,"span",55),e._uU(156,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(157,"li")(158,"a",21)(159,"div",49)(160,"div",50)(161,"span",23),e._uU(162,"M"),e.qZA()(),e.TgZ(163,"div",51)(164,"span",52),e._uU(165,"Mike Litorus"),e.qZA(),e.TgZ(166,"span",53),e._uU(167,"12:28 AM"),e.qZA(),e._UZ(168,"div",54),e.TgZ(169,"span",55),e._uU(170,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(171,"li")(172,"a",21)(173,"div",49)(174,"div",50)(175,"span",23),e._uU(176,"C"),e.qZA()(),e.TgZ(177,"div",51)(178,"span",52),e._uU(179," Catherine Manseau "),e.qZA(),e.TgZ(180,"span",53),e._uU(181,"12:28 AM"),e.qZA(),e._UZ(182,"div",54),e.TgZ(183,"span",55),e._uU(184,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(185,"li")(186,"a",21)(187,"div",49)(188,"div",50)(189,"span",23),e._uU(190,"D"),e.qZA()(),e.TgZ(191,"div",51)(192,"span",52),e._uU(193," Domenic Houston "),e.qZA(),e.TgZ(194,"span",53),e._uU(195,"12:28 AM"),e.qZA(),e._UZ(196,"div",54),e.TgZ(197,"span",55),e._uU(198,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(199,"li")(200,"a",21)(201,"div",49)(202,"div",50)(203,"span",23),e._uU(204,"B"),e.qZA()(),e.TgZ(205,"div",51)(206,"span",52),e._uU(207," Buster Wigton "),e.qZA(),e.TgZ(208,"span",53),e._uU(209,"12:28 AM"),e.qZA(),e._UZ(210,"div",54),e.TgZ(211,"span",55),e._uU(212,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(213,"li")(214,"a",21)(215,"div",49)(216,"div",50)(217,"span",23),e._uU(218,"R"),e.qZA()(),e.TgZ(219,"div",51)(220,"span",52),e._uU(221," Rolland Webber "),e.qZA(),e.TgZ(222,"span",53),e._uU(223,"12:28 AM"),e.qZA(),e._UZ(224,"div",54),e.TgZ(225,"span",55),e._uU(226,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(227,"li")(228,"a",21)(229,"div",49)(230,"div",50)(231,"span",23),e._uU(232,"C"),e.qZA()(),e.TgZ(233,"div",51)(234,"span",52),e._uU(235," Claire Mapes "),e.qZA(),e.TgZ(236,"span",53),e._uU(237,"12:28 AM"),e.qZA(),e._UZ(238,"div",54),e.TgZ(239,"span",55),e._uU(240,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(241,"li")(242,"a",21)(243,"div",49)(244,"div",50)(245,"span",23),e._uU(246,"M"),e.qZA()(),e.TgZ(247,"div",51)(248,"span",52),e._uU(249,"Melita Faucher"),e.qZA(),e.TgZ(250,"span",53),e._uU(251,"12:28 AM"),e.qZA(),e._UZ(252,"div",54),e.TgZ(253,"span",55),e._uU(254,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(255,"li")(256,"a",21)(257,"div",49)(258,"div",50)(259,"span",23),e._uU(260,"J"),e.qZA()(),e.TgZ(261,"div",51)(262,"span",52),e._uU(263,"Jeffery Lalor"),e.qZA(),e.TgZ(264,"span",53),e._uU(265,"12:28 AM"),e.qZA(),e._UZ(266,"div",54),e.TgZ(267,"span",55),e._uU(268,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(269,"li")(270,"a",21)(271,"div",49)(272,"div",50)(273,"span",23),e._uU(274,"L"),e.qZA()(),e.TgZ(275,"div",51)(276,"span",52),e._uU(277,"Loren Gatlin"),e.qZA(),e.TgZ(278,"span",53),e._uU(279,"12:28 AM"),e.qZA(),e._UZ(280,"div",54),e.TgZ(281,"span",55),e._uU(282,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(283,"li")(284,"a",21)(285,"div",49)(286,"div",50)(287,"span",23),e._uU(288,"T"),e.qZA()(),e.TgZ(289,"div",51)(290,"span",52),e._uU(291,"Tarah Shropshire"),e.qZA(),e.TgZ(292,"span",53),e._uU(293,"12:28 AM"),e.qZA(),e._UZ(294,"div",54),e.TgZ(295,"span",55),e._uU(296,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()()()(),e.TgZ(297,"div",30)(298,"a",21),e._uU(299,"See all messages"),e.qZA()()()()),2&g&&(e.xp6(2),e.Q6J("routerLink",i.routes.adminDashboard),e.xp6(25),e.Q6J("routerLink",i.routes.jorneyList),e.xp6(15),e.Q6J("routerLink",i.routes.jorneyList),e.xp6(15),e.Q6J("routerLink",i.routes.jorneyList),e.xp6(15),e.Q6J("routerLink",i.routes.jorneyList),e.xp6(6),e.Oqu(e.lcZ(79,27,"commun_translations.lang")),e.xp6(3),e.Q6J("src",i.default_flag_language,e.LSH),e.xp6(2),e.Q6J("ngForOf",i.active_languages),e.xp6(5),e.hij("",i.user.name," "),e.xp6(2),e.Oqu(i.getRoleName()),e.xp6(10),e.Q6J("routerLink",i.routes.profile),e.xp6(2),e.Q6J("routerLink",i.routes.editProfile),e.xp6(2),e.Q6J("routerLink",i.routes.settings),e.xp6(12),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat))},dependencies:[T.sg,s._Y,s.JL,s.F,t.rH,c.X$],styles:["#home[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]:after{background:rgba(46,55,164,.65)!important;background:url(hero-bg.6b5a923e70d3a9ab.png) bottom no-repeat}.flag[_ngcontent-%COMP%]{width:30px;border-radius:5px}"]}),v})()},2407:(B,U,a)=>{a.d(U,{k:()=>L});var _=a(27),e=a(6382),t=a(4650),b=a(7945),f=a(6519),c=a(866),d=a(6895),T=a(4153);function s(r,p){if(1&r&&t._UZ(0,"i",13),2&r){const n=t.oxw(2).$implicit;t.Tol(n.icon)}}function o(r,p){if(1&r&&(t.TgZ(0,"li")(1,"a",10)(2,"span",5),t.YNc(3,s,1,2,"i",11),t._UZ(4,"img",12),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()()()),2&r){const n=t.oxw().$implicit,u=t.oxw(2);t.xp6(1),t.ekj("active",u.base===n.base),t.Q6J("routerLink",n.route),t.xp6(2),t.Q6J("ngIf",!0===n.faIcon),t.xp6(1),t.Q6J("src",n.img,t.LSH),t.xp6(2),t.Oqu(t.lcZ(7,6,n.menuValue))}}function m(r,p){if(1&r&&t._UZ(0,"i",13),2&r){const n=t.oxw(2).$implicit;t.Tol(n.icon)}}function v(r,p){if(1&r&&(t.TgZ(0,"li",18)(1,"a",10),t._uU(2),t.ALo(3,"titlecase"),t.qZA()()),2&r){const n=t.oxw().$implicit,u=t.oxw(2).$implicit,h=t.oxw(2);t.Q6J("ngClass",!0===u.showSubRoute?"d-block":"d-none"),t.xp6(1),t.ekj("active",h.currentUrl===n.base),t.Q6J("routerLink",n.route),t.xp6(1),t.hij(" ",t.lcZ(3,5,n.menuValue)," ")}}function A(r,p){if(1&r&&(t.ynx(0),t.YNc(1,v,4,7,"li",17),t.BQk()),2&r){const n=p.$implicit;t.xp6(1),t.Q6J("ngIf",n.show_nav)}}const M=function(r){return{subdrop:r}};function l(r,p){if(1&r){const n=t.EpF();t.TgZ(0,"li",14)(1,"a",15),t.NdJ("click",function(){t.CHM(n);const h=t.oxw().$implicit,Z=t.oxw(2);return t.KtG(Z.expandSubMenus(h))}),t.TgZ(2,"span",5),t.YNc(3,m,1,2,"i",11),t._UZ(4,"img",12),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t._UZ(8,"span",16),t.qZA(),t.TgZ(9,"ul"),t.YNc(10,A,2,1,"ng-container",2),t.qZA()()}if(2&r){const n=t.oxw().$implicit,u=t.oxw(2);t.xp6(1),t.ekj("active",u.base===n.base),t.Q6J("ngClass",t.VKq(9,M,!0===n.showSubRoute)),t.xp6(2),t.Q6J("ngIf",!0===n.faIcon),t.xp6(1),t.Q6J("src",n.img,t.LSH),t.xp6(2),t.hij(" ",t.lcZ(7,7,n.menuValue),""),t.xp6(4),t.Q6J("ngForOf",n.subMenus)}}function g(r,p){if(1&r&&(t.ynx(0),t.YNc(1,o,8,8,"li",8),t.YNc(2,l,11,11,"li",9),t.BQk()),2&r){const n=p.$implicit;t.xp6(1),t.Q6J("ngIf",!1===n.hasSubRoute),t.xp6(1),t.Q6J("ngIf",!0===n.hasSubRoute)}}function i(r,p){if(1&r&&(t.ynx(0),t.TgZ(1,"li",7)(2,"span"),t._uU(3),t.ALo(4,"titlecase"),t.qZA()(),t.YNc(5,g,3,2,"ng-container",2),t.BQk()),2&r){const n=p.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,n.tittle)),t.xp6(2),t.Q6J("ngForOf",n.menu)}}let L=(()=>{const p=class{constructor(u,h,Z,D){this.data=u,this.router=h,this.sideBar=Z,this.authSrv=D,this.base="",this.page="",this.currentUrl="",this.classAdd=!1,this.multilevel=[!1,!1,!1],this.routes=e._,this.sidebarData=[],this.sidebarDataDoc=[];let C=localStorage.getItem("user");if(this.user=JSON.parse(C||""),this.user&&this.user.role.includes("Super-Admin"))this.sidebarData=this.data.sideBar;else{let S=[],q=this.user.permissions;this.data.sideBar.forEach(x=>{let w=[];x.menu.forEach(E=>{let O=E.subMenus.filter(I=>q.includes(I.permision)&&1==I.show_nav);O.length>0?(E.subMenus=O,w.push(E)):q.includes(E.permision)&&w.push(E)}),w.length>0&&(x.menu=w,S.push(x))}),this.sidebarData=S}h.events.subscribe(S=>{S instanceof _.m2&&this.getRoutes(S)}),this.getRoutes(this.router)}expandSubMenus(u){sessionStorage.setItem("menuValue",u.menuValue),this.sidebarData.map(h=>{h.menu.map(Z=>{Z.menuValue==u.menuValue?u.showSubRoute=!u.showSubRoute:Z.showSubRoute=!1})})}getRoutes(u){const h=document.body;h.classList.remove("slide-nav"),h.classList.remove("opened"),this.currentUrl=u.url;const Z=u.url.split("/");this.base=Z[1],this.page=Z[2]}miniSideBarMouseHover(u){this.sideBar.expandSideBar.next("over"==u?"true":"false")}logout(){this.authSrv.logout()}};let r=p;return p.\u0275fac=function(h){return new(h||p)(t.Y36(b.D),t.Y36(_.F0),t.Y36(f.G),t.Y36(c.e))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-sidebar"]],decls:11,vars:1,consts:[["id","sidebar",1,"sidebar",3,"mouseover","mouseout"],["id","sidebar-menu",1,"sidebar-menu"],[4,"ngFor","ngForOf"],[1,"logout-btn"],["href","#","onclick","return false;",3,"click"],[1,"menu-side"],["src","assets/img/icons/logout.svg","alt",""],[1,"menu-title"],[4,"ngIf"],["class","submenu",4,"ngIf"],[3,"routerLink"],["class","fa",3,"class",4,"ngIf"],["alt","",3,"src"],[1,"fa"],[1,"submenu"],["href","javascript:void(0)",3,"ngClass","click"],[1,"menu-arrow"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(h,Z){1&h&&(t.TgZ(0,"div",0),t.NdJ("mouseover",function(){return Z.miniSideBarMouseHover("over")})("mouseout",function(){return Z.miniSideBarMouseHover("out")}),t.TgZ(1,"ng-scrollbar")(2,"div",1)(3,"ul"),t.YNc(4,i,6,4,"ng-container",2),t.qZA(),t.TgZ(5,"div",3)(6,"a",4),t.NdJ("click",function(){return Z.logout()}),t.TgZ(7,"span",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Logout"),t.qZA()()()()()()),2&h&&(t.xp6(4),t.Q6J("ngForOf",Z.sidebarData))},dependencies:[d.mk,d.sg,d.O5,T.KC,_.rH,d.rS]}),r})()},9183:(B,U,a)=>{a.d(U,{I:()=>f});var _=a(529),e=a(5862),t=a(4650),b=a(866);let f=(()=>{const d=class{constructor(s,o){this.http=s,this.authSrv=o}listClubs(s=1,o=""){let m=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs?page="+s+"&search="+o,{headers:m})}getClub(s){let o=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/"+s,{headers:o})}storeDataClub(s){let o=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs",s,{headers:o})}storeWeeklyScheduleClub(s){let o=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs/updateWeekly",s,{headers:o})}getClubProfile(){let s=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/profile",{headers:s})}editClub(s,o){let m=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs/update/"+s,o,{headers:m})}deleteClub(s){let o=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(e.$g+"/clubs/"+s,{headers:o})}config(){let s=new _.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/config",{headers:s})}};let c=d;return d.\u0275fac=function(o){return new(o||d)(t.LFG(_.eN),t.LFG(b.e))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),c})()},9744:(B,U,a)=>{a.d(U,{a:()=>f});var _=a(6382),e=a(4650),t=a(27),b=a(866);let f=(()=>{const d=class{constructor(s,o){this.router=s,this.autSrv=o}canActivate(){let s=localStorage.getItem("user");if(this.user=JSON.parse(s||""),this.token=localStorage.getItem("token"),null!=this.user&&null!=this.token){let m=JSON.parse(atob(this.token.split(".")[1])).exp;return!(Math.floor((new Date).getTime()/1e3)>=m&&(this.autSrv.logout(),1))}return this.router.navigate([_._.login]),!1}};let c=d;return d.\u0275fac=function(o){return new(o||d)(e.LFG(t.F0),e.LFG(b.e))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),c})()},6519:(B,U,a)=>{a.d(U,{G:()=>b});var _=a(1135),e=a(4650),t=a(7945);let b=(()=>{const c=class{constructor(T){this.data=T,this.toggleSideBar=new _.X(localStorage.getItem("isMiniSidebar")||"false"),this.toggleMobileSideBar=new _.X(localStorage.getItem("isMobileSidebar")||"false"),this.expandSideBar=new _.X("false")}switchSideMenuPosition(){localStorage.getItem("isMiniSidebar")?(this.toggleSideBar.next("false"),localStorage.removeItem("isMiniSidebar"),this.data.sideBar.map(T=>{T.menu.map(s=>{const o=sessionStorage.getItem("menuValue");o&&o==s.menuValue&&(s.showSubRoute=!0)})})):(this.toggleSideBar.next("true"),localStorage.setItem("isMiniSidebar","true"),this.data.sideBar.map(T=>{T.menu.map(s=>{s.showSubRoute=!1})}))}switchMobileSideBarPosition(){localStorage.getItem("isMobileSidebar")?(this.toggleMobileSideBar.next("false"),localStorage.removeItem("isMobileSidebar")):(this.toggleMobileSideBar.next("true"),localStorage.setItem("isMobileSidebar","true"))}};let f=c;return c.\u0275fac=function(s){return new(s||c)(e.LFG(t.D))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),f})()}}]);