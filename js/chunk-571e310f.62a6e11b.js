(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-571e310f"],{"0d95":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"single-order-item"}},[e.isDelivered(e.itemStatusDeet)?r("div",[r("h6",[r("strong",[e._v("Delivered on "+e._s(e._f("formatDate")(e.itemStatusDeet.delivery.delivery_date)))])]),r("br")]):e._e(),r("div",{staticClass:"item-desc"},[r("b-row",[r("b-col",{attrs:{md:"2"}},[r("img",{staticClass:"item-img",attrs:{src:e.item.product.thumbnailUrls[1]+" ",alt:"",crossorigin:"anonymous"}})]),r("b-col",{attrs:{md:"7"}},[r("div",[e._v("\n\n          "+e._s(e.item.product.name)+"\n          "),r("br"),r("div",{staticClass:"info"},[r("strong",[e._v("₹ "+e._s(e.item.aggregatedPrice.amount))]),r("br"),r("span",{staticClass:"info"},[e._v("Brand: ")]),e._v("  \n            "),r("strong",[e._v(e._s(e.item.product.store))]),r("p",[r("span",{staticClass:"info"},[e._v("Quantity:")]),e._v("   \n              "),r("strong",[e._v(e._s(e.item.counts))]),r("br")]),Object.keys(e.item.customizations).length>0?r("div",[r("span",{staticClass:"info"},[r("strong",[e._v("Customizations")])]),e._l(Object.keys(e.item.customizations),(function(t,n){return r("p",{key:n},[r("span",{staticClass:"info"},[e._v(e._s(t))]),e._v("   \n                "),r("strong",[e._v(e._s(e.item.customizations[t]))])])}))],2):e._e()])])]),r("b-col",{attrs:{md:"3"}},[r("div",{staticClass:"info"},[e._v("\n          Due to the unconventional shipping methods, we cannot process direct returns on any orders.\n          If there is any severe damage to the product, then please contact us. "),r("br"),r("br"),r("a",{attrs:{href:"mailto:care@shopmarble.live"}},[e._v("care@shopmarble.live")])])])],1)],1)])},s=[],a=r("c1df"),i=r.n(a),o={name:"SingleOrderItem",props:{item:{type:Object,required:!0}},data:function(){return{}},filters:{formatDate:function(e){return i()(e).format("MMMM Do, YYYY")}},methods:{isDelivered:function(e){return e&&"DELIVERED"===e.status}},computed:{itemStatusDeet:function(){return this.item.order_line_level_processing_details},s3BucketUrl:function(){return"https://drumil-test-ecom-bucket.s3.amazonaws.com/"}}},c=o,d=(r("b4f6"),r("2877")),l=Object(d["a"])(c,n,s,!1,null,null,null);t["a"]=l.exports},1331:function(e,t,r){},"3d5c":function(e,t,r){},4558:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"align-left",attrs:{id:"order-view"}},[r("div",{staticClass:"space"}),e._v("\n   \n  "),r("h2",[e._v("Your orders")]),r("b-tabs",[r("template",{slot:"tabs"},e._l(e.tabs,(function(t,n){return r("b-nav-item",{key:n,attrs:{active:e.activeTab===t.key},on:{click:function(r){return e.tabSelected(t.key)}}},[e._v(e._s(t.name))])})),1)],2),r("div",{staticClass:"order-list"},[e._l(e.filteredOrders,(function(e,t){return r("div",{key:t},[r("single-order",{attrs:{order:e}})],1)})),r("strong",[e._v("Return and Refund Policy")]),r("br"),r("br"),e._m(0),e.filteredOrders.length<=0?r("div",{staticClass:"empty-info"},[r("p",[e._v("You haven't placed any orders or haven't logged in.")])]):e._e()],2)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("1. Our Marble merchandise is produced with utmost care for product quality. Should there be any manufacturing defect or \n      should the customer want to exchange an unused item fro size, colour, etc., it may be exchanged within 10 days of purchase \n      at any Marble store by producing the cash memo and the item with its original packaging and tags intact "),r("br"),r("br"),e._v("\n     2. Marble does not refund cash or issue cred it notes fore changed items but any item can be purchased in exchange for the same value "),r("br"),r("br"),e._v("\n     3. In the event that there are no store tags or cash memo and in case of soiling/damage to the item in question, no exchange shall be entertained.")])}],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=(r("96cf"),r("3b8d")),o=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"single-order"}},[r("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[r("div",{staticClass:"info",attrs:{slot:"header"},slot:"header"},[r("b-row",[r("b-col",[r("div",[r("strong",[e._v("Order #")]),e._v(" "+e._s(e.order._id.substr(e.order._id.length-6))+"\n            "),r("br"),r("strong",[e._v("Order placed on")]),e._v(" "+e._s(e._f("formattedDate")(e.order.auditLog.createdOn))+"\n          ")])]),r("b-col",[r("div",{staticClass:"align-right"},[r("div",[e._v("\n            Status:\n            "),r("span",{class:{green:"CANCELLED"!=e.order.overall_status,red:"CANCELLED"===e.order.overall_status}},[r("strong",[e._v(e._s(e.order.overall_status))])])]),r("router-link",{attrs:{to:"/orders/"+e.order._id}},[e._v("Order Details")])],1)])],1)],1),r("div",{staticClass:"order-body"},e._l(e.order.cart.items,(function(t,n){return r("div",{key:n},[r("single-order-item",{attrs:{item:t}}),n!=e.order.cart.items.length-1?r("hr"):e._e()],1)})),0)])],1)},d=[],l=r("c1df"),u=r.n(l),f=r("0d95"),m={name:"SingleOrder",props:{order:{type:Object,required:!0}},components:{SingleOrderItem:f["a"]},data:function(){return{}},filters:{formattedDate:function(e){return e?u()(e).format("MMMM Do, YYYY"):""}}},v=m,b=(r("5376"),r("2877")),h=Object(b["a"])(v,c,d,!1,null,null,null),p=h.exports;function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={name:"OrderView",components:{SingleOrder:p},data:function(){return{tabs:[{name:"Orders",key:"all"},{name:"Open Orders",key:"open"},{name:"Completed",key:"completed"},{name:"Cancelled",key:"cancelled"}],activeTab:"all"}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("orderStore/getOrderList","");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{tabSelected:function(e){this.activeTab=e}},computed:O(O({},Object(o["b"])({orders:"orderStore/orders"})),{},{filteredOrders:function(){return"open"===this.activeTab?_.filter(this.orders,(function(e){return"COMPLETED"!==e.overall_status&&"CANCELLED"!==e.overall_status})):"completed"===this.activeTab?_.filter(this.orders,(function(e){return"COMPLETED"===e.overall_status})):"cancelled"===this.activeTab?_.filter(this.orders,(function(e){return"CANCELLED"===e.overall_status})):this.orders}})},C=y,D=(r("c63b"),Object(b["a"])(C,n,s,!1,null,null,null));t["default"]=D.exports},5376:function(e,t,r){"use strict";r("1331")},"9db8":function(e,t,r){},b4f6:function(e,t,r){"use strict";r("3d5c")},c63b:function(e,t,r){"use strict";r("9db8")}}]);
//# sourceMappingURL=chunk-571e310f.62a6e11b.js.map