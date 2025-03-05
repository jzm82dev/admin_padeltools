"use strict";(self.webpackChunkpreclinic_angular=self.webpackChunkpreclinic_angular||[]).push([[1399],{49533:(A,h,n)=>{n.d(h,{s:()=>q});var u=n(46382),a=n(94650),e=n(30027),Z=n(96519),_=n(40866),c=n(36895),p=n(42466),m=n(89183);function s(v,l){1&v&&(a.TgZ(0,"div",37)(1,"div",38)(2,"div",39),a._UZ(3,"span",40)(4,"span",40)(5,"span",40)(6,"span",40),a.qZA()()())}const o=function(){return["/cookie-policy"]},i=function(){return["/login"]};let q=(()=>{const l=class{constructor(r,g,t,d,b,U,F){this.router=r,this.sideBar=g,this.authSrv=t,this.location=d,this.translate=b,this.clubSrv=U,this.viewportScroller=F,this.routes=u._,this.openBox=!1,this.miniSidebar=!1,this.addClass=!1,this.language_selected="en",this.code_language="es",this.active_languages=[{name:"Espa\xf1ol",logo:"./assets/img/spain.png",code:"es"},{name:"English",logo:"assets/img/uk.png",code:"en"}],this.translations=[],this.loaded=!1,this.scroll=()=>{var f=document.getElementById("menu-nav-bar");let E;E=window.innerWidth<350?150:window.innerWidth<500&&window.innerWidth>350?250:window.innerWidth<700&&window.innerWidth>500?350:window.innerWidth<1e3&&window.innerWidth>700?500:650,window.scrollY>=E&&null!=f?f.classList.add("fixed-header"):window.scrollY<E&&null!=f&&f.classList.remove("fixed-header")},this.sideBar.toggleSideBar.subscribe(f=>{this.miniSidebar="true"==f}),this.user=t.user}scrollToAnchroingPosition(r){if(!document.getElementById(r)){var t=location.href;location.href="#",history.replaceState(null,"",t)}this.viewportScroller.scrollToAnchor(r),document.getElementById("menu-nav-bar")?.classList.add("fixed-header");var b=document.getElementById("navbar-menu");null!=b&&b.classList.contains("show-menu-mobile")&&b.classList.remove("show-menu-mobile")}openMenu(){var r=document.getElementById("navbar-menu");null!=r&&r.classList.contains("show-menu-mobile")?r.classList.remove("show-menu-mobile"):r?.classList.add("show-menu-mobile")}ngOnInit(){let r=this.location.path(),g=document.querySelector("#modal-cookie");localStorage.getItem("cookieAccepted"),setTimeout(function(){"yes"!=localStorage.getItem("cookieAccepted")&&0==r.includes("cookie-policy")&&g?.classList.add("active")},2e3),this.initializeLanguage(),window.addEventListener("scroll",this.scroll,!0),this.translate.addLangs(["es","en","fr","de"]),this.translate.setDefaultLang(this.clubSrv.authSrv.language),this.translate.use(this.clubSrv.authSrv.language),this.default_flag_language="es"==this.clubSrv.authSrv.language?this.active_languages[1]:this.active_languages[0],this.loaded=!0}initializeLanguage(){this.translate.get(["home_page"]).subscribe(r=>{this.translations=r})}changeLanguage(r){localStorage.setItem("language",r),this.translate.use(r),this.translate.setDefaultLang(r),this.initializeLanguage(),this.clubSrv.authSrv.language=r,"es"==r?(localStorage.setItem("language",r),this.default_flag_language=this.active_languages[1],this.router.navigate([""])):(localStorage.setItem("language",r),this.default_flag_language=this.active_languages[0],this.router.navigate(["/en"]))}acceptCookie(){document.querySelector("#modal-cookie")?.classList.remove("active"),localStorage.setItem("cookieAccepted","yes")}};let v=l;return l.\u0275fac=function(g){return new(g||l)(a.Y36(e.F0),a.Y36(Z.G),a.Y36(_.e),a.Y36(c.Ye),a.Y36(p.sK),a.Y36(m.I),a.Y36(c.EM))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-home-header"]],decls:81,vars:26,consts:[["id","loader-wrapper",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],["id","modal-cookie",1,"cookie-consent-modal"],[1,"content-cookie"],["target","_blank",3,"routerLink"],[1,"btns"],[1,"btn","cancel"],["id","accetp_cookie",1,"btn","accept",3,"click"],[1,"top-header"],[1,"col-md-6"],[1,"list-inline-items","d-flex"],["href","tel:+34 640963295",1,"contact_list"],["aria-hidden","true",1,"la","la-phone"],[1,"col-md-6","text-right"],[1,"list-inline-item","list-unstyled","m-0"],[1,"list-inline-items"],["href","mailto:contact@weloveracket.com",1,"contact_list"],["aria-hidden","true",1,"la","la-envelope"],["href","mailto:support@weloveracket.com",1,"contact_list"],["href","javascript:void(0);",3,"click"],[1,"flag-size",3,"src","alt"],["id","home",1,"header"],["id","menu-nav-bar",1,"navbar","navbar-expand-md","home-menu"],[1,"container"],["type","button",1,"navbar-toggler",3,"click"],[1,"la","la-bars"],["id","navbar-menu",1,"collapse","navbar-collapse"],[1,"nav","navbar-nav","ml-auto"],[1,"nav-item"],["href","#home",1,"smooth-menu","nav-link"],[1,"smooth-menu","nav-link",3,"click"],[1,"nav-btn"],[1,"download-btn",3,"routerLink"],[1,"text-right","show-language"],["alt","Admin",1,"flag-size",3,"src"],["id","loader-wrapper"],["id","loader"],[1,"loader-ellips"],[1,"loader-ellips__dot"]],template:function(g,t){1&g&&(a.YNc(0,s,7,0,"div",0),a.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),a._uU(7,"Permitir cookies"),a.qZA(),a.TgZ(8,"p"),a._uU(9,"Esta web utiliza cookies propias para su correcto funcionamiento. Contiene enlaces a sitios web de terceros con pol\xedticas de privacidad ajenas que podr\xe1s aceptar o no cuando accedas a ellos. Al hacer clic en el bot\xf3n Aceptar, acepta el uso de estas tecnolog\xedas y el procesamiento de tus datos para estos prop\xf3sitos. M\xe1s informaci\xf3n "),a.TgZ(10,"a",6),a._uU(11," aqu\xed"),a.qZA(),a._uU(12,"."),a.qZA(),a.TgZ(13,"div",7)(14,"button",8),a._uU(15,"cancel"),a.qZA(),a.TgZ(16,"button",9),a.NdJ("click",function(){return t.acceptCookie()}),a._uU(17,"Accept"),a.qZA()()()()()()(),a.TgZ(18,"div",10)(19,"div",1)(20,"div",2)(21,"div",11)(22,"div",12)(23,"a",13),a._UZ(24,"i",14),a._uU(25,"+34 640 963 295"),a.qZA()()(),a.TgZ(26,"div",15)(27,"ul",16)(28,"li",17)(29,"a",18),a._UZ(30,"i",19),a._uU(31,"contact@weloveracket.com"),a.qZA()(),a.TgZ(32,"li")(33,"span"),a._uU(34,"|"),a.qZA()(),a.TgZ(35,"li",17)(36,"a",20),a._UZ(37,"i",19),a._uU(38,"support@weloveracket.com"),a.qZA()(),a.TgZ(39,"li")(40,"span"),a._uU(41,"|"),a.qZA()(),a.TgZ(42,"li",17)(43,"a",21),a.NdJ("click",function(){return t.changeLanguage(t.default_flag_language.code)}),a.TgZ(44,"span"),a._UZ(45,"img",22),a.qZA()()()()()()()(),a.TgZ(46,"header",23)(47,"nav",24)(48,"div",25)(49,"button",26),a.NdJ("click",function(){return t.openMenu()}),a._UZ(50,"i",27),a.qZA(),a.TgZ(51,"div",28)(52,"ul",29)(53,"li",30)(54,"a",31),a._uU(55),a.ALo(56,"translate"),a.qZA()(),a.TgZ(57,"li",30)(58,"a",32),a.NdJ("click",function(){return t.scrollToAnchroingPosition("clubs")}),a._uU(59),a.ALo(60,"translate"),a.qZA()(),a.TgZ(61,"li",30)(62,"a",32),a.NdJ("click",function(){return t.scrollToAnchroingPosition("players")}),a._uU(63),a.ALo(64,"translate"),a.qZA()(),a.TgZ(65,"li",30)(66,"a",32),a.NdJ("click",function(){return t.scrollToAnchroingPosition("about")}),a._uU(67),a.ALo(68,"translate"),a.qZA()(),a.TgZ(69,"li",30)(70,"a",32),a.NdJ("click",function(){return t.scrollToAnchroingPosition("overview")}),a._uU(71),a.ALo(72,"translate"),a.qZA()()(),a.TgZ(73,"div",33)(74,"a",34),a._uU(75),a.ALo(76,"translate"),a.qZA()()(),a.TgZ(77,"div",35)(78,"a",21),a.NdJ("click",function(){return t.changeLanguage(t.default_flag_language.code)}),a.TgZ(79,"span"),a._UZ(80,"img",36),a.qZA()()()()()()),2&g&&(a.Q6J("ngIf",0==t.loaded),a.xp6(10),a.Q6J("routerLink",a.DdM(24,o)),a.xp6(35),a.Q6J("src",t.default_flag_language.logo,a.LSH)("alt",t.default_flag_language.code),a.xp6(10),a.Oqu(a.lcZ(56,12,"home_page.home")),a.xp6(4),a.Oqu(a.lcZ(60,14,"home_page.clubs")),a.xp6(4),a.Oqu(a.lcZ(64,16,"home_page.players")),a.xp6(4),a.Oqu(a.lcZ(68,18,"home_page.examples")),a.xp6(4),a.Oqu(a.lcZ(72,20,"home_page.pages")),a.xp6(3),a.Q6J("routerLink",a.DdM(25,i)),a.xp6(1),a.Oqu(a.lcZ(76,22,"home_page.login")),a.xp6(5),a.Q6J("src",t.default_flag_language.logo,a.LSH))},dependencies:[c.O5,e.rH,p.X$]}),v})()},89183:(A,h,n)=>{n.d(h,{I:()=>_});var u=n(80529),a=n(75862),e=n(94650),Z=n(40866);let _=(()=>{const p=class{constructor(s,o){this.http=s,this.authSrv=o}listClubs(s=1,o=""){let i=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs?page="+s+"&search="+o,{headers:i})}getClub(s){let o=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/"+s,{headers:o})}storeDataClub(s){let o=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs",s,{headers:o})}storeWeeklyScheduleClub(s){let o=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/updateWeekly",s,{headers:o})}getClubProfile(){let s=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/profile",{headers:s})}editClub(s,o){let i=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.post(a.$g+"/clubs/update/"+s,o,{headers:i})}deleteClub(s){let o=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.delete(a.$g+"/clubs/"+s,{headers:o})}config(){let s=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/config",{headers:s})}getPendingMembers(){let s=new u.WM({Authorization:"Bearer "+this.authSrv.token});return this.http.get(a.$g+"/clubs/pending-members",{headers:s})}};let c=p;return p.\u0275fac=function(o){return new(o||p)(e.LFG(u.eN),e.LFG(Z.e))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),c})()},61399:(A,h,n)=>{n.r(h),n.d(h,{TermsAndConditionModule:()=>s});var u=n(36895),a=n(30027),e=n(94650),Z=n(49533);const c=[{path:"",component:(()=>{const i=class{};let o=i;return i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-terms-and-condition"]],decls:196,vars:0,consts:[["id","home",1,"main-wrapper"],[1,"hero-section","auto-height","text-center"],[1,"container"],[1,"hero-wrap"],[1,"content","content-policy","text-start"]],template:function(l,L){1&l&&(e.TgZ(0,"div",0),e._UZ(1,"app-home-header"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h1"),e._uU(7,"T\xe9rminos y condiciones"),e.qZA(),e.TgZ(8,"p"),e._uU(9," El presente aviso legal regula los t\xe9rminos y condiciones de uso as\xed como la pol\xedtica de privacidad de la p\xe1gina web www.weloveracket.com, de la que es responsable Jorge Zancada, DNI. 76261665J, (en lo sucesivo WeLoveRacket) con direcci\xf3n en C/ Rector Jos\xe9 Vida Soria N\xba8 A2, 4\xbaA, Motril, Granada, 18613 Tel\xe9fono: +34 640 963 295. Correo electr\xf3nico support@weloveracket.com "),e.qZA(),e.TgZ(10,"p"),e._uU(11,' La utilizaci\xf3n de la p\xe1gina web le atribuye la condici\xf3n de usuario de la misma (en adelante, "el Usuario") e implica la aceptaci\xf3n plena y sin reservas de todas y cada una de las disposiciones incluidas en los presentes T\xe9rminos y Condiciones, publicados, por WeLoveRacket en el momento en el que el Usuario acceda a la web. En consecuencia, se recomienda al Usuario la lectura peri\xf3dica de las mismas, ya que pueden estar sujetas a modificaciones para adaptarlas a novedades legislativas y jurisprudenciales, circunstancia de la que se informar\xeda previamente. '),e.qZA(),e.TgZ(12,"p"),e._uU(13," El Usuario se compromete a utilizar el Portal, los Servicios, los Contenidos y estas Condiciones Generales de conformidad con la ley, la moral, las buenas costumbres y el orden p\xfablico. Se obliga a usar el Portal, los Servicios y los Contenidos de forma diligente, correcta y l\xedcita. "),e.qZA(),e.TgZ(14,"h3"),e._uU(15,"1. Descripci\xf3n del servicio"),e.qZA(),e.TgZ(16,"p"),e._uU(17," WeLoveRacket es una aplicaci\xf3n web dedicada a los clubs de deporte y jugadores que ofrece un espacio en el cual: "),e.qZA(),e.TgZ(18,"p")(19,"b"),e._uU(20,"Los clubes"),e.qZA(),e._uU(21," pueden gestionar sus pistas, realizar reservas, administrar monitores y sus clases impartidas, crear ligas y torneos y la administraci\xf3n de ellos "),e.qZA(),e.TgZ(22,"p")(23,"b"),e._uU(24,"Los jugadores"),e.qZA(),e._uU(25," podr\xe1n registrarse y una vez registrados tendr\xe1n derecho a apuntarse en sus clubs y reservar pistas directamente ellos mismo a trav\xe9s de WeLoveRacket sin gasto alguno de gesti\xf3n. "),e.qZA(),e.TgZ(26,"h3"),e._uU(27,"2. Edad m\xednima para ser usuario"),e.qZA(),e.TgZ(28,"p"),e._uU(29," La utilizaci\xf3n de los servicios ofrecidos en WeLoveRacket requiere que el Usuario haya cumplido, al menos, los 14 (catorce) a\xf1os de edad. Bajo ning\xfan concepto y bajo ninguna excepci\xf3n estar\xe1 permitida la participaci\xf3n en cualquiera de los servicios ofrecidos por WeLoveRacket a los menores de 14 a\xf1os, ni siquiera utilizando la cuenta de un Usuario registrado correctamente (mayor de 14 a\xf1os), salvo que cuenten con autorizaci\xf3n expresa de sus padres o tutores, la cual deber\xe1 ser remitida, junto con una fotocopia de sus DNI. "),e.qZA(),e.TgZ(30,"h3"),e._uU(31,"3. Car\xe1cter gratuito de los servicios prestados en la web para jugadores"),e.qZA(),e.TgZ(32,"p"),e._uU(33," Los servicios que WeLoveRacket pone a disposici\xf3n de los Jugadores tienen car\xe1cter gratuito, no existiendo ning\xfan servicio Premium que requiera un coste para los Jugadores. "),e.qZA(),e.TgZ(34,"h3"),e._uU(35,"4. Car\xe1cter premium de los servicios prestados en la web para clubes"),e.qZA(),e.TgZ(36,"p"),e._uU(37," Los servicios que WeLoveRacket pone a disposici\xf3n de los Clubes tendr\xe1n un coste a\xfan por definir. Sus dos tipos de suscripciones (Basic y Premium) tendr\xe1n un coste de XX\u20ac de la primera y YY\u20ac de la segunda que se les cobrar\xe1 mensualmente, una vez se haya subscrito, cuando se le acabe el periodo de pruebas. Toda subscripci\xf3n no tiene permanencia y podr\xe1 ser cancelada en el momento que se desee. "),e.qZA(),e.TgZ(38,"h3"),e._uU(39,"5. Registro"),e.qZA(),e.TgZ(40,"p"),e._uU(41," Para poder participar en la comunidad de WeLoveRacket como "),e.TgZ(42,"b"),e._uU(43,"jugador"),e.qZA(),e._uU(44," es necesario el registro como usuario de la p\xe1gina, para lo que solicitaremos nombre y apellidos, correo electr\xf3nico, tel\xe9fono, contrase\xf1a. Posteriormente podr\xe1s incluir m\xe1s datos en opci\xf3n de perfil, donde podr\xe1s incluir voluntariamente m\xe1s informaci\xf3n. "),e.qZA(),e.TgZ(45,"p"),e._uU(46," Para poder participar en la comunidad de WeLoveRacket como "),e.TgZ(47,"b"),e._uU(48,"club"),e.qZA(),e._uU(49," es necesario el registro como usuario de la p\xe1gina, para lo que solicitaremos nombre del club, correo electr\xf3nico, tel\xe9fono, contrase\xf1a. Posteriormente podr\xe1s incluir m\xe1s datos en opci\xf3n de perfil, donde podr\xe1s incluir voluntariamente m\xe1s informaci\xf3n. "),e.qZA(),e.TgZ(50,"p"),e._uU(51," El Usuario es el \xfanico responsable de la informaci\xf3n contenida en su perfil personal y de la veracidad de la misma. "),e.qZA(),e.TgZ(52,"p"),e._uU(53," WebLoveRacket no puede controlar de manera exhaustiva dicha informaci\xf3n. Sin embargo, si WebLoveRacket tuviera conocimiento de que el Usuario est\xe1 infringiendo la legalidad vigente mediante por ejemplo usurpaci\xf3n de identidad, proceder\xe1 de inmediato a cancelar su cuenta. "),e.qZA(),e.TgZ(54,"h3"),e._uU(55,"6. Uso de los servicios ofrecidos por WeLoveRacket"),e.qZA(),e.TgZ(56,"p"),e._uU(57," El Usuario se compromete a utilizar los servicios ofrecidos por WeLoveRacket de conformidad con la legislaci\xf3n vigente, las presentes Condiciones Generales, las Condiciones Particulares que se pudieran concretar, en su caso, para ciertos servicios y dem\xe1s avisos, e instrucciones puestos en su conocimiento, as\xed como con la moral y las buenas costumbres generalmente aceptadas y el orden p\xfablico. "),e.qZA(),e.TgZ(58,"p"),e._uU(59," El Usuario es el \xfanico responsable de la informaci\xf3n contenida en su perfil personal, as\xed como de la informaci\xf3n personal proporcionada a trav\xe9s de los diversos medios de comunicaci\xf3n con otros usuarios que se proporcionan en la web, debiendo ser consciente de la posibilidad de visionado de los mismos por parte de tercero. "),e.qZA(),e.TgZ(60,"p"),e._uU(61," El Usuario se abstendr\xe1 de utilizar cualquiera de los servicios ofrecidos por WeLoveRacket con fines il\xedcitos, o que perjudiquen los derechos e intereses del resto de Usuarios, de terceros, o de WeLoveRacket como responsable de weloveracket.com. "),e.qZA(),e.TgZ(62,"p"),e._uU(63," El usuario ser\xe1 el \xfanico responsable de cualquier acto il\xedcito o incluido en los anteriores casos mencionados. "),e.qZA(),e.TgZ(64,"h3"),e._uU(65,"7.Pol\xedtica de privacidad"),e.qZA(),e.TgZ(66,"p"),e._uU(67," Tenemos el m\xe1ximo inter\xe9s en proteger los datos de car\xe1cter personal de los Usuarios y le informamos a trav\xe9s de la presente pol\xedtica de privacidad acerca del tratamiento que hacemos de los mismos. "),e.qZA(),e.TgZ(68,"p"),e._uU(69," WeLoveRacket se reserva el derecho a modificar la presente pol\xedtica de privacidad para adecuarla a las novedades legales o jurisprudenciales. En dichos supuestos se anunciar\xe1n en esta p\xe1gina los cambios introducidos con razonable antelaci\xf3n a su puesta en pr\xe1ctica. La utilizaci\xf3n de nuestros servicios una vez comunicado este cambio implicar\xe1 la aceptaci\xf3n de los mismos. "),e.qZA(),e.TgZ(70,"p"),e._uU(71," LEGISLACI\xd3N APLICABLE "),e.qZA(),e.TgZ(72,"p"),e._uU(73," WeLoveRacket cumple en el tratamiento de los datos de car\xe1cter personal de sus usuarios con la legislaci\xf3n vigente en Espa\xf1a y en la Uni\xf3n Europea, en particular, con la Ley Org\xe1nica de Protecci\xf3n de Datos y su normativa de desarrollo. Para ello adopta las medidas t\xe9cnicas y organizativas necesarias para evitar la p\xe9rdida, mal uso, alteraci\xf3n, acceso no autorizado y robo de los datos personales facilitados, habida cuenta del estado de la tecnolog\xeda, la naturaleza de los datos y los riesgos a los que est\xe1n expuestos. "),e.qZA(),e.TgZ(74,"p"),e._uU(75," SEGURIDAD "),e.qZA(),e.TgZ(76,"p"),e._uU(77," WeLoveRacket ha adoptado los niveles de seguridad de protecci\xf3n de los datos personales exigidos por el Reglamento de desarrollo de la Ley Org\xe1nica 15/1999, de protecci\xf3n de datos de car\xe1cter personal (Real Decreto 1720/2007). Adem\xe1s, procura instalar aquellos otros medios y medidas t\xe9cnicas adicionales para evitar la p\xe9rdida, mal uso, alteraci\xf3n, acceso no autorizado y robo de los datos personales facilitados. "),e.qZA(),e.TgZ(78,"p"),e._uU(79," En el proceso de registro como Usuario, deber\xe1 elegir una contrase\xf1a. Como Usuario es responsable de mantener la confidencialidad de esta contrase\xf1a, as\xed como de todas las actividades que ocurran en la sesi\xf3n iniciada con su nombre de usuario y contrase\xf1a. El Usuario se compromete a notificar a WeLoveRacket a la mayor brevedad el uso no autorizado de su nombre de usuario y contrase\xf1a o cualquier otro fallo en la seguridad. WeLoveRacket no ser\xe1 responsable por los da\xf1os o p\xe9rdidas que se pudieran originar debido al no cumplimiento de esta obligaci\xf3n por su parte. "),e.qZA(),e.TgZ(80,"p"),e._uU(81," RECOGIDA DE DATOS "),e.qZA(),e.TgZ(82,"p"),e._uU(83," Los datos suministrados ser\xe1n incorporados a un fichero de datos de car\xe1cter personal del que es responsable Jorge Zancada Moreno y que se encuentra debidamente registrado ante la Agencia Espa\xf1ola de Protecci\xf3n de Datos. La comunicaci\xf3n de los datos personales supone la aceptaci\xf3n expresa del Usuario a su inclusi\xf3n en el fichero automatizado. "),e.qZA(),e.TgZ(84,"p"),e._uU(85," WeLoveRacket utilizar\xe1 sus datos personales con la finalidad de posibilitar su participaci\xf3n en la red social y enviarle comunicaciones relacionadas con la prestaci\xf3n, mejora y actualizaci\xf3n de servicios. "),e.qZA(),e.TgZ(86,"p"),e._uU(87," WeLoveRacket podr\xe1 solicitar con caracter opcional, acceso al listado de contactos del usuario con el fin de conectar dentro de la plataforma, o unirse a los eventos deportivos. "),e.qZA(),e.TgZ(88,"p"),e._uU(89," WeLoveRacket no ceder\xe1 a terceros los datos de car\xe1cter personal que nos proporcione, excepto cuando tal cesi\xf3n haya sido consentida expresamente por usted. "),e.qZA(),e.TgZ(90,"p"),e._uU(91," Para ejercer los derechos de acceso, rectificaci\xf3n, oposici\xf3n o cancelaci\xf3n, puede dirigirse a Jorge Zancada Moreno, C/ Rector Jos\xe9 Vida Soria N\xba8 A2, 4\xbaA Motril, Granada, o dirigir un correo electr\xf3nico a la direcci\xf3n support@weloveracket.com "),e.qZA(),e.TgZ(92,"p"),e._uU(93," COOKIES "),e.qZA(),e.TgZ(94,"p"),e._uU(95," WeLoveRacket puede utilizar cookies cuando un usuario navega por sus sitios y p\xe1ginas web. Las cookies que se puedan utilizar en la web se asocian \xfanicamente con el navegador de un ordenador determinado (un usuario an\xf3nimo), y no proporcionan por s\xed mismas ning\xfan dato personal del usuario. Las cookies sirven s\xf3lo para fines exclusivamente internos, como son las estad\xedsticas de acceso a la web. Las cookies utilizadas no pueden leer los archivos cookies creados por otros proveedores o sitios web. El Usuario tiene la posibilidad de configurar su navegador para ser avisado en pantalla de la recepci\xf3n de cookies y para impedir la instalaci\xf3n de cookies en su disco duro. "),e.qZA(),e.TgZ(96,"h3"),e._uU(97,"8. Contenidos facilitados por los Usuarios."),e.qZA(),e.TgZ(98,"p"),e._uU(99," El Usuario podr\xe1 manifestar opiniones o aportar contenidos a trav\xe9s de cualquiera de los medios puestos a su disposici\xf3n por WeLoveRacket al objeto de que otros Usuarios o visitantes de WeLoveRacket puedan acceder y utilizar los mismos. Estos contenidos pueden tratarse de im\xe1genes, textos, opiniones, fotograf\xedas entre otros. "),e.qZA(),e.TgZ(100,"p"),e._uU(101," El Usuario ser\xe1 el \xfanico responsable de los contenidos que facilite a WeLoveRacket y/o transmita a otros Usuarios. En este sentido, el Usuario garantiza ser titular de los derechos de propiedad intelectual e industrial necesarios para poder publicar y poner a disposici\xf3n del resto de Usuarios y visitantes los contenidos facilitados a WeLoveRacket. Asimismo, el Usuario garantiza que tiene el derecho a conceder y de hecho concede una licencia a t\xedtulo gratuito de forma irrevocable, por todo el tiempo permitido en la Ley, no exclusiva, mundial, libre de cargas, para usar copiar, interpretar, mostrar, distribuir el contenido facilitado a WeLoveRacket a trav\xe9s de weloveracket.com y a realizar obras derivadas, o a incorporar el contenido en otras obras, as\xed como para conceder y autorizar licencias sobre todo lo anterior. "),e.qZA(),e.TgZ(102,"p"),e._uU(103," En particular, y a t\xedtulo meramente indicativo y no exhaustivo, el Usuario se compromete a no transmitir, difundir o poner a disposici\xf3n de terceros contenidos que: "),e.qZA(),e.TgZ(104,"p"),e._uU(105," a) de cualquier forma sean contrarios, menosprecien o atenten contra los derechos fundamentales y las libertades p\xfablicas reconocidas constitucionalmente, en los tratados internacionales y en el resto de la legislaci\xf3n vigente "),e.qZA(),e.TgZ(106,"p"),e._uU(107," b) induzcan, inciten o promuevan actuaciones delictivas, denigratorias, difamatorias, infamantes, violentas o, en general, contrarias a la ley, a la moral y las buenas costumbres generalmente aceptadas o al orden p\xfablico. "),e.qZA(),e.TgZ(108,"p"),e._uU(109," c) induzcan, inciten o promuevan actuaciones, actitudes o pensamientos discriminatorios por raz\xf3n de sexo, raza, religi\xf3n, creencias, edad o condici\xf3n. "),e.qZA(),e.TgZ(110,"p"),e._uU(111," d) incorporen, pongan a disposici\xf3n o permitan acceder a productos, elementos, mensajes y/o servicios delictivos, violentos, ofensivos, nocivos, degradantes o, en general, contrarios a la ley, a la moral y a las buenas costumbres generalmente aceptadas o al orden p\xfablico. "),e.qZA(),e.TgZ(112,"p"),e._uU(113," e) induzcan o puedan inducir a terceros un estado inaceptable de ansiedad o temor. "),e.qZA(),e.TgZ(114,"p"),e._uU(115," f) se encuentren protegidos por cualesquiera derechos de propiedad intelectual o industrial pertenecientes a terceros, sin que el Usuario haya obtenido previamente de sus titulares la autorizaci\xf3n necesaria para llevar a cabo el uso que efect\xfaa o pretende efectuar. "),e.qZA(),e.TgZ(116,"p"),e._uU(117," g) sean contrarios al derecho al honor, a la intimidad personal y familiar o a la propia imagen de las personas. "),e.qZA(),e.TgZ(118,"p"),e._uU(119," h) infrinjan la normativa dispuesta relativa al secreto de las comunicaciones. "),e.qZA(),e.TgZ(120,"p"),e._uU(121," i) sean relativos a la publicidad de sitios que sean competencia de WeLoveRacket o sus anunciantes. "),e.qZA(),e.TgZ(122,"p"),e._uU(123," j) se traten de publicidad il\xedcita, enga\xf1osa o desleal. "),e.qZA(),e.TgZ(124,"p"),e._uU(125," k) incorporen virus u otros elementos que puedan da\xf1ar o impedir el normal funcionamiento de la red, del sistema, o de equipos inform\xe1ticos de WeLoveRacket, de terceros, o de otros Usuarios. "),e.qZA(),e.TgZ(126,"p"),e._uU(127," l) provoque por sus caracter\xedsticas (tales como formato, extensi\xf3n, etc.) dificultades en el normal funcionamiento de los servicios; WeLoveRacket se reserva el derecho de retirar de WeLoveRacket todos aquellos contenidos que no sean acordes con las presentes Condiciones Generales y/o con la legalidad vigente. En ning\xfan caso WeLoveRacket estar\xe1 obligada a justificar ante el Usuario la retirada de contenidos de WeLoveRacket. "),e.qZA(),e.TgZ(128,"p"),e._uU(129," El Usuario deber\xe1 abstenerse de acceder a los contenidos empleando para ello programas, medios o procedimientos distintos de los que, seg\xfan los casos, se hayan puesto a su disposici\xf3n con este fin. "),e.qZA(),e.TgZ(130,"p"),e._uU(131," WeLoveRacket en ning\xfan caso se hace responsable de los contenidos u opiniones manifestadas por un usuario en www.weloveracket.com, si bien se compromete a eliminar comentarios injuriosos, difamatorios u ofensivos una vez tenga conocimiento de la existencia de los mismos. "),e.qZA(),e.TgZ(132,"h3"),e._uU(133,"9. Propiedad Intelectual e Industrial."),e.qZA(),e.TgZ(134,"p"),e._uU(135," Todas las marcas, nombres comerciales, logotipos, signos distintivos de cualquier clase que aparecen en WeLoveRacket son propiedad de WeLoveRacket o de terceros, sin que pueda entenderse que el uso y acceso a WeLoveRacket y la utilizaci\xf3n de sus servicios atribuya al Usuario derecho alguno sobre las citadas marcas, nombres comerciales, logotipos y signos distintivos. "),e.qZA(),e.TgZ(136,"p"),e._uU(137," Asimismo, los contenidos que sean propiedad intelectual de WeLoveRacket o de terceros, no podr\xe1n entenderse cedidos al Usuario, en virtud de lo establecido en estas Condiciones Generales, ninguno de los derechos de explotaci\xf3n que existen o puedan existir sobre dichos contenidos m\xe1s all\xe1 de lo estrictamente necesario para el correcto uso de los servicios de WeLoveRacket. Los \xfanicos derechos de propiedad intelectual que se le conceden al Usuario son los inherentes al uso de los servicios propios de WeLoveRacket, quedando prohibida en todo caso la utilizaci\xf3n comercial. "),e.qZA(),e.TgZ(138,"h3"),e._uU(139,"10.Exclusi\xf3n de garant\xedas y de responsabilidad."),e.qZA(),e.TgZ(140,"p"),e._uU(141," 9.1. Exclusi\xf3n de garant\xedas y de responsabilidad por el funcionamiento de WeLoveRacket y sus servicios. "),e.qZA(),e.TgZ(142,"p"),e._uU(143," WeLoveRacket no garantiza la disponibilidad y continuidad del funcionamiento de WeLoveRacket y de sus servicios. WeLoveRacket procurar\xe1 advertir con suficiente antelaci\xf3n de las interrupciones que pudieran suceder en el funcionamiento de WeLoveRacket y de sus servicios, siempre que ello sea posible. WeLoveRacket tampoco garantiza la utilidad de WeLoveRacket y de sus servicios para la realizaci\xf3n de ninguna actividad en concreto, ni su infalibilidad y, en particular, aunque no de modo exclusivo, que los Usuarios puedan efectivamente utilizar WeLoveRacket y sus servicios. "),e.qZA(),e.TgZ(144,"p"),e._uU(145," WeLoveRacket excluye, con toda la extensi\xf3n permitida por el ordenamiento jur\xeddico, cualquier responsabilidad por los da\xf1os y perjuicios de toda naturaleza que puedan deberse a la falta de disponibilidad o de continuidad del funcionamiento de WeLoveRacket y de sus servicios, o la defraudaci\xf3n de la utilidad que los Usuarios hubieren podido atribuir a WeLoveRacket y sus servicios, a la fiabilidad de WeLoveRacket y de los servicios, y en particular, aunque no de modo exclusivo, a los fallos en el acceso a las distintas p\xe1ginas web que configuren WeLoveRacket. "),e.qZA(),e.TgZ(146,"p"),e._uU(147," 9.2. Exclusi\xf3n de garant\xedas y de responsabilidad por el funcionamiento del software, en relaci\xf3n a los contenidos, posibilidad de virus y eficacia de las medidas de seguridad. "),e.qZA(),e.TgZ(148,"p"),e._uU(149," WeLoveRacket no garantiza: "),e.qZA(),e.TgZ(150,"p"),e._uU(151," a) La ausencia de errores o defectos en el software y en los contenidos ofrecidos en WeLoveRacket. "),e.qZA(),e.TgZ(152,"p"),e._uU(153," b) La ausencia de virus y/o cualquier otro tipo de componente da\xf1ino tanto en WeLoveRacket como en los servidores encargados de su mantenimiento. c) La total eficacia sobre las medidas de seguridad adoptadas en WeLoveRacket. "),e.qZA(),e.TgZ(154,"p"),e._uU(155," WeLoveRacket excluye, con toda la extensi\xf3n permitida por el ordenamiento jur\xeddico, cualquier responsabilidad por los da\xf1os y perjuicios de toda naturaleza que puedan deberse a errores del software, o en los contenidos, o a la presencia de virus que puedan producir alteraciones en el sistema inform\xe1tico, documentos electr\xf3nicos o ficheros de los Usuarios. "),e.qZA(),e.TgZ(156,"p"),e._uU(157," WeLoveRacket no garantiza la licitud, fiabilidad y utilidad de los contenidos. WeLoveRacket excluye, con toda la extensi\xf3n permitida por el ordenamiento jur\xeddico, cualquier responsabilidad por los da\xf1os y perjuicios de toda naturaleza que puedan deberse a la transmisi\xf3n, difusi\xf3n, almacenamiento, puesta a disposici\xf3n, recepci\xf3n, obtenci\xf3n o acceso a los contenidos, y en particular, aunque no de modo exclusivo, por los da\xf1os y perjuicios que puedan deberse a: "),e.qZA(),e.TgZ(158,"p"),e._uU(159," a) La falta de veracidad, exactitud, exhaustividad, pertinencia y/o actualidad de los contenidos. b) La inadecuaci\xf3n para cualquier clase de prop\xf3sito y la defraudaci\xf3n de las expectativas generadas por los contenidos. c) El incumplimiento, retraso en el cumplimiento, cumplimiento defectuoso o terminaci\xf3n por cualquier causa de las obligaciones contra\xeddas por terceros y contratos realizados con terceros a trav\xe9s de o con motivo del acceso a los contenidos. d) los vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados, puestos a disposici\xf3n o de otra forma transmitidos o puestos a disposici\xf3n, recibidos, obtenidos o a los que se haya accedido a trav\xe9s de WeLoveRacket o de los servicios. 9.3. Exclusi\xf3n de garant\xedas y de responsabilidad por los servicios prestados por terceros a trav\xe9s de WeLoveRacket. "),e.qZA(),e.TgZ(160,"p"),e._uU(161," WeLoveRacket no controla ni garantiza la ausencia de virus ni de otros elementos en los servicios prestados por terceros a trav\xe9s de WeLoveRacket que puedan producir alteraciones en el sistema inform\xe1tico del Usuario. "),e.qZA(),e.TgZ(162,"p"),e._uU(163," WeLoveRacket excluye cualquier responsabilidad por los da\xf1os y perjuicios de toda naturaleza que puedan deberse a la presencia de virus o a la presencia de otros elementos lesivos en los servicios prestados por terceros a trav\xe9s de WeLoveRacket que puedan producir alteraciones en el sistema inform\xe1tico de los Usuarios. "),e.qZA(),e.TgZ(164,"p"),e._uU(165," WeLoveRacket no garantiza la licitud, fiabilidad y utilidad de los servicios prestados por terceros a trav\xe9s WeLoveRacket. WeLoveRacket excluye cualquier responsabilidad por los da\xf1os y perjuicios de toda naturaleza que puedan deberse a los servicios prestados por terceros a trav\xe9s WeLoveRacket. "),e.qZA(),e.TgZ(166,"p"),e._uU(167," 9.4. Exclusi\xf3n de garant\xedas y de responsabilidad por la utilizaci\xf3n de WeLoveRacket, de los servicios y de los contenidos por los Usuarios. "),e.qZA(),e.TgZ(168,"p"),e._uU(169," WeLoveRacket no garantiza que los Usuarios utilicen los servicios y contenidos de WeLoveRacket de conformidad con las presentes Condiciones Generales. WeLoveRacket tampoco garantiza que la veracidad de los datos que los Usuarios proporcionan sobre s\xed mismos en su perfil. "),e.qZA(),e.TgZ(170,"p"),e._uU(171," WeLoveRacket excluye cualquier responsabilidad por los da\xf1os y perjuicios de toda naturaleza que pudieran deberse a la utilizaci\xf3n de los servicios y de los contenidos por parte de los Usuarios que puedan deberse a la falta de veracidad, vigencia, o autenticidad de la informaci\xf3n que los Usuarios proporcionan a WeLoveRacket, en particular, aunque no de forma exclusiva, por los da\xf1os y perjuicios de toda naturaleza que puedan deberse a la suplantaci\xf3n de la personalidad de un tercero efectuada por un Usuario en la utilizaci\xf3n de los servicios prestados a trav\xe9s de WeLoveRacket "),e.qZA(),e.TgZ(172,"h3"),e._uU(173,"11. Denuncia ante WeLoveRacket"),e.qZA(),e.TgZ(174,"p"),e._uU(175," En el caso de que cualquier Usuario, visitante, o un tercero considere que existen hechos o circunstancias que revelen el car\xe1cter il\xedcito de cualquier contenido en WeLoveRacket o en su utilizaci\xf3n, deber\xe1 ponerse en contacto con WeLoveRacket a trav\xe9s de support@weloveracket.com o bien a trav\xe9s de los datos de contacto indicados en WeLoveRacket y en las presentes Condiciones Generales, indicando siempre: "),e.qZA(),e.TgZ(176,"p"),e._uU(177," a) los datos personales del reclamante (nombre, direcci\xf3n, n\xfamero de tel\xe9fono y direcci\xf3n de correo electr\xf3nico) "),e.qZA(),e.TgZ(178,"p"),e._uU(179," b) la supuesta actividad il\xedcita llevada a cabo en WeLoveRacket y su motivaci\xf3n que revelen dicho car\xe1cter il\xedcito. "),e.qZA(),e.TgZ(180,"h3"),e._uU(181,"12. Retirada y suspensi\xf3n de los servicios"),e.qZA(),e.TgZ(182,"p"),e._uU(183," WeLoveRacket podr\xe1 retirar o suspender en cualquier momento previo aviso con un mes de antelaci\xf3n la prestaci\xf3n de servicios. Igualmente y sin previo aviso se podr\xe1 proceder a cancelar la cuenta, de aquellos Usuarios que incumplan lo establecido en las presentes Condiciones Generales previa devoluci\xf3n de su saldo pendiente. "),e.qZA(),e.TgZ(184,"h3"),e._uU(185,"13. Duraci\xf3n y terminaci\xf3n"),e.qZA(),e.TgZ(186,"p"),e._uU(187," La prestaci\xf3n de los servicios que WeLoveRacket proporciona a trav\xe9s de WeLoveRacket tiene, en principio, una duraci\xf3n indefinida. No obstante, WeLoveRacket est\xe1 autorizada para dar por terminada o suspender la prestaci\xf3n de sus servicios en cualquier momento, sin perjuicio de lo que se hubiere dispuesto al respecto en las correspondientes Condiciones Particulares. En cualquier caso, si fuera posible, WeLoveRacket advertir\xe1 previamente la terminaci\xf3n o la suspensi\xf3n de cualquier servicio o de la totalidad de los mismos. "),e.qZA(),e.TgZ(188,"h3"),e._uU(189,"14. Legislaci\xf3n aplicable"),e.qZA(),e.TgZ(190,"p"),e._uU(191," Las presentes Condiciones Generales se rigen por la legislaci\xf3n espa\xf1ola. La interpretaci\xf3n y resoluci\xf3n de cualquier conflicto que se pueda derivar de la participaci\xf3n del Usuario en los servicios de WeLoveRacket estar\xe1 sujeta a los Juzgados y Tribunales espa\xf1oles de Madrid Capital. "),e.qZA(),e.TgZ(192,"h3"),e._uU(193,"\xa0"),e.qZA(),e.TgZ(194,"p"),e._uU(195,"\xa0"),e.qZA()()()()()())},dependencies:[Z.s]}),o})()}];let p=(()=>{const i=class{};let o=i;return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(c),a.Bz]}),o})();var m=n(25108);let s=(()=>{const i=class{};let o=i;return i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,p,m.m]}),o})()},96519:(A,h,n)=>{n.d(h,{G:()=>Z});var u=n(61135),a=n(94650),e=n(74742);let Z=(()=>{const c=class{constructor(m){this.data=m,this.toggleSideBar=new u.X(localStorage.getItem("isMiniSidebar")||"false"),this.toggleMobileSideBar=new u.X(localStorage.getItem("isMobileSidebar")||"false"),this.expandSideBar=new u.X("false")}switchSideMenuPosition(){localStorage.getItem("isMiniSidebar")?(this.toggleSideBar.next("false"),localStorage.removeItem("isMiniSidebar"),this.data.sideBar.map(m=>{m.menu.map(s=>{const o=sessionStorage.getItem("menuValue");o&&o==s.menuValue&&(s.showSubRoute=!0)})})):(this.toggleSideBar.next("true"),localStorage.setItem("isMiniSidebar","true"),this.data.sideBar.map(m=>{m.menu.map(s=>{s.showSubRoute=!1})}))}switchMobileSideBarPosition(){localStorage.getItem("isMobileSidebar")?(this.toggleMobileSideBar.next("false"),localStorage.removeItem("isMobileSidebar")):(this.toggleMobileSideBar.next("true"),localStorage.setItem("isMobileSidebar","true"))}};let _=c;return c.\u0275fac=function(s){return new(s||c)(a.LFG(e.D))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),_})()}}]);