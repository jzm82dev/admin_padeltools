"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[1861],{41861:(g,s,r)=>{r.r(s),r.d(s,{PaymentSettingsModule:()=>d});var l=r(36895),o=r(30027),Z=r(46382),t=r(94650);const p=[{path:"",component:(()=>{const e=class{constructor(){this.routes=Z._}};let i=e;return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment-settings"]],decls:160,vars:11,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"settings-menu-links"],[1,"nav","nav-tabs","menu-tabs"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"nav-item","active"],[1,"col-md-6"],[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-title"],[1,"status-toggle","d-flex","justify-content-between","align-items-center"],["type","checkbox","id","status_1",1,"check"],["for","status_1",1,"checktoggle"],[1,"card-body","pt-0"],[1,"settings-form"],[1,"form-group"],[1,"pay-cont"],[1,"custom_radio","me-4"],["type","radio","name","budget","value","Yes","checked",""],[1,"checkmark"],[1,"custom_radio"],["type","radio","name","budget","value","Yes"],[1,"form-group","form-placeholder"],[1,"star-red"],["type","text","placeholder","sandbox_pgjcppvs_pd6gznv7zbrx9hb8",1,"form-control"],["type","text","placeholder","pd6gznv7zbrx9hb8",1,"form-control"],["type","text","placeholder","h8bydrz7gcjkp7d4",1,"form-control"],[1,"form-group","mb-0"],[1,"settings-btns"],["type","submit",1,"border-0","btn","btn-primary","btn-gradient-primary","btn-rounded"],["type","submit",1,"btn","btn-secondary","btn-rounded"],["type","checkbox","id","status_2","checked","",1,"check"],["for","status_2",1,"checktoggle"],["type","text","placeholder","Stripe",1,"form-control"],["type","text","placeholder","pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr",1,"form-control"],["type","text","placeholder","sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3",1,"form-control"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Dashboard "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Settings"),t.qZA()()()()(),t.TgZ(13,"div",10)(14,"ul",11)(15,"li",12)(16,"a",13),t._uU(17,"General Settings"),t.qZA()(),t.TgZ(18,"li",12)(19,"a",13),t._uU(20,"Localization"),t.qZA()(),t.TgZ(21,"li",14)(22,"a",13),t._uU(23,"Payment Settings"),t.qZA()(),t.TgZ(24,"li",12)(25,"a",13),t._uU(26,"Email Settings"),t.qZA()(),t.TgZ(27,"li",12)(28,"a",13),t._uU(29,"Social Media Login"),t.qZA()(),t.TgZ(30,"li",12)(31,"a",13),t._uU(32,"Social Links"),t.qZA()(),t.TgZ(33,"li",12)(34,"a",13),t._uU(35,"SEO Settings"),t.qZA()(),t.TgZ(36,"li",12)(37,"a",13),t._uU(38,"Theme Settings"),t.qZA()(),t.TgZ(39,"li",12)(40,"a",13),t._uU(41,"Change Password"),t.qZA()(),t.TgZ(42,"li",12)(43,"a",13),t._uU(44,"Others"),t.qZA()()()(),t.TgZ(45,"div",3)(46,"div",15)(47,"div",16)(48,"div",17)(49,"h5",18),t._uU(50,"Paypal"),t.qZA(),t.TgZ(51,"div",19),t._UZ(52,"input",20),t.TgZ(53,"label",21),t._uU(54,"checkbox"),t.qZA()()(),t.TgZ(55,"div",22)(56,"form")(57,"div",23)(58,"div",24)(59,"p",25),t._uU(60,"Paypal Option"),t.qZA(),t.TgZ(61,"label",26),t._UZ(62,"input",27)(63,"span",28),t._uU(64," Sandbox "),t.qZA(),t.TgZ(65,"label",29),t._UZ(66,"input",30)(67,"span",28),t._uU(68," Live "),t.qZA()(),t.TgZ(69,"div",31)(70,"label"),t._uU(71,"Braintree Tokenization key "),t.TgZ(72,"span",32),t._uU(73,"*"),t.qZA()(),t._UZ(74,"input",33),t.qZA(),t.TgZ(75,"div",31)(76,"label"),t._uU(77,"Braintree Merchant ID "),t.TgZ(78,"span",32),t._uU(79,"*"),t.qZA()(),t._UZ(80,"input",34),t.qZA(),t.TgZ(81,"div",31)(82,"label"),t._uU(83,"Braintree Public key "),t.TgZ(84,"span",32),t._uU(85,"*"),t.qZA()(),t._UZ(86,"input",35),t.qZA(),t.TgZ(87,"div",31)(88,"label"),t._uU(89,"Braintree Private key "),t.TgZ(90,"span",32),t._uU(91,"*"),t.qZA()(),t._UZ(92,"input",33),t.qZA(),t.TgZ(93,"div",31)(94,"label"),t._uU(95,"Paypal APP ID "),t.TgZ(96,"span",32),t._uU(97,"*"),t.qZA()(),t._UZ(98,"input",34),t.qZA(),t.TgZ(99,"div",31)(100,"label"),t._uU(101,"Paypal Secret Key "),t.TgZ(102,"span",32),t._uU(103,"*"),t.qZA()(),t._UZ(104,"input",35),t.qZA(),t.TgZ(105,"div",36)(106,"div",37)(107,"button",38),t._uU(108,"Save"),t.qZA(),t._uU(109,"\xa0\xa0 "),t.TgZ(110,"button",39),t._uU(111,"Cancel"),t.qZA()()()()()()()(),t.TgZ(112,"div",15)(113,"div",16)(114,"div",17)(115,"h5",18),t._uU(116,"Stripe"),t.qZA(),t.TgZ(117,"div",19),t._UZ(118,"input",40),t.TgZ(119,"label",41),t._uU(120,"checkbox"),t.qZA()()(),t.TgZ(121,"div",22)(122,"form")(123,"div",23)(124,"div",24)(125,"p",25),t._uU(126,"Stripe Option"),t.qZA(),t.TgZ(127,"label",26),t._UZ(128,"input",27)(129,"span",28),t._uU(130," Sandbox "),t.qZA(),t.TgZ(131,"label",29),t._UZ(132,"input",30)(133,"span",28),t._uU(134," Live "),t.qZA()(),t.TgZ(135,"div",31)(136,"label"),t._uU(137,"Gateway Name "),t.TgZ(138,"span",32),t._uU(139,"*"),t.qZA()(),t._UZ(140,"input",42),t.qZA(),t.TgZ(141,"div",31)(142,"label"),t._uU(143,"API Key "),t.TgZ(144,"span",32),t._uU(145,"*"),t.qZA()(),t._UZ(146,"input",43),t.qZA(),t.TgZ(147,"div",31)(148,"label"),t._uU(149,"Rest Key "),t.TgZ(150,"span",32),t._uU(151,"*"),t.qZA()(),t._UZ(152,"input",44),t.qZA(),t.TgZ(153,"div",36)(154,"div",37)(155,"button",38),t._uU(156,"Save"),t.qZA(),t._uU(157,"\xa0\xa0 "),t.TgZ(158,"button",39),t._uU(159,"Cancel"),t.qZA()()()()()()()()()()()),2&a&&(t.xp6(7),t.Q6J("routerLink",n.routes.adminDashboard),t.xp6(9),t.Q6J("routerLink",n.routes.settings),t.xp6(3),t.Q6J("routerLink",n.routes.localizationDetails),t.xp6(3),t.Q6J("routerLink",n.routes.paymentSettings),t.xp6(3),t.Q6J("routerLink",n.routes.emailSettings),t.xp6(3),t.Q6J("routerLink",n.routes.socialSettings),t.xp6(3),t.Q6J("routerLink",n.routes.socialLinks),t.xp6(3),t.Q6J("routerLink",n.routes.seoSettings),t.xp6(3),t.Q6J("routerLink",n.routes.themeSettings),t.xp6(3),t.Q6J("routerLink",n.routes.changePassword),t.xp6(3),t.Q6J("routerLink",n.routes.othersSettings))},dependencies:[o.rH]}),i})()}];let c=(()=>{const e=class{};let i=e;return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[o.Bz.forChild(p),o.Bz]}),i})(),d=(()=>{const e=class{};let i=e;return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,c]}),i})()}}]);