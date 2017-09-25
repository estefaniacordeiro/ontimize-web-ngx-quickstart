webpackJsonp([10],{177:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function MainComponent(){}return MainComponent.prototype.ngOnInit=function(){},MainComponent.ctorParameters=function(){return[]},MainComponent}()},178:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var u=t(0),o=t(14),e=t(7),i=t(62),a=function(){function LoginComponent(n,l,t,u,o,e){var i=this;this.actRoute=n,this.zone=l,this.navigation=u,this.loginService=o,this.injector=e,this.sessionExpired=!1,this.router=t,this.actRoute.queryParams.subscribe(function(n){if(n){var l=n["session-expired"];i.sessionExpired="true"===l}})}return LoginComponent.prototype.ngOnInit=function(){this.removeSessionToken(),this.navigation.setVisible(!1);var n=new o.f("",o.r.required),l=new o.f("",o.r.required);this.loginForm=new o.h({}),this.loginForm.addControl("username",n),this.loginForm.addControl("password",l),this.loginService.isLoggedIn()&&this.router.navigate(["../"],{relativeTo:this.actRoute})},LoginComponent.prototype.login=function(){var n=this;this.loginForm.valid||alert("Campos no válidos");var l=this.loginForm.value.username,t=this.loginForm.value.password;if(l&&l.length>0&&t&&t.length>0){var u=this;this.loginService.login(l,t).subscribe(function(){u.sessionExpired=!1,u.router.navigate(["../"],{relativeTo:n.actRoute})},this.handleError)}},LoginComponent.prototype.handleError=function(n){switch(n.status){case 401:console.error("Email or password is wrong.")}},LoginComponent.prototype.removeSessionToken=function(){var n=this.injector.get(i.a),l=n.uuid;localStorage.setItem(l,JSON.stringify({}))},LoginComponent.ctorParameters=function(){return[{type:e.a},{type:u.R},{type:e.m},{type:i.i,decorators:[{type:u.B,args:[i.i]}]},{type:i.g,decorators:[{type:u.B,args:[i.g]}]},{type:u.E}]},LoginComponent}()},402:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t(0),o=function(){function AppComponent(n){this.injector=n}return AppComponent.prototype.ngOnInit=function(){},AppComponent.ctorParameters=function(){return[{type:u.E}]},AppComponent}()},407:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function SharedModule(){}return SharedModule}()},413:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=(t(208),t(0)),o=t(11),e=t(631),i=t(62);Object(u._25)(),Object(o.k)().bootstrapModuleFactory(e.a).then(i.z).catch(function(n){console.error(n.message)})},631:function(n,l,t){"use strict";t.d(l,"a",function(){return sl});var u=t(0),o=t(632),e=t(402),i=t(34),a=t(405),_=t(406),r=t(633),s=t(641),c=t(643),d=t(3),m=t(11),p=t(9),f=t(399),g=t(398),b=t(120),h=t(16),v=t(207),C=t(33),y=t(14),x=t(28),w=t(24),E=t(30),M=t(37),S=t(36),L=t(35),R=t(44),k=t(100),A=t(130),B=t(101),F=t(103),j=t(102),O=t(129),I=t(64),V=t(7),q=t(23),H=t(6),P=t(400),T=t(176),N=t(123),G=t(162),z=t(163),D=t(270),U=t(381),J=t(170),X=t(382),Q=t(394),W=t(175),K=t(395),Y=t(396),Z=t(397),$=t(645),nn=t(391),ln=t(128),tn=t(27),un=t(29),on=t(40),en=t(45),an=t(71),_n=t(191),rn=t(177),sn=t(178),cn=t(192),dn=t(193),mn=t(194),pn=t(188),fn=t(195),gn=t(187),bn=t(179),hn=t(181),vn=t(96),Cn=t(124),yn=t(13),xn=t(182),wn=t(53),En=t(126),Mn=t(97),Sn=t(189),Ln=t(180),Rn=t(183),kn=t(196),An=t(127),Bn=t(70),Fn=t(184),jn=t(185),On=t(190),In=t(197),Vn=t(186),qn=t(54),Hn=t(125),Pn=t(198),Tn=t(199),Nn=t(200),Gn=t(201),zn=t(206),Dn=t(72),Un=t(202),Jn=t(203),Xn=t(204),Qn=t(205),Wn=t(84),Kn=t(98),Yn=t(73),Zn=t(55),$n=t(74),nl=t(99),ll=t(104),tl=t(62),ul=t(407),ol=t(648),el=t(649),il=t(650),al=t(651),_l=t(652),rl=t(171),sl=u._47(o.a,[e.a],function(n){return u._65([u._66(512,u.q,u._39,[[8,[i.c,i.b,i.d,i.B,i.C,a.a,i.a,_.a,r.a,s.a,c.a]],[3,u.q],u.P]),u._66(5120,u.I,u._64,[[3,u.I]]),u._66(4608,d.l,d.k,[u.I]),u._66(5120,u.c,u._53,[]),u._66(5120,u.G,u._61,[]),u._66(5120,u.H,u._62,[]),u._66(4608,m.c,m.u,[d.c]),u._66(6144,u._5,null,[m.c]),u._66(4608,m.f,p.g,[]),u._66(5120,m.d,function(n,l,t,u){return[new m.l(n),new m.q(l),new m.o(t,u)]},[d.c,d.c,d.c,m.f]),u._66(4608,m.e,m.e,[m.d,u.R]),u._66(135680,m.n,m.n,[d.c]),u._66(4608,m.m,m.m,[m.e,m.n]),u._66(5120,f.a,g.d,[]),u._66(5120,f.c,g.e,[]),u._66(4608,f.b,g.c,[f.a,f.c]),u._66(5120,u._3,g.f,[m.m,f.b,u.R]),u._66(6144,m.r,null,[m.n]),u._66(4608,u._15,u._15,[u.R]),u._66(4608,m.h,m.h,[d.c]),u._66(4608,m.j,m.j,[d.c]),u._66(4608,b.b,g.b,[u._3,m.b]),u._66(4608,h.c,h.c,[]),u._66(4608,h.j,h.b,[]),u._66(5120,h.l,h.m,[]),u._66(4608,h.k,h.k,[h.c,h.j,h.l]),u._66(4608,h.i,h.a,[]),u._66(5120,h.f,h.n,[h.k,h.i]),u._66(4608,v.h,v.m,[d.c,u.V,v.k]),u._66(4608,v.n,v.n,[v.h,v.l]),u._66(5120,v.a,function(n){return[n]},[v.n]),u._66(4608,v.j,v.j,[]),u._66(6144,v.i,null,[v.j]),u._66(4608,v.g,v.g,[v.i]),u._66(6144,v.b,null,[v.g]),u._66(5120,v.f,v.o,[v.b,[2,v.a]]),u._66(4608,v.c,v.c,[v.f]),u._66(5120,C.a,C.d,[]),u._66(4608,C.b,C.b,[C.a]),u._66(4608,C.l,C.l,[u.R,m.b]),u._66(5120,C.m,C.k,[[3,C.m],C.b,C.l]),u._66(5120,C.p,C.o,[[3,C.p],C.l,C.b]),u._66(4608,y.v,y.v,[]),u._66(4608,y.e,y.e,[]),u._66(6144,x.b,null,[m.b]),u._66(4608,x.c,x.c,[[2,x.b]]),u._66(4608,w.a,w.a,[]),u._66(5120,E.c,E.a,[[3,E.c],u.R,w.a]),u._66(5120,E.g,E.f,[[3,E.g],E.c]),u._66(4608,M.g,M.g,[E.c,E.g]),u._66(5120,M.c,M.j,[[3,M.c]]),u._66(4608,M.m,M.m,[E.g]),u._66(4608,M.b,M.b,[M.g,M.c,u.q,M.m,u.g,u.E,u.R]),u._66(5120,M.k,M.l,[M.b]),u._66(5120,p.k,p.l,[M.b]),u._66(5120,p.f,p.e,[[3,p.f],u.R,w.a]),u._66(5120,p._123,p._124,[[3,p._123]]),u._66(4608,S.a,S.a,[]),u._66(4608,L.f,L.f,[w.a]),u._66(4608,L.e,L.e,[L.f,w.a,u.R]),u._66(5120,L.j,L.i,[[3,L.j],[2,L.g],w.a]),u._66(5120,p.p,p.q,[M.b]),u._66(4608,p._11,p._11,[M.b,u.E,p.p,[2,d.f],[3,p._11]]),u._66(4608,p._38,p._38,[[2,h.f],m.c]),u._66(4608,p._8,p._8,[]),u._66(5120,p.m,p.n,[M.b]),u._66(5120,p._126,p._127,[M.b]),u._66(5120,p.w,p.x,[M.b]),u._66(4608,p._92,p._92,[M.b,L.j,u.E,[3,p._92]]),u._66(5120,p.z,p.A,[M.b]),u._66(4608,p.d,R.a,[]),u._66(5120,k.b,A.a,[v.c]),u._66(4608,B.a,B.b,[]),u._66(4608,F.b,F.a,[]),u._66(4608,j.b,j.a,[]),u._66(4608,O.a,O.a,[]),u._66(4608,I.a,I.a,[O.a,k.b,B.a,F.b,j.b,I.b,I.c]),u._66(5120,V.a,V.A,[V.m]),u._66(4608,V.f,V.f,[]),u._66(6144,V.h,null,[V.f]),u._66(135680,V.r,V.r,[V.m,u.O,u.m,u.E,V.h]),u._66(4608,V.g,V.g,[]),u._66(5120,V.j,V.D,[V.B]),u._66(5120,u.b,function(n){return[n]},[V.j]),u._66(5120,q.b,H.n,[u.E]),u._66(4608,h.a,h.a,[]),u._66(5120,P.a,T.m,[h.k,h.a]),u._66(5120,N.a,H.p,[u.E]),u._66(5120,G.a,T.g,[u.E]),u._66(5120,z.a,T.i,[u.E]),u._66(5120,D.a,T.h,[u.E]),u._66(5120,U.a,T.c,[u.E]),u._66(5120,J.a,T.j,[u.E]),u._66(5120,X.a,T.d,[u.E]),u._66(5120,Q.a,T.f,[u.E]),u._66(5120,W.a,H.o,[u.E]),u._66(5120,K.a,T.b,[u.E]),u._66(5120,Y.a,T.l,[u.E]),u._66(5120,Z.a,T.k,[u.E]),u._66(512,d.b,d.b,[]),u._66(1024,u.w,m.s,[]),u._66(1024,u.Q,function(){return[V.w()]},[]),u._66(256,q.a,$.a,[]),u._66(1024,nn.a,T.n,[u.E]),u._66(512,V.B,V.B,[u.E]),u._66(1024,u.d,function(n,l,t,u,o,e){return[m.t(n,l),T.a(t,u,o),V.C(e)]},[[2,m.i],[2,u.Q],u.E,q.a,nn.a,V.B]),u._66(512,u.e,u.e,[[2,u.d]]),u._66(131584,u._50,u._50,[u.R,u._40,u.E,u.w,u.q,u.e]),u._66(2048,u.g,null,[u._50]),u._66(512,u.f,u.f,[u.g]),u._66(512,m.a,m.a,[[3,m.a]]),u._66(512,g.a,g.a,[]),u._66(512,A.d,A.d,[]),u._66(512,h.g,h.g,[]),u._66(512,v.e,v.e,[]),u._66(512,v.d,v.d,[]),u._66(512,ln.b,ln.b,[]),u._66(512,C.n,C.n,[]),u._66(512,C.g,C.g,[]),u._66(512,y.s,y.s,[]),u._66(512,y.j,y.j,[]),u._66(512,y.q,y.q,[]),u._66(512,tn.a,tn.a,[]),u._66(512,p.c,p.c,[]),u._66(512,x.a,x.a,[]),u._66(256,p.j,!0,[]),u._66(512,p._3,p._3,[[2,m.b],[2,p.j]]),u._66(512,w.b,w.b,[]),u._66(512,E.b,E.b,[]),u._66(512,p._80,p._80,[]),u._66(512,p._74,p._74,[]),u._66(512,p._62,p._62,[]),u._66(512,un.e,un.e,[]),u._66(512,M.d,M.d,[]),u._66(512,p.G,p.G,[]),u._66(512,p._121,p._121,[]),u._66(512,p.J,p.J,[]),u._66(512,p.N,p.N,[]),u._66(512,p.V,p.V,[]),u._66(512,p._2,p._2,[]),u._66(512,S.c,S.c,[]),u._66(512,p._0,p._0,[]),u._66(512,L.a,L.a,[]),u._66(512,p._16,p._16,[]),u._66(512,p._37,p._37,[]),u._66(512,p._9,p._9,[]),u._66(512,p._43,p._43,[]),u._66(512,p._31,p._31,[]),u._66(512,p._29,p._29,[]),u._66(512,p._41,p._41,[]),u._66(512,p._50,p._50,[]),u._66(512,p._54,p._54,[]),u._66(512,p._69,p._69,[]),u._66(512,p._72,p._72,[]),u._66(512,p._77,p._77,[]),u._66(512,p._83,p._83,[]),u._66(512,p._87,p._87,[]),u._66(512,p._91,p._91,[]),u._66(512,p._89,p._89,[]),u._66(512,p._94,p._94,[]),u._66(512,p._110,p._110,[]),u._66(512,p._112,p._112,[]),u._66(512,p._115,p._115,[]),u._66(512,p._118,p._118,[]),u._66(512,p._58,p._58,[]),u._66(512,on.a,on.a,[]),u._66(512,en.a,en.a,[]),u._66(512,an.b,an.b,[]),u._66(512,_n.a,_n.a,[]),u._66(1024,V.v,V.y,[[3,V.m]]),u._66(512,V.u,V.c,[]),u._66(512,V.b,V.b,[]),u._66(256,V.i,{enableTracing:!1},[]),u._66(1024,d.g,V.x,[d.r,[2,d.a],V.i]),u._66(512,d.f,d.f,[d.g]),u._66(512,u.m,u.m,[]),u._66(512,u.O,u._10,[u.m,[2,u._11]]),u._66(1024,V.k,function(){return[[{path:"main",component:rn.a,canActivate:[W.a],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:"./home/home.module#HomeModule"},{path:"about",loadChildren:"./about/about.module#AboutModule"},{path:"settings",loadChildren:"./settings/settings.module#SettingsModule"},{path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},{path:"accounts",loadChildren:"./accounts/accounts.module#AccountsModule"},{path:"branches",loadChildren:"./branches/branches.module#BranchesModule"},{path:"employees",loadChildren:"./employees/employees.module#EmployeesModule"}]}],[{path:"login",component:sn.a,pathMatch:"full"}],[{path:"",redirectTo:"main",pathMatch:"prefix",canActivate:[W.a]}]]},[]),u._66(1024,V.m,V.z,[u.g,V.u,V.b,d.f,u.E,u.O,u.m,V.k,V.i,[2,V.t],[2,V.l]]),u._66(512,V.p,V.p,[[2,V.v],[2,V.m]]),u._66(512,cn.a,cn.a,[]),u._66(512,dn.a,dn.a,[]),u._66(512,mn.a,mn.a,[]),u._66(512,pn.b,pn.b,[]),u._66(512,fn.a,fn.a,[]),u._66(512,gn.b,gn.b,[]),u._66(512,bn.b,bn.b,[]),u._66(512,hn.b,hn.b,[]),u._66(512,vn.b,vn.b,[]),u._66(512,Cn.b,Cn.b,[]),u._66(512,yn.b,yn.b,[]),u._66(512,xn.b,xn.b,[]),u._66(512,wn.d,wn.d,[]),u._66(512,En.d,En.d,[]),u._66(512,Mn.d,Mn.d,[]),u._66(512,Sn.b,Sn.b,[]),u._66(512,Ln.b,Ln.b,[]),u._66(512,Rn.b,Rn.b,[]),u._66(512,kn.a,kn.a,[]),u._66(512,An.b,An.b,[]),u._66(512,Bn.b,Bn.b,[]),u._66(512,Fn.b,Fn.b,[]),u._66(512,jn.b,jn.b,[]),u._66(512,On.b,On.b,[]),u._66(512,In.a,In.a,[]),u._66(512,Vn.b,Vn.b,[]),u._66(512,qn.b,qn.b,[]),u._66(512,Hn.b,Hn.b,[]),u._66(512,Pn.a,Pn.a,[]),u._66(512,Tn.a,Tn.a,[]),u._66(512,Nn.a,Nn.a,[]),u._66(512,Gn.a,Gn.a,[]),u._66(512,zn.a,zn.a,[]),u._66(512,Dn.b,Dn.b,[]),u._66(512,Un.a,Un.a,[]),u._66(512,Jn.a,Jn.a,[]),u._66(512,Xn.a,Xn.a,[]),u._66(512,Qn.a,Qn.a,[]),u._66(512,Wn.b,Wn.b,[]),u._66(512,Kn.b,Kn.b,[]),u._66(512,Yn.b,Yn.b,[]),u._66(512,Zn.b,Zn.b,[]),u._66(512,$n.b,$n.b,[]),u._66(512,nl.b,nl.b,[]),u._66(512,ll.b,ll.b,[]),u._66(512,tl.v,tl.v,[]),u._66(512,ul.a,ul.a,[]),u._66(512,ol.a,ol.a,[]),u._66(512,el.a,el.a,[]),u._66(512,il.a,il.a,[]),u._66(512,al.a,al.a,[]),u._66(512,_l.a,_l.a,[]),u._66(512,o.a,o.a,[]),u._66(256,v.k,"XSRF-TOKEN",[]),u._66(256,v.l,"X-XSRF-TOKEN",[]),u._66(256,p.s,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),u._66(256,p.o,p.t,[]),u._66(256,I.c,void 0,[]),u._66(256,I.b,void 0,[]),u._66(256,rl.a,T.e,[])])})},632:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function AppModule(){}return AppModule}()},633:function(n,l,t){"use strict";function View_MainComponent_0(n){return o._79(0,[(n()(),o._51(0,null,null,6,"o-app-layout",[],null,null,null,e.b,e.a)),o._49(49152,null,0,i.a,[],null,null),(n()(),o._77(0,["\n  "])),(n()(),o._77(0,["\n  "])),(n()(),o._51(16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),o._49(212992,null,0,a.q,[a.b,o._20,o.q,[8,null],o.l],null,null),(n()(),o._77(0,["\n"]))],function(n,l){n(l,5,0)},null)}function View_MainComponent_Host_0(n){return o._79(0,[(n()(),o._51(0,null,null,1,"app-main",[],null,null,null,View_MainComponent_0,s)),o._49(114688,null,0,_.a,[],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return c});var u=t(634),o=t(0),e=t(635),i=t(104),a=t(7),_=t(177),r=[u.a],s=o._48({encapsulation:2,styles:r,data:{}}),c=o._46("app-main",_.a,View_MainComponent_Host_0,{},{},[])},634:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[".horizontal-container .o-container-content-item > .rounded-panel:first-child {\n  margin-right: 4px; }\n\n.horizontal-container .o-container-content-item > .rounded-panel:last-child {\n  margin-left: 4px; }\n\n.margin-right-24 {\n  margin-right: 24px; }\n\no-form o-form-toolbar.o-form-toolbar-floating {\n  top: 56px !important;\n  padding-top: 16px;\n  padding-bottom: 0px;\n  background: #eeeeee; }\n\no-form form:not(.form-no-toolbar) {\n  top: 66px !important; }\n\n.line-chart .nv-x.nv-axis .nv-axisMaxMin.nv-axisMaxMin-x.nv-axisMin-x text {\n  transform: translate(0px, 0px) rotate(-90deg); }\n\n.line-chart .nv-x.nv-axis .nvd3 text {\n  transform-origin: left;\n  transform: translate(-10px, 0px) rotate(-90deg); }\n\n.nvd3 text {\n  font: 400 12px 'Lato'; }\n\n.movement-types-cell-renderer {\n  font-weight: 700; }\n\n.o-container-title-item.container-title {\n  padding-bottom: 2px; }\n\no-row > .o-container {\n  width: 100%; }\n"]},641:function(n,l,t){"use strict";function View_LoginComponent_1(n){return o._79(0,[(n()(),o._51(0,null,null,3,"p",[["class","session-expired"]],null,null,null,null,null)),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,["",""])),o._70(0,i.b,[o.E])],function(n,l){n(l,1,0,"session-expired")},function(n,l){n(l,2,0,o._78(l,2,0,o._68(l,3).transform("ERROR_SESSION_EXPIRED")))})}function View_LoginComponent_0(n){return o._79(0,[(n()(),o._51(0,null,null,116,"div",[["class","login-outer-container"],["fxFill",""],["fxLayout","row"],["fxLayoutAlign","center center"]],null,null,null,null,null)),o._49(737280,null,0,e.i,[e.m,o.v,o._2],{layout:[0,"layout"]},null),o._49(737280,null,0,e.h,[e.m,o.v,o._2,[2,e.i]],{align:[0,"align"]},null),o._49(737280,null,0,e.f,[e.m,o.v,o._2],null,null),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,["\n\n    "])),(n()(),o._51(0,null,null,109,"div",[["class","login-inner-container md-whiteframe-1dp"],["fxLayout","column"],["fxLayoutAlign","center"]],null,null,null,null,null)),o._49(737280,null,0,e.i,[e.m,o.v,o._2],{layout:[0,"layout"]},null),o._49(737280,null,0,e.h,[e.m,o.v,o._2,[2,e.i]],{align:[0,"align"]},null),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,["\n\n      "])),(n()(),o._51(0,null,null,103,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0,e=n.component;if("submit"===l){u=!1!==o._68(n,13).onSubmit(t)&&u}if("reset"===l){u=!1!==o._68(n,13).onReset()&&u}if("ngSubmit"===l){u=!1!==e.login()&&u}return u},null,null)),o._49(16384,null,0,_.u,[],null,null),o._49(540672,null,0,_.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o._73(2048,null,_.c,null,[_.i]),o._49(16384,null,0,_.o,[_.c],null,null),(n()(),o._77(null,["\n\n        "])),(n()(),o._51(0,null,null,6,"div",[["class","logo-container md-whiteframe-4dp"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),o._49(737280,null,0,e.i,[e.m,o.v,o._2],{layout:[0,"layout"]},null),o._49(737280,null,0,e.h,[e.m,o.v,o._2,[2,e.i]],{align:[0,"align"]},null),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,["\n          "])),(n()(),o._51(0,null,null,0,"img",[["src","./assets/images/ontimize.png"]],null,null,null,null,null)),(n()(),o._77(null,["\n        "])),(n()(),o._77(null,["\n\n        "])),(n()(),o._45(16777216,null,null,1,null,View_LoginComponent_1)),o._49(16384,null,0,r.j,[o._20,o._14],{ngIf:[0,"ngIf"]},null),(n()(),o._77(null,["\n\n        "])),(n()(),o._51(0,null,null,26,"div",[["fxLayout","row"]],null,null,null,null,null)),o._49(737280,null,0,e.i,[e.m,o.v,o._2],{layout:[0,"layout"]},null),(n()(),o._77(null,["\n          "])),(n()(),o._51(0,null,null,22,"md-form-field",[["class","mat-input-container mat-form-field"],["fxFill",""]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==o._68(n,34)._control.focus()&&u}return u},s.J,s.k)),o._49(737280,null,0,e.f,[e.m,o.v,o._2],null,null),o._49(16384,null,0,c._67,[[2,c.i],o.v],null,null),o._49(7389184,null,6,c._27,[o.v,o.l,[2,c.u]],null,null),o._74(335544320,1,{_control:0}),o._74(335544320,2,{_placeholderChild:0}),o._74(603979776,3,{_errorChildren:1}),o._74(603979776,4,{_hintChildren:1}),o._74(603979776,5,{_prefixChildren:1}),o._74(603979776,6,{_suffixChildren:1}),(n()(),o._77(1,["\n            "])),(n()(),o._51(0,[["user",1]],1,10,"input",[["class","mat-input mat-input-element"],["formControlName","username"],["id","username"],["mdInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"aria-describedby",0],[1,"aria-invalid",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==o._68(n,44)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==o._68(n,44).onTouched()&&u}if("compositionstart"===l){u=!1!==o._68(n,44)._compositionStart()&&u}if("compositionend"===l){u=!1!==o._68(n,44)._compositionEnd(t.target.value)&&u}if("blur"===l){u=!1!==o._68(n,50)._focusChanged(!1)&&u}if("focus"===l){u=!1!==o._68(n,50)._focusChanged(!0)&&u}if("input"===l){u=!1!==o._68(n,50)._onInput()&&u}return u},null,null)),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),o._49(16384,null,0,_.d,[o._2,o.v,[2,_.a]],null,null),o._73(1024,null,_.l,function(n){return[n]},[_.d]),o._49(671744,null,0,_.g,[[3,_.c],[8,null],[8,null],[2,_.l]],{name:[0,"name"]},null),o._73(2048,null,_.m,null,[_.g]),o._49(16384,null,0,_.n,[_.m],null,null),o._49(16384,null,0,c._67,[[2,c.i],o.v],null,null),o._49(933888,null,0,c._40,[o.v,o._2,d.a,[2,_.m],[2,_.p],[2,_.i],[2,c.r]],{id:[0,"id"],placeholder:[1,"placeholder"]},null),o._70(0,i.b,[o.E]),o._73(2048,[[1,4]],c._28,null,[c._40]),(n()(),o._77(1,["\n          "])),(n()(),o._77(null,["\n        "])),(n()(),o._77(null,["\n        "])),(n()(),o._51(0,null,null,26,"div",[["fxLayout","row"]],null,null,null,null,null)),o._49(737280,null,0,e.i,[e.m,o.v,o._2],{layout:[0,"layout"]},null),(n()(),o._77(null,["\n            "])),(n()(),o._51(0,null,null,22,"md-form-field",[["class","mat-input-container mat-form-field"],["fxFill",""]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==o._68(n,62)._control.focus()&&u}return u},s.J,s.k)),o._49(737280,null,0,e.f,[e.m,o.v,o._2],null,null),o._49(16384,null,0,c._67,[[2,c.i],o.v],null,null),o._49(7389184,null,6,c._27,[o.v,o.l,[2,c.u]],null,null),o._74(335544320,7,{_control:0}),o._74(335544320,8,{_placeholderChild:0}),o._74(603979776,9,{_errorChildren:1}),o._74(603979776,10,{_hintChildren:1}),o._74(603979776,11,{_prefixChildren:1}),o._74(603979776,12,{_suffixChildren:1}),(n()(),o._77(1,["\n              "])),(n()(),o._51(0,[["password",1]],1,10,"input",[["class","mat-input mat-input-element"],["formControlName","password"],["id","password"],["mdInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"aria-describedby",0],[1,"aria-invalid",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==o._68(n,72)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==o._68(n,72).onTouched()&&u}if("compositionstart"===l){u=!1!==o._68(n,72)._compositionStart()&&u}if("compositionend"===l){u=!1!==o._68(n,72)._compositionEnd(t.target.value)&&u}if("blur"===l){u=!1!==o._68(n,78)._focusChanged(!1)&&u}if("focus"===l){u=!1!==o._68(n,78)._focusChanged(!0)&&u}if("input"===l){u=!1!==o._68(n,78)._onInput()&&u}return u},null,null)),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),o._49(16384,null,0,_.d,[o._2,o.v,[2,_.a]],null,null),o._73(1024,null,_.l,function(n){return[n]},[_.d]),o._49(671744,null,0,_.g,[[3,_.c],[8,null],[8,null],[2,_.l]],{name:[0,"name"]},null),o._73(2048,null,_.m,null,[_.g]),o._49(16384,null,0,_.n,[_.m],null,null),o._49(16384,null,0,c._67,[[2,c.i],o.v],null,null),o._49(933888,null,0,c._40,[o.v,o._2,d.a,[2,_.m],[2,_.p],[2,_.i],[2,c.r]],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),o._70(0,i.b,[o.E]),o._73(2048,[[7,4]],c._28,null,[c._40]),(n()(),o._77(1,["\n            "])),(n()(),o._77(null,["\n        "])),(n()(),o._77(null,["\n      \n\n        "])),(n()(),o._51(0,null,null,5,"button",[["class","mat-raised-button"],["color","primary"],["md-raised-button",""],["type","submit"]],[[8,"disabled",0]],null,null,s.E,s.f)),o._49(16384,null,0,c._67,[[2,c.i],o.v],null,null),o._49(180224,null,0,c.H,[o._2,o.v,d.a,c.f],{color:[0,"color"]},null),o._49(16384,null,0,c._78,[],null,null),(n()(),o._77(0,["",""])),o._70(0,i.b,[o.E]),(n()(),o._77(null,["\n        "])),(n()(),o._51(0,null,null,0,"div",[["layout-padding",""]],null,null,null,null,null)),(n()(),o._77(null,["\n        "])),(n()(),o._51(0,null,null,0,"div",[["layout-padding",""]],null,null,null,null,null)),(n()(),o._77(null,["\n        "])),(n()(),o._51(0,null,null,18,"div",[["fxLayout","column"],["fxLayoutAlign","center center"],["layout-padding",""]],null,null,null,null,null)),o._49(737280,null,0,e.i,[e.m,o.v,o._2],{layout:[0,"layout"]},null),o._49(737280,null,0,e.h,[e.m,o.v,o._2,[2,e.i]],{align:[0,"align"]},null),(n()(),o._77(null,["\n          "])),(n()(),o._51(0,null,null,3,"span",[["class","title_text"]],null,null,null,null,null)),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,["",":"])),o._70(0,i.b,[o.E]),(n()(),o._77(null,["\n          "])),(n()(),o._51(0,null,null,3,"span",[["class","dark_text"]],null,null,null,null,null)),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,[""," : demo"])),o._70(0,i.b,[o.E]),(n()(),o._77(null,["\n          "])),(n()(),o._51(0,null,null,3,"span",[["class","dark_text"]],null,null,null,null,null)),o._49(999424,null,0,e.c,[e.m,o.v,o._2,o._1,o.G,o.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),o._77(null,[""," : demouser"])),o._70(0,i.b,[o.E]),(n()(),o._77(null,["\n        "])),(n()(),o._77(null,["\n      "])),(n()(),o._77(null,["\n\n    "])),(n()(),o._77(null,["\n\n  "]))],function(n,l){var t=l.component;n(l,1,0,"row");n(l,2,0,"center center"),n(l,3,0);n(l,4,0,"login-outer-container");n(l,7,0,"column");n(l,8,0,"center");n(l,9,0,"login-inner-container md-whiteframe-1dp"),n(l,13,0,t.loginForm);n(l,18,0,"column");n(l,19,0,"center center");n(l,20,0,"logo-container md-whiteframe-4dp"),n(l,26,0,t.sessionExpired);n(l,29,0,"row"),n(l,32,0);n(l,43,0,"mat-input");n(l,46,0,"username");n(l,50,0,"username",o._56(1,"",o._78(l,50,1,o._68(l,51).transform("USERNAME")),""));n(l,57,0,"row"),n(l,60,0);n(l,71,0,"mat-input");n(l,74,0,"password");n(l,78,0,"password",o._56(1,"",o._78(l,78,1,o._68(l,79).transform("PASSWORD")),""),"password");n(l,86,0,"primary");n(l,96,0,"column");n(l,97,0,"center center");n(l,100,0,"title_text");n(l,105,0,"dark_text");n(l,110,0,"dark_text")},function(n,l){n(l,11,0,o._68(l,15).ngClassUntouched,o._68(l,15).ngClassTouched,o._68(l,15).ngClassPristine,o._68(l,15).ngClassDirty,o._68(l,15).ngClassValid,o._68(l,15).ngClassInvalid,o._68(l,15).ngClassPending),n(l,31,0,o._68(l,34)._control.errorState,o._68(l,34)._control.errorState,o._68(l,34)._control.focused,o._68(l,34)._shouldForward("untouched"),o._68(l,34)._shouldForward("touched"),o._68(l,34)._shouldForward("pristine"),o._68(l,34)._shouldForward("dirty"),o._68(l,34)._shouldForward("valid"),o._68(l,34)._shouldForward("invalid"),o._68(l,34)._shouldForward("pending")),n(l,42,1,[o._68(l,48).ngClassUntouched,o._68(l,48).ngClassTouched,o._68(l,48).ngClassPristine,o._68(l,48).ngClassDirty,o._68(l,48).ngClassValid,o._68(l,48).ngClassInvalid,o._68(l,48).ngClassPending,o._68(l,50).id,o._68(l,50).placeholder,o._68(l,50).disabled,o._68(l,50).required,o._68(l,50)._ariaDescribedby||null,o._68(l,50).errorState]),n(l,59,0,o._68(l,62)._control.errorState,o._68(l,62)._control.errorState,o._68(l,62)._control.focused,o._68(l,62)._shouldForward("untouched"),o._68(l,62)._shouldForward("touched"),o._68(l,62)._shouldForward("pristine"),o._68(l,62)._shouldForward("dirty"),o._68(l,62)._shouldForward("valid"),o._68(l,62)._shouldForward("invalid"),o._68(l,62)._shouldForward("pending")),n(l,70,1,[o._68(l,76).ngClassUntouched,o._68(l,76).ngClassTouched,o._68(l,76).ngClassPristine,o._68(l,76).ngClassDirty,o._68(l,76).ngClassValid,o._68(l,76).ngClassInvalid,o._68(l,76).ngClassPending,o._68(l,78).id,o._68(l,78).placeholder,o._68(l,78).disabled,o._68(l,78).required,o._68(l,78)._ariaDescribedby||null,o._68(l,78).errorState]),n(l,84,0,o._68(l,86).disabled||null),n(l,88,0,o._78(l,88,0,o._68(l,89).transform("LOGIN"))),n(l,101,0,o._78(l,101,0,o._68(l,102).transform("EXAMPLE_LOGIN_INFO"))),n(l,106,0,o._78(l,106,0,o._68(l,107).transform("USERNAME"))),n(l,111,0,o._78(l,111,0,o._68(l,112).transform("PASSWORD")))})}function View_LoginComponent_Host_0(n){return o._79(0,[(n()(),o._51(0,null,null,1,"login",[],null,null,null,View_LoginComponent_0,b)),o._49(114688,null,0,a.a,[m.a,o.R,m.m,p.a,f.a,o.E],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return h});var u=t(642),o=t(0),e=t(33),i=t(27),a=t(178),_=t(14),r=t(3),s=t(34),c=t(9),d=t(24),m=t(7),p=t(163),f=t(162),g=[u.a],b=o._48({encapsulation:2,styles:g,data:{}}),h=o._46("login",a.a,View_LoginComponent_Host_0,{},{},[])},642:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[".login-outer-container {\n  min-height: 640px !important; }\n  .login-outer-container .login-inner-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    width: 450px;\n    padding: 5em;\n    padding-top: 8em; }\n    .login-outer-container .login-inner-container h1 {\n      text-align: center;\n      margin-bottom: 30px; }\n    .login-outer-container .login-inner-container .logo-container {\n      border-radius: 50%;\n      width: 150px;\n      height: 150px;\n      position: absolute;\n      top: -75px;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%); }\n      .login-outer-container .login-inner-container .logo-container img {\n        max-height: 125px;\n        max-width: 125px; }\n    .login-outer-container .login-inner-container .session-expired {\n      text-align: center; }\n    .login-outer-container .login-inner-container button {\n      width: 100%;\n      margin: 30px 0px 0px 0px; }\n    .login-outer-container .login-inner-container .dark_text {\n      color: #c5c5c5;\n      font-size: 9pt; }\n    .login-outer-container .login-inner-container .title_text {\n      color: #7b7a79;\n      font-size: 10pt;\n      font-weight: bold; }\n"]},643:function(n,l,t){"use strict";function View_AppComponent_0(n){return o._79(0,[(n()(),o._51(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o._49(212992,null,0,e.q,[e.b,o._20,o.q,[8,null],o.l],null,null),(n()(),o._77(null,["\n"]))],function(n,l){n(l,1,0)},null)}function View_AppComponent_Host_0(n){return o._79(0,[(n()(),o._51(0,null,null,1,"o-app",[],null,null,null,View_AppComponent_0,_)),o._49(114688,null,0,i.a,[o.E],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return r});var u=t(644),o=t(0),e=t(7),i=t(402),a=[u.a],_=o._48({encapsulation:0,styles:a,data:{}}),r=o._46("o-app",i.a,View_AppComponent_Host_0,{},{},[])},644:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},645:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t(646),o=t(647),e={apiEndpoint:"https://try.ontimize.com/QSAllComponents-jee/services/rest",uuid:"com.ontimize.web.quickstart",title:"Ontimize Web Quickstart",locale:"es",serviceType:"OntimizeEE",servicesConfiguration:u.a,appMenuConfiguration:o.a,applicationLocales:["es","en"]}},646:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u={users:{path:"/users"},customers:{path:"/customers"},branches:{path:"/branches"},movements:{path:"/movements"},employees:{path:"/employees"}}},647:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[{id:"home",name:"HOME",icon:"dashboard",route:"/main/home"},{id:"views",name:"VIEW",icon:"remove_red_eye",opened:!0,items:[{id:"customers",name:"CUSTOMERS",route:"/main/customers",icon:"people"},{id:"accounts",name:"ACCOUNTS",route:"/main/accounts",icon:"credit_card"},{id:"branches",name:"BRANCHES",route:"/main/branches",icon:"account_balance"},{id:"employees",name:"EMPLOYEES",route:"/main/employees",icon:"person"}]},{id:"general",name:"GENERAL",icon:"info_outline",opened:!1,items:[{id:"about",name:"ABOUT",route:"/main/about",icon:"help_outline"}]}]},648:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t(62),o=t(177),e=(o.a,u.c,function(){function MainRoutingModule(){}return MainRoutingModule}())},649:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function MainModule(){}return MainModule}()},650:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t(178),o=(u.a,function(){function LoginRoutingModule(){}return LoginRoutingModule}())},651:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function LoginModule(){}return LoginModule}()},652:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t(62),o=(u.c,function(){function AppRoutingModule(){}return AppRoutingModule}())}},[413]);