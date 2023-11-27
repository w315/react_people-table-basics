(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),a=n(6),r=n(2),s=(n(31),n(32),n(33),n(15)),i=n.n(s),l=n(3),o=function(){var e=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})};return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.b,{className:e,to:"/",children:"Home"}),Object(l.jsx)(a.b,{className:e,to:"/people",children:"People"})]})})}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(r.b,{})})})]})},j=n(4),d=n(0),h=n.n(d).a.createContext(void 0);if(!h)throw new Error("err");var b=function(e){var t=e.children,n=Object(d.useState)(void 0),c=Object(j.a)(n,2),a=c[0],r=c[1],s=Object(d.useState)(!1),i=Object(j.a)(s,2),o=i[0],b=i[1],u=Object(d.useState)(!1),x=Object(j.a)(u,2),O={peoples:a,setPeoples:r,hasError:o,setHasError:b,isLoading:x[0],setIsLoading:x[1]};return Object(l.jsx)(h.Provider,{value:O,children:t})},u=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})};function x(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/"+e,c)})).then((function(e){return e.json()}))}var O=function(e){return x(e)},m=(n(35),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),p=function(){var e=function(){var e=Object(d.useContext)(h);if(!e)throw new Error("err");return e}(),t=e.peoples,n=e.setPeoples,c=e.hasError,s=e.setHasError,o=e.isLoading,j=e.setIsLoading,b=Object(r.r)().slug;return Object(d.useEffect)((function(){j(!0),O("people.json").then((function(e){n(e)})).catch((function(){s(!0)})).finally((function(){j(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[o&&Object(l.jsx)(m,{}),c&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===(null===t||void 0===t?void 0:t.length)&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!o&&Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var n=b===e.slug?"has-background-warning":"";return Object(l.jsxs)("tr",{"data-cy":"person",className:n,children:[Object(l.jsx)("td",{children:Object(l.jsx)(a.b,{to:"".concat(e.slug),className:i()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),t.find((function(t){return t.name===e.motherName}))?t.map((function(t){return t.name===e.motherName?Object(l.jsx)("td",{children:Object(l.jsx)(a.b,{to:"".concat(t.slug),className:"has-text-danger",children:t.name})}):null})):Object(l.jsx)("td",{children:e.motherName?e.motherName:"-"}),t.find((function(t){return t.name===e.fatherName}))?t.map((function(t){return t.name===e.fatherName?Object(l.jsx)("td",{children:Object(l.jsx)(a.b,{to:"".concat(t.slug),children:t.name})}):null})):Object(l.jsx)("td",{children:e.fatherName?e.fatherName:"-"})]},e.slug)}))})]})]})})]})},f=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})};Object(c.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(b,{children:Object(l.jsx)(r.e,{children:Object(l.jsxs)(r.c,{path:"/",element:Object(l.jsx)(o,{}),children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(u,{})}),Object(l.jsx)(r.c,{path:"/home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})}),Object(l.jsx)(r.c,{path:"/people",element:Object(l.jsx)(p,{}),children:Object(l.jsx)(r.c,{path:":slug",element:Object(l.jsx)(p,{})})}),Object(l.jsx)(r.c,{path:"*",element:Object(l.jsx)(f,{})})]})})})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.faa18715.chunk.js.map