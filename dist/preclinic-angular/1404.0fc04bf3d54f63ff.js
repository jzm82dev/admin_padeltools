"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[1404],{41404:(fe,p,l)=>{l.r(p),l.d(p,{ScheduleModule:()=>me});var r=l(36895),u=l(30027),v=l(46382),x=l(35226),m=l.n(x),e=l(94650),Z=l(57191),g=l(42466),f=l(3238),_=l(24006),h=l(3125),y=l(59549),b=l(84385);const T=["closebutton"];function A(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",41)(1,"a",42),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.activateModifySchedule())}),e._UZ(2,"i",43),e.qZA()()}}function C(i,o){1&i&&(e.TgZ(0,"div",3)(1,"div",46)(2,"label",47),e._uU(3),e.ALo(4,"translate"),e.qZA()()()),2&i&&(e.xp6(3),e.hij("",e.lcZ(4,1,"club_translations.schedule.closed")," "))}const d=function(){return{standalone:!0}};function S(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",46)(2,"div",48)(3,"input",49),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw().$implicit;return e.KtG(a.closed=n)}),e.qZA(),e.TgZ(4,"label",50),e._uU(5,"checkbox"),e.qZA()()(),e.TgZ(6,"div",51)(7,"label"),e._uU(8),e.ALo(9,"translate"),e.qZA()()()}if(2&i){const t=e.oxw().$implicit;e.xp6(3),e.Q6J("ngModel",t.closed)("name",t.day_id)("id",t.day_id)("ngModelOptions",e.DdM(8,d)),e.xp6(1),e.Q6J("for",t.day_id),e.xp6(4),e.Oqu(e.lcZ(9,6,"club_translations.schedule.closed"))}}function q(i,o){if(1&i&&(e.TgZ(0,"mat-option",65),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.format_hour," ")}}function J(i,o){if(1&i&&(e.TgZ(0,"mat-option",65),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.format_hour," ")}}function U(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",53)(2,"div",54)(3,"div",55)(4,"div",56)(5,"label"),e._uU(6),e.ALo(7,"translate"),e.TgZ(8,"span",57),e._uU(9,"*"),e.qZA()(),e.TgZ(10,"mat-select",58),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(4);return e.KtG(a.opening_time=n)}),e.ALo(11,"translate"),e.YNc(12,q,2,2,"mat-option",59),e.qZA()()()()(),e.TgZ(13,"div",25)(14,"div",54)(15,"div",60)(16,"div",61)(17,"div",62)(18,"label"),e._uU(19),e.ALo(20,"translate"),e.TgZ(21,"span",57),e._uU(22,"*"),e.qZA()(),e.TgZ(23,"mat-select",58),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(4);return e.KtG(a.closing_time=n)}),e.ALo(24,"translate"),e.YNc(25,J,2,2,"mat-option",59),e.qZA(),e.TgZ(26,"a",63),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2).$implicit,a=e.oxw(2);return e.KtG(a.addHourSchedule(n.day_name))}),e._UZ(27,"i",64),e.qZA()()()()()()()}if(2&i){const t=e.oxw(4);e.xp6(6),e.hij("",e.lcZ(7,10,"club_translations.schedule.opens_at")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(11,12,"club_translations.schedule.hour")),e.Q6J("ngModel",t.opening_time)("ngModelOptions",e.DdM(18,d)),e.xp6(2),e.Q6J("ngForOf",t.hours),e.xp6(7),e.hij("",e.lcZ(20,14,"club_translations.schedule.closes_at")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(24,16,"club_translations.schedule.hour")),e.Q6J("ngModel",t.closing_time)("ngModelOptions",e.DdM(19,d)),e.xp6(2),e.Q6J("ngForOf",t.hours)}}function M(i,o){1&i&&(e.TgZ(0,"th"),e._uU(1,"Borrar "),e.qZA())}function w(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"td",67)(1,"a",63),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().index,a=e.oxw(2).$implicit,c=e.oxw(2);return e.KtG(c.deleteHourSchedule(n,a.day_id))}),e._UZ(2,"i",68),e.qZA()()}}function k(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td",39),e._uU(2),e.qZA(),e.TgZ(3,"td",39),e._uU(4),e.qZA(),e.YNc(5,w,3,0,"td",66),e.qZA()),2&i){const t=o.$implicit,s=e.oxw(4);e.xp6(2),e.hij("",t.opening_time," h"),e.xp6(2),e.hij("",t.closing_time," h"),e.xp6(1),e.Q6J("ngIf",s.modifySchedule)}}function N(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td",69),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i){const t=e.oxw(2).$implicit;e.xp6(2),e.AsE(" ",e.lcZ(3,2,"club_translations.schedule.no_schedule_for")," ",t.day_name,"")}}function Q(i,o){if(1&i&&(e.TgZ(0,"div",52),e.YNc(1,U,28,20,"div",14),e.TgZ(2,"div",3)(3,"div",36)(4,"table",37)(5,"thead")(6,"tr",39)(7,"th"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"th"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.YNc(13,M,2,0,"th",20),e.qZA()(),e.TgZ(14,"tbody"),e.YNc(15,k,6,3,"tr",40),e.YNc(16,N,4,4,"tr",20),e.qZA()()()()()),2&i){const t=e.oxw().$implicit,s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",s.modifySchedule),e.xp6(7),e.hij("",e.lcZ(9,6,"club_translations.schedule.opens_at")," "),e.xp6(3),e.hij("",e.lcZ(12,8,"club_translations.schedule.closes_at")," "),e.xp6(2),e.Q6J("ngIf",s.modifySchedule),e.xp6(2),e.Q6J("ngForOf",t.hours),e.xp6(1),e.Q6J("ngIf",0==t.hours.length)}}function L(i,o){if(1&i&&(e.TgZ(0,"div",3)(1,"div",44)(2,"div",3)(3,"h5",28),e._uU(4),e.qZA()(),e.YNc(5,C,5,3,"div",14),e.YNc(6,S,10,9,"div",14),e.qZA(),e.YNc(7,Q,17,10,"div",45),e.TgZ(8,"div"),e._UZ(9,"hr"),e.qZA()()),2&i){const t=o.$implicit,s=e.oxw(2);e.xp6(4),e.Oqu(t.day_name),e.xp6(1),e.Q6J("ngIf",t.closed&&!s.modifySchedule),e.xp6(1),e.Q6J("ngIf",s.modifySchedule),e.xp6(1),e.Q6J("ngIf",!t.closed)}}function O(i,o){if(1&i&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Oqu(t)}}function I(i,o){if(1&i&&(e.TgZ(0,"ul"),e.YNc(1,O,2,1,"li",40),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.message_errors)}}function F(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",70)(1,"div",71)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.TgZ(6,"button",72),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cleanMessage())}),e._UZ(7,"span",73),e.qZA(),e.YNc(8,I,2,1,"ul",20),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,3,"commun_translations.error")),e.xp6(2),e.hij(" ",t.error_message," "),e.xp6(3),e.Q6J("ngIf",t.message_errors.length>0)}}function j(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",70)(1,"div",74)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.TgZ(6,"button",72),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cleanMessage())}),e._UZ(7,"span",73),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,2,"commun_translations.success")),e.xp6(2),e.hij(" ",t.success_message," ")}}function Y(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",75)(1,"div",76)(2,"button",77),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.saveScheduleHours())}),e._uU(3),e.ALo(4,"translate"),e.qZA()()()}2&i&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"commun_translations.save")))}function H(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",78)(1,"a",63),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.openSpecialDayScheduleForm())}),e._UZ(2,"i",64),e.qZA()()}}function D(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td",38),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"td",38),e._uU(5),e.qZA(),e.TgZ(6,"td",79)(7,"div",80)(8,"a",81),e._UZ(9,"i",82),e.qZA(),e.TgZ(10,"div",83)(11,"a",84),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.selectSpecialDay(a,!0))}),e._UZ(12,"i",85),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"a",86),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.selectSpecialDay(a,!1))}),e._UZ(16,"i",87),e._uU(17),e.ALo(18,"translate"),e.qZA(),e._UZ(19,"br"),e.qZA()()()()}if(2&i){const t=o.$implicit;e.xp6(2),e.Oqu(e.xi3(3,4,t.date,"dd/MM/yyyy")),e.xp6(3),e.Oqu(t.information),e.xp6(8),e.hij(" ",e.lcZ(14,7,"commun_translations.view"),""),e.xp6(4),e.hij(" ",e.lcZ(18,9,"commun_translations.remove"),"")}}function E(i,o){1&i&&(e.TgZ(0,"tr")(1,"td",69),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"club_translations.schedule.no_special_schedule")))}function G(i,o){if(1&i&&(e.TgZ(0,"div",3)(1,"div",25)(2,"div",26)(3,"div",27)(4,"h5",28),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.YNc(7,A,3,0,"div",29),e.qZA(),e.TgZ(8,"div",30)(9,"form"),e.YNc(10,L,10,4,"div",31),e.YNc(11,F,9,5,"div",32),e.YNc(12,j,8,4,"div",32),e.YNc(13,Y,5,3,"div",33),e.qZA()()()(),e.TgZ(14,"div",34)(15,"div",26)(16,"div",27)(17,"h5",28),e._uU(18),e.ALo(19,"translate"),e.qZA(),e.YNc(20,H,3,0,"div",35),e.qZA(),e.TgZ(21,"div",30)(22,"div",3)(23,"div",36)(24,"table",37)(25,"thead")(26,"tr",38)(27,"th"),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"th"),e._uU(31),e.ALo(32,"translate"),e.qZA(),e._UZ(33,"th",39),e.qZA()(),e.TgZ(34,"tbody"),e.YNc(35,D,20,11,"tr",40),e.YNc(36,E,4,3,"tr",20),e.qZA()(),e._UZ(37,"br")(38,"br")(39,"br"),e.qZA()()()()()()),2&i){const t=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,12,"club_translations.schedule.title")),e.xp6(2),e.Q6J("ngIf",1==t.can_edit),e.xp6(3),e.Q6J("ngForOf",t.schedule_hour_days),e.xp6(1),e.Q6J("ngIf",""!=t.error_message),e.xp6(1),e.Q6J("ngIf",""!=t.success_message),e.xp6(1),e.Q6J("ngIf",1==t.can_edit),e.xp6(5),e.Oqu(e.lcZ(19,14,"club_translations.schedule.special_days_schedule")),e.xp6(2),e.Q6J("ngIf",1==t.can_edit),e.xp6(8),e.hij("",e.lcZ(29,16,"club_translations.schedule.day")," "),e.xp6(3),e.hij("",e.lcZ(32,18,"club_translations.schedule.info")," "),e.xp6(4),e.Q6J("ngForOf",t.special_days),e.xp6(1),e.Q6J("ngIf",0==t.special_days.length)}}function K(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",99)(2,"div",48)(3,"input",49),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(2);return e.KtG(a.special_day_closed=n)}),e.qZA(),e.TgZ(4,"label",50),e._uU(5,"checkbox"),e.qZA()()(),e.TgZ(6,"div",51)(7,"label"),e._uU(8),e.ALo(9,"translate"),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.special_day_closed)("name",t.special_day_closed)("id",t.special_day_closed)("ngModelOptions",e.DdM(8,d)),e.xp6(1),e.Q6J("for",t.special_day_closed),e.xp6(4),e.Oqu(e.lcZ(9,6,"club_translations.schedule.close_day"))}}function $(i,o){1&i&&(e.TgZ(0,"div",3)(1,"div",100)(2,"label",47),e._uU(3),e.ALo(4,"translate"),e.qZA()()()),2&i&&(e.xp6(3),e.hij("",e.lcZ(4,1,"club_translations.schedule.closed")," "))}function z(i,o){if(1&i&&(e.TgZ(0,"mat-option",65),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.format_hour," ")}}function P(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",53)(1,"div",54)(2,"div",55)(3,"div",56)(4,"label"),e._uU(5),e.ALo(6,"translate"),e.TgZ(7,"span",57),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"mat-select",58),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(3);return e.KtG(a.opening_time=n)}),e.ALo(10,"translate"),e.YNc(11,z,2,2,"mat-option",59),e.qZA()()()()()}if(2&i){const t=e.oxw(3);e.xp6(5),e.hij("",e.lcZ(6,5,"club_translations.schedule.opens_at")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(10,7,"club_translations.schedule.hour")),e.Q6J("ngModel",t.opening_time)("ngModelOptions",e.DdM(9,d)),e.xp6(2),e.Q6J("ngForOf",t.hours)}}function B(i,o){if(1&i&&(e.TgZ(0,"mat-option",65),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.format_hour," ")}}function W(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",25)(1,"div",54)(2,"div",103)(3,"div",61)(4,"div",62)(5,"label"),e._uU(6),e.ALo(7,"translate"),e.TgZ(8,"span",57),e._uU(9,"*"),e.qZA()(),e.TgZ(10,"mat-select",58),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw(3);return e.KtG(a.closing_time=n)}),e.ALo(11,"translate"),e.YNc(12,B,2,2,"mat-option",59),e.qZA(),e.TgZ(13,"a",63),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.addHourSpecialDay())}),e._UZ(14,"i",64),e.qZA()()()()()()}if(2&i){const t=e.oxw(3);e.xp6(6),e.hij("",e.lcZ(7,5,"club_translations.schedule.closes_at")," "),e.xp6(4),e.s9C("placeholder",e.lcZ(11,7,"club_translations.schedule.hour")),e.Q6J("ngModel",t.closing_time)("ngModelOptions",e.DdM(9,d)),e.xp6(2),e.Q6J("ngForOf",t.hours)}}function X(i,o){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,P,12,10,"div",101),e.YNc(2,W,15,10,"div",102),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.special_day_selected),e.xp6(1),e.Q6J("ngIf",!t.special_day_selected)}}function R(i,o){1&i&&(e.TgZ(0,"th",39),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.hij("",e.lcZ(2,1,"commun_translations.remove")," "))}function V(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"a",63),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().index,a=e.oxw(3);return e.KtG(a.deleteSpecialHourSchedule(n))}),e._UZ(1,"i",68),e.qZA()}}function ee(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td",39),e._uU(2),e.qZA(),e.TgZ(3,"td",39),e._uU(4),e.qZA(),e.TgZ(5,"td",67),e.YNc(6,V,2,0,"a",105),e.qZA()()),2&i){const t=o.$implicit,s=e.oxw(3);e.xp6(2),e.hij("",t.opening_time," h"),e.xp6(2),e.hij("",t.closing_time," h"),e.xp6(2),e.Q6J("ngIf",!s.special_day_selected)}}function te(i,o){1&i&&(e.TgZ(0,"tr")(1,"td",69),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"club_translations.schedule.no_schedule_for")," "))}function ie(i,o){if(1&i&&(e.TgZ(0,"div",3)(1,"div",36)(2,"table",37)(3,"thead")(4,"tr",39)(5,"th"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"th"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.YNc(11,R,3,3,"th",104),e.qZA()(),e.TgZ(12,"tbody"),e.YNc(13,ee,7,3,"tr",40),e.YNc(14,te,4,3,"tr",20),e.qZA()()()()),2&i){const t=e.oxw(2);e.xp6(6),e.hij("",e.lcZ(7,5,"club_translations.schedule.opens_at")," "),e.xp6(3),e.hij("",e.lcZ(10,7,"club_translations.schedule.closes_at")," "),e.xp6(2),e.Q6J("ngIf",!t.special_day_selected),e.xp6(2),e.Q6J("ngForOf",t.schedule_hour_special_day),e.xp6(1),e.Q6J("ngIf",0==t.schedule_hour_special_day.length)}}function se(i,o){if(1&i&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Oqu(t)}}function ne(i,o){if(1&i&&(e.TgZ(0,"ul"),e.YNc(1,se,2,1,"li",40),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.message_errors)}}function oe(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",70)(1,"div",71)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.TgZ(6,"button",72),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cleanMessage())}),e._UZ(7,"span",73),e.qZA(),e.YNc(8,ne,2,1,"ul",20),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,3,"commun_translations.error")),e.xp6(2),e.hij(" ",t.error_special_day_message," "),e.xp6(3),e.Q6J("ngIf",t.message_special_day_errors.length>0)}}function ae(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",70)(1,"div",74)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5),e.TgZ(6,"button",72),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cleanMessage())}),e._UZ(7,"span",73),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,2,"commun_translations.success")),e.xp6(2),e.hij(" ",t.success_special_day_message," ")}}function le(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"button",109),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.saveSpecialDay())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"commun_translations.save")))}function ce(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",106)(1,"div",76)(2,"button",107),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.closeSpecialDayScheduleForm())}),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5,"\xa0 "),e.YNc(6,le,3,3,"button",108),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,2,"commun_translations.come_back")),e.xp6(3),e.Q6J("ngIf",!t.special_day_selected)}}function _e(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",26)(3,"div",88)(4,"div",89)(5,"div",90)(6,"div",91)(7,"h4"),e._uU(8),e.ALo(9,"translate"),e.qZA()()(),e.TgZ(10,"div",92)(11,"div",56)(12,"label"),e._uU(13),e.ALo(14,"translate"),e.TgZ(15,"span",57),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",93),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.special_day=n)}),e.qZA(),e._UZ(18,"mat-datepicker",null,94)(20,"mat-datepicker-toggle",95),e.qZA()(),e.TgZ(21,"div",92)(22,"div",56)(23,"label"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"input",96),e.NdJ("ngModelChange",function(n){e.CHM(t);const a=e.oxw();return e.KtG(a.info=n)}),e.qZA()()(),e.YNc(27,K,10,9,"div",14),e.YNc(28,$,5,3,"div",14),e.TgZ(29,"div",97)(30,"div",52),e.YNc(31,X,3,2,"div",14),e.YNc(32,ie,15,9,"div",14),e.YNc(33,oe,9,5,"div",32),e.YNc(34,ae,8,4,"div",32),e.YNc(35,ce,7,4,"div",98),e.qZA()()()()()()()}if(2&i){const t=e.MAs(19),s=e.oxw();e.xp6(8),e.Oqu(e.lcZ(9,14,"club_translations.schedule.special_days_by")),e.xp6(5),e.hij("",e.lcZ(14,16,"club_translations.schedule.day")," "),e.xp6(4),e.Q6J("ngModel",s.special_day)("matDatepicker",t),e.xp6(3),e.Q6J("for",t),e.xp6(4),e.Oqu(e.lcZ(25,18,"club_translations.schedule.info")),e.xp6(2),e.Q6J("ngModel",s.info),e.xp6(1),e.Q6J("ngIf",!s.special_day_selected),e.xp6(1),e.Q6J("ngIf",s.special_day_selected&&s.special_day_closed),e.xp6(3),e.Q6J("ngIf",!s.special_day_closed),e.xp6(1),e.Q6J("ngIf",!s.special_day_closed),e.xp6(1),e.Q6J("ngIf",""!=s.error_special_day_message),e.xp6(1),e.Q6J("ngIf",""!=s.success_special_day_message),e.xp6(1),e.Q6J("ngIf",1==s.can_edit)}}function de(i,o){if(1&i&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij("Est\xe1s seguro de borrar el d\xeda ",e.xi3(2,1,t.special_day_selected.date,"dd/MM/yyyy"),"?")}}const re=[{path:"",component:(()=>{const o=class{constructor(s,n,a){this.clubSrv=s,this.translate=n,this.routes=v._,this.modifySchedule=!0,this.hours=[],this.schedule_hour_days=[],this.schedule_hour_special_day=[],this.error_message="",this.success_message="",this.message_errors=[],this.flag=!0,this.isLoaded=!1,this.can_edit=!1,this.translations=[],this.special_day_schedule_form=!1,this.special_day="",this.info="",this.special_days=[],this.error_special_day_message="",this.message_special_day_errors=[],this.success_special_day_message="","es"==this.clubSrv.authSrv.language&&(a.getFirstDayOfWeek=()=>1)}ngOnInit(){this.initializeLanguage(),this.user=this.clubSrv.authSrv.user,this.hasPermission(),this.clubSrv.config().subscribe(s=>{this.hours=s.hours_days}),this.clubSrv.getClubSchedule().subscribe(s=>{this.isLoaded=!0,s.club_data&&(this.club=s.club_data,this.club.schedule_week_hours.length>0&&(this.modifySchedule=!1,this.schedule_hour_days=this.club.schedule_week_hours,this.special_days=this.club.special_days_schedule,this.schedule_hour_days.forEach(n=>{n.day_name=this.translations.commun_translations[n.day_id]})))})}initializeLanguage(){this.translate.use(this.clubSrv.authSrv.language),this.translate.setDefaultLang(this.clubSrv.authSrv.language),this.translate.get(["commun_translations","club_translations.schedule","club_translations.club_information_messages"]).subscribe(s=>{this.translations=s,this.schedule_hour_days=[{day_id:"day_1",day_name:this.translations.commun_translations.day_1,closed:!1,hours:[]},{day_id:"day_2",day_name:this.translations.commun_translations.day_2,closed:!1,hours:[]},{day_id:"day_3",day_name:this.translations.commun_translations.day_3,closed:!1,hours:[]},{day_id:"day_4",day_name:this.translations.commun_translations.day_4,closed:!1,hours:[]},{day_id:"day_5",day_name:this.translations.commun_translations.day_5,closed:!1,hours:[]},{day_id:"day_6",day_name:this.translations.commun_translations.day_6,closed:!1,hours:[]},{day_id:"day_7",day_name:this.translations.commun_translations.day_7,closed:!1,hours:[]}]})}hasPermission(s=""){return(this.user.role.includes("Super-Admin")||!!this.user.permissions.includes("edit_club"))&&(this.can_edit=!0,!0)}activateModifySchedule(){this.modifySchedule=!0}deleteHourSchedule(s,n){let a=this.schedule_hour_days.findIndex(c=>c.day_id==n);-1!=a&&this.schedule_hour_days[a].hours.splice(s,1)}cleanMessage(){this.error_message="",this.success_message="",this.message_errors=[]}addHourSchedule(s){if(this.opening_time>this.closing_time)return void m().fire({title:"Error",text:this.error_message=this.translations["club_translations.schedule"].error_1,icon:"warning"});let n={opening_time_id:this.opening_time,closing_time_id:this.closing_time,opening_time:this.hours[this.opening_time-2].format_hour,closing_time:this.hours[this.closing_time-2].format_hour},a=this.schedule_hour_days.findIndex(c=>c.day_name==s);-1!=a&&(this.schedule_hour_days[a].hours.push(n),this.schedule_hour_days[a].hours.sort((c,ge)=>c.opening_time_id-ge.opening_time_id))}addHourSpecialDay(){this.opening_time>this.closing_time?m().fire({title:"Error",text:this.error_message=this.translations["club_translations.schedule"].error_1,icon:"warning"}):(this.schedule_hour_special_day.push({opening_time_id:this.opening_time,closing_time_id:this.closing_time,opening_time:this.hours[this.opening_time-2].format_hour,closing_time:this.hours[this.closing_time-2].format_hour}),this.schedule_hour_special_day.sort((n,a)=>n.opening_time_id-a.opening_time_id),console.log(this.schedule_hour_special_day),this.opening_time="",this.closing_time="")}deleteSpecialHourSchedule(s){this.schedule_hour_special_day.splice(s,1)}saveSpecialDay(){if(this.cleanMessage(),""==this.special_day)return void(this.error_special_day_message=this.error_message=this.translations["club_translations.schedule"].error_2);if(!this.info)return void(this.error_special_day_message="Introduce informaci\xf3n del cambio de horario para este d\xeda");if(this.info&&this.info.length>191)return void(this.error_special_day_message="La informaci\xf3n no puede ser mas de 191 caracteres");this.schedule_hour_special_day.forEach(n=>{if(n.opening_time_id>=n.closing_time_id)return this.error_message=this.translations["club_translations.schedule"].error_1,void(this.flag=!1)});let s=new FormData;s.append("date",this.special_day),s.append("information",this.info),s.append("schedule_hour",JSON.stringify(this.schedule_hour_special_day)),s.append("closed",this.special_day_closed?"1":"0"),this.clubSrv.storeSpecialDaySechedule(s).subscribe(n=>{200==n.message?(this.success_special_day_message=this.translations.commun_translations.data_save_correctly,this.special_days.push(n.special_day)):422==n.message?(this.error_special_day_message=this.translations.commun_translations.data_save_error,this.message_special_day_errors=n.errors_text):this.error_special_day_message=this.translations.commun_translations.data_save_error+" "+this.translations.commun_translations.consult_admin})}selectSpecialDay(s,n){this.special_day_selected=s,this.special_day=s.date,this.info=s.information,this.schedule_hour_special_day=s.hours,this.special_day_closed=s.closed,this.special_day_schedule_form=n}removeSpecialDay(){this.clubSrv.deleteSpecialDaySechedule(this.special_day_selected.id).subscribe(s=>{if(200==s.message){let n=this.special_days.findIndex(a=>a.id==this.special_day_selected.id);-1!=n&&(this.special_days.splice(n,1),this.closebutton.nativeElement.click(),this.special_day_selected=null)}else console.log(s)})}saveScheduleHours(){this.cleanMessage(),this.schedule_hour_days.forEach(n=>{n.hours.forEach(a=>{if(a.opening_time_id>=a.closing_time_id)return this.error_message=this.translations["club_translations.schedule"].error_1,void(this.flag=!1)})});let s=new FormData;this.flag&&(s.append("schedule_hour",JSON.stringify(this.schedule_hour_days)),this.clubSrv.storeWeeklyScheduleClub(s).subscribe(n=>{200==n.message?this.success_message=this.translations.commun_translations.data_save_correctly:422==n.message?(this.error_message=this.translations.commun_translations.reservation_at_old_hours,this.message_errors=n.errors_text):this.error_message=this.translations.commun_translations.data_save_error+" "+this.translations.commun_translations.consult_admin}))}openSpecialDayScheduleForm(){this.special_day_selected=null,this.special_day="",this.info="",this.schedule_hour_special_day=[],this.special_day_closed=null,this.special_day_schedule_form=!0}closeSpecialDayScheduleForm(){this.special_day="",this.info="",this.schedule_hour_special_day=[],this.special_day_closed=0,this.special_day_schedule_form=!1}};let i=o;return o.\u0275fac=function(n){return new(n||o)(e.Y36(Z.I),e.Y36(g.sK),e.Y36(f._A))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-schedule"]],viewQuery:function(n,a){if(1&n&&e.Gf(T,5),2&n){let c;e.iGM(c=e.CRH())&&(a.closebutton=c.first)}},decls:54,vars:33,consts:[[1,"page-wrapper"],[1,"content"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"breadcrumb-item"],[1,"feather","icon-chevron-right"],[1,"settings-menu-links"],[1,"nav","nav-tabs","menu-tabs"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"nav-item","active"],["class","row",4,"ngIf"],["id","delete_special_day_modal","role","dialog",1,"modal","fade","delete-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-body","text-center"],["src","assets/img/sent.png","alt","","width","50","height","46"],[4,"ngIf"],[1,"m-t-20"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-white","me-1"],["closebutton",""],["type","submit",1,"btn","btn-danger",3,"click"],[1,"col-md-7"],[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-title"],["class","status-toggle d-flex justify-content-between align-items-center ",4,"ngIf"],[1,"card-body","pt-0","my-4"],["class","row",4,"ngFor","ngForOf"],["class","col-md-12 my-4",4,"ngIf"],["class","form-group mb-0 text-end",4,"ngIf"],[1,"col-12","col-md-4","col-xl-4"],["class","status-toggle d-flex justify-content-between align-items-center settings-form",4,"ngIf"],[1,"table-responsive"],[1,"table","table-hover","mb-0"],[1,"text-start"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"status-toggle","d-flex","justify-content-between","align-items-center"],["href","javascript:void(0);",3,"click"],[1,"icon-edit-schedule","fa-solid","fa-pen"],[1,"col-md-4"],["class","col-md-6",4,"ngIf"],[1,"col-md-3","text-end"],[1,"margin-closed"],[1,"status-toggle"],["type","checkbox",1,"check",3,"ngModel","name","id","ngModelOptions","ngModelChange"],[1,"checktoggle",3,"for"],[1,"col-md-3"],[1,"col-md-6"],[1,"col-md-5"],[1,"settings-form"],[1,"form-group"],[1,"form-group","local-forms"],[1,"login-danger"],[1,"form-control","select",3,"ngModel","ngModelOptions","placeholder","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","links-info"],[1,"links-cont"],[1,"form-group","local-forms","form-placeholder","d-flex"],["href","javascript:void(0);",1,"btn","trash",3,"click"],[1,"fa","fa-plus","me-1"],[3,"value"],["class","settings-form text-center",4,"ngIf"],[1,"settings-form","text-center"],[1,"feather","icon-trash-2"],["colspan","3",1,"text-center"],[1,"col-md-12","my-4"],["role","alert",1,"alert","alert-warning","alert-dismissible","fade","show"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["aria-hidden","true"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show"],[1,"form-group","mb-0","text-end"],[1,"settings-btns"],["type","submit",1,"border-0","btn","btn-primary","btn-gradient-primary","btn-rounded",3,"click"],[1,"status-toggle","d-flex","justify-content-between","align-items-center","settings-form"],[1,"text-end"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fa","fa-ellipsis-v"],[1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item","cursor-pointer",3,"click"],[1,"fa-solid","fa-eye","m-r-5"],["href","#","onclick","return false;","data-bs-toggle","modal","data-bs-target","#delete_special_day_modal",1,"dropdown-item",3,"click"],[1,"fa","fa-trash-alt","m-r-5"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-12"],[1,"form-heading"],[1,"col-12","col-md-3","col-xl-3"],["name","special_day","type","text","placeholder","","matInput","",1,"form-control","datetimepicker",3,"ngModel","matDatepicker","ngModelChange"],["picker",""],["matIconSuffix","",3,"for"],["name","info","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","my-4"],["class","form-group mb-0 text-end my-4",4,"ngIf"],[1,"col-md-1","text-end"],[1,"col-md-3","text-start"],["class","col-md-5",4,"ngIf"],["class","col-md-7",4,"ngIf"],[1,"form-group","links-info","settings-form"],["class","text-center",4,"ngIf"],["href","javascript:void(0);","class","btn trash",3,"click",4,"ngIf"],[1,"form-group","mb-0","text-end","my-4"],[1,"btn","btn-primary","cancel-form",3,"click"],["type","submit","class","border-0 btn btn-primary ",3,"click",4,"ngIf"],["type","submit",1,"border-0","btn","btn-primary",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"li",7),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"li",6),e._uU(12),e.ALo(13,"translate"),e.qZA()()()()(),e.TgZ(14,"div",9)(15,"ul",10)(16,"li",11)(17,"a",12),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"li",11)(21,"a",12),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e.TgZ(24,"li",13)(25,"a",12),e._uU(26),e.ALo(27,"translate"),e.qZA()(),e.TgZ(28,"li",11)(29,"a",12),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e.TgZ(32,"li",11)(33,"a",12),e._uU(34),e.ALo(35,"translate"),e.qZA()(),e.TgZ(36,"li",11)(37,"a",12),e._uU(38),e.ALo(39,"translate"),e.qZA()()()(),e.YNc(40,G,40,20,"div",14),e.YNc(41,_e,36,20,"div",14),e.qZA()(),e.TgZ(42,"div",15)(43,"div",16)(44,"div",17)(45,"div",18),e._UZ(46,"img",19),e.YNc(47,de,3,4,"h3",20),e.TgZ(48,"div",21)(49,"a",22,23),e._uU(51,"Cerrar"),e.qZA(),e.TgZ(52,"button",24),e.NdJ("click",function(){return a.removeSpecialDay()}),e._uU(53,"Borrar"),e.qZA()()()()()()),2&n&&(e.xp6(7),e.Oqu(e.lcZ(8,17,"club_translations.dashboard")),e.xp6(5),e.Oqu(e.lcZ(13,19,"club_translations.club")),e.xp6(5),e.Q6J("routerLink",a.routes.club),e.xp6(1),e.Oqu(e.lcZ(19,21,"club_translations.tabs.general_data")),e.xp6(3),e.Q6J("routerLink",a.routes.description),e.xp6(1),e.Oqu(e.lcZ(23,23,"club_translations.tabs.description")),e.xp6(3),e.Q6J("routerLink",a.routes.localizationDetails),e.xp6(1),e.Oqu(e.lcZ(27,25,"club_translations.tabs.schedule")),e.xp6(3),e.Q6J("routerLink",a.routes.clubCourts),e.xp6(1),e.Oqu(e.lcZ(31,27,"club_translations.tabs.courts")),e.xp6(3),e.Q6J("routerLink",a.routes.clubServices),e.xp6(1),e.Oqu(e.lcZ(35,29,"club_translations.tabs.services")),e.xp6(3),e.Q6J("routerLink",a.routes.clubSocialLinks),e.xp6(1),e.Oqu(e.lcZ(39,31,"club_translations.tabs.social_links")),e.xp6(2),e.Q6J("ngIf",a.isLoaded&&0==a.special_day_schedule_form),e.xp6(1),e.Q6J("ngIf",1==a.special_day_schedule_form),e.xp6(6),e.Q6J("ngIf",a.special_day_selected))},dependencies:[r.sg,r.O5,u.rH,_._Y,_.Fj,_.Wl,_.JJ,_.JL,_.On,_.F,h.Mq,h.hl,h.nW,y.R9,b.gD,f.ey,r.uU,g.X$],styles:["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{align-items:center;font-weight:400;vertical-align:middle}.icon-edit-schedule[_ngcontent-%COMP%]{align-items:center;height:42px;width:46px;display:flex;justify-content:center;-webkit-justify-content:center;-ms-flex-pack:center;background-color:#fff;color:#0009;position:relative;font-size:16px;margin-left:6px}.margin-closed[_ngcontent-%COMP%]{margin-left:3rem}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),i})()}];let ue=(()=>{const o=class{};let i=o;return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(re),u.Bz]}),i})();var he=l(80529),pe=l(25108);let me=(()=>{const o=class{};let i=o;return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,ue,_.u5,_.UX,he.JF,u.Bz,pe.m]}),i})()}}]);