(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{25:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(18),i=a.n(s),c=(a(25),a(3)),o=a(4),l=a(6),u=a(5),p=a(19),d=a(2),j=a(0),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"NotFound",children:"Page Not Found"})}}]),a}(r.Component),b=a(11),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createtutorial=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:e.priceRef.current.value,status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addToturial(a),t.currentTarget.reset()},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"add-toturial-form",onSubmit:this.createtutorial,children:[Object(j.jsx)("input",{ref:this.nameRef,name:"name",type:"text",placeholder:"name"}),Object(j.jsx)("input",{ref:this.priceRef,name:"price",type:"text",placeholder:"price"}),Object(j.jsxs)("select",{ref:this.statusRef,name:"status",children:[Object(j.jsx)("option",{value:"available",children:"available"}),Object(j.jsx)("option",{value:"unavailable",children:"unavailable"})]}),Object(j.jsx)("textarea",{ref:this.descRef,name:"desc",placeholder:"describe"}),Object(j.jsx)("input",{ref:this.imageRef,name:"image",type:"text",placeholder:"image"}),Object(j.jsx)("button",{className:"create-tutorial",children:"create Tutorial"})]})}}]),a}(r.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){var a=Object(b.a)({},e.props.toturial);a[t.currentTarget.name]=t.currentTarget.value,e.props.updateForm(e.props.index,a)},e.changePic=function(t){var a=Object(b.a)({},e.props.toturial);a[t.currentTarget.name]="/images/".concat(t.currentTarget.files[0].name),e.props.updateForm(e.props.index,a),t.currentTarget.previousSibling.value="/images/".concat(t.currentTarget.files[0].name)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("form",{className:"add-toturial-form",onSubmit:this.createtutorial,children:[Object(j.jsx)("input",{onChange:this.handleChange,name:"name",type:"text",placeholder:"name",defaultValue:this.props.toturial.name}),Object(j.jsx)("input",{onChange:this.handleChange,name:"price",type:"text",placeholder:"price",defaultValue:this.props.toturial.price}),Object(j.jsxs)("select",{onChange:this.handleChange,name:"status",defaultValue:this.props.toturial.status,children:[Object(j.jsx)("option",{value:"available",children:"available"}),Object(j.jsx)("option",{value:"unavailable",children:"unavailable"})]}),Object(j.jsx)("textarea",{onChange:this.handleChange,name:"desc",placeholder:"describe",defaultValue:this.props.toturial.desc}),Object(j.jsx)("input",{onChange:this.handleChange,name:"image",type:"text",placeholder:"image",defaultValue:this.props.toturial.image}),Object(j.jsx)("input",{type:"file",name:"image",onChange:this.changePic}),Object(j.jsx)("button",{onClick:function(){e.props.deleteToturial(e.props.index)},children:"delete toturial"})]})}}]),a}(r.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"invintory",children:[Object(j.jsx)("h2",{children:"Invintory"}),Object.keys(this.props.toturials).map((function(t){return Object(j.jsx)(O,{toturial:e.props.toturials[t],updateForm:e.props.updateForm,index:t,deleteToturial:e.props.deleteToturial},t)})),Object(j.jsx)(m,{addToturial:this.props.addToturial}),Object(j.jsx)("button",{className:"load-sample",onClick:this.props.loadSample,children:"load sample"})]})}}]),a}(r.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).renderOrders=function(t){var a=e.props.toturials[t],r=e.props.order[t];return a&&"available"===a.status||a.name&&a.name,Object(j.jsxs)("li",{children:[r," toturial ",a.name," : price : ",a.price,Object(j.jsx)("span",{onClick:function(){e.props.removeFromOrder(t)},children:"\xd7"})]},t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var r=e.props.toturials[a],n=e.props.order[a];return r&&"available"===r.status?t+r.price*n:t}),0);return Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("h2",{children:"Order"}),Object(j.jsx)("ul",{children:t.map(this.renderOrders)}),Object(j.jsxs)("div",{className:"total",children:["total price : ",a]})]})}}]),a}(r.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:"tutorials"})}}]),a}(r.Component),x={learn1:{name:"javascript",image:"/images/javascript.png",desc:"javascript is a nice programming language.",price:5e4,status:"available"},learn2:{name:"React",image:"/images/react.png",desc:"We are learning react.",price:18e4,status:"available"},learn3:{name:"Angular",image:"/images/angular.png",desc:"Angular is a good framework",price:8e4,status:"unavailable"},learn4:{name:"Nodejs",image:"/images/nodejs.png",desc:"Nodejs is nice for backend. ",price:2e5,status:"available"},learn5:{name:"PHP",image:"/images/php.png",desc:"maybe next time we will learn php",price:12e4,status:"available"},learn6:{name:"HTML & CSS",image:"/images/htmlcss.png",desc:"We need for UI",price:7e4,status:"available"},learn7:{name:"Bootstrap4",image:"/images/bootstrap4.png",desc:"One of the best css framework",price:125e3,status:"available"}},y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handeClick=function(){e.props.addToOrder(e.props.index)},e.enter=function(e){e.currentTarget.innerHTML="new Text"},e.leave=function(t){t.currentTarget.innerHTML=e.props.details.name},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.name,a=e.image,r=e.desc,n=e.price,s="available"===e.status;return Object(j.jsxs)("div",{className:"single-toturial",children:[Object(j.jsx)("img",{src:a}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("h2",{className:"tutorial-name",children:[Object(j.jsx)("span",{onMouseEnter:this.enter,onMouseLeave:this.leave,children:t}),Object(j.jsx)("span",{className:"price",children:n})]}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("button",{onClick:this.handeClick,disabled:!s,className:"add-to-order",children:s?"Add To Order":"Sold Out"})]})]})}}]),a}(r.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={toturials:{},order:{}},e.addToturial=function(t){var a=Object(b.a)({},e.state.toturials);a["toturial".concat(Date.now())]=t,e.setState((function(){return{toturials:a}}))},e.loadSample=function(){e.setState((function(){return{toturials:x}}))},e.addToOrder=function(t){var a=Object(b.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(b.a)({},e.state.order);delete a[t],e.setState({order:a})},e.updateForm=function(t,a){var r=Object(b.a)({},e.state.toturials);r[t]=a,e.setState({toturials:r})},e.deleteToturial=function(t){var a=Object(b.a)({},e.state.toturials);delete a[t],e.setState({toturials:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"tutorials-app",children:[Object(j.jsxs)("div",{className:"tutorials",children:[Object(j.jsx)(g,{}),Object(j.jsx)("ul",{children:Object.keys(this.state.toturials).map((function(t){return Object(j.jsx)(y,{details:e.state.toturials[t],addToOrder:e.addToOrder,index:t},t)}))})]}),Object(j.jsx)(v,{removeFromOrder:this.removeFromOrder,toturials:this.state.toturials,order:this.state.order}),Object(j.jsx)(f,{deleteToturial:this.deleteToturial,updateForm:this.updateForm,toturials:this.state.toturials,addToturial:this.addToturial,loadSample:this.loadSample})]})}}]),a}(r.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).myInput=n.a.createRef(),e.goToShop=function(t){console.log(e.props),t.preventDefault();e.myInput.current.value;e.props.history.push("/shop/urlPath")},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"shop-from",onSubmit:this.goToShop,children:[Object(j.jsx)("h2",{children:"Enter Shop Name"}),Object(j.jsx)("input",{required:!0,ref:this.myInput,type:"text",placeholder:"Shop Name"}),Object(j.jsx)("button",{children:"Visit Shop"})]})}}]),a}(r.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)(p.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:C}),Object(j.jsx)(d.a,{path:"/shop/:shopId",component:T}),Object(j.jsx)(d.a,{component:h})]})})}}]),a}(r.Component);i.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d44e1d63.chunk.js.map