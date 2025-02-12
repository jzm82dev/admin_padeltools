"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[3846],{3846:(B,y,o)=>{o.r(y),o.d(y,{SubscriptionsModule:()=>q});var h=o(6895),g=o(27),f=o(5861),u=o(5862),_=o(5226),p=o.n(_),t=o(4650),l=o(529),Z=o(866);let A=(()=>{const s=class{constructor(e,i){this.http=e,this.authSrv=i}getActivePlans(){let e=new l.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/payments/get-plans",{headers:e})}getCurrentSubscription(){let e=new l.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/subscription/current-subscription",{headers:e})}chargePaymentIntent(e,i){let r={value:e,currency:"eur",payment_method:i,payment_platform:2},n=new l.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/payments/pay",r,{headers:n})}createSubscription(e,i){let r={plan:e,payment_method:i,payment_platform:2},n=new l.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/subscription/store",r,{headers:n})}saveSubscription(e,i){let r={subscription_id:e,product_id:i},n=new l.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/subscription/save-club-subscription",r,{headers:n})}cancelSubscription(e,i){let r={subscription_id:e,payment_platform:i},n=new l.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/payments/cancel-subscription",r,{headers:n})}};let a=s;return s.\u0275fac=function(i){return new(i||s)(t.LFG(l.eN),t.LFG(Z.e))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),a})();var m=o(4006);const C=["paypal"],T=["cardInfo"],x=["form_payment"],U=["basic_plan"],S=["premium_plan"],E=["row_plans"];function P(a,s){if(1&a){const d=t.EpF();t.TgZ(0,"div",3)(1,"div",39)(2,"div",24)(3,"div",40)(4,"h5",41),t._uU(5,"Mi suscripci\xf3n"),t.qZA()(),t.TgZ(6,"div",42)(7,"form")(8,"div",43)(9,"div",44)(10,"label"),t._uU(11,"Suscripci\xf3n id"),t.qZA(),t._UZ(12,"input",45),t.qZA(),t.TgZ(13,"div",44)(14,"label"),t._uU(15,"Plan actual"),t.qZA(),t._UZ(16,"input",46),t.qZA(),t.TgZ(17,"div",44)(18,"label"),t._uU(19,"Fecha de inicio"),t.qZA(),t._UZ(20,"input",45),t.ALo(21,"date"),t.qZA(),t.TgZ(22,"div",44)(23,"label"),t._uU(24,"Membres\xeda vigente hasta"),t.qZA(),t._UZ(25,"input",45),t.ALo(26,"date"),t.qZA(),t.TgZ(27,"div",29)(28,"div",47),t._UZ(29,"span",31),t.qZA()(),t.TgZ(30,"div",48)(31,"div",49)(32,"button",50),t.NdJ("click",function(){t.CHM(d);const i=t.oxw();return t.KtG(i.cancelSubscription())}),t._uU(33,"CANCELAR SUSCRIPCI\xd3N"),t.qZA()()()()()()()()()}if(2&a){const d=t.oxw();t.xp6(12),t.s9C("value",d.current_subscription.subscription_id),t.xp6(4),t.s9C("value",d.current_subscription.slug),t.xp6(4),t.s9C("value",t.xi3(21,4,d.current_subscription.created_at,"dd/MM/yyyy , HH:mm")),t.xp6(5),t.s9C("value",t.xi3(26,7,d.current_subscription.active_until,"dd/MM/yyyy"))}}function M(a,s){if(1&a&&(t.TgZ(0,"div",51),t._uU(1),t.qZA()),2&a){const d=t.oxw();t.xp6(1),t.hij(" ",d.cardError," ")}}const w=[{path:"",component:(()=>{const s=class{constructor(e,i){this.ngZone=e,this.subscriptionService=i,this.paymentHandler=null,this.stripeAPIKey=u.Hs,this.success_message="",this.error_message="",this.plans=[],this.loaded=!1,this.current_subscription=null,this.has_active_subscription=!1}ngOnInit(){this.basic_plan_selected=document.getElementById("basic_plan"),this.premium_plan_selected=document.getElementById("premium_plan"),this.hideLoading(),this.subscriptionService.getActivePlans().subscribe(e=>{200==e.message&&(this.loaded=!0,this.plans=e.plans,this.plan_selected=this.plans[1])}),this.subscriptionService.getCurrentSubscription().subscribe(e=>{200==e.message&&(this.loaded=!0,this.current_subscription=e.current_subscription,this.has_active_subscription=e.has_active_subscription,0==this.has_active_subscription?(this.row_plans.nativeElement.classList.remove("hide-payment-form"),this.formPayment.nativeElement.classList.remove("hide-payment-form"),this.paypalInitialise(this.plan_selected.paypal_id),this.stripelInitialise()):(this.row_plans.nativeElement.classList.remove("hide-payment-form"),"premium"==this.current_subscription.slug?this.basic_plan.nativeElement.classList.add("hide-payment-form"):this.premium_plan.nativeElement.classList.add("hide-payment-form")))})}stripelInitialise(){null==this.current_subscription&&(this.card=elements.create("card",{hidePostalCode:!0,style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),this.cardInfo&&(this.card.mount(this.cardInfo.nativeElement),this.card.addEventListener("change",this.onChange.bind(this))))}onChange(e){this.ngZone.run(null!=e.error?()=>this.cardError=e.error.message:()=>this.cardError=null)}paymentIntent(){var e=this;return(0,f.Z)(function*(){const{token:i,error:r}=yield stripe.createToken(e.card);i?e.subscriptionService.chargePaymentIntent(100,i.id).subscribe(n=>{stripe.confirmCardPayment(n.client_secret).then(function(c){c.error?alert("error"):alert("bieeen")})}):e.ngZone.run(()=>e.cardError=r.message)})()}createSubscription(){var e=this;return(0,f.Z)(function*(){const{token:i,error:r}=yield stripe.createToken(e.card);i?(e.showLoading(),e.subscriptionService.createSubscription(e.plan_selected.slug,i.id).subscribe(n=>{e.hideLoading(),stripe.confirmCardPayment(n.subscription.latest_invoice.payment_intent.client_secret).then(function(b){b.error?p().fire({title:"Oppss... ",text:"Something went wrong!",icon:"error"}):p().fire({title:"Goood",text:"Se ha activado tu suscripci\xf3n",icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar!"}).then(v=>{v.isConfirmed&&document.location.reload()})})})):e.ngZone.run(()=>e.cardError=r.message)})()}hideLoading(){var e=document.getElementById("loading");e&&(e.classList.remove("show-spinner"),e.classList.add("hide-spinner"))}ngOnDestroy(){this.card&&this.card.destroy()}showLoading(){var e=document.getElementById("loading");e&&(e.classList.remove("hide-spinner"),e.classList.add("show-spinner"))}paypalInitialise(e){var r,i=this;paypal.Buttons({style:{color:"gold",shape:"rect",layout:"vertical"},createSubscription:(r,n)=>n.subscription.create({plan_id:e}),onApprove:(r=(0,f.Z)(function*(n,c){i.subscriptionService.saveSubscription(n.subscriptionID,e).subscribe(b=>{p().fire({title:"Goood",text:"Se ha activado tu suscripci\xf3n",icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar!"}).then(v=>{v.isConfirmed&&document.location.reload()})})}),function(c,b){return r.apply(this,arguments)}),onError:r=>{p().fire({title:"Oppss... ",text:"Something went wrong!",icon:"error"}),console.error("An error prevented the buyer from checking out with PayPal")}}).render(this.paypalElement?.nativeElement)}selectPlan(e){const i=document.getElementById("paypal-button");i&&(i.innerHTML="");const r=this.plans.findIndex(n=>n.slug==e);this.plan_selected=this.plans[r],this.paypalInitialise(this.plan_selected.paypal_id),"basic"==e?(this.basic_plan_selected.classList.add("plan-selected"),this.premium_plan_selected.classList.remove("plan-selected")):(this.basic_plan_selected.classList.remove("plan-selected"),this.premium_plan_selected.classList.add("plan-selected"))}cancelSubscription(){var e;this.showLoadingCancel(),e=this.current_subscription.subscription_id.startsWith("I-")?"1":"2",this.subscriptionService.cancelSubscription(this.current_subscription.subscription_id,e).subscribe(i=>{this.hideLoadingCancel(),p().fire({title:"Goood",text:"Subscription cancelada.",icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar!"}).then(r=>{r.isConfirmed&&(window.location.href="/subscriptions/get-subscription")})})}hideLoadingCancel(){var e=document.getElementById("loading-cancel");e&&(e.classList.remove("show-spinner"),e.classList.add("hide-spinner"))}showLoadingCancel(){var e=document.getElementById("loading-cancel");e&&(e.classList.remove("hide-spinner"),e.classList.add("show-spinner"))}};let a=s;return s.\u0275fac=function(i){return new(i||s)(t.Y36(t.R0b),t.Y36(A))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-subscriptions"]],viewQuery:function(i,r){if(1&i&&(t.Gf(C,7),t.Gf(T,7),t.Gf(x,5),t.Gf(U,5),t.Gf(S,5),t.Gf(E,5)),2&i){let n;t.iGM(n=t.CRH())&&(r.paypalElement=n.first),t.iGM(n=t.CRH())&&(r.cardInfo=n.first),t.iGM(n=t.CRH())&&(r.formPayment=n.first),t.iGM(n=t.CRH())&&(r.basic_plan=n.first),t.iGM(n=t.CRH())&&(r.premium_plan=n.first),t.iGM(n=t.CRH())&&(r.row_plans=n.first)}},decls:105,vars:2,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],["class","row",4,"ngIf"],[1,"row","hide-payment-form"],["row_plans",""],[1,"col-sm-6","col-md-6","col-xl-6",3,"click"],["basic_plan",""],["id","basic_plan",1,"blog","grid-blog","plan-basic","cursor-on"],[1,"text-center"],["type","button",1,"btn","btn-primary","btn-lg","me-1"],[1,"text-start","my-4"],[1,"remove-doc"],[1,"blog-content"],[1,"blog-title"],["premium_plan",""],["id","premium_plan",1,"blog","grid-blog","plan-premium","plan-selected","cursor-on"],["id","form-payment",1,"row","hide-payment-form"],["form_payment",""],[1,"col-sm-4","col-md-4","col-xl-4"],[1,"card"],[1,"card-body","pt-0","my-4"],[1,"credit-card","text-center","my-3"],["cardInfo",""],["class","error my-2",4,"ngIf"],[1,"d-flex","justify-content-center"],["role","status","id","loading",1,"spinner-border"],[1,"sr-only"],[1,"text-center","mt-2"],["id","payButton",1,"btn","btn-primary","btn-lg","me-1",3,"click"],[1,"text-center","my-4"],[1,"card-body","pt-0","my-4","text-center"],[1,"row","text-center"],["id","paypal-button"],["paypal",""],[1,"col-md-6"],[1,"card-header"],[1,"card-title"],[1,"card-body","pt-0"],[1,"settings-form"],[1,"form-group","form-placeholder"],["type","text","disabled","",1,"form-control",3,"value"],["type","text","disabled","",1,"form-control","capitalize",3,"value"],["role","status","id","loading-cancel",1,"spinner-border","hide-spinner"],[1,"form-group","mb-0","text-center","my-4"],[1,"settings-btns"],["type","button",1,"btn","btn-danger","btn-lg","me-1",3,"click"],[1,"error","my-2"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6),t._uU(7,"Current susbcription"),t.qZA()()()()(),t.YNc(8,P,34,10,"div",7),t.TgZ(9,"div",8,9)(11,"div",10,11),t.NdJ("click",function(){return r.selectPlan("basic")}),t.TgZ(13,"div",12)(14,"div",13)(15,"button",14),t._uU(16,"PLAN B\xc1SICO"),t.qZA()(),t.TgZ(17,"div",15)(18,"h3"),t._uU(19,"El plan incluye: "),t.qZA()(),t.TgZ(20,"div",15)(21,"ul")(22,"li"),t._uU(23," Visible en la parte p\xfablica "),t.qZA(),t.TgZ(24,"li"),t._uU(25," Gesti\xf3n reservas de pistas "),t.qZA(),t.TgZ(26,"li"),t._uU(27," Alta y baja de monitores "),t.qZA(),t.TgZ(28,"li"),t._uU(29," Gesti\xf3n de socios "),t.qZA(),t.TgZ(30,"li",16),t._uU(31," \xa0 "),t.qZA(),t.TgZ(32,"li",16),t._uU(33," \xa0 "),t.qZA()()(),t.TgZ(34,"div",13)(35,"h2"),t._uU(36,"29.90\u20ac"),t.qZA(),t.TgZ(37,"p"),t._uU(38,"/MES"),t.qZA()(),t.TgZ(39,"div",17)(40,"h3",18),t._uU(41,"Este plan no tiene permanencia y podr\xe1s darte de baja cuando quieras con s\xf3lo hacer un click."),t.qZA(),t.TgZ(42,"p"),t._uU(43,"El importe de 29.90\u20ac se cobrar\xe1 todos los meses mientras la suscripci\xf3n est\xe9 activa"),t.qZA()()()(),t.TgZ(44,"div",10,19),t.NdJ("click",function(){return r.selectPlan("premium")}),t.TgZ(46,"div",20)(47,"div",13)(48,"button",14),t._uU(49,"PLAN PREMIUM"),t.qZA()(),t.TgZ(50,"div",15)(51,"h3"),t._uU(52,"El plan incluye: "),t.qZA()(),t.TgZ(53,"div",15)(54,"ul")(55,"li"),t._uU(56," Visible en la parte p\xfablica "),t.qZA(),t.TgZ(57,"li"),t._uU(58," Gesti\xf3n reservas de pistas "),t.qZA(),t.TgZ(59,"li"),t._uU(60," Alta y baja de monitores "),t.qZA(),t.TgZ(61,"li"),t._uU(62," Gesti\xf3n de socios "),t.qZA(),t.TgZ(63,"li"),t._uU(64," Creaci\xf3n y gesti\xf3n ilimitadas de ligas "),t.qZA(),t.TgZ(65,"li"),t._uU(66," Creaci\xf3n y gesti\xf3n ilimitadas de torneos "),t.qZA()()(),t.TgZ(67,"div",13)(68,"h2"),t._uU(69,"54.90\u20ac"),t.qZA(),t.TgZ(70,"p"),t._uU(71,"/MES"),t.qZA()(),t.TgZ(72,"div",17)(73,"h3",18),t._uU(74,"Este plan no tiene permanencia y podr\xe1s darte de baja cuando quieras con s\xf3lo hacer un click."),t.qZA(),t.TgZ(75,"p"),t._uU(76,"El importe de 54.90\u20ac se cobrar\xe1 todos los meses mientras la suscripci\xf3n est\xe9 activa"),t.qZA()()()()(),t.TgZ(77,"div",21,22),t._UZ(79,"div",23),t.TgZ(80,"div",23)(81,"div",24)(82,"div",25)(83,"div",13)(84,"b"),t._uU(85," Datos de la tarjeta "),t.qZA()(),t.TgZ(86,"div",26),t._UZ(87,"div",null,27),t.YNc(89,M,2,1,"div",28),t.qZA(),t.TgZ(90,"div",29)(91,"div",30),t._UZ(92,"span",31),t.qZA()(),t.TgZ(93,"div",32)(94,"button",33),t.NdJ("click",function(){return r.createSubscription()}),t._uU(95,"Paga Seguro con Tarjeta"),t.qZA()(),t.TgZ(96,"div",34)(97,"b"),t._uU(98,"o puedes suscribirte a trav\xe9s de"),t.qZA()(),t._UZ(99,"div",34),t.TgZ(100,"div",35)(101,"div",36)(102,"div",13),t._UZ(103,"div",37,38),t.qZA()()()()()()()()()),2&i&&(t.xp6(8),t.Q6J("ngIf",r.current_subscription),t.xp6(81),t.Q6J("ngIf",r.cardError))},dependencies:[h.O5,m._Y,m.JL,m.F,h.uU],styles:[".credit-card[_ngcontent-%COMP%]{height:50px;background-color:#e0f0f3;padding:20px;display:flex;flex-direction:column;justify-content:space-evenly}.error[_ngcontent-%COMP%]{color:red;font-size:15px}.hide-spinner[_ngcontent-%COMP%]{display:none!important}.hide-payment-form[_ngcontent-%COMP%]{display:none}.show-payment-form[_ngcontent-%COMP%]{display:inline}.show-spinner[_ngcontent-%COMP%]{display:inline!important}#loading[_ngcontent-%COMP%], #loading-cancel[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;z-index:1;width:150px;height:150px;margin:-75px 0 0 -75px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;width:120px;height:120px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.plan-basic[_ngcontent-%COMP%]{background-color:#cff4fc}.plan-premium[_ngcontent-%COMP%]{background-color:#a3cfbb}.remove-doc[_ngcontent-%COMP%]{list-style-type:none}.plan-selected[_ngcontent-%COMP%]{border:solid 2px blue}.cursor-on[_ngcontent-%COMP%]{cursor:pointer}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}"]}),a})()}];let L=(()=>{const s=class{};let a=s;return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.Bz.forChild(w),g.Bz]}),a})();var I=o(5108);let q=(()=>{const s=class{};let a=s;return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.ez,L,m.u5,m.UX,l.JF,g.Bz,I.m]}),a})()}}]);