(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=(a(73),a(74),a(7));a(75);var o=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav navBar justify-content-end"},r.a.createElement("li",null,r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("img",{src:"/docs/4.2/assets/brand/bootstrap-solid.svg",width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"Bootstrap")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/",role:"button",className:"btn btn-link"},r.a.createElement("span",{className:"nav-span",style:{color:"/"===window.location.pathname?"green":"white"}},"Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/login",role:"button",className:"btn btn-link"},r.a.createElement("span",{className:"nav-span",style:{color:"/login"===window.location.pathname?"green":"white"}},"Login"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/signup",role:"button",className:"btn btn-link"},r.a.createElement("span",{className:"nav-span",style:{color:"/signup"===window.location.pathname?"green":"white"}},"Sign Up"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/review",role:"button",className:"btn btn-link"},r.a.createElement("span",{className:"nav-span",style:{color:"/review"===window.location.pathname?"green":"white"}},"Review")))))};a(80);var i=function(e){e.type,e.className;var t=e.onClick;return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",{style:{fontSize:"80px",color:"white"}},"Park Rangers"),r.a.createElement("p",{style:{fontSize:"40px",fontWeight:"bolder",color:"white"}},"Review local parks in your area"),r.a.createElement("button",{onClick:t,className:"btn btn-lg button mr-3 btn-success"},"See parks by age"),r.a.createElement("button",{onClick:t,className:"btn btn-lg button mr-3 btn-success"},"See parks by area"),r.a.createElement("button",{onClick:t,className:"btn btn-lg button btn-success"},"See parks by popularity"))};a(81);var m=function(e){e.type,e.className;var t=e.onClick;return r.a.createElement("div",{className:"review-buttons btn-toolbar justify-content-between"},r.a.createElement("button",{onClick:t,className:"btn btn-lg all button  btn-success"},"All ages"),r.a.createElement("button",{onClick:t,className:"btn btn-lg twoFour button  btn-success"},"Age 2-4"),r.a.createElement("button",{onClick:t,className:"btn btn-lg fiveSeven button  btn-success"},"Age 5-7"),r.a.createElement("button",{onClick:t,className:"btn btn-lg eightNine button  btn-success"},"Age 8-9"),r.a.createElement("button",{onClick:t,className:"btn btn-lg tenTwelwe button  btn-success"},"Age 10-12"),r.a.createElement("button",{onClick:t,className:"btn btn-lg thirteen button  btn-success"},"Age 13+"))},u=a(10),h=a(11),d=a(13),p=a(12),b=a(14);a(82);function E(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}var g=a(16),f=a.n(g),v={getParks:function(){return f.a.get("/api/parks")},getPark:function(e){return f.a.get("/api/parks/"+e)},deletePark:function(e){return f.a.delete("/api/parks/"+e)},savePark:function(e){return f.a.post("/api/parks",e)}};a(100);function k(e){var t=e.children;return r.a.createElement("div",{className:"list-container"},r.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var y=a(130),w=(a(101),function(e){function t(e,a){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e,a))).state={show:!1},n.handleShow=function(){n.setState({show:!0})},n.handleHide=function(){n.setState({show:!1})},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.description,n=e.age,l=e.image;e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{variant:"primary",onClick:this.handleShow},t),r.a.createElement(y.a,{className:"park-details",size:"lg",show:this.state.show,onHide:this.handleHide,dialogClassName:"modal-xl","aria-labelledby":"example-custom-modal-styling-title",backdrop:"static"},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,{id:"example-custom-modal-styling-title"},t)),r.a.createElement(y.a.Body,null,r.a.createElement("div",{className:"modal-image"},r.a.createElement("img",{src:l})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Park Description: "),a,r.a.createElement("br",null),r.a.createElement("strong",null,"Recommended Age:  ")," ",n),r.a.createElement("strong",null,"Park Features:"),r.a.createElement("br",null),"*features here*",r.a.createElement("p",null))))}}]),t}(n.Component)),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={parks:[],thumbnail:"",title:"",summary:"",href:"",appropriateAge:"",starRating:""},a.loadParks=function(){v.getParks().then(function(e){return a.setState({parks:e.data,title:"TITLE",summary:"SUMMARY",appropriateAge:"AGE",href:"link"})}).catch(function(e){return console.log(e)})},a.deletePark=function(e){v.deletePark(e).then(function(e){return a.loadParks()}).catch(function(e){return console.log(e)})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadParks()}},{key:"render",value:function(){return r.a.createElement("div",{className:"preview-item"},this.state.parks.length?r.a.createElement(k,null,this.state.parks.map(function(e){return r.a.createElement(N,{key:e._id},r.a.createElement("div",{className:"clearfix img-holder"},r.a.createElement("img",{src:e.image})),r.a.createElement("span",{className:"preview-span"},r.a.createElement(w,{name:e.parkName,image:e.image,description:e.description,age:e.age}),r.a.createElement("br",null),e.description,r.a.createElement("br",null),r.a.createElement("strong",null,"Recommended Age:  ")," ",e.age))})):r.a.createElement("h3",null,"No Results to Display"))}}]),t}(n.Component);a(119);var O=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("footer",{className:"footer mt-10 py-3"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"\xa9 PARKIFY APP - All rights reserved."))))};a(120);var j=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(E,null,r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(C,null)),r.a.createElement(O,null))},S=a(20),x=(a(121),a(18)),R=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},A=a(30),P=a.n(A),_=function(e){return{type:"SET_CURRENT_USER",payload:e}},T=function(){return function(e){localStorage.removeItem("jwtToken"),R(!1),e(_({}))}},U=a(5),I=a.n(U),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{}},a.onChange=function(e){a.setState(Object(S.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};a.props.loginUser(t)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors,t=this.state,a=t.username,n=t.password;return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{style:{fontWeight:"bolder",fontSize:"60px"}},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{fontWeight:"bolder"}},"Username:"),r.a.createElement("input",{name:"username",type:"text",className:I()("form-control",{invalid:e.username}),id:"username",error:e.isername,"aria-describedby":"username",placeholder:"Enter Username",value:a,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{fontWeight:"bolder"}},"Password:"),r.a.createElement("input",{name:"password",type:"password",className:I()("form-control",{invalid:e.password}),error:e.password,id:"password",placeholder:"Enter Password",value:n,onChange:this.onChange})),r.a.createElement("div",{className:"d-inline"},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-success mr-5 signIn"},"Sign In"),r.a.createElement(s.b,{to:"/signup",role:"button",className:"btn btn-secondary btn-success register"},"Register")))))),r.a.createElement("div",{className:"col-md-3"}))))}}]),t}(r.a.Component),W=Object(x.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){f.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),R(a);var n=P()(a);t(_(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(D),F=a(22),L=(a(125),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).onChange=function(t){e.setState(Object(S.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.name,password:e.state.password};e.props.registerUser(a,e.props.history)},e.state={username:"",password:"",errors:{}},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{style:{fontWeight:"bolder",fontSize:"60px"}},"Register An Account"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{fontWeight:"bolder"}},"Username:"),r.a.createElement("input",{name:"username",type:"text",className:I()("form-control",{invalid:e.username}),error:e.username,id:"username","aria-describedby":"username",placeholder:"Enter Username",value:this.state.username,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{fontWeight:"bolder"}},"Password:"),r.a.createElement("input",{name:"password",type:"password",id:"password",placeholder:"Enter Password",value:this.state.password,className:I()("form-control",{invalid:e.password}),onChange:this.onChange})),r.a.createElement("div",{className:"d-inline"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-success register"},"Register")))))),r.a.createElement("div",{className:"col-md-3"}))))}}]),t}(n.Component)),M=Object(x.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){f.a.post("/api/users/signup",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(F.g)(L)),B=(a(126),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={parkName:"",description:"",location:"",age:0,image:"",features:[{name:"swings",isChecked:!1},{name:"slides",isChecked:!1},{name:"monkey-bar",isChecked:!1},{name:"castle",isChecked:!1}],reviews:[]},a.handleInputChange=function(e){var t,n=e.target,r=n.name,l=n.value,c=a.state.features;c.forEach(function(t){t.name===e.target.name&&(t.isChecked=e.target.checked)}),a.setState((t={},Object(S.a)(t,r,l),Object(S.a)(t,"features",c),t)),console.log("MY NEW STATE",a.state)},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state),v.savePark(a.state),a.setState({parkName:"",description:"",location:"",age:0,image:"",features:[{name:"swings",isChecked:!1},{name:"slides",isChecked:!1},{name:"monkey-bar",isChecked:!1},{name:"castle",isChecked:!1}]})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(E,null,r.a.createElement(i,null),r.a.createElement("form",{className:"form-group mainBox"},r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Park Name",name:"parkName",value:this.state.parkName,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Location",name:"location",value:this.state.location,onChange:this.handleInputChange}),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"customCheck1",name:"swings",checked:this.state.features.isChecked,value:this.state.features.value,onClick:this.handleInputChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"customCheck1"},"Swings"),r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",name:"slides",checked:this.state.features.isChecked,value:this.state.features.value,onClick:this.handleInputChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"Slides"),r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",name:"monkey-bar",checked:this.state.features.isChecked,value:this.state.features.value,onClick:this.handleInputChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Monkey Bar"),r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",name:"castle",value:this.state.features.value,onChange:this.handleInputChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox4"}," Castle")),r.a.createElement("input",{className:"form-control description",type:"text",placeholder:"Description",name:"description",value:this.state.description,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control description",type:"number",placeholder:"Age",name:"age",value:this.state.age,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("p",null,"Upload Images"),r.a.createElement("input",{type:"file",onChange:this.fileChangedHandler}),r.a.createElement("button",{onClick:this.uploadHandler},"Upload!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleFormSubmit},"Submit"))))}}]),t}(n.Component)),H=a(21),z=a(66),G=a(41),V=a(127),X={isAuthenticated:!1,user:{},loading:!1},Y={},J=Object(H.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(G.a)({},e,{isAuthenticated:!V(t.payload),user:t.payload});case"USER_LOADING":return Object(G.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),K=[z.a],$=Object(H.e)(J,{},Object(H.d)(H.a.apply(void 0,K),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||H.d)),q=a(67),Q=Object(x.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(q.a)(e,["component","auth"]);return r.a.createElement(F.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(F.a,{to:"/login"})}}))}),Z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"landing-copy col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a full-stack"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," app \ud83d\udc4f")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"))))}}]),t}(n.Component),ee=Object(x.b)(function(e){return{auth:e.auth}},{logoutUser:T})(Z);if(localStorage.jwtToken){var te=localStorage.jwtToken;R(te);var ae=P()(te);$.dispatch(_(ae));var ne=Date.now()/1e3;ae.exp<ne&&($.dispatch(T()),window.location.href="./login")}var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{store:$},r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(F.b,{exact:!0,path:"/",component:j}),r.a.createElement(F.b,{exact:!0,path:"/review",component:B}),r.a.createElement(F.b,{exact:!0,path:"/login",component:W}),r.a.createElement(F.b,{exact:!0,path:"/signup",component:M}),r.a.createElement(F.d,null,r.a.createElement(Q,{exact:!0,path:"/dashboard",component:ee}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(128)},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.faf578e0.chunk.js.map