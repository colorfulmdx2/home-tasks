(this["webpackJsonphome-tasks"]=this["webpackJsonphome-tasks"]||[]).push([[0],[,,,,function(e,t,a){e.exports={container:"Links_container__35h6y",linksItem:"Links_linksItem__1_GWB",activeLink:"Links_activeLink__3seTg"}},,,,,,,,,function(e,t,a){e.exports={task:"Task_task__3N9Qg",container:"Task_container__qFd_p",importance:"Task_importance__3GhF5",taskMessage:"Task_taskMessage__2dhyK",button:"Task_button__3n0-U"}},function(e,t,a){e.exports={container:"message_container__1bPvL",avatar:"message_avatar__2eM8y",text:"message_text__rf79k",name:"message_name__kUIxG",message:"message_message__3ZRss",respond:"message_respond___kIZo",time:"message_time__3Ooiv"}},,,,function(e,t,a){e.exports={filter:"Filter_filter__16w9R",button:"Filter_button__1CvHN"}},function(e,t,a){e.exports={container:"Input_container__2UKWr",content:"Input_content__1oogB"}},,,,,function(e,t,a){e.exports={buttonRegular:"ButtonComponent_buttonRegular__rTsXw",buttonDelete:"ButtonComponent_buttonDelete__3fL8_"}},,,function(e,t,a){e.exports={todolist:"Todolist_todolist__2C57r"}},function(e,t,a){e.exports={input:"InputComponent_input__l6FWg",inputError:"InputComponent_inputError__2pDa8"}},,,,,function(e,t,a){e.exports=a.p+"static/media/background.9f27236c.jpg"},,,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),l=(a(41),a(33)),i=a.n(l),s=(a(42),a(14)),m=a.n(s),u=a(62),d=a(67),k=a(65),E=Object(u.a)((function(e){return Object(d.a)({root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(9),height:e.spacing(9)},backgroundColor:{background:"purple"}})})),p=function(e){var t=E();return r.a.createElement("div",{className:m.a.container},r.a.createElement(k.a,{src:"./assets/images/background.jpg",className:t.large},e.avatar),r.a.createElement("div",{className:m.a.text},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.message},e.message)),r.a.createElement("div",{className:m.a.respond},r.a.createElement("a",{href:"/"},"RESPOND")),r.a.createElement("div",{className:m.a.time},e.time))},_=a(4),v=a.n(_),b=a(5);var g=function(e){return r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{activeClassName:v.a.activeLink,to:"/homework1"},"Homework 1")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{activeClassName:v.a.activeLink,to:"/homework2"},"Homework 2")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{activeClassName:v.a.activeLink,to:"/homework3"},"Homework 3")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 4")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 5")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 6")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 7")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 8")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 9")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 10")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 11")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 12")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 13")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 14")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 15")),r.a.createElement("div",{className:v.a.linksItem},r.a.createElement(b.b,{to:"/"},"Homework 15")))},f=a(2),N=a(17),h=a(27),w=a.n(h),I=a(13),C=a.n(I);var H=function(e){return r.a.createElement("div",{className:C.a.task},r.a.createElement("div",{className:C.a.container},e.importance?r.a.createElement("div",{className:C.a.importance},"!!!"):r.a.createElement("div",{className:C.a.importance},"!"),r.a.createElement("div",{className:C.a.taskMessage},e.title),r.a.createElement("div",{className:C.a.deleteButton},r.a.createElement("button",{className:C.a.button,onClick:e.deleteTask},"Del"))))},y=a(66),j=a(18),O=a.n(j);var x=function(e){return r.a.createElement("div",{className:O.a.filter},r.a.createElement("button",{className:O.a.button,onClick:function(){e.changeFilter("all")}},"all"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.changeFilter("important")}},"important"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.changeFilter("unimportant")}},"unimportant"))};var T=function(e){var t=Object(n.useState)([{id:Object(y.a)(),title:"HTML&CSS",importance:!0},{id:Object(y.a)(),title:"JS",importance:!1},{id:Object(y.a)(),title:"ReactJS",importance:!1},{id:Object(y.a)(),title:"rest api",importance:!0},{id:Object(y.a)(),title:"graphQL",importance:!1}]),a=Object(N.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)("all"),i=Object(N.a)(l,2),s=i[0],m=i[1];return"important"===s&&(o=o.filter((function(e){return!0===e.importance}))),"unimportant"===s&&(o=o.filter((function(e){return!1===e.importance}))),r.a.createElement("div",{className:w.a.todolist},r.a.createElement("div",{className:w.a.tasksContainer},o.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.title,importance:e.importance,deleteTask:function(){return function(e){var t=o.filter((function(t){return t.id!==e}));c(t)}(e.id)}})}))),r.a.createElement(x,{changeFilter:function(e){m(e)}}))},L=a(19),F=a.n(L),S=a(28),B=a.n(S),R=function(e){return r.a.createElement("div",null,r.a.createElement("input",{placeholder:e.placeholder,onChange:function(t){e.onChangeHandler(t.currentTarget.value)},onKeyPress:function(t){13===t.charCode&&e.onKeyPressHandler()},value:e.value,className:e.errorStyle?B.a.inputError:B.a.input}))},D=a(24),K=a.n(D),M=function(e){return r.a.createElement("div",{className:K.a.button},r.a.createElement("button",{onClick:function(){e.onClickFunction()},className:e.deletestyle?K.a.buttonDelete:K.a.buttonRegular},e.title))};var P=function(e){Object(y.a)();var t=Object(n.useState)(""),a=Object(N.a)(t,2),o=a[0],c=a[1],l=function(){o.trim()?alert("Hello "+o.trim()+" !"):alert("Type something")};return r.a.createElement("div",{className:F.a.container},r.a.createElement("div",{className:F.a.content},r.a.createElement("div",{className:F.a.input},r.a.createElement(R,{value:o,onChangeHandler:function(e){c(e)},placeholder:"Type your name...",onKeyPressHandler:function(){l()},errorStyle:!0})),r.a.createElement("div",{className:F.a.button},r.a.createElement(M,{onClickFunction:l,deletestyle:!0,title:"+"}))))};var W=function(e){return r.a.createElement("div",{className:"parent",style:{backgroundImage:"url(".concat(i.a,")")}},r.a.createElement(g,null),r.a.createElement(f.a,{path:"/homework1",render:function(){return r.a.createElement(p,{avatar:"V",name:"Viki",message:"are u at home??",time:"21:44"})}}),r.a.createElement(f.a,{path:"/homework2",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(f.a,{path:"/homework3",render:function(){return r.a.createElement(P,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.1661270a.chunk.js.map