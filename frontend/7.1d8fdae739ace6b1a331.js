(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/no6":function(t,c,e){"use strict";e.r(c),e.d(c,"MarketAreaModule",function(){return $});var n=e("ofXK"),i=e("STbY"),r=e("0IaG"),o=e("/t3+"),a=e("3Pt+"),s=e("xHqg"),b=e("d3UM"),u=e("f0Cb"),d=e("XhcP"),p=e("wZkO"),h=e("v2Hk"),l=e("mrSG"),g=e("TLMc"),m=e("vBqF"),f=e("ZWFy"),S=e("fXoL"),v=e("Vmn7"),C=e("RYsQ"),y=e("TJkB"),I=e("NFeN"),k=e("vSYu"),w=e("Nqw5"),O=e("6M75");class M{constructor(){this.quantity=1}}var R=e("AytR"),P=e("cOBF"),_=e("Wp6s"),x=e("bTqV"),B=e("kmnG"),F=e("qFsG");function q(t,c){if(1&t){const t=S.Tb();S.Sb(0,"button",6),S.Zb("click",function(){return S.oc(t),S.cc().addToCart()}),S.vc(1,"Add To Cart"),S.Rb()}}function N(t,c){if(1&t){const t=S.Tb();S.Sb(0,"button",7),S.Zb("click",function(){return S.oc(t),S.cc().updateOldCartItem()}),S.vc(1,"Update Product"),S.Rb()}}let j=(()=>{class t{constructor(t,c,e){this.cartItemsService=t,this.notificationService=c,this.tokenHandlerService=e,this.cartItem=new M}ngOnInit(){return Object(l.a)(this,void 0,void 0,function*(){this.imageUrl=R.a.productsUrl+"productImages/"+this.product.imageName;const t=m.a.getState().cartItemState.cartItems.find(t=>t.productId===this.product._id);t&&(this.cartItem=Object.assign({},t)),this.unSubscribeFromStore=m.a.subscribe(()=>{const t=m.a.getState().cartItemState.cartItems.find(t=>t.productId===this.product._id);this.cartItem=t?Object.assign({},t):new M})})}plus(){this.cartItem.quantity++}minus(){this.cartItem.quantity--}addToCart(){return Object(l.a)(this,void 0,void 0,function*(){try{const t=this.createCartItem(),c=yield this.cartItemsService.addCartItemAsync(t);this.cartItem=Object.assign({},c)}catch(t){this.notificationService.error(t),403===t.status&&this.tokenHandlerService.tokenSessionExpired()}})}updateOldCartItem(){return Object(l.a)(this,void 0,void 0,function*(){try{this.cartItem.totalPrice=this.product.price*this.cartItem.quantity,yield this.cartItemsService.updateCartItemAsync(this.cartItem)}catch(t){this.notificationService.error(t),403===t.status&&this.tokenHandlerService.tokenSessionExpired()}})}createCartItem(){const t=new M;return t.productId=this.product._id,t.totalPrice=this.product.price*this.cartItem.quantity,t.shoppingCartId=m.a.getState().shoppingCartState.shoppingCart._id,t.product=this.product,t.quantity=this.cartItem.quantity,t}ngOnDestroy(){this.unSubscribeFromStore&&this.unSubscribeFromStore()}}return t.\u0275fac=function(c){return new(c||t)(S.Mb(P.a),S.Mb(C.a),S.Mb(y.a))},t.\u0275cmp=S.Gb({type:t,selectors:[["app-product-card"]],inputs:{product:"product"},decls:22,vars:10,consts:[["mat-card-image","",3,"src","alt"],["mat-mini-fab","","color","warn",3,"disabled","click"],["matInput","","type","number","min","1","disabled","",3,"ngModel","ngModelChange"],["mat-mini-fab","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,c){1&t&&(S.Sb(0,"mat-card"),S.Nb(1,"img",0),S.Sb(2,"mat-card-content"),S.Sb(3,"mat-card-title"),S.vc(4),S.Rb(),S.Sb(5,"mat-card-subtitle"),S.vc(6),S.dc(7,"currency"),S.Rb(),S.Rb(),S.Sb(8,"mat-card-actions"),S.Sb(9,"button",1),S.Zb("click",function(){return c.minus()}),S.Sb(10,"mat-icon"),S.vc(11,"remove"),S.Rb(),S.Rb(),S.Sb(12,"mat-form-field"),S.Sb(13,"mat-label"),S.vc(14,"Quantity"),S.Rb(),S.Sb(15,"input",2),S.Zb("ngModelChange",function(t){return c.cartItem.quantity=t}),S.Rb(),S.Rb(),S.Sb(16,"button",3),S.Zb("click",function(){return c.plus()}),S.Sb(17,"mat-icon"),S.vc(18,"add"),S.Rb(),S.Rb(),S.Nb(19,"br"),S.uc(20,q,2,0,"button",4),S.uc(21,N,2,0,"button",5),S.Rb(),S.Rb()),2&t&&(S.Bb(1),S.ic("src",c.imageUrl,S.pc),S.ic("alt",c.product.name),S.Bb(3),S.wc(c.product.name),S.Bb(2),S.wc(S.ec(7,8,c.product.price)),S.Bb(3),S.hc("disabled",c.cartItem.quantity<=1),S.Bb(6),S.hc("ngModel",c.cartItem.quantity),S.Bb(5),S.hc("ngIf",!c.cartItem._id),S.Bb(1),S.hc("ngIf",c.cartItem._id))},directives:[_.a,_.e,_.c,_.h,_.g,_.b,x.b,I.a,B.c,B.f,F.b,a.p,a.b,a.l,a.o,n.m],pipes:[n.c],styles:["mat-card[_ngcontent-%COMP%]{width:300px;display:inline-block;margin:5px}img[_ngcontent-%COMP%]{height:200px}mat-form-field[_ngcontent-%COMP%]{width:100px;margin-left:5px}"]}),t})();var T=e("Xa2L");function Z(t,c){if(1&t){const t=S.Tb();S.Sb(0,"a",3),S.Zb("click",function(){S.oc(t);const e=c.$implicit;return S.cc().changeCategory(e._id)}),S.vc(1),S.Rb()}if(2&t){const t=c.$implicit;S.Bb(1),S.xc(" ",t.categoryName," ")}}function A(t,c){1&t&&S.Nb(0,"app-product-card",7),2&t&&S.hc("product",c.$implicit)}function H(t,c){if(1&t&&(S.Qb(0),S.uc(1,A,1,1,"app-product-card",6),S.Pb()),2&t){const t=S.cc();S.Bb(1),S.hc("ngForOf",t.productsSwitched)}}function G(t,c){1&t&&(S.Qb(0),S.Sb(1,"div",8),S.Sb(2,"p"),S.Nb(3,"mat-spinner"),S.Rb(),S.Rb(),S.Pb())}function Q(t,c){1&t&&(S.Qb(0),S.Sb(1,"div",8),S.Sb(2,"p"),S.Sb(3,"span"),S.vc(4,"Nothing with that name in store"),S.Rb(),S.Rb(),S.Rb(),S.Pb())}let E=(()=>{class t{constructor(t,c,e){this.categoriesService=t,this.productsService=c,this.tokenHandlerService=e}ngOnInit(){return Object(l.a)(this,void 0,void 0,function*(){try{this.categories=yield this.categoriesService.getAllCategoriesAsync(),this.products=yield this.productsService.getAllProducts(),this.productsSwitched=[...this.products],this.unSubscribeFromStore=m.a.subscribe(()=>Object(l.a)(this,void 0,void 0,function*(){this.products=yield this.productsService.getAllProducts(),this.productsSwitched=[...this.products]}))}catch(t){403===t.status&&this.tokenHandlerService.tokenSessionExpired()}})}changeCategory(t){this.productsSwitched=[...this.products.filter(c=>c.categoryId===t)]}allCategory(){this.productsSwitched=[...this.products]}searchProduct(t){this.productsSwitched=[...this.products.filter(c=>c.name.toLowerCase().includes(t.toLowerCase()))]}ngOnDestroy(){this.unSubscribeFromStore&&this.unSubscribeFromStore()}}return t.\u0275fac=function(c){return new(c||t)(S.Mb(k.a),S.Mb(w.a),S.Mb(y.a))},t.\u0275cmp=S.Gb({type:t,selectors:[["app-products-list"]],decls:10,vars:4,consts:[["mat-tab-nav-bar",""],[3,"productToSearch"],[1,"toolbar-flex"],["mat-tab-link","","active","",3,"click"],["mat-tab-link","","active","",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"product",4,"ngFor","ngForOf"],[3,"product"],[1,"nothing-in-store"]],template:function(t,c){1&t&&(S.Sb(0,"nav",0),S.Sb(1,"app-search-bar",1),S.Zb("productToSearch",function(t){return c.searchProduct(t)}),S.Rb(),S.Nb(2,"span",2),S.Sb(3,"a",3),S.Zb("click",function(){return c.allCategory()}),S.vc(4," All "),S.Rb(),S.uc(5,Z,2,1,"a",4),S.Rb(),S.Sb(6,"div"),S.uc(7,H,2,1,"ng-container",5),S.uc(8,G,4,0,"ng-container",5),S.uc(9,Q,5,0,"ng-container",5),S.Rb()),2&t&&(S.Bb(5),S.hc("ngForOf",c.categories),S.Bb(2),S.hc("ngIf",null==c.productsSwitched?null:c.productsSwitched.length),S.Bb(1),S.hc("ngIf",!(null!=c.products&&c.products.length)),S.Bb(1),S.hc("ngIf",!(null!=c.productsSwitched&&c.productsSwitched.length)))},directives:[p.b,O.a,p.a,n.l,n.m,j,T.b],styles:['nav[_ngcontent-%COMP%]{background:#fff}div[_ngcontent-%COMP%]{overflow:auto;height:85%}.toolbar-flex[_ngcontent-%COMP%]{flex:0.5}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:auto}.nothing-in-store[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}p[_ngcontent-%COMP%]{position:relative;height:60%;width:450px}p[_ngcontent-%COMP%], p[_ngcontent-%COMP%]:before{border-radius:20px}p[_ngcontent-%COMP%]:before{content:"";background-image:url(empty-store.7c43028843487e0a3f47.jfif);background-position:50%;background-repeat:no-repeat;background-size:cover;position:absolute;top:0;right:0;bottom:0;left:0;opacity:.65}p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;font-size:xx-large;color:#fff}']}),t})();var L=e("laEZ");function U(t,c){if(1&t&&(S.Qb(0),S.Nb(1,"app-cart-list",5),S.Pb()),2&t){const t=S.cc();S.Bb(1),S.hc("shoppingCart",t.shoppingCart)("enableChanges",!0)}}let J=(()=>{class t{constructor(t,c,e){this.shoppingCartService=t,this.notificationService=c,this.tokenHandlerService=e}ngOnInit(){return Object(l.a)(this,void 0,void 0,function*(){try{if(this.shoppingCart=yield this.shoppingCartService.getShoppingCartAsync(),!this.shoppingCart||!this.shoppingCart.open){const t=new g.a;t.userId=m.a.getState().authState.user._id,this.shoppingCart=yield this.shoppingCartService.createShoppingCart(t),m.a.dispatch(Object(f.e)())}}catch(t){this.notificationService.error(t),403===t.status&&this.tokenHandlerService.tokenSessionExpired()}})}}return t.\u0275fac=function(c){return new(c||t)(S.Mb(v.a),S.Mb(C.a),S.Mb(y.a))},t.\u0275cmp=S.Gb({type:t,selectors:[["app-market"]],decls:15,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"click"],["opened","","mode","side"],["drawer",""],[4,"ngIf"],[3,"shoppingCart","enableChanges"]],template:function(t,c){if(1&t){const t=S.Tb();S.Sb(0,"mat-drawer-container"),S.Sb(1,"nav",0),S.Sb(2,"a",1),S.Zb("click",function(){return S.oc(t),S.nc(12).toggle()}),S.Sb(3,"mat-icon"),S.vc(4,"keyboard_arrow_left"),S.Rb(),S.vc(5," \xa0 Cart \xa0 "),S.Sb(6,"mat-icon"),S.vc(7,"shopping_cart"),S.Rb(),S.vc(8," \xa0 "),S.Sb(9,"mat-icon"),S.vc(10,"keyboard_arrow_right"),S.Rb(),S.Rb(),S.Rb(),S.Sb(11,"mat-drawer",2,3),S.uc(13,U,2,2,"ng-container",4),S.Rb(),S.Nb(14,"app-products-list"),S.Rb()}2&t&&(S.Bb(13),S.hc("ngIf",null==c.shoppingCart?null:c.shoppingCart.open))},directives:[d.b,p.b,p.a,I.a,d.a,n.m,E,L.a],styles:["mat-drawer-container[_ngcontent-%COMP%]{height:100%;background:inherit}mat-drawer[_ngcontent-%COMP%]{width:25%}nav[_ngcontent-%COMP%]{background:#fff}"]}),t})();var X=e("tyNb");const Y=[{path:"",component:J}];let $=(()=>{class t{}return t.\u0275mod=S.Kb({type:t}),t.\u0275inj=S.Jb({factory:function(c){return new(c||t)},imports:[[n.b,h.a,b.b,a.r,o.a,i.c,r.f,s.d,u.a,d.c,p.c,X.d.forChild(Y)]]}),t})()}}]);