"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[6642],{6642:(M,u,s)=>{s.r(u),s.d(u,{SalaryModule:()=>P});var g=s(6895),d=s(27),v=s(7155),_=s(6382),e=s(4650),f=s(7945),p=s(3125),y=s(9549),A=s(4385),T=s(3238),m=s(6308),c=s(433);function b(i,l){if(1&i&&(e.TgZ(0,"mat-option",68),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}function S(i,l){if(1&i&&(e.TgZ(0,"mat-option",68),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}function U(i,l){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"div",49),e._UZ(3,"input",50),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td",69)(7,"a",7),e._UZ(8,"img",70),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td")(15,"div",71)(16,"a",72),e._uU(17),e.qZA(),e.TgZ(18,"div",73)(19,"a",74),e._uU(20,"Nurse"),e.qZA(),e.TgZ(21,"a",74),e._uU(22,"Accountant"),e.qZA(),e.TgZ(23,"a",74),e._uU(24,"Pharmacist"),e.qZA()()()(),e.TgZ(25,"td"),e._uU(26),e.qZA(),e.TgZ(27,"td")(28,"a",75),e._uU(29),e.qZA()(),e.TgZ(30,"td",76)(31,"div",77)(32,"a",78),e._UZ(33,"i",79),e.qZA(),e.TgZ(34,"div",80)(35,"a",81),e._UZ(36,"i",82),e._uU(37," Edit"),e.qZA(),e.TgZ(38,"a",83),e._UZ(39,"i",84),e._uU(40," Delete"),e.qZA()()()()()),2&i){const t=l.$implicit,r=e.oxw();e.xp6(5),e.Oqu(t.employeeId),e.xp6(2),e.Q6J("routerLink",r.routes.profile),e.xp6(1),e.Q6J("src",t.img,e.LSH),e.xp6(1),e.hij(" ",t.employeeName,""),e.xp6(2),e.hij("",t.email,"\t"),e.xp6(2),e.Oqu(t.joiningDate),e.xp6(4),e.hij(" ",t.role," "),e.xp6(9),e.Oqu(t.salary),e.xp6(2),e.Q6J("routerLink",r.routes.salaryView),e.xp6(1),e.Oqu(t.status),e.xp6(6),e.Q6J("routerLink",r.routes.editSalary)}}function q(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"li",86),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.moveToPage(a.currentPage-2))}),e.TgZ(1,"a",87),e._uU(2," ... "),e.qZA()()}if(2&i){const t=e.oxw(2);e.Q6J("hidden",1===t.currentPage)}}function x(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"li",86),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.moveToPage(a.currentPage+2))}),e.TgZ(1,"a",87),e._uU(2," ... "),e.qZA()()}if(2&i){const t=e.oxw(2);e.Q6J("hidden",t.currentPage>=t.pageNumberArray[t.pageNumberArray.length-2]||t.totalData<t.serialNumberArray[t.serialNumberArray.length-1])}}function k(i,l){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",65)(2,"a",67),e.NdJ("click",function(){const n=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.moveToPage(n))}),e._uU(3),e.qZA()(),e.YNc(4,q,3,1,"li",85),e.YNc(5,x,3,1,"li",85),e.BQk()}if(2&i){const t=l.$implicit,r=l.index,a=e.oxw();e.xp6(1),e.ekj("active",t===a.currentPage),e.Q6J("ngClass",a.pageNumberArray[a.currentPage-2]>t&&1!==t&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<t&&1!==t&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==t?"hide-page-no":"show-page-no"),e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",0===r&&a.pageNumberArray.length>6&&a.currentPage>2),e.xp6(1),e.Q6J("ngIf",r===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const h=function(){return{standalone:!0}},Z=function(i){return{disabled:i}},C=[{path:"",component:(()=>{class i{constructor(t){this.data=t,this.routes=_._,this.salary=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.selectedList1=[{value:"Select Role"},{value:"Accountant"},{value:"Nurse"},{value:"Pharmacist"}],this.selectedList2=[{value:"Select Leave Status"},{value:"Pending"},{value:"Approved"},{value:"Rejected"}]}ngOnInit(){this.getTableData()}getTableData(){this.salary=[],this.serialNumberArray=[],this.data.getSalary().subscribe(t=>{this.totalData=t.totalData,t.data.map((r,a)=>{const n=a+1;a>=this.skip&&n<=this.limit&&(this.salary.push(r),this.serialNumberArray.push(n))}),this.dataSource=new v.by(this.salary),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(t){this.dataSource.filter=t.trim().toLowerCase(),this.salary=this.dataSource.filteredData}sortData(t){const r=this.salary.slice();this.salary=t.active&&""!==t.direction?r.sort((a,n)=>(a[t.active]<n[t.active]?-1:1)*("asc"===t.direction?1:-1)):r}getMoreData(t){"next"==t?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==t&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(t){this.currentPage=t,this.skip=this.pageSelection[t-1].skip,this.limit=this.pageSelection[t-1].limit,t>this.currentPage?this.pageIndex=t-1:t<this.currentPage&&(this.pageIndex=t+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(t,r){this.pageNumberArray=[],this.totalPages=t/r,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var a=1;a<=this.totalPages;a++){var n=r*a,o=n-r;this.pageNumberArray.push(a),this.pageSelection.push({skip:o,limit:n})}}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(f.D))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-salary"]],decls:120,vars:26,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["type","text","placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"staff-search-table"],[1,"col-12","col-md-6","col-xl-4"],[1,"form-group","local-forms"],["type","text",1,"form-control"],["placeholder","Select Role",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select Leave Status",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],["type","text","matInput","",1,"form-control","datetimepicker",3,"matDatepicker"],["picker1",""],["matIconSuffix","",3,"for"],["picker2",""],[1,"doctor-submit"],["type","submit",1,"btn","btn-primary","submit-list-form","me-2"],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","employeeId"],["mat-sort-header","employeeName"],["mat-sort-header","email"],["mat-sort-header","joiningDate"],["mat-sort-header","role"],["mat-sort-header","salary"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[3,"value"],[1,"profile-image"],["width","28","height","28","alt","",1,"rounded-circle","m-r-5",3,"src"],[1,"dropdown","action-label"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"custom-badge","status-purple","dropdown-toggle"],[1,"dropdown-menu","dropdown-menu-end","status-staff"],["href","javascript:;",1,"dropdown-item"],[1,"btn","btn-sm","btn-primary",3,"routerLink"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(r,a){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Payroll "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"Empoyee Salary"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),e._uU(22,"Empoyee Salary"),e.qZA(),e.TgZ(23,"div",16)(24,"div",17)(25,"input",18),e.NdJ("ngModelChange",function(o){return a.searchDataValue=o})("ngModelChange",function(){return a.searchData(a.searchDataValue)}),e.qZA(),e.TgZ(26,"a",19),e._UZ(27,"img",20),e.qZA()(),e.TgZ(28,"div",21)(29,"a",22),e._UZ(30,"img",23),e.qZA(),e.TgZ(31,"a",24),e._UZ(32,"img",25),e.qZA()()()()(),e.TgZ(33,"div",26)(34,"a",27),e._UZ(35,"img",28),e.qZA(),e.TgZ(36,"a",27),e._UZ(37,"img",29),e.qZA(),e.TgZ(38,"a",27),e._UZ(39,"img",30),e.qZA(),e.TgZ(40,"a",31),e._UZ(41,"img",32),e.qZA()()()(),e.TgZ(42,"div",33)(43,"form")(44,"div",3)(45,"div",34)(46,"div",35)(47,"label"),e._uU(48,"Employee Name "),e.qZA(),e._UZ(49,"input",36),e.qZA()(),e.TgZ(50,"div",34)(51,"div",35)(52,"label"),e._uU(53,"Role "),e.qZA(),e.TgZ(54,"mat-select",37),e.NdJ("ngModelChange",function(o){return a.selectedValue=o}),e.YNc(55,b,2,2,"mat-option",38),e.qZA()()(),e.TgZ(56,"div",34)(57,"div",35)(58,"label"),e._uU(59,"Leave Status "),e.qZA(),e.TgZ(60,"mat-select",39),e.NdJ("ngModelChange",function(o){return a.selectedValue=o}),e.YNc(61,S,2,2,"mat-option",38),e.qZA()()(),e.TgZ(62,"div",34)(63,"div",35)(64,"label"),e._uU(65,"From "),e.qZA(),e._UZ(66,"input",40)(67,"mat-datepicker",null,41)(69,"mat-datepicker-toggle",42),e.qZA()(),e.TgZ(70,"div",34)(71,"div",35)(72,"label"),e._uU(73,"To "),e.qZA(),e._UZ(74,"input",40)(75,"mat-datepicker",null,43)(77,"mat-datepicker-toggle",42),e.qZA()(),e.TgZ(78,"div",34)(79,"div",44)(80,"button",45),e._uU(81,"Search"),e.qZA()()()()()(),e.TgZ(82,"div",46)(83,"table",47),e.NdJ("matSortChange",function(o){return a.sortData(o)}),e.TgZ(84,"thead")(85,"tr")(86,"th",48)(87,"div",49),e._UZ(88,"input",50),e.qZA()(),e.TgZ(89,"th",51),e._uU(90,"Employee ID"),e.qZA(),e.TgZ(91,"th",52),e._uU(92,"Employee Name"),e.qZA(),e.TgZ(93,"th",53),e._uU(94,"Email"),e.qZA(),e.TgZ(95,"th",54),e._uU(96,"Joining Date"),e.qZA(),e.TgZ(97,"th",55),e._uU(98,"Role"),e.qZA(),e.TgZ(99,"th",56),e._uU(100,"Salary"),e.qZA(),e.TgZ(101,"th",57),e._uU(102,"Status"),e.qZA(),e._UZ(103,"th"),e.qZA()(),e.TgZ(104,"tbody"),e.YNc(105,U,41,11,"tr",58),e.qZA()(),e.TgZ(106,"div",59)(107,"div",60)(108,"div",61),e._uU(109),e.qZA()(),e.TgZ(110,"div",62)(111,"div",63)(112,"ul",64)(113,"li",65)(114,"a",66),e.NdJ("click",function(){return a.getMoreData("previous")}),e._uU(115,"Previous"),e.qZA()(),e.YNc(116,k,6,6,"ng-container",58),e.TgZ(117,"li",65)(118,"a",67),e.NdJ("click",function(){return a.getMoreData("next")}),e._uU(119,"Next "),e.qZA()()()()()()()()()()()()()),2&r){const n=e.MAs(68),o=e.MAs(76);e.xp6(7),e.Q6J("routerLink",a.routes.salary),e.xp6(18),e.Q6J("ngModel",a.searchDataValue),e.xp6(4),e.Q6J("routerLink",a.routes.addSalary),e.xp6(25),e.Q6J("ngModel",a.selectedValue)("ngModelOptions",e.DdM(20,h)),e.xp6(1),e.Q6J("ngForOf",a.selectedList1),e.xp6(5),e.Q6J("ngModel",a.selectedValue)("ngModelOptions",e.DdM(21,h)),e.xp6(1),e.Q6J("ngForOf",a.selectedList2),e.xp6(5),e.Q6J("matDatepicker",n),e.xp6(3),e.Q6J("for",n),e.xp6(5),e.Q6J("matDatepicker",o),e.xp6(3),e.Q6J("for",o),e.xp6(28),e.Q6J("ngForOf",a.salary),e.xp6(4),e.lnq(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),e.xp6(4),e.Q6J("ngClass",e.VKq(22,Z,1===a.currentPage)),e.xp6(3),e.Q6J("ngForOf",a.pageNumberArray),e.xp6(1),e.Q6J("ngClass",e.VKq(24,Z,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.salary.length))}},dependencies:[g.mk,g.sg,g.O5,d.rH,p.Mq,p.hl,p.nW,y.R9,A.gD,T.ey,m.YE,m.nU,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F]})}return i})()}];let J=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275mod=e.oAB({type:i});static#a=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(C),d.Bz]})}return i})();var N=s(6943);let P=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275mod=e.oAB({type:i});static#a=this.\u0275inj=e.cJS({imports:[g.ez,J,N.m]})}return i})()}}]);