"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8292],{8292:(Q,m,l)=>{l.r(m),l.d(m,{StaffLeaveModule:()=>P});var d=l(6895),p=l(27),Z=l(671),_=l(6382),e=l(4650),T=l(7945),u=l(3125),A=l(9549),b=l(4385),y=l(3238),h=l(6308),g=l(4006);function U(n,s){if(1&n&&(e.TgZ(0,"mat-option",68),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}function q(n,s){if(1&n&&(e.TgZ(0,"mat-option",68),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}const L=function(n,s,t,a){return{"status-green":n,"status-orange":s,"status-pink":t,"status-purple":a}};function x(n,s){if(1&n&&(e.TgZ(0,"tr")(1,"td")(2,"div",49),e._UZ(3,"input",50),e.qZA()(),e.TgZ(4,"td",69)(5,"a",7),e._UZ(6,"img",70),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"div",71)(20,"a",72),e._uU(21),e.qZA(),e.TgZ(22,"div",73)(23,"a",74),e._uU(24,"New"),e.qZA(),e.TgZ(25,"a",74),e._uU(26,"Pending"),e.qZA(),e.TgZ(27,"a",74),e._uU(28,"Approved"),e.qZA(),e.TgZ(29,"a",74),e._uU(30,"Declined"),e.qZA()()()(),e.TgZ(31,"td",75)(32,"div",76)(33,"a",77),e._UZ(34,"i",78),e.qZA(),e.TgZ(35,"div",79)(36,"a",80),e._UZ(37,"i",81),e._uU(38," Edit"),e.qZA(),e.TgZ(39,"a",82),e._UZ(40,"i",83),e._uU(41," Delete"),e.qZA()()()()()),2&n){const t=s.$implicit,a=e.oxw();e.xp6(5),e.Q6J("routerLink",a.routes.profile),e.xp6(1),e.Q6J("src",t.img,e.LSH),e.xp6(1),e.hij(" ",t.employeeName,""),e.xp6(2),e.Oqu(t.leaveType),e.xp6(2),e.Oqu(t.from),e.xp6(2),e.Oqu(t.to),e.xp6(2),e.Oqu(t.noOfDays),e.xp6(2),e.Oqu(t.reason),e.xp6(3),e.Q6J("ngClass",e.l5B(11,L,"Approved"===t.status,"Pending"===t.status,"Declined"===t.status,"New"===t.status)),e.xp6(1),e.hij(" ",t.status," "),e.xp6(15),e.Q6J("routerLink",a.routes.editLeave)}}function S(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",85),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.moveToPage(r.currentPage-2))}),e.TgZ(1,"a",86),e._uU(2," ... "),e.qZA()()}if(2&n){const t=e.oxw(2);e.Q6J("hidden",1===t.currentPage)}}function C(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",85),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.moveToPage(r.currentPage+2))}),e.TgZ(1,"a",86),e._uU(2," ... "),e.qZA()()}if(2&n){const t=e.oxw(2);e.Q6J("hidden",t.currentPage>=t.pageNumberArray[t.pageNumberArray.length-2]||t.totalData<t.serialNumberArray[t.serialNumberArray.length-1])}}function k(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",65)(2,"a",67),e.NdJ("click",function(){const i=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.moveToPage(i))}),e._uU(3),e.qZA()(),e.YNc(4,S,3,1,"li",84),e.YNc(5,C,3,1,"li",84),e.BQk()}if(2&n){const t=s.$implicit,a=s.index,r=e.oxw();e.xp6(1),e.ekj("active",t===r.currentPage),e.Q6J("ngClass",r.pageNumberArray[r.currentPage-2]>t&&1!==t&&r.pageNumberArray.length>6||r.pageNumberArray[r.currentPage]<t&&1!==t&&r.pageNumberArray.length>6&&r.pageNumberArray.length!==t?"hide-page-no":"show-page-no"),e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",0===a&&r.pageNumberArray.length>6&&r.currentPage>2),e.xp6(1),e.Q6J("ngIf",a===r.pageNumberArray.length-2&&r.pageNumberArray.length>6)}}const f=function(){return{standalone:!0}},v=function(n){return{disabled:n}},N=[{path:"",component:(()=>{const s=class{constructor(a){this.data=a,this.routes=_._,this.staffLeave=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.selectedList1=[{value:"Select Leave Type"},{value:"Medical Leave"},{value:"Casual Leave"},{value:"Loss of Pay"}],this.selectedList2=[{value:"Leave Status"},{value:"Pending"},{value:"Approved"},{value:"Declined"}]}ngOnInit(){this.getTableData()}getTableData(){this.staffLeave=[],this.serialNumberArray=[],this.data.getStaffLeave().subscribe(a=>{this.totalData=a.totalData,a.data.map((r,i)=>{const o=i+1;i>=this.skip&&o<=this.limit&&(this.staffLeave.push(r),this.serialNumberArray.push(o))}),this.dataSource=new Z.by(this.staffLeave),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(a){this.dataSource.filter=a.trim().toLowerCase(),this.staffLeave=this.dataSource.filteredData}sortData(a){const r=this.staffLeave.slice();this.staffLeave=a.active&&""!==a.direction?r.sort((i,o)=>(i[a.active]<o[a.active]?-1:1)*("asc"===a.direction?1:-1)):r}getMoreData(a){"next"==a?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==a&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(a){this.currentPage=a,this.skip=this.pageSelection[a-1].skip,this.limit=this.pageSelection[a-1].limit,a>this.currentPage?this.pageIndex=a-1:a<this.currentPage&&(this.pageIndex=a+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(a,r){this.pageNumberArray=[],this.totalPages=a/r,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var i=1;i<=this.totalPages;i++){const o=r*i,c=o-r;this.pageNumberArray.push(i),this.pageSelection.push({skip:c,limit:o})}}};let n=s;return s.\u0275fac=function(r){return new(r||s)(e.Y36(T.D))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-staff-leave"]],decls:120,vars:26,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["type","text","placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"staff-search-table"],[1,"col-12","col-md-6","col-xl-4"],[1,"form-group","local-forms"],["type","text",1,"form-control"],["placeholder","Select Leave Type",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Leave Status",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],["type","text","matInput","",1,"form-control","datetimepicker",3,"matDatepicker"],["picker1",""],["matIconSuffix","",3,"for"],["picker2",""],[1,"doctor-submit"],["type","submit",1,"btn","btn-primary","submit-list-form","me-2"],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","employeeName"],["mat-sort-header","leaveType"],["mat-sort-header","from"],["mat-sort-header","to"],["mat-sort-header","noOfDays"],["mat-sort-header","reason"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[3,"value"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"dropdown","action-label"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"custom-badge","dropdown-toggle",3,"ngClass"],[1,"dropdown-menu","dropdown-menu-end","status-staff"],["href","javascript:;",1,"dropdown-item"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Staffs "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"Leave Request"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),e._uU(22,"Leave Request"),e.qZA(),e.TgZ(23,"div",16)(24,"div",17)(25,"input",18),e.NdJ("ngModelChange",function(c){return i.searchDataValue=c})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),e.qZA(),e.TgZ(26,"a",19),e._UZ(27,"img",20),e.qZA()(),e.TgZ(28,"div",21)(29,"a",22),e._UZ(30,"img",23),e.qZA(),e.TgZ(31,"a",24),e._UZ(32,"img",25),e.qZA()()()()(),e.TgZ(33,"div",26)(34,"a",27),e._UZ(35,"img",28),e.qZA(),e.TgZ(36,"a",27),e._UZ(37,"img",29),e.qZA(),e.TgZ(38,"a",27),e._UZ(39,"img",30),e.qZA(),e.TgZ(40,"a",31),e._UZ(41,"img",32),e.qZA()()()(),e.TgZ(42,"div",33)(43,"form")(44,"div",3)(45,"div",34)(46,"div",35)(47,"label"),e._uU(48,"Employee Name "),e.qZA(),e._UZ(49,"input",36),e.qZA()(),e.TgZ(50,"div",34)(51,"div",35)(52,"label"),e._uU(53,"Leave Type "),e.qZA(),e.TgZ(54,"mat-select",37),e.NdJ("ngModelChange",function(c){return i.selectedValue=c}),e.YNc(55,U,2,2,"mat-option",38),e.qZA()()(),e.TgZ(56,"div",34)(57,"div",35)(58,"label"),e._uU(59,"Leave Status "),e.qZA(),e.TgZ(60,"mat-select",39),e.NdJ("ngModelChange",function(c){return i.selectedValue=c}),e.YNc(61,q,2,2,"mat-option",38),e.qZA()()(),e.TgZ(62,"div",34)(63,"div",35)(64,"label"),e._uU(65,"From "),e.qZA(),e._UZ(66,"input",40)(67,"mat-datepicker",null,41)(69,"mat-datepicker-toggle",42),e.qZA()(),e.TgZ(70,"div",34)(71,"div",35)(72,"label"),e._uU(73,"To "),e.qZA(),e._UZ(74,"input",40)(75,"mat-datepicker",null,43)(77,"mat-datepicker-toggle",42),e.qZA()(),e.TgZ(78,"div",34)(79,"div",44)(80,"button",45),e._uU(81,"Search"),e.qZA()()()()()(),e.TgZ(82,"div",46)(83,"table",47),e.NdJ("matSortChange",function(c){return i.sortData(c)}),e.TgZ(84,"thead")(85,"tr")(86,"th",48)(87,"div",49),e._UZ(88,"input",50),e.qZA()(),e.TgZ(89,"th",51),e._uU(90,"Employee Name"),e.qZA(),e.TgZ(91,"th",52),e._uU(92,"Leave Type"),e.qZA(),e.TgZ(93,"th",53),e._uU(94,"From"),e.qZA(),e.TgZ(95,"th",54),e._uU(96,"To"),e.qZA(),e.TgZ(97,"th",55),e._uU(98,"No of days"),e.qZA(),e.TgZ(99,"th",56),e._uU(100,"Reason"),e.qZA(),e.TgZ(101,"th",57),e._uU(102,"Status"),e.qZA(),e._UZ(103,"th"),e.qZA()(),e.TgZ(104,"tbody"),e.YNc(105,x,42,16,"tr",58),e.qZA()(),e.TgZ(106,"div",59)(107,"div",60)(108,"div",61),e._uU(109),e.qZA()(),e.TgZ(110,"div",62)(111,"div",63)(112,"ul",64)(113,"li",65)(114,"a",66),e.NdJ("click",function(){return i.getMoreData("previous")}),e._uU(115,"Previous"),e.qZA()(),e.YNc(116,k,6,6,"ng-container",58),e.TgZ(117,"li",65)(118,"a",67),e.NdJ("click",function(){return i.getMoreData("next")}),e._uU(119,"Next "),e.qZA()()()()()()()()()()()()()),2&r){const o=e.MAs(68),c=e.MAs(76);e.xp6(7),e.Q6J("routerLink",i.routes.staffList),e.xp6(18),e.Q6J("ngModel",i.searchDataValue),e.xp6(4),e.Q6J("routerLink",i.routes.addLeave),e.xp6(25),e.Q6J("ngModel",i.selectedValue)("ngModelOptions",e.DdM(20,f)),e.xp6(1),e.Q6J("ngForOf",i.selectedList1),e.xp6(5),e.Q6J("ngModel",i.selectedValue)("ngModelOptions",e.DdM(21,f)),e.xp6(1),e.Q6J("ngForOf",i.selectedList2),e.xp6(5),e.Q6J("matDatepicker",o),e.xp6(3),e.Q6J("for",o),e.xp6(5),e.Q6J("matDatepicker",c),e.xp6(3),e.Q6J("for",c),e.xp6(28),e.Q6J("ngForOf",i.staffLeave),e.xp6(4),e.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),e.xp6(4),e.Q6J("ngClass",e.VKq(22,v,1===i.currentPage)),e.xp6(3),e.Q6J("ngForOf",i.pageNumberArray),e.xp6(1),e.Q6J("ngClass",e.VKq(24,v,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.staffLeave.length))}},dependencies:[d.mk,d.sg,d.O5,p.rH,u.Mq,u.hl,u.nW,A.R9,b.gD,y.ey,h.YE,h.nU,g._Y,g.Fj,g.JJ,g.JL,g.On,g.F]}),n})()}];let J=(()=>{const s=class{};let n=s;return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.Bz.forChild(N),p.Bz]}),n})();var D=l(5108);let P=(()=>{const s=class{};let n=s;return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.ez,J,D.m]}),n})()}}]);