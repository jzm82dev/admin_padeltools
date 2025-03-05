"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[5610],{95610:(R,u,c)=>{c.r(u),c.d(u,{PlayerModule:()=>K});var g=c(36895),p=c(30027),e=c(94650);let y=(()=>{const r=class{};let n=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-player"]],decls:1,vars:0,template:function(a,i){1&a&&e._UZ(0,"router-outlet")},dependencies:[p.lC]}),n})();var h=c(46382),m=c(54739),d=c(24006),_=c(84385),f=c(3238);function T(n,r){if(1&n&&(e.TgZ(0,"mat-option",35),e._uU(1),e.qZA()),2&n){const s=r.$implicit;e.Q6J("value",s.id),e.xp6(1),e.hij(" ",s.name," ")}}function A(n,r){if(1&n&&(e.TgZ(0,"div",36),e._UZ(1,"img",37),e.qZA()),2&n){const s=e.oxw();e.xp6(1),e.Q6J("src",s.image_preview,e.LSH)}}function C(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"div",12)(1,"div",38)(2,"button",39),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.save())}),e._uU(3,"GUARDAR"),e.qZA(),e.TgZ(4,"button",40),e._uU(5,"Cancel"),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(4),e.Q6J("routerLink",s.routes.playerList)}}function x(n,r){if(1&n&&(e.TgZ(0,"div",12)(1,"div",38)(2,"button",40),e._uU(3,"Listado"),e.qZA()()()),2&n){const s=e.oxw();e.xp6(2),e.Q6J("routerLink",s.routes.playerList)}}function U(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"div",41)(1,"div",42)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",43),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(6,"span",44),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(4),e.hij(" ",s.error_message," ")}}function M(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"div",41)(1,"div",45)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4),e.TgZ(5,"button",43),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(6,"span",44),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(4),e.hij(" ",s.success_message," ")}}const J=function(){return{standalone:!0}};let P=(()=>{const r=class{constructor(t){this.playerSrv=t,this.routes=h._,this.name="",this.surname="",this.mobile="",this.email="",this.address="",this.club_id="",this.image_preview="assets/img/user-06.jpg",this.success_message="",this.error_message="",this.clubs_list=[],this.save_ok=!1}ngOnInit(){this.playerSrv.config().subscribe(t=>{this.clubs_list=t.clubs})}cleanMessage(){this.error_message="",this.success_message=""}loadFile(t){t.target.files[0].type.indexOf("image")<0&&alert("Solamente poede ser archivo de tipo imagen"),this.fileAvatar=t.target.files[0];let a=new FileReader;a.readAsDataURL(this.fileAvatar),a.onloadend=()=>this.image_preview=a.result}save(){if(this.cleanMessage(),""==this.name||""==this.surname||""==this.club_id)return void(this.error_message="Los campos name, apellido o apodo y club son obligatorios");let t=new FormData;t.append("name",this.name),t.append("surname",this.surname),t.append("mobile",this.mobile),t.append("email",this.email),t.append("address",this.address),t.append("imagen",this.fileAvatar),t.append("club_id",this.club_id),this.playerSrv.storePlayer(t).subscribe(a=>{200!=a.message?this.error_message=a.message_text:(this.save_ok=!0,this.name="",this.surname="",this.mobile="",this.email="",this.address="",this.fileAvatar="",this.club_id="",this.success_message="Jugador guardado correctamente.")})}};let n=r;return r.\u0275fac=function(a){return new(a||r)(e.Y36(m.l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-player"]],decls:73,vars:15,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-6"],[1,"form-group","local-forms"],[1,"login-danger"],["name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","surname","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-4","col-xl-4"],["name","mobile","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-6","col-xl-4"],["name","email","type","email",1,"form-control",3,"ngModel","ngModelChange"],["placeholder","Selecciona club",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12"],["name","address","rows","3","cols","30",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","local-top-form"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file",1,"hide-input",3,"change"],["for","file",1,"upload"],["class","",4,"ngIf"],["class","col-12",4,"ngIf"],["class","col-md-12 my-4",4,"ngIf"],[3,"value"],[1,""],["alt","","width","150px","height","150px",3,"src"],[1,"doctor-submit","text-end"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"click"],["type","submit",1,"btn","btn-primary","cancel-form",3,"routerLink"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Jugadores "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"A\xf1adir Jugador"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),e._uU(22,"Datos"),e.qZA()()(),e.TgZ(23,"div",14)(24,"div",15)(25,"label"),e._uU(26,"Nombre"),e.TgZ(27,"span",16),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(o){return i.name=o}),e.qZA()()(),e.TgZ(30,"div",14)(31,"div",15)(32,"label"),e._uU(33,"Apellidos/ Apodo"),e.TgZ(34,"span",16),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"input",18),e.NdJ("ngModelChange",function(o){return i.surname=o}),e.qZA()()(),e.TgZ(37,"div",19)(38,"div",15)(39,"label"),e._uU(40,"Tel\xe9fono "),e.qZA(),e.TgZ(41,"input",20),e.NdJ("ngModelChange",function(o){return i.mobile=o}),e.qZA()()(),e.TgZ(42,"div",21)(43,"div",15)(44,"label"),e._uU(45,"Email "),e.qZA(),e.TgZ(46,"input",22),e.NdJ("ngModelChange",function(o){return i.email=o}),e.qZA()()(),e.TgZ(47,"div",21)(48,"div",15)(49,"label"),e._uU(50,"Club "),e.TgZ(51,"span",16),e._uU(52,"*"),e.qZA()(),e.TgZ(53,"mat-select",23),e.NdJ("ngModelChange",function(o){return i.club_id=o}),e.YNc(54,T,2,2,"mat-option",24),e.qZA()()(),e.TgZ(55,"div",25)(56,"div",15)(57,"label"),e._uU(58,"Direcci\xf3n "),e.qZA(),e.TgZ(59,"textarea",26),e.NdJ("ngModelChange",function(o){return i.address=o}),e.qZA()()(),e.TgZ(60,"div",14)(61,"div",27)(62,"label",28),e._uU(63,"Foto "),e.qZA(),e.TgZ(64,"div",29)(65,"input",30),e.NdJ("change",function(o){return i.loadFile(o)}),e.qZA(),e.TgZ(66,"label",31),e._uU(67,"Selecciona imagen"),e.qZA()()()(),e.YNc(68,A,2,1,"div",32),e.YNc(69,C,6,1,"div",33),e.YNc(70,x,4,1,"div",33),e.YNc(71,U,7,1,"div",34),e.YNc(72,M,7,1,"div",34),e.qZA()()()()()()()()),2&a&&(e.xp6(7),e.Q6J("routerLink",i.routes.staffList),e.xp6(22),e.Q6J("ngModel",i.name),e.xp6(7),e.Q6J("ngModel",i.surname),e.xp6(5),e.Q6J("ngModel",i.mobile),e.xp6(5),e.Q6J("ngModel",i.email),e.xp6(7),e.Q6J("ngModel",i.club_id)("ngModelOptions",e.DdM(14,J)),e.xp6(1),e.Q6J("ngForOf",i.clubs_list),e.xp6(5),e.Q6J("ngModel",i.address),e.xp6(9),e.Q6J("ngIf",i.image_preview),e.xp6(1),e.Q6J("ngIf",!i.save_ok),e.xp6(1),e.Q6J("ngIf",i.save_ok),e.xp6(1),e.Q6J("ngIf",""!=i.error_message),e.xp6(1),e.Q6J("ngIf",""!=i.success_message))},dependencies:[g.sg,g.O5,p.rH,d._Y,d.Fj,d.JJ,d.JL,d.On,d.F,_.gD,f.ey]}),n})();var v=c(30671),q=c(74742),b=c(96308);const N=["closebutton"],k=function(n){return["edit",n]};function w(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td",60)(12,"div",61)(13,"a",62),e._UZ(14,"i",63),e.qZA(),e.TgZ(15,"div",64)(16,"a",65),e._UZ(17,"i",66),e._uU(18," Editar"),e.qZA(),e.TgZ(19,"a",67),e.NdJ("click",function(){const i=e.CHM(s).$implicit,l=e.oxw();return e.KtG(l.selectClub(i))}),e._UZ(20,"i",68),e._uU(21," Borrar"),e.qZA()()()()()}if(2&n){const s=r.$implicit;e.xp6(2),e.Oqu(s.name),e.xp6(2),e.Oqu(s.surname),e.xp6(2),e.Oqu(s.club.name),e.xp6(2),e.Oqu(s.mobile),e.xp6(2),e.Oqu(s.created_at),e.xp6(6),e.Q6J("routerLink",e.VKq(6,k,s.id))}}function L(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"li",70),e.NdJ("click",function(){e.CHM(s);const a=e.oxw(2);return e.KtG(a.moveToPage(a.currentPage-2))}),e.TgZ(1,"a",71),e._uU(2," ... "),e.qZA()()}if(2&n){const s=e.oxw(2);e.Q6J("hidden",1===s.currentPage)}}function F(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"li",70),e.NdJ("click",function(){e.CHM(s);const a=e.oxw(2);return e.KtG(a.moveToPage(a.currentPage+2))}),e.TgZ(1,"a",71),e._uU(2," ... "),e.qZA()()}if(2&n){const s=e.oxw(2);e.Q6J("hidden",s.currentPage>=s.pageNumberArray[s.pageNumberArray.length-2]||s.totalData<s.serialNumberArray[s.serialNumberArray.length-1])}}function S(n,r){if(1&n){const s=e.EpF();e.ynx(0),e.TgZ(1,"li",47)(2,"a",49),e.NdJ("click",function(){const i=e.CHM(s).$implicit,l=e.oxw();return e.KtG(l.moveToPage(i))}),e._uU(3),e.qZA()(),e.YNc(4,L,3,1,"li",69),e.YNc(5,F,3,1,"li",69),e.BQk()}if(2&n){const s=r.$implicit,t=r.index,a=e.oxw();e.xp6(1),e.ekj("active",s===a.currentPage),e.Q6J("ngClass",a.pageNumberArray[a.currentPage-2]>s&&1!==s&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<s&&1!==s&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==s?"hide-page-no":"show-page-no"),e.xp6(2),e.hij(" ",s," "),e.xp6(1),e.Q6J("ngIf",0===t&&a.pageNumberArray.length>6&&a.currentPage>2),e.xp6(1),e.Q6J("ngIf",t===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}function D(n,r){if(1&n&&(e.TgZ(0,"h3"),e._uU(1),e.qZA()),2&n){const s=e.oxw();e.xp6(1),e.AsE("Are you sure want to delete this patient: ",s.player_selected.name," ",s.player_selected.surname,"?")}}const Z=function(n){return{disabled:n}};function E(n,r){if(1&n&&(e.TgZ(0,"mat-option",37),e._uU(1),e.qZA()),2&n){const s=r.$implicit;e.Q6J("value",s.id),e.xp6(1),e.hij(" ",s.name," ")}}function I(n,r){if(1&n&&(e.TgZ(0,"div",38),e._UZ(1,"img",39),e.qZA()),2&n){const s=e.oxw();e.xp6(1),e.Q6J("src",s.image_preview,e.LSH)}}function O(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"div",40)(1,"div",41)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",42),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(6,"span",43),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(4),e.hij(" ",s.error_message," ")}}function j(n,r){if(1&n){const s=e.EpF();e.TgZ(0,"div",40)(1,"div",44)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4),e.TgZ(5,"button",42),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.cleanMessage())}),e._UZ(6,"span",43),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(4),e.hij(" ",s.success_message," ")}}const Y=function(){return{standalone:!0}},H=[{path:"",component:y,children:[{path:"add-player",component:P},{path:"list-player",component:(()=>{const r=class{constructor(t,a){this.data=t,this.playerSrv=a,this.playersList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=20,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.players_general=[],this.statusText=""}ngOnInit(){this.user=this.playerSrv.authSrv.user,this.getTableData()}getTableData(t=1,a=""){this.playersList=[],this.serialNumberArray=[],this.playerSrv.listPlayers(t,this.searchDataValue).subscribe(i=>{console.log(i),this.totalData=i.total,this.playersList=i.players.data,this.dataSource=new v.by(this.playersList),this.calculateTotalPages(this.totalData,this.pageSize)})}hasPermission(t){return!(!this.user.role.includes("Super-Admin")&&!this.user.permissions.includes(t))}getTableDataGeneral(){new g.uU("en-US"),this.playersList=[],this.serialNumberArray=[],this.players_general.map((a,i)=>{const l=i+1;i>=this.skip&&l<=this.limit&&(this.playersList.push(a),this.serialNumberArray.push(l))}),this.dataSource=new v.by(this.playersList),this.calculateTotalPages(this.totalData,this.pageSize)}searchData(t){this.dataSource.filter=t.trim().toLowerCase(),this.getTableData(this.currentPage,this.searchDataValue)}sortData(t){const a=this.playersList.slice();this.playersList=t.active&&""!==t.direction?a.sort((i,l)=>(i[t.active]<l[t.active]?-1:1)*("asc"===t.direction?1:-1)):a}getMoreData(t){"next"==t?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData(this.currentPage)):"previous"==t&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData(this.currentPage))}moveToPage(t){this.currentPage=t,this.skip=this.pageSelection[t-1].skip,this.limit=this.pageSelection[t-1].limit,t>this.currentPage?this.pageIndex=t-1:t<this.currentPage&&(this.pageIndex=t+1),this.getTableData(this.currentPage)}refresh(){this.pageSelection=[],this.searchDataValue="",this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(t,a){this.pageNumberArray=[],this.totalPages=t/a,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var i=1;i<=this.totalPages;i++){const l=a*i,o=l-a;this.pageNumberArray.push(i),this.pageSelection.push({skip:o,limit:l})}}selectClub(t){this.player_selected=t}removeClub(){this.playerSrv.deletePlayer(this.player_selected.id).subscribe(t=>{if(200==t.message){let a=this.playersList.findIndex(i=>i.id==this.player_selected.id);-1!=a&&(this.playersList.splice(a,1),this.closebutton.nativeElement.click(),this.player_selected=null)}else console.log(t)})}};let n=r;return r.\u0275fac=function(a){return new(a||r)(e.Y36(q.D),e.Y36(m.l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-list-player"]],viewQuery:function(a,i){if(1&a&&e.Gf(N,5),2&a){let l;e.iGM(l=e.CRH())&&(i.closebutton=l.first)}},decls:85,vars:13,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],["routerLink","/roles/register","routerLinkActive","router-link-active",1,"btn","btn-primary","add-pluss","ms-2"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2",3,"click"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","surname"],["mat-sort-header","club"],["mat-sort-header","mobile"],["mat-sort-header","joining_date"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["id","delete_staff_modal","role","dialog",1,"modal","fade","delete-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-body","text-center"],["src","assets/img/sent.png","alt","","width","50","height","46"],[4,"ngIf"],[1,"m-t-20"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-white","me-1"],["closebutton",""],["type","submit",1,"btn","btn-danger",3,"click"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],["href","#",1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","#","onclick","return false;","data-bs-toggle","modal","data-bs-target","#delete_staff_modal",1,"dropdown-item",3,"click"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Jugadores "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"Listado"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),e._uU(22,"Listado de clubs"),e.qZA(),e.TgZ(23,"div",16)(24,"div",17)(25,"input",18),e.NdJ("ngModelChange",function(o){return i.searchDataValue=o})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),e.qZA(),e.TgZ(26,"a",19),e._UZ(27,"img",20),e.qZA()(),e.TgZ(28,"div",21)(29,"a",22),e._UZ(30,"img",23),e.qZA(),e.TgZ(31,"a",24),e.NdJ("click",function(){return i.refresh()}),e._UZ(32,"img",25),e.qZA()()()()(),e.TgZ(33,"div",26)(34,"a",27),e._UZ(35,"img",28),e.qZA(),e.TgZ(36,"a",27),e._UZ(37,"img",29),e.qZA(),e.TgZ(38,"a",27),e._UZ(39,"img",30),e.qZA(),e.TgZ(40,"a",31),e._UZ(41,"img",32),e.qZA()()()(),e.TgZ(42,"div",33)(43,"table",34),e.NdJ("matSortChange",function(o){return i.sortData(o)}),e.TgZ(44,"thead")(45,"tr")(46,"th",35),e._uU(47,"Nombre"),e.qZA(),e.TgZ(48,"th",36),e._uU(49,"Apellidos"),e.qZA(),e.TgZ(50,"th",37),e._uU(51,"Club"),e.qZA(),e.TgZ(52,"th",38),e._uU(53,"Tel\xe9fono"),e.qZA(),e.TgZ(54,"th",39),e._uU(55,"Fecha Creaci\xf3n"),e.qZA(),e._UZ(56,"th"),e.qZA()(),e.TgZ(57,"tbody"),e.YNc(58,w,22,8,"tr",40),e.qZA()(),e.TgZ(59,"div",41)(60,"div",42)(61,"div",43),e._uU(62),e.qZA()(),e.TgZ(63,"div",44)(64,"div",45)(65,"ul",46)(66,"li",47)(67,"a",48),e.NdJ("click",function(){return i.getMoreData("previous")}),e._uU(68,"Previous"),e.qZA()(),e.YNc(69,S,6,6,"ng-container",40),e.TgZ(70,"li",47)(71,"a",49),e.NdJ("click",function(){return i.getMoreData("next")}),e._uU(72,"Next "),e.qZA()()()()()()()()()()()()(),e.TgZ(73,"div",50)(74,"div",51)(75,"div",52)(76,"div",53),e._UZ(77,"img",54),e.YNc(78,D,2,2,"h3",55),e.TgZ(79,"div",56)(80,"a",57,58),e._uU(82,"Close"),e.qZA(),e.TgZ(83,"button",59),e.NdJ("click",function(){return i.removeClub()}),e._uU(84,"Delete"),e.qZA()()()()()()),2&a&&(e.xp6(25),e.Q6J("ngModel",i.searchDataValue),e.xp6(33),e.Q6J("ngForOf",i.playersList),e.xp6(4),e.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),e.xp6(4),e.Q6J("ngClass",e.VKq(9,Z,1===i.currentPage)),e.xp6(3),e.Q6J("ngForOf",i.pageNumberArray),e.xp6(1),e.Q6J("ngClass",e.VKq(11,Z,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.playersList.length)),e.xp6(8),e.Q6J("ngIf",i.player_selected))},dependencies:[g.mk,g.sg,g.O5,p.rH,p.Od,d.Fj,d.JJ,d.On,b.YE,b.nU]}),n})()},{path:"list-player/edit/:id",component:(()=>{const r=class{constructor(t,a){this.playerSrv=t,this.activateRoute=a,this.routes=h._,this.name="",this.surname="",this.mobile="",this.email="",this.address="",this.club_id="",this.image_preview="assets/img/user-06.jpg",this.success_message="",this.error_message="",this.clubs_list=[],this.id_player=""}ngOnInit(){this.activateRoute.params.subscribe(t=>{this.id_player=t.id,this.getPlayerSelected()}),this.playerSrv.config().subscribe(t=>{this.clubs_list=t.clubs})}getPlayerSelected(){this.playerSrv.getPlayer(this.id_player).subscribe(t=>{this.player_selected=t.player,this.name=this.player_selected.name,this.surname=this.player_selected.surname,this.mobile=this.player_selected.mobile?this.player_selected.mobile:"",this.email=this.player_selected.email?this.player_selected.email:"",this.address=this.player_selected.address?this.player_selected.address:"",this.club_id=this.player_selected.club.id,this.image_preview=this.player_selected.avatar})}loadFile(t){t.target.files[0].type.indexOf("image")<0&&alert("Solamente poede ser archivo de tipo imagen"),this.fileAvatar=t.target.files[0];let a=new FileReader;a.readAsDataURL(this.fileAvatar),a.onloadend=()=>this.image_preview=a.result}cleanMessage(){this.error_message="",this.success_message=""}save(){if(this.cleanMessage(),""==this.name||""==this.club_id||""==this.surname)return void(this.error_message="Los campos name, apellido o apodo y club son obligatorios");let t=new FormData;t.append("name",this.name),t.append("surname",this.surname),t.append("mobile",this.mobile),t.append("email",this.email),t.append("address",this.address),t.append("imagen",this.fileAvatar),t.append("club_id",this.club_id),this.playerSrv.editPlayer(this.id_player,t).subscribe(a=>{200!=a.message?this.error_message=a.message_text:this.success_message="Jugador actualizado correctamente."})}};let n=r;return r.\u0275fac=function(a){return new(a||r)(e.Y36(m.l),e.Y36(p.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit-player"]],decls:77,vars:14,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-6"],[1,"form-group","local-forms"],[1,"login-danger"],["name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","surname","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-4","col-xl-4"],["name","mobile","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-md-6","col-xl-4"],["name","email","type","email",1,"form-control",3,"ngModel","ngModelChange"],["placeholder","Selecciona club",1,"form-control","select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-12","col-sm-12"],["name","address","rows","3","cols","30",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","local-top-form"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file",1,"hide-input",3,"change"],["for","file",1,"upload"],["class","",4,"ngIf"],[1,"doctor-submit","text-end"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"click"],["type","submit",1,"btn","btn-primary","cancel-form",3,"routerLink"],["class","col-md-12 my-4",4,"ngIf"],[3,"value"],[1,""],["alt","","width","150px","height","150px",3,"src"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Jugadores "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"Editar Jugador"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),e._uU(22,"Datos"),e.qZA()()(),e.TgZ(23,"div",14)(24,"div",15)(25,"label"),e._uU(26,"Nombre"),e.TgZ(27,"span",16),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(o){return i.name=o}),e.qZA()()(),e.TgZ(30,"div",14)(31,"div",15)(32,"label"),e._uU(33,"Apellidos/ Apodo"),e.TgZ(34,"span",16),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"input",18),e.NdJ("ngModelChange",function(o){return i.surname=o}),e.qZA()()(),e.TgZ(37,"div",19)(38,"div",15)(39,"label"),e._uU(40,"Tel\xe9fono "),e.qZA(),e.TgZ(41,"input",20),e.NdJ("ngModelChange",function(o){return i.mobile=o}),e.qZA()()(),e.TgZ(42,"div",21)(43,"div",15)(44,"label"),e._uU(45,"Email "),e.qZA(),e.TgZ(46,"input",22),e.NdJ("ngModelChange",function(o){return i.email=o}),e.qZA()()(),e.TgZ(47,"div",21)(48,"div",15)(49,"label"),e._uU(50,"Club "),e.TgZ(51,"span",16),e._uU(52,"*"),e.qZA()(),e.TgZ(53,"mat-select",23),e.NdJ("ngModelChange",function(o){return i.club_id=o}),e.YNc(54,E,2,2,"mat-option",24),e.qZA()()(),e.TgZ(55,"div",25)(56,"div",15)(57,"label"),e._uU(58,"Direcci\xf3n "),e.qZA(),e.TgZ(59,"textarea",26),e.NdJ("ngModelChange",function(o){return i.address=o}),e.qZA()()(),e.TgZ(60,"div",14)(61,"div",27)(62,"label",28),e._uU(63,"Foto "),e.qZA(),e.TgZ(64,"div",29)(65,"input",30),e.NdJ("change",function(o){return i.loadFile(o)}),e.qZA(),e.TgZ(66,"label",31),e._uU(67,"Selecciona imagen"),e.qZA()()()(),e.YNc(68,I,2,1,"div",32),e.TgZ(69,"div",12)(70,"div",33)(71,"button",34),e.NdJ("click",function(){return i.save()}),e._uU(72,"GUARDAR"),e.qZA(),e.TgZ(73,"button",35),e._uU(74,"Volver"),e.qZA()()(),e.YNc(75,O,7,1,"div",36),e.YNc(76,j,7,1,"div",36),e.qZA()()()()()()()()),2&a&&(e.xp6(7),e.Q6J("routerLink",i.routes.playerList),e.xp6(22),e.Q6J("ngModel",i.name),e.xp6(7),e.Q6J("ngModel",i.surname),e.xp6(5),e.Q6J("ngModel",i.mobile),e.xp6(5),e.Q6J("ngModel",i.email),e.xp6(7),e.Q6J("ngModel",i.club_id)("ngModelOptions",e.DdM(13,Y)),e.xp6(1),e.Q6J("ngForOf",i.clubs_list),e.xp6(5),e.Q6J("ngModel",i.address),e.xp6(9),e.Q6J("ngIf",i.image_preview),e.xp6(5),e.Q6J("routerLink",i.routes.playerList),e.xp6(2),e.Q6J("ngIf",""!=i.error_message),e.xp6(1),e.Q6J("ngIf",""!=i.success_message))},dependencies:[g.sg,g.O5,p.rH,d._Y,d.Fj,d.JJ,d.JL,d.On,d.F,_.gD,f.ey]}),n})()}]}];let G=(()=>{const r=class{};let n=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(H),p.Bz]}),n})();var z=c(80529),V=c(25108);let K=(()=>{const r=class{};let n=r;return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.ez,G,d.u5,d.UX,z.JF,p.Bz,V.m]}),n})()}}]);