"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8046],{8046:(L,u,l)=>{l.r(u),l.d(u,{PlayerModule:()=>q});var d=l(6895),p=l(27),_=l(6382),e=l(4650),f=l(4279),h=l(2466),g=l(4006),c=l(3125),v=l(9549);function Z(t,n){if(1&t&&(e.TgZ(0,"div",35),e._UZ(1,"img",36),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("src",o.image_preview,e.LSH)}}function b(t,n){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Oqu(o)}}function y(t,n){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,b,2,1,"li",42),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.message_errors)}}function A(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",37)(1,"div",38)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.TgZ(6,"button",39),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(7,"span",40),e.qZA(),e.YNc(8,y,2,1,"ul",41),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(3),e.hij("",e.lcZ(4,3,"commun_translations.error"),"!"),e.xp6(2),e.hij(" ",o.error_message," "),e.xp6(3),e.Q6J("ngIf",o.message_errors.length>0)}}function T(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",6)(1,"div",43)(2,"button",44),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.save())}),e._uU(3),e.ALo(4,"translate"),e.qZA()()()}2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"commun_translations.save")))}function C(t,n){if(1&t&&(e.TgZ(0,"div",6)(1,"div",43)(2,"button",45),e._uU(3),e.ALo(4,"translate"),e.qZA()()()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("routerLink",o.routes.staffList),e.xp6(1),e.Oqu(e.lcZ(4,2,"commun_translations.come_back"))}}function M(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",37)(1,"div",46)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.ALo(6,"translate"),e.TgZ(7,"button",39),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(8,"span",40),e.qZA()()()}2&t&&(e.xp6(3),e.hij("",e.lcZ(4,2,"commun_translations.success"),"!"),e.xp6(2),e.hij(" ",e.lcZ(6,4,"commun_translations.data_save_correctly")," "))}const x=[{path:"",component:(()=>{const n=class{constructor(s,a){this.playerSrv=s,this.translate=a,this.routes=_._,this.name="",this.surname="",this.mobile="",this.email="",this.password="",this.confirm_password="",this.gender="0",this.rolsAdded=[],this.image_preview="assets/img/user-06.jpg",this.success_message="",this.error_message="",this.message_errors=[],this.hide_buttons=!1,this.translations=[],this.birthday=""}ngOnInit(){this.initializeLanguage(),this.playerSrv.getProfile(1).subscribe(s=>{this.player=s.player,this.name=this.player.name,this.surname=this.player.surname,this.mobile=this.player.mobile,this.email=this.player.email,this.password="",this.gender=this.player.gender.toString(),this.birthday=new Date(this.player.birthday).toISOString(),this.player.avatar&&(this.image_preview=this.player.avatar)})}initializeLanguage(){this.translate.use(this.playerSrv.authSrv.language),this.translate.setDefaultLang(this.playerSrv.authSrv.language),this.translate.get(["commun_translations","members","members.members_messages"]).subscribe(s=>{this.translations=s})}loadFile(s){if(s.target.files[0].type.indexOf("image")<0)return alert(this.translations.commun_translations.only_type_img),void(this.image_preview=this.image_preview?this.image_preview:"assets/img/user-06.jpg");this.fileAvatar=s.target.files[0];let a=new FileReader;a.readAsDataURL(this.fileAvatar),a.onloadend=()=>this.image_preview=a.result}cleanMessage(){this.error_message="",this.success_message="",this.message_errors=[]}save(){if(this.cleanMessage(),!(this.name&&this.surname&&this.mobile&&this.email))return void(this.error_message=this.translations["members.members_messages"].error_data_mandatory);if(this.name&&this.name.length>191)return void(this.error_message=this.translations["members.members_messages"].error_name_2);if(this.surname&&this.surname.length>191)return void(this.error_message=this.translations["members.members_messages"].error_surname_2);if(this.email&&this.email.length>191)return void(this.error_message=this.translations["members.members_messages"].error_mobile_2);if(this.mobile&&this.mobile.length>50)return void(this.error_message=this.translations["members.members_messages"].error_mobile_2);if(this.password!=this.confirm_password)return void(this.error_message=this.translations["members.members_messages"].no_match_password);let s=new FormData;s.append("name",this.name),s.append("surname",this.surname),s.append("mobile",this.mobile),s.append("email",this.email),s.append("imagen",this.fileAvatar),s.append("gender",this.gender),s.append("birthday",this.birthday),""!=this.password&&s.append("password",this.password),this.playerSrv.editPlayer(s).subscribe(a=>{200==a.message?this.success_message=this.translations.commun_translations.data_save_correctly:422==a.message?(this.error_message=this.translations.commun_translations.data_save_error,this.message_errors=a.errors_text):this.error_message=this.translations.commun_translations.data_save_error+" "+this.translations.commun_translations.consult_admin})}};let t=n;return n.\u0275fac=function(a){return new(a||n)(e.Y36(f.l),e.Y36(h.sK))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-player"]],decls:106,vars:55,consts:[[1,"page-wrapper"],[1,"content"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-4"],[1,"form-group","local-forms"],[1,"login-danger"],["name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","surname","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-4","col-xl-4"],["name","mobile","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","email","type","email",1,"form-control",3,"ngModel","ngModelChange"],["type","text","matInput","","name","birthday",1,"form-control","datetimepicker",3,"matDatepicker","ngModel","ngModelChange"],["picker",""],["matIconSuffix","",3,"for"],[1,"form-group","select-gender"],[1,"gen-label"],[1,"form-check-inline"],[1,"form-check-label"],["type","radio","value","1","name","gender",1,"form-check-input",3,"ngModel","ngModelChange"],["type","radio","value","2","name","gender",1,"form-check-input",3,"ngModel","ngModelChange"],["name","password","type","password","autocomplete","password",1,"form-control",3,"ngModel","ngModelChange"],["name","confirm_password","type","password","autocomplete","confirm_password",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file",1,"hide-input",3,"change"],["for","file",1,"upload"],["class","",4,"ngIf"],["class","col-md-12 my-4",4,"ngIf"],["class","col-12",4,"ngIf"],[1,""],["alt","","width","150px","height","150px",3,"src"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"doctor-submit","text-end"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"click"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"routerLink"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"]],template:function(a,r){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"form")(7,"div",2)(8,"div",6)(9,"div",7)(10,"h4"),e._uU(11),e.ALo(12,"translate"),e.qZA()()(),e.TgZ(13,"div",8)(14,"div",9)(15,"label"),e._uU(16),e.ALo(17,"translate"),e.TgZ(18,"span",10),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"input",11),e.NdJ("ngModelChange",function(i){return r.name=i}),e.qZA()()(),e.TgZ(21,"div",8)(22,"div",9)(23,"label"),e._uU(24),e.ALo(25,"translate"),e.TgZ(26,"span",10),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"input",12),e.NdJ("ngModelChange",function(i){return r.surname=i}),e.qZA()()(),e.TgZ(29,"div",13)(30,"div",9)(31,"label"),e._uU(32),e.ALo(33,"translate"),e.TgZ(34,"span",10),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"input",14),e.NdJ("ngModelChange",function(i){return r.mobile=i}),e.qZA()()(),e.TgZ(37,"div",13)(38,"div",9)(39,"label"),e._uU(40),e.ALo(41,"translate"),e.TgZ(42,"span",10),e._uU(43,"*"),e.qZA()(),e.TgZ(44,"input",15),e.NdJ("ngModelChange",function(i){return r.email=i}),e.qZA()()(),e.TgZ(45,"div",13)(46,"div",9)(47,"label"),e._uU(48),e.ALo(49,"translate"),e.TgZ(50,"span",10),e._uU(51,"*"),e.qZA()(),e.TgZ(52,"input",16),e.NdJ("ngModelChange",function(i){return r.birthday=i}),e.qZA(),e._UZ(53,"mat-datepicker",null,17)(55,"mat-datepicker-toggle",18),e.qZA()(),e.TgZ(56,"div",13)(57,"div",19)(58,"label",20),e._uU(59),e.ALo(60,"translate"),e.TgZ(61,"span",10),e._uU(62,"*"),e.qZA()(),e.TgZ(63,"div",21)(64,"label",22)(65,"input",23),e.NdJ("ngModelChange",function(i){return r.gender=i}),e.qZA(),e._uU(66),e.ALo(67,"translate"),e.qZA()(),e.TgZ(68,"div",21)(69,"label",22)(70,"input",24),e.NdJ("ngModelChange",function(i){return r.gender=i}),e.qZA(),e._uU(71),e.ALo(72,"translate"),e.qZA()()()(),e.TgZ(73,"div",13)(74,"div",9)(75,"label"),e._uU(76),e.ALo(77,"translate"),e.TgZ(78,"span",10),e._uU(79,"*"),e.qZA()(),e.TgZ(80,"input",25),e.NdJ("ngModelChange",function(i){return r.password=i}),e.qZA()()(),e.TgZ(81,"div",13)(82,"div",9)(83,"label"),e._uU(84),e.ALo(85,"translate"),e.TgZ(86,"span",10),e._uU(87,"*"),e.qZA()(),e.TgZ(88,"input",26),e.NdJ("ngModelChange",function(i){return r.confirm_password=i}),e.qZA()()(),e.TgZ(89,"div",2)(90,"div",13)(91,"div",27)(92,"label",28),e._uU(93),e.ALo(94,"translate"),e.qZA(),e.TgZ(95,"div",29)(96,"input",30),e.NdJ("change",function(i){return r.loadFile(i)}),e.qZA(),e.TgZ(97,"label",31),e._uU(98),e.ALo(99,"translate"),e.qZA()()(),e.TgZ(100,"div",27),e.YNc(101,Z,2,1,"div",32),e.qZA()()(),e.YNc(102,A,9,5,"div",33),e.YNc(103,T,5,3,"div",34),e.YNc(104,C,5,4,"div",34),e.YNc(105,M,9,6,"div",33),e.qZA()()()()()()()()),2&a){const m=e.MAs(54);e.xp6(11),e.Oqu(e.lcZ(12,29,"members.your_data")),e.xp6(5),e.hij("",e.lcZ(17,31,"members.name")," "),e.xp6(4),e.Q6J("ngModel",r.name),e.xp6(4),e.hij("",e.lcZ(25,33,"members.lastname")," "),e.xp6(4),e.Q6J("ngModel",r.surname),e.xp6(4),e.hij("",e.lcZ(33,35,"members.mobile")," "),e.xp6(4),e.Q6J("ngModel",r.mobile),e.xp6(4),e.hij("",e.lcZ(41,37,"members.email")," "),e.xp6(4),e.Q6J("ngModel",r.email),e.xp6(4),e.hij("",e.lcZ(49,39,"members.birthday")," "),e.xp6(4),e.Q6J("matDatepicker",m)("ngModel",r.birthday),e.xp6(3),e.Q6J("for",m),e.xp6(4),e.Oqu(e.lcZ(60,41,"members.gender")),e.xp6(6),e.Q6J("ngModel",r.gender),e.xp6(1),e.hij("",e.lcZ(67,43,"members.male")," "),e.xp6(4),e.Q6J("ngModel",r.gender),e.xp6(1),e.hij("",e.lcZ(72,45,"members.female")," "),e.xp6(5),e.hij("",e.lcZ(77,47,"members.password")," "),e.xp6(4),e.Q6J("ngModel",r.password),e.xp6(4),e.Oqu(e.lcZ(85,49,"members.confirm_password")),e.xp6(4),e.Q6J("ngModel",r.confirm_password),e.xp6(5),e.hij("",e.lcZ(94,51,"members.photo")," "),e.xp6(5),e.Oqu(e.lcZ(99,53,"club_translations.club_information.form_select_img")),e.xp6(3),e.Q6J("ngIf",r.image_preview),e.xp6(1),e.Q6J("ngIf",""!=r.error_message),e.xp6(1),e.Q6J("ngIf",0==r.hide_buttons),e.xp6(1),e.Q6J("ngIf",1==r.hide_buttons),e.xp6(1),e.Q6J("ngIf",""!=r.success_message)}},dependencies:[d.sg,d.O5,p.rH,g._Y,g.Fj,g._,g.JJ,g.JL,g.On,g.F,c.Mq,c.hl,c.nW,v.R9,h.X$]}),t})()}];let w=(()=>{const n=class{};let t=n;return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(x),p.Bz]}),t})();var J=l(529),U=l(5108);let q=(()=>{const n=class{};let t=n;return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,w,g.u5,g.UX,J.JF,p.Bz,U.m]}),t})()}}]);