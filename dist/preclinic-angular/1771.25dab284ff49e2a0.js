"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[1771],{1771:(Q,u,s)=>{s.r(u),s.d(u,{PlayerManagementModule:()=>V});var c=s(6895),d=s(27),i=s(4650),p=s(6519),v=s(7945),b=s(8730),S=s(2407);const B=function(e,t,F){return{"expand-menu":e,"mini-sidebar":t,"slide-nav":F}},m=function(e){return{"d-none":e}},g=function(e){return{opened:e}},y=[{path:"",component:(()=>{const t=class{constructor(h,n,a){this.sideBar=h,this.router=n,this.data=a,this.miniSidebar="false",this.expandMenu="false",this.mobileSidebar="false",this.sideBarActivePath=!1,this.headerActivePath=!1,this.base="",this.page="",this.currentUrl="",this.sideBar.toggleSideBar.subscribe(r=>{this.miniSidebar="true"==r?"true":"false"}),this.sideBar.toggleMobileSideBar.subscribe(r=>{this.mobileSidebar="true"==r||"true"==r?"true":"false"}),this.sideBar.expandSideBar.subscribe(r=>{this.expandMenu=r,"false"==r&&"true"==this.miniSidebar&&this.data.sideBar.map(o=>{o.menu.map(l=>{l.showSubRoute=!1})}),"true"==r&&"true"==this.miniSidebar&&this.data.sideBar.map(o=>{o.menu.map(l=>{const f=sessionStorage.getItem("menuValue");l.showSubRoute=!(!f||f!=l.menuValue)})})}),this.getRoutes(this.router)}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition()}getRoutes(h){"confirm-mail"===h.url.split("/")[2]?(this.sideBarActivePath=!1,this.headerActivePath=!1):(this.sideBarActivePath=!0,this.headerActivePath=!0)}};let e=t;return t.\u0275fac=function(n){return new(n||t)(i.Y36(p.G),i.Y36(d.F0),i.Y36(v.D))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-player-management"]],decls:5,vars:14,consts:[[1,"main-wrapper",3,"ngClass"],[3,"ngClass"],[1,"sidebar-overlay",3,"ngClass"]],template:function(n,a){1&n&&(i.TgZ(0,"div",0),i._UZ(1,"app-header",1)(2,"app-sidebar",1)(3,"router-outlet")(4,"div",2),i.qZA()),2&n&&(i.Q6J("ngClass",i.kEZ(4,B,"true"===a.expandMenu&&"true"===a.miniSidebar,"true"===a.miniSidebar,"true"===a.mobileSidebar)),i.xp6(1),i.Q6J("ngClass",i.VKq(8,m,!1===a.sideBarActivePath&&!1===a.headerActivePath)),i.xp6(1),i.Q6J("ngClass",i.VKq(10,m,!1===a.sideBarActivePath&&!1===a.headerActivePath)),i.xp6(2),i.Q6J("ngClass",i.VKq(12,g,"true"===a.mobileSidebar)))},dependencies:[c.mk,d.lC,b.G,S.k]}),e})(),canActivate:[s(9744).a],children:[{path:"player/data",loadChildren:()=>s.e(8046).then(s.bind(s,8046)).then(e=>e.PlayerModule)},{path:"player/clubs",loadChildren:()=>s.e(7913).then(s.bind(s,7913)).then(e=>e.ClubModule)},{path:"player/other-clubs",loadChildren:()=>s.e(7525).then(s.bind(s,7525)).then(e=>e.OtherClubModule)}]}];let P=(()=>{const t=class{};let e=t;return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[d.Bz.forChild(y),d.Bz]}),e})();var J=s(5108);let V=(()=>{const t=class{};let e=t;return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[c.ez,P,J.m]}),e})()}}]);