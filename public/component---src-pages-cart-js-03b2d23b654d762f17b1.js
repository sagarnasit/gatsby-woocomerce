(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{214:function(e,t,r){"use strict";r.r(t);r(21),r(151),r(221),r(13),r(20);var n=r(1),a=r(0),c=(r(83),r(210)),l=r(209),o=r(211);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.id,r=e.name,a=e.price,c=e.qty,l=e.removeItem,i=a.replace("$","");return Object(n.a)("li",{css:b},Object(n.a)("h4",null,r),Object(n.a)("div",null),Object(n.a)("span",null,Object(n.a)(o.a,{price:i}))," ","x ",Object(n.a)("span",null,c)," ="," ",Object(n.a)("span",null,Object(n.a)(o.a,{price:i*c})),Object(n.a)("label",{className:"removeItem",href:"",onClick:function(){return l(t)}},"Remove"))},s={name:"qbubgm",styles:"margin-left:0;"},b={name:"ek7787",styles:"margin-bottom:30px;list-style:none;font-size:0.9rem;.removeItem{margin-left:2rem;color:grey;text-decoration:underline;cursor:pointer;}h4{margin-bottom:0.5rem;font-size:20px;color:hsl(270,50%,40%);}"};t.default=function(){var e=Object(a.useState)([]),t=e[0],r=e[1];function b(e){var n=t.filter(function(t){return t.id!=e});localStorage.setItem("cart",JSON.stringify(n)),r(n)}Object(a.useEffect)(function(){var e=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):null;null!=e&&r(e)},[]);var m=0;return Object(n.a)(c.a,null,Object(n.a)(l.a,{title:"Cart"}),Object(n.a)("h1",null,"Cart"),Object(n.a)("ul",{css:s},t.map(function(e){return m+=Number.parseInt(e.price.replace("$",""))*e.qty,Object(n.a)(u,i({key:e.id},e,{removeItem:b}))})),Object(n.a)("hr",null),Object(n.a)("p",null,"Total: ",Object(n.a)(o.a,{price:m})))}},221:function(e,t,r){var n=r(2),a=r(222);n(n.S+n.F*(Number.parseInt!=a),"Number",{parseInt:a})},222:function(e,t,r){var n=r(5).parseInt,a=r(84).trim,c=r(109),l=/^[-+]?0[xX]/;e.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(e,t){var r=a(String(e),3);return n(r,t>>>0||(l.test(r)?16:10))}:n}}]);
//# sourceMappingURL=component---src-pages-cart-js-03b2d23b654d762f17b1.js.map