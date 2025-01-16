"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[759],{8730:(y,b,l)=>{l.d(b,{G:()=>O});var c=l(6382),e=l(4650),t=l(27),A=l(6519),m=l(866),h=l(2466),p=l(9183),M=l(4279),s=l(6895),n=l(4006);let g=(()=>{const o=class{constructor(i,r,a){this.changeDetectorRef=i,this.ngZone=r,this.authSrv=a}ngOnInit(){}transform(i){let r={es:{today:"Hoy",yesterday:"Ayer",tomorrow:"Ma\xf1ana"},en:{today:"Today",yesterday:"Yesterday",tomorrow:"Tomorrow"}},a=new Date(i),d=a.getDay(),U=a.getMonth(),S=a.getFullYear(),v=new Date,T=v.getDay(),f=v.getMonth(),x=v.getFullYear(),Z=new Date(v);Z.setDate(Z.getDate()-1),Z.getDay();let C=Z.getMonth(),I=Z.getFullYear(),E=new Date(v);E.setDate(E.getDate()+1),E.getDay();let q=E.getMonth(),J=E.getFullYear();return d==T&&U==f&&S==x?r[this.authSrv.language].today:a.getDate()==Z.getDate()&&U==C&&S==I?r[this.authSrv.language].yesterday:a.getDate()==E.getDate()&&U==q&&S==J?r[this.authSrv.language].tomorrow:new s.uU("en-US").transform(i,"dd/MM/yyyy")}};let _=o;return o.\u0275fac=function(r){return new(r||o)(e.Y36(e.sBO,16),e.Y36(e.R0b,16),e.Y36(m.e,16))},o.\u0275pipe=e.Yjl({name:"timeAgoMember",type:o,pure:!0}),_})();const L=["openMemberMenu"];function k(_,o){1&_&&(e.TgZ(0,"a",48,49),e._UZ(2,"img",50)(3,"span",51),e.qZA())}const w=function(_,o,u){return[_,o,u]};function B(_,o){if(1&_){const u=e.EpF();e.TgZ(0,"li",52)(1,"div",53),e._UZ(2,"div",54),e.TgZ(3,"div",55)(4,"span",40),e._UZ(5,"img",56),e.qZA()(),e.TgZ(6,"div",57)(7,"p",58)(8,"span",59),e._uU(9),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p",60)(12,"span",61),e._uU(13),e.ALo(14,"timeAgoMember"),e.qZA()()(),e.TgZ(15,"div",54)(16,"span",62)(17,"i",63),e.NdJ("click",function(){const a=e.CHM(u).$implicit,d=e.oxw();return e.KtG(d.accept(a.club_user_id))}),e.qZA()()(),e.TgZ(18,"div",54)(19,"span",64)(20,"i",65),e.NdJ("click",function(){const a=e.CHM(u).$implicit,d=e.oxw();return e.KtG(d.cancel(a.club_user_id))}),e.qZA()()()()()}if(2&_){const u=o.$implicit,i=e.oxw();e.xp6(3),e.Q6J("routerLink",e.kEZ(10,w,i.routes.memberProfile,u.user_id,u.club_user_id)),e.xp6(2),e.Q6J("routerLink",e.kEZ(14,w,i.routes.memberProfile,u.user_id,u.club_user_id))("src",u.photo,e.LSH),e.xp6(1),e.Q6J("routerLink",e.kEZ(18,w,i.routes.memberProfile,u.user_id,u.club_user_id)),e.xp6(3),e.hij("",u.name," "),e.xp6(1),e.hij(" ",u.surname," "),e.xp6(1),e.Q6J("routerLink",e.kEZ(22,w,i.routes.memberProfile,u.user_id,u.club_user_id)),e.xp6(2),e.Oqu(e.lcZ(14,8,u.date_joined))}}function D(_,o){if(1&_){const u=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){const a=e.CHM(u).$implicit,d=e.oxw();return e.KtG(d.changeLanguage(a.code))}),e._UZ(1,"img",22),e._uU(2),e.qZA()}if(2&_){const u=o.$implicit;e.xp6(1),e.Q6J("src",u.logo,e.LSH),e.xp6(1),e.hij("\xa0 ",u.name," ")}}let O=(()=>{const o=class{constructor(i,r,a,d,U,S,v){this.router=i,this.sideBar=r,this.authSrv=a,this.translate=d,this.clubSrv=U,this.playerSrv=S,this.viewportScroller=v,this.routes=c._,this.openBox=!1,this.miniSidebar=!1,this.addClass=!1,this.language_selected="en",this.pending_members=[],this.default_flag_language="assets/img/user-06.jpg",this.active_languages=[{name:"Espa\xf1ol",logo:"./assets/img/spain.png",code:"es"},{name:"English",logo:"assets/img/uk.png",code:"en"},{name:"Deutsch",logo:"assets/img/germany.png",code:"en"},{name:"Fran\xe7ais",logo:"assets/img/france.png",code:"en"}],this.scroll=()=>{var T=document.getElementById("menu-nav-bar");let f;f=window.innerWidth<350?150:window.innerWidth<500&&window.innerWidth>350?250:window.innerWidth<700&&window.innerWidth>500?350:window.innerWidth<1e3&&window.innerWidth>700?500:650,window.scrollY>=f&&null!=T?T.classList.add("fixed-header"):window.scrollY<f&&null!=T&&T.classList.remove("fixed-header")},this.sideBar.toggleSideBar.subscribe(T=>{this.miniSidebar="true"==T}),this.user=a.user}scrollToAnchroingPosition(i){this.viewportScroller.scrollToAnchor(i),document.getElementById("menu-nav-bar")?.classList.add("fixed-header");var a=document.getElementById("navbar-menu");null!=a&&a.classList.contains("show-menu-mobile")?a.classList.remove("show-menu-mobile"):a?.classList.add("show-menu-mobile")}openMenu(){var i=document.getElementById("navbar-menu");null!=i&&i.classList.contains("show-menu-mobile")?i.classList.remove("show-menu-mobile"):i?.classList.add("show-menu-mobile")}ngOnInit(){window.addEventListener("scroll",this.scroll,!0),this.translate.addLangs(["es","en","fr","de"]),this.translate.setDefaultLang(this.clubSrv.authSrv.language),this.translate.use(this.clubSrv.authSrv.language);let i=this.active_languages.findIndex(r=>r.code==this.clubSrv.authSrv.language);-1!=i&&(this.default_flag_language=this.active_languages[i].logo),(this.user.role.includes("Admin-Club")||this.user.role.includes("Club-Employee"))&&this.clubSrv.getPendingMembers().subscribe(r=>{this.pending_members=r.pending_members})}switchLang(i){localStorage.setItem("language",i),console.log("lang->",this.language_selected),this.translate.use(this.language_selected),this.translate.setDefaultLang(this.language_selected),document.location.reload()}changeLanguage(i){i!=this.clubSrv.authSrv.language&&(localStorage.setItem("language",i),this.translate.use(i),this.translate.setDefaultLang(i),document.location.reload()),console.log(event)}getRoleName(){return this.user.role[0]}openBoxFunc(){this.openBox=!this.openBox;var i=document.getElementsByClassName("main-wrapper")[0];this.openBox?i.classList.add("open-msg-box"):i.classList.remove("open-msg-box")}toggleSideBar(){this.sideBar.switchSideMenuPosition()}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition(),this.addClass=!this.addClass,document.getElementsByTagName("html");var r=document.getElementById("sidebar");this.addClass?r.classList.add("opened"):r.classList.remove("opened"),localStorage.getItem("isMobileSidebar")?r.classList.add("menu-opened"):r.classList.remove("menu-opened")}logout(){this.authSrv.logout()}accept(i){this.playerSrv.acceptClubPlayer(i).subscribe(r=>{if(200==r.message){let a=this.pending_members.findIndex(d=>d.club_user_id==i);-1!=a&&(this.pending_members.splice(a,1),this.pending_members.length>0&&this.openMemberMenu.nativeElement.click())}})}cancel(i){this.playerSrv.cancelClubPlayer(i).subscribe(r=>{if(200==r.message){let a=this.pending_members.findIndex(d=>d.club_user_id==i);-1!=a&&(this.pending_members.splice(a,1),this.pending_members.length>0&&this.openMemberMenu.nativeElement.click())}})}};let _=o;return o.\u0275fac=function(r){return new(r||o)(e.Y36(t.F0),e.Y36(A.G),e.Y36(m.e),e.Y36(h.sK),e.Y36(p.I),e.Y36(M.l),e.Y36(s.EM))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-header"]],viewQuery:function(r,a){if(1&r&&e.Gf(L,5),2&r){let d;e.iGM(d=e.CRH())&&(a.openMemberMenu=d.first)}},decls:253,vars:33,consts:[[1,"header"],[1,"header-left"],[1,"logo",3,"routerLink"],["src","assets/img/logo.png","width","35","height","35","alt",""],["id","toggle_btn","href","javascript:void(0);",3,"click"],["src","assets/img/icons/bar-icon.svg","alt",""],["id","mobile_btn",1,"mobile_btn","float-start",3,"click"],[1,"top-nav-search","mob-view"],["type","text","placeholder","Search here",1,"form-control"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"nav","user-menu","float-end"],[1,"nav-item","dropdown","d-none","d-sm-block"],["href","javascript:void(0);","class","dropdown-toggle nav-link","data-bs-toggle","dropdown",4,"ngIf"],[1,"dropdown-menu","notifications"],[1,"topnav-dropdown-header"],[1,"drop-scroll"],[1,"notification-list"],["class","notification-message ",4,"ngFor","ngForOf"],[1,"nav-item","dropdown","has-arrow","user-profile-list"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link","user-link"],[1,"user-names"],["alt","Admin",1,"flag",3,"src"],[1,"dropdown-menu"],["class","dropdown-item","href","#","onclick","return false;",3,"click",4,"ngFor","ngForOf"],[1,"user-img"],["src","assets/img/user-06.jpg","alt","Admin"],["href","#","onclick","return false;",1,"dropdown-item",3,"click"],[1,"dropdown","mobile-user-menu","float-end"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],[1,"fa-solid","fa-ellipsis-vertical"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"notification-box"],[1,"msg-sidebar","notifications","msg-noti"],["id","msg_list",1,"drop-scroll","msg-list-scroll"],[1,"list-box"],[3,"routerLink"],[1,"list-item"],[1,"list-left"],[1,"avatar"],[1,"list-body"],[1,"message-author"],[1,"message-time"],[1,"clearfix"],[1,"message-content"],[1,"list-item","new-message"],[1,"topnav-dropdown-footer"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link"],["openMemberMenu",""],["src","assets/img/icons/menu-icon-02.svg","alt",""],[1,"pulse"],[1,"notification-message"],[1,"row","my-3"],[1,"col-1"],[1,"col-2","cursor-pointer",3,"routerLink"],["alt","Jornadas",1,"img-fluid",3,"routerLink","src"],[1,"col-6","cursor-pointer",3,"routerLink"],[1,"noti-details"],[1,"noti-title"],[1,"noti-time",3,"routerLink"],[1,"notification-time"],[1,"present-table","attent-status"],[1,"feather","icon-check",3,"click"],[1,"absent-table","attent-status"],[1,"feather","icon-x",3,"click"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.TgZ(4,"span"),e._uU(5,"WE LOVE RACKET"),e.qZA()()(),e.TgZ(6,"a",4),e.NdJ("click",function(){return a.toggleSideBar()}),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"a",6),e.NdJ("click",function(){return a.toggleMobileSideBar()}),e._UZ(9,"img",5),e.qZA(),e.TgZ(10,"div",7)(11,"form"),e._UZ(12,"input",8),e.TgZ(13,"a",9),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"ul",11)(16,"li",12),e.YNc(17,k,4,0,"a",13),e.TgZ(18,"div",14)(19,"div",15)(20,"span"),e._uU(21),e.ALo(22,"translate"),e.qZA()(),e.TgZ(23,"div",16)(24,"ul",17),e.YNc(25,B,21,26,"li",18),e.qZA()()()(),e.TgZ(26,"li",19)(27,"a",20)(28,"div",21)(29,"h5"),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e.TgZ(32,"span"),e._UZ(33,"img",22),e.qZA()(),e.TgZ(34,"div",23),e.YNc(35,D,3,2,"a",24),e.qZA()(),e.TgZ(36,"li",19)(37,"a",20)(38,"div",21)(39,"h5"),e._uU(40),e.qZA(),e.TgZ(41,"span"),e._uU(42),e.qZA()(),e.TgZ(43,"span",25),e._UZ(44,"img",26),e.qZA()(),e.TgZ(45,"div",23)(46,"a",27),e.NdJ("click",function(){return a.logout()}),e._uU(47),e.ALo(48,"translate"),e.qZA()()()(),e.TgZ(49,"div",28)(50,"a",29),e._UZ(51,"i",30),e.qZA(),e.TgZ(52,"div",31)(53,"a",32),e._uU(54,"My Profile"),e.qZA(),e.TgZ(55,"a",32),e._uU(56,"Edit Profile"),e.qZA(),e.TgZ(57,"a",32),e._uU(58,"Settings"),e.qZA(),e.TgZ(59,"a",27),e.NdJ("click",function(){return a.logout()}),e._uU(60,"Logout"),e.qZA()()()(),e.TgZ(61,"div",33)(62,"div",34)(63,"div",15)(64,"span"),e._uU(65,"Messages"),e.qZA()(),e.TgZ(66,"div",35)(67,"ul",36)(68,"li")(69,"a",37)(70,"div",38)(71,"div",39)(72,"span",40),e._uU(73,"R"),e.qZA()(),e.TgZ(74,"div",41)(75,"span",42),e._uU(76,"Richard Miles "),e.qZA(),e.TgZ(77,"span",43),e._uU(78,"12:28 AM"),e.qZA(),e._UZ(79,"div",44),e.TgZ(80,"span",45),e._uU(81,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(82,"li")(83,"a",37)(84,"div",46)(85,"div",39)(86,"span",40),e._uU(87,"J"),e.qZA()(),e.TgZ(88,"div",41)(89,"span",42),e._uU(90,"John Doe"),e.qZA(),e.TgZ(91,"span",43),e._uU(92,"1 Aug"),e.qZA(),e._UZ(93,"div",44),e.TgZ(94,"span",45),e._uU(95,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(96,"li")(97,"a",37)(98,"div",38)(99,"div",39)(100,"span",40),e._uU(101,"T"),e.qZA()(),e.TgZ(102,"div",41)(103,"span",42),e._uU(104," Tarah Shropshire "),e.qZA(),e.TgZ(105,"span",43),e._uU(106,"12:28 AM"),e.qZA(),e._UZ(107,"div",44),e.TgZ(108,"span",45),e._uU(109,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(110,"li")(111,"a",37)(112,"div",38)(113,"div",39)(114,"span",40),e._uU(115,"M"),e.qZA()(),e.TgZ(116,"div",41)(117,"span",42),e._uU(118,"Mike Litorus"),e.qZA(),e.TgZ(119,"span",43),e._uU(120,"12:28 AM"),e.qZA(),e._UZ(121,"div",44),e.TgZ(122,"span",45),e._uU(123,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(124,"li")(125,"a",37)(126,"div",38)(127,"div",39)(128,"span",40),e._uU(129,"C"),e.qZA()(),e.TgZ(130,"div",41)(131,"span",42),e._uU(132," Catherine Manseau "),e.qZA(),e.TgZ(133,"span",43),e._uU(134,"12:28 AM"),e.qZA(),e._UZ(135,"div",44),e.TgZ(136,"span",45),e._uU(137,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(138,"li")(139,"a",37)(140,"div",38)(141,"div",39)(142,"span",40),e._uU(143,"D"),e.qZA()(),e.TgZ(144,"div",41)(145,"span",42),e._uU(146," Domenic Houston "),e.qZA(),e.TgZ(147,"span",43),e._uU(148,"12:28 AM"),e.qZA(),e._UZ(149,"div",44),e.TgZ(150,"span",45),e._uU(151,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(152,"li")(153,"a",37)(154,"div",38)(155,"div",39)(156,"span",40),e._uU(157,"B"),e.qZA()(),e.TgZ(158,"div",41)(159,"span",42),e._uU(160," Buster Wigton "),e.qZA(),e.TgZ(161,"span",43),e._uU(162,"12:28 AM"),e.qZA(),e._UZ(163,"div",44),e.TgZ(164,"span",45),e._uU(165,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(166,"li")(167,"a",37)(168,"div",38)(169,"div",39)(170,"span",40),e._uU(171,"R"),e.qZA()(),e.TgZ(172,"div",41)(173,"span",42),e._uU(174," Rolland Webber "),e.qZA(),e.TgZ(175,"span",43),e._uU(176,"12:28 AM"),e.qZA(),e._UZ(177,"div",44),e.TgZ(178,"span",45),e._uU(179,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(180,"li")(181,"a",37)(182,"div",38)(183,"div",39)(184,"span",40),e._uU(185,"C"),e.qZA()(),e.TgZ(186,"div",41)(187,"span",42),e._uU(188," Claire Mapes "),e.qZA(),e.TgZ(189,"span",43),e._uU(190,"12:28 AM"),e.qZA(),e._UZ(191,"div",44),e.TgZ(192,"span",45),e._uU(193,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(194,"li")(195,"a",37)(196,"div",38)(197,"div",39)(198,"span",40),e._uU(199,"M"),e.qZA()(),e.TgZ(200,"div",41)(201,"span",42),e._uU(202,"Melita Faucher"),e.qZA(),e.TgZ(203,"span",43),e._uU(204,"12:28 AM"),e.qZA(),e._UZ(205,"div",44),e.TgZ(206,"span",45),e._uU(207,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(208,"li")(209,"a",37)(210,"div",38)(211,"div",39)(212,"span",40),e._uU(213,"J"),e.qZA()(),e.TgZ(214,"div",41)(215,"span",42),e._uU(216,"Jeffery Lalor"),e.qZA(),e.TgZ(217,"span",43),e._uU(218,"12:28 AM"),e.qZA(),e._UZ(219,"div",44),e.TgZ(220,"span",45),e._uU(221,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(222,"li")(223,"a",37)(224,"div",38)(225,"div",39)(226,"span",40),e._uU(227,"L"),e.qZA()(),e.TgZ(228,"div",41)(229,"span",42),e._uU(230,"Loren Gatlin"),e.qZA(),e.TgZ(231,"span",43),e._uU(232,"12:28 AM"),e.qZA(),e._UZ(233,"div",44),e.TgZ(234,"span",45),e._uU(235,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(236,"li")(237,"a",37)(238,"div",38)(239,"div",39)(240,"span",40),e._uU(241,"T"),e.qZA()(),e.TgZ(242,"div",41)(243,"span",42),e._uU(244,"Tarah Shropshire"),e.qZA(),e.TgZ(245,"span",43),e._uU(246,"12:28 AM"),e.qZA(),e._UZ(247,"div",44),e.TgZ(248,"span",45),e._uU(249,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()()()(),e.TgZ(250,"div",47)(251,"a",37),e._uU(252,"See all messages"),e.qZA()()()()),2&r&&(e.xp6(2),e.Q6J("routerLink",a.routes.adminDashboard),e.xp6(15),e.Q6J("ngIf",a.pending_members.length>0),e.xp6(4),e.Oqu(e.lcZ(22,27,"members.membership_applications")),e.xp6(4),e.Q6J("ngForOf",a.pending_members),e.xp6(5),e.Oqu(e.lcZ(31,29,"commun_translations.lang")),e.xp6(3),e.Q6J("src",a.default_flag_language,e.LSH),e.xp6(2),e.Q6J("ngForOf",a.active_languages),e.xp6(5),e.hij("",a.user.name," "),e.xp6(2),e.Oqu(a.getRoleName()),e.xp6(5),e.Oqu(e.lcZ(48,31,"commun_translations.logout")),e.xp6(6),e.Q6J("routerLink",a.routes.profile),e.xp6(2),e.Q6J("routerLink",a.routes.editProfile),e.xp6(2),e.Q6J("routerLink",a.routes.settings),e.xp6(12),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat),e.xp6(14),e.Q6J("routerLink",a.routes.chat))},dependencies:[s.sg,s.O5,n._Y,n.JL,n.F,t.rH,h.X$,g],styles:["#home[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]:after{background:rgba(46,55,164,.65)!important;background:url(hero-bg.6b5a923e70d3a9ab.png) bottom no-repeat}.flag[_ngcontent-%COMP%]{width:30px;border-radius:5px}.same-line[_ngcontent-%COMP%]{display:flex!important}.feather[_ngcontent-%COMP%], .cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),_})()},2407:(y,b,l)=>{l.d(b,{k:()=>_});var c=l(27),e=l(6382),t=l(4650),A=l(7945),m=l(6519),h=l(866),p=l(6895),M=l(4153);function s(o,u){if(1&o&&t._UZ(0,"i",13),2&o){const i=t.oxw(2).$implicit;t.Tol(i.icon)}}function n(o,u){if(1&o&&(t.TgZ(0,"li")(1,"a",10)(2,"span",5),t.YNc(3,s,1,2,"i",11),t._UZ(4,"img",12),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()()()),2&o){const i=t.oxw().$implicit,r=t.oxw(2);t.xp6(1),t.ekj("active",r.base===i.base),t.Q6J("routerLink",i.route),t.xp6(2),t.Q6J("ngIf",!0===i.faIcon),t.xp6(1),t.Q6J("src",i.img,t.LSH),t.xp6(2),t.Oqu(t.lcZ(7,6,i.menuValue))}}function g(o,u){if(1&o&&t._UZ(0,"i",13),2&o){const i=t.oxw(2).$implicit;t.Tol(i.icon)}}function L(o,u){if(1&o&&(t.TgZ(0,"li",18)(1,"a",10),t._uU(2),t.ALo(3,"titlecase"),t.qZA()()),2&o){const i=t.oxw().$implicit,r=t.oxw(2).$implicit,a=t.oxw(2);t.Q6J("ngClass",!0===r.showSubRoute?"d-block":"d-none"),t.xp6(1),t.ekj("active",a.currentUrl===i.base),t.Q6J("routerLink",i.route),t.xp6(1),t.hij(" ",t.lcZ(3,5,i.menuValue)," ")}}function k(o,u){if(1&o&&(t.ynx(0),t.YNc(1,L,4,7,"li",17),t.BQk()),2&o){const i=u.$implicit;t.xp6(1),t.Q6J("ngIf",i.show_nav)}}const w=function(o){return{subdrop:o}};function B(o,u){if(1&o){const i=t.EpF();t.TgZ(0,"li",14)(1,"a",15),t.NdJ("click",function(){t.CHM(i);const a=t.oxw().$implicit,d=t.oxw(2);return t.KtG(d.expandSubMenus(a))}),t.TgZ(2,"span",5),t.YNc(3,g,1,2,"i",11),t._UZ(4,"img",12),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t._UZ(8,"span",16),t.qZA(),t.TgZ(9,"ul"),t.YNc(10,k,2,1,"ng-container",2),t.qZA()()}if(2&o){const i=t.oxw().$implicit,r=t.oxw(2);t.xp6(1),t.ekj("active",r.base===i.base),t.Q6J("ngClass",t.VKq(9,w,!0===i.showSubRoute)),t.xp6(2),t.Q6J("ngIf",!0===i.faIcon),t.xp6(1),t.Q6J("src",i.img,t.LSH),t.xp6(2),t.hij(" ",t.lcZ(7,7,i.menuValue),""),t.xp6(4),t.Q6J("ngForOf",i.subMenus)}}function D(o,u){if(1&o&&(t.ynx(0),t.YNc(1,n,8,8,"li",8),t.YNc(2,B,11,11,"li",9),t.BQk()),2&o){const i=u.$implicit;t.xp6(1),t.Q6J("ngIf",!1===i.hasSubRoute),t.xp6(1),t.Q6J("ngIf",!0===i.hasSubRoute)}}function O(o,u){if(1&o&&(t.ynx(0),t.TgZ(1,"li",7)(2,"span"),t._uU(3),t.ALo(4,"titlecase"),t.qZA()(),t.YNc(5,D,3,2,"ng-container",2),t.BQk()),2&o){const i=u.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,i.tittle)),t.xp6(2),t.Q6J("ngForOf",i.menu)}}let _=(()=>{const u=class{constructor(r,a,d,U){this.data=r,this.router=a,this.sideBar=d,this.authSrv=U,this.base="",this.page="",this.currentUrl="",this.classAdd=!1,this.multilevel=[!1,!1,!1],this.routes=e._,this.sidebarData=[],this.sidebarDataDoc=[];let S=localStorage.getItem("user");if(this.user=JSON.parse(S||""),this.user&&this.user.role.includes("Super-Admin"))this.sidebarData=this.data.sideBar;else{let v=[],T=this.user.permissions;this.data.sideBar.forEach(f=>{let x=[];f.menu.forEach(Z=>{let P=Z.subMenus.filter(C=>T.includes(C.permision)&&1==C.show_nav);P.length>0?(Z.subMenus=P,x.push(Z)):T.includes(Z.permision)&&x.push(Z)}),x.length>0&&(f.menu=x,v.push(f))}),this.sidebarData=v}a.events.subscribe(v=>{v instanceof c.m2&&this.getRoutes(v)}),this.getRoutes(this.router)}expandSubMenus(r){sessionStorage.setItem("menuValue",r.menuValue),this.sidebarData.map(a=>{a.menu.map(d=>{d.menuValue==r.menuValue?r.showSubRoute=!r.showSubRoute:d.showSubRoute=!1})})}getRoutes(r){const a=document.body;a.classList.remove("slide-nav"),a.classList.remove("opened"),this.currentUrl=r.url;const d=r.url.split("/");this.base=d[1],this.page=d[2]}miniSideBarMouseHover(r){this.sideBar.expandSideBar.next("over"==r?"true":"false")}logout(){this.authSrv.logout()}};let o=u;return u.\u0275fac=function(a){return new(a||u)(t.Y36(A.D),t.Y36(c.F0),t.Y36(m.G),t.Y36(h.e))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-sidebar"]],decls:11,vars:1,consts:[["id","sidebar",1,"sidebar",3,"mouseover","mouseout"],["id","sidebar-menu",1,"sidebar-menu"],[4,"ngFor","ngForOf"],[1,"logout-btn"],["href","#","onclick","return false;",3,"click"],[1,"menu-side"],["src","assets/img/icons/logout.svg","alt",""],[1,"menu-title"],[4,"ngIf"],["class","submenu",4,"ngIf"],[3,"routerLink"],["class","fa",3,"class",4,"ngIf"],["alt","",3,"src"],[1,"fa"],[1,"submenu"],["href","javascript:void(0)",3,"ngClass","click"],[1,"menu-arrow"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0),t.NdJ("mouseover",function(){return d.miniSideBarMouseHover("over")})("mouseout",function(){return d.miniSideBarMouseHover("out")}),t.TgZ(1,"ng-scrollbar")(2,"div",1)(3,"ul"),t.YNc(4,O,6,4,"ng-container",2),t.qZA(),t.TgZ(5,"div",3)(6,"a",4),t.NdJ("click",function(){return d.logout()}),t.TgZ(7,"span",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Logout"),t.qZA()()()()()()),2&a&&(t.xp6(4),t.Q6J("ngForOf",d.sidebarData))},dependencies:[p.mk,p.sg,p.O5,M.KC,c.rH,p.rS]}),o})()},9183:(y,b,l)=>{l.d(b,{I:()=>m});var c=l(529),e=l(5862),t=l(4650),A=l(866);let m=(()=>{const p=class{constructor(s,n){this.http=s,this.authSrv=n}listClubs(s=1,n=""){let g=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs?page="+s+"&search="+n,{headers:g})}getClub(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/"+s,{headers:n})}storeDataClub(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs",s,{headers:n})}storeWeeklyScheduleClub(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs/updateWeekly",s,{headers:n})}getClubProfile(){let s=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/profile",{headers:s})}editClub(s,n){let g=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/clubs/update/"+s,n,{headers:g})}deleteClub(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(e.$g+"/clubs/"+s,{headers:n})}config(){let s=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/config",{headers:s})}getPendingMembers(){let s=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/clubs/pending-members",{headers:s})}};let h=p;return p.\u0275fac=function(n){return new(n||p)(t.LFG(c.eN),t.LFG(A.e))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),h})()},4279:(y,b,l)=>{l.d(b,{l:()=>m});var c=l(529),e=l(5862),t=l(4650),A=l(866);let m=(()=>{const p=class{constructor(s,n){this.http=s,this.authSrv=n}editPlayer(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/player-data/update",s,{headers:n})}getProfile(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/player-data/profile",{headers:n})}getMyClubs(){let s=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/player-data/get-my-clubs",{headers:s})}getOtherClubs(){let s=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(e.$g+"/player-data/other-clubs",{headers:s})}regiterClub(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/player-data/register-club/"+s,null,{headers:n})}cancelRegiterClub(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/player-data/cancel-register-club/"+s,null,{headers:n})}deleteMember(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(e.$g+"/player-data/"+s,{headers:n})}acceptClubPlayer(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/player-data/accept-club-user/"+s,null,{headers:n})}cancelClubPlayer(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/player-data/cancel-club-user/"+s,null,{headers:n})}getPlayerData(s){let n=new c.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(e.$g+"/player-data/get-member-data/"+s,null,{headers:n})}};let h=p;return p.\u0275fac=function(n){return new(n||p)(t.LFG(c.eN),t.LFG(A.e))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),h})()},9744:(y,b,l)=>{l.d(b,{a:()=>m});var c=l(6382),e=l(4650),t=l(27),A=l(866);let m=(()=>{const p=class{constructor(s,n){this.router=s,this.autSrv=n}canActivate(){let s=localStorage.getItem("user");if(this.user=JSON.parse(s||""),this.token=localStorage.getItem("token"),null!=this.user&&null!=this.token){let g=JSON.parse(atob(this.token.split(".")[1])).exp;return!(Math.floor((new Date).getTime()/1e3)>=g&&(this.autSrv.logout(),1))}return this.router.navigate([c._.login]),!1}};let h=p;return p.\u0275fac=function(n){return new(n||p)(e.LFG(t.F0),e.LFG(A.e))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),h})()},6519:(y,b,l)=>{l.d(b,{G:()=>A});var c=l(1135),e=l(4650),t=l(7945);let A=(()=>{const h=class{constructor(M){this.data=M,this.toggleSideBar=new c.X(localStorage.getItem("isMiniSidebar")||"false"),this.toggleMobileSideBar=new c.X(localStorage.getItem("isMobileSidebar")||"false"),this.expandSideBar=new c.X("false")}switchSideMenuPosition(){localStorage.getItem("isMiniSidebar")?(this.toggleSideBar.next("false"),localStorage.removeItem("isMiniSidebar"),this.data.sideBar.map(M=>{M.menu.map(s=>{const n=sessionStorage.getItem("menuValue");n&&n==s.menuValue&&(s.showSubRoute=!0)})})):(this.toggleSideBar.next("true"),localStorage.setItem("isMiniSidebar","true"),this.data.sideBar.map(M=>{M.menu.map(s=>{s.showSubRoute=!1})}))}switchMobileSideBarPosition(){localStorage.getItem("isMobileSidebar")?(this.toggleMobileSideBar.next("false"),localStorage.removeItem("isMobileSidebar")):(this.toggleMobileSideBar.next("true"),localStorage.setItem("isMobileSidebar","true"))}};let m=h;return h.\u0275fac=function(s){return new(s||h)(e.LFG(t.D))},h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),m})()}}]);