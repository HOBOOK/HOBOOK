(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{828:function(e,t,r){var content=r(898);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("907ab8da",content,!0,{sourceMap:!1})},895:function(e,t,r){var content=r(896);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("29751484",content,!0,{sourceMap:!1})},896:function(e,t,r){var n=r(11)((function(i){return i[1]}));n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},e.exports=n},897:function(e,t,r){"use strict";r(828)},898:function(e,t,r){var n=r(11)((function(i){return i[1]}));n.push([e.i,".page-title{height:60px!important;min-width:320px;padding:12px 18px}.page-title .title{font-size:1.4rem!important;font-weight:700!important}.page-title h4{margin:0;opacity:.7}@media(max-width:767px){.page-title h4{display:none}}",""]),n.locals={},e.exports=n},922:function(e,t,r){"use strict";r.r(t);r(6),r(7),r(9),r(3),r(13),r(10),r(14);var n=r(2),c=(r(79),r(895),r(66)),o=r(4);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(0),h=Object(f.i)("v-breadcrumbs__divider","li"),v=r(18);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var y=Object(o.a)(v.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(m,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),O=r(274),j=r(215),x=r(611),w=r(612),k=(r(38),{name:"HeaderPageTitle",props:{title:{type:String},subtitle:{type:String},background:{type:String,default:""},breadcrumbs:Boolean,back:String},data:function(){return{breadcrumbsItems:[]}},methods:{generateBreadcrumbs:function(){var e=this;if(this.breadcrumbs){var t=this.$route.path.split("/");t.shift(),this.breadcrumbsItems=[],t.forEach((function(path,r){var n="/"+t.slice(0,r+1).join("/");e.breadcrumbsItems.push({text:path,href:n,disabled:r===t.length-1})}))}}},mounted:function(){this.generateBreadcrumbs()}}),P=(r(897),r(31)),component=Object(P.a)(k,(function(){var e=this,t=e._self._c;return t(x.a,{staticClass:"page-title",style:"background:"+e.background,attrs:{"no-gutters":"",align:"center"}},[e.back?t(O.a,{staticClass:"mr-2",attrs:{icon:"",tile:"",small:""},on:{click:function(t){return e.$router.push(e.back)}}},[t(j.a,[e._v("mdi-chevron-left")])],1):e._e(),e._v(" "),t("span",{staticClass:"title"},[e._t("title"),e._v(" "),e.$slots.title?e._e():t("span",[e._v(e._s(e.title))])],2),e._v(" "),e._t("subtitle"),e._v(" "),e.$slots.subtitle?e._e():t("h4",{staticClass:"text-subtitle-2 mx-2"},[e._v(e._s(e.subtitle))]),e._v(" "),e.breadcrumbs?t(y,{staticClass:"py-0",attrs:{items:e.breadcrumbsItems}}):e._e(),e._v(" "),t(w.a),e._v(" "),e._t("right")],2)}),[],!1,null,null,null);t.default=component.exports}}]);