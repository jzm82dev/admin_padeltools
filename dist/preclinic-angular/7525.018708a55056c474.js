"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[7525],{7525:(U,d,c)=>{c.r(d),c.d(d,{OtherClubModule:()=>y});var l=c(6895),i=c(27),h=c(6382),t=c(4650),b=c(4279),m=c(2466),p=c(6308);function g(s,e){if(1&s){const o=t.EpF();t.TgZ(0,"td")(1,"a",17),t.NdJ("click",function(){t.CHM(o);const r=t.oxw().$implicit,n=t.oxw();return t.KtG(n.addClub(r.id))}),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&s&&(t.xp6(2),t.hij("",t.lcZ(3,1,"members.add")," +"))}function f(s,e){if(1&s){const o=t.EpF();t.TgZ(0,"td")(1,"div",18)(2,"a",19),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",20)(6,"a",21),t.NdJ("click",function(){t.CHM(o);const r=t.oxw().$implicit,n=t.oxw();return t.KtG(n.cancelClub(r.id))}),t._uU(7),t.ALo(8,"translate"),t.qZA()()()()}2&s&&(t.xp6(3),t.hij(" ",t.lcZ(4,2,"members.pending")," "),t.xp6(4),t.Oqu(t.lcZ(8,4,"commun_translations.cancel")))}function Z(s,e){if(1&s){const o=t.EpF();t.TgZ(0,"td")(1,"div",18)(2,"a",22),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",20)(6,"a",21),t.NdJ("click",function(){t.CHM(o);const r=t.oxw().$implicit,n=t.oxw();return t.KtG(n.addClub(r.id))}),t._uU(7),t.ALo(8,"translate"),t.qZA()()()()}2&s&&(t.xp6(3),t.hij(" ",t.lcZ(4,2,"members.canceled")," "),t.xp6(4),t.hij("",t.lcZ(8,4,"members.add")," +"))}function v(s,e){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.YNc(9,g,4,3,"td",16),t.YNc(10,f,9,6,"td",16),t.YNc(11,Z,9,6,"td",16),t.qZA()),2&s){const o=e.$implicit;t.xp6(2),t.Oqu(o.name),t.xp6(2),t.hij("",o.mobile,"\t"),t.xp6(2),t.Oqu(o.email),t.xp6(2),t.Oqu(o.city),t.xp6(1),t.Q6J("ngIf","NO_STATUS"==o.status),t.xp6(1),t.Q6J("ngIf","PENDING"==o.status),t.xp6(1),t.Q6J("ngIf","CANCELED"==o.status)}}function x(s,e){1&s&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&s&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"members.no_clubs_currently")," "))}const _=[{path:"",component:(()=>{const e=class{constructor(a,r){this.playerSrv=a,this.translate=r,this.routes=h._,this.other_clubs=[],this.club_member_selected="0",this.club_remove=""}ngOnInit(){this.translate.setDefaultLang(this.playerSrv.authSrv.language),this.translate.use(this.playerSrv.authSrv.language),this.playerSrv.getOtherClubs().subscribe(a=>{this.other_clubs=a.clubs})}addClub(a){this.playerSrv.regiterClub(a).subscribe(r=>{if("200"==r.message){let n=this.other_clubs.findIndex(u=>u.id==a);-1!=n&&(this.other_clubs[n].status="PENDING")}})}cancelClub(a){this.playerSrv.cancelRegiterClub(a).subscribe(r=>{if("200"==r.message){let n=this.other_clubs.findIndex(u=>u.id==a);-1!=n&&(this.other_clubs[n].status="NO_STATUS")}})}};let s=e;return e.\u0275fac=function(r){return new(r||e)(t.Y36(b.l),t.Y36(m.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-other-club"]],decls:33,vars:17,consts:[[1,"page-wrapper"],[1,"content"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0"],["mat-sort-header","clubName"],["mat-sort-header","clubMobile"],["mat-sort-header","email"],["mat-sort-header","city"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"dropdown","action-label"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"status-orange","custom-badge","dropdown-toggle"],[1,"dropdown-menu","dropdown-menu-end","status-staff"],[1,"dropdown-item","cursor-pointer",3,"click"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"status-red","custom-badge","dropdown-toggle"],["colspan","6",1,"text-center"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",2)(7,"div",6)(8,"div",7)(9,"h4"),t._uU(10,"Other clubs"),t.qZA()()()(),t.TgZ(11,"div",8)(12,"table",9)(13,"thead")(14,"tr")(15,"th",10),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"th",11),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"th",12),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"th",13),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.TgZ(27,"th",14),t._uU(28),t.ALo(29,"translate"),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,v,12,7,"tr",15),t.YNc(32,x,4,3,"tr",16),t.qZA()()()()()()()()()),2&r&&(t.xp6(16),t.Oqu(t.lcZ(17,7,"members.name")),t.xp6(3),t.Oqu(t.lcZ(20,9,"members.mobile")),t.xp6(3),t.Oqu(t.lcZ(23,11,"members.email")),t.xp6(3),t.Oqu(t.lcZ(26,13,"members.city")),t.xp6(3),t.Oqu(t.lcZ(29,15,"members.status")),t.xp6(3),t.Q6J("ngForOf",n.other_clubs),t.xp6(1),t.Q6J("ngIf",0==n.other_clubs.length))},dependencies:[l.sg,l.O5,p.YE,p.nU,m.X$],styles:[".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),s})()}];let A=(()=>{const e=class{};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(_),i.Bz]}),s})();var C=c(4006),T=c(529),O=c(5108);let y=(()=>{const e=class{};let s=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,A,C.UX,T.JF,i.Bz,O.m]}),s})()}}]);