"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[7525],{7525:(y,u,c)=>{c.r(u),c.d(u,{OtherClubModule:()=>U});var i=c(6895),l=c(27),h=c(6382),t=c(4650),d=c(4279),m=c(6308);function b(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"a",19),t.NdJ("click",function(){t.CHM(a);const n=t.oxw().$implicit,o=t.oxw();return t.KtG(o.addClub(n.id))}),t._uU(1,"Agregar +"),t.qZA()}}function p(e,s){1&e&&(t.TgZ(0,"a",20),t._uU(1,"PENDING"),t.qZA())}function g(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.YNc(10,b,2,0,"a",17),t.YNc(11,p,2,0,"a",18),t.qZA()()),2&e){const a=s.$implicit;t.xp6(2),t.Oqu(a.name),t.xp6(2),t.hij("",a.mobile,"\t"),t.xp6(2),t.Oqu(a.email),t.xp6(2),t.Oqu(a.city),t.xp6(2),t.Q6J("ngIf","NO_STATUS"==a.status),t.xp6(1),t.Q6J("ngIf","PENDING"==a.status)}}function f(e,s){1&e&&(t.TgZ(0,"tr")(1,"td",21),t._uU(2," Actualmente no eres socio de ning\xfan club. "),t.qZA()())}const Z=[{path:"",component:(()=>{const s=class{constructor(r){this.playerSrv=r,this.routes=h._,this.other_clubs=[],this.club_member_selected="0",this.club_remove=""}ngOnInit(){this.playerSrv.getOtherClubs().subscribe(r=>{this.other_clubs=r.clubs})}addClub(r){this.playerSrv.regiterClub(r).subscribe(n=>{if("200"==n.message){let o=this.other_clubs.findIndex(x=>x.id==r);-1!=o&&(this.other_clubs[o].status="PENDING",console.log(this.other_clubs))}})}};let e=s;return s.\u0275fac=function(n){return new(n||s)(t.Y36(d.l))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-other-club"]],decls:28,vars:2,consts:[[1,"page-wrapper"],[1,"content"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0"],["mat-sort-header","clubName"],["mat-sort-header","clubMobile"],["mat-sort-header","email"],["mat-sort-header","city"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","btn btn-sm btn-success",3,"click",4,"ngIf"],["class","btn btn-sm btn-warning",4,"ngIf"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"btn","btn-sm","btn-warning"],["colspan","6",1,"text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",2)(7,"div",6)(8,"div",7)(9,"h4"),t._uU(10,"Other clubs"),t.qZA()()()(),t.TgZ(11,"div",8)(12,"table",9)(13,"thead")(14,"tr")(15,"th",10),t._uU(16,"Name"),t.qZA(),t.TgZ(17,"th",11),t._uU(18,"Mobile"),t.qZA(),t.TgZ(19,"th",12),t._uU(20,"Email"),t.qZA(),t.TgZ(21,"th",13),t._uU(22,"City"),t.qZA(),t.TgZ(23,"th",14),t._uU(24,"Status"),t.qZA()()(),t.TgZ(25,"tbody"),t.YNc(26,g,12,6,"tr",15),t.YNc(27,f,3,0,"tr",16),t.qZA()()()()()()()()()),2&n&&(t.xp6(26),t.Q6J("ngForOf",o.other_clubs),t.xp6(1),t.Q6J("ngIf",0==o.other_clubs.length))},dependencies:[i.sg,i.O5,m.YE,m.nU]}),e})()}];let v=(()=>{const s=class{};let e=s;return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]}),e})();var T=c(4006),A=c(529),C=c(5108);let U=(()=>{const s=class{};let e=s;return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[i.ez,v,T.UX,A.JF,l.Bz,C.m]}),e})()}}]);