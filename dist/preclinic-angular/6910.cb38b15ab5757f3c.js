"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[6910],{6910:(C,u,n)=>{n.r(u),n.d(u,{AssetsListModule:()=>x});var g=n(6895),d=n(27),Z=n(7155),A=n(6382),t=n(4650),_=n(7945),p=n(3125),f=n(9549),h=n(6308),l=n(433);function v(s,c){if(1&s&&(t.TgZ(0,"tr")(1,"td")(2,"div",46),t._UZ(3,"input",47),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td",66)(7,"a",7),t._UZ(8,"img",67),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"div",68)(22,"a",69),t._uU(23),t.qZA(),t.TgZ(24,"div",70)(25,"a",71),t._uU(26,"Pending"),t.qZA(),t.TgZ(27,"a",71),t._uU(28,"Approved"),t.qZA(),t.TgZ(29,"a",71),t._uU(30,"Returnd"),t.qZA()()()(),t.TgZ(31,"td",72)(32,"div",73)(33,"a",74),t._UZ(34,"i",75),t.qZA(),t.TgZ(35,"div",76)(36,"a",77),t._UZ(37,"i",78),t._uU(38," Edit"),t.qZA(),t.TgZ(39,"a",79),t._UZ(40,"i",80),t._uU(41," Delete"),t.qZA()()()()()),2&s){const e=c.$implicit,i=t.oxw();t.xp6(5),t.Oqu(e.assetId),t.xp6(2),t.Q6J("routerLink",i.routes.profile),t.xp6(2),t.hij(" ",e.assetUser,""),t.xp6(2),t.Oqu(e.assetName),t.xp6(2),t.Oqu(e.purchaseDate),t.xp6(2),t.Oqu(e.warrenty),t.xp6(2),t.Oqu(e.warrentyEnd),t.xp6(2),t.Oqu(e.amount),t.xp6(4),t.hij(" ",e.status," "),t.xp6(13),t.Q6J("routerLink",i.routes.editAsset)}}function T(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"li",82),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage-2))}),t.TgZ(1,"a",83),t._uU(2," ... "),t.qZA()()}if(2&s){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function b(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"li",82),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.moveToPage(a.currentPage+2))}),t.TgZ(1,"a",83),t._uU(2," ... "),t.qZA()()}if(2&s){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function U(s,c){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",63)(2,"a",65),t.NdJ("click",function(){const r=t.CHM(e).$implicit,o=t.oxw();return t.KtG(o.moveToPage(r))}),t._uU(3),t.qZA()(),t.YNc(4,T,3,1,"li",81),t.YNc(5,b,3,1,"li",81),t.BQk()}if(2&s){const e=c.$implicit,i=c.index,a=t.oxw();t.xp6(1),t.ekj("active",e===a.currentPage),t.Q6J("ngClass",a.pageNumberArray[a.currentPage-2]>e&&1!==e&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<e&&1!==e&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===i&&a.pageNumberArray.length>6&&a.currentPage>2),t.xp6(1),t.Q6J("ngIf",i===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const m=function(s){return{disabled:s}},q=[{path:"",component:(()=>{class s{constructor(e){this.data=e,this.routes=A._,this.assetsList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.assetsList=[],this.serialNumberArray=[],this.data.getAssetsList().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,a)=>{const r=a+1;a>=this.skip&&r<=this.limit&&(this.assetsList.push(i),this.serialNumberArray.push(r))}),this.dataSource=new Z.by(this.assetsList),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.assetsList=this.dataSource.filteredData}sortData(e){const i=this.assetsList.slice();this.assetsList=e.active&&""!==e.direction?i.sort((a,r)=>(a[e.active]<r[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var a=1;a<=this.totalPages;a++){const r=i*a,o=r-i;this.pageNumberArray.push(a),this.pageSelection.push({skip:o,limit:r})}}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(_.D))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-assets-list"]],decls:110,vars:18,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["type","text","placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],[1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"staff-search-table"],[1,"col-12","col-md-6","col-xl-3"],[1,"form-group","local-forms"],["type","text",1,"form-control"],["type","text","matInput","",1,"form-control","datetimepicker",3,"matDatepicker"],["picker1",""],["matIconSuffix","",3,"for"],["picker2",""],[1,"doctor-submit"],["type","submit",1,"btn","btn-primary","submit-list-form","me-2"],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","assetId"],["mat-sort-header","assetUser"],["mat-sort-header","assetName"],["mat-sort-header","purchaseDate"],["mat-sort-header","warrenty"],["mat-sort-header","warrentyEnd"],["mat-sort-header","amount"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],[1,"profile-image"],["width","28","height","28","src","assets/img/profiles/avatar-01.jpg","alt","",1,"rounded-circle","m-r-5"],[1,"dropdown","action-label"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"custom-badge","status-orange","dropdown-toggle"],[1,"dropdown-menu","dropdown-menu-end","status-staff"],["href","javascript:;",1,"dropdown-item"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_patient",1,"dropdown-item"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(i,a){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Assets "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Assets List"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),t._uU(22,"Assets List"),t.qZA(),t.TgZ(23,"div",16)(24,"div",17)(25,"input",18),t.NdJ("ngModelChange",function(o){return a.searchDataValue=o})("ngModelChange",function(){return a.searchData(a.searchDataValue)}),t.qZA(),t.TgZ(26,"a",19),t._UZ(27,"img",20),t.qZA()(),t.TgZ(28,"div",21)(29,"a",22),t._UZ(30,"img",23),t.qZA(),t.TgZ(31,"a",24),t._UZ(32,"img",25),t.qZA()()()()(),t.TgZ(33,"div",26)(34,"a",27),t._UZ(35,"img",28),t.qZA(),t.TgZ(36,"a",27),t._UZ(37,"img",29),t.qZA(),t.TgZ(38,"a",27),t._UZ(39,"img",30),t.qZA(),t.TgZ(40,"a",31),t._UZ(41,"img",32),t.qZA()()()(),t.TgZ(42,"div",33)(43,"form")(44,"div",3)(45,"div",34)(46,"div",35)(47,"label"),t._uU(48,"Employee Name "),t.qZA(),t._UZ(49,"input",36),t.qZA()(),t.TgZ(50,"div",34)(51,"div",35)(52,"label"),t._uU(53,"From "),t.qZA(),t._UZ(54,"input",37)(55,"mat-datepicker",null,38)(57,"mat-datepicker-toggle",39),t.qZA()(),t.TgZ(58,"div",34)(59,"div",35)(60,"label"),t._uU(61,"To "),t.qZA(),t._UZ(62,"input",37)(63,"mat-datepicker",null,40)(65,"mat-datepicker-toggle",39),t.qZA()(),t.TgZ(66,"div",34)(67,"div",41)(68,"button",42),t._uU(69," Search "),t.qZA()()()()()(),t.TgZ(70,"div",43)(71,"table",44),t.NdJ("matSortChange",function(o){return a.sortData(o)}),t.TgZ(72,"thead")(73,"tr")(74,"th",45)(75,"div",46),t._UZ(76,"input",47),t.qZA()(),t.TgZ(77,"th",48),t._uU(78,"Asset Id"),t.qZA(),t.TgZ(79,"th",49),t._uU(80,"Asset User"),t.qZA(),t.TgZ(81,"th",50),t._uU(82,"Asset Name"),t.qZA(),t.TgZ(83,"th",51),t._uU(84,"Purchase Date"),t.qZA(),t.TgZ(85,"th",52),t._uU(86,"Warrenty"),t.qZA(),t.TgZ(87,"th",53),t._uU(88,"Warrenty End"),t.qZA(),t.TgZ(89,"th",54),t._uU(90,"Amount"),t.qZA(),t.TgZ(91,"th",55),t._uU(92,"Status"),t.qZA(),t._UZ(93,"th"),t.qZA()(),t.TgZ(94,"tbody"),t.YNc(95,v,42,10,"tr",56),t.qZA()(),t.TgZ(96,"div",57)(97,"div",58)(98,"div",59),t._uU(99),t.qZA()(),t.TgZ(100,"div",60)(101,"div",61)(102,"ul",62)(103,"li",63)(104,"a",64),t.NdJ("click",function(){return a.getMoreData("previous")}),t._uU(105,"Previous"),t.qZA()(),t.YNc(106,U,6,6,"ng-container",56),t.TgZ(107,"li",63)(108,"a",65),t.NdJ("click",function(){return a.getMoreData("next")}),t._uU(109,"Next "),t.qZA()()()()()()()()()()()()()),2&i){const r=t.MAs(56),o=t.MAs(64);t.xp6(7),t.Q6J("routerLink",a.routes.assetsList),t.xp6(18),t.Q6J("ngModel",a.searchDataValue),t.xp6(4),t.Q6J("routerLink",a.routes.addAsset),t.xp6(25),t.Q6J("matDatepicker",r),t.xp6(3),t.Q6J("for",r),t.xp6(5),t.Q6J("matDatepicker",o),t.xp6(3),t.Q6J("for",o),t.xp6(30),t.Q6J("ngForOf",a.assetsList),t.xp6(4),t.lnq(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(14,m,1===a.currentPage)),t.xp6(3),t.Q6J("ngForOf",a.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(16,m,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.assetsList.length))}},dependencies:[g.mk,g.sg,g.O5,d.rH,p.Mq,p.hl,p.nW,f.R9,h.YE,h.nU,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F]})}return s})()}];let y=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(q),d.Bz]})}return s})();var k=n(6943);let x=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[g.ez,y,k.m]})}return s})()}}]);