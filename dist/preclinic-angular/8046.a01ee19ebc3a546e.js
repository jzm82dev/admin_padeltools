"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8046],{8046:(U,u,l)=>{l.r(u),l.d(u,{PlayerModule:()=>J});var p=l(6895),d=l(27),h=l(6382),e=l(4650),_=l(4279),c=l(2466),m=l(4006);function f(t,s){if(1&t&&(e.TgZ(0,"div",33),e._UZ(1,"img",34),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("src",o.image_preview,e.LSH)}}function v(t,s){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const o=s.$implicit;e.xp6(1),e.Oqu(o)}}function Z(t,s){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,v,2,1,"li",40),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.message_errors)}}function b(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div",35)(1,"div",36)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",37),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(6,"span",38),e.qZA(),e.YNc(7,Z,2,1,"ul",39),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(4),e.hij(" ",o.error_message," "),e.xp6(3),e.Q6J("ngIf",o.message_errors.length>0)}}function y(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div",6)(1,"div",41)(2,"button",42),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.save())}),e._uU(3),e.ALo(4,"translate"),e.qZA()()()}2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"commun_translations.save")))}function T(t,s){if(1&t&&(e.TgZ(0,"div",6)(1,"div",41)(2,"button",43),e._uU(3,"VOLVER"),e.qZA()()()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("routerLink",o.routes.staffList)}}function A(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div",35)(1,"div",44)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4," El rol ha sido actualizado correctamente. "),e.TgZ(5,"button",37),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(6,"span",38),e.qZA()()()}}const C=[{path:"",component:(()=>{const s=class{constructor(n,a){this.playerSrv=n,this.translate=a,this.routes=h._,this.name="",this.surname="",this.mobile="",this.email="",this.password="",this.confirm_password="",this.gender="0",this.rolsAdded=[],this.image_preview="assets/img/user-06.jpg",this.success_message="",this.error_message="",this.message_errors=[],this.hide_buttons=!1,this.translations=[]}ngOnInit(){this.initializeLanguage(),this.playerSrv.getProfile(1).subscribe(n=>{this.player=n.player,this.name=this.player.name,this.surname=this.player.surname,this.mobile=this.player.mobile,this.email=this.player.email,this.password="",this.gender=this.player.gender.toString(),this.player.avatar&&(this.image_preview=this.player.avatar)})}initializeLanguage(){this.translate.use(this.playerSrv.authSrv.language),this.translate.setDefaultLang(this.playerSrv.authSrv.language),this.translate.get(["commun_translations","members","members.members_messages"]).subscribe(n=>{this.translations=n,console.log(this.translations)})}loadFile(n){if(n.target.files[0].type.indexOf("image")<0)return alert(this.translations.commun_translations.only_type_img),void(this.image_preview=this.image_preview?this.image_preview:"assets/img/user-06.jpg");this.fileAvatar=n.target.files[0];let a=new FileReader;a.readAsDataURL(this.fileAvatar),a.onloadend=()=>this.image_preview=a.result}cleanMessage(){this.error_message="",this.success_message="",this.message_errors=[]}save(){if(this.cleanMessage(),!(this.name&&this.surname&&this.mobile&&this.email))return void(this.error_message=this.translations["members.members_messages"].error_data_mandatory);if(this.name&&this.name.length>191)return void(this.error_message=this.translations["members.members_messages"].error_name_2);if(this.surname&&this.surname.length>191)return void(this.error_message=this.translations["members.members_messages"].error_surname_2);if(this.email&&this.email.length>191)return void(this.error_message=this.translations["members.members_messages"].error_mobile_2);if(this.mobile&&this.mobile.length>50)return void(this.error_message=this.translations["members.members_messages"].error_mobile_2);if(this.password!=this.confirm_password)return void(this.error_message=this.translations["members.members_messages"].no_match_password);let n=new FormData;n.append("name",this.name),n.append("surname",this.surname),n.append("mobile",this.mobile),n.append("email",this.email),n.append("imagen",this.fileAvatar),n.append("gender",this.gender),""!=this.password&&n.append("password",this.password),this.playerSrv.editPlayer(n).subscribe(a=>{200==a.message?this.success_message=this.translations.commun_translations.data_save_correctly:422==a.message?(this.error_message=this.translations.commun_translations.data_save_error,this.message_errors=a.errors_text):this.error_message=this.translations.commun_translations.data_save_error+" "+this.translations.commun_translations.consult_admin})}};let t=s;return s.\u0275fac=function(a){return new(a||s)(e.Y36(_.l),e.Y36(c.sK))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-player"]],decls:92,vars:43,consts:[[1,"page-wrapper"],[1,"content"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-4"],[1,"form-group","local-forms"],[1,"login-danger"],["name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","surname","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-4","col-xl-4"],["name","mobile","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-6","col-xl-6"],["name","email","type","email",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","select-gender"],[1,"gen-label"],[1,"form-check-inline"],[1,"form-check-label"],["type","radio","value","1","name","gender",1,"form-check-input",3,"ngModel","ngModelChange"],["type","radio","value","2","name","gender",1,"form-check-input",3,"ngModel","ngModelChange"],["name","password","type","password","autocomplete","password",1,"form-control",3,"ngModel","ngModelChange"],["name","confirm_password","type","password","autocomplete","confirm_password",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file",1,"hide-input",3,"change"],["for","file",1,"upload"],["class","",4,"ngIf"],["class","col-md-12 my-4",4,"ngIf"],["class","col-12",4,"ngIf"],[1,""],["alt","","width","150px","height","150px",3,"src"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"doctor-submit","text-end"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"click"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"routerLink"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"form")(7,"div",2)(8,"div",6)(9,"div",7)(10,"h4"),e._uU(11),e.ALo(12,"translate"),e.qZA()()(),e.TgZ(13,"div",8)(14,"div",9)(15,"label"),e._uU(16),e.ALo(17,"translate"),e.TgZ(18,"span",10),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"input",11),e.NdJ("ngModelChange",function(i){return r.name=i}),e.qZA()()(),e.TgZ(21,"div",8)(22,"div",9)(23,"label"),e._uU(24),e.ALo(25,"translate"),e.TgZ(26,"span",10),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"input",12),e.NdJ("ngModelChange",function(i){return r.surname=i}),e.qZA()()(),e.TgZ(29,"div",13)(30,"div",9)(31,"label"),e._uU(32),e.ALo(33,"translate"),e.TgZ(34,"span",10),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"input",14),e.NdJ("ngModelChange",function(i){return r.mobile=i}),e.qZA()()(),e.TgZ(37,"div",15)(38,"div",9)(39,"label"),e._uU(40),e.ALo(41,"translate"),e.TgZ(42,"span",10),e._uU(43,"*"),e.qZA()(),e.TgZ(44,"input",16),e.NdJ("ngModelChange",function(i){return r.email=i}),e.qZA()()(),e.TgZ(45,"div",13)(46,"div",17)(47,"label",18),e._uU(48),e.ALo(49,"translate"),e.TgZ(50,"span",10),e._uU(51,"*"),e.qZA()(),e.TgZ(52,"div",19)(53,"label",20)(54,"input",21),e.NdJ("ngModelChange",function(i){return r.gender=i}),e.qZA(),e._uU(55,"Male "),e.qZA()(),e.TgZ(56,"div",19)(57,"label",20)(58,"input",22),e.NdJ("ngModelChange",function(i){return r.gender=i}),e.qZA(),e._uU(59,"Female "),e.qZA()()()(),e.TgZ(60,"div",15)(61,"div",9)(62,"label"),e._uU(63),e.ALo(64,"translate"),e.TgZ(65,"span",10),e._uU(66,"*"),e.qZA()(),e.TgZ(67,"input",23),e.NdJ("ngModelChange",function(i){return r.password=i}),e.qZA()()(),e.TgZ(68,"div",13)(69,"div",9)(70,"label"),e._uU(71),e.ALo(72,"translate"),e.TgZ(73,"span",10),e._uU(74,"*"),e.qZA()(),e.TgZ(75,"input",24),e.NdJ("ngModelChange",function(i){return r.confirm_password=i}),e.qZA()()(),e.TgZ(76,"div",13)(77,"div",25)(78,"label",26),e._uU(79),e.ALo(80,"translate"),e.qZA(),e.TgZ(81,"div",27)(82,"input",28),e.NdJ("change",function(i){return r.loadFile(i)}),e.qZA(),e.TgZ(83,"label",29),e._uU(84),e.ALo(85,"translate"),e.qZA()()(),e.TgZ(86,"div",25),e.YNc(87,f,2,1,"div",30),e.qZA()(),e.YNc(88,b,8,2,"div",31),e.YNc(89,y,5,3,"div",32),e.YNc(90,T,4,1,"div",32),e.YNc(91,A,7,0,"div",31),e.qZA()()()()()()()()),2&a&&(e.xp6(11),e.Oqu(e.lcZ(12,23,"members.your_data")),e.xp6(5),e.hij("",e.lcZ(17,25,"members.name")," "),e.xp6(4),e.Q6J("ngModel",r.name),e.xp6(4),e.hij("",e.lcZ(25,27,"members.lastname")," "),e.xp6(4),e.Q6J("ngModel",r.surname),e.xp6(4),e.hij("",e.lcZ(33,29,"members.mobile")," "),e.xp6(4),e.Q6J("ngModel",r.mobile),e.xp6(4),e.hij("",e.lcZ(41,31,"members.email")," "),e.xp6(4),e.Q6J("ngModel",r.email),e.xp6(4),e.Oqu(e.lcZ(49,33,"members.gender")),e.xp6(6),e.Q6J("ngModel",r.gender),e.xp6(4),e.Q6J("ngModel",r.gender),e.xp6(5),e.hij("",e.lcZ(64,35,"members.password")," "),e.xp6(4),e.Q6J("ngModel",r.password),e.xp6(4),e.Oqu(e.lcZ(72,37,"members.confirm_password")),e.xp6(4),e.Q6J("ngModel",r.confirm_password),e.xp6(4),e.hij("",e.lcZ(80,39,"members.photo")," "),e.xp6(5),e.Oqu(e.lcZ(85,41,"club_translations.club_information.form_select_img")),e.xp6(3),e.Q6J("ngIf",r.image_preview),e.xp6(1),e.Q6J("ngIf",""!=r.error_message),e.xp6(1),e.Q6J("ngIf",0==r.hide_buttons),e.xp6(1),e.Q6J("ngIf",1==r.hide_buttons),e.xp6(1),e.Q6J("ngIf",""!=r.success_message))},dependencies:[p.sg,p.O5,d.rH,m._Y,m.Fj,m._,m.JJ,m.JL,m.On,m.F,c.X$]}),t})()}];let M=(()=>{const s=class{};let t=s;return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.Bz.forChild(C),d.Bz]}),t})();var x=l(529),w=l(5108);let J=(()=>{const s=class{};let t=s;return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,M,m.u5,m.UX,x.JF,d.Bz,w.m]}),t})()}}]);