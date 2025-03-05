"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[1868],{81868:(M,u,l)=>{l.r(u),l.d(u,{PaymentsModule:()=>S});var m=l(36895),p=l(30027),f=l(30671),v=l(46382),t=l(94650),_=l(74742),d=l(3125),y=l(59549),A=l(84385),T=l(3238),h=l(96308),g=l(24006);function b(s,r){if(1&s&&(t.TgZ(0,"mat-option",65),t._uU(1),t.qZA()),2&s){const a=r.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.value," ")}}const P=function(s,r,a){return{"status-green":s,"status-pink":r,"status-orange":a}};function k(s,r){if(1&s&&(t.TgZ(0,"tr")(1,"td")(2,"div",66),t._UZ(3,"input",48),t.qZA()(),t.TgZ(4,"td")(5,"a",7),t._uU(6),t.qZA()(),t.TgZ(7,"td",67)(8,"a",7),t._UZ(9,"img",68),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"button",69),t._uU(19),t.qZA()(),t.TgZ(20,"td",70)(21,"div",71)(22,"a",72),t._UZ(23,"i",73),t.qZA(),t.TgZ(24,"div",74)(25,"a",75),t._UZ(26,"i",76),t._uU(27," Edit"),t.qZA(),t.TgZ(28,"a",77),t._UZ(29,"i",78),t._uU(30," Delete"),t.qZA()()()()()),2&s){const a=r.$implicit,e=t.oxw();t.xp6(5),t.Q6J("routerLink",e.routes.invoiceView),t.xp6(1),t.Oqu(a.invoiceNumber),t.xp6(2),t.Q6J("routerLink",e.routes.profile),t.xp6(1),t.Q6J("src",a.img,t.LSH),t.xp6(1),t.hij(" ",a.patient,""),t.xp6(2),t.Oqu(a.paymentType),t.xp6(2),t.Oqu(a.paidDate),t.xp6(2),t.Oqu(a.paidAmount),t.xp6(2),t.Q6J("ngClass",t.kEZ(11,P,"Paid"===a.status,"Un Paid"===a.status,"Partially Paid"===a.status)),t.xp6(1),t.Oqu(a.status),t.xp6(6),t.Q6J("routerLink",e.routes.editPayment)}}function U(s,r){if(1&s){const a=t.EpF();t.TgZ(0,"li",80),t.NdJ("click",function(){t.CHM(a);const i=t.oxw(2);return t.KtG(i.moveToPage(i.currentPage-2))}),t.TgZ(1,"a",81),t._uU(2," ... "),t.qZA()()}if(2&s){const a=t.oxw(2);t.Q6J("hidden",1===a.currentPage)}}function x(s,r){if(1&s){const a=t.EpF();t.TgZ(0,"li",80),t.NdJ("click",function(){t.CHM(a);const i=t.oxw(2);return t.KtG(i.moveToPage(i.currentPage+2))}),t.TgZ(1,"a",81),t._uU(2," ... "),t.qZA()()}if(2&s){const a=t.oxw(2);t.Q6J("hidden",a.currentPage>=a.pageNumberArray[a.pageNumberArray.length-2]||a.totalData<a.serialNumberArray[a.serialNumberArray.length-1])}}function q(s,r){if(1&s){const a=t.EpF();t.ynx(0),t.TgZ(1,"li",62)(2,"a",64),t.NdJ("click",function(){const n=t.CHM(a).$implicit,o=t.oxw();return t.KtG(o.moveToPage(n))}),t._uU(3),t.qZA()(),t.YNc(4,U,3,1,"li",79),t.YNc(5,x,3,1,"li",79),t.BQk()}if(2&s){const a=r.$implicit,e=r.index,i=t.oxw();t.xp6(1),t.ekj("active",a===i.currentPage),t.Q6J("ngClass",i.pageNumberArray[i.currentPage-2]>a&&1!==a&&i.pageNumberArray.length>6||i.pageNumberArray[i.currentPage]<a&&1!==a&&i.pageNumberArray.length>6&&i.pageNumberArray.length!==a?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",a," "),t.xp6(1),t.Q6J("ngIf",0===e&&i.pageNumberArray.length>6&&i.currentPage>2),t.xp6(1),t.Q6J("ngIf",e===i.pageNumberArray.length-2&&i.pageNumberArray.length>6)}}const C=function(){return{standalone:!0}},Z=function(s){return{disabled:s}},J=[{path:"",component:(()=>{const r=class{constructor(e){this.data=e,this.routes=v._,this.payments=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.selectedList=[{value:"Select Payment Status"},{value:"Paid"},{value:"Un Paid"},{value:"Partially Paid"}]}ngOnInit(){this.getTableData()}getTableData(){this.payments=[],this.serialNumberArray=[],this.data.getPayments().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,n)=>{const o=n+1;n>=this.skip&&o<=this.limit&&(this.payments.push(i),this.serialNumberArray.push(o))}),this.dataSource=new f.by(this.payments),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.payments=this.dataSource.filteredData}sortData(e){const i=this.payments.slice();this.payments=e.active&&""!==e.direction?i.sort((n,o)=>(n[e.active]<o[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var n=1;n<=this.totalPages;n++){const o=i*n,c=o-i;this.pageNumberArray.push(n),this.pageSelection.push({skip:c,limit:o})}}};let s=r;return r.\u0275fac=function(i){return new(i||r)(t.Y36(_.D))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-payments"]],decls:107,vars:22,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"staff-search-table"],[1,"col-12","col-md-6","col-xl-4"],[1,"form-group","local-forms"],["type","text","matInput","",1,"form-control","datetimepicker",3,"matDatepicker"],["picker1",""],["matIconSuffix","",3,"for"],["picker",""],["placeholder","Select Payment Status",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","col-xl-4","ms-auto"],[1,"doctor-submit"],["type","submit",1,"btn","btn-primary","submit-list-form","me-2"],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox",1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","invoiceNumber"],["mat-sort-header","patient"],["mat-sort-header","paymentType"],["mat-sort-header","paidDate"],["mat-sort-header","paidAmount"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[3,"value"],[1,"form-check","check-tables"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"custom-badge",3,"ngClass"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(i,n){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Accounts "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Payments "),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Payment List"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(c){return n.searchDataValue=c})("ngModelChange",function(){return n.searchData(n.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"form")(44,"div",3)(45,"div",34)(46,"div",35)(47,"label"),t._uU(48,"From "),t.qZA(),t._UZ(49,"input",36)(50,"mat-datepicker",null,37)(52,"mat-datepicker-toggle",38),t.qZA()(),t.TgZ(53,"div",34)(54,"div",35)(55,"label"),t._uU(56,"To "),t.qZA(),t._UZ(57,"input",36)(58,"mat-datepicker",null,39)(60,"mat-datepicker-toggle",38),t.qZA()(),t.TgZ(61,"div",34)(62,"div",35)(63,"label"),t._uU(64,"Payment Status "),t.qZA(),t.TgZ(65,"mat-select",40),t.NdJ("ngModelChange",function(c){return n.selectedValue=c}),t.YNc(66,b,2,2,"mat-option",41),t.qZA()()(),t.TgZ(67,"div",42)(68,"div",43)(69,"button",44),t._uU(70,"Search"),t.qZA()()()()()(),t.TgZ(71,"div",45)(72,"table",46),t.NdJ("matSortChange",function(c){return n.sortData(c)}),t.TgZ(73,"thead")(74,"tr")(75,"th")(76,"div",47),t._UZ(77,"input",48),t.qZA()(),t.TgZ(78,"th",49),t._uU(79,"Invoice Number"),t.qZA(),t.TgZ(80,"th",50),t._uU(81,"Patient"),t.qZA(),t.TgZ(82,"th",51),t._uU(83,"Payment Type"),t.qZA(),t.TgZ(84,"th",52),t._uU(85,"Paid Date"),t.qZA(),t.TgZ(86,"th",53),t._uU(87,"Paid Amount"),t.qZA(),t.TgZ(88,"th",54),t._uU(89,"Status"),t.qZA(),t._UZ(90,"th"),t.qZA()(),t.TgZ(91,"tbody"),t.YNc(92,k,31,15,"tr",55),t.qZA()(),t.TgZ(93,"div",56)(94,"div",57)(95,"div",58),t._uU(96),t.qZA()(),t.TgZ(97,"div",59)(98,"div",60)(99,"ul",61)(100,"li",62)(101,"a",63),t.NdJ("click",function(){return n.getMoreData("previous")}),t._uU(102,"Previous"),t.qZA()(),t.YNc(103,q,6,6,"ng-container",55),t.TgZ(104,"li",62)(105,"a",64),t.NdJ("click",function(){return n.getMoreData("next")}),t._uU(106,"Next "),t.qZA()()()()()()()()()()()()()),2&i){const o=t.MAs(51),c=t.MAs(59);t.xp6(7),t.Q6J("routerLink",n.routes.payments),t.xp6(18),t.Q6J("ngModel",n.searchDataValue),t.xp6(4),t.Q6J("routerLink",n.routes.addPayment),t.xp6(20),t.Q6J("matDatepicker",o),t.xp6(3),t.Q6J("for",o),t.xp6(5),t.Q6J("matDatepicker",c),t.xp6(3),t.Q6J("for",c),t.xp6(5),t.Q6J("ngModel",n.selectedValue)("ngModelOptions",t.DdM(17,C)),t.xp6(1),t.Q6J("ngForOf",n.selectedList),t.xp6(26),t.Q6J("ngForOf",n.payments),t.xp6(4),t.lnq(" Showing ",n.serialNumberArray[0]," to ",n.serialNumberArray[n.serialNumberArray.length-1]," of ",n.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(18,Z,1===n.currentPage)),t.xp6(3),t.Q6J("ngForOf",n.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(20,Z,n.currentPage===n.pageNumberArray[n.pageNumberArray.length-1]||0===n.payments.length))}},dependencies:[m.mk,m.sg,m.O5,p.rH,d.Mq,d.hl,d.nW,y.R9,A.gD,T.ey,h.YE,h.nU,g._Y,g.Fj,g.JJ,g.JL,g.On,g.F]}),s})()}];let N=(()=>{const r=class{};let s=r;return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.Bz.forChild(J),p.Bz]}),s})();var D=l(25108);let S=(()=>{const r=class{};let s=r;return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.ez,N,D.m]}),s})()}}]);