"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[2006],{2006:(P,p,l)=>{l.r(p),l.d(p,{StaffHolidayModule:()=>U});var g=l(6895),d=l(27),f=l(6382),Z=l(671),t=l(4650),v=l(7945),m=l(6308),h=l(4006);function _(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td")(2,"div",36),t._UZ(3,"input",37),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td",52)(13,"div",53)(14,"a",54),t._UZ(15,"i",55),t.qZA(),t.TgZ(16,"div",56)(17,"a",57),t._UZ(18,"i",58),t._uU(19," Edit"),t.qZA(),t.TgZ(20,"a",59),t._UZ(21,"i",60),t._uU(22," Delete"),t.qZA()()()()()),2&n){const s=r.$implicit;t.xp6(5),t.Oqu(s.title),t.xp6(2),t.hij("",s.holidayDate,"\t"),t.xp6(2),t.Oqu(s.day),t.xp6(2),t.Oqu(s.description)}}function y(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"li",62),t.NdJ("click",function(){t.CHM(s);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage-2))}),t.TgZ(1,"a",63),t._uU(2," ... "),t.qZA()()}if(2&n){const s=t.oxw(2);t.Q6J("hidden",1===s.currentPage)}}function b(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"li",62),t.NdJ("click",function(){t.CHM(s);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage+2))}),t.TgZ(1,"a",63),t._uU(2," ... "),t.qZA()()}if(2&n){const s=t.oxw(2);t.Q6J("hidden",s.currentPage>=s.pageNumberArray[s.pageNumberArray.length-2]||s.totalData<s.serialNumberArray[s.serialNumberArray.length-1])}}function T(n,r){if(1&n){const s=t.EpF();t.ynx(0),t.TgZ(1,"li",49)(2,"a",51),t.NdJ("click",function(){const i=t.CHM(s).$implicit,o=t.oxw();return t.KtG(o.moveToPage(i))}),t._uU(3),t.qZA()(),t.YNc(4,y,3,1,"li",61),t.YNc(5,b,3,1,"li",61),t.BQk()}if(2&n){const s=r.$implicit,e=r.index,a=t.oxw();t.xp6(1),t.ekj("active",s===a.currentPage),t.Q6J("ngClass",a.pageNumberArray[a.currentPage-2]>s&&1!==s&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<s&&1!==s&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==s?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",s," "),t.xp6(1),t.Q6J("ngIf",0===e&&a.pageNumberArray.length>6&&a.currentPage>2),t.xp6(1),t.Q6J("ngIf",e===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const u=function(n){return{disabled:n}},A=[{path:"",component:(()=>{const r=class{constructor(e){this.data=e,this.routes=f._,this.staffHoliday=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.staffHoliday=[],this.serialNumberArray=[],this.data.getStaffHoliday().subscribe(e=>{this.totalData=e.totalData,e.data.map((a,i)=>{const o=i+1;i>=this.skip&&o<=this.limit&&(this.staffHoliday.push(a),this.serialNumberArray.push(o))}),this.dataSource=new Z.by(this.staffHoliday),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.staffHoliday=this.dataSource.filteredData}sortData(e){const a=this.staffHoliday.slice();this.staffHoliday=e.active&&""!==e.direction?a.sort((i,o)=>(i[e.active]<o[e.active]?-1:1)*("asc"===e.direction?1:-1)):a}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,a){this.pageNumberArray=[],this.totalPages=e/a,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var i=1;i<=this.totalPages;i++){const o=a*i,c=o-a;this.pageNumberArray.push(i),this.pageSelection.push({skip:c,limit:o})}}};let n=r;return r.\u0275fac=function(a){return new(a||r)(t.Y36(v.D))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-staff-holiday"]],decls:74,vars:13,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],["href","javascript:;",1,"btn","btn-primary","add-pluss","ms-2"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","title"],["mat-sort-header","holidayDate"],["mat-sort-header","day"],["mat-sort-header","description"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],["href","javascript:;",1,"dropdown-item"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Staffs "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Holidays"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Holidays"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(c){return i.searchDataValue=c})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"table",34),t.NdJ("matSortChange",function(c){return i.sortData(c)}),t.TgZ(44,"thead")(45,"tr")(46,"th",35)(47,"div",36),t._UZ(48,"input",37),t.qZA()(),t.TgZ(49,"th",38),t._uU(50,"Title"),t.qZA(),t.TgZ(51,"th",39),t._uU(52,"Holiday Date"),t.qZA(),t.TgZ(53,"th",40),t._uU(54,"Day"),t.qZA(),t.TgZ(55,"th",41),t._uU(56,"Description"),t.qZA(),t._UZ(57,"th"),t.qZA()(),t.TgZ(58,"tbody"),t.YNc(59,_,23,4,"tr",42),t.qZA()(),t.TgZ(60,"div",43)(61,"div",44)(62,"div",45),t._uU(63),t.qZA()(),t.TgZ(64,"div",46)(65,"div",47)(66,"ul",48)(67,"li",49)(68,"a",50),t.NdJ("click",function(){return i.getMoreData("previous")}),t._uU(69,"Previous"),t.qZA()(),t.YNc(70,T,6,6,"ng-container",42),t.TgZ(71,"li",49)(72,"a",51),t.NdJ("click",function(){return i.getMoreData("next")}),t._uU(73,"Next "),t.qZA()()()()()()()()()()()()()),2&a&&(t.xp6(7),t.Q6J("routerLink",i.routes.staffList),t.xp6(18),t.Q6J("ngModel",i.searchDataValue),t.xp6(34),t.Q6J("ngForOf",i.staffHoliday),t.xp6(4),t.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(9,u,1===i.currentPage)),t.xp6(3),t.Q6J("ngForOf",i.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(11,u,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.staffHoliday.length)))},dependencies:[g.mk,g.sg,g.O5,d.rH,m.YE,m.nU,h.Fj,h.JJ,h.On]}),n})()}];let S=(()=>{const r=class{};let n=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.Bz.forChild(A),d.Bz]}),n})();var C=l(5108);let U=(()=>{const r=class{};let n=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,S,C.m]}),n})()}}]);