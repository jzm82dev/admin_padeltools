"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[9738],{89738:(b,v,l)=>{l.r(v),l.d(v,{NewPasswordModule:()=>J});var m=l(36895),i=l(30027),h=l(46382),c=l(24006),t=l(94650),_=l(33210),w=l(43893);function d(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Contrase\xf1a es obligatoria. "),t.qZA())}function T(o,r){if(1&o&&(t.TgZ(0,"div",28),t.YNc(1,d,2,0,"div",29),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.f.password.errors&&n.f.password.errors.required)}}function e(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Confirma Contrase\xf1a es obligatoria. "),t.qZA())}function s(o,r){if(1&o&&(t.TgZ(0,"div",30),t.YNc(1,e,2,0,"div",29),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.f.confirmPassword.errors&&n.f.confirmPassword.errors.required)}}function p(o,r){1&o&&(t.TgZ(0,"div",30),t._uU(1," Contrase\xf1as no coinciden "),t.qZA())}const f=function(o){return{"is-invalid":o}};function C(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"form",17),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.submit())}),t.TgZ(1,"div",18)(2,"label"),t._uU(3,"Nueva contrase\xf1a "),t.TgZ(4,"span",19),t._uU(5,"*"),t.qZA()(),t._UZ(6,"input",20),t.YNc(7,T,2,1,"div",21),t.TgZ(8,"span",22),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.passwordFunc())}),t.qZA()(),t.TgZ(9,"div",18)(10,"label"),t._uU(11,"Confirma Contrase\xf1a "),t.TgZ(12,"span",19),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",23),t.YNc(15,s,2,1,"div",24),t.YNc(16,p,2,0,"div",24),t.TgZ(17,"span",25),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.confirmPasswordFunc())}),t.qZA()(),t.TgZ(18,"div",26)(19,"button",27),t._uU(20," Actualizar "),t.qZA()()()}if(2&o){const n=t.oxw();t.Q6J("formGroup",n.form),t.xp6(6),t.Q6J("type",n.passwordClass?"text":"password")("ngClass",t.VKq(11,f,n.f.password.touched&&n.f.password.invalid)),t.xp6(1),t.Q6J("ngIf",n.f.password.touched&&n.f.password.invalid),t.xp6(1),t.Q6J("ngClass",n.passwordClass?"feather icon-eye":"feather icon-eye-off"),t.xp6(6),t.Q6J("type",n.passwordClass?"text":"password")("ngClass",t.VKq(13,f,n.f.confirmPassword.touched&&n.f.confirmPassword.invalid)),t.xp6(1),t.Q6J("ngIf",n.f.confirmPassword.touched&&n.f.confirmPassword.invalid),t.xp6(1),t.Q6J("ngIf",n.isValidConfirmPassword),t.xp6(1),t.Q6J("ngClass",n.confirmPasswordClass?"feather icon-eye":"feather icon-eye-off"),t.xp6(2),t.Q6J("disabled",n.form.invalid)}}function P(o,r){if(1&o&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2," Contrase\xf1a actualizada correctamente. Ir a "),t.TgZ(3,"a",13),t._uU(4,"Login"),t.qZA()()()),2&o){const n=t.oxw();t.xp6(3),t.Q6J("routerLink",n.routes.login)}}function x(o,r){if(1&o&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2," El token de cambio de contrase\xf1a ha expirado. Por favor, vuelve a seguir los pasos para cambiar la contrase\xf1a. "),t.TgZ(3,"a",13),t._uU(4,"Cambiar contrase\xf1a"),t.qZA()()()),2&o){const n=t.oxw();t.xp6(3),t.Q6J("routerLink",n.routes.forgotPassword)}}function Z(o,r){if(1&o&&(t.TgZ(0,"div",31)(1,"p",32),t._uU(2," Tienes ya cuenta? "),t.TgZ(3,"a",13),t._uU(4,"Login"),t.qZA()()()),2&o){const n=t.oxw();t.xp6(3),t.Q6J("routerLink",n.routes.login)}}const y=[{path:"",component:(()=>{const r=class{get f(){return this.form.controls}constructor(u,a,g,N){this.router=u,this.clubDataSrv=a,this.registerSrv=g,this.activateRoute=N,this.routes=h._,this.passwordClass=!1,this.confirmPasswordClass=!1,this.isValidConfirmPassword=!1,this.error=!1,this.token="",this.user_email="",this.isValidToken=!0,this.passwordChanged=!1,this.form=new c.cw({password:new c.NI("",[c.kI.required]),confirmPassword:new c.NI("",[c.kI.required])})}ngOnInit(){this.activateRoute.params.subscribe(u=>{this.token=u.token,this.clubDataSrv.getUserByToken(this.token).subscribe(a=>{a.isTokenActive?this.user_email=a.email:this.isValidToken=!1})})}submit(){if(this.form.value.password!=this.form.value.confirmPassword)this.isValidConfirmPassword=!0;else{this.isValidConfirmPassword=!1;let u=new FormData;u.append("password",this.form.value.password?this.form.value.password:""),u.append("email",this.user_email),u.append("token",this.token),this.clubDataSrv.updatePasswordUser(u).subscribe(a=>{200==a.message&&(this.passwordChanged=!0)})}}register(){}passwordFunc(){this.passwordClass=!this.passwordClass}confirmPasswordFunc(){this.confirmPasswordClass=!this.confirmPasswordClass}};let o=r;return r.\u0275fac=function(a){return new(a||r)(t.Y36(i.F0),t.Y36(_.E),t.Y36(w.a),t.Y36(i.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-new-password"]],decls:21,vars:5,consts:[[1,"main-wrapper","login-body"],[1,"container-fluid","px-0"],[1,"row"],[1,"col-lg-6","login-wrap"],[1,"login-sec","image-center"],[1,"log-img"],["src","assets/img/login-02.png","alt","Logo",1,"img-fluid","text-center"],[1,"col-lg-6","login-wrap-bg"],[1,"login-wrapper"],[1,"loginbox"],[1,"login-right"],[1,"login-right-wrap"],[1,"account-logo"],[3,"routerLink"],["src","assets/img/login-logo.png","alt",""],[3,"formGroup","ngSubmit",4,"ngIf"],["class","next-sign",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"login-danger"],["formControlName","password","autocomplete","password",1,"form-control","pass-input",3,"type","ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"profile-views","toggle-password",3,"ngClass","click"],["formControlName","confirmPassword","autocomplete","confirmPassword",1,"form-control","pass-input-confirm",3,"type","ngClass"],["class","invalid-password",4,"ngIf"],[1,"profile-views","confirm-password",3,"ngClass","click"],[1,"form-group","login-btn"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"invalid-feedback"],[4,"ngIf"],[1,"invalid-password"],[1,"next-sign"],[1,"account-subtitle"]],template:function(a,g){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA()()(),t.TgZ(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"a",13),t._UZ(14,"img",14),t.qZA()(),t.TgZ(15,"h2"),t._uU(16,"Restaurar contrase\xf1a"),t.qZA(),t.YNc(17,C,21,15,"form",15),t.YNc(18,P,5,1,"div",16),t.YNc(19,x,5,1,"div",16),t.YNc(20,Z,5,1,"div",16),t.qZA()()()()()()()()),2&a&&(t.xp6(13),t.Q6J("routerLink",g.routes.adminDashboard),t.xp6(4),t.Q6J("ngIf",0==g.passwordChanged&&1==g.isValidToken),t.xp6(1),t.Q6J("ngIf",1==g.passwordChanged),t.xp6(1),t.Q6J("ngIf",0==g.isValidToken),t.xp6(1),t.Q6J("ngIf",0==g.passwordChanged&&1==g.isValidToken))},dependencies:[m.mk,m.O5,i.rH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:[".invalid-password[_ngcontent-%COMP%]{width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-invalid-color)}.image-center[_ngcontent-%COMP%]{width:100%;height:50%;align-items:center}"]}),o})()}];let k=(()=>{const r=class{};let o=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[i.Bz.forChild(y),i.Bz]}),o})();var A=l(25108);let J=(()=>{const r=class{};let o=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.ez,k,A.m]}),o})()},33210:(b,v,l)=>{l.d(v,{E:()=>_});var m=l(80529),i=l(75862),h=l(94650),c=l(30027),t=l(40866);let _=(()=>{const d=class{constructor(e,s,p){this.router=e,this.http=s,this.authSrv=p}findClubs(e){let s=new m.WM({"Access-Control-Allow-Origin":"*"});return this.http.post(i.$g+"/public/find-clubs",e,{headers:s})}getClub(e){return this.http.post(i.$g+"/public/club-data/get-info/"+e,null)}config(e,s,p,f){return this.http.post(i.$g+"/public/config?hash="+e+"&day_week_number="+s+"&date="+p+"&sport_selected="+f,null)}storeReservation(e){return this.http.post(i.$g+"/public/create-booking",e)}getBooking(e){return this.http.post(i.$g+"/public/get-booking/"+e,null)}cancelBooking(e){return this.http.post(i.$g+"/public/cancel-booking",e)}getLeagues(e=1,s,p=""){return this.http.post(i.$g+"/public/get-leagues?hash_club="+s+"&page="+e+"&search="+p,null)}getLeague(e){return this.http.post(i.$g+"/public/get-league/"+e,null)}getDataCategoryLeague(e){return this.http.post(i.$g+"/public/get-category-league/"+e,null)}getDataCategoryTournament(e){return this.http.post(i.$g+"/public/get-category-tournament/"+e,null)}getCouple(e){return this.http.post(i.$g+"/public/get-couple/"+e,null)}getCoupleResults(e){return this.http.post(i.$g+"/public/get-couple-results/"+e,null)}getMatchsJourney(e){return this.http.post(i.$g+"/public/get-matchs-journey/"+e,null)}getTournaments(e=1,s,p=""){return this.http.post(i.$g+"/public/get-tournaments?hash_club="+s+"&page="+e+"&search="+p,null)}getTournament(e){return this.http.post(i.$g+"/public/get-tournament/"+e,null)}getDraw(e){return this.http.post(i.$g+"/public/get-draw",e)}registerPlayerTournament(e){return this.http.post(i.$g+"/public/register-user-tournament",e)}sendEmail(e){return this.http.post(i.$g+"/public/send-question-email",e)}sendEmailForgotPassword(e){return this.http.post(i.$g+"/public/send-forgot-password-email",e)}getUserByToken(e){return this.http.post(i.$g+"/public/user-by-token/"+e,null)}updatePasswordUser(e){return this.http.post(i.$g+"/public/update-password-user",e)}};let w=d;return d.\u0275fac=function(s){return new(s||d)(h.LFG(c.F0),h.LFG(m.eN),h.LFG(t.e))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),w})()}}]);