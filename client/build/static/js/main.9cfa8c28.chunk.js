(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),s=(a(39),a(40),a(11));a(41);var o=function(e){return l.a.createElement("div",{"container-fluid":!0},l.a.createElement("ul",{className:"nav navBar justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",role:"button",className:"btn btn-link"},l.a.createElement("span",{className:"nav-span",style:{color:"/"===window.location.pathname?"green":"white"}},"Home"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/login",role:"button",className:"btn btn-link"},l.a.createElement("span",{className:"nav-span",style:{color:"/login"===window.location.pathname?"green":"white"}},"Login"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/signup",role:"button",className:"btn btn-link"},l.a.createElement("span",{className:"nav-span",style:{color:"/signup"===window.location.pathname?"green":"white"}},"Sign Up")))))};a(46);var i=function(e){e.type,e.className;var t=e.onClick;return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",{style:{fontSize:"80px",color:"white"}},"Park Rangers"),l.a.createElement("p",{style:{fontSize:"40px",fontWeight:"bolder",color:"white"}},"Review local parks in your area"),l.a.createElement("button",{onClick:t,className:"btn btn-lg button mr-3 btn-success"},"See parks by age"),l.a.createElement("button",{onClick:t,className:"btn btn-lg button mr-3 btn-success"},"See parks by area"),l.a.createElement("button",{onClick:t,className:"btn btn-lg button btn-success"},"See parks by popularity"))};a(47);var m=function(e){e.type,e.className;var t=e.onClick;return l.a.createElement("div",{style:{marginRight:"2%"}},l.a.createElement("button",{onClick:t,className:"btn btn-lg all button mr-3 btn-success"},"All ages"),l.a.createElement("button",{onClick:t,className:"btn btn-lg twoFour button mr-3 btn-success"},"Age 2-4"),l.a.createElement("button",{onClick:t,className:"btn btn-lg fiveSeven button mr-3 btn-success"},"Age 5-7"),l.a.createElement("button",{onClick:t,className:"btn btn-lg eightNine button mr-3 btn-success"},"Age 8-9"),l.a.createElement("button",{onClick:t,className:"btn btn-lg tenTwelwe button mr-3 btn-success"},"Age 10-12"),l.a.createElement("button",{onClick:t,className:"btn btn-lg thirteen button mr-3 btn-success"},"Age 13+"))},u=a(6),d=a(7),h=a(9),p=a(8),b=a(10);a(48);function f(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function E(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function g(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var v=a(13),N=a.n(v),k={getParks:function(){return N.a.get("/api/parks")},getPark:function(e){return N.a.get("/api/parks/"+e)},deletePark:function(e){return N.a.delete("/api/parks/"+e)},savePark:function(e){return N.a.post("/api/parks",e)}},w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={parks:[],thumbnail:"",title:"",summary:"",href:"",appropriateAge:"",starRating:""},a.loadParks=function(){k.getParks().then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})},a.deletePark=function(e){k.deletePark(e).then(function(e){return a.loadParks()}).catch(function(e){return console.log(e)})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadParks()}},{key:"render",value:function(){return l.a.createElement("ul",null,l.a.createElement("li",{className:"list-group-item box1"},l.a.createElement(f,null,l.a.createElement(E,null,l.a.createElement(g,{size:"lg-4 lg-6"}),l.a.createElement(g,{size:"lg-4 lg-4"},l.a.createElement("h1",{style:{color:"white"}},"Link to the park page"))))))}}]),t}(n.Component);a(66);var y=function(){return l.a.createElement("footer",{className:"footer mt-auto py-3"},l.a.createElement("div",{className:"container"},l.a.createElement("span",{className:"text-muted"},"\xa9 PARKIFY APP - All rights reserved.")))};a(67);var C=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(i,null),l.a.createElement(m,null),l.a.createElement(w,null),l.a.createElement(y,null))},S=a(14),x=(a(68),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleInputChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n={username:t.username,password:t.password};N.a.post("/db/newuser",n).then(function(e){console.log("user#: "+e._id)}).catch(function(e){throw e})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"onSignIn",value:function(e){var t=this;e.preventDefault(),console.log("Sign in attempted..."),N.a.get("/db/finduser/"+this.state.username+"/"+this.state.password).then(function(e){!0===e.data.ans?(console.log("Signing in!"),t.props.authorize(e.data.data)):(alert("Sorry, nothing found. Try again, or create an account!"),t.setState({username:"",password:""}))}).catch(function(e){throw e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password;return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{style:{fontWeight:"bolder",fontSize:"60px"}},"Login"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{style:{fontWeight:"bolder"}},"Username:"),l.a.createElement("input",{name:"username",type:"text",className:"form-control",id:"username","aria-describedby":"username",placeholder:"Enter Username",value:a,onChange:this.handleInputChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{style:{fontWeight:"bolder"}},"Password:"),l.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"password",placeholder:"Enter Password",value:n,onChange:this.handleInputChange})),l.a.createElement("div",{className:"d-inline"},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-success mr-5 signIn",onClick:function(t){return e.onSignIn(t)}},"Sign In"),l.a.createElement(s.b,{to:"/signup",role:"button",className:"btn btn-secondary btn-success register"},"Register")))))),l.a.createElement("div",{className:"col-md-3"}))))}}]),t}(l.a.Component)),j=(a(69),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(S.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),alert("Username: ".concat(a.state.username,"\nPassword: ").concat(a.state.password)),a.setState({username:"",password:""})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{style:{fontWeight:"bolder",fontSize:"60px"}},"Register An Account"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{style:{fontWeight:"bolder"}},"Username:"),l.a.createElement("input",{name:"username",type:"text",className:"form-control",id:"username","aria-describedby":"username",placeholder:"Enter Username",value:this.state.username,onChange:this.handleInputChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{style:{fontWeight:"bolder"}},"Password:"),l.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("div",{className:"d-inline"},l.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-success register"},"Register")))))),l.a.createElement("div",{className:"col-md-3"}))))}}]),t}(n.Component)),I=(a(70),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",location:"",features:[],description:"",image:[]},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(S.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),alert("features: ".concat(a.state.features.text,"\ntitle: ").concat(a.state.title)),a.setState({title:"",location:"",features:[],description:"",image:[]})},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(f,null,l.a.createElement(o,null),l.a.createElement(i,null),l.a.createElement("form",{className:"form-group mainBox"},l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Title",name:"title",value:this.state.title,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Location",name:"location",value:this.state.location,onChange:this.handleInputChange}),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{type:"checkbox",className:"control-label",id:"customCheck1",name:"swings",value:this.state.features,onClickCapture:this.handleInputChange}),l.a.createElement("label",{className:"control-label",for:"customCheck1"},"Swings"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:this.state.features,onClickCapture:this.handleInputChange}),l.a.createElement("label",{className:"control-label",for:"inlineCheckbox1"},"Slides"),l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:this.state.features,onClickCapture:this.handleInputChange}),l.a.createElement("label",{className:"control-label",for:"inlineCheckbox3"},"Monkey Bar"),l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",value:this.state.features,onClickCapture:this.handleInputChange}),l.a.createElement("label",{className:"control-label",for:"inlineCheckbox4"},"3 Music")),l.a.createElement("input",{className:"form-control description",type:"text",placeholder:"Description",name:"description",value:this.state.description,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("p",null,"Upload Images"),l.a.createElement("div",{className:"custom-file uploadImages"},l.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",placeholder:"Please choose an image",name:"file",value:this.state.image,onChange:this.handleInputChange}),l.a.createElement("label",{className:"custom-file-label browseFile",for:"customFile"},"Choose file")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),t}(n.Component)),O=a(12);var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(O.a,{exact:!0,path:"/",component:C}),l.a.createElement(O.a,{exact:!0,path:"/review",component:I}),l.a.createElement(O.a,{exact:!0,path:"/login",component:x}),l.a.createElement(O.a,{exact:!0,path:"/signup",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.9cfa8c28.chunk.js.map