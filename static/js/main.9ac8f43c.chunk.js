(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(7),r=c(4),l=c(5),o=c(9),i=c(8),u=c(1),d=c.n(u),j=c(6),b=c.n(j),p=(c(14),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selected:["Jam"]},e.clear=function(){e.setState({selected:[]})},e.toggle=function(t){var c=e.state.selected;c.includes(t)?e.setState({selected:c.filter((function(e){return e!==t}))}):e.setState({selected:[].concat(Object(a.a)(c),[t])})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selected;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{children:["Selected goods: ",Object(p.jsx)("span",{children:t.join(", ")})]}),0!==t.length&&Object(p.jsx)("button",{type:"button",className:"button",onClick:this.clear,children:"Clear"}),Object(p.jsx)("ul",{className:"products",children:h.map((function(c){return Object(p.jsxs)("li",{className:b()("products__item",{active:t.includes(c)}),children:[Object(p.jsx)("span",{children:c}),Object(p.jsx)("button",{onClick:function(){return e.toggle(c)},className:"button products__button",type:"button",children:t.includes(c)?"-":"+"})]},c)}))})]})}}]),c}(d.a.Component),O=m;s.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9ac8f43c.chunk.js.map