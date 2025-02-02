"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[8592],{3893:(_,g,o)=>{o.d(g,{a:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}storeQuestions(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/players/save-questions",e,{headers:t})}storePlayer(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/auth/players",e,{headers:t})}deletePlayer(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/players/"+e,{headers:t})}getPlayer(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/players/"+e,{headers:t})}updatePlayer(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/players/update/"+e,t,{headers:r})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},1765:(_,g,o)=>{o.d(g,{V:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listCourts(e=1,t=""){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/courts?page="+e+"&search="+t,{headers:r})}storeCourt(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/courts",e,{headers:t})}config(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/courts/config",{headers:e})}getCourt(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/courts/"+e,{headers:t})}updateCourt(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/courts/update/"+e,t,{headers:r})}deleteCourt(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/courts/"+e,{headers:t})}storeSchedule(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/courts",e,{headers:t})}getSchedulesDay(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/appointment/config"+e,{headers:t})}getAllCourts(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/courts/get-all",{headers:e})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},7191:(_,g,o)=>{o.d(g,{I:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listClubs(e=1,t=""){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs?page="+e+"&search="+t,{headers:r})}getClub(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/"+e,{headers:t})}updateDataClub(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/update-data",e,{headers:t})}updateDescriptionClub(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/update-data-description",e,{headers:t})}updateAdditionalDataClub(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/update-additional-data",e,{headers:t})}storeWeeklyScheduleClub(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/updateWeekly",e,{headers:t})}getClubProfileData(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/profile-data",{headers:e})}getClubDescriptionData(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/description-data",{headers:e})}getClubSchedule(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/schedule-data",{headers:e})}storeServices(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/store-services",e,{headers:t})}getServices(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/services",{headers:e})}editClub(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/update/"+e,t,{headers:r})}deleteClub(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/clubs/"+e,{headers:t})}config(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/config",{headers:e})}getStates(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/get-states/"+e,{headers:t})}getCities(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/get-cities/"+e,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},2113:(_,g,o)=>{o.d(g,{Z:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listMembers(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/members",{headers:e})}config(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/members/config",{headers:e})}storeMember(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/members",e,{headers:t})}deleteMember(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/members/"+e,{headers:t})}getMember(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/members/"+e,{headers:t})}updateMember(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/members/update/"+e,t,{headers:r})}findPotentialMember(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/members/get-potential-members/",e,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},5626:(_,g,o)=>{o.d(g,{E:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t,this.message="",this.response=""}config(e,t,r){let n=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/reservations/config?day_week_number="+e+"&date="+t+"&sport_selected="+r,{headers:n})}storeReservation(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/reservations",e,{headers:t})}getReservation(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/reservations/"+e,{headers:t})}deleteReservation(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/reservations/"+e,{headers:t})}getReservationPerMonth(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/reservations/get-reservations-month",e,{headers:t})}getReservationPerRange(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/reservations/get-reservations-range",e,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},3296:(_,g,o)=>{o.d(g,{Z:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listTournaments(e=1,t=""){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments?page="+e+"&search="+t,{headers:r})}listRoles(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/staffs/roles",{headers:e})}storeTournament(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournaments",e,{headers:t})}deleteTournament(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/tournaments/"+e,{headers:t})}getTournament(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/"+e,{headers:t})}saveTournament(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token}),n=a.$g+"/tournaments/update/"+e;return""==e&&(n=a.$g+"/tournaments"),this.http.post(n,t,{headers:r})}getDraw(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/get-draw/"+e,{headers:t})}getMatch(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/get-match-data/"+e,{headers:t})}saveResult(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournaments/save-result/"+e,t,{headers:r})}updateScheduleMatch(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournaments/update-schedule-match/"+e,t,{headers:r})}saveSchedule(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournament-schedule",e,{headers:t})}editSchedule(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournament-schedule/update/"+t,e,{headers:r})}deleteSchedule(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/tournament-schedule/"+e,{headers:t})}saveScheduleCouple(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/couple-tournament-schedule",e,{headers:t})}deleteScheduleCouple(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/couple-tournament-schedule/"+e,{headers:t})}configureTournament(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/configure-tournament/"+e,{headers:t})}checkEnoughCourtsAllMatches(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/check-configure-tournament/"+e,{headers:t})}configMatchesPage(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/config-matches-page/"+e,{headers:t})}getAllMatchesTournament(e,t=1,r="",n="",c="",M=null,B=null){let W=new h.WM({Authorization:"Bearer "+this.authSrv.token}),v="";return""!=r&&(v+="&player_name_search="+r),""!=n&&(v+="&status_match_id="+n),""!=c&&(v+="&court_id="+c),null!=M&&(v+="&date="+M),""!=B&&(v+="&category_id="+B),this.http.get(a.$g+"/tournaments/get-all-matches?tournament_id="+e+"&page="+t+v,{headers:W})}getAllPlayersTournament(e,t=1,r="",n="",c="",M=null,B=null){let W=new h.WM({Authorization:"Bearer "+this.authSrv.token}),v="";return""!=r&&(v+="&player_name_search="+r),""!=n&&(v+="&status_match_id="+n),""!=c&&(v+="&court_id="+c),null!=M&&(v+="&date="+M),""!=B&&(v+="&category_id="+B),this.http.get(a.$g+"/tournaments/get-all-players?tournament_id="+e+"&page="+t+v,{headers:W})}configPlayersPage(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/tournaments/config-matches-page/"+e,{headers:t})}paidPlayerTournament(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournaments/paid-player-tournament/"+e,null,{headers:t})}unpaidPlayerTournament(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/tournaments/unpaid-player-tournament/"+e,null,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},1995:(_,g,o)=>{o.d(g,{s:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}getConfigDashboard(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/dashboard/config",{headers:e})}getDataAdmin(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/dashboard/admin",null,{headers:e})}getDataAdminYear(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/dashboard/admin-year",e,{headers:t})}getDashboardDoctor(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/dashboard/doctor",e,{headers:t})}getDashboardYearDoctor(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/dashboard/doctor-year",e,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},4894:(_,g,o)=>{o.d(g,{L:()=>u});var h=o(4650),a=o(27);let u=(()=>{const l=class{};let d=l;return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=h.Xpm({type:l,selectors:[["app-staff"]],decls:1,vars:0,template:function(p,e){1&p&&h._UZ(0,"router-outlet")},dependencies:[a.lC]}),d})()},2477:(_,g,o)=>{o.d(g,{W:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listJourneys(e=1,t,r=""){let n=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/journeys?page="+e+"&category_id="+t+"&search="+r,{headers:n})}createCalendar(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/journeys/create-calendar/"+e,{headers:t})}getJourney(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/journeys/"+e,{headers:t})}getMatchsJourney(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/journeys/get-matchs/"+e,{headers:t})}saveResult(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/journeys/save-result/"+e,t,{headers:r})}getRanking(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/journeys/ranking/"+e,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},3182:(_,g,o)=>{o.d(g,{H:()=>i});var h=o(5861),a=o(529),u=o(5862),d=o(4650),l=o(866);let i=(()=>{const p=class{constructor(t,r){this.http=t,this.authSrv=r}listCategories(t=1,r=""){let n=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories?page="+t+"&search="+r,{headers:n})}getCategory(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/"+t,{headers:r})}storeCategory(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/categories",t,{headers:r})}editCategory(t,r){let n=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/categories/update/"+t,r,{headers:n})}deleteCategory(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(u.$g+"/categories/"+t,{headers:r})}config(){let t=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/config",{headers:t})}addCouple(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/categories/add-couple",t,{headers:r})}editCouple(t,r){let n=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/categories/edit-couple/"+t,r,{headers:n})}getCouple(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/get-couple/"+t,{headers:r})}getCoupleResults(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/get-couple-results/"+t,{headers:r})}getCoupleResults2(t){var r=this;return(0,h.Z)(function*(){let M,n=new a.WM({Authorization:"Bearer "+r.authSrv.token}),c=u.$g+"/categories/get-couple-results/"+t;try{M=yield r.http.get(c,{headers:n}).toPromise()}catch(B){console.error(B)}return M})()}removeCouple(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(u.$g+"/categories/delete-couple/"+t,{headers:r})}findPlayerByMobile(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/get-players-mobile/"+t,{headers:r})}findPlayerByData(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(u.$g+"/categories/get-players-data",t,{headers:r})}findPlayerByName(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/get-players-name/"+t,{headers:r})}findPlayerBySurame(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/get-players-surname/"+t,{headers:r})}totalCouplesCategory(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/categories/get-total-couples/"+t,{headers:r})}createDraw(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(u.$g+"/tournaments/configure-tournament/"+t,{headers:r})}deleteDraw(t){let r=new a.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(u.$g+"/tournaments/delete-draw/"+t,{headers:r})}};let s=p;return p.\u0275fac=function(r){return new(r||p)(d.LFG(a.eN),d.LFG(l.e))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),s})()},696:(_,g,o)=>{o.d(g,{H:()=>u});var h=o(4650),a=o(27);let u=(()=>{const l=class{};let d=l;return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=h.Xpm({type:l,selectors:[["app-jorney"]],decls:1,vars:0,template:function(p,e){1&p&&h._UZ(0,"router-outlet")},dependencies:[a.lC]}),d})()},4739:(_,g,o)=>{o.d(g,{l:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listPlayers(e=1,t=""){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/players?page="+e+"&search="+t,{headers:r})}getPlayer(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/players/"+e,{headers:t})}storePlayer(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/players",e,{headers:t})}editPlayer(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/players/update/"+e,t,{headers:r})}deletePlayer(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/players/"+e,{headers:t})}config(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/players/config",{headers:e})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},3564:(_,g,o)=>{o.d(g,{E:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listAppointmentPays(e=1,t="",r="",n="",c=null,M=null){let B=new h.WM({Authorization:"Bearer "+this.authSrv.token}),W=a.$g+"/appointment-pay?page="+e,A="";return""!=t&&(A+="&doctor_name_search="+t),""!=r&&(A+="&patient_name_search="+r),""!=n&&(A+="&specialitie_id="+n),null!=c&&(A+="&date_from="+c),null!=M&&(A+="&date_to="+M),console.log(A),this.http.get(W+A,{headers:B})}config(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/appointment/config",{headers:e})}registerAppointmentPay(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/appointment-pay",e,{headers:t})}updateAppointmentPay(e,t){let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/appointment-pay/update/"+e,t,{headers:r})}deleteAppointmentPay(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/appointment-pay/"+e,{headers:t})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},5475:(_,g,o)=>{o.d(g,{x:()=>l});var h=o(529),a=o(5862),u=o(4650),d=o(866);let l=(()=>{const s=class{constructor(e,t){this.http=e,this.authSrv=t}listStaffs(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/staffs",{headers:e})}listRoles(){let e=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/staffs/roles",{headers:e})}storeStaff(e){console.log(e);let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/staffs",e,{headers:t})}deleteStaff(e){let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/staffs/"+e,{headers:t})}getStaff(e){console.log(e);let t=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/staffs/"+e,{headers:t})}editStaff(e,t){console.log(t);let r=new h.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/staffs/update/"+e,t,{headers:r})}};let i=s;return s.\u0275fac=function(t){return new(t||s)(u.LFG(h.eN),u.LFG(d.e))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},5861:(_,g,o)=>{function h(u,d,l,i,s,p,e){try{var t=u[p](e),r=t.value}catch(n){return void l(n)}t.done?d(r):Promise.resolve(r).then(i,s)}function a(u){return function(){var d=this,l=arguments;return new Promise(function(i,s){var p=u.apply(d,l);function e(r){h(p,i,s,e,t,"next",r)}function t(r){h(p,i,s,e,t,"throw",r)}e(void 0)})}}o.d(g,{Z:()=>a})}}]);