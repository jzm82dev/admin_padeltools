"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[6341],{9689:(T,Z,a)=>{a.d(Z,{G:()=>g});var l=a(6382),e=a(4650),t=a(27),h=a(6519),p=a(866),d=a(433);let g=(()=>{class n{constructor(r,v,i){this.router=r,this.sideBar=v,this.authSrv=i,this.routes=l._,this.openBox=!1,this.miniSidebar=!1,this.addClass=!1,this.sideBar.toggleSideBar.subscribe(c=>{this.miniSidebar="true"==c}),this.user=i.user}getRoleName(){return this.user.role[0]}openBoxFunc(){this.openBox=!this.openBox;var r=document.getElementsByClassName("main-wrapper")[0];this.openBox?r.classList.add("open-msg-box"):r.classList.remove("open-msg-box")}toggleSideBar(){this.sideBar.switchSideMenuPosition()}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition(),this.addClass=!this.addClass;var r=document.getElementsByTagName("html")[0],v=document.getElementById("sidebar");this.addClass?(r.classList.add("menu-opened"),v.classList.add("opened")):(r.classList.remove("menu-opened"),v.classList.remove("opened"))}logout(){this.authSrv.logout()}static#e=this.\u0275fac=function(v){return new(v||n)(e.Y36(t.F0),e.Y36(h.G),e.Y36(p.e))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-header"]],decls:339,vars:30,consts:[[1,"header"],[1,"header-left"],[1,"logo",3,"routerLink"],["src","assets/img/logo.png","width","35","height","35","alt",""],["id","toggle_btn","href","javascript:void(0);",3,"click"],["src","assets/img/icons/bar-icon.svg","alt",""],["id","mobile_btn",1,"mobile_btn","float-start",3,"click"],[1,"top-nav-search","mob-view"],["type","text","placeholder","Search here",1,"form-control"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"nav","user-menu","float-end"],[1,"nav-item","dropdown","d-none","d-sm-block"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link"],["src","assets/img/icons/note-icon-02.svg","alt",""],[1,"pulse"],[1,"dropdown-menu","notifications"],[1,"topnav-dropdown-header"],[1,"drop-scroll"],[1,"notification-list"],[1,"notification-message"],[3,"routerLink"],[1,"media"],[1,"avatar"],["alt","John Doe","src","assets/img/user.jpg",1,"img-fluid"],[1,"media-body"],[1,"noti-details"],[1,"noti-title"],[1,"noti-time"],[1,"notification-time"],[1,"topnav-dropdown-footer"],["id","open_msg_box",1,"hasnotifications","nav-link",3,"click"],["src","assets/img/icons/note-icon-01.svg","alt",""],[1,"nav-item","dropdown","has-arrow","user-profile-list"],["href","javascript:void(0);","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link","user-link"],[1,"user-names"],[1,"user-img"],["src","assets/img/user-06.jpg","alt","Admin"],[1,"dropdown-menu"],[1,"dropdown-item",3,"routerLink"],["href","#","onclick","return false;",1,"dropdown-item",3,"click"],[1,"nav-item"],[1,"hasnotifications","nav-link",3,"routerLink"],["src","assets/img/icons/setting-icon-01.svg","alt",""],[1,"dropdown","mobile-user-menu","float-end"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],[1,"fa-solid","fa-ellipsis-vertical"],[1,"dropdown-menu","dropdown-menu-end"],[1,"notification-box"],[1,"msg-sidebar","notifications","msg-noti"],["id","msg_list",1,"drop-scroll","msg-list-scroll"],[1,"list-box"],[1,"list-item"],[1,"list-left"],[1,"list-body"],[1,"message-author"],[1,"message-time"],[1,"clearfix"],[1,"message-content"],[1,"list-item","new-message"]],template:function(v,i){1&v&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.TgZ(4,"span"),e._uU(5,"Pre Clinic"),e.qZA()()(),e.TgZ(6,"a",4),e.NdJ("click",function(){return i.toggleSideBar()}),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"a",6),e.NdJ("click",function(){return i.toggleMobileSideBar()}),e._UZ(9,"img",5),e.qZA(),e.TgZ(10,"div",7)(11,"form"),e._UZ(12,"input",8),e.TgZ(13,"a",9),e._UZ(14,"img",10),e.qZA()()(),e.TgZ(15,"ul",11)(16,"li",12)(17,"a",13),e._UZ(18,"img",14)(19,"span",15),e.qZA(),e.TgZ(20,"div",16)(21,"div",17)(22,"span"),e._uU(23,"Notifications"),e.qZA()(),e.TgZ(24,"div",18)(25,"ul",19)(26,"li",20)(27,"a",21)(28,"div",22)(29,"span",23),e._UZ(30,"img",24),e.qZA(),e.TgZ(31,"div",25)(32,"p",26)(33,"span",27),e._uU(34,"John Doe"),e.qZA(),e._uU(35," added new task "),e.TgZ(36,"span",27),e._uU(37,"Patient appointment booking"),e.qZA()(),e.TgZ(38,"p",28)(39,"span",29),e._uU(40,"4 mins ago"),e.qZA()()()()()(),e.TgZ(41,"li",20)(42,"a",21)(43,"div",22)(44,"span",23),e._uU(45,"V"),e.qZA(),e.TgZ(46,"div",25)(47,"p",26)(48,"span",27),e._uU(49,"Tarah Shropshire"),e.qZA(),e._uU(50," changed the task name "),e.TgZ(51,"span",27),e._uU(52,"Appointment booking with payment gateway"),e.qZA()(),e.TgZ(53,"p",28)(54,"span",29),e._uU(55,"6 mins ago"),e.qZA()()()()()(),e.TgZ(56,"li",20)(57,"a",21)(58,"div",22)(59,"span",23),e._uU(60,"L"),e.qZA(),e.TgZ(61,"div",25)(62,"p",26)(63,"span",27),e._uU(64,"Misty Tison"),e.qZA(),e._uU(65," added "),e.TgZ(66,"span",27),e._uU(67,"Domenic Houston"),e.qZA(),e._uU(68," and "),e.TgZ(69,"span",27),e._uU(70,"Claire Mapes"),e.qZA(),e._uU(71," to project "),e.TgZ(72,"span",27),e._uU(73,"Doctor available module"),e.qZA()(),e.TgZ(74,"p",28)(75,"span",29),e._uU(76,"8 mins ago"),e.qZA()()()()()(),e.TgZ(77,"li",20)(78,"a",21)(79,"div",22)(80,"span",23),e._uU(81,"G"),e.qZA(),e.TgZ(82,"div",25)(83,"p",26)(84,"span",27),e._uU(85,"Rolland Webber"),e.qZA(),e._uU(86," completed task "),e.TgZ(87,"span",27),e._uU(88,"Patient and Doctor video conferencing"),e.qZA()(),e.TgZ(89,"p",28)(90,"span",29),e._uU(91,"12 mins ago"),e.qZA()()()()()(),e.TgZ(92,"li",20)(93,"a",21)(94,"div",22)(95,"span",23),e._uU(96,"V"),e.qZA(),e.TgZ(97,"div",25)(98,"p",26)(99,"span",27),e._uU(100,"Bernardo Galaviz"),e.qZA(),e._uU(101," added new task "),e.TgZ(102,"span",27),e._uU(103,"Private chat module"),e.qZA()(),e.TgZ(104,"p",28)(105,"span",29),e._uU(106,"2 days ago"),e.qZA()()()()()()()(),e.TgZ(107,"div",30)(108,"a",21),e._uU(109,"View all Notifications"),e.qZA()()()(),e.TgZ(110,"li",12)(111,"a",31),e.NdJ("click",function(){return i.openBoxFunc()}),e._UZ(112,"img",32)(113,"span",15),e.qZA()(),e.TgZ(114,"li",33)(115,"a",34)(116,"div",35)(117,"h5"),e._uU(118),e.qZA(),e.TgZ(119,"span"),e._uU(120),e.qZA()(),e.TgZ(121,"span",36),e._UZ(122,"img",37),e.qZA()(),e.TgZ(123,"div",38)(124,"a",39),e._uU(125,"My Profile"),e.qZA(),e.TgZ(126,"a",39),e._uU(127,"Edit Profile"),e.qZA(),e.TgZ(128,"a",39),e._uU(129,"Settings"),e.qZA(),e.TgZ(130,"a",40),e.NdJ("click",function(){return i.logout()}),e._uU(131,"Logout"),e.qZA()()(),e.TgZ(132,"li",41)(133,"a",42),e._UZ(134,"img",43),e.qZA()()(),e.TgZ(135,"div",44)(136,"a",45),e._UZ(137,"i",46),e.qZA(),e.TgZ(138,"div",47)(139,"a",39),e._uU(140,"My Profile"),e.qZA(),e.TgZ(141,"a",39),e._uU(142,"Edit Profile"),e.qZA(),e.TgZ(143,"a",39),e._uU(144,"Settings"),e.qZA(),e.TgZ(145,"a",40),e.NdJ("click",function(){return i.logout()}),e._uU(146,"Logout"),e.qZA()()()(),e.TgZ(147,"div",48)(148,"div",49)(149,"div",17)(150,"span"),e._uU(151,"Messages"),e.qZA()(),e.TgZ(152,"div",50)(153,"ul",51)(154,"li")(155,"a",21)(156,"div",52)(157,"div",53)(158,"span",23),e._uU(159,"R"),e.qZA()(),e.TgZ(160,"div",54)(161,"span",55),e._uU(162,"Richard Miles "),e.qZA(),e.TgZ(163,"span",56),e._uU(164,"12:28 AM"),e.qZA(),e._UZ(165,"div",57),e.TgZ(166,"span",58),e._uU(167,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(168,"li")(169,"a",21)(170,"div",59)(171,"div",53)(172,"span",23),e._uU(173,"J"),e.qZA()(),e.TgZ(174,"div",54)(175,"span",55),e._uU(176,"John Doe"),e.qZA(),e.TgZ(177,"span",56),e._uU(178,"1 Aug"),e.qZA(),e._UZ(179,"div",57),e.TgZ(180,"span",58),e._uU(181,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(182,"li")(183,"a",21)(184,"div",52)(185,"div",53)(186,"span",23),e._uU(187,"T"),e.qZA()(),e.TgZ(188,"div",54)(189,"span",55),e._uU(190," Tarah Shropshire "),e.qZA(),e.TgZ(191,"span",56),e._uU(192,"12:28 AM"),e.qZA(),e._UZ(193,"div",57),e.TgZ(194,"span",58),e._uU(195,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(196,"li")(197,"a",21)(198,"div",52)(199,"div",53)(200,"span",23),e._uU(201,"M"),e.qZA()(),e.TgZ(202,"div",54)(203,"span",55),e._uU(204,"Mike Litorus"),e.qZA(),e.TgZ(205,"span",56),e._uU(206,"12:28 AM"),e.qZA(),e._UZ(207,"div",57),e.TgZ(208,"span",58),e._uU(209,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(210,"li")(211,"a",21)(212,"div",52)(213,"div",53)(214,"span",23),e._uU(215,"C"),e.qZA()(),e.TgZ(216,"div",54)(217,"span",55),e._uU(218," Catherine Manseau "),e.qZA(),e.TgZ(219,"span",56),e._uU(220,"12:28 AM"),e.qZA(),e._UZ(221,"div",57),e.TgZ(222,"span",58),e._uU(223,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(224,"li")(225,"a",21)(226,"div",52)(227,"div",53)(228,"span",23),e._uU(229,"D"),e.qZA()(),e.TgZ(230,"div",54)(231,"span",55),e._uU(232," Domenic Houston "),e.qZA(),e.TgZ(233,"span",56),e._uU(234,"12:28 AM"),e.qZA(),e._UZ(235,"div",57),e.TgZ(236,"span",58),e._uU(237,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(238,"li")(239,"a",21)(240,"div",52)(241,"div",53)(242,"span",23),e._uU(243,"B"),e.qZA()(),e.TgZ(244,"div",54)(245,"span",55),e._uU(246," Buster Wigton "),e.qZA(),e.TgZ(247,"span",56),e._uU(248,"12:28 AM"),e.qZA(),e._UZ(249,"div",57),e.TgZ(250,"span",58),e._uU(251,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(252,"li")(253,"a",21)(254,"div",52)(255,"div",53)(256,"span",23),e._uU(257,"R"),e.qZA()(),e.TgZ(258,"div",54)(259,"span",55),e._uU(260," Rolland Webber "),e.qZA(),e.TgZ(261,"span",56),e._uU(262,"12:28 AM"),e.qZA(),e._UZ(263,"div",57),e.TgZ(264,"span",58),e._uU(265,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(266,"li")(267,"a",21)(268,"div",52)(269,"div",53)(270,"span",23),e._uU(271,"C"),e.qZA()(),e.TgZ(272,"div",54)(273,"span",55),e._uU(274," Claire Mapes "),e.qZA(),e.TgZ(275,"span",56),e._uU(276,"12:28 AM"),e.qZA(),e._UZ(277,"div",57),e.TgZ(278,"span",58),e._uU(279,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(280,"li")(281,"a",21)(282,"div",52)(283,"div",53)(284,"span",23),e._uU(285,"M"),e.qZA()(),e.TgZ(286,"div",54)(287,"span",55),e._uU(288,"Melita Faucher"),e.qZA(),e.TgZ(289,"span",56),e._uU(290,"12:28 AM"),e.qZA(),e._UZ(291,"div",57),e.TgZ(292,"span",58),e._uU(293,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(294,"li")(295,"a",21)(296,"div",52)(297,"div",53)(298,"span",23),e._uU(299,"J"),e.qZA()(),e.TgZ(300,"div",54)(301,"span",55),e._uU(302,"Jeffery Lalor"),e.qZA(),e.TgZ(303,"span",56),e._uU(304,"12:28 AM"),e.qZA(),e._UZ(305,"div",57),e.TgZ(306,"span",58),e._uU(307,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(308,"li")(309,"a",21)(310,"div",52)(311,"div",53)(312,"span",23),e._uU(313,"L"),e.qZA()(),e.TgZ(314,"div",54)(315,"span",55),e._uU(316,"Loren Gatlin"),e.qZA(),e.TgZ(317,"span",56),e._uU(318,"12:28 AM"),e.qZA(),e._UZ(319,"div",57),e.TgZ(320,"span",58),e._uU(321,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()(),e.TgZ(322,"li")(323,"a",21)(324,"div",52)(325,"div",53)(326,"span",23),e._uU(327,"T"),e.qZA()(),e.TgZ(328,"div",54)(329,"span",55),e._uU(330,"Tarah Shropshire"),e.qZA(),e.TgZ(331,"span",56),e._uU(332,"12:28 AM"),e.qZA(),e._UZ(333,"div",57),e.TgZ(334,"span",58),e._uU(335,"Lorem ipsum dolor sit amet, consectetur adipiscing"),e.qZA()()()()()()(),e.TgZ(336,"div",30)(337,"a",21),e._uU(338,"See all messages"),e.qZA()()()()),2&v&&(e.xp6(2),e.Q6J("routerLink",i.routes.adminDashboard),e.xp6(25),e.Q6J("routerLink",i.routes.activities),e.xp6(15),e.Q6J("routerLink",i.routes.activities),e.xp6(15),e.Q6J("routerLink",i.routes.activities),e.xp6(21),e.Q6J("routerLink",i.routes.activities),e.xp6(15),e.Q6J("routerLink",i.routes.activities),e.xp6(15),e.Q6J("routerLink",i.routes.activities),e.xp6(10),e.hij("",i.user.name," "),e.xp6(2),e.Oqu(i.getRoleName()),e.xp6(4),e.Q6J("routerLink",i.routes.profile),e.xp6(2),e.Q6J("routerLink",i.routes.editProfile),e.xp6(2),e.Q6J("routerLink",i.routes.settings),e.xp6(5),e.Q6J("routerLink",i.routes.settings),e.xp6(6),e.Q6J("routerLink",i.routes.profile),e.xp6(2),e.Q6J("routerLink",i.routes.editProfile),e.xp6(2),e.Q6J("routerLink",i.routes.settings),e.xp6(12),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat),e.xp6(14),e.Q6J("routerLink",i.routes.chat))},dependencies:[d._Y,d.JL,d.F,t.rH]})}return n})()},2407:(T,Z,a)=>{a.d(Z,{k:()=>I});var l=a(27),e=a(6382),t=a(4650),h=a(7945),p=a(6519),d=a(866),g=a(6895),n=a(4153);function m(o,U){if(1&o&&t._UZ(0,"i",12),2&o){const s=t.oxw(2).$implicit;t.Tol(s.icon)}}function r(o,U){if(1&o&&(t.TgZ(0,"li")(1,"a",4)(2,"span",5),t.YNc(3,m,1,2,"i",10),t._UZ(4,"img",11),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()()()),2&o){const s=t.oxw().$implicit,u=t.oxw(2);t.xp6(1),t.ekj("active",u.base===s.base),t.Q6J("routerLink",s.route),t.xp6(2),t.Q6J("ngIf",!0===s.faIcon),t.xp6(1),t.Q6J("src",s.img,t.LSH),t.xp6(2),t.Oqu(t.lcZ(7,6,s.menuValue))}}function v(o,U){if(1&o&&t._UZ(0,"i",12),2&o){const s=t.oxw(2).$implicit;t.Tol(s.icon)}}function i(o,U){if(1&o&&(t.TgZ(0,"li",17)(1,"a",4),t._uU(2),t.ALo(3,"titlecase"),t.qZA()()),2&o){const s=t.oxw().$implicit,u=t.oxw(2).$implicit,_=t.oxw(2);t.Q6J("ngClass",!0===u.showSubRoute?"d-block":"d-none"),t.xp6(1),t.ekj("active",_.currentUrl===s.base),t.Q6J("routerLink",s.route),t.xp6(1),t.hij(" ",t.lcZ(3,5,s.menuValue)," ")}}function c(o,U){if(1&o&&(t.ynx(0),t.YNc(1,i,4,7,"li",16),t.BQk()),2&o){const s=U.$implicit;t.xp6(1),t.Q6J("ngIf",s.show_nav)}}const M=function(o){return{subdrop:o}};function A(o,U){if(1&o){const s=t.EpF();t.TgZ(0,"li",13)(1,"a",14),t.NdJ("click",function(){t.CHM(s);const _=t.oxw().$implicit,f=t.oxw(2);return t.KtG(f.expandSubMenus(_))}),t.TgZ(2,"span",5),t.YNc(3,v,1,2,"i",10),t._UZ(4,"img",11),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t._UZ(8,"span",15),t.qZA(),t.TgZ(9,"ul"),t.YNc(10,c,2,1,"ng-container",2),t.qZA()()}if(2&o){const s=t.oxw().$implicit,u=t.oxw(2);t.xp6(1),t.ekj("active",u.base===s.base),t.Q6J("ngClass",t.VKq(9,M,!0===s.showSubRoute)),t.xp6(2),t.Q6J("ngIf",!0===s.faIcon),t.xp6(1),t.Q6J("src",s.img,t.LSH),t.xp6(2),t.hij(" ",t.lcZ(7,7,s.menuValue),""),t.xp6(4),t.Q6J("ngForOf",s.subMenus)}}function q(o,U){if(1&o&&(t.ynx(0),t.YNc(1,r,8,8,"li",8),t.YNc(2,A,11,11,"li",9),t.BQk()),2&o){const s=U.$implicit;t.xp6(1),t.Q6J("ngIf",!1===s.hasSubRoute),t.xp6(1),t.Q6J("ngIf",!0===s.hasSubRoute)}}function C(o,U){if(1&o&&(t.ynx(0),t.TgZ(1,"li",7)(2,"span"),t._uU(3),t.ALo(4,"titlecase"),t.qZA()(),t.YNc(5,q,3,2,"ng-container",2),t.BQk()),2&o){const s=U.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,s.tittle)),t.xp6(2),t.Q6J("ngForOf",s.menu)}}let I=(()=>{class o{constructor(s,u,_,f){this.data=s,this.router=u,this.sideBar=_,this.authSrv=f,this.base="",this.page="",this.currentUrl="",this.classAdd=!1,this.multilevel=[!1,!1,!1],this.routes=e._,this.sidebarData=[],this.sidebarDataDoc=[];let B=localStorage.getItem("user");if(this.user=JSON.parse(B||""),this.user&&this.user.role.includes("Super-Admin"))this.sidebarData=this.data.sideBar;else{let L=[],b=this.user.permissions;console.log(b),this.data.sideBar.forEach(D=>{let S=[];D.menu.forEach(E=>{(E.subMenus.filter(O=>b.includes(O.permision)&&1==O.show_nav).length>0||b.includes(E.permision))&&S.push(E)}),S.length>0&&(D.menu=S,L.push(D))}),this.sidebarData=L}u.events.subscribe(L=>{L instanceof l.m2&&this.getRoutes(L)}),this.getRoutes(this.router)}expandSubMenus(s){sessionStorage.setItem("menuValue",s.menuValue),this.sidebarData.map(u=>{u.menu.map(_=>{_.menuValue==s.menuValue?s.showSubRoute=!s.showSubRoute:_.showSubRoute=!1})})}getRoutes(s){const u=document.body;u.classList.remove("slide-nav"),u.classList.remove("opened"),this.currentUrl=s.url;const _=s.url.split("/");this.base=_[1],this.page=_[2]}miniSideBarMouseHover(s){this.sideBar.expandSideBar.next("over"==s?"true":"false")}static#e=this.\u0275fac=function(u){return new(u||o)(t.Y36(h.D),t.Y36(l.F0),t.Y36(p.G),t.Y36(d.e))};static#t=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-sidebar"]],decls:11,vars:2,consts:[["id","sidebar",1,"sidebar",3,"mouseover","mouseout"],["id","sidebar-menu",1,"sidebar-menu"],[4,"ngFor","ngForOf"],[1,"logout-btn"],[3,"routerLink"],[1,"menu-side"],["src","assets/img/icons/logout.svg","alt",""],[1,"menu-title"],[4,"ngIf"],["class","submenu",4,"ngIf"],["class","fa",3,"class",4,"ngIf"],["alt","",3,"src"],[1,"fa"],[1,"submenu"],["href","javascript:void(0)",3,"ngClass","click"],[1,"menu-arrow"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(u,_){1&u&&(t.TgZ(0,"div",0),t.NdJ("mouseover",function(){return _.miniSideBarMouseHover("over")})("mouseout",function(){return _.miniSideBarMouseHover("out")}),t.TgZ(1,"ng-scrollbar")(2,"div",1)(3,"ul"),t.YNc(4,C,6,4,"ng-container",2),t.qZA(),t.TgZ(5,"div",3)(6,"a",4)(7,"span",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Logout"),t.qZA()()()()()()),2&u&&(t.xp6(4),t.Q6J("ngForOf",_.sidebarData),t.xp6(2),t.Q6J("routerLink",_.routes.login))},dependencies:[g.mk,g.sg,g.O5,n.KC,l.rH,g.rS]})}return o})()},5862:(T,Z,a)=>{a.d(Z,{$g:()=>t});const t="https://api.padeltools.net/api"},866:(T,Z,a)=>{a.d(Z,{e:()=>m});var l=a(6382),e=a(5862),t=a(4004),h=a(262),p=a(9646),d=a(4650),g=a(27),n=a(529);let m=(()=>{class r{constructor(i,c){this.router=i,this.http=c,this.getLocalStorage()}login(i,c){return console.log("entrmos en el login"),this.http.post(e.$g+"/auth/login",{email:i,password:c}).pipe((0,t.U)(A=>this.saveLocalStorage(A)),(0,h.K)(A=>(console.log(A),(0,p.of)(void 0))))}saveLocalStorage(i){return console.log("response login backend:",i),!(!i||!i.access_token||(console.log("entramos en el if"),localStorage.setItem("token",i.access_token),localStorage.setItem("user",JSON.stringify(i.user)),localStorage.setItem("authenticated","true"),0))}logout(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("authenticated"),this.router.navigate([l._.login])}getLocalStorage(){if(localStorage.getItem("token")&&localStorage.getItem("user")){let i=localStorage.getItem("user");this.user=JSON.parse(i||""),this.token=localStorage.getItem("token")}else this.user=null,this.token=null}static#e=this.\u0275fac=function(c){return new(c||r)(d.LFG(g.F0),d.LFG(n.eN))};static#t=this.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},9744:(T,Z,a)=>{a.d(Z,{a:()=>p});var l=a(6382),e=a(4650),t=a(27),h=a(866);let p=(()=>{class d{constructor(n,m){this.router=n,this.autSrv=m}canActivate(){let n=localStorage.getItem("user");if(this.user=JSON.parse(n||""),this.token=localStorage.getItem("token"),null!=this.user&&null!=this.token){let r=JSON.parse(atob(this.token.split(".")[1])).exp;return!(Math.floor((new Date).getTime()/1e3)>=r&&(this.autSrv.logout(),1))}return this.router.navigate([l._.login]),!1}static#e=this.\u0275fac=function(m){return new(m||d)(e.LFG(t.F0),e.LFG(h.e))};static#t=this.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},6519:(T,Z,a)=>{a.d(Z,{G:()=>h});var l=a(1135),e=a(4650),t=a(7945);let h=(()=>{class p{constructor(g){this.data=g,this.toggleSideBar=new l.X(localStorage.getItem("isMiniSidebar")||"false"),this.toggleMobileSideBar=new l.X(localStorage.getItem("isMobileSidebar")||"false"),this.expandSideBar=new l.X("false")}switchSideMenuPosition(){localStorage.getItem("isMiniSidebar")?(this.toggleSideBar.next("false"),localStorage.removeItem("isMiniSidebar"),this.data.sideBar.map(g=>{g.menu.map(n=>{const m=sessionStorage.getItem("menuValue");m&&m==n.menuValue&&(n.showSubRoute=!0)})})):(this.toggleSideBar.next("true"),localStorage.setItem("isMiniSidebar","true"),this.data.sideBar.map(g=>{g.menu.map(n=>{n.showSubRoute=!1})}))}switchMobileSideBarPosition(){localStorage.getItem("isMobileSidebar")?(this.toggleMobileSideBar.next("false"),localStorage.removeItem("isMobileSidebar")):(this.toggleMobileSideBar.next("true"),localStorage.setItem("isMobileSidebar","true"))}static#e=this.\u0275fac=function(n){return new(n||p)(e.LFG(t.D))};static#t=this.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);