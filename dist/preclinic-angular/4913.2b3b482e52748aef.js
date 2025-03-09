"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[4913],{87240:(b,v,d)=>{d.d(v,{Z:()=>T});var h=d(80529),c=d(75862),t=d(94650),Z=d(40866);let T=(()=>{const p=class{constructor(l,r){this.http=l,this.authSrv=r}listTournaments(l=1,r=""){let u=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(c.$g+"/tournaments?page="+l+"&search="+r,{headers:u})}listRoles(){let l=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(c.$g+"/staffs/roles",{headers:l})}storeTournament(l){console.log(l);let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/tournaments",l,{headers:r})}deleteTournament(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(c.$g+"/tournaments/"+l,{headers:r})}getTournament(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(c.$g+"/tournaments/"+l,{headers:r})}editTournament(l,r){let u=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/tournaments/update/"+l,r,{headers:u})}getDraw(l,r){let u=new h.WM({Authorization:"Bearer "+this.authSrv.token}),m=c.$g+"/tournaments/get-draw/"+l+"/"+r;return console.log(m),this.http.get(m,{headers:u})}getMatch(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(c.$g+"/tournaments/get-match-data/"+l,{headers:r})}saveResult(l,r){let u=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/tournaments/save-result/"+l,r,{headers:u})}saveResultPickleball(l,r){let u=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/tournaments/save-result-pickleball/"+l,r,{headers:u})}updateScheduleMatch(l,r){let u=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/tournaments/update-schedule-match/"+l,r,{headers:u})}saveSchedule(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/tournament-schedule",l,{headers:r})}deleteSchedule(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(c.$g+"/tournament-schedule/"+l,{headers:r})}saveScheduleCouple(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(c.$g+"/couple-tournament-schedule",l,{headers:r})}deleteScheduleCouple(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(c.$g+"/couple-tournament-schedule/"+l,{headers:r})}getClasification(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(c.$g+"/tournaments/clasification/"+l,{headers:r})}getMatchsSimpleLeague(l){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(c.$g+"/tournaments/get-matches-simple-league/"+l,{headers:r})}};let f=p;return p.\u0275fac=function(r){return new(r||p)(t.LFG(h.eN),t.LFG(Z.e))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),f})()},44913:(b,v,d)=>{d.r(v),d.d(v,{TournamentModule:()=>I});var h=d(36895),c=d(30027),t=d(94650);let Z=(()=>{const i=class{};let n=i;return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tournament"]],decls:1,vars:0,template:function(s,e){1&s&&t._UZ(0,"router-outlet")},dependencies:[c.lC]}),n})();var T=d(30671),f=d(46382),p=d(74742),L=d(87240),l=d(42466),r=d(24006),u=d(96308);const m=["closebutton"],k=function(n){return["edit",n]};function x(n,i){if(1&n&&(t.TgZ(0,"a",68),t._UZ(1,"i",69),t._uU(2),t.ALo(3,"translate"),t.qZA()),2&n){const o=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(4,k,o.id)),t.xp6(2),t.hij(" ",t.lcZ(3,2,"commun_translations.view"),"")}}const S=function(n){return["/tournament/data",n,1]};function C(n,i){if(1&n&&(t.TgZ(0,"a",68),t._UZ(1,"i",70),t._uU(2),t.ALo(3,"translate"),t.qZA()),2&n){const o=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(4,S,o.id)),t.xp6(2),t.hij(" ",t.lcZ(3,2,"commun_translations.edit"),"")}}function y(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"a",71),t.NdJ("click",function(){t.CHM(o);const s=t.oxw().$implicit,e=t.oxw();return t.KtG(e.selectLeague(s))}),t._UZ(1,"i",72),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&n&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"commun_translations.remove"),""))}const P=function(n,i,o){return{"status-pink":n,"status-blue":i,"status-green":o}};function w(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",59)(8,"button",60),t._uU(9),t.qZA()(),t.TgZ(10,"td",61)(11,"div",62)(12,"a",63),t._UZ(13,"i",64),t.qZA(),t.TgZ(14,"div",65),t.YNc(15,x,4,6,"a",66),t.YNc(16,C,4,6,"a",66),t.YNc(17,y,4,3,"a",67),t.qZA()()()()),2&n){const o=i.$implicit,a=t.oxw();t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(a.kind_sport[o.sport_type].name),t.xp6(2),t.Oqu(o.start_date),t.xp6(2),t.Q6J("ngClass",t.kEZ(8,P,1==o.is_finished,o.matchs_finished>0,1==o.tournament_open||"1"==o.draw_generated||"1"==o.is_draft)),t.xp6(1),t.Oqu(o.status),t.xp6(6),t.Q6J("ngIf",0==a.hasPermission("edit_league")&&a.hasPermission("list_league")),t.xp6(1),t.Q6J("ngIf",a.hasPermission("edit_league")),t.xp6(1),t.Q6J("ngIf",a.hasPermission("delete_league"))}}function U(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"li",74),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.moveToPage(s.currentPage-2))}),t.TgZ(1,"a",75),t._uU(2," ... "),t.qZA()()}if(2&n){const o=t.oxw(2);t.Q6J("hidden",1===o.currentPage)}}function M(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"li",74),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.moveToPage(s.currentPage+2))}),t.TgZ(1,"a",75),t._uU(2," ... "),t.qZA()()}if(2&n){const o=t.oxw(2);t.Q6J("hidden",o.currentPage>=o.pageNumberArray[o.pageNumberArray.length-2]||o.totalData<o.serialNumberArray[o.serialNumberArray.length-1])}}function D(n,i){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"li",46)(2,"a",48),t.NdJ("click",function(){const e=t.CHM(o).$implicit,g=t.oxw();return t.KtG(g.moveToPage(e))}),t._uU(3),t.qZA()(),t.YNc(4,U,3,1,"li",73),t.YNc(5,M,3,1,"li",73),t.BQk()}if(2&n){const o=i.$implicit,a=i.index,s=t.oxw();t.xp6(1),t.ekj("active",o===s.currentPage),t.Q6J("ngClass",s.pageNumberArray[s.currentPage-2]>o&&1!==o&&s.pageNumberArray.length>6||s.pageNumberArray[s.currentPage]<o&&1!==o&&s.pageNumberArray.length>6&&s.pageNumberArray.length!==o?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",o," "),t.xp6(1),t.Q6J("ngIf",0===a&&s.pageNumberArray.length>6&&s.currentPage>2),t.xp6(1),t.Q6J("ngIf",a===s.pageNumberArray.length-2&&s.pageNumberArray.length>6)}}function N(n,i){if(1&n&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.hij("Est\xe1s seguro de borrar esta liga: ",o.tournament_selected.name,"?")}}const A=function(n){return{disabled:n}},q=[{path:"",component:Z,children:[{path:"list-tournament",component:(()=>{const i=class{constructor(a,s,e){this.data=a,this.tournamentSrv=s,this.translate=e,this.routes=f._,this.tournamentsList=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=20,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.tournaments_general=[],this.statusText="",this.kind_sport=[],this.translations=[]}ngOnInit(){this.initializeLanguage(),this.user=this.tournamentSrv.authSrv.user,this.getTableData()}getTableData(a=1,s=""){this.tournamentsList=[],this.serialNumberArray=[],this.tournamentSrv.listTournaments(a,this.searchDataValue).subscribe(e=>{this.totalData=e.total,this.tournamentsList=e.tournaments,this.getTextStatus(e.match_finished,e.match_pending),this.tournaments_general=e.tournaments,this.getTableDataGeneral(),this.dataSource=new T.by(this.tournamentsList),this.calculateTotalPages(this.totalData,this.pageSize)})}getTextStatus(a,s){this.tournamentsList.forEach(e=>{"1"==e.is_draft?e.status=this.translations.leagues.in_draft:e.is_finished?e.status=this.translations.club_translations.status_finished:1==e.tournament_open?e.status=this.translations.leagues.preregistrations:(e.matchs_finished>0&&0==e.matchs_pending?e.status=this.translations.leagues.finished:(e.matchs_finished>0&&e.matchs_pending>0||"1"==e.draw_generated)&&(e.status=this.translations.leagues.in_play),e.match_pending>0&&(e.status=this.translations.leagues.preregistrations))})}initializeLanguage(){this.translate.use(this.tournamentSrv.authSrv.language),this.translate.setDefaultLang(this.tournamentSrv.authSrv.language),this.translate.get(["commun_translations","leagues","club_translations"]).subscribe(a=>{this.translations=a,this.getTypeSports()})}hasPermission(a=""){return!(!this.user.role.includes("Super-Admin")&&!this.user.permissions.includes(a))}getTableDataGeneral(){new h.uU("en-US"),this.tournamentsList=[],this.serialNumberArray=[],this.tournaments_general.map((s,e)=>{const g=e+1;e>=this.skip&&g<=this.limit&&(this.tournamentsList.push(s),this.serialNumberArray.push(g))}),this.dataSource=new T.by(this.tournamentsList),this.calculateTotalPages(this.totalData,this.pageSize)}searchData(a){this.dataSource.filter=a.trim().toLowerCase(),this.getTableData(this.currentPage,this.searchDataValue)}sortData(a){const s=this.tournamentsList.slice();this.tournamentsList=a.active&&""!==a.direction?s.sort((e,g)=>(e[a.active]<g[a.active]?-1:1)*("asc"===a.direction?1:-1)):s}getMoreData(a){"next"==a?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData(this.currentPage)):"previous"==a&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData(this.currentPage))}moveToPage(a){this.currentPage=a,this.skip=this.pageSelection[a-1].skip,this.limit=this.pageSelection[a-1].limit,a>this.currentPage?this.pageIndex=a-1:a<this.currentPage&&(this.pageIndex=a+1),this.getTableData(this.currentPage)}refresh(){this.pageSelection=[],this.searchDataValue="",this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(a,s){this.pageNumberArray=[],this.totalPages=a/s,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var e=1;e<=this.totalPages;e++){const g=s*e,_=g-s;this.pageNumberArray.push(e),this.pageSelection.push({skip:_,limit:g})}}selectLeague(a){this.tournament_selected=a}removeLeague(){this.tournamentSrv.deleteTournament(this.tournament_selected.id).subscribe(a=>{if(200==a.message){let s=this.tournamentsList.findIndex(e=>e.id==this.tournament_selected.id);-1!=s&&(this.tournamentsList.splice(s,1),this.closebutton.nativeElement.click(),this.tournament_selected=null)}else console.log(a)})}getTypeSports(){this.kind_sport.push({id:0,name:"..."},{id:1,name:this.translations.club_translations.sport_1},{id:2,name:this.translations.club_translations.sport_2},{id:3,name:this.translations.club_translations.sport_3},{id:4,name:this.translations.club_translations.sport_4},{id:5,name:this.translations.club_translations.sport_5})}};let n=i;return i.\u0275fac=function(s){return new(s||i)(t.Y36(p.D),t.Y36(L.Z),t.Y36(l.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-tournament"]],viewQuery:function(s,e){if(1&s&&t.Gf(m,5),2&s){let g;t.iGM(g=t.CRH())&&(e.closebutton=g.first)}},decls:90,vars:35,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"card","card-table","show-entire"],[1,"card-body"],[1,"page-table-header","mb-2"],[1,"row","align-items-center"],[1,"col"],[1,"doctor-table-blk"],[1,"doctor-search-blk"],[1,"top-nav-search","table-search-blk"],["placeholder","Search here",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn"],["src","assets/img/icons/search-normal.svg","alt",""],[1,"add-group"],["routerLinkActive","router-link-active",1,"btn","btn-primary","add-pluss","ms-2",3,"routerLink"],["src","assets/img/icons/plus.svg","alt",""],["href","javascript:;",1,"btn","btn-primary","doctor-refresh","ms-2",3,"click"],["src","assets/img/icons/re-fresh.svg","alt",""],[1,"col-auto","text-end","float-end","ms-auto","download-grp"],["href","javascript:;",1,"me-2"],["src","assets/img/icons/pdf-icon-01.svg","alt",""],["src","assets/img/icons/pdf-icon-02.svg","alt",""],["src","assets/img/icons/pdf-icon-03.svg","alt",""],["href","javascript:;"],["src","assets/img/icons/pdf-icon-04.svg","alt",""],[1,"table-responsive"],["matSort","",1,"table","border-0","custom-table","comman-table","datatable","mb-0",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","type_sportt"],["mat-sort-header","joining_date"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["id","delete_staff_modal","role","dialog",1,"modal","fade","delete-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-body","text-center"],["src","assets/img/sent.png","alt","","width","50","height","46"],[4,"ngIf"],[1,"m-t-20"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-white","me-1"],["closebutton",""],["type","submit",1,"btn","btn-danger",3,"click"],[1,"text-start"],[1,"custom-badge",3,"ngClass"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],["class","dropdown-item","href","#",3,"routerLink",4,"ngIf"],["class","dropdown-item","href","#","onclick","return false;","data-bs-toggle","modal","data-bs-target","#delete_staff_modal",3,"click",4,"ngIf"],["href","#",1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-eye","m-r-5"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","#","onclick","return false;","data-bs-toggle","modal","data-bs-target","#delete_staff_modal",1,"dropdown-item",3,"click"],[1,"fa","fa-trash-alt","m-r-5"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"li",6),t._UZ(11,"i",8),t.qZA(),t.TgZ(12,"li",9),t._uU(13),t.ALo(14,"translate"),t.qZA()()()()(),t.TgZ(15,"div",3)(16,"div",4)(17,"div",10)(18,"div",11)(19,"div",12)(20,"div",13)(21,"div",14)(22,"div",15)(23,"h3"),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"div",16)(27,"div",17)(28,"input",18),t.NdJ("ngModelChange",function(_){return e.searchDataValue=_})("ngModelChange",function(){return e.searchData(e.searchDataValue)}),t.qZA(),t.TgZ(29,"a",19),t._UZ(30,"img",20),t.qZA()(),t.TgZ(31,"div",21)(32,"a",22),t._UZ(33,"img",23),t.qZA(),t.TgZ(34,"a",24),t.NdJ("click",function(){return e.refresh()}),t._UZ(35,"img",25),t.qZA()()()()(),t.TgZ(36,"div",26)(37,"a",27),t._UZ(38,"img",28),t.qZA(),t.TgZ(39,"a",27),t._UZ(40,"img",29),t.qZA(),t.TgZ(41,"a",27),t._UZ(42,"img",30),t.qZA(),t.TgZ(43,"a",31),t._UZ(44,"img",32),t.qZA()()()(),t.TgZ(45,"div",33)(46,"table",34),t.NdJ("matSortChange",function(_){return e.sortData(_)}),t.TgZ(47,"thead")(48,"tr")(49,"th",35),t._uU(50),t.ALo(51,"translate"),t.qZA(),t.TgZ(52,"th",36),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"th",37),t._uU(56),t.ALo(57,"translate"),t.qZA(),t.TgZ(58,"th",38),t._uU(59),t.ALo(60,"translate"),t.qZA(),t._UZ(61,"th"),t.qZA()(),t.TgZ(62,"tbody"),t.YNc(63,w,18,12,"tr",39),t.qZA()(),t.TgZ(64,"div",40)(65,"div",41)(66,"div",42),t._uU(67),t.qZA()(),t.TgZ(68,"div",43)(69,"div",44)(70,"ul",45)(71,"li",46)(72,"a",47),t.NdJ("click",function(){return e.getMoreData("previous")}),t._uU(73,"Previous"),t.qZA()(),t.YNc(74,D,6,6,"ng-container",39),t.TgZ(75,"li",46)(76,"a",48),t.NdJ("click",function(){return e.getMoreData("next")}),t._uU(77,"Next "),t.qZA()()()()()()()()()()()()(),t.TgZ(78,"div",49)(79,"div",50)(80,"div",51)(81,"div",52),t._UZ(82,"img",53),t.YNc(83,N,2,1,"h3",54),t.TgZ(84,"div",55)(85,"a",56,57),t._uU(87,"Cerrar"),t.qZA(),t.TgZ(88,"button",58),t.NdJ("click",function(){return e.removeLeague()}),t._uU(89,"Borrar"),t.qZA()()()()()()),2&s&&(t.xp6(8),t.hij("",t.lcZ(9,17,"tournaments.tournament")," "),t.xp6(5),t.Oqu(t.lcZ(14,19,"commun_translations.list")),t.xp6(11),t.Oqu(t.lcZ(25,21,"tournaments.tournaments_list")),t.xp6(4),t.Q6J("ngModel",e.searchDataValue),t.xp6(4),t.Q6J("routerLink",e.routes.addTournament),t.xp6(18),t.Oqu(t.lcZ(51,23,"leagues.name")),t.xp6(3),t.Oqu(t.lcZ(54,25,"club_translations.sport")),t.xp6(3),t.Oqu(t.lcZ(57,27,"leagues.day_start")),t.xp6(3),t.Oqu(t.lcZ(60,29,"leagues.status")),t.xp6(4),t.Q6J("ngForOf",e.tournamentsList),t.xp6(4),t.lnq(" Showing ",e.serialNumberArray[0]," to ",e.serialNumberArray[e.serialNumberArray.length-1]," of ",e.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(31,A,1===e.currentPage)),t.xp6(3),t.Q6J("ngForOf",e.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(33,A,e.currentPage===e.pageNumberArray[e.pageNumberArray.length-1]||0===e.tournamentsList.length)),t.xp6(8),t.Q6J("ngIf",e.tournament_selected))},dependencies:[h.mk,h.sg,h.O5,c.rH,c.Od,r.Fj,r.JJ,r.On,u.YE,u.nU,l.X$]}),n})()}]}];let J=(()=>{const i=class{};let n=i;return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),c.Bz]}),n})();var z=d(80529),B=d(25108);let I=(()=>{const i=class{};let n=i;return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,J,r.u5,r.UX,z.JF,c.Bz,B.m]}),n})()}}]);