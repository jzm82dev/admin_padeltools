"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8914],{8914:(S,g,a)=>{a.r(g),a.d(g,{PaymentsModule:()=>P});var h=a(6895),d=a(27),p=a(5861),e=a(4650),v=a(1481),y=a(5862),Z=a(5226),l=a.n(Z),b=a(6321);const A=["paypal"],T=["cardInfo"];function C(o,i){if(1&o&&(e.TgZ(0,"div",34),e._uU(1),e.qZA()),2&o){const I=e.oxw();e.xp6(1),e.hij(" ",I.cardError," ")}}const _=[{path:"",component:(()=>{const i=class{constructor(t,n){this.ngZone=t,this.paymentService=n,this.sanitazer=(0,e.f3M)(v.H7),this.paymentHandler=null,this.stripeAPIKey=y.Hs,this.success_message="",this.error_message="",this.plans=[],this.loaded=!1}ngOnInit(){this.basic_plan_selected=document.getElementById("basic_plan"),this.premium_plan_selected=document.getElementById("premium_plan"),this.hideLoading(),this.paymentService.getActivePlans().subscribe(t=>{200==t.message&&(this.loaded=!0,this.plans=t.plans,this.plan_selected=this.plans[1],this.paypalInitialise(this.plan_selected.paypal_id))})}ngAfterViewInit(){this.card=elements.create("card",{hidePostalCode:!0,style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),this.cardInfo&&(this.card.mount(this.cardInfo.nativeElement),this.card.addEventListener("change",this.onChange.bind(this)))}onChange(t){this.ngZone.run(null!=t.error?()=>this.cardError=t.error.message:()=>this.cardError=null)}paymentIntent(){var t=this;return(0,p.Z)(function*(){const{token:n,error:r}=yield stripe.createToken(t.card);n?t.paymentService.chargePaymentIntent(100,n.id).subscribe(s=>{stripe.confirmCardPayment(s.client_secret).then(function(c){c.error?alert("error"):alert("bieeen")})}):t.ngZone.run(()=>t.cardError=r.message)})()}createSubscription(){var t=this;return(0,p.Z)(function*(){const{token:n,error:r}=yield stripe.createToken(t.card);n?(t.showLoading(),t.paymentService.createSubscription(t.plan_selected.slug,n.id).subscribe(s=>{t.hideLoading(),stripe.confirmCardPayment(s.subscription.latest_invoice.payment_intent.client_secret).then(function(u){u.error?l().fire({title:"Oppss... ",text:"Something went wrong!",icon:"error"}):l().fire({title:"Goood",text:"Subscription Activa",icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar!"}).then(m=>{m.isConfirmed&&(window.location.href="/payments/current-subscription")})})})):t.ngZone.run(()=>t.cardError=r.message)})()}hideLoading(){var t=document.getElementById("loading");t&&(t.classList.remove("show-spinner"),t.classList.add("hide-spinner"))}ngOnDestroy(){this.card.destroy()}showLoading(){var t=document.getElementById("loading");t&&(t.classList.remove("hide-spinner"),t.classList.add("show-spinner"))}paypalInitialise(t){var r,n=this;paypal.Buttons({style:{color:"gold",shape:"rect",layout:"vertical"},createSubscription:(r,s)=>s.subscription.create({plan_id:t}),onApprove:(r=(0,p.Z)(function*(s,c){n.paymentService.saveSubscription(s.subscriptionID,t).subscribe(u=>{l().fire({title:"Goood",text:"Subscription Activa",icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"Cerrar!"}).then(m=>{m.isConfirmed&&(window.location.href="/payments/current-subscription")})})}),function(c,u){return r.apply(this,arguments)}),onError:r=>{l().fire({title:"Oppss... ",text:"Something went wrong!",icon:"error"}),console.error("An error prevented the buyer from checking out with PayPal")}}).render(this.paypalElement?.nativeElement)}pay(){console.log("PAGAMOS")}selectPlan(t){const n=document.getElementById("paypal-button");n&&(n.innerHTML="");const r=this.plans.findIndex(s=>s.slug==t);this.plan_selected=this.plans[r],this.paypalInitialise(this.plan_selected.paypal_id),"basic"==t?(this.basic_plan_selected.classList.add("plan-selected"),this.premium_plan_selected.classList.remove("plan-selected")):(this.basic_plan_selected.classList.remove("plan-selected"),this.premium_plan_selected.classList.add("plan-selected"))}};let o=i;return i.\u0275fac=function(n){return new(n||i)(e.Y36(e.R0b),e.Y36(b.t))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-payments"]],viewQuery:function(n,r){if(1&n&&(e.Gf(A,7),e.Gf(T,7)),2&n){let s;e.iGM(s=e.CRH())&&(r.paypalElement=s.first),e.iGM(s=e.CRH())&&(r.cardInfo=s.first)}},decls:100,vars:1,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-sm-4","col-md-4","col-xl-4",3,"click"],["id","basic_plan",1,"blog","grid-blog","plan-basic","cursor-on"],[1,"text-center"],["type","button",1,"btn","btn-primary","btn-lg","me-1"],[1,"text-start","my-4"],[1,"remove-doc"],[1,"blog-content"],[1,"blog-title"],["id","premium_plan",1,"blog","grid-blog","plan-premium","plan-selected","cursor-on"],["id","form-payment",1,"row"],[1,"col-sm-2","col-md-2","col-xl-2"],[1,"col-sm-4","col-md-4","col-xl-4"],[1,"card"],[1,"card-body","pt-0","my-4"],[1,"credit-card","text-center","my-3"],["cardInfo",""],["class","error my-2",4,"ngIf"],[1,"d-flex","justify-content-center"],["role","status","id","loading",1,"spinner-border"],[1,"sr-only"],[1,"text-center","mt-2"],["id","payButton",1,"btn","btn-primary","btn-lg","me-1",3,"click"],[1,"text-center","my-4"],[1,"card-body","pt-0","my-4","text-center"],[1,"row","text-center"],["id","paypal-button"],["paypal",""],[1,"error","my-2"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6),e._uU(7,"Current susbcription"),e.qZA()()()()(),e.TgZ(8,"div",3)(9,"div",7),e.NdJ("click",function(){return r.selectPlan("basic")}),e.TgZ(10,"div",8)(11,"div",9)(12,"button",10),e._uU(13,"PLAN B\xc1SICO"),e.qZA()(),e.TgZ(14,"div",11)(15,"h3"),e._uU(16,"El plan incluye: "),e.qZA()(),e.TgZ(17,"div",11)(18,"ul")(19,"li"),e._uU(20," Visible en la parte p\xfablica "),e.qZA(),e.TgZ(21,"li"),e._uU(22," Gesti\xf3n reservas de pistas "),e.qZA(),e.TgZ(23,"li"),e._uU(24," Alta y baja de monitores "),e.qZA(),e.TgZ(25,"li"),e._uU(26," Gesti\xf3n de socios "),e.qZA(),e.TgZ(27,"li",12),e._uU(28," \xa0 "),e.qZA(),e.TgZ(29,"li",12),e._uU(30," \xa0 "),e.qZA()()(),e.TgZ(31,"div",9)(32,"h2"),e._uU(33,"29.90\u20ac"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"/MES"),e.qZA()(),e.TgZ(36,"div",13)(37,"h3",14),e._uU(38,"Este plan no tiene permanencia y podr\xe1s darte de alta cuando quieras con s\xf3lo hacer un click."),e.qZA(),e.TgZ(39,"p"),e._uU(40,"El importe de 29.90\u20ac se cobrar\xe1 todos los meses mientras la suscripci\xf3n est\xe9 activa"),e.qZA()()()(),e.TgZ(41,"div",7),e.NdJ("click",function(){return r.selectPlan("premium")}),e.TgZ(42,"div",15)(43,"div",9)(44,"button",10),e._uU(45,"PLAN PREMIUM"),e.qZA()(),e.TgZ(46,"div",11)(47,"h3"),e._uU(48,"El plan incluye: "),e.qZA()(),e.TgZ(49,"div",11)(50,"ul")(51,"li"),e._uU(52," Visible en la parte p\xfablica "),e.qZA(),e.TgZ(53,"li"),e._uU(54," Gesti\xf3n reservas de pistas "),e.qZA(),e.TgZ(55,"li"),e._uU(56," Alta y baja de monitores "),e.qZA(),e.TgZ(57,"li"),e._uU(58," Gesti\xf3n de socios "),e.qZA(),e.TgZ(59,"li"),e._uU(60," Creaci\xf3n y gesti\xf3n ilimitadas de ligas "),e.qZA(),e.TgZ(61,"li"),e._uU(62," Creaci\xf3n y gesti\xf3n ilimitadas de torneos "),e.qZA()()(),e.TgZ(63,"div",9)(64,"h2"),e._uU(65,"54.90\u20ac"),e.qZA(),e.TgZ(66,"p"),e._uU(67,"/MES"),e.qZA()(),e.TgZ(68,"div",13)(69,"h3",14),e._uU(70,"Este plan no tiene permanencia y podr\xe1s darte de alta cuando quieras con s\xf3lo hacer un click."),e.qZA(),e.TgZ(71,"p"),e._uU(72,"El importe de 54.90\u20ac se cobrar\xe1 todos los meses mientras la suscripci\xf3n est\xe9 activa"),e.qZA()()()()(),e.TgZ(73,"div",16),e._UZ(74,"div",17),e.TgZ(75,"div",18)(76,"div",19)(77,"div",20)(78,"div",9)(79,"b"),e._uU(80," Datos de la tarjeta "),e.qZA()(),e.TgZ(81,"div",21),e._UZ(82,"div",null,22),e.YNc(84,C,2,1,"div",23),e.qZA(),e.TgZ(85,"div",24)(86,"div",25),e._UZ(87,"span",26),e.qZA()(),e.TgZ(88,"div",27)(89,"button",28),e.NdJ("click",function(){return r.createSubscription()}),e._uU(90,"Paga Seguro con Tarjeta"),e.qZA()(),e.TgZ(91,"div",29)(92,"b"),e._uU(93,"o puedes suscribirte a trav\xe9s de"),e.qZA()(),e._UZ(94,"div",29),e.TgZ(95,"div",30)(96,"div",31)(97,"div",9),e._UZ(98,"div",32,33),e.qZA()()()()()()()()()),2&n&&(e.xp6(84),e.Q6J("ngIf",r.cardError))},dependencies:[h.O5],styles:[".credit-card[_ngcontent-%COMP%]{height:50px;background-color:#e0f0f3;padding:20px;display:flex;flex-direction:column;justify-content:space-evenly}.error[_ngcontent-%COMP%]{color:red;font-size:15px}.hide-spinner[_ngcontent-%COMP%]{display:none!important}.show-spinner[_ngcontent-%COMP%]{display:inline!important}#loading[_ngcontent-%COMP%], #loading-cancel[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;z-index:1;width:150px;height:150px;margin:-75px 0 0 -75px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;width:120px;height:120px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.plan-basic[_ngcontent-%COMP%]{background-color:#cff4fc}.plan-premium[_ngcontent-%COMP%]{background-color:#a3cfbb}.remove-doc[_ngcontent-%COMP%]{list-style-type:none}.plan-selected[_ngcontent-%COMP%]{border:solid 2px blue}.cursor-on[_ngcontent-%COMP%]{cursor:pointer}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}"]}),o})()}];let x=(()=>{const i=class{};let o=i;return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]}),o})();var f=a(4006),U=a(529),E=a(5108);let P=(()=>{const i=class{};let o=i;return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.ez,x,f.u5,f.UX,U.JF,d.Bz,E.m]}),o})()}}]);