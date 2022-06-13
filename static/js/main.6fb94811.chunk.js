(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(22),i=n.n(s),o=n(6),l=n(9),u=n(11),j=n(10),d=n(14),h=n(2),p=(n(29),function(){return Object(r.jsxs)("div",{className:"header d-flex",children:[Object(r.jsx)("h3",{children:Object(r.jsx)(d.b,{to:"/",children:"StarDB"})}),Object(r.jsxs)("ul",{className:"d-flex",children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/people/",children:"People"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/planets/",children:"Planets"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/starships/",children:"Starships"})})]})]})}),b=n(5),m=n.n(b),f=n(15),O=function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://swapi.dev/api",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(f.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson).slice(0,5));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(f.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPlanet).slice(1,6));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(f.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship).slice(2,7));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(f.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var n=e.id;return"".concat(t._imageBase,"/characters/").concat(n,".jpg")},this.getStarshipImage=function(e){var n=e.id;return"".concat(t._imageBase,"/starships/").concat(n,".jpg")},this.getPlanetImage=function(e){var n=e.id;return"".concat(t._imageBase,"/planets/").concat(n,".jpg")},this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,diameter:e.diameter,gravity:e.gravity,orbitalPeriod:e.orbital_period,population:e.population,terrain:e.terrain,climate:e.climate,rotationPeriod:e.rotation_period}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}}},g=(n(36),function(){return Object(r.jsx)("div",{className:"lds-css",children:Object(r.jsxs)("div",{className:"lds-double-ring",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})}),A=(n(37),function(){return Object(r.jsxs)("div",{className:"error-indicator",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(r.jsx)("span",{className:"boom",children:"BOOM!"}),Object(r.jsx)("span",{children:"something has gone terribly wrong"}),Object(r.jsx)("span",{children:"(but we already sent droids to fix it)"})]})}),x=A,N=(n(38),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).swapiService=new O,e.state={planet:{},loading:!0},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updatePlanet=function(){var t=Math.floor(15*Math.random())+3;e.swapiService.getPlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.loading,a=e.error,c=!(n||a),s=a?Object(r.jsx)(x,{}):null,i=n?Object(r.jsx)(g,{}):null,o=c?Object(r.jsx)(v,{planet:t}):null;return Object(r.jsxs)("div",{className:"random-planet jumbotron rounded",children:[s,i,o]})}}]),n}(a.Component));N.defaultProps={updateInterval:1e4};var v=function(e){var t=e.planet,n=t.id,a=t.name,s=t.population,i=t.rotationPeriod,o=t.diameter;return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("img",{className:"planet-image",alt:"planet",src:"https://starwars-visualguide.com/assets/img/planets/".concat(n,".jpg")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:a}),Object(r.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:"Population"}),Object(r.jsx)("span",{children:s})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:"Rotation Period"}),Object(r.jsx)("span",{children:i})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:"Diameter"}),Object(r.jsx)("span",{children:o})]})]})]})]})},U=N,E=(n(39),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(A,{}):this.props.children}}]),n}(a.Component)),S=c.a.createContext(),W=S.Consumer,y=S.Provider,w=n(4),I=(n(40),function(e){var t=e.item,n=e.field,a=e.label;return Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:a}),Object(r.jsx)("span",{children:t[n]})]})}),M=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).swapiService=new O,e.state={item:null,loading:!0,image:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updatePerson()}},{key:"componentDidUpdate",value:function(e){this.props.itemId===e.itemId&&this.props.getData===e.getData&&this.props.getImageUrl===e.getImageUrl||(this.setState({loading:!0}),this.updatePerson())}},{key:"updatePerson",value:function(){var e=this,t=this.props,n=t.itemId,r=t.getData,a=t.getImageUrl;n&&r(n).then((function(t){e.setState({item:t,loading:!1,image:a(t)})}))}},{key:"render",value:function(){var e=this.state,t=e.image,n=e.item;if(!n)return Object(r.jsx)("span",{children:"Select a person from a list"});var a=this.state.loading?Object(r.jsx)(g,{}):Object(r.jsx)(P,{item:n,image:t,children:this.props.children});return Object(r.jsx)("div",{className:"item-details card",children:a})}}]),n}(a.Component),P=function(e){var t=e.item,n=e.image,a=e.children,s=t.id,i=t.name;return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("img",{className:"item-image",src:n,alt:"character"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsxs)("h4",{children:[i," ",s]}),Object(r.jsx)("ul",{className:"list-group list-group-flush",children:c.a.Children.map(a,(function(e){return c.a.cloneElement(e,{item:t})}))})]})]})},k=function(e){return function(t){return function(n){return Object(r.jsx)(W,{children:function(a){var c=e(a);return Object(r.jsx)(t,Object(w.a)(Object(w.a)({},n),c))}})}}},C=k((function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}}))((function(e){return Object(r.jsxs)(M,Object(w.a)(Object(w.a)({},e),{},{children:[Object(r.jsx)(I,{field:"gender",label:"Gender"}),Object(r.jsx)(I,{field:"eyeColor",label:"Eye Color"})]}))})),D=k((function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}}))((function(e){return Object(r.jsxs)(M,Object(w.a)(Object(w.a)({},e),{},{children:[Object(r.jsx)(I,{field:"population",label:"Population"}),Object(r.jsx)(I,{field:"rotationPeriod",label:"Rotation Period"}),Object(r.jsx)(I,{field:"diameter",label:"Diameter"})]}))})),B=k((function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}}))((function(e){return Object(r.jsxs)(M,Object(w.a)(Object(w.a)({},e),{},{children:[Object(r.jsx)(I,{field:"model",label:"Model"}),Object(r.jsx)(I,{field:"length",label:"Length"}),Object(r.jsx)(I,{field:"costInCredits",label:"Cost"})]}))})),T=n(13),V=n.n(T),R=(n(41),function(e){var t=e.data,n=e.onItemSelected,a=e.children,c=t.map((function(e){var t=e.id,c=a(e);return Object(r.jsx)("li",{className:"list-group-item",onClick:function(){return n(t)},children:c},t)}));return Object(r.jsx)("ul",{className:"item-list list-group",children:c})});R.defaultProps={onItemSelected:function(){}},R.defaultProps={onItemSelected:V.a.func,data:V.a.arrayOf(V.a.object).isRequired,children:V.a.func.isRequired};var F=R,L=function(e){return function(t){Object(u.a)(a,t);var n=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={data:null,loading:!0,error:!1},e.update=function(){e.setState({loading:!0,error:!1}),e.props.getData().then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({error:!0,loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"render",value:function(){var t=this.state,n=t.data,a=t.loading,c=t.error;return a?Object(r.jsx)(g,{}):c?Object(r.jsx)(x,{}):Object(r.jsx)(e,Object(w.a)(Object(w.a)({},this.props),{},{data:n}))}}]),a}(a.Component)},G=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},Q=function(e){return function(t){return function(n){return Object(r.jsx)(t,Object(w.a)(Object(w.a)({},n),{},{children:e}))}}},_=function(e){var t=e.name;return Object(r.jsx)("span",{children:t})},K=G(k((function(e){return{getData:e.getAllPeople}})),L,Q(_))(F),Z=G(k((function(e){return{getData:e.getAllPlanets}})),L,Q(_))(F),H=G(k((function(e){return{getData:e.getAllStarships}})),L,Q((function(e){var t=e.model,n=e.name;return Object(r.jsxs)("span",{children:[n," (",t,") "]})})))(F),X=(n(42),function(e){var t=e.left,n=e.right;return Object(r.jsxs)("div",{className:"row mb2 block-margin",children:[Object(r.jsx)("div",{className:"col-md-6",children:t}),Object(r.jsx)("div",{className:"col-md-6",children:n})]})}),J=Object(h.f)((function(e){var t=e.history,n=e.match.params.id;return Object(r.jsx)(X,{left:Object(r.jsx)(K,{onItemSelected:function(e){return t.push(e)}}),right:Object(r.jsx)(C,{itemId:n})})})),z=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedItem:null},e.onItemSelected=function(t){e.setState({selectedItem:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.selectedItem;return Object(r.jsx)(X,{left:Object(r.jsx)(Z,{onItemSelected:this.onItemSelected}),right:Object(r.jsx)(D,{itemId:e})})}}]),n}(a.Component),q=Object(h.f)((function(e){var t=e.history;return Object(r.jsx)(H,{onItemSelected:function(e){return t.push(e)}})})),Y=(n(43),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1,swapiService:new O},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(x,{}):Object(r.jsx)(E,{children:Object(r.jsx)(y,{value:this.state.swapiService,children:Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:"stardb-app",children:[Object(r.jsx)(p,{}),Object(r.jsx)(U,{}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{path:"/",render:function(){return Object(r.jsx)("h2",{children:"Welcome to StarDb"})},exact:!0}),Object(r.jsx)(h.a,{path:"/people/:id?",component:J}),Object(r.jsx)(h.a,{path:"/planets",component:z}),Object(r.jsx)(h.a,{path:"/starships",exact:!0,component:q}),Object(r.jsx)(h.a,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return Object(r.jsx)(B,{itemId:t})}}),Object(r.jsx)(h.a,{render:function(){return Object(r.jsx)("h2",{children:"Welcome to StarDb"})}})]})]})})})})}}]),n}(a.Component));i.a.render(Object(r.jsx)(Y,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6fb94811.chunk.js.map