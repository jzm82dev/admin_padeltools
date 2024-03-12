"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[5549],{5549:(L,d,r)=>{r.r(d),r.d(d,{PatientDashboardModule:()=>S});var c=r(6895),h=r(27),m=r(6382),v=r(7155),t=r(4650),Z=r(7945),T=r(2320),b=r(6205),f=r(2243),p=r(6594),U=r(3125),A=r(3546),O=r(4385),x=r(3238),g=r(6308),u=r(433);const _=["chart"];function q(i,l){if(1&i&&(t.TgZ(0,"mat-option",103),t._uU(1),t.qZA()),2&i){const a=l.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.value," ")}}function k(i,l){if(1&i&&(t.TgZ(0,"div",104)(1,"h4"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()()),2&i){const a=l.$implicit;t.xp6(2),t.Oqu(a.quantity),t.xp6(2),t.Oqu(a.units)}}function y(i,l){if(1&i&&(t.TgZ(0,"div",104)(1,"h4"),t._uU(2),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()()),2&i){const a=l.$implicit;t.xp6(2),t.Oqu(a.quantity),t.xp6(2),t.Oqu(a.units)}}function w(i,l){if(1&i&&(t.TgZ(0,"tr")(1,"td")(2,"div",84),t._UZ(3,"input",85),t.qZA()(),t.TgZ(4,"td",105),t._UZ(5,"img",106),t.TgZ(6,"h2"),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"button",107),t._uU(14),t.qZA()(),t.TgZ(15,"td",108)(16,"div",109)(17,"a",110),t._UZ(18,"i",111),t.qZA(),t.TgZ(19,"div",112)(20,"a",113),t._UZ(21,"i",114),t._uU(22," Edit"),t.qZA(),t.TgZ(23,"a",115),t._UZ(24,"i",116),t._uU(25," Delete"),t.qZA()()()()()),2&i){const a=l.$implicit,s=t.oxw();t.xp6(5),t.Q6J("src",a.img,t.LSH),t.xp6(2),t.Oqu(a.doctorName),t.xp6(2),t.Oqu(a.diagnosis),t.xp6(2),t.hij("",a.date," "),t.xp6(3),t.Oqu(a.status),t.xp6(6),t.Q6J("routerLink",s.routes.editAppointment)}}const D=[{path:"",component:(()=>{class i{constructor(a){this.data=a,this.routes=m._,this.carousel1=[],this.carousel2=[],this.slideConfig={slidesToShow:3,slidesToScroll:3,centerMode:!0,centerPadding:"30px"},this.patientDashboard=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.selecedList=[{value:"2022"},{value:"2021"},{value:"2020"},{value:"2019"}],this.carousel1=this.data.carousel1,this.carousel2=this.data.carousel2,this.chartOptionsOne={chart:{height:170,type:"line",toolbar:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},series:[{name:"Health",color:"#00D3C7",data:[20,40,85,25,50,30,50,20,50,40,30,20]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},this.chartOptionsTwo={chart:{height:200,type:"line",toolbar:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},series:[{name:"Health",color:"#FF3667",data:[20,20,85,35,60,30,20]}],xaxis:{categories:["0","1","2","3","4","5","6"]}},this.chartOptionsThree={chart:{height:230,type:"bar",stacked:!1,toolbar:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"90%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:6,colors:["transparent"]},series:[{name:"Low",color:"#D5D7ED",data:[10,30,10,30,10,30,30]},{name:"High",color:"#2E37A4",data:[20,20,20,20,20,20,20]}],xaxis:{categories:["1","10","20","30","40","50","60"]}},this.chartOptionsFour={chart:{height:220,type:"bar",stacked:!0,toolbar:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:1},series:[{name:"High",color:"#2E37A4",data:[44,55,57,56,61,58,63,60,66]},{name:"Low",color:"rgba(46, 55, 164, 0.05)",data:[44,55,57,56,61,58,63,60,66]}],tooltip:{y:{formatter:function(s){return"$ "+s+" thousands"}}}},this.chartOptionsFive={chart:{height:200,type:"line",toolbar:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},series:[{name:"Sleep",color:"#2E37A4",data:[20,21,20,21,20,21,22]}],xaxis:{categories:["0","1","2","3","4","5","6"]}}}ngOnInit(){this.getTableData()}getTableData(){this.patientDashboard=[],this.serialNumberArray=[],this.data.getPatientDashboard().subscribe(a=>{this.totalData=a.totalData,a.data.map((s,e)=>{const o=e+1;e>=this.skip&&o<=this.limit&&(this.patientDashboard.push(s),this.serialNumberArray.push(o))}),this.dataSource=new v.by(this.patientDashboard),this.calculateTotalPages(this.totalData,this.pageSize)})}searchData(a){this.dataSource.filter=a.trim().toLowerCase(),this.patientDashboard=this.dataSource.filteredData}sortData(a){const s=this.patientDashboard.slice();this.patientDashboard=a.active&&""!==a.direction?s.sort((e,o)=>(e[a.active]<o[a.active]?-1:1)*("asc"===a.direction?1:-1)):s}getMoreData(a){"next"==a?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==a&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(a){this.currentPage=a,this.skip=this.pageSelection[a-1].skip,this.limit=this.pageSelection[a-1].limit,a>this.currentPage?this.pageIndex=a-1:a<this.currentPage&&(this.pageIndex=a+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(a,s){this.pageNumberArray=[],this.totalPages=a/s,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(var e=1;e<=this.totalPages;e++){const o=s*e,n=o-s;this.pageNumberArray.push(e),this.pageSelection.push({skip:n,limit:o})}}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(Z.D))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-patient-dashboard"]],viewQuery:function(s,e){if(1&s&&t.Gf(_,5),2&s){let o;t.iGM(o=t.CRH())&&(e.chart=o.first)}},decls:253,vars:66,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"feather","icon-chevron-right"],[1,"breadcrumb-item","active"],[1,"good-morning-blk"],[1,"col-md-6"],[1,"morning-user"],[1,"col-md-6","position-blk"],[1,"morning-img"],["src","assets/img/morning-img-03.png","alt",""],[1,"col-12","col-md-12","col-lg-12","col-xl-7"],[1,"card"],[1,"card-body"],[1,"chart-title","patient-visit","mb-0"],[1,"income-value"],[1,"passive-view"],[1,"feather","icon-arrow-up-right","me-1"],[1,"average-health"],[1,"form-group","mb-0"],["placeholder","2022",1,"form-control","select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["id","health-chart"],[3,"series","chart","xaxis","dataLabels","grid","stroke","title","markers","yaxis","fill"],[1,"col-12","col-md-12","col-lg-12","col-xl-5","d-flex"],[1,"chart-title","patient-visit"],[1,"body-mass-blk"],[1,"weight-blk"],[1,"center","slider","carousel",3,"config"],["ngxSlickItem","",4,"ngFor","ngForOf"],["slickModal","slick-carousel"],[1,"progress","weight-bar"],["role","progressbar",1,"progress-bar","progress-bar-success"],[1,"weight-checkit"],[1,"col-12","col-md-6","col-xl-3","d-flex"],[1,"card","report-blk"],[1,"report-head"],["src","assets/img/icons/report-icon-01.svg","alt","",1,"me-2"],["id","heart-rate"],[3,"series","chart","dataLabels","stroke","title","markers","xaxis","yaxis","grid","fill"],[1,"dash-content"],["src","assets/img/icons/report-icon-02.svg","alt","",1,"me-2"],["id","temperature-chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","tooltip","xaxis","grid"],[1,"negative-view"],[1,"feather","icon-arrow-down-right","me-1"],["src","assets/img/icons/report-icon-03.svg","alt","",1,"me-2"],["id","pressure-chart"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","legend","fill","yaxis","grid"],["src","assets/img/icons/report-icon-04.svg","alt","",1,"me-2"],["id","sleep-chart"],[1,"col-12","col-md-12","col-xl-7"],[1,"col-12","col-md-6","col-xl-5"],[1,"card","top-departments"],[1,"card-header","pb-0"],[1,"card-title","mb-0"],[1,"card-body","pt-1"],[1,"note-checkit"],[1,"custom_check"],["type","checkbox","name","select_specialist","checked",""],[1,"checkmark"],["type","checkbox","name","select_specialist"],[1,"custom_check","mb-0"],[1,"col-12","col-md-6","col-xl-7","d-flex"],[1,"card","wallet-widget","general-health"],[1,"circle-bar","circle-bar2"],["innerStrokeColor","#dee2e6","outerStrokeColor","#2E37A4",1,"circle-progress-bar",3,"percent","clockwise"],[1,"circle-progress-icon"],["src","assets/img/icons/health-img.svg","alt",""],[1,"main-limit"],[1,"income-value","mt-2"],[1,"col-12","col-md-12","col-xl-12"],[1,"card-header"],[1,"card-title","d-inline-block"],[1,"patient-views","float-end",3,"routerLink"],[1,"card-body","p-0","table-dash"],[1,"table-responsive"],["matSort","",1,"table","mb-0","border-0","datatable","custom-table","patient-table",3,"matSortChange"],["mat-sort-header","checkbox"],[1,"form-check","check-tables"],["type","checkbox","value","something",1,"form-check-input"],["mat-sort-header","doctorName"],["mat-sort-header","diagnosis"],["mat-sort-header","status"],[4,"ngFor","ngForOf"],[1,"col-12","col-md-12","col-xl-5"],[1,"card","flex-fill","mb-2"],[1,"calendar-container"],[1,"demo-inline-calendar-card"],[3,"selected","selectedChange"],[1,"treat-box","mb-2"],[1,"user-imgs-blk"],["src","assets/img/profiles/avatar-05.jpg","alt",""],[1,"active-user-detail","flex-grow-1"],["href","javascript:;",1,"custom-badge","status-green"],[1,"treat-box"],["src","assets/img/profiles/avatar-03.jpg","alt",""],["href","javascript:;",1,"custom-badge","status-orange"],[3,"value"],["ngxSlickItem",""],[1,"table-image"],["width","28","height","28","alt","",1,"rounded-circle",3,"src"],[1,"custom-badge","status-gray","re-shedule"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","m-r-5"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_appointment",1,"dropdown-item"],[1,"fa","fa-trash-o","m-r-5"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),t._uU(8,"Dashboard "),t.qZA()(),t.TgZ(9,"li",6),t._UZ(10,"i",8),t.qZA(),t.TgZ(11,"li",9),t._uU(12,"Patient Dashboard"),t.qZA()()()()(),t.TgZ(13,"div",10)(14,"div",3)(15,"div",11)(16,"div",12)(17,"h2"),t._uU(18,"Good Morning, "),t.TgZ(19,"span"),t._uU(20,"Williams Sarah"),t.qZA()(),t.TgZ(21,"p"),t._uU(22,"Have a nice day at work"),t.qZA()()(),t.TgZ(23,"div",13)(24,"div",14),t._UZ(25,"img",15),t.qZA()()()(),t.TgZ(26,"div",3)(27,"div",16)(28,"div",17)(29,"div",18)(30,"div",19)(31,"h4"),t._uU(32,"Static of your Health"),t.qZA(),t.TgZ(33,"div",20)(34,"p")(35,"span",21),t._UZ(36,"i",22),t._uU(37,"40%"),t.qZA(),t._uU(38," vs last month"),t.qZA()(),t.TgZ(39,"div",23)(40,"h5"),t._uU(41,"72bmp "),t.TgZ(42,"span"),t._uU(43,"Average"),t.qZA()()(),t.TgZ(44,"div",24)(45,"mat-select",25),t.NdJ("ngModelChange",function(n){return e.selectedValue=n}),t.YNc(46,q,2,2,"mat-option",26),t.qZA()()(),t.TgZ(47,"div",27),t._UZ(48,"apx-chart",28),t.qZA()()()(),t.TgZ(49,"div",29)(50,"div",17)(51,"div",18)(52,"div",30)(53,"h4"),t._uU(54,"Body Mass index"),t.qZA()(),t.TgZ(55,"div",31)(56,"div",3)(57,"div",11)(58,"div",32)(59,"ngx-slick-carousel",33),t.YNc(60,k,5,2,"div",34),t.qZA()()(),t.TgZ(61,"div",11)(62,"div",32)(63,"ngx-slick-carousel",33,35),t.YNc(65,y,5,2,"div",34),t.qZA()()()(),t.TgZ(66,"div",36),t._UZ(67,"div",37),t.qZA(),t.TgZ(68,"ul",38)(69,"li"),t._uU(70,"Underweight"),t.qZA(),t.TgZ(71,"li"),t._uU(72,"Normal (45.5)"),t.qZA(),t.TgZ(73,"li"),t._uU(74,"Overweight"),t.qZA()()()()()()(),t.TgZ(75,"div",3)(76,"div",39)(77,"div",40)(78,"div",18)(79,"div",41)(80,"h4"),t._UZ(81,"img",42),t._uU(82,"Heart Rate"),t.qZA()(),t.TgZ(83,"div",43),t._UZ(84,"apx-chart",44),t.qZA(),t.TgZ(85,"div",45)(86,"h5"),t._uU(87,"110 "),t.TgZ(88,"span"),t._uU(89,"bpm"),t.qZA()(),t.TgZ(90,"p")(91,"span",21),t._UZ(92,"i",22),t._uU(93,"40%"),t.qZA(),t._uU(94," vs last month"),t.qZA()()()()(),t.TgZ(95,"div",39)(96,"div",40)(97,"div",18)(98,"div",41)(99,"h4"),t._UZ(100,"img",46),t._uU(101,"Temperature"),t.qZA()(),t.TgZ(102,"div",47),t._UZ(103,"apx-chart",48),t.qZA(),t.TgZ(104,"div",45)(105,"h5"),t._uU(106,"38.6 "),t.TgZ(107,"span"),t._uU(108,"c"),t.qZA()(),t.TgZ(109,"p")(110,"span",49),t._UZ(111,"i",50),t._uU(112,"-20%"),t.qZA(),t._uU(113," vs last month"),t.qZA()()()()(),t.TgZ(114,"div",39)(115,"div",40)(116,"div",18)(117,"div",41)(118,"h4"),t._UZ(119,"img",51),t._uU(120,"Blood Pressure"),t.qZA()(),t.TgZ(121,"div",52),t._UZ(122,"apx-chart",53),t.qZA(),t.TgZ(123,"div",45)(124,"h5"),t._uU(125,"120 "),t.TgZ(126,"span"),t._uU(127,"mm/Hg"),t.qZA()(),t.TgZ(128,"p")(129,"span",49),t._UZ(130,"i",50),t._uU(131,"-40%"),t.qZA(),t._uU(132," vs last month"),t.qZA()()()()(),t.TgZ(133,"div",39)(134,"div",40)(135,"div",18)(136,"div",41)(137,"h4"),t._UZ(138,"img",54),t._uU(139,"Sleep"),t.qZA()(),t.TgZ(140,"div",55),t._UZ(141,"apx-chart",28),t.qZA(),t.TgZ(142,"div",45)(143,"h5"),t._uU(144,"7"),t.TgZ(145,"span"),t._uU(146,"h"),t.qZA(),t._uU(147," 30 "),t.TgZ(148,"span"),t._uU(149,"m"),t.qZA()(),t.TgZ(150,"p")(151,"span",49),t._UZ(152,"i",50),t._uU(153,"-10%"),t.qZA(),t._uU(154," vs last month"),t.qZA()()()()()(),t.TgZ(155,"div",3)(156,"div",56)(157,"div",3)(158,"div",57)(159,"div",58)(160,"div",59)(161,"h4",60),t._uU(162,"Notes"),t.qZA()(),t.TgZ(163,"div",61)(164,"div",62)(165,"label",63),t._UZ(166,"input",64)(167,"span",65),t._uU(168," Take vitamin Tablet "),t.qZA()(),t.TgZ(169,"div",62)(170,"label",63),t._UZ(171,"input",64)(172,"span",65),t._uU(173," Add Appoinment "),t.qZA()(),t.TgZ(174,"div",62)(175,"label",63),t._UZ(176,"input",66)(177,"span",65),t._uU(178," Set a goal "),t.qZA()(),t.TgZ(179,"div",62)(180,"label",67),t._UZ(181,"input",66)(182,"span",65),t._uU(183," Add new weight "),t.qZA()()()()(),t.TgZ(184,"div",68)(185,"div",69)(186,"div",70),t._UZ(187,"circle-progress",71),t.TgZ(188,"div",72)(189,"b"),t._UZ(190,"img",73),t.qZA()()(),t.TgZ(191,"div",74)(192,"p"),t._uU(193,"General Health"),t.qZA(),t.TgZ(194,"h4"),t._uU(195,"75%"),t.qZA(),t.TgZ(196,"div",75)(197,"p")(198,"span",21),t._UZ(199,"i",22),t._uU(200,"40%"),t.qZA(),t._uU(201," vs last month"),t.qZA()()()()(),t.TgZ(202,"div",76)(203,"div",17)(204,"div",77)(205,"h4",78),t._uU(206,"Medical History"),t.qZA(),t.TgZ(207,"a",79),t._uU(208,"Show all"),t.qZA()(),t.TgZ(209,"div",80)(210,"div",81)(211,"table",82),t.NdJ("matSortChange",function(n){return e.sortData(n)}),t.TgZ(212,"thead")(213,"tr")(214,"th",83)(215,"div",84),t._UZ(216,"input",85),t.qZA()(),t.TgZ(217,"th",86),t._uU(218,"Doctor name"),t.qZA(),t.TgZ(219,"th",87),t._uU(220,"Diagnosis"),t.qZA(),t.TgZ(221,"th",88),t._uU(222,"Date"),t.qZA(),t._UZ(223,"th")(224,"th"),t.qZA()(),t.TgZ(225,"tbody"),t.YNc(226,w,26,6,"tr",89),t.qZA()()()()()()()(),t.TgZ(227,"div",90)(228,"div",91)(229,"div",18)(230,"div",92)(231,"mat-card",93)(232,"mat-calendar",94),t.NdJ("selectedChange",function(n){return e.selected=n}),t.qZA()()()()(),t.TgZ(233,"div",95)(234,"div",96),t._UZ(235,"img",97),t.TgZ(236,"div",98)(237,"h4"),t._uU(238,"General Health Check up"),t.qZA(),t.TgZ(239,"p"),t._uU(240,"Dr. Dianne Philips at 10:00-11:00 AM"),t.qZA()()(),t.TgZ(241,"a",99),t._uU(242,"Active"),t.qZA()(),t.TgZ(243,"div",100)(244,"div",96),t._UZ(245,"img",101),t.TgZ(246,"div",98)(247,"h4"),t._uU(248,"Temporary Headache "),t.qZA(),t.TgZ(249,"p"),t._uU(250,"Dr. Jenny Smith at 05:00-06:00 PM"),t.qZA()()(),t.TgZ(251,"a",102),t._uU(252,"Pending"),t.qZA()()()()()()),2&s&&(t.xp6(7),t.Q6J("routerLink",e.routes.adminDashboard),t.xp6(38),t.Q6J("ngModel",e.selectedValue),t.xp6(1),t.Q6J("ngForOf",e.selecedList),t.xp6(2),t.Q6J("series",e.chartOptionsOne.series)("chart",e.chartOptionsOne.chart)("xaxis",e.chartOptionsOne.xaxis)("dataLabels",e.chartOptionsOne.dataLabels)("grid",e.chartOptionsOne.grid)("stroke",e.chartOptionsOne.stroke)("title",e.chartOptionsOne.title)("markers",e.chartOptionsOne.markers)("yaxis",e.chartOptionsOne.yaxis)("fill",e.chartOptionsOne.fill),t.xp6(11),t.Q6J("config",e.slideConfig),t.xp6(1),t.Q6J("ngForOf",e.carousel1),t.xp6(3),t.Q6J("config",e.slideConfig),t.xp6(2),t.Q6J("ngForOf",e.carousel2),t.xp6(19),t.Q6J("series",e.chartOptionsTwo.series)("chart",e.chartOptionsTwo.chart)("dataLabels",e.chartOptionsTwo.dataLabels)("stroke",e.chartOptionsTwo.stroke)("title",e.chartOptionsTwo.title)("markers",e.chartOptionsTwo.markers)("xaxis",e.chartOptionsTwo.xaxis)("yaxis",e.chartOptionsTwo.yaxis)("grid",e.chartOptionsTwo.grid)("fill",e.chartOptionsTwo.fill),t.xp6(19),t.Q6J("series",e.chartOptionsThree.series)("chart",e.chartOptionsThree.chart)("dataLabels",e.chartOptionsThree.dataLabels)("plotOptions",e.chartOptionsThree.plotOptions)("yaxis",e.chartOptionsThree.yaxis)("legend",e.chartOptionsThree.legend)("fill",e.chartOptionsThree.fill)("stroke",e.chartOptionsThree.stroke)("tooltip",e.chartOptionsThree.tooltip)("xaxis",e.chartOptionsThree.xaxis)("xaxis",e.chartOptionsThree.xaxis)("yaxis",e.chartOptionsThree.yaxis)("grid",e.chartOptionsThree.grid),t.xp6(19),t.Q6J("series",e.chartOptionsFour.series)("chart",e.chartOptionsFour.chart)("dataLabels",e.chartOptionsFour.dataLabels)("plotOptions",e.chartOptionsFour.plotOptions)("responsive",e.chartOptionsFour.responsive)("xaxis",e.chartOptionsFour.xaxis)("legend",e.chartOptionsFour.legend)("fill",e.chartOptionsFour.fill)("xaxis",e.chartOptionsFour.xaxis)("yaxis",e.chartOptionsFour.yaxis)("grid",e.chartOptionsFour.grid),t.xp6(19),t.Q6J("series",e.chartOptionsFive.series)("chart",e.chartOptionsFive.chart)("xaxis",e.chartOptionsFive.xaxis)("dataLabels",e.chartOptionsFive.dataLabels)("grid",e.chartOptionsFive.grid)("stroke",e.chartOptionsFive.stroke)("title",e.chartOptionsFive.title)("markers",e.chartOptionsFive.markers)("yaxis",e.chartOptionsFive.yaxis)("fill",e.chartOptionsFive.fill),t.xp6(46),t.Q6J("percent",66)("clockwise",!0),t.xp6(20),t.Q6J("routerLink",e.routes.appointmentList),t.xp6(19),t.Q6J("ngForOf",e.patientDashboard),t.xp6(6),t.Q6J("selected",e.selected))},dependencies:[c.sg,h.rH,T.i9,b.x,f.nu,p.vE,p.Xg,U._H,A.a8,O.gD,x.ey,g.YE,g.nU,u.JJ,u.On],styles:[".demo-inline-calendar-card[_ngcontent-%COMP%]{font-size:11px}"]})}return i})()}];let P=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(D),h.Bz]})}return i})();var F=r(6943);let S=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[c.ez,P,F.m]})}return i})()}}]);