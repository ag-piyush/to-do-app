(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(13),n(1)),l=n(2),u=n(4),s=n(3);n(14);var d=function(){return o.a.createElement("footer",null,o.a.createElement("p",{className:"copyright"},"\xa9 2020, Made with \u2665 ",o.a.createElement("a",{href:"https://github.com/ag-piyush"},"Piyush Agarwal")))};var m=function(){var e,t,n=(new Date).getHours();n<12?(e="morning",t="white"):n<17?(e="afternoon",t="orange"):n<22?(e="evening",t="purple"):(e="night",t="black");var a={color:t};return o.a.createElement("header",{className:"navbar",style:a},"Hey! Good ",e)};n(15);var h=function(){return o.a.createElement("div",{id:"loader-wrapper",className:"trans"},o.a.createElement("div",{id:"loader"}))},p=n(5),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).completedStyle={fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:this.props.item.completed,onChange:function(){return e.props.handleChange(e.props.item.id)}}),o.a.createElement("p",{style:this.props.item.completed?this.completedStyle:null},this.props.item.text))}}]),n}(o.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={todos:[]},e.addItem=e.addItem.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=this.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));this.setState((function(){return{todos:t}}))}},{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,id:Date.now(),completed:!1};this.setState((function(e){return{todos:e.todos.concat(t)}})),this._inputElement.value=""}console.log(this.state.todos),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(v,{key:t.id,item:t,handleChange:e.handleChange})}));return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.addItem},o.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"Insert your text!"}),o.a.createElement("button",{type:"submit"},"Add Task!")),o.a.createElement("div",{className:"todo-list"},t))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={isLoading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLoading?o.a.createElement(h,null):o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(f,null),o.a.createElement(d,null)))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.1754c446.chunk.js.map