"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[853],{853:(b,g,n)=>{n.r(g),n.d(g,{EditPaymentModule:()=>P});var v=n(6895),m=n(27),l=n(4006),Z=n(6382),t=n(4650),c=n(3125),f=n(9549),h=n(4385),T=n(3238);function y(a,e){if(1&a&&(t.TgZ(0,"mat-option",33),t._uU(1),t.qZA()),2&a){const i=e.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.value," ")}}function U(a,e){if(1&a&&(t.TgZ(0,"mat-option",33),t._uU(1),t.qZA()),2&a){const i=e.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.value," ")}}function A(a,e){if(1&a&&(t.TgZ(0,"mat-option",33),t._uU(1),t.qZA()),2&a){const i=e.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.value," ")}}const u=function(){return{standalone:!0}},M=[{path:"",component:(()=>{const e=class{constructor(){this.routes=Z._,this.date=new l.NI(new Date),this.selectedList1=[{value:"Enter Doctor Name"},{value:"Dr.Galaviz Lalema"},{value:"Dr.Bernardo James"},{value:"Dr.Mark Hay Smith"}],this.selectedList2=[{value:"Select Payment Method"},{value:"Credit Card"},{value:"Debit Card"},{value:"Pay Pal"}],this.selectedList3=[{value:"Select Payment Status"},{value:"Paid"},{value:"Partially Paid"},{value:"Un Paid"}]}};let a=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-payment"]],decls:98,vars:16,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-6"],[1,"form-group","local-forms"],[1,"login-danger"],["type","text","value","4356",1,"form-control"],["type","text","matInput","",1,"form-control","datetimepicker",3,"formControl","matDatepicker"],["picker",""],["matIconSuffix","",3,"for"],["type","text","value","Bernardo James",1,"form-control"],["placeholder","Enter Doctor Name",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","value","$3000",1,"form-control"],["type","text","value","$10",1,"form-control"],["placeholder","Select Payment Method",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],["placeholder","Select Payment Status",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-12","col-sm-12"],["rows","3","cols","30",1,"form-control"],[1,"doctor-submit","text-end"],["type","submit",1,"btn","btn-primary","submit-form","me-2"],["type","submit",1,"btn","btn-primary","cancel-form"],[3,"value"]],template:function(r,o){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Accounts "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Edit Payments "),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),t._uU(22,"Edit Payments"),t.qZA()()(),t.TgZ(23,"div",14)(24,"div",15)(25,"label"),t._uU(26,"Payment Number "),t.TgZ(27,"span",16),t._uU(28,"*"),t.qZA()(),t._UZ(29,"input",17),t.qZA()(),t.TgZ(30,"div",14)(31,"div",15)(32,"label"),t._uU(33,"Payment Date "),t.TgZ(34,"span",16),t._uU(35,"*"),t.qZA()(),t._UZ(36,"input",18)(37,"mat-datepicker",null,19)(39,"mat-datepicker-toggle",20),t.qZA()(),t.TgZ(40,"div",14)(41,"div",15)(42,"label"),t._uU(43,"Patient Name "),t.TgZ(44,"span",16),t._uU(45,"*"),t.qZA()(),t._UZ(46,"input",21),t.qZA()(),t.TgZ(47,"div",14)(48,"div",15)(49,"label"),t._uU(50,"Doctor Name "),t.TgZ(51,"span",16),t._uU(52,"*"),t.qZA()(),t.TgZ(53,"mat-select",22),t.NdJ("ngModelChange",function(s){return o.selectedValue=s}),t.YNc(54,y,2,2,"mat-option",23),t.qZA()()(),t.TgZ(55,"div",14)(56,"div",15)(57,"label"),t._uU(58,"Total Amount "),t.TgZ(59,"span",16),t._uU(60,"*"),t.qZA()(),t._UZ(61,"input",24),t.qZA()(),t.TgZ(62,"div",14)(63,"div",15)(64,"label"),t._uU(65,"Discount "),t.TgZ(66,"span",16),t._uU(67,"*"),t.qZA()(),t._UZ(68,"input",25),t.qZA()(),t.TgZ(69,"div",14)(70,"div",15)(71,"label"),t._uU(72,"Payment Method "),t.TgZ(73,"span",16),t._uU(74,"*"),t.qZA()(),t.TgZ(75,"mat-select",26),t.NdJ("ngModelChange",function(s){return o.selectedValue=s}),t.YNc(76,U,2,2,"mat-option",23),t.qZA()()(),t.TgZ(77,"div",14)(78,"div",15)(79,"label"),t._uU(80,"Payment Status "),t.TgZ(81,"span",16),t._uU(82,"*"),t.qZA()(),t.TgZ(83,"mat-select",27),t.NdJ("ngModelChange",function(s){return o.selectedValue=s}),t.YNc(84,A,2,2,"mat-option",23),t.qZA()()(),t.TgZ(85,"div",28)(86,"div",15)(87,"label"),t._uU(88,"Other Information "),t.TgZ(89,"span",16),t._uU(90,"*"),t.qZA()(),t._UZ(91,"textarea",29),t.qZA()(),t.TgZ(92,"div",12)(93,"div",30)(94,"button",31),t._uU(95,"Submit"),t.qZA(),t.TgZ(96,"button",32),t._uU(97,"Cancel"),t.qZA()()()()()()()()()()()),2&r){const d=t.MAs(38);t.xp6(7),t.Q6J("routerLink",o.routes.payments),t.xp6(29),t.Q6J("formControl",o.date)("matDatepicker",d),t.xp6(3),t.Q6J("for",d),t.xp6(14),t.Q6J("ngModel",o.selectedValue)("ngModelOptions",t.DdM(13,u)),t.xp6(1),t.Q6J("ngForOf",o.selectedList1),t.xp6(21),t.Q6J("ngModel",o.selectedValue)("ngModelOptions",t.DdM(14,u)),t.xp6(1),t.Q6J("ngForOf",o.selectedList2),t.xp6(7),t.Q6J("ngModel",o.selectedValue)("ngModelOptions",t.DdM(15,u)),t.xp6(1),t.Q6J("ngForOf",o.selectedList3)}},dependencies:[v.sg,m.rH,c.Mq,c.hl,c.nW,f.R9,h.gD,T.ey,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,l.oH]}),a})()}];let C=(()=>{const e=class{};let a=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(M),m.Bz]}),a})();var J=n(5108);let P=(()=>{const e=class{};let a=e;return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.ez,C,J.m]}),a})()}}]);