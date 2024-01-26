"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[534],{1731:(U,P,d)=>{d.d(P,{J:()=>k});var e=d(5619);const l_baseUrlData="https://ecommerce.routemisr.com/api/v1";var b=d(4769),I=d(9862),L=d(2425);let k=(()=>{var _;class x{constructor(s,c){this._HttpClient=s,this._ToastrService=c,this.cartNumber=new e.X(0),this.whishNumber=new e.X(0),this.whishList=new e.X([])}getUserOrders(s){return this._HttpClient.get(l_baseUrlData+"/orders/user/"+s)}addToCart(s){this.sendToCart(s).subscribe({next:c=>{"success"===c.status&&(this._ToastrService.success(c.message),this.cartNumber.next(c.numOfCartItems))}})}SetcheckOut(s,c){return this._HttpClient.post(l_baseUrlData+`/orders/checkout-session/${s}?url=https://ahmed-menisy.github.io/FreshCart`,c)}getProducts(s=1){return this._HttpClient.get(l_baseUrlData+`/products?page=${s}`)}getProductById(s){return this._HttpClient.get(l_baseUrlData+"/products/"+s)}getCategories(){return this._HttpClient.get(l_baseUrlData+"/categories")}getCategoriesById(s){return this._HttpClient.get(l_baseUrlData+"/categories/"+s)}getSubCategoriesToCat(s){return this._HttpClient.get(l_baseUrlData+`/categories/${s}/subcategories`)}sendToCart(s){return this._HttpClient.post(l_baseUrlData+"/cart",{productId:s})}getCartData(){return this._HttpClient.get(l_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(l_baseUrlData+"/cart")}updatePoductCount(s,c){return this._HttpClient.put(l_baseUrlData+"/cart/"+s,{count:c})}deletePoductCart(s){return this._HttpClient.delete(l_baseUrlData+"/cart/"+s)}getBrands(s=1){return this._HttpClient.get(l_baseUrlData+`/brands?page=${s}`)}getBrandData(s){return this._HttpClient.get(l_baseUrlData+`/brands/${s}`)}setWishlist(s){return this._HttpClient.post(l_baseUrlData+"/wishlist",{productId:s})}removeWishlist(s){return this._HttpClient.delete(l_baseUrlData+`/wishlist/${s}`)}getWishlist(){return this._HttpClient.get(l_baseUrlData+"/wishlist")}setAddresses(s){return this._HttpClient.post(l_baseUrlData+"/addresses",s)}getAddresses(){return this._HttpClient.get(l_baseUrlData+"/addresses")}removeAddresses(s){return this._HttpClient.delete(l_baseUrlData+`/addresses/${s}`)}}return(_=x).\u0275fac=function(s){return new(s||_)(b.LFG(I.eN),b.LFG(L._W))},_.\u0275prov=b.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),x})()},6472:(U,P,d)=>{d.d(P,{JX:()=>N,LS:()=>B,_s:()=>S});var e=d(4769),l=d(6814);function b(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function I(a,i){if(1&a&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function L(a,i){if(1&a&&(e.TgZ(0,"li",9),e.YNc(1,b,4,2,"a",10),e.YNc(2,I,4,2,"span",11),e.qZA()),2&a){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function k(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const o=e.MAs(1);return e.KtG(o.setCurrent(r.value))})("click",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const o=e.MAs(1);return e.KtG(o.setCurrent(r.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&a){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function _(a,i){if(1&a&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&a){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function x(a,i){if(1&a&&(e.TgZ(0,"li"),e.YNc(1,k,6,5,"a",10),e.YNc(2,_,7,5,"ng-container",15),e.qZA()),2&a){const t=i.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function T(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function s(a,i){if(1&a&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function c(a,i){if(1&a&&(e.TgZ(0,"li",17),e.YNc(1,T,4,2,"a",10),e.YNc(2,s,4,2,"span",11),e.qZA()),2&a){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function M(a,i){if(1&a&&(e.TgZ(0,"ul",4),e.YNc(1,L,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,x,3,6,"li",7),e.YNc(5,c,3,4,"li",8),e.qZA()),2&a){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class y{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(i){return null==i.id&&(i.id=this.DEFAULT_ID),this.instances[i.id]?this.updateInstance(i):(this.instances[i.id]=i,!0)}updateInstance(i){let t=!1;for(let n in this.instances[i.id])i[n]!==this.instances[i.id][n]&&(this.instances[i.id][n]=i[n],t=!0);return t}getCurrentPage(i){return this.instances[i]?this.instances[i].currentPage:1}setCurrentPage(i,t){if(this.instances[i]){let n=this.instances[i];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[i].currentPage=t,this.change.emit(i))}}setTotalItems(i,t){this.instances[i]&&0<=t&&(this.instances[i].totalItems=t,this.change.emit(i))}setItemsPerPage(i,t){this.instances[i]&&(this.instances[i].itemsPerPage=t,this.change.emit(i))}getInstance(i=this.DEFAULT_ID){return this.instances[i]?this.clone(this.instances[i]):{}}clone(i){var t={};for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n]);return t}}const H=Number.MAX_SAFE_INTEGER;let S=(()=>{class a{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let m=n.id||this.service.defaultId();return this.state[m]?this.state[m].slice:t}let p,u,r=n.totalItems&&n.totalItems!==t.length,o=this.createInstance(t,n),g=o.id,h=o.itemsPerPage,C=this.service.register(o);if(!r&&t instanceof Array){if(h=+h||H,p=(o.currentPage-1)*h,u=p+h,this.stateIsIdentical(g,t,p,u))return this.state[g].slice;{let v=t.slice(p,u);return this.saveState(g,t,v,p,u),this.service.change.emit(g),v}}return C&&this.service.change.emit(g),this.saveState(g,t,t,p,u),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(o=>!(o in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,n,r,o,g){this.state[t]={collection:n,size:n.length,slice:r,start:o,end:g}}stateIsIdentical(t,n,r,o){let g=this.state[t];return!(!g||g.size!==n.length||g.start!==r||g.end!==o)&&g.slice.every((u,h)=>u===n[r+h])}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y,16))},a.\u0275pipe=e.Yjl({name:"paginate",type:a,pure:!1}),a})(),Z=(()=>{class a{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,r,o){o=+o;let g=[];const p=Math.max(Math.ceil(r/n),1),u=Math.ceil(o/2),h=t<=u,C=p-u<t,m=!h&&!C;let v=o<p,f=1;for(;f<=p&&f<=o;){let D,A=this.calculatePageNumber(f,t,o,p);D=v&&(2===f&&(m||C)||f===o-1&&(m||h))?"...":A,g.push({label:D,value:A}),f++}return g}calculatePageNumber(t,n,r,o){let g=Math.ceil(r/2);return t===r?o:1===t?t:r<o?o-g<n?o-r+t:g<n?n-g+t:t:t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y),e.Y36(e.sBO))},a.\u0275dir=e.lG2({type:a,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),a})();function w(a){return!!a&&"false"!==a}let B=(()=>{class a{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=w(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=w(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=w(t)}trackByIndex(t){return t}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(o){return n.pageChange.emit(o)})("pageBoundsCorrection",function(o){return n.pageBoundsCorrection.emit(o)}),e.TgZ(2,"nav",2),e.YNc(3,M,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&r.pages.length<=1))}},dependencies:[Z,l.O5,l.sg,l.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),a})(),N=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[y],imports:[[l.ez]]}),a})()}}]);