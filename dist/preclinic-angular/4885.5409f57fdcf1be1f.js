"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[4885],{4885:(X,h,g)=>{g.r(h),g.d(h,{LeagueModule:()=>$});var l=g(6895),d=g(27),e=g(4650);let A=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-league"]],decls:1,vars:0,template:function(a,i){1&a&&e._UZ(0,"router-outlet")},dependencies:[d.lC]})}return n})();var v=g(6382),u=g(529),_=g(5862),y=g(866);let p=(()=>{class n{constructor(t,a){this.http=t,this.authSrv=a}listLeagues(t=1,a=""){let i=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(_.$g+"/leagues?page="+t+"&search="+a,{headers:i})}getLeague(t){let a=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(_.$g+"/leagues/"+t,{headers:a})}storeLeague(t){let a=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(_.$g+"/leagues",t,{headers:a})}editLeague(t,a){let i=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(_.$g+"/leagues/update/"+t,a,{headers:i})}deleteLeague(t){let a=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(_.$g+"/leagues/"+t,{headers:a})}static#e=this.\u0275fac=function(a){return new(a||n)(e.LFG(u.eN),e.LFG(y.e))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var f=g(3182),c=g(433);function C(n,o){if(1&n&&(e.TgZ(0,"div",27),e._UZ(1,"img",28),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("src",t.image_preview,e.LSH)}}function L(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",29)(2,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.save())}),e._uU(3,"GUARDAR"),e.qZA(),e.TgZ(4,"button",31),e._uU(5,"Cancel"),e.qZA()()()}}function x(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cleanMessage())}),e._UZ(6,"span",35),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.error_message," ")}}function U(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",36)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4),e.TgZ(5,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cleanMessage())}),e._UZ(6,"span",35),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.success_message," ")}}function q(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr",45)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"button",46),e.NdJ("click",function(){const i=e.CHM(t),s=i.index,r=i.$implicit,m=e.oxw(2);return e.KtG(m.deleteCategory(s,r))}),e._uU(6,"X"),e.qZA()()(),e.BQk()}if(2&n){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," ")}}function k(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.cleanMessage())}),e._UZ(6,"span",35),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(4),e.hij(" ",t.error_message_category," ")}}function w(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",36)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4),e.TgZ(5,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.cleanMessage())}),e._UZ(6,"span",35),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(4),e.hij(" ",t.success_message_category," ")}}function N(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",37)(2,"div",12)(3,"div",13)(4,"h4"),e._uU(5,"Categor\xedas"),e.qZA()()(),e.TgZ(6,"div",38)(7,"div",12)(8,"div",15)(9,"label"),e._uU(10,"Nombre "),e.TgZ(11,"span",16),e._uU(12,"*"),e.qZA()(),e.TgZ(13,"input",39),e.NdJ("ngModelChange",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.name_category=i)}),e.qZA()()(),e.TgZ(14,"div",12)(15,"div",15)(16,"label"),e._uU(17,"Descripci\xf3n "),e.qZA(),e.TgZ(18,"input",40),e.NdJ("ngModelChange",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.description_category=i)}),e.qZA()()()(),e.TgZ(19,"div",38)(20,"div",41)(21,"table",42)(22,"thead")(23,"tr")(24,"th"),e._uU(25,"Nombre"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,q,7,1,"ng-container",43),e.qZA()()()()(),e.TgZ(30,"div",3)(31,"div",12)(32,"div",44)(33,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addCategory())}),e._uU(34,"A\xd1ADIR"),e.qZA(),e.TgZ(35,"button",31),e._uU(36,"Cancel"),e.qZA()()(),e.YNc(37,k,7,1,"div",25),e.YNc(38,w,7,1,"div",25),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(13),e.Q6J("ngModel",t.name_category),e.xp6(5),e.Q6J("ngModel",t.description_category),e.xp6(11),e.Q6J("ngForOf",t.categories_list),e.xp6(8),e.Q6J("ngIf",""!=t.error_message_category),e.xp6(1),e.Q6J("ngIf",""!=t.success_message_category)}}let J=(()=>{class n{constructor(t,a){this.leagueSrv=t,this.categorySrv=a,this.routes=v._,this.name="",this.image_preview="assets/img/user-06.jpg",this.league_inserted_id="",this.success_message="",this.error_message="",this.name_category="",this.description_category="",this.categories_list=[],this.error_message_category="",this.success_message_category=""}ngOnInit(){}loadFile(t){t.target.files[0].type.indexOf("image")<0&&alert("Solamente poede ser archivo de tipo imagen"),this.fileAvatar=t.target.files[0];let a=new FileReader;a.readAsDataURL(this.fileAvatar),a.onloadend=()=>this.image_preview=a.result}cleanMessage(){this.error_message="",this.success_message="",this.error_message_category="",this.success_message_category=""}save(){if(""==this.name)return void(this.error_message="El campo nombre es obligatorio");let t=new FormData;t.append("name",this.name),t.append("imagen",this.fileAvatar),this.leagueSrv.storeLeague(t).subscribe(a=>{200!=a.message?this.error_message="Ha habido un error al guardar la liga. Consulte con su administrador.":(this.success_message="Liga guardado correctamente.",this.league_inserted_id=a.id_league)})}addCategory(){if(this.cleanMessage(),!this.name_category)return void(this.error_message="El nombre de la categor\xeda es obligatorio");let t={name:this.name_category,description:this.description_category,league_id:this.league_inserted_id};this.categorySrv.storeCategory(t).subscribe(a=>{200==a.message&&(this.categories_list.push(t),this.name_category="",this.description_category="",this.success_message_category="Categor\xeda a\xf1adida a la liga")})}deleteCategory(t,a){this.categorySrv.deleteCategory(a.id).subscribe(i=>{200==i.message&&(this.categories_list.splice(t,1),this.name_category="",this.description_category="",this.success_message_category="Categor\xeda eliminada de la liga")})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(p),e.Y36(f.H))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-league"]],decls:44,vars:7,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-6"],[1,"form-group","local-forms"],[1,"login-danger"],["name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","local-top-form"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file",1,"hide-input",3,"change"],["for","file",1,"upload"],["class","",4,"ngIf"],["class","col-12",4,"ngIf"],["class","col-md-12 my-4",4,"ngIf"],[4,"ngIf"],[1,""],["alt","","width","150px","height","150px",3,"src"],[1,"doctor-submit","text-end"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"click"],["type","submit",1,"btn","btn-primary","cancel-form"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"],[1,"row","my-4"],[1,"col-6"],["name","name_category","type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["name","description_category","type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],[1,"table-responsive"],[1,"table","mb-0"],[4,"ngFor","ngForOf"],[1,"doctor-submit","text-begin"],[1,"align-items-center"],[1,"btn","btn-danger","bt-sm",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Ligas "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"A\xf1adir Liga"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),e._uU(22,"Datos"),e.qZA()()(),e.TgZ(23,"div",14)(24,"div",15)(25,"label"),e._uU(26,"Nombre liga"),e.TgZ(27,"span",16),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(r){return i.name=r}),e.qZA()()(),e.TgZ(30,"div",14)(31,"div",18)(32,"label",19),e._uU(33,"Logo "),e.qZA(),e.TgZ(34,"div",20)(35,"input",21),e.NdJ("change",function(r){return i.loadFile(r)}),e.qZA(),e.TgZ(36,"label",22),e._uU(37,"Selecciona imagen"),e.qZA()()()(),e.YNc(38,C,2,1,"div",23),e.qZA(),e.TgZ(39,"div",3),e.YNc(40,L,6,0,"div",24),e.YNc(41,x,7,1,"div",25),e.YNc(42,U,7,1,"div",25),e.qZA(),e.YNc(43,N,39,5,"ng-container",26),e.qZA()()()()()()()),2&a&&(e.xp6(7),e.Q6J("routerLink",i.routes.leagueList),e.xp6(22),e.Q6J("ngModel",i.name),e.xp6(9),e.Q6J("ngIf",i.image_preview),e.xp6(2),e.Q6J("ngIf",""==i.league_inserted_id),e.xp6(1),e.Q6J("ngIf",""!=i.error_message),e.xp6(1),e.Q6J("ngIf",""!=i.success_message),e.xp6(1),e.Q6J("ngIf",""!=i.league_inserted_id))},dependencies:[l.sg,l.O5,d.rH,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F]})}return n})();var Z=g(7155),M=g(7945),b=g(6308);const F=["closebutton"],S=function(n){return["edit",n]};function E(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",57)(6,"div",58)(7,"a",59),e._UZ(8,"i",60),e.qZA(),e.TgZ(9,"div",61)(10,"a",62),e._UZ(11,"i",63),e._uU(12," Editar"),e.qZA(),e.TgZ(13,"a",64),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectLeague(s))}),e._UZ(14,"i",65),e._uU(15," Borrar"),e.qZA()()()()()}if(2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.created_at),e.xp6(6),e.Q6J("routerLink",e.VKq(3,S,t.id))}}function D(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",67),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.moveToPage(i.currentPage-2))}),e.TgZ(1,"a",68),e._uU(2," ... "),e.qZA()()}if(2&n){const t=e.oxw(2);e.Q6J("hidden",1===t.currentPage)}}function Q(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",67),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.moveToPage(i.currentPage+2))}),e.TgZ(1,"a",68),e._uU(2," ... "),e.qZA()()}if(2&n){const t=e.oxw(2);e.Q6J("hidden",t.currentPage>=t.pageNumberArray[t.pageNumberArray.length-2]||t.totalData<t.serialNumberArray[t.serialNumberArray.length-1])}}function I(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",44)(2,"a",46),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.moveToPage(s))}),e._uU(3),e.qZA()(),e.YNc(4,D,3,1,"li",66),e.YNc(5,Q,3,1,"li",66),e.BQk()}if(2&n){const t=o.$implicit,a=o.index,i=e.oxw();e.xp6(1),e.ekj("active",t===i.currentPage),e.Q6J("ngClass",i.pageNumberArray[i.currentPage-2]>t&&1!==t&&i.pageNumberArray.length>6||i.pageNumberArray[i.currentPage]<t&&1!==t&&i.pageNumberArray.length>6&&i.pageNumberArray.length!==t?"hide-page-no":"show-page-no"),e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",0===a&&i.pageNumberArray.length>6&&i.currentPage>2),e.xp6(1),e.Q6J("ngIf",a===i.pageNumberArray.length-2&&i.pageNumberArray.length>6)}}function P(n,o){if(1&n&&(e.TgZ(0,"h3"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("Est\xe1s seguro de borrar esta liga: ",t.league_selected.name,"?")}}const T=function(n){return{disabled:n}};function j(n,o){if(1&n&&(e.TgZ(0,"div",37),e._UZ(1,"img",38),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("src",t.image_preview,e.LSH)}}function H(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",39)(1,"div",40)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cleanMessage())}),e._UZ(6,"span",42),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.error_message," ")}}function G(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",39)(1,"div",43)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4),e.TgZ(5,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cleanMessage())}),e._UZ(6,"span",42),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.success_message," ")}}function B(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr",44)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"button",45),e.NdJ("click",function(){const i=e.CHM(t),s=i.index,r=i.$implicit,m=e.oxw();return e.KtG(m.deleteCategory(s,r))}),e._uU(6,"X"),e.qZA()()(),e.BQk()}if(2&n){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," ")}}function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",39)(1,"div",40)(2,"strong"),e._uU(3,"Error!"),e.qZA(),e._uU(4),e.TgZ(5,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cleanMessage())}),e._UZ(6,"span",42),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.error_message_category," ")}}function O(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",39)(1,"div",43)(2,"strong"),e._uU(3,"Bien!"),e.qZA(),e._uU(4),e.TgZ(5,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cleanMessage())}),e._UZ(6,"span",42),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.hij(" ",t.success_message_category," ")}}const z=[{path:"",component:A,children:[{path:"add-league",component:J},{path:"list-league",component:(()=>{class n{constructor(t,a){this.data=t,this.leagueSrv=a,this.leaguesList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=20,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.leagues_general=[],this.statusText=""}ngOnInit(){this.user=this.leagueSrv.authSrv.user,this.getTableData()}getTableData(t=1,a=""){this.leaguesList=[],this.serialNumberArray=[],this.leagueSrv.listLeagues(t,this.searchDataValue).subscribe(i=>{this.totalData=i.total,this.leaguesList=i.leagues,this.dataSource=new Z.by(this.leaguesList),this.calculateTotalPages(this.totalData,this.pageSize)})}hasPermission(t){return!(!this.user.role.includes("Super-Admin")&&!this.user.permissions.includes(t))}getTableDataGeneral(){new l.uU("en-US"),this.leaguesList=[],this.serialNumberArray=[],this.leagues_general.map((a,i)=>{const s=i+1;i>=this.skip&&s<=this.limit&&(this.leaguesList.push(a),this.serialNumberArray.push(s))}),this.dataSource=new Z.by(this.leaguesList),this.calculateTotalPages(this.totalData,this.pageSize)}searchData(t){this.dataSource.filter=t.trim().toLowerCase(),this.getTableData(this.currentPage,this.searchDataValue)}sortData(t){const a=this.leaguesList.slice();this.leaguesList=t.active&&""!==t.direction?a.sort((i,s)=>(i[t.active]<s[t.active]?-1:1)*("asc"===t.direction?1:-1)):a}getMoreData(t){"next"==t?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData(this.currentPage)):"previous"==t&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData(this.currentPage))}moveToPage(t){this.currentPage=t,this.skip=this.pageSelection[t-1].skip,this.limit=this.pageSelection[t-1].limit,t>this.currentPage?this.pageIndex=t-1:t<this.currentPage&&(this.pageIndex=t+1),this.getTableData(this.currentPage)}refresh(){this.pageSelection=[],this.searchDataValue="",this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(t,a){this.pageNumberArray=[],this.totalPages=t/a,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var i=1;i<=this.totalPages;i++){const s=a*i,r=s-a;this.pageNumberArray.push(i),this.pageSelection.push({skip:r,limit:s})}}selectLeague(t){this.league_selected=t}removeLeague(){this.leagueSrv.deleteLeague(this.league_selected.id).subscribe(t=>{if(200==t.message){let a=this.leaguesList.findIndex(i=>i.id==this.league_selected.id);-1!=a&&(this.leaguesList.splice(a,1),this.closebutton.nativeElement.click(),this.league_selected=null)}else console.log(t)})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(M.D),e.Y36(p))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-league"]],viewQuery:function(a,i){if(1&a&&e.Gf(F,5),2&a){let s;e.iGM(s=e.CRH())&&(i.closebutton=s.first)}},decls:79,vars:13,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],["routerLink","/roles/register","routerLinkActive","router-link-active",1,"btn","btn-primary","add-pluss","ms-2"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2",3,"click"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","joining_date"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["id","delete_staff_modal","role","dialog",1,"modal","fade","delete-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-body","text-center"],["src","assets/img/sent.png","alt","","width","50","height","46"],[4,"ngIf"],[1,"m-t-20"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-white","me-1"],["closebutton",""],["type","submit",1,"btn","btn-danger",3,"click"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],["href","#",1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","#","onclick","return false;","data-bs-toggle","modal","data-bs-target","#delete_staff_modal",1,"dropdown-item",3,"click"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Leagues "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"Listado"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"h3"),e._uU(22,"Listado de ligas"),e.qZA(),e.TgZ(23,"div",16)(24,"div",17)(25,"input",18),e.NdJ("ngModelChange",function(r){return i.searchDataValue=r})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),e.qZA(),e.TgZ(26,"a",19),e._UZ(27,"img",20),e.qZA()(),e.TgZ(28,"div",21)(29,"a",22),e._UZ(30,"img",23),e.qZA(),e.TgZ(31,"a",24),e.NdJ("click",function(){return i.refresh()}),e._UZ(32,"img",25),e.qZA()()()()(),e.TgZ(33,"div",26)(34,"a",27),e._UZ(35,"img",28),e.qZA(),e.TgZ(36,"a",27),e._UZ(37,"img",29),e.qZA(),e.TgZ(38,"a",27),e._UZ(39,"img",30),e.qZA(),e.TgZ(40,"a",31),e._UZ(41,"img",32),e.qZA()()()(),e.TgZ(42,"div",33)(43,"table",34),e.NdJ("matSortChange",function(r){return i.sortData(r)}),e.TgZ(44,"thead")(45,"tr")(46,"th",35),e._uU(47,"Nombre"),e.qZA(),e.TgZ(48,"th",36),e._uU(49,"Fecha Creaci\xf3n"),e.qZA(),e._UZ(50,"th"),e.qZA()(),e.TgZ(51,"tbody"),e.YNc(52,E,16,5,"tr",37),e.qZA()(),e.TgZ(53,"div",38)(54,"div",39)(55,"div",40),e._uU(56),e.qZA()(),e.TgZ(57,"div",41)(58,"div",42)(59,"ul",43)(60,"li",44)(61,"a",45),e.NdJ("click",function(){return i.getMoreData("previous")}),e._uU(62,"Previous"),e.qZA()(),e.YNc(63,I,6,6,"ng-container",37),e.TgZ(64,"li",44)(65,"a",46),e.NdJ("click",function(){return i.getMoreData("next")}),e._uU(66,"Next "),e.qZA()()()()()()()()()()()()(),e.TgZ(67,"div",47)(68,"div",48)(69,"div",49)(70,"div",50),e._UZ(71,"img",51),e.YNc(72,P,2,1,"h3",52),e.TgZ(73,"div",53)(74,"a",54,55),e._uU(76,"Cerrar"),e.qZA(),e.TgZ(77,"button",56),e.NdJ("click",function(){return i.removeLeague()}),e._uU(78,"Borrar"),e.qZA()()()()()()),2&a&&(e.xp6(25),e.Q6J("ngModel",i.searchDataValue),e.xp6(27),e.Q6J("ngForOf",i.leaguesList),e.xp6(4),e.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),e.xp6(4),e.Q6J("ngClass",e.VKq(9,T,1===i.currentPage)),e.xp6(3),e.Q6J("ngForOf",i.pageNumberArray),e.xp6(1),e.Q6J("ngClass",e.VKq(11,T,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.leaguesList.length)),e.xp6(8),e.Q6J("ngIf",i.league_selected))},dependencies:[l.mk,l.sg,l.O5,d.rH,d.Od,c.Fj,c.JJ,c.On,b.YE,b.nU]})}return n})()},{path:"list-league/edit/:id",component:(()=>{class n{constructor(t,a,i){this.leagueSrv=t,this.activateRoute=a,this.categorySrv=i,this.routes=v._,this.name="",this.image_preview="assets/img/user-06.jpg",this.id_league=0,this.success_message="",this.error_message="",this.name_category="",this.description_category="",this.categories_list=[],this.error_message_category="",this.success_message_category=""}ngOnInit(){this.activateRoute.params.subscribe(t=>{this.id_league=t.id,this.getLeagueSelected()})}getLeagueSelected(){this.leagueSrv.getLeague(this.id_league).subscribe(t=>{console.log("League->",t),this.league_selected=t.league,this.name=this.league_selected.name,this.image_preview=this.league_selected.avatar,this.categories_list=this.league_selected.categories})}loadFile(t){t.target.files[0].type.indexOf("image")<0&&alert("Solamente poede ser archivo de tipo imagen"),this.fileAvatar=t.target.files[0];let a=new FileReader;a.readAsDataURL(this.fileAvatar),a.onloadend=()=>this.image_preview=a.result}cleanMessage(){this.error_message="",this.success_message=""}save(){if(""==this.name)return void(this.error_message="El campo nombre es obligatorio");let t=new FormData;t.append("name",this.name),t.append("imagen",this.fileAvatar),this.leagueSrv.editLeague(this.id_league,t).subscribe(a=>{200!=a.message?this.error_message="Ha habido un error al guardar la liga. Consulte con su administrador.":this.success_message="Liga guardado correctamente."})}addCategory(){if(this.cleanMessage(),!this.name_category)return void(this.error_message="El nombre de la categor\xeda es obligatorio");let t={name:this.name_category,description:this.description_category,league_id:this.id_league};this.categorySrv.storeCategory(t).subscribe(a=>{200==a.message&&(this.categories_list.push(t),this.name_category="",this.description_category="",this.success_message_category="Categor\xeda a\xf1adida a la liga")})}deleteCategory(t,a){this.categorySrv.deleteCategory(a.id).subscribe(i=>{200==i.message&&(this.categories_list.splice(t,1),this.name_category="",this.description_category="",this.success_message_category="Categor\xeda eliminada de la liga")})}cancelCategory(){this.name_category="",this.description_category=""}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(p),e.Y36(d.gz),e.Y36(f.H))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-league"]],decls:86,vars:10,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-6","col-xl-6"],[1,"form-group","local-forms"],[1,"login-danger"],["name","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","local-top-form"],[1,"local-top"],[1,"settings-btn","upload-files-avator"],["type","file","accept","image/*","name","image","id","file",1,"hide-input",3,"change"],["for","file",1,"upload"],["class","",4,"ngIf"],[1,"doctor-submit","text-end"],["type","button",1,"btn","btn-primary","submit-form","me-2",3,"click"],["type","submit",1,"btn","btn-primary","cancel-form"],["class","col-md-12 my-4",4,"ngIf"],[1,"row","my-4"],[1,"col-6"],["name","name_category","type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["name","description_category","type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],[1,"table-responsive"],[1,"table","mb-0"],[4,"ngFor","ngForOf"],[1,"doctor-submit","text-begin"],["type","submit",1,"btn","btn-primary","cancel-form",3,"click"],[1,""],["alt","","width","150px","height","150px",3,"src"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"],[1,"align-items-center"],[1,"btn","btn-danger","bt-sm",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),e._uU(8,"Ligas "),e.qZA()(),e.TgZ(9,"li",6),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",9),e._uU(12,"Editar Liga"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",4)(15,"div",10)(16,"div",11)(17,"form")(18,"div",3)(19,"div",12)(20,"div",13)(21,"h4"),e._uU(22,"Datos"),e.qZA()()(),e.TgZ(23,"div",14)(24,"div",15)(25,"label"),e._uU(26,"Nombre liga"),e.TgZ(27,"span",16),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(r){return i.name=r}),e.qZA()()(),e.TgZ(30,"div",14)(31,"div",18)(32,"label",19),e._uU(33,"Logo "),e.qZA(),e.TgZ(34,"div",20)(35,"input",21),e.NdJ("change",function(r){return i.loadFile(r)}),e.qZA(),e.TgZ(36,"label",22),e._uU(37,"Selecciona imagen"),e.qZA()()()(),e.YNc(38,j,2,1,"div",23),e.TgZ(39,"div",12)(40,"div",24)(41,"button",25),e.NdJ("click",function(){return i.save()}),e._uU(42,"GUARDAR"),e.qZA(),e.TgZ(43,"button",26),e._uU(44,"Cancel"),e.qZA()()(),e.YNc(45,H,7,1,"div",27),e.YNc(46,G,7,1,"div",27),e.qZA(),e.ynx(47),e.TgZ(48,"div",28)(49,"div",12)(50,"div",13)(51,"h4"),e._uU(52,"Categor\xedas"),e.qZA()()(),e.TgZ(53,"div",29)(54,"div",12)(55,"div",15)(56,"label"),e._uU(57,"Nombre "),e.TgZ(58,"span",16),e._uU(59,"*"),e.qZA()(),e.TgZ(60,"input",30),e.NdJ("ngModelChange",function(r){return i.name_category=r}),e.qZA()()(),e.TgZ(61,"div",12)(62,"div",15)(63,"label"),e._uU(64,"Descripci\xf3n "),e.qZA(),e.TgZ(65,"input",31),e.NdJ("ngModelChange",function(r){return i.description_category=r}),e.qZA()()()(),e.TgZ(66,"div",29)(67,"div",32)(68,"table",33)(69,"thead")(70,"tr")(71,"th"),e._uU(72,"Nombre"),e.qZA(),e.TgZ(73,"th"),e._uU(74,"Action"),e.qZA()()(),e.TgZ(75,"tbody"),e.YNc(76,B,7,1,"ng-container",34),e.qZA()()()()(),e.TgZ(77,"div",3)(78,"div",12)(79,"div",35)(80,"button",25),e.NdJ("click",function(){return i.addCategory()}),e._uU(81,"A\xd1ADIR"),e.qZA(),e.TgZ(82,"button",36),e.NdJ("click",function(){return i.cancelCategory()}),e._uU(83,"Cancel"),e.qZA()()(),e.YNc(84,K,7,1,"div",27),e.YNc(85,O,7,1,"div",27),e.qZA(),e.BQk(),e.qZA()()()()()()()),2&a&&(e.xp6(7),e.Q6J("routerLink",i.routes.leagueList),e.xp6(22),e.Q6J("ngModel",i.name),e.xp6(9),e.Q6J("ngIf",i.image_preview),e.xp6(7),e.Q6J("ngIf",""!=i.error_message),e.xp6(1),e.Q6J("ngIf",""!=i.success_message),e.xp6(14),e.Q6J("ngModel",i.name_category),e.xp6(5),e.Q6J("ngModel",i.description_category),e.xp6(11),e.Q6J("ngForOf",i.categories_list),e.xp6(8),e.Q6J("ngIf",""!=i.error_message_category),e.xp6(1),e.Q6J("ngIf",""!=i.success_message_category))},dependencies:[l.sg,l.O5,d.rH,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F]})}return n})()}]}];let R=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(z),d.Bz]})}return n})();var V=g(6943);let $=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[l.ez,R,c.u5,c.UX,u.JF,d.Bz,V.m]})}return n})()}}]);